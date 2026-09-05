import { getDataFromLocalStorage } from "../hooks/local-storage/index.js";
import httpInterceptore from "./interceptore.js";

export const getOrderDataHandler = () => {
  const userId = getDataFromLocalStorage("onlineshopUserId", true);
  const http = new httpInterceptore();
  const orderData = http.get("/onlineshopBasket");
  const findUserOrder = orderData.data.find((el) => el.userId == userId);
  // console.log("findUserOrder ==>", findUserOrder)
  return findUserOrder?.basketData;
};

export const deleteOrder = (id) => {
  const userId = getDataFromLocalStorage("onlineshopUserId", true);
  const http = new httpInterceptore();
  const orderData = http.get("/onlineshopBasket");
  let findUserOrder = orderData.data.find((el) => el.userId == userId);

  const newOrderList = findUserOrder.basketData.filter((el) => el.id != id);
  findUserOrder = {
    ...findUserOrder,
    basketData: newOrderList,
  };
  http.update(`/onlineshopBasket/${findUserOrder.id}`, findUserOrder);
  // console.log("orderData ==>", orderData)
  // console.log("findUserOrder ==>", findUserOrder)
  // console.log("basketData ==>", findUserOrder.basketData)
  // console.log("newOrderList ==>", newOrderList)
};


export const plusOrderConter = (id) => {
  const userId = getDataFromLocalStorage("onlineshopUserId", true);
  const http = new httpInterceptore();
  const orderData = http.get("/onlineshopBasket");
  let findUserOrder = orderData.data.find((el) => el.userId == userId);

  const findOrderIndex = findUserOrder.basketData.findIndex(el => el.id == id)
  let order = findUserOrder.basketData.find((el) => el.id == id);
  order = {
    ...order,
    price: (order.price * order.count),
    count: order.count + 1
  }
  findUserOrder.basketData[findOrderIndex] = order
  http.update(`/onlineshopBasket/${findUserOrder.id}`, findUserOrder);
}

export const minusOrderCounter = (id) => {
  const userId = getDataFromLocalStorage("onlineshopUserId", true);
  const http = new httpInterceptore();
  const orderData = http.get("/onlineshopBasket");
  let findUserOrder = orderData.data.find((el) => el.userId == userId);

  const findOrderIndex = findUserOrder.basketData.findIndex(el => el.id == id)
  console.log("findUserOrder.basketData ==>", findUserOrder.basketData)
  let order = findUserOrder.basketData.find((el) => el.id == id);
  console.log("order ==>", order)
  order = {
    ...order,
    price: (order.price * order.count),
    count: order.count > 1 ? order.count - 1 : order.count
  }
  findUserOrder.basketData[findOrderIndex] = order
  http.update(`/onlineshopBasket/${findUserOrder.id}`, findUserOrder);
}