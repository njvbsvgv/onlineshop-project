let createPageFlag = true;

const signinInputData = [
  {
    label: "شماره تماس",
    type: "text",
    placeholder: "شماره تماس خود را وارد کنید",
    icon: "./src/assets/icons/user.svg",
    isIconClick: false,
  },
  {
    label: "رمز عبور",
    type: "password",
    placeholder: "رمز عبور خود را وارد کنید",
    icon: "./src/assets/icons/Eye.svg",
    isIconClick: true,
  },
];

const signUpInputData = [
  {
    label: "شماره تماس",
    type: "text",
    placeholder: "شماره تماس خود را وارد کنید",
    icon: "./src/assets/icons/user.svg",
    isIconClick: false,
  },
];

// const productData = [
//   {
//     photo:
//       "./src/assets/photos/products/b75fb17c64ed0f427bc9390d49415c3fa4d1752e.jpg",
//     title: " کلاه کپ ان وای ",
//     description: "این کلاه یکی از بینظیرترین کلاه های بازاره در عصر امروز",
//     price: "45000",
//   },
//   {
//     photo:
//       "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
//     title: " کلاه کپ ان وای ",
//     description: "این کلاه یکی از بینظیرترین کلاه های بازاره در عصر امروز",
//     price: "45000",
//   },
//   {
//     photo:
//       "./src/assets/photos/products/b75fb17c64ed0f427bc9390d49415c3fa4d1752e.jpg",
//     title: " کلاه کپ ان وای ",
//     description: "این کلاه یکی از بینظیرترین کلاه های بازاره در عصر امروز",
//     price: "45000",
//   },
//   {
//     photo:
//       "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
//     title: " کلاه کپ ان وای ",
//     description: "این کلاه یکی از بینظیرترین کلاه های بازاره در عصر امروز",
//     price: "45000",
//   },
//   {
//     photo:
//       "./src/assets/photos/products/b75fb17c64ed0f427bc9390d49415c3fa4d1752e.jpg",
//     title: " کلاه کپ ان وای ",
//     description: "این کلاه یکی از بینظیرترین کلاه های بازاره در عصر امروز",
//     price: "45000",
//   },
//   {
//     photo:
//       "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
//     title: " کلاه کپ ان وای ",
//     description: "این کلاه یکی از بینظیرترین کلاه های بازاره در عصر امروز",
//     price: "45000",
//   },
// ];

const sizeList = [
  {id: 1, name: "XL"},
  {id: 2, name: "L"},
  {id: 3, name: "M"},
  {id: 4, name: "S"},
  {id: 5, name: "XS"},
]

const colorList = [
  {id: 1, name: "آبی"},
  {id: 2, name: "سبز"},
  {id: 3, name: "سرمه ای"},
  {id: 4, name: "صورتی"},
  {id: 5, name: "مشکی"},
]

const products = [
  {
    id: 1,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "تاپ بیسیک کالرز منگو ",
    description: "این  تاپ بیسیک کالرز منگو یکی از بهترین های بازار هست",
    price: 489000,
    discount: 0,
    isFavorite: false,
    isAdded: false,
    category: ["تیشرت"],
    size: "xl",
    status: ["پرفروش ترین"],
  },
  {
    id: 2,
    image:
      "./src/assets/photos/products/b75fb17c64ed0f427bc9390d49415c3fa4d1752e.jpg",
    title: "تاپ بیسیک ویکند اچ اند ام",
    description: "این  تاپ بیسیک ویکند اچ اند ام یکی از بهترین محصولات بازاره",
    price: 399000,
    discount: 10,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["پرفروش ترین"],
  },
  {
    id: 3,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "تیشرت کراپ زارا",
    description: "این تیشرت کراپ زارا یکی از بهترین محصولات بازاره",
    price: 495000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["md", "xl", "2xl",],
    status: ["پرفروش ترین"],
  },
  {
    id: 4,
    image:
      "./src/assets/photos/products/b75fb17c64ed0f427bc9390d49415c3fa4d1752e.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["پرفروش ترین"],
  },
  {
    id: 5,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["پرفروش ترین"],
  },
  {
    id: 6,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["پرفروش ترین"],
  },
  {
    id: 7,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["پرفروش ترین"],
  },
  {
    id: 8,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["پرفروش ترین"],
  },
  {
    id: 9,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["پرفروش ترین"],
  },
  {
    id: 10,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["پرفروش ترین"],
  },
  {
    id: 11,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["جدیدترین"],
  },
  {
    id: 12,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["جدیدترین"],
  },
  {
    id: 13,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["جدیدترین"],
  },
  {
    id: 14,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["جدیدترین"],
  },
  {
    id: 15,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["جدیدترین"],
  },
  {
    id: 16,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["جدیدترین"],
  },
  {
    id: 17,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["جدیدترین"],
  },
  {
    id: 18,
    image:
      "./src/assets/photos/products/a0175fa30bc1f7de751cb64ae7aaece8f1370067.jpg",
    title: "کلاه کپ ان وای",
    description: "این کلاه کپ ان وای یکی از بهترین محصولات بازاره",
    price: 435000,
    discount: 0,
    isFavorite: false,
    isBasket: false,
    category: ["پیراهن"],
    size: ["xl"],
    status: ["جدیدترین"],
  },
];

const categoryData = [
  { id: 1, text: "دورس" },
  { id: 2, text: "لباس زیر" },
  { id: 3, text: "شلوار جین" },
  { id: 4, text: "هودی" },
  { id: 5, text: "تیشرت" },
  { id: 6, text: "پیراهن" },
  { id: 7, text: "تیشرت" },
  { id: 8, text: "تیشرت" },
  { id: 9, text: "تیشرت" },
  { id: 10, text: "تیشرت" },
  { id: 11, text: "تیشرت" },
  { id: 12, text: "تیشرت" },
  { id: 13, text: "تیشرت" },
];

const brandData = [
  { id: 1, text: "باینت" },
  { id: 2, text: "ایزی دو" },
  { id: 3, text: "کروم" },
  { id: 4, text: "چرم مشهد" },
  { id: 5, text: "مکرون" },
  // { id: 6, text: "تیشرت" },
  // { id: 7, text: "تیشرت" },
  // { id: 8, text: "تیشرت" },
  // { id: 9, text: "تیشرت" },
  // { id: 10, text: "تیشرت" },
  // { id: 11, text: "تیشرت" },
  // { id: 12, text: "تیشرت" },
  // { id: 13, text: "تیشرت" },
];
