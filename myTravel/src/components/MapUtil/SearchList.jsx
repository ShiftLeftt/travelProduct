import styles from './SearchList.module.css';



export default function SearchList({ places,onItemHover, pagination, onAdd }) {

  const noResults = !pagination && places.length === 0;

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