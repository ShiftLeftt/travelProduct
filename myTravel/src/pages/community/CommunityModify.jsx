import React from "react";
import style from "./community.module.css";

function CommunityModify() {
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
        {/* <div className={style.searchBox}>
          <input type="text" placeholder="검색어를 입력하세요" />
          <button>
            <img src="/img/search.svg" alt="" />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default CommunityModify;
