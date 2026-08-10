const formGenerator = ({ inputChildren, buttonChildren }) => {
  const formElem = document.createElement("form");
  formElem.append(inputChildren, buttonChildren);
  formElem.classList.add("custom-form")
  return formElem;
};
