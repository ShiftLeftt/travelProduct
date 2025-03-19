import React from 'react';
import style from "./seasons.module.css";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

const Seasons = () => {

    const [activeSeasons, setActiveSeasons] = useState("봄");

    const Seasons = {
        봄 : [
            { img : 'spring01', text : '벚꽃 흩날리는 공원에서 로맨틱한 산책을!'},
            { img : 'spring02', text : '따뜻한 봄바람과 함께하는 감성 드라이브'},
            { img : 'spring03', text : '싱그러운 초록빛 자연 속, 힐링 여행 떠나볼까요?'}
        ],
        여름 : [
            { img : 'summer01', text : '서핑과 함께하는 짜릿한 여름, 바다로 떠나자!'},
            { img : 'summer02', text : '계곡 물놀이 & 캠핑! 자연 속에서 시원한 여름 나기'},
            { img : 'summer03', text : '무더위를 날려버릴 여름밤 불꽃놀이, 놓치지 마세요!'}
        ],
        가을 : [
            { img : 'fall01', text : '단풍 물든 산길, 가을 감성 가득한 등산 여행!'},
            { img : 'fall02', text : '가을에 즐기기 좋은 공주 알밤축제, 고소한 가을의 맛!'},
            { img : 'fall03', text : '낙엽이 춤추는 가을 호숫가에서 감성 피크닉'}
        ],
        겨울 : [
            { img : 'winter01', text : '새하얀 눈꽃 세상! 겨울왕국 같은 설경 여행'},
            { img : 'winter02', text : '따뜻한 온천과 함께하는 힐링 겨울 여행'},
            { img : 'winter03', text : '크리스마스 마켓에서 로맨틱한 겨울 감성 즐기기'}
        ]
    }

    return (
        <div className={style.seasonsContainer}>
            <div className={style.textContainer}>
                <span>계절별 BEST 여행지</span>
                <h2>계절 따라 <br/> 떠나는 설렘, <br/> 준비됐나요?</h2>
                <p>봄엔 벚꽃, 여름엔 서핑, 가을엔 단풍 드라이브, 겨울엔 눈꽃 여행! <br/> 나만의 계절별 버킷리스트를 완성하세요. <br/> 어떤 스타일이 제일 마음에 들어요? 😊</p>
                <div className={style.tapContainner}>
                    {["봄", "여름", "가을", "겨울"].map((season) => (
                        <button
                            key={season}
                            className={activeSeasons === season ? style.active : ""}
                            onClick={() => setActiveSeasons(season)}
                        >
                            {season}
                        </button>
                    ))}
                </div>
            </div>
            <div className={style.slideContainer}>
                <Swiper spaceBetween={20} slidesPerView={3} loop={true} autoplay={{delay: 3000}} navigation={{ prevEl: '.prevBtn', nextEl: '.nextBtn' }}>
                    {Seasons[activeSeasons].map((slide, index) => (
                        <SwiperSlide key={index} className={style.slideItem}>
                            <img src={`/img/${slide.img}.jpg`} alt={activeSeasons} className={style.slideImage} />
                            <div className={style.slideText}>{slide.text}</div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={`${style.prevBtn} swiper-button-prev`}>◀</div>
                <div className={`${style.nextBtn} swiper-button-next`}>▶</div>
            </div>
        </div>
    )}

export default Seasons