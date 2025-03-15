import React from "react";
import style from "./userLogin.module.css"; // CSS 모듈 import
import "../../styles/common.css"; // 상대 경로로 수정
import "../../styles/reset.css";

function userLogin() {
  return (
    <div className={style.userLoginBar}>
      <button>
        <img src="/img/leftArrow.svg" alt="왼쪽방향 화살표" />
      </button>
      {/* <div className={style.logWrap}> */}
      <img src="/img/Journee_logo.webp" alt="" />
      {/* </div> */}
    </div>
  );
}

export default userLogin;