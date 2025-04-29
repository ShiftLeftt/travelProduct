
import React, { useEffect, useState, useContext } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { LocationContext } from '../../contexts/LocationContext';
import {regionOfficeMap} from "../../functions/regionCities.js";


export default function KakaoMap() {
    const { selectedRegion, selectedCity, searchKeyword, map,setMap, center, setCenter } = useContext(LocationContext);

    const [mapLoad, setMapLoad] = useState(false);
    const [markers, setMarkers] = useState([]);
    const [cityBounds, setCityBounds] = useState(null);

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
                map.setBounds(bounds);
            } else {
                setMarkers([]);
            }
        }, { bounds: cityBounds });

    }, [searchKeyword, mapLoad, map, selectedCity, selectedRegion, cityBounds]);

    if (!mapLoad) return <div>지도 로딩 중...</div>;

    return (
        <Map center={center} level={4} style={{ flex: 1, height: '100%' }}onCreate={mapInstanc => {setMap(mapInstanc)} }>
            <MapMarker position={center} />
            {markers.map((m, i) => (
                <MapMarker key={i} position={m.position} title={m.title} />
            ))}
        </Map>
    );
}