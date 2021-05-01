//меню бургер

const burgerMenu = document.querySelector(".menu-burger");
if (burgerMenu) {
  const headerMenu = document.querySelector(".header-menu");
  burgerMenu.addEventListener("click", function (e) {
    burgerMenu.classList.toggle("menu-active");
    headerMenu.classList.toggle("menu-active");
  });
}

//проверяем какие элементы выходят за границы контейнеров

let docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (
    el.offsetWidth > docWidth ||
    (el.parentElement && el.offsetWidth > el.parentElement.offsetWidth)
  ) {
    console.log(el);
  }
});