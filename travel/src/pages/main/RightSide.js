import React, { useState } from "react";
import style from "./rightSide.module.css";
import "../../styles/common.css";
import "../../styles/reset.css";
import SignupModal from "../../components/modal/signupModal";
import SignupForm from "../../components/modal/SignupForm";

function RightSide() {
    const [signupOpen, setSignupOpen] = useState(false);
    const openSignup = () => setSignupOpen(true);
    const closeSignup = () => setSignupOpen(false);

    const [isClicked, setIsClicked] = useState(false);
    const toggle = () => setIsClicked(!isClicked);

    return (
        <div className={isClicked ? `${style.rightSideBar} ${style.clicked}` : style.rightSideBar}>
            <button onClick={toggle} className={style.rightSideButton}>
                {isClicked ? <img src="/img/rightArrow.svg" alt="오른쪽방향 화살표" /> : <img src="/img/leftArrow.svg" alt="왼쪽방향 화살표" />}
            </button>
            <div className={style.logWrap}>
                <img src="/img/Journee_logo.webp" alt="" />
                {isClicked && (
                    <button onClick={openSignup} className={style.signupBtn}>버튼</button>
                )}
            </div>
            <SignupModal isOpen={signupOpen} onClose={closeSignup}/>



        </div>
    );
}

export default RightSide;