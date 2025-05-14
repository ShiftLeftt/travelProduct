import React, { useEffect, useState } from "react";
import style from "./CommunityModify.module.css";
import CommunityApi from "./CommunityApi.js"; // 수정된 import 문

function CommunityModify() {
  const [formData, setFormData] = useState({
    name: "버섯농가삼대독자",
    region: "",
    title: "",
    content: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateCommunity = async (e) => {
    try {
      e.preventDefault();
      const CommunityApiData = await CommunityApi("insert", "post", formData);
      if (CommunityApiData.success) {
        alert("등록 되었습니다.");
        window.location.href = "/Community";
      } else {
        alert("실패 했습니다.");
      }
    } catch (error) {
      console.error("업데이트 실패", error);
    }
  };

  return (
    <div className={style.communityMain}>
      <h1>커뮤니티</h1>
      <form onSubmit={updateCommunity}>
        <div className={style.communitySelect}>
          <div className={style.selectBox}>
            <select
              name="region"
              value={formData.region}
              onChange={inputChange}
              id=""
            >
              <option value="" title="시도 선택">
                시도
              </option>
              <option value="서울특별시">서울특별시</option>
              <option value="인천광역시">인천광역시</option>
              <option value="대전광역시">대전광역시</option>
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
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={inputChange}
              placeholder="내용을 입력해주세요."
            />
          </div>
          <div className={style.CommunityModifyTitle}>
            <p>내용</p>
            <textarea
              name="content"
              id=""
              value={formData.content}
              onChange={inputChange}
              placeholder="내용을 입력해주세요."
            ></textarea>
          </div>
        </div>
        <div>
          <button type="submit">등록하기</button>
        </div>
      </form>
    </div>
  );
}

export default CommunityModify;
