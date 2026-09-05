import httpInterceptore from "./interceptore.js";

export const getProductList = () => {
  const http = new httpInterceptore();
  const products = http.get("/products");
  return products.data;
};

export const getProductListByStatus = (status) => {
  const http = new httpInterceptore();
  const products = http.get("/products");
  // let filtredData = []
  const result = products.data.filter((el) => el.status.includes(status));
  return result;
  // const result = similerProduct.
};


export const getSimilerProduct = (categoryName) => {
    const http = new httpInterceptore()
    const similerProduct = http.get("/products")
    let filtredData = []
    categoryName.forEach((cat) => {
        filtredData = similerProduct.data.filter(el => el.category.includes(cat))
    })
    return filtredData
    console.log("filtredData ==>", filtredData)
    // const result = similerProduct.
}