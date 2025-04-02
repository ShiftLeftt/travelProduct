import React from "react";
import style from "./CommunityModify.module.css";

function CommunityModify() {
  return (
    <div className={style.communityMain}>
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
      </div>
      <div className={style.CommunityModifyTitleWrap}>
        <div className={style.CommunityModifyTitle}>
          <p>작성자</p>
          <span>버섯농가삼대독자</span>
        </div>
        <div className={style.CommunityModifyTitle}>
          <p>제목</p>
          <input type="text" placeholder="내용을 입력해주세요." />
        </div>
        <div className={style.CommunityModifyTitle}>
          <p>내용</p>
          <textarea name="" id="" placeholder="내용을 입력해주세요."></textarea>
        </div>
      </div>
      <div>
        <button>수정하기</button>
        <button>등록하기</button>
      </div>
    </div>
  );
}

export default CommunityModify;
