const getSimilerProduct = (categoryName) => {
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