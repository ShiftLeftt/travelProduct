// async function CommunityApi(method, data) {
async function CommunityApi(url, method, data) {
  // 더미 데이터
  // const getUrl = "https://jsonplaceholder.typicode.com/posts";
  // const url = "http://localhost:3306";
  try {
    const communityApi = await fetch(url);
    const communityApiOption = {
      method,
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const communityData = await communityApi.json();
    console.log(communityData);
    if (method !== "GET") {
      communityApiOption.body = JSON.stringify(data);
    }
  } catch (err) {
    console.log("에러발생", err);
  }
}

export default CommunityApi;
