const useUpdateRout = (routName) => {
  localStorage.setItem("routName", routName);
  // const routData = getDataFromLocalStorage("routData", true)
  // console.log("routData ==>", routData)
  // RoutController()
  // CreateWebPages(routData)
  RebuildWebPages()
  // window.location.reload()
};
