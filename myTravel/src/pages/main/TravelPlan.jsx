import React, {useEffect, useState} from "react";
import styles from "./travelPlan.module.css";
import TravelPlanBox from "../../components/TravelSchedule/TravelPlanBox";
import { useLocation } from "react-router-dom";

import "../../styles/common.css";
import "../../styles/reset.css";

function TravelPlan() {
  const [isBoxVisible, setIsBoxVisible] = useState(false);const location = useLocation();
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeTab, setActiveTab] = useState("명소");
  const [tab, setTab] = useState("select");

  useEffect(() => {
    if (location.state?.openBox) {
      setIsBoxVisible(true);
    } else{
        setIsBoxVisible(false);
    }
  }, [location.state]);

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
          <p>고객님, <br /><span>어떤 여행을 <br />계획하시나요?</span></p>
          <button onClick={toggleBox}>
            <img
              src={isBoxVisible ? "/img/leftArrow.svg" : "/img/rightArrow.svg"}
              alt="arrow icon"
            />
          </button>
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
            <li>1. 삼척정월대보름제</li>
            <li>2. 태백겨울축제</li>
            <li>3. 논산 딸기 축제</li>
            <li>4. 청평 설빙 송어빙어 축제</li>
            <li>5. 별빛이 흐르는 정원</li>
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
