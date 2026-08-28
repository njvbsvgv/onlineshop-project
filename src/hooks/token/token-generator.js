const list = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "$",
  "&",
];

const generate = () => {
  let randomNam = 0;
  let token = "";
  list.forEach(() => {
    randomNam = Math.round(Math.random() * list.length);
    token += list[randomNam];
  });
  return token;
};

const tokenGenerator = () => {
  let token = generate();
  const interval = setInterval(() => {
    // console.log("x")
    if (token.length > 30) {
      clearInterval(interval);
    } else {
      token = generate();
    }
  }, 100);
  return token;
  console.log("token ==>", token);
};
