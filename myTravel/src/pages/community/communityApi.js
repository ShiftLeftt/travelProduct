function Community() {
  // fetch("http://localhost:8080/community")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error);
  //   });
  const communityData = await fetch("http://localhost:8080/community");
}

export default Community;