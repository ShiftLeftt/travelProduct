
import React, { useEffect, useState, useContext } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { LocationContext } from '../../contexts/LocationContext';
import {regionOfficeMap} from "../../functions/regionCities.js";


export default function KakaoMap() {
    const { selectedRegion, selectedCity, searchKeyword, map,setMap, center, setCenter,infoIndex,setInfoIndex, setZoomLevel, zoomLevel } = useContext(LocationContext);


    const [mapLoad, setMapLoad] = useState(false);
    const [markers, setMarkers] = useState([]);
    const [cityBounds, setCityBounds] = useState(null);
    const [page, setPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]);
    const [searchPagination, setSearchPagination] = useState(null);


    // SearchList에서 클릭한 요소, 검색 리스트 클릭이벤트 상태값
    const{focusMarker} = useContext(LocationContext)


    useEffect(() => {
        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => setMapLoad(true));
        }
    }, []);

    useEffect(() => {
        if (!mapLoad || !map) return;
        let address = selectedCity || regionOfficeMap[selectedRegion] || '';
        if (!address) return;
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, (res, status) => {
            if (status === window.kakao.maps.services.Status.OK && res[0]) {
                const { y, x } = res[0];
                setCenter({ lat: parseFloat(y), lng: parseFloat(x) });
            }
        });
    }, [selectedRegion, selectedCity, mapLoad, map]);

    useEffect(() => {
        if (!mapLoad || !map) return;
        const kw = (searchKeyword || '').trim();
        if (!kw || !selectedCity) {
            setMarkers([]);
            return;
        }




        const ps = new window.kakao.maps.services.Places();

        const selectQuery = `${kw} ${selectedCity}`;
        ps.keywordSearch(selectQuery, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                const bounds = new window.kakao.maps.LatLngBounds();
                const filteredData = data.filter(place =>{
                    return place.address_name.includes(selectedCity) ||
                    place.road_address_name.includes(selectedRegion);
                })
                const newMarkers = data.map(p => {
                    const lat = parseFloat(p.y);
                    const lng = parseFloat(p.x);
                    bounds.extend(new window.kakao.maps.LatLng(lat, lng));
                    return { position: { lat, lng }, title: p.place_name, place:p};
                });
                setMarkers(newMarkers);

                if(newMarkers.length > 0 ){
                    map.setBounds(bounds);
                }
                map.setBounds(bounds);
            } else {
                setMarkers([]);
            }
        }, { bounds: cityBounds, page });

    }, [searchKeyword, mapLoad, map, selectedCity, selectedRegion, cityBounds]);

    if (!mapLoad) return <div>지도 로딩 중...</div>;

    return (
        //1. 맵에 줌 레벨 주고
        <Map center={center}  level={zoomLevel} style={{ flex: 1, height: '100%' }}onCreate={mapInstanc => {setMap(mapInstanc)} }>
            <MapMarker position={center} />
            {markers.map((m, i) => (
                <MapMarker key={i} position={m.position}
                           title={m.title}
                           //2. 클릭이벤트에 해당 마커에 대한 줌 주고 정보 툴팁 띄우기 줌 레벨은 작을수록 가까이 보임
                           onClick={() => {
                                setInfoIndex(i);
                                setZoomLevel(1);
                                setCenter(m.position);
                           }}>
                    {infoIndex === i || focusMarker === i && (
                        <div style={{ background: '#fff', padding: '5px', borderRadius: '5px', whiteSpace: 'pre-line', fontSize: '12px', maxWidth:`20rem` }}>
                            <h4>{m.title}</h4>
                            <p>{m.place.address_name}</p>
                            <p>{m.place.phone || "번호 없음"}</p>
                            <p>{m.place.road_address_name}</p>
                        </div>
                    )}



                </MapMarker>

            ))}
        </Map>
    );
}