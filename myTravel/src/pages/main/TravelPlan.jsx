import React, { useEffect, useState } from "react";
import styles from "./travelPlan.module.css";
import TravelPlanBox from "../../components/TravelSchedule/TravelPlanBox";
import { useLocation } from "react-router-dom";

import "../../styles/common.css";
import "../../styles/reset.css";

function TravelPlan() {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const location = useLocation();
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeTab, setActiveTab] = useState("명소");
  const [tab, setTab] = useState("select");
  const [popularKeywords, setPopularKeywords] = useState([]);

  useEffect(() => {
    if (location.state?.openBox) {
      setIsBoxVisible(true);
    } else {
      setIsBoxVisible(false);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchPopularKeywords = async () => {
      try {
        // URL에서 ? 이후의 쿼리 매개변수 앞에 누락된 ?를 추가했습니다
        const response = await fetch(
          "https://apis.data.go.kr/B551011/KorService2/searchKeyword2?serviceKey=NnU2o9Xt8mC8kWsGnSb%2BI7l%2FQ5JU9d2gkAkzvVr%2Fs%2F7Jdb5NUS6wl73o3HR7trRivcA05bsXg0b7QjI6QGeqXw%3D%3D&numOfRows=5&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&arrange=C&keyword=%EC%8B%9C%EC%9E%A5&sigunguCode=3&cat1=A04&cat2=A0401&cat3=A04010100&lclsSystm2=SH06&lclsSystm3=SH060100"
        );

        const text = await response.json();
        const textApiData = text.response.body.items.item;
        // for (let i = 0; i < items.length; i++) {
          // const title = items[i].getElementsByTagName("title")[0]?.textContent;
          //  keywords.push(text);
        // }

        setPopularKeywords(textApiData);
        console.log("api확인",textApiData)
      } catch (error) {
        console.error("인기 검색어 불러오기 실패:", error);
        // 오류 발생 시 기본 키워드 설정
        setPopularKeywords(["서울", "제주도", "부산", "강릉", "경주"]);
      }
    };
    
    fetchPopularKeywords();
    
  }, []);

  const toggleBox = () => {
    setIsBoxVisible((prev) => !prev);
  };

  const handleSearch = () => {
    console.log("검색어:", searchKeyword);
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
      return `${diff - 1}박 ${diff}일 일정`;
    }
    return "";
  };

  return (
    <div className={styles.travelPlan}>
      <div>
        <div className={styles.travelPlanTitle}>
          <p>
            고객님, <br />
            <span>
              어떤 여행을 <br />
              계획하시나요?
            </span>
          </p>
        </div>

        {isBoxVisible && (
          <TravelPlanBox
            selectedDates={selectedDates}
            setSelectedDates={setSelectedDates}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            isRegionDropdownOpen={isRegionDropdownOpen}
            setIsRegionDropdownOpen={setIsRegionDropdownOpen}
            isCityDropdownOpen={isCityDropdownOpen}
            setIsCityDropdownOpen={setIsCityDropdownOpen}
            step={step}
            setStep={setStep}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tab={tab}
            setTab={setTab}
            handleSearch={handleSearch}
            formatDate={formatDate}
            getDuration={getDuration}
            onClose={() => setIsBoxVisible(false)}
          />
        )}

        <div className={styles.travelPlanMainBtn}>
          <button onClick={toggleBox}>여행 계획 시작하기</button>
        </div>

        <div className={styles.liveSearch}>
          <h3>실시간 인기검색어</h3>
          <ul>
            {popularKeywords.length > 0 ? (
              popularKeywords.map((keyword, index) => (
                <li key={index}>
                  {index+1}. {keyword.title}
                </li>
              ))
            ) : (
              <li>로딩 중...</li>
            )}
          </ul>
        </div>
      </div>

      <div className={styles.bannerImgWrap}>
        <img src="/img/Journee_banner01.webp" alt="배너" />
        <img src="/img/Journee_banner02.webp" alt="배너" />
        <img src="/img/Journee_banner03.webp" alt="배너" />
      </div>
    </div>
  );
}

export default TravelPlan;