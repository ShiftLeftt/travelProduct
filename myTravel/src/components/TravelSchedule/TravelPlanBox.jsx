import React from "react";
import Calendar from "react-calendar";
import styles from "./travelPlanBox.module.css";
import "./travelPlanBox.calender.css";
import "../../styles/common.css";
import "../../styles/reset.css";

function TravelPlanBox({
  selectedDates,
  setSelectedDates,
  selectedRegion,
  setSelectedRegion,
  selectedCity,
  setSelectedCity,
  isRegionDropdownOpen,
  setIsRegionDropdownOpen,
  isCityDropdownOpen,
  setIsCityDropdownOpen,
  step,
  setStep,
  searchKeyword,
  setSearchKeyword,
  activeTab,
  setActiveTab,
  tab,
  setTab,
  handleSearch,
  formatDate,
  getDuration,
}) {
  const regions = [
    "특별시", "광역시", "특별자치시", "충청북도", "충청남도",
    "경기도", "전라북도", "전라남도", "강원특별자치도",
    "경상북도", "경상남도", "제주특별자치도",
  ];

  const regionCities = {
    특별시: ["서울특별시"],
    광역시: ["광주광역시", "대구광역시", "대전광역시", "부산광역시", "울산광역시", "인천광역시"],
    특별자치시: ["세종특별자치시"],
    경기도: ["고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "여주시", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시"],
    충청북도: ["제천시", "청주시", "충주시"],
    충청남도: ["공주시", "논산시", "당진시", "보령시", "서산시", "아산시", "계룡시", "천안시"],
    전라북도: ["군산시", "김제시", "남원시", "전주시", "정읍시", "익산시"],
    전라남도: ["광양시", "나주시", "목포시", "순천시", "여수시"],
    강원특별자치도: ["강릉시", "동해시", "삼척시", "속초시", "원주시", "춘천시", "태백시"],
    경상북도: ["경산시", "경주시", "구미시", "김천시", "문경시", "상주시", "안동시", "영주시", "영천시", "포항시"],
    경상남도: ["거제시", "김해시", "밀양시", "사천시", "양산시", "창원시", "진주시", "통영시"],
    제주특별자치도: ["서귀포시", "제주시"]
  };

  const PlaceList = () => <ul><li>명소</li></ul>;
  const FoodList = () => <ul><li>음식</li></ul>;
  const CafeList = () => <ul><li>카페</li></ul>;

  return (
    <div className={`${styles.travelPlanBox} ${step ? styles.travelPlanBoxVisible : ""}`}>
      <div className={styles.travelPlanBoxContent}>
        {step === 1 && (
          <div>
            <div className={styles.scheduleText}>
              <h1>Journee와 함께 떠나는</h1>
              <p>여행 기간이 어떻게 되시나요?</p>
            </div>

            <div className={styles.calendar}>
              <Calendar
                onChange={(date) => setSelectedDates(Array.isArray(date) ? date : [date])}
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
              <div className={styles.calendarDivider}></div>
            </div>

            {selectedDates.length === 2 && (
              <div className={styles.selectedDateInfo}>
                <p>{formatDate(selectedDates[0])} ~ {formatDate(selectedDates[1])}</p>
                <span className={styles.selectedDatePoint}>{getDuration()}</span>
              </div>
            )}

            <div className={styles.select}>
              <div className={styles.regionSelect}>
                <h1>지역 선택</h1>
                <button
                  className={styles.regionToggle}
                  onClick={() => {
                    setIsRegionDropdownOpen((prev) => !prev);
                    setIsCityDropdownOpen(false);
                  }}
                >
                  <span>{selectedRegion || "지역"}</span>
                  <img src={isRegionDropdownOpen ? "/img/collapseBtn.svg" : "/img/dropdownBtn.svg"} alt="dropdown" className={styles.dropdownIcon} />
                </button>
                {isRegionDropdownOpen && (
                  <div className={styles.regions}>
                    {regions.map((region) => (
                      <button
                        key={region}
                        onClick={() => {
                          setSelectedRegion(region);
                          setSelectedCity("");
                          setIsRegionDropdownOpen(false);
                        }}
                      >{region}</button>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.citySelect}>
                <h1 style={{ visibility: "hidden" }}>도시 선택</h1>
                <button
                  className={styles.cityToggle}
                  onClick={() => {
                    if (!selectedRegion) return;
                    setIsCityDropdownOpen((prev) => !prev);
                    setIsRegionDropdownOpen(false);
                  }}
                  disabled={!selectedRegion}
                >
                  <span>{selectedCity || "도시"}</span>
                  <img src={isCityDropdownOpen ? "/img/collapseBtn.svg" : "/img/dropdownBtn.svg"} alt="dropdown" className={styles.cityDropdownIcon} />
                </button>
                {selectedRegion && isCityDropdownOpen && (
                  <div className={styles.cityList}>
                    {regionCities[selectedRegion]?.map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          setSelectedCity(city);
                          setIsCityDropdownOpen(false);
                        }}
                      >{city}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button className={styles.nextBtn} onClick={() => setStep(2)}>다음 단계</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className={styles.regionText}>
              <h1>{selectedCity || selectedRegion || "지역을 선택해주세요"}</h1>
              <p>{selectedDates.length === 2 ? `${formatDate(selectedDates[0])} - ${formatDate(selectedDates[1])}` : "날짜를 선택해주세요"}</p>
            </div>
            <div className={styles.tabWrapper}>
              <button className={`${styles.tabLocation} ${tab === "select" ? styles.active : ""}`} onClick={() => setTab("select")}>장소 선택</button>
              <button className={`${styles.tabLocation} ${tab === "new" ? styles.active : ""}`} onClick={() => setTab("new")}>신규 장소 등록</button>
            </div>
            {tab === "select" && (
              <>
                <div className={styles.searchBar}>
                  <input
                    type="text"
                    placeholder="장소를 입력해주세요"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />
                  <button onClick={handleSearch}><img src="img/search.svg" alt="돋보기" /></button>
                </div>
                <div className={styles.tabMenu}>
                  {["명소", "음식", "카페"].map((tabName) => (
                    <button
                      key={tabName}
                      className={activeTab === tabName ? styles.activeTab : styles.tab}
                      onClick={() => setActiveTab(tabName)}
                    >{tabName}</button>
                  ))}
                </div>
                <div className={styles.tabContent}>
                  {activeTab === "명소" && <PlaceList />}
                  {activeTab === "음식" && <FoodList />}
                  {activeTab === "카페" && <CafeList />}
                </div>
              </>
            )}
            <button className={styles.prevBtn} onClick={() => setStep(1)}>이전 단계</button>
            <button className={styles.confirmedBtn}>플랜확정</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TravelPlanBox;