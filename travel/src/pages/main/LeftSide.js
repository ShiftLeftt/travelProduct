import React from "react";
import style from "./leftSide.module.css"; // CSS 모듈 import
import "../../styles/common.css"; // 상대 경로로 수정
import "../../styles/reset.css"; // 상대 경로로 수정

function LeftSide() {
  return (
    <div className={style.LeftSide}>
<<<<<<< HEAD
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
=======
>>>>>>> 249475f2c6237e7c0136844b54c5bb5bd320939e
      <div>
        <div className={style.leftSideTitle}> {/* 중괄호로 수정 */}
          <p>
            고객님,
            <br />
            <span>
            어떤 여행을 <br />
              계획하시나요?
              </span>
          </p>
          <button>
            <img src="/img/rightArrow.svg" alt="" />
          </button>
          
        </div>
        <div className={ style.leftSideMainBtn}>
          <button>여행 계획 시작하기</button>
        </div>
        <div className={style.liveSearch}>
          <h3>실시간 인기검색어</h3>
          <ul>
            <li>1. 삼척정월대보름제</li>
            <li>2. 삼척정월대보름제</li>
            <li>3. 삼척정월대보름제</li>
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

export default LeftSide;
