// async function CommunityApi(method, data) {
async function CommunityApi(url, method = "get", data = null) {
  try {
    const methodString = method.toLowerCase();
    const communityOptions = {
      method: methodString,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (
      methodString === "post" ||
      methodString === "delete" ||
      methodString === "put"
    ) {
      communityOptions.body = JSON.stringify(data);
    }
    const response = await fetch(
      `http://localhost:8000/${url}`,
      communityOptions
    );
    console.log("요청 URL:", `http://localhost:8000/${url}`);
    console.log("요청 옵션:", communityOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.log("에러발생:", err);
    
    // 개발 중에 백엔드 서버가 없을 때를 대비한 더미 데이터
    if (url === "select") {
      console.log("백엔드 서버에 연결할 수 없어 더미 데이터를 반환합니다.");
      return [
        {
          id: 1,
          title: "제주도 3박 4일 여행 후기",
          region: "제주도",
          name: "여행러버",
          date: "2025-06-20T10:30:00"
        },
        {
          id: 2,
          title: "부산 맛집 투어 추천합니다",
          region: "부산",
          name: "맛집헌터",
          date: "2025-06-19T15:20:00"
        },
        {
          id: 3,
          title: "강릉 바다 드라이브 코스",
          region: "강릉",
          name: "드라이버",
          date: "2025-06-18T09:45:00"
        }
      ];
    }
    
    return { success: false, error: err.message };
  }
}

export default CommunityApi;