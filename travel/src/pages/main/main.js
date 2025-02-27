import React from 'react'
import style from "./main.module.css";
import '../../styles/common.css'; // 상대 경로로 수정
import '../../styles/reset.css'; // 상대 경로로 수정

import { Routes } from "react-router-dom"; // react-router-dom을 사용해야 합니다.
function Main() {
  return (
    <div className={style.mainDiv }>
      <header>
        <ul>
          <li>
            <img src="/img/home.svg" alt="홈 아이콘" />
          </li>
          <li>추천지</li>
          <li>커뮤니티</li>
          <li>랜덤여행지</li>

        </ul>
      </header>
    </div>
  )
}

export default Main
