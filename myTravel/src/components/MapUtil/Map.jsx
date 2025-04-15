import { useEffect, useState } from "react";
import {Map, MapMarker} from "react-kakao-maps-sdk";
const KakaoMap = () => {
    const [mapLoad, setMapLoad] = useState(false);
    const [markerPosition, setMarkerPosition] = useState(null);


    useEffect(() => {
        if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
                setMapLoad(true);
            });
        }
    }, []);

    if (!mapLoad) return <div>지도 로딩 중...</div>;
    return (
        <Map
            center={{ lat: 36.34919223450624, lng: 127.3775870994268 }}
            style={{ width: "100vw", height: "100%" }}
            level={3}
            onClick={(map, event) => {
                const latlng = event.latLng;
                setMarkerPosition({
                    lat: latlng.getLat(),
                    lng: latlng.getLng(),
                })
                console.log(event.latLng.getLat(), event.latLng.getLng());
            }}
        >
            {markerPosition && (
                <MapMarker position={markerPosition}>
                <div style={{ color: "#000" }}>
                    <h4>pick</h4>
                </div>
            </MapMarker>
            )}

        </Map>
    );
};

export default KakaoMap;

