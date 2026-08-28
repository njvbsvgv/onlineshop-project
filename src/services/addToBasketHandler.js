const addToBasketHandler = (productId) => {
  requestMeddleware(() => {
    const userId = getDataFromLocalStorage("onlineshopUserId", true);
    const http = new httpInterceptore();
    const basket = http.get("/onlineshopBasket");
    let newBasket = []
    const findData = basket.data.find((el) => el.userId == userId);
    const product = http.get(`/products/${productId}`);
    if (findData) {
      const findOrder = findData.basketData.find((el) => el.id == productId);
      if (findOrder) {
          toast().worning("این محصول در سبد خرید شما موجود میباشد")
      } else {
        const newData = {
          id: findData.id,
          userId,
          basketData: [...findData.basketData, product.data],
        };
        newBasket.push(newData)
        http.update(`/onlineshopBasket/${findData.id}`, newData)
        toast().success("محصول به سبد خرید شما اضافه شد✅")
      }
    } else {
      const newData = {
        userId,
        basketData: [product.data],
      };
      newBasket.push(newData)
      http.create("/onlineshopBasket", newData)
      toast().success("محصول به سبد خرید شما اضافه شد✅")
    }
  })
};