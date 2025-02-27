import React from 'react'
import style from "./main.module.css";
import '../../styles/common.css'; // 상대 경로로 수정
import '../../styles/reset.css'; // 상대 경로로 수정

import {Link } from "react-router-dom"; // react-router-dom을 사용해야 합니다.
function Main({children}) {
  return (
      <div className={style.mainDiv}>
          <header>
              <ul>
                  <li>
                      <Link to="/">홈</Link>
                  </li>

                  <li>
                      <Link to="/Seasons">추천지</Link>
                  </li>
                  <li>
                      <Link to="/Community">커뮤니티</Link>
                  </li>
                  <li>
                      <Link to="/Random">랜덤여행지</Link>
                  </li>

              </ul>
          </header>
          <div className={style.viewContent}>{children}</div>
      </div>
  )
}

export default Main
