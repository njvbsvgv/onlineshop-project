import { RebuildWebPages } from "./create-web-page.js";

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
      const pathName = getPathName()
      window.location.hash = `#${pathName}`;
    }
  } else {
    window.location.hash = `#${routName}`;
    RebuildWebPages();
  }
};