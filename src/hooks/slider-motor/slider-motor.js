const sliderMotor = (btnLeft, btnRight, holder, pos, posNum, itemsLength, styleChange) => {
  // let pos = 0;
  // let resultPos = 0
  const btnLeftElem = document.getElementById(btnLeft);
  const btnRightElem = document.getElementById(btnRight);
  const gallery = document.getElementById(holder);
  const length = posNum * (itemsLength - 1);

  // const setStyle = () => {
  //   gallery.style.position = "relative";
  //   gallery.style.left = "0";
  //   gallery.style.transition = "0.8s";
  // };

  gallery.style.position = "relative"
  gallery.style[styleChange] = "0"
  gallery.style.transition = "0.6s"
  btnLeftElem.addEventListener("click", () => {
    // console.log("pos ==>", pos)
    //   console.log("length", length)
    if (pos > -length) {
      console.log("pos ==>", pos)
      console.log("length", -length)
      // setStyle();
      pos -= (posNum + 1);
      // resultPos = pos
      gallery.style[styleChange] = `${pos}%`;
    }
    return pos
  });

  btnRightElem.addEventListener("click", () => {
    if (pos < 0) {
      // setStyle();
      pos += (posNum + 1);
      resultPos = pos
      gallery.style[styleChange] = `${pos}%`;
    }
    return pos
  });
  // return resultPos
};
