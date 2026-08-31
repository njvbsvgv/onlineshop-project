const useUpdateRout = (routName, state = { check: false, data: null }) => {
  if (state.data && state.data != "") {
    localStorage.setItem("routState", JSON.stringify(state));
  }
  if (state.check) {
    const token = localStorage.getItem("onlineshopAccessToken");
    if (!token) {
      const pathName = localStorage.getItem("routName");
      localStorage.setItem("routName", pathName);
    } else {
      localStorage.setItem("routName", routName);
      RebuildWebPages();
    }
  } else {
    localStorage.setItem("routName", routName);
    RebuildWebPages();
  }
  // const routData = getDataFromLocalStorage("routData", true)
  // console.log("routData ==>", routData)
  // RoutController()
  // CreateWebPages(routData)
  // window.location.reload()
};
