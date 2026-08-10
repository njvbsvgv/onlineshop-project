const setDataToLocalStorage = (key, value, isString) => {
  switch (isString) {
    case true:
      localStorage.setItem(key, JSON.stringify(value));
      break;
    case false:
      localStorage.setItem(key, value);
  }
};

const getDataFromLocalStorage = (key, isParser) => {
  let data;
  switch (isParser) {
    case true:
      data = JSON.parse(localStorage.getItem(key));
      break;
    case false:
      data = localStorage.getItem(key);
      break;
  }
  return data;
};

const deleteDataFromLocalStorage = (key) => {
    localStorage.removeItem(key)
}

const clearLocalStorage = () => {
    localStorage.clear()
}