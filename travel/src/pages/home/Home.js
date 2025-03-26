import React from "react";
import style from "./Home.module.css";
import "../../styles/common.css"; // 상대 경로로 수정
import "../../styles/reset.css"; // 상대 경로로 수정

const Home = () => {
  return (
    <div className={style.mainTextContainer}>
      <div className={style.backgroundElement}>
        <img src="/img/mainLine01.webp" alt="Line" className={style.Line01} />
        <img src="/img/mainLine02.webp" alt="Line" className={style.Line02} />
        <img src="/img/mainStar01.webp" alt="star" className={style.star01} />
        <img src="/img/mainStar02.webp" alt="star" className={style.star02} />
        <img src="/img/mainStar03.webp" alt="star" className={style.star03} />
        <img src="/img/mainStar04.webp" alt="star" className={style.star04} />
      </div>
      <div className={style.mainTextContent}>
        <h1>Dream Plan</h1>
        <div className={style.mainTextImg}>
          <img src="/img/mainT.webp" alt="T" className={style.titleT} />
          <img src="/img/mainR.webp" alt="R" className={style.titleR} />
          <img src="/img/mainA.webp" alt="A" className={style.titleA} />
          <img src="/img/mainV.webp" alt="V" className={style.titleV} />
          <img src="/img/mainE.webp" alt="E" className={style.titleE} />
          <img src="/img/mainL.webp" alt="L" className={style.titleL} />
        </div>
      </div>
      <div className={style.mainTextSuvContent}>
        <img src="/img/Journee_logo.webp" alt="로고" />
        <div className={style.indentText}>
          <p>가 당신만을 위한 맞춤 여행 플랜을 준비해 드립니다.</p>
          <p>소중한 순간을 위해, 지금 바로 특별한 여행을 시작해 보세요.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
