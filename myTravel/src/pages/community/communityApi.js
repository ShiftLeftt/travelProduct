// async function CommunityApi(method, data) {
async function CommunityApi(url, method = "get", data = null) {
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
      `http://localhost:8080/api/v1/article`,
      communityOptions
    );
    console.log("요청 URL:", `http://localhost:8080/api/v1/article`);
    console.log("요청 옵션:", communityOptions);
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.log("에러발생", err);
    return { success: false };
  }
}

export default CommunityApi;
