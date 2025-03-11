import React from "react";
import style from "./rightSide.module.css"; // 상대 경로로 수정
import "../../styles/common.css"; // 상대 경로로 수정
import "../../styles/reset.css";

function RightSide() {
  return (
    <div className={style.rightSideBar}>
      <button>
        <img src="/img/leftArrow.svg" alt="왼쪽방향 화살표" />
      </button>
      {/* <div className={style.logWrap}> */}
      <img src="/img/Journee_logo.webp" alt="" />
      {/* </div> */}
    </div>
  );
}

export default RightSide;
