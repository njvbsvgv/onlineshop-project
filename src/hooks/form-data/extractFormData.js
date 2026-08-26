const extractFormData = (formTarget, lengthNum) => {
  let newData = {};
  for (let i = 0; i <= formTarget.length - lengthNum; i++) {
    const inputName = formTarget[i].getAttribute("name");
    const inputType = formTarget[i].getAttribute("type");
    if (inputType == "file") {
        newData = { ...newData, [inputName]: formTarget[i].files[0].name };
    }else {
        newData = { ...newData, [inputName]: formTarget[i].value };
    }
  }
  return newData
};
