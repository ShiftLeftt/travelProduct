import {useState, useEffect, useCallback} from "react";



// center와 radius 추가 (반경으로 검색하기 위해)
export function useSearch(keyword, map, center, radius = 5000) {
    const [places, setPlaces] = useState([]);
    const [pagination, setPagination] = useState(null);


    const searchPage = useCallback(page => {
        if (!keyword?.trim() || !map || !center) {
            setPlaces([]);
            setPagination(null);
            return;
        }
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(keyword, (data, status, pagination) => {
                if (status === window.kakao.maps.services.Status.OK) {
                    setPlaces(data);
                    setPagination(pagination);
                }
            },
            {
                location: new window.kakao.maps.LatLng(center.lat, center.lng),
                radius,
                page,
            }
        );

    },[keyword, map]);

    useEffect(() => {
        searchPage(1);
    }, [searchPage]);
    return { places, pagination, searchPage };
}