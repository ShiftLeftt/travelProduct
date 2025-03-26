// 게시판 세부사항
import React from "react";

// import style from "./community.module.css";

function CommunityDetail() {
  return (
    <div>
      <h1>커뮤니티</h1>
      <div>
        <div>
          <div>
            <p>커뮤니티 게시글 안내</p>
            <span>by 관리자</span>
          </div>
          <div>
            <p>2025. 02.12</p>
            <div>
              <img src="./public/img/view.svg" alt="" />
              <span>114</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <input type="text" />
        <button>확인</button>
      </div>
      <div>
        <div>
          <p>연꽃이나</p>
          <button>
            <img src="" alt="" />5
          </button>
        </div>
        <div>
          <p>확인</p>
          <span>2025.02.06</span>
        </div>
      </div>
    </div>
  );
}

export default CommunityDetail;
