import React from "react";
import style from "./rightSide.module.css"; // 상대 경로로 수정
import "../../styles/common.css"; // 상대 경로로 수정
import "../../styles/reset.css";

function RightSide() {
    const [isClicked, setIsClicked] = React.useState(false);
    const toggle = () =>{
        setIsClicked(!isClicked);
    }
  return (
    <div className={isClicked ? `${style.rightSideBar} ${style.clicked}` : style.rightSideBar }>
      <button onClick={toggle} className={style.rightSideButton}>
          {isClicked && <img src="/img/rightArrow.svg" alt="오른쪽방향 화살표" />}
          {!isClicked && <img src="/img/leftArrow.svg" alt="왼쪽방향 화살표" />}
      </button>
      <div className={style.logWrap}>
        <img src="/img/Journee_logo.webp" alt="" />
      </div>
    </div>
  );
}

export default RightSide;
