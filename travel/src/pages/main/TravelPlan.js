import React, { useState } from "react";
import style from "./travelPlan.module.css";
import "../../styles/common.css";
import "../../styles/reset.css";

function TravelPlan() {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBox = () => {
    setIsBoxVisible((prev) => !prev);
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

        <div
          className={`${style.locationBox} ${
            isBoxVisible ? style.locationBoxVisible : ""
          }`}
        >
          <p>
            내용 입력예정
          </p>
        </div>

        <div className={style.travelPlanMainBtn}>
          <button>여행 계획 시작하기</button>
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
