import { RebuildWebPages } from "./create-web-page.js";

export const useUpdateRout = (
  routName,
  state = { check: false, data: null },
) => {
  if (state.data && state.data != "") {
    localStorage.setItem("routState", JSON.stringify(state));
  }
  if (state.check) {
    const token = localStorage.getItem("onlineshopAccessToken");
    if (!token) {
      const pathName = localStorage.getItem("routName");
      localStorage.setItem("routName", pathName);
    } else {
      // window.navigation.navigate("products");
      // history.pushState({}, "", routName);
      // localStorage.setItem("routName", routName);
      // RebuildWebPages();
    }
  } else {
    // localStorage.setItem("routName", routName);
    // RebuildWebPages();
  }
  // history.pushState({}, "", `#${routName}`);
  window.location.hash = `#${routName}`;
  RebuildWebPages();
  // window.navigation.navigate("products");

  // const routData = getDataFromLocalStorage("routData", true)
  // console.log("routData ==>", routData)
  // RoutController()
  // CreateWebPages(routData)
  // window.location.reload()
};

export const getPathName = () => {
  let pathName = window.location.hash.split("/");
  let newPathName = "";
  for (let i = 0; i < pathName.length; i++) {
    if (pathName[i] != "#") {
      newPathName = `${newPathName}/${pathName[i]}`;
    }
  }
  console.log("newPathName ==>", newPathName);
  return newPathName;
};
