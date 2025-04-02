// 게시판 세부사항
import React from "react";

import style from "./CommunityDetail.module.css";

function CommunityDetail() {
  return (
    <div className={style.communityMain}>
      <h1>커뮤니티</h1>
      <div>
        <div className={style.CommunityDetailTitleWrap}>
          <div className={style.CommunityDetailTitle}>
            <p>커뮤니티 게시글 안내</p>
            <span>by 관리자</span>
          </div>
          <div className={style.CommunityDetailTitleDate}>
            <p>2025. 02.12</p>
            <div>
              <img src="./public/img/view.svg" alt="" />
              <span>114</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.CommunityDetailContent}>
        <p>
          📢 [공지] 여행 커뮤니티 이용 안내 🌍 안녕하세요, Journee 가족 여러분!
          우리는 여행을 사랑하는 사람들이 모인 공간입니다. 새로운 여행지를
          발견하고, 유용한 팁을 나누며, 여러분의 멋진 여행 이야기를 공유해요!
          😊✈️
        </p>
      </div>
      <div className={style.CommunityDetailContentComment}>
        <input
          type="text"
          placeholder="궁금한 여행 정보가 있나요? 댓글로 질문해보세요 !"
        />
        <button>확인</button>
      </div>
      <div className={style.CommunityDetailCommentList}>
        <div>
          <p>연꽃이나</p>
          <button>
            <img src="./public/img/commentIcon.svg" alt="" />5
          </button>
        </div>
        <div className={style.CommunityDetailCommentCheck}>
          <p>확인</p>
          <span>2025.02.06</span>
        </div>
      </div>
      <div className={style.CommunityDetailCommentList}>
        <div>
          <p>연꽃이나</p>
          <button>
            <img src="./public/img/commentIcon.svg" alt="" />5
          </button>
        </div>
        <div className={style.CommunityDetailCommentCheck}>
          <p>확인</p>
          <span>2025.02.06</span>
        </div>
      </div>
      <div className={style.CommunityDetailCommentList}>
        <div>
          <p>연꽃이나</p>
          <button>
            <img src="./public/img/commentIcon.svg" alt="" />5
          </button>
        </div>
        <div className={style.CommunityDetailCommentCheck}>
          <p>확인</p>
          <span>2025.02.06</span>
        </div>
      </div>
    </div>
  );
}

export default CommunityDetail;
