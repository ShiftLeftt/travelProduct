import React from "react";
import style from "./leftSide.module.css"; // CSS 모듈 import
import "../../styles/common.css"; // 상대 경로로 수정
import "../../styles/reset.css"; // 상대 경로로 수정

function LeftSide() {
  return (
    <div className={style.LeftSide}>
      <div className={style.leftSideTitle}>
        {" "}
        {/* 중괄호로 수정 */}
        <p>
          고객님
          <br />
          어떤 여행을 <br />
          계획하시나요?
        </p>
        <img src="/img/rightArrow.svg" alt="" />
      </div>
      <div>
        <button>여행 계획 시작하기</button>
      </div>
      <div>
        <h3>실시간 인기검색어</h3>
        <ul>
          <li>삼척정월대보름제</li>
          <li>삼척정월대보름제</li>
          <li>삼척정월대보름제</li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSide;
