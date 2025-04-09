// async function CommunityApi(method, data) {
// async function CommunityApi(url, method, data) {
async function CommunityApi() {
  // 더미 데이터
  // const getUrl = "https://jsonplaceholder.typicode.com/posts";
  const communityList = document.getElementById("communityListContainer");
  const url = "http://localhost:8000/select";

  try {
    // const communityApi = await fetch(url, {
    //   method:"post",
    //   headers: {
    //     "content-Type": "application/json",
    //   },
    //   body:JSON.stringify(data)
    // });

    const communityApi = await fetch(url);
    const communityData = await communityApi.json();
    communityData.forEach((element) => {
      communityList.innerHTML += `
      <p>1</p>
          <p>
            <b>NEW</b>
            게시글입니다.게시글입니다.게시글입니다.게시글입니다.게시글입니다.
          </p>
          <p>대전광역시</p>
          <p>연꽃이나</p>
          <p>2025-02-12</p>
      `;
    });
  } catch (err) {
    console.log("에러발생", err);
  }
}

export default CommunityApi;
