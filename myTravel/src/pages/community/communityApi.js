// async function CommunityApi(method, data) {
// async function CommunityApi(url, method, data) {
async function CommunityApi() {
  // 더미 데이터
  // const getUrl = "https://jsonplaceholder.typicode.com/posts";
  const url = "http://localhost:8000/select";
  let data = '';
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
    console.log(communityData);
    data = communityData
  } catch (err) {
    console.log("에러발생", err);
  }
  console.log(data)
}

export default CommunityApi;
