import React, { useState } from "react";
import Calendar from "react-calendar"; 
import "./travelPlan.calender.css"; 
import style from "./travelPlan.module.css";
import "../../styles/common.css";
import "../../styles/reset.css";

function TravelPlan() {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(""); 
  const [isRegionListVisible, setIsRegionListVisible] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const toggleBox = () => {
    setIsBoxVisible((prev) => !prev);
  };

  const handleDateChange = (date) => {
    setSelectedDates(Array.isArray(date) ? date : [date]); 
  };

  const formatDate = (date) => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dayOfWeek = days[date.getDay()];
    return `${year}.${month}.${day} ${dayOfWeek}요일`;
  };

  const getDuration = () => {
    if (selectedDates.length === 2) {
      const [start, end] = selectedDates;
      const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24)); 
      return `${diff}박 ${diff + 1}일 일정`;
    }
    return "";
  };

  const regions = [
    "서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", 
    "대전광역시", "울산광역시", "세종특별자치시", "충청도", "경기도", 
    "전라도", "강원도", "경상도", "제주특별자치도"
  ];

  return (
    <div className={style.travelPlan} style={{ position: "relative" }}>
      <div>
        <div className={style.travelPlanTitle}>
          <p>
            고객님, <br />
            <span>
              어떤 여행을 <br />
              계획하시나요?
            </span>
          </p>
          <button onClick={toggleBox}>
            <img src={isBoxVisible ? "/img/leftArrow.svg" : "/img/rightArrow.svg"} alt="arrow icon" />
          </button>
        </div>

        <div className={`${style.travelPlanBox} ${isBoxVisible ? style.travelPlanBoxVisible : ""}`}>
          <div className={style.scheduleBox}>
            <div className={style.scheduleText}>
              <h1>Journee와 함께 떠나는</h1>
              <p>여행 기간이 어떻게 되시나요?</p>
            </div>

            <div className={style.calendar}>
              <Calendar
                onChange={handleDateChange}
                value={selectedDates}
                selectRange={true} 
                formatDay={(locale, date) => date.getDate()}
                next2Label={null} 
                prev2Label={null}
                locale="en-US"
                formatMonthYear={(locale, date) =>
                  `${date.getFullYear()}년 ${date.getMonth() + 1}월`
                }
                formatShortWeekday={(locale, date) =>
                  ["일", "월", "화", "수", "목", "금", "토"][date.getDay()]
                }
                tileClassName={({ date }) => {
                  if (!Array.isArray(selectedDates) || selectedDates.length === 0) return null;
              
                  const [start, end] = selectedDates;
                  const isSelected = start && end && date >= start && date <= end;
              
                  return isSelected ? style.selectedDate : null;
                }}
              />
              <div className={style.calendarDivider}></div>
            </div>

            {selectedDates.length === 2 && (
              <div className={style.selectedDateInfo}>
                <p>
                  {formatDate(selectedDates[0])} ~ {formatDate(selectedDates[1])}
                </p>
                <span className={style.selectedDatePoint}>{getDuration()}</span>
              </div>
            )}
          </div>

          <div className={style.regionSelect}>
            <h1>지역 선택</h1>
            <button 
              className={style.regionToggle} 
              onClick={() => {
                setIsRegionListVisible((prev) => !prev);
                setIsDropdownOpen((prev) => !prev);
              }}
            >
              <span>{selectedRegion || "지역"}</span>
              <img 
                src={isDropdownOpen ? "/img/collapseBtn.svg" : "/img/dropdownBtn.svg"} 
                alt="dropdown button" 
                className={style.dropdownIcon} 
              />
            </button>
            {isRegionListVisible && (
              <div className={style.regions}>
                {regions.map((region) => (
                  <button 
                    key={region} 
                    onClick={() => {
                      setSelectedRegion(region);
                      setIsRegionListVisible(false);
                      setIsDropdownOpen(false); 
                    }}
                  >
                    {region}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className={style.nextBtn}>
            다음 단계
          </button>
        </div>

        <div className={style.travelPlanMainBtn}>
          <button onClick={toggleBox}>여행 계획 시작하기</button>
        </div>

        <div className={style.liveSearch}>
          <h3>실시간 인기검색어</h3>
          <ul>
            <li>1. 삼척정월대보름제</li>
            <li>2. 태백겨울축제</li>
            <li>3. 논산 딸기 축제</li>
            <li>4. 청평 설빙 송어빙어 축제</li>
            <li>5. 별빛이 흐르는 정원</li>
          </ul>
        </div>
      </div>

      <div className={style.bannerImgWrap}>
        <img src="/img/Journee_banner01.webp" alt="" />
        <img src="/img/Journee_banner02.webp" alt="" />
        <img src="/img/Journee_banner03.webp" alt="" />
      </div>
    </div>
  );
}

export default TravelPlan;
