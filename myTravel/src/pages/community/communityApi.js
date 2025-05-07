// async function CommunityApi(method, data) {
async function CommunityApi(url, method = "get", data) {
  try {
    // if (url === "select") {
    //   const communityApi = await fetch(`http://localhost:8000/${url}`);
    //   if (!communityApi.ok) {
    //     throw new Error(`${communityApi.status}`);
    //   }
    //   const communityData = await communityApi.json();
    //   return communityData;
    // } else {
    //   const communityApi = await fetch(`http://localhost:8000/${url}`, {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   if (!communityApi.ok) {
    //     throw new Error(`${communityApi.status}`);
    //   }
    //   const communityData = await communityApi.json();
    //   return communityData;
    // }
    const communityOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (method === "post") {
      communityOptions.body = JSON.stringify(data);
    }
    const response = await fetch(
      `http://localhost:8000/${url}`,
      communityOptions
    );
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.log("에러발생", err);
    return [];
  }
}

export default CommunityApi;
