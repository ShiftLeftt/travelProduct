import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./community.module.css";

function Community() {
  const navigate = useNavigate();
  const detailHandleClick = () => {
    navigate("/CommunityDetail");
  };
  const mmodifyHandleClick = () => {
    navigate("/CommunityModify");
  };
  return (
    <div>
      <h1>커뮤니티</h1>
      <div className={style.communitySelect}>
        <div className={style.selectBox}>
          <select name="" id="">
            <option value="" title>
              지역
            </option>
          </select>
          <select name="" id="">
            <option value="" title>
              도시
            </option>
          </select>
        </div>
        <div className={style.searchBox}>
          <input type="text" placeholder="검색어를 입력하세요" />
          <button>
            <img src="/img/search.svg" alt="" />
          </button>
        </div>
      </div>
      <div className={style.communityList}>
        <div className={style.communityListTitle}>
          <p>no</p>
          <p>제목</p>
          <p>지역</p>
          <p>닉네임</p>
          <p>작성시간</p>
        </div>
        <div className={style.communityListContent} onClick={detailHandleClick}>
          <p>1</p>
          <p>
            <b>NEW</b>
            게시글입니다.게시글입니다.게시글입니다.게시글입니다.게시글입니다.
          </p>
          <p>대전광역시</p>
          <p>연꽃이나</p>
          <p>2025-02-12</p>
        </div>
      </div>
      <div onClick={mmodifyHandleClick} className={style.communityBtn}>
        <button>글쓰기</button>
      </div>
      <div className={style.pagingnationWrap}>
        <img src="img/pagingnationfirst.svg" alt="" />
        <img src="img/pagingnationleft.svg" alt="" />
        <p className={style.pagingnationClick}>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <img src="img/pagingnationright.svg" alt="" />
        <img src="img/pagingnationfirstlast.svg" alt="" />
      </div>
    </div>
  );
}

export default Community;
