import React, { useState } from "react";
import style from "./userLogin.module.css"; // CSS 모듈 import
import KakaoLogin from "../../components/AuthProvider/KakaoLogin";
import GoogleLogin from "../../components/AuthProvider/GoogleLogin";
import NaverLogin from "../../components/AuthProvider/NaverLogin";
import "../../styles/common.css"; // 상대 경로로 수정
import "../../styles/reset.css";
import SignupModal from "../../components/modal/signupModal";
import TravelScroll from "../../components/TravelSchedule/TravelScroll";

function UserLogin() {
  const [isExpanded, setIsExpanded] = useState(false);
  // const [isVisible, setIsVisible] = useState(true);
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = !!localStorage.getItem("accessToken");

  // 예제 데이터
  // 스케줄이 이런 식으로 받아와졌을 때
const schedules = [
    {
        day: 1,
        places: [
            "도시철도 3호선 구포역 3번 출구",
            "구포장터 3.1운동 기념비",
            "구포은행",
        ],
    },
    {
        day: 2,
        places: [
            "구포만세거리",
            "구포시장",
           "구포해수욕장",
        ],
    },
    {
        day: 3,
        places: ["도시철도 2호선 덕천역 1번 출구"],
    },
];

//로그인 액션
    const handleLogin = async ()=>{
        if (!userId.trim() || !password.trim()) {
            alert("아이디와 비밀번호를 모두 입력해주세요.");
            return;
        }
        try{
            const res = await fetch('http://localhost:3000/api/userLogin',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({ username: userId, password }),
            });
            if(!res.ok) {
                alert("로그인에 실패했습니다.");
                return;
            }

            const data = await res.json()
            localStorage.setItem("accessToken", data.token);
            alert("로그인에 성공했습니다.");

            } catch(err){
                console.error(err,"로그인 실패");


        }

    }



  const handleClick = () => {
    setIsExpanded(!isExpanded);
    // setIsVisible(false);
  };
  return (
      <>
        {show && <SignupModal onClose={() => setShow(false)} />}

    <div
      className={`${style.userLoginBar} ${isExpanded ? style.isExpanded : ""}`}
    >
      <button onClick={handleClick} className={style.toggleButton}>
        <img
          src="/img/leftArrow.svg"
          alt="왼쪽방향 화살표"
          className={isExpanded ? style.rotated : ""}
        />
      </button>

      <div className={isExpanded ? style.logoHidden : style.logWrap}>
        <img src="/img/Journee_logo.webp" alt="Journee" />
      </div>
      {isExpanded && (
          <div className={style.loginArea}>
              <h2>로그인</h2>
              <div className={style.loginInput}>
                  <input type="text" placeholder="아이디를 입력해주세요"/>
                  <input type="password" placeholder="비밀번호를 입력해주세요"/>
              </div>
              <div className={style.authButtons}>
                  <button type={"submit"} className={style.loginBtn} onClick={handleLogin}>
                      <img src="/img/loginBtn01.png" alt="LOGIN"/>
                      LOGIN
                  </button>

                  <button
                      onClick={() => setShow(true)}
                      className={style.signupBtn}

                  >
                      <img src="/img/loginBtn02.png" alt="SIGN UP"/>
                      SIGN UP
                  </button>

              </div>
              <div className={style.loginAPI}>
                  <NaverLogin/>
                  <GoogleLogin/>
                  <KakaoLogin/>
              </div>
              <p>
                  회원가입 없이 이용 가능하며 첫 로그인시 이용약관 및 개인정보처리방침
                  동의로 간주됩니다.
              </p>
              <div className={style.loginAd}>
                  <img src="/img/loginAd01.png" alt="광고"/>
                  <img src="/img/loginAd02.png" alt="광고"/>
              </div>
              <div className={style.loginPlane}>
                  {isLoggedIn ? (
                      <TravelScroll travelSchedules={schedules}/>
                  ) : (
                      <div className={style.notLoggedInMessage}>
                          로그인 후 확인하실 수 있습니다.
                      </div>
                  )}

                  <div className={style.loginPlaneTouch}></div>
              </div>
          </div>
      )}
    </div>
      </>
  )
}

export default UserLogin;
