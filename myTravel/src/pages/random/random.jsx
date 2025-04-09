import React, { useState } from "react";
import style from "./random.module.css";
import Roulette from "./Roulette";
import { CgClose } from "react-icons/cg";

function Random() {
    const [selectedCity, setSelectedCity] = useState("서울");
    const [showPopup, setShowPopup] = useState(false);

    const handleCitySelect = (city) => {
        setSelectedCity(city);
        setShowPopup(false);
        setTimeout(() => {
            setShowPopup(true);
        }, 1000);
    };

    return (
        <div className={style.randomContainer}>
            <div className={style.resultContainer}>
                <div className={style.textBox}>
                    <p>랜덤여행 Go!</p>
                    <p><span>{selectedCity}</span>입니다</p>
                </div>
                <div className={style.commentBox}>
                    <p>
                        여행지 선택이 고민이라면? <br/>
                        랜덤 룰렛을 통해 오늘의 여행지를 찾아보세요! <br/>
                        운명처럼 결정되는 여행지에서 특별한 경험을 즐기세요.
                    </p>
                </div>
            </div>
            <div className={style.wheelContainer}>
                <Roulette onSelect={handleCitySelect} />
            </div>
            {showPopup && (
                <div className={style.popup}>
                    <div className={style.imageContainer}>
                        <img src="/img/Roulette.png" alt="" />
                    </div>
                    <div className={style.infoContainer}>
                        <h1>{selectedCity}</h1>
                        <p>
                        당신의 여행을 더 특별하게!<br/>
                        도시별 여행 정보와 생생한 팁을 공유하고,<br/>
                        여행자들과 함께 이야기를 나눠보세요.
                        </p>
                        <button>지역바로가기</button>
                    </div>
                    <CgClose onClick={() => setShowPopup(false)} className={style.closeIcon} />
                </div>
            )}
        </div>
    );
}

export default Random;