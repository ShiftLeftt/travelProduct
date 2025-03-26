import React from "react";
import styles from "./TravelScroll.module.css";

// DB 연동을 위한 선작업
// travelSchedule은 DB에서 가져온 데이터로 가정, props 전달 함 !
const TravelScroll = ({travelSchedules}) =>{
    return(
        <div className={styles.TravelScroll}>
            {/*index도 같이 받아서 db의 index에 맞춤*/}
            {travelSchedules.map((day, idx)=>(
                <div key={idx} className={styles.daySection}>
                    {/* index는 0부터 시작함 */}
                    <h3>{idx + 1} 일차 </h3>
                    <div className={styles.horizontalTimeline}>
                        {day.places.map((place, placeIndex) => (
                            <div key={placeIndex} className={styles.point}>
                                <div className={styles.dot}></div>
                                <div className={styles.placeName}>{place}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
</div>
    );
}
export default TravelScroll;

// 스케줄이 이런 식으로 받아와졌을 때
// const schedules = [
//         day: 1,
//         places: [
//             "도시철도 3호선 구포역 3번 출구",
//             "구포장터 3.1운동 기념비",
//             "구포은행",
//         ],
//     },
//     {
//         day: 2,
//         places: [
//             "구포만세거리",
//             "구포시장",
//            "구포해수욕장",
//         ],
//     },
//     {
//         day: 3,
//         places: ["도시철도 2호선 덕천역 1번 출구"],
//     },
// ];