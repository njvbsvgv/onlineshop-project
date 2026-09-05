export const setDataToLocalStorage = (key, value, isString) => {
  switch (isString) {
    case true:
      localStorage.setItem(key, JSON.stringify(value));
      break;
    case false:
      localStorage.setItem(key, value);
  }
};

export const getDataFromLocalStorage = (key, isParser) => {
  let data;
  switch (isParser) {
    case true:
      data = JSON.parse(localStorage.getItem(key));
      break;
    case false:
      data = localStorage.getItem(key);
      break;
    default:
      data = localStorage.getItem(key);
  }
  return data;
};

export const deleteDataFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
