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
  const [selectedCity, setSelectedCity] = useState("");
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

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
    "특별시",
    "광역시",
    "특별자치시",
    "충청북도",
    "충청남도",
    "경기도",
    "전라북도",
    "전라남도",
    "강원특별자치도",
    "경상북도",
    "경상남도",
    "제주특별자치도",
  ];

  const regionCities = {
    특별시: ["서울특별시"],
    광역시: ["광주광역시", "대구광역시", "대전광역시", "부산광역시", "울산광역시", "인천광역시"],
    특별자치시: ["세종특별자치시"],
    경기도: [
      "고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시",
      "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시",
      "안성시", "안양시", "양주시", "여주시", "오산시", "용인시", "의왕시",
      "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시"
    ],
    충청북도: ["제천시", "청주시", "충주시"],
    충청남도: ["공주시", "논산시", "당진시", "보령시", "서산시", "아산시", "계룡시", "천안시"],
    전라북도: ["군산시", "김제시", "남원시", "전주시", "정읍시", "익산시"],
    전라남도: ["광양시", "나주시", "목포시", "순천시", "여수시"],
    강원특별자치도: ["강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시"],
    경상북도: ["경산시", "경주시", "구미시", "김천시", "문경시", "상주시", "안동시", "영주시", "영천시", "포항시"],
    경상남도: ["거제시", "김해시", "밀양시", "사천시", "양산시", "창원시", "진주시", "통영시"],
    제주특별자치도: ["서귀포시", "제주시"]
  };

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
            <img
              src={isBoxVisible ? "/img/leftArrow.svg" : "/img/rightArrow.svg"}
              alt="arrow icon"
            />
          </button>
        </div>

        <div className={`${style.travelPlanBox} ${isBoxVisible ? style.travelPlanBoxVisible : ""}`}>
          <div className={style.travelPlanBoxContent}>
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
                  formatMonthYear={(locale, date) => `${date.getFullYear()}년 ${date.getMonth() + 1}월`}
                  formatShortWeekday={(locale, date) => ["일", "월", "화", "수", "목", "금", "토"][date.getDay()]}
                  tileClassName={({ date }) => {
                    if (!Array.isArray(selectedDates) || selectedDates.length !== 2) return null;
                    const [start, end] = selectedDates;
                  
                    const isSameDay = (d1, d2) =>
                      d1.getFullYear() === d2.getFullYear() &&
                      d1.getMonth() === d2.getMonth() &&
                      d1.getDate() === d2.getDate();
                    if (isSameDay(date, start)) return "rangeStart";
                    if (isSameDay(date, end)) return "rangeEnd";
                    if (date > start && date < end) {
                      const nextToStart = new Date(start);
                      nextToStart.setDate(start.getDate() + 1);
                      const prevToEnd = new Date(end);
                      prevToEnd.setDate(end.getDate() - 1);
                      if (isSameDay(date, nextToStart)) return "inRange leftRounded";
                      if (isSameDay(date, prevToEnd)) return "inRange rightRounded";
                      return "inRange";
                    }
                    return null;
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

            <div className={style.select}>
              <div className={style.regionSelect}>
                <h1>지역 선택</h1>
                <button
                  className={style.regionToggle}
                  onClick={() => {
                    setIsRegionDropdownOpen((prev) => !prev);
                    setIsCityDropdownOpen(false);
                  }}
                >
                  <span>{selectedRegion || "지역"}</span>
                  <img
                    src={isRegionDropdownOpen ? "/img/collapseBtn.svg" : "/img/dropdownBtn.svg"}
                    alt="dropdown button"
                    className={style.dropdownIcon}
                  />
                </button>
                {isRegionDropdownOpen && (
                  <div className={style.regions}>
                    {regions.map((region) => (
                      <button
                        key={region}
                        onClick={() => {
                          setSelectedRegion(region);
                          setSelectedCity("");
                          setIsRegionDropdownOpen(false);
                        }}
                      >
                        {region}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className={style.citySelect}>
                <h1 style={{ visibility: "hidden" }}>도시 선택</h1>
                <button
                  className={style.cityToggle}
                  onClick={() => {
                    if (!selectedRegion) return;
                    setIsCityDropdownOpen((prev) => !prev);
                    setIsRegionDropdownOpen(false);
                  }}
                  disabled={!selectedRegion}
                >
                  <span>{selectedCity || "도시"}</span>
                  <img
                    src={isCityDropdownOpen ? "/img/collapseBtn.svg" : "/img/dropdownBtn.svg"}
                    alt="dropdown button"
                    className={style.cityDropdownIcon}
                  />
                </button>
                {selectedRegion && isCityDropdownOpen && (
                  <div className={style.cityList}>
                    {regionCities[selectedRegion]?.map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          setSelectedCity(city);
                          setIsCityDropdownOpen(false);
                        }}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button className={style.nextBtn}>다음 단계</button>
          </div>
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