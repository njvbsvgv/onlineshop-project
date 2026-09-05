export const textAnimation = (text, time, delay, handler) => {
  let index = -1;
  let newText = "";
  setTimeout(() => {
    const animate = setInterval(() => {
      index += 1;
      if (index == text.length - 1) {
        clearInterval(animate);
      }
      newText = `${newText}${text[index]}`;
      handler(newText);
    }, time);
  }, delay * 1000)
  return newText;
};