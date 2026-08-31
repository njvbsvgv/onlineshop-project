const enData = {
  auth: {
    login: {
      title: "Login to your account",
      subTitle: "Enter your credentials to log in to your account",
      signinInputData: [
        {
          label: "Email",
          type: "text",
          name: "email",
          placeholder: "Enter your email",
          icon: "./src/assets/icons/user.svg",
          isIconClick: false,
          validation: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessage: "Invalid email address",
          },
        },
        {
          label: "Password",
          type: "password",
          name: "password",
          placeholder: "Please Enter Your Password",
          icon: "./src/assets/icons/Eye.svg",
          isIconClick: true,
          validation: {
            minLength: 8,
            errorMessage: "Password must be at least 8 characters",
          },
        },
      ],
      submitBtn: "Login To Account",
      bottomText: {
        left: "Create an account",
        right: "New here?",
        gotoHomeBtn: "Back to Home",
      },
      toastMessage: {
        error: "No account found with this email, please sign up first",
        success: "Login successful 😍",
        passwordErrorMessage: "Password is wrong⚠️",
      },
    },
    register: {
      title: "Create an Account",
      subTitle:
        "To get started, enter your phone number to create your account.",
      signupInputData: [
        {
          label: "Email",
          type: "text",
          name: "email",
          placeholder: "Enter your email",
          icon: "./src/assets/icons/user.svg",
          isIconClick: false,
          validation: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessage: "Invalid email address",
          },
        },
        {
          label: "Full Name",
          type: "text",
          name: "fullName",
          placeholder: "Enter your full name",
          icon: "./src/assets/icons/user.svg",
          isIconClick: false,
          validation: {
            required: true,
            errorMessage: "This field is required",
          },
        },
        {
          label: "Password",
          type: "text",
          name: "password",
          placeholder: "Enter your password",
          icon: "./src/assets/icons/Eye.svg",
          isIconClick: true,
          validation: {
            minLength: 8,
            errorMessage: "Password must be at least 8 characters",
          },
        },
      ],
      submitBtn: "Sign Up",
      bottomText: {
        left: "Sign In",
        right: "New here?",
        gotoHomeBtn: "Back to Home",
      },
      toastMessage: {
        error: "An account with this email already exists",
        success: "Registration completed successfully✅",
      },
    },
  },
  header: {
    loginBtn: "Login / Register",
    logoutBtn: "Logout",
    navigationData: [
      { text: "Home Page", link: "/landing" },
      { text: "All Product", link: "/products" },
    ],
    themeModeData: [
      {
        value: "light",
        label: "Light ☀️",
        badge: "☀️",
      },
      {
        value: "dark",
        label: "Dark 🌙",
        badge: "🌙",
      },
    ],
    inputPlaceholder: "Brand name or...",
  },
  landing: {
    showAllBtn: "View All",
    productOneSection: {
      title: "Best Sellers",
    },
    productTowSection: {
      title: "New Arrivals",
    },
  },
  footer: {
    rightItem: {
      logo: "Logo",
      desc: "Lorem ipsum is placeholder text commonly used in the printing and typesetting industry, and has been used by graphic designers, printers, and publishers in newspapers and magazines.",
    },
    centerItem: {
      aboutMe: {
        label: "About Us & Products",
        list: ["Product Variety", "About Us", "Articles", "Articles"],
      },
    },
  },
  productPage: {
    inputData: [
      {
        type: "text",
        name: "text",
        placeholder: "Search...",
        isIconClick: true,
      },
    ],
    filterBox: {
      category: {
        label: "Category",
      },
      brand: {
        label: "Brands",
      },
    },
    listResult: "result",
    detail: {
      title: "Product Name",
      desc: "Description",
      sizeLabel: "Size",
      colorLabel: "Colors",
      addToBasket: "Add To Basket",
      similarProducts: "Similar Products",
      productInfoLabel: "Additional Information",
      tabInputData: {
        userComment: "User Reviews",
        description: "Product Description",
      },
    },
  },
  cartPage: {
    yourShopingCart: "Your Shoping Cart",
    purchaseDetails: "Purchase Details",
    noOrderResultMessage: "Your cart is empty",
    btnText: "Order Now",
    shippingCost: "Shipping cost",
    freeShipping: "Free shipping",
    product: "Product",
    totalAmount: "Total Amount",
    placeOrder: "Place Order",
  },
  commentFormData: {
    inputData: [
      {
        label: "Title",
        type: "text",
        name: "title",
        placeholder: "Enter the title",
        isIconClick: false,
        validation: {
          required: true,
          errorMessage: "This field is required",
        },
      },
      {
        label: "Comment",
        type: "text",
        name: "comment",
        placeholder: "Enter your comment",
        isIconClick: false,
        validation: {
          required: true,
          errorMessage: "This field is required",
        },
      },
    ],
    btnData: {
      submit: "Submit",
      reset: "Reset",
    },
    cardData: {
      title: "Title",
      caption: "Caption",
    },
    noResult: "No comment reult",
  },
  toastMessage: {
    createOrder: {
      success: "Product added to your cart successfully ✅",
      warning: "This product is already in your cart",
    },
    comment: {
      success: "Your comment was successfully submitted 😍",
      worning: "You have already submitted 3 comments",
      likeMessage: {
        success: "Like added successfully ✅",
        worning: "You have already liked this comment",
      },

      dislikeMessage: {
        success: "Dislike added successfully ✅",
        worning: "You have already disliked this comment",
      },
    },
    error: "Please log in to your account first 🚫",
  },
};
