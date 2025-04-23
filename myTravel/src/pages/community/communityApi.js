// async function CommunityApi(method, data) {
async function CommunityApi(url, method, data) {
  try {
    const communityApi = await fetch(`http://localhost:8000/${url}`);
    if (!communityApi.ok) {
      throw new Error(`${communityApi.status}`);
    }
    const communityData = await communityApi.json();
    return communityData;
  } catch (err) {
    console.log("에러발생", err);
    return [];
  }
}

export default CommunityApi;
