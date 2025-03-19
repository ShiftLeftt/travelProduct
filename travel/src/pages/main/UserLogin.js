import React, { useState }  from "react";
import style from "./userLogin.module.css"; // CSS 모듈 import
import "../../styles/common.css"; // 상대 경로로 수정
import "../../styles/reset.css";
import SignupModal from "../../components/modal/signupModal";

function UserLogin() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [show, setShow] = useState(false);

  const kakao = () => {
    window.location.href = "http://34.47.116.81:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/loginSuccess";
  }

  const handleClick =()=>{
    setIsExpanded(!isExpanded);
    setIsVisible(false);
  }
  return (
    <div className={`${style.userLoginBar} ${isExpanded ? style.isExpanded: ""}`}>

      <button onClick={handleClick} className={style.toggleButton}>
        <img src="/img/leftArrow.svg" alt="왼쪽방향 화살표" className={isExpanded ? style.rotated:""}/>
      </button>

        <div className={style.logWrap}>
          <img src="/img/Journee_logo.webp" alt="Journee" />
        </div>
      {isExpanded && (
        <div className={style.loginArea}>
          <h2>로그인</h2>
          <div className={style.loginInput}>
            <input type="text" placeholder="아이디를 입력해주세요" />
            <input type="password" placeholder="비밀번호를 입력해주세요"/>
          </div>
          <div className={style.authButtons}>
            <button className={style.loginBtn}>
              <img src="/img/loginBtn01.png" alt="LOGIN" />
              LOGIN
            </button>
            <button onClick={()=>setShow(true)} className={style.signupBtn}
                    {show && <SignupModal/>}>
              <img src="/img/loginBtn02.png" alt="SIGN UP" />
              SIGN UP
            </button>
          </div>
          <div className={style.loginAPI}>
            <img src="/img/naver.png" alt="네이버로 로그인" />
            <img onClick={kakao} src="/img/kakao.png" alt="카카오로 로그인" />
            <img src="/img/google.png" alt="구글로 로그인" />
          </div>
          <p>
            회원가입 없이 이용 가능하며 첫 로그인시 이용약관 및 개인정보처리방침 동의로 간주됩니다.
          </p>
          <div className={style.loginAd}>
            <img src="/img/loginAd01.png" alt="광고" />
            <img src="/img/loginAd02.png" alt="광고" />
          </div>
          <div className={style.loginPlane}>
            <div className={style.loginPlaneTouch}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserLogin;