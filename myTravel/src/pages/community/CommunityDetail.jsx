// 게시판 세부사항
import React from "react";
// import { useState, useEffect } from "react";
import style from "./CommunityDetail.module.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CommunityApi from "./CommunityApi.js";
// import CommunityApi from "./CommunityApi.js";/

function CommunityDetail() {
  const location = useLocation();
  const { id } = location.state || {};
  const [CommunityApiData, setCommunityApiData] = useState([]);
  useEffect(() => {
    const communityData = async () => {
      const data = await CommunityApi("select");
      setCommunityApiData(data);
      // id에 해당하는 데이터 찾기
      const selectedData = data.find((item) => item.id === id);
      setCommunityApiData(selectedData);
    };
    communityData();
  }, [id]);
  console.log(CommunityApiData);
  const communityDeleteBtn = async () => {
    const deleteResponse = await CommunityApi("delete", "post", { id });
    if (deleteResponse.success) {
      alert("삭제되었습니다.");
      // 삭제 후 페이지 이동
      // window.location.href = "/Community";
    } else {
      alert("실패했습니다.");
    }
  };

  return (
    <div className={style.communityMain}>
      <h1>커뮤니티</h1>
      {CommunityApiData ? (
        <>
          <div>
            <div className={style.CommunityDetailTitleWrap}>
              <div className={style.CommunityDetailTitle}>
                <p>{CommunityApiData.title}</p>
                <span>by {CommunityApiData.name}</span>
              </div>
              <div className={style.CommunityDetailTitleDate}>
                <p>{CommunityApiData.date}</p>
                <div>
                  <img src="./public/img/view.svg" alt="" />
                  <span>114</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.CommunityDetailContent}>
            <p>{CommunityApiData.content}</p>
          </div>
        </>
      ) : (
        <p>로딩 중...</p>
      )}
      <div className={style.CommunityDetailContentBtn}>
        <button>수정</button>
        <button onClick={communityDeleteBtn}>삭제</button>
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
