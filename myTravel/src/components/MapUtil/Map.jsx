import { useEffect, useState, useContext} from "react";
import {Map, MapMarker} from "react-kakao-maps-sdk";
import { LocationContext } from '../../contexts/LocationContext.jsx';

const KakaoMap = () => {
    //context에서 현재 선택된 지역이랑 도시 가져오기
    const {selectedRegion, selectedCity, searchKeyword} = useContext(LocationContext);
    const [map, setMap] = useState(null);
    const [mapLoad, setMapLoad] = useState(false);
    const [markerPosition, setMarkerPosition] = useState(null);
    // 마커 기준점, 오라클빌딩으로 해놈
    const [center, setCenter] = useState({
        lat: 36.34919223450624,
        lng: 127.3775870994268,
    });
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
                setMapLoad(true);
            });
        }
    }, []);

    // 검색한 도시 시청이나 도청으로 이동
    useEffect(() => {
        if(!mapLoad || !map)  return;
        const address = selectedCity ?
            `${selectedCity} 청`
            : selectedRegion ?
                `${selectedRegion} 청` : null;
        if (!address) return;

        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, (result, status) => {
            if(status === window.kakao.maps.services.Status.OK && res[0]){
                const {y, x} = result[0];
                const coords = {lat:parseFloat(y), lng:parseFloat(x)};
                setCenter(coords);
                // 기존의 pick 마커는 그대로 두고, 키워드 검색 결과 마커만 따로
            }
        });
    }, [selectedRegion, selectedCity,mapLoad]);


    useEffect(() => {
        if (!mapLoad || !map) return;
        if (!searchKeyword.trim()) {
            setMarkers([]);
            return;
        }


        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(searchKeyword, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                const bounds = new window.kakao.maps.LatLngBounds();
                const newMarkers = data.map(item => {
                    const lat = parseFloat(item.y);
                    const lng = parseFloat(item.x);
                    bounds.extend(new window.kakao.maps.LatLng(lat, lng));
                    return {
                        position: { lat, lng },
                        title: item.place_name,
                    };
                });
                setMarkers(newMarkers);
                map.setBounds(bounds);   // 검색 결과 전체가 보이도록 지도 범위 조정
            }
        });
    }, [searchKeyword, mapLoad, map]);




        if (!mapLoad) return <div>지도 로딩 중...</div>;
    return (
        <Map
            center={center}
            level={4}
            style={{ width: "100vw", height: "100%", borderRadius: "1rem" }}
            onCreate={setMap}
        >
            {/* 클릭해서 임의 위치도 찍고 싶으면 여기에 추가 */}
             {markerPosition && <MapMarker position={markerPosition}>…</MapMarker>}

            {/* 키워드 검색 결과 마커 */}
            {markers.map((m, i) => (
                <MapMarker key={i} position={m.position}>
                    <div style={{ padding: "4px", background: "#fff", borderRadius: "4px" }}>
                        {m.title}
                    </div>
                </MapMarker>
            ))}
        </Map>
    );
};

export default KakaoMap;

