import {useState, useEffect} from "react";

export function useSearch(keyword, map) {
    const [places, setPlaces] = useState([]);
    const [pagination, setPagination] = useState( null);

    useEffect(() => {

        if(!keyword?.trim() || !map){
            setPlaces([]);
            setPagination(null);
            return;
        }
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(keyword, (data, status, pagination) => {
            if(status === window.kakao.maps.services.Status.OK){
                setPlaces(data);
                setPagination(pagination);
            }
        });

    }, [keyword, map]);
    return { places, pagination };
}