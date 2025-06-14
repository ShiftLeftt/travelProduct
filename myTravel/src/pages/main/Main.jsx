
import React, {useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from "./main.module.css";
import '../../styles/common.css';
import '../../styles/reset.css';

function Main({ children }) {
  const location = useLocation();
  const currentMenu = location.pathname.split('/')[1] || 'Home';



  return (
    <div className={style.mainContainer}>
      <header>
        <nav className={style.navMenu}>
          <NavLink end to="/Home" className={`${style.link} ${currentMenu === 'Home' ? style.active : ''}`}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M23.61 29.998H20.8605C20.0448 30.0031 19.2594 29.6901 18.6711 29.1253C18.0828 28.5607 17.7383 27.7887 17.7105 26.974V22.7761C17.7039 22.6197 17.6363 22.4721 17.5223 22.3647C17.4081 22.2575 17.2566 22.1991 17.1 22.2019H12.9735C12.8189 22.2018 12.6703 22.2611 12.5585 22.3679C12.4467 22.4746 12.3805 22.6203 12.3735 22.7746V26.9545C12.3735 27.0746 12.3569 27.1943 12.324 27.3099C12.2119 28.0691 11.8263 28.7611 11.2397 29.2562C10.653 29.7512 9.9056 30.015 9.138 29.998H6.39C4.7399 30.0396 3.14064 29.4255 1.94282 28.2904C0.744989 27.1551 0.0463314 25.5917 0 23.9425V12.0639C0.00883713 11.3406 0.189247 10.6297 0.526408 9.98958C0.863569 9.34947 1.34786 8.79845 1.9395 8.38178L11.268 1.23933C12.337 0.434992 13.6387 0 14.9767 0C16.3147 0 17.6164 0.434992 18.6855 1.23933L28.089 8.39527C28.6695 8.81068 29.1447 9.35613 29.4765 9.98796C29.8083 10.6198 29.9876 11.3205 30 12.034V23.9425C29.9536 25.5917 29.2549 27.1551 28.0572 28.2904C26.8593 29.4255 25.2602 30.0396 23.61 29.998ZM17.1 19.4763C17.9982 19.4545 18.8685 19.7893 19.5201 20.4076C20.1719 21.0257 20.5518 21.8769 20.577 22.7746V26.9725C20.5812 27.0545 20.6173 27.1318 20.6775 27.1877C20.7376 27.2437 20.8173 27.274 20.8995 27.2724H23.61C24.5211 27.2998 25.406 26.9644 26.0699 26.34C26.7336 25.7156 27.1223 24.8532 27.15 23.9425V12.0519C27.1418 11.7541 27.064 11.4623 26.9232 11.1997C26.7823 10.9371 26.5821 10.7109 26.3385 10.5392L16.905 3.36678C16.3463 2.95556 15.6706 2.73375 14.9767 2.73375C14.2829 2.73375 13.6072 2.95556 13.0485 3.36678L3.6975 10.5317C3.44302 10.703 3.23331 10.9327 3.08586 11.2016C2.93841 11.4706 2.85754 11.7709 2.85 12.0774V23.9425C2.87938 24.8521 3.26861 25.713 3.93228 26.3361C4.59594 26.9593 5.47985 27.2938 6.39 27.2664H9.138C9.22505 27.2704 9.31018 27.24 9.37482 27.1815C9.43946 27.1231 9.47833 27.0415 9.483 26.9545C9.48282 26.8649 9.49187 26.7754 9.51 26.6877V22.7746C9.53629 21.8821 9.91294 21.0358 10.5585 20.4185C11.2041 19.8013 12.0668 19.4629 12.96 19.4763H17.1Z" fill="currentColor"/>
              <path fillRule="evenodd" clipRule="evenodd" d="" fill="currentColor" />
            </svg>
          </NavLink>

          <NavLink to="/Seasons" className={`${style.link} ${currentMenu === 'Seasons' ? style.active : ''}`}>추천지</NavLink>
          <NavLink to="/Community" className={`${style.link} ${currentMenu === 'Community' ? style.active : ''}`}>커뮤니티</NavLink>
          <NavLink to="/Random" className={`${style.link} ${currentMenu === 'Random' ? style.active : ''}`}>랜덤여행지</NavLink>
          <NavLink to="/Map" state={{ openBox: true, }}  className={`${style.link} ${currentMenu === 'Map' ? style.active : ''}`}>지도</NavLink>
            <span className={`${style.activeHeader} ${style[currentMenu]}`}></span>
        </nav>
      </header>

      <div className={style.mainContent}>{children}</div>
    </div>
  );
}

export default Main;