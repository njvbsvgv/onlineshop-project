class httpInterceptore {
  baseUrl = "dataBase";
  dataBase = JSON.parse(localStorage.getItem("dataBase"));

  constructor() {}

  get(endUrl) {
    const splitedEndUrl = endUrl.split("/");
    let targetId = splitedEndUrl[2];
    // splitedEndUrl.forEach((el) => {
    //   if (el != "" && !isNaN(el)) {
    //     targetId = +el;
    //   }
    // });
    let response = this.dataBase[splitedEndUrl[1]];
    if (targetId) {
      if (isNaN(targetId)) {
        response = response.find((el) => el.email == targetId);
      }else {
        response = response.find((el) => el.id == targetId);
      }
    }
    console.log("targetId ==>", targetId)
    return {
      status: 200,
      data: response ? response : null,
      totalCount: response ? response.length : 0,
      message: `get ${splitedEndUrl[1]} data successfully😍`,
    };
  }

  create(endUrl, data) {
    const splitedEndUrl = endUrl.split("/")[1];
    const findModel = this.dataBase[splitedEndUrl];
    const newData = [...findModel, {id: findModel.length + 1, ...data}];
    this.dataBase = { ...this.dataBase, [splitedEndUrl]: newData };
    localStorage.setItem("dataBase", JSON.stringify(this.dataBase));
    return {
      status: 200,
      message: `create a new ${splitedEndUrl} successfully😍`,
    };
  }

  update(endUrl, data) {
    const splitedEndUrl = endUrl.split("/");
    const url = splitedEndUrl[1];
    let targetId = false;
    splitedEndUrl.forEach((el) => {
      if (el != "" && !isNaN(el)) {
        targetId = +el;
      }
    });
    const source = this.dataBase[url];
    const findIndex = source.findIndex((el) => el.id == targetId);
    const findData = source.find((el) => el.id == targetId);
    source[findIndex] = {id: findData.id, ...data};
    this.dataBase = { ...this.dataBase, [url]: source };
    localStorage.setItem("dataBase", JSON.stringify(this.dataBase));
    return {
      status: 200,
      message: `update ${url} successfully😍`,
    };
  }

  delete(endUrl) {
    const splitedEndUrl = endUrl.split("/")[1];
    const findModel = this.dataBase[splitedEndUrl]
    let targetId = false;
    splitedEndUrl.forEach((el) => {
      if (el != "" && !isNaN(el)) {
        targetId = +el;
      }
    });
    const filtredData = findModel.filter(el => el.id != targetId)
    this.dataBase = {...this.dataBase, [splitedEndUrl]: filtredData}
    return {
      status: 200,
      message: "delete successfully✅"
    }
  }
}
