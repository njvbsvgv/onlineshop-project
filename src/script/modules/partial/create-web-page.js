import { getPathName } from "./use-update-route.js";
let currentRoutData = [];

export const CreateWebPages = (routData) => {
  currentRoutData = routData;
  RebuildWebPages();
};

export const RebuildWebPages = () => {
  let pathName = getPathName();
  const language = localStorage.getItem("language");
  const rootElement = document.getElementById("root");

  if (language) {
    if (language == "fa") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }

  rootElement.innerHTML = "";

  currentRoutData.forEach((item) => {
    if (item.path == pathName) {
      const element = item.element();
      rootElement.append(element);
    }
  });
};
