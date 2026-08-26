const formGenerator = ({ inputChildren, buttonChildren, submitHandler }) => {
  const formElem = document.createElement("form");
  formElem.append(inputChildren, buttonChildren);
  formElem.classList.add("custom-form");

  formElem.addEventListener("submit", (event) => {
    event.preventDefault();

    const allInputs = inputChildren.querySelectorAll(".custom-input");

    // اول blur trigger کن تا validation ها اجرا بشن
    allInputs.forEach((input) => input.dispatchEvent(new Event("blur")));

    // بعد چک کن
    const allValid = [...allInputs].every(
      (input) => input.getAttribute("data-valid") === "true",
    );

    if (allValid) {
      submitHandler(event.currentTarget);
    }
  });

  return formElem;
};
