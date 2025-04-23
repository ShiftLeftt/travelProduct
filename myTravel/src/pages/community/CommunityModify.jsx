import React from "react";
import style from "./CommunityModify.module.css";
import { useState } from "react";

function CommunityModify() {
  // const location = useLocation();
  // const { id } = location.state || {};
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
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/insert", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json(); // 서버에서 반환된 JSON 데이터
        console.log("업데이트 성공:", result);
        alert("수정이 완료되었습니다!");
      } else {
        console.error("업데이트 실패:", response.statusText);
        alert("수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("에러", error);
    }
  };
  return (
    <div className={style.communityMain}>
      <h1>커뮤니티</h1>
      <form onSubmit={updateCommunity}>
        <div className={style.communitySelect}>
          <div className={style.selectBox}>
            {/* <select name="" id="">
            <option value="" title>
              지역
            </option>
          </select> */}
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
          {/* <button>수정하기</button> */}
          <button type="submit">등록하기</button>
        </div>
      </form>
    </div>
  );
}

export default CommunityModify;
