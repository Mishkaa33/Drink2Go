const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");

const onClickBurger = () => {
  header.classList.toggle("is-open");
};

const initMenu = () => {
  header.classList.remove("no-js");
  burger.addEventListener("click", onClickBurger);
};

export { initMenu };
