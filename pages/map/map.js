function updateLabel() {
  var limit = this.parentElement.getElementsByClassName("demo")[0];
  limit.innerHTML = this.value;
}

var slideContainers = document.getElementsByClassName("rangecontainer");

for (var i = 0; i < slideContainers.length; i++) {
  var slider = slideContainers[i].getElementsByClassName("range")[0];
  updateLabel.call(slider);
  slider.oninput = updateLabel;
}

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

// let docWidth = document.documentElement.offsetWidth;
// [].forEach.call(document.querySelectorAll("*"), function (el) {
//   if (
//     el.offsetWidth > docWidth ||
//     (el.parentElement && el.offsetWidth > el.parentElement.offsetWidth)
//   ) {
//     console.log(el);
//   }
// });

//dark mode
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".toggle-control input");
const headerLogo = document.querySelector(".logo img");
const mapImg = document.querySelector(".map-image");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
  mapImg.data = "../../assets/images/map-dark.svg";
  darkModeToggle.checked = true;
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  mapImg.data = "../../assets/images/map.svg";
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

//carousel

//let slidesToShow = 11;
let count = 0;
let position = 0;
const line = document.querySelector(".carousel-line");
const items = document.querySelectorAll(".animal");
//const  crslElemFirst = document.querySelector('.pets-in-zoo-animal');
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const range = document.querySelector(".carousel-range input");
let output = document.querySelector(".carousel-range .demo");
const wrapper = document.querySelector(".carousel-wrapper");
const itemsCount = items.length;
//const itemWidth = line.clientWidth / slidesToShow;
const pins = document.querySelectorAll(".animal-pin");

line.children[0].classList.add("active");

function checkSize() {
  if (window.innerWidth < 1300) {
    rollSlider();
  }
}

checkSize();

window.addEventListener("resize", checkSize);

function activatePin() {
  if (line.children[0].classList.contains("active")) {
    pins[2].classList.add("active-pin");
  } else {
    pins[2].classList.remove("active-pin");
  }
  if (line.children[1].classList.contains("active")) {
    pins[3].classList.add("active-pin");
  } else {
    pins[3].classList.remove("active-pin");
  }
  if (line.children[2].classList.contains("active")) {
    pins[1].classList.add("active-pin");
  } else {
    pins[1].classList.remove("active-pin");
  }
  if (line.children[3].classList.contains("active")) {
    pins[0].classList.add("active-pin");
  } else {
    pins[0].classList.remove("active-pin");
  }
}

function inputScroll() {
  if (+range.value === 1) {
    line.children[0].classList.add("active");
  } else {
    line.children[0].classList.remove("active");
  }
  if (+range.value === 2) {
    line.children[1].classList.add("active");
  } else {
    line.children[1].classList.remove("active");
  }
  if (+range.value === 3) {
    line.children[2].classList.add("active");
  } else {
    line.children[2].classList.remove("active");
  }
  if (+range.value === 4) {
    line.children[3].classList.add("active");
  } else {
    line.children[3].classList.remove("active");
  }
  if (+range.value === 5) {
    line.children[4].classList.add("active");
  } else {
    line.children[4].classList.remove("active");
  }
  if (+range.value === 6) {
    line.children[5].classList.add("active");
  } else {
    line.children[5].classList.remove("active");
  }
  if (+range.value === 7) {
    line.children[6].classList.add("active");
  } else {
    line.children[6].classList.remove("active");
  }
  if (+range.value === 8) {
    line.children[7].classList.add("active");
  } else {
    line.children[7].classList.remove("active");
  }
  output.innerHTML = range.value;
  activatePin();
}

range.oninput = () => inputScroll();

leftArrow.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = itemsCount - 1;
  }

  for (let i = 0; i < itemsCount; i++) {
    if (count === i && count !== 7) {
      line.children[count].classList.add("active");
      line.children[count + 1].classList.remove("active");
    }
    if (count === itemsCount - 1) {
      line.children[itemsCount - 1].classList.add("active");
      line.children[0].classList.remove("active");
    }
    activatePin();
  }

  range.value = count + 1;
  output.innerHTML = range.value;
});

rightArrow.addEventListener("click", function () {
  count++;
  //const itemsLeft = itemsCount - (Math.abs(offset) + slidesToShow * itemWidth) / itemWidth;
  if (count > itemsCount - 1) {
    count = 0;
  }
  for (let i = 0; i < itemsCount; i++) {
    if (count === i && count !== 0) {
      line.children[count].classList.add("active");
      line.children[count - 1].classList.remove("active");
    }
    if (count === 0) {
      line.children[0].classList.add("active");
      line.children[itemsCount - 1].classList.remove("active");
    }
    activatePin();
  }

  range.value = count + 1;
  output.innerHTML = range.value;
});

function rollSlider() {
  if (window.innerWidth < 1300) {
    rightArrow.addEventListener("click", function () {
      console.log(count);

      line.style.transform = `translateX(${
        (-100 / (itemsCount * 0.90)) * (count + 1)
      }%)`;
      if (count === 0) {
        line.style.transform = `translateX(${0}%)`;
      }
    });

    leftArrow.addEventListener("click", function () {
      line.style.transform = `translateX(${
        (-100 / (itemsCount * 0.97)) * count
      }%)`;
      if (count === 8) {
        line.style.transform = `translateX(${100}%)`;
      }
    });
  }
}

// pins[0].addEventListener("click", () => {
//   line.children[3].classList.add("active");
//   pins[0].classList.add("active-pin");
//   range.value = 3;
//   output.innerHTML = 4;
// });
