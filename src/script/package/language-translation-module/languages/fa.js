const faData = {
  auth: {
    login: {
      title: "ورود به حساب کاربری",
      subTitle: "برای ورود به حساب کاربری مشخصات خود را وارد کنید",
      signinInputData: [
        {
          label: "ایمیل",
          type: "text",
          name: "email",
          placeholder: "ایمیل خود را وارد نمایید",
          icon: "./src/assets/icons/user.svg",
          isIconClick: false,
          validation: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessage: "آدرس ایمیل معتبر نیست",
          },
        },
        {
          label: "رمز عبور",
          type: "password",
          name: "password",
          placeholder: "رمز عبور خود را وارد کنید",
          icon: "./src/assets/icons/Eye.svg",
          isIconClick: true,
          validation: {
            minLength: 8,
            errorMessage: "رمز عبور باید حداقل ۸ کاراکتر باشد",
          },
        },
      ],
      submitBtn: "ورود به حساب کاربری",
      bottomText: {
        left: "ایجاد حساب کاربری",
        right: "تازه وارد هستید ؟",
        gotoHomeBtn: "بازگشت به خانه",
      },
      toastMessage: {
        error: "کاربر با این ایمل وجود ندارد، لطفا ابتدا ثبت نام کنید",
        success: "ورود موفقیت آمیز😍",
        passwordErrorMessage: "پسوورد اشتباه است⚠️",
      },
    },
    register: {
      title: "ایجاد حساب کاربری",
      subTitle: "برای شروع، شماره تماس خود را وارد کنید تا حساب شما ساخته شود.",
      signupInputData: [
        {
          label: "ایمیل",
          type: "text",
          name: "email",
          placeholder: "ایمیل خود را وارد نمایید",
          icon: "./src/assets/icons/user.svg",
          isIconClick: false,
          validation: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessage: "آدرس ایمیل معتبر نیست",
          },
        },
        {
          label: "نام و نام خانوادگی",
          type: "text",
          name: "fullName",
          placeholder: "نام و نام خانوادگی خود را وارد نمایید",
          icon: "./src/assets/icons/user.svg",
          isIconClick: false,
          validation: {
            required: true,
            errorMessage: "این فیلد اجباری است",
          },
        },
        {
          label: "پسوورد",
          type: "password",
          name: "password",
          placeholder: "پسوورد خود را وارد نمایید",
          icon: "./src/assets/icons/Eye.svg",
          isIconClick: true,
          validation: {
            minLength: 8,
            errorMessage: "رمز عبور باید حداقل ۸ کاراکتر باشد",
          },
        },
      ],
      submitBtn: "ثبت نام",
      bottomText: {
        left: "وارد شوید",
        right: "تازه وارد هستید ؟",
        gotoHomeBtn: "بازگشت به خانه",
      },
      toastMessage: {
        error: "کاربر با این ایمیل از قبل وجود دارد",
        success: "ثبت نام با موفقیت انجام شد",
      },
    },
  },
  header: {
    loginBtn: "ورود / ثبت نام",
    logoutBtn: "خروج",
    navigationData: [
      { text: "صفحه اصلی", link: "/landing" },
      { text: "همه محصولات", link: "/products" },
      { text: "اخبار", link: "/news" },
    ],
    inputPlaceholder: "نام لباس برند یا...",
  },
  landing: {
    showAllBtn: "مشاهده بیشتر",
    productOneSection: {
      title: "پرفروش ترین ها",
    },
    productTowSection: {
      title: "جدید ترین ها",
    },
  },
  footer: {
    rightItem: {
      logo: "لوگو",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون.",
    },
    centerItem: {
      aboutMe: {
        label: "درباره ما و محصولات",
        list: ["تنوع محصولات", "درباره ما", "مقالات", "مقالات"],
      },
    },
  },
  productPage: {
    inputData: [
      {
        type: "text",
        name: "text",
        placeholder: "جستجو کنید...",
        // icon: "./src/assets/icons/user.svg",
        isIconClick: true,
      },
    ],
    filterBox: {
      category: {
        label: "دسته بندی",
      },
      brand: {
        label: "برند ها",
      },
    },
    listResult: "نتیجه",
    detail: {
      title: "نام محصول",
      desc: "توضیحات",
      sizeLabel: "سایزبندی",
      colorLabel: "رنگ ها",
      addToBasket: "افزودن به سبد خرید",
      similarProducts: "محصولات مشابه",
      commentData: {
        inputData: [
          {
            label: "عنوان",
            type: "text",
            name: "title",
            placeholder: "عنوان را وارد کنید",
            isIconClick: false,
            validation: {
              required: true,
              errorMessage: "این فیلد اجباری است",
            },
          },
          {
            label: "کامنت",
            type: "text",
            name: "comment",
            placeholder: "نظر خود را وارد نمایید",
            isIconClick: false,
            validation: {
              required: true,
              errorMessage: "این فیلد اجباری است",
            },
          },
        ],
        btnData: {
          submit: "ساختن",
          reset: "لغو",
        },
      },
    },
  },
  commentFormData: {
    inputData: [
      {
        label: "عنوان",
        type: "text",
        name: "title",
        placeholder: "عنوان را وارد کنید",
        isIconClick: false,
        validation: {
          required: true,
          errorMessage: "این فیلد اجباری است",
        },
      },
      {
        label: "کامنت",
        type: "text",
        name: "comment",
        placeholder: "نظر خود را وارد نمایید",
        isIconClick: false,
        validation: {
          required: true,
          errorMessage: "این فیلد اجباری است",
        },
      },
    ],
    btnData: {
      submit: "ساختن",
      reset: "لغو",
    },
    cardData: {
      title: "عنوان",
      caption: "کپشن"
    },
    noResult: "کامنتی وجود ندارد"
  },
  toastMessge: {
    createOrder: {
      success: "محصول به سبد خرید شما اضافه شد✅",
      worning: "این محصول در سبد خرید شما موجود میباشد",
    },
    error: "لطفا ابتدا وارد حساب کاربری خود شوید🚫",
  },
};
