//меню бургер

const burgerMenu = document.querySelector(".menu-burger");
if (burgerMenu) {
  const headerMenu = document.querySelector(".header-menu");
  burgerMenu.addEventListener("click", function (e) {
    burgerMenu.classList.toggle("menu-active");
    headerMenu.classList.toggle("menu-active");
  });
}


//dark mode
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".toggle-control input");
const headerLogo = document.querySelector(".logo img");
const mapImg = document.querySelector(".map-image");

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled')
    darkModeToggle.checked = true; 
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

//carousel

let count = 0;
let position = 0;
const line = document.querySelector(".carousel-line");
const items = document.querySelectorAll(".animal");
//const itemWidth = items[0].getBoundingClientRect();
console.log(itemWidth)
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const wrapper = document.querySelector(".carousel-wrapper");
const itemsCount = items.length;