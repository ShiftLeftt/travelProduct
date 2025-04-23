import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./community.module.css";
import CommunityApi from "./CommunityApi.js";

function Community() {
  const navigate = useNavigate();
  const detailHandleClick = (id) => {
    navigate(`/Community/${id}/CommunityDetail`, { state: { id } });
  };
  const modifyHandleClick = () => {
    navigate("/Community/CommunityModify");
  };

  const [CommunityApiData, setCommunityApiData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 8; // 페이지당 항목 수

  useEffect(() => {
    const communityData = async () => {
      const data = await CommunityApi("select");
      setCommunityApiData(data);
    };
    communityData();
  }, []);
  // 현재 페이지와 페이지당 항목 수를 곱함 현재페이지가 1이면 1*5
  const indexOfLastItem = currentPage * itemsPerPage;
  // 위의 값과 페이지 항목수를 뺌
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CommunityApiData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  // 해당 데이터를 페이지 수로 나눔
  const totalPages = Math.ceil(CommunityApiData.length / itemsPerPage);
  // 그 페이지 수 만큼 배열을 만들어줌
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        {currentItems.map((data) => {
          const currentDate = new Date();
          const dataDate = new Date(data.date);
          const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;
          const isWithinOneWeek = currentDate - dataDate <= oneWeekInMs;

          return (
            <div
              className={style.communityListContent}
              onClick={() => detailHandleClick(data.id)}
              key={data.id}
            >
              <p>{data.id}</p>
              <p>
                <b
                  style={{ display: isWithinOneWeek ? "inline-block" : "none" }}
                >
                  NEW
                </b>
                {data.title}
              </p>
              <p>{data.region}</p>
              <p>{data.name}</p>
              <p>{data.date.split("T")[0]}</p>
            </div>
          );
        })}
      </div>
      <div onClick={modifyHandleClick} className={style.communityBtn}>
        <button>글쓰기</button>
      </div>

      <div className={style.pagingnationWrap}>
        <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
          <img src="img/pagingnationfirst.svg" alt="" />
        </button>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <img src="img/pagingnationleft.svg" alt="" />
        </button>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={currentPage === number ? style.pagingnationClick : ""}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <img src="img/pagingnationright.svg" alt="" />
        </button>
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          <img src="img/pagingnationfirstlast.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Community;
