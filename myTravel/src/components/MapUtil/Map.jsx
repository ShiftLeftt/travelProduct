// src/components/MapUtil/Map.jsx
import React, { useEffect, useState, useContext } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { LocationContext } from '../../contexts/LocationContext';

const regionOfficeMap = {
    // … 앞서 드린 매핑 객체 그대로 …
};

export default function KakaoMap() {
    const { selectedRegion, selectedCity, searchKeyword } = useContext(LocationContext);
    const [map, setMap] = useState(null);
    const [mapLoad, setMapLoad] = useState(false);
    // 기본 좌표: 대전광역시
    const [center, setCenter] = useState({ lat: 36.3504119, lng:127.3845475 });
    const [markers, setMarkers] = useState([]);

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
        if (!kw) {
            setMarkers([]);
            return;
        }
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(kw, (data, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
                const bounds = new window.kakao.maps.LatLngBounds();
                const newMarkers = data.map(p => {
                    const lat = parseFloat(p.y);
                    const lng = parseFloat(p.x);
                    bounds.extend(new window.kakao.maps.LatLng(lat, lng));
                    return { position: { lat, lng }, title: p.place_name };
                });
                setMarkers(newMarkers);
                map.setBounds(bounds);
            }
        });
    }, [searchKeyword, mapLoad, map]);

    if (!mapLoad) return <div>지도 로딩 중...</div>;

    return (
        <Map center={center} level={4} style={{ flex: 1, height: '100%' }} onCreate={setMap}>
            <MapMarker position={center} />
            {markers.map((m, i) => (
                <MapMarker key={i} position={m.position} title={m.title} />
            ))}
        </Map>
    );
}