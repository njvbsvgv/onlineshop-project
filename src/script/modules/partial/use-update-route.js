const useUpdateRout = (routName, state) => {
  localStorage.setItem("routName", routName);
  if (state && state != "") {
    localStorage.setItem("routState", JSON.stringify(state));
  }
  // const routData = getDataFromLocalStorage("routData", true)
  // console.log("routData ==>", routData)
  // RoutController()
  // CreateWebPages(routData)
  RebuildWebPages();
  // window.location.reload()
};
