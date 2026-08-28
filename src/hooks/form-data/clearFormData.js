const clearFormData = (formTarget, lengthNum) => {
  for (let i = 0; i <= formTarget.length - lengthNum; i++) {
    const inputName = formTarget[i].getAttribute("name");
    const inputType = formTarget[i].getAttribute("type");
    if (inputType == "file") {
      formTarget[i].files = "";
    } else {
      formTarget[i].value = "";
    }
  }
};
