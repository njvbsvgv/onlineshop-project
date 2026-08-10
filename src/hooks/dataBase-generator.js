const useDataBaseGeneratorToLocalStorage = () => {
  const dataBase = {
    userLists: [],
    productList: productListData,
    filters: {
      categories: [],
      brand: [],
      size: [],
    },
    productComment: [],
    basket: [],
  };

  const newDataBase = JSON.parse(localStorage.getItem("onlineShopDataBase"));

  if (!newDataBase) {
    localStorage.setItem("onlineShopDataBase", JSON.stringify(dataBase));
  }
};