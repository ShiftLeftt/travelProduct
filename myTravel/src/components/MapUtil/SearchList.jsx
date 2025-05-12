import styles from './SearchList.module.css';
import { useContext } from 'react';
import {LocationContext} from '../../contexts/LocationContext.jsx'


export default function SearchList({ places,onItemHover, pagination, onAdd, onPageChange, markers}) {

  const noResults = !pagination && places.length === 0;
  const {setFocusMarker,setCenter,setZoomLevel,setInfoIndex} = useContext(LocationContext);

    return (

        <div className={styles.resultsWrap}>
          {noResults
            ? <div className={styles.noResults}>검색해주세요.</div>
            : (
                <>
                <ul className={styles.placesList}>
                  {places.map((p, i) => (
                      <li
                          key={p.id || i}
                          className={styles.item}
                          onMouseOver={() => onItemHover(p, i)}
                          onMouseOut={() => onItemHover(null, null)}
                          // 클릭된 요소 저장
                          onClick={() => {
                            const markerIndex = markers.findIndex(m => m.title === p.place_name);
                            setFocusMarker({ index: markerIndex, marker: p }); // 객체 저장
                            onItemHover(p, markerIndex);
                          }}
                      >
                        <div className={styles.info}>
                        <strong>{p.place_name}</strong><br/>
                        <small>{p.road_address_name || p.address_name}</small><br/>
                        <small>{p.phone}</small>
                        </div>
                        <button className={styles.addBtn} onClick={() => onAdd(p)}>
                          +
                        </button>


                      </li>

                  ))}
                </ul>
                <div>
                  {pagination && (
                      <div className={styles.pagination}>
                        {Array.from({ length: pagination.last }, (_, idx) => (
                            <button
                                key={idx}
                                className={pagination.current === idx + 1 ? styles.on : ''}
                                onClick={() => onPageChange(idx + 1)}
                            >
                              {idx + 1}
                            </button>
                        ))}
                      </div>
                  )}
                </div>


                </>
              )
          }

        </div>
    );

}