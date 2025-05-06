import React, { useState } from "react";
import style from "./random.module.css";
import Roulette from "./Roulette";
import { CgClose } from "react-icons/cg";

function Random() {
    const [selectedCity, setSelectedCity] = useState("서울");
    const [displayedLabel, setDisplayedLabel] = useState("서울특별시");
    const [showPopup, setShowPopup] = useState(false);

    const handleCitySelect = (city) => {
        const label = Object.entries({
            충청도: ["공주시", "천안시", "아산시", "논산시", "계룡시", "보령시", "서산시", "청주시", "충주시", "제천시"],
            경기도: ["수원시", "고양시", "용인시", "성남시", "부천시", "안산시", "안양시", "평택시", "의정부시", "시흥시", "파주시", "김포시", "광주시", "광명시", "군포시", "오산시", "이천시", "안성시", "구리시", "남양주시", "포천시", "의왕시", "하남시", "여주시", "동두천시"],
            전라도: ["목포시", "여수시", "순천시", "나주시", "광양시", "전주시", "군산시", "익산시", "정읍시", "남원시"],
            강원도: ["춘천시", "원주시", "강릉시", "동해시", "태백시", "삼척시", "속초시"],
            경상도: ["창원시", "김해시", "진주시", "양산시", "거제시", "통영시", "사천시", "밀양시", "포항시", "경주시", "구미시", "안동시", "김천시", "상주시", "문경시", "영주시"]
        }).find(([_, cities]) => cities.includes(city))?.[0] || city;

        setSelectedCity(city);
        setDisplayedLabel(label);
        setShowPopup(false);
        setTimeout(() => {
            setShowPopup(true);
        }, 1000);
    }

    return (
        <div className={style.randomContainer}>
            <div className={style.resultContainer}>
            <div className={style.commentBox}>
                    <p>
                        여행지 선택이 고민이라면? <br/>
                        랜덤 룰렛을 통해 오늘의 여행지를 찾아보세요.
                    </p>
                </div>
                <div className={style.textBox}>
                    <p>랜덤여행 시작</p>
                    <p className={style.textBoxUnder}><span>{displayedLabel}</span>입니다 !</p>
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
