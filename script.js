// let range = document.getElementById("myRange");
// let output = document.getElementById("demo");
// output.innerHTML = range.value;
// range.oninput = function() {
//   output.innerHTML = this.value;
// }

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

//проверяем какие элементы выходят за границы контейнеров

/*let docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll("*"), function (el) {
  if (
    el.offsetWidth > docWidth ||
    (el.parentElement && el.offsetWidth > el.parentElement.offsetWidth)
  ) {
    console.log(el);
  }
});*/

//burger menu
const burgerMenu = document.querySelector(".menu-burger");
if (burgerMenu) {
  const headerMenu = document.querySelector(".header-menu");
  burgerMenu.addEventListener("click", function (e) {
    burgerMenu.classList.toggle("menu-active");
    headerMenu.classList.toggle("menu-active");
  });
}

//topSlider
const displayedSlides = 5;
const line = document.querySelector('.slider');
const  sliderElem = document.querySelectorAll('.slider .slider-item');
//const  crslElemFirst = document.querySelector('.pets-in-zoo-animal');
const  sliderRange = document.querySelector('.watch-your-favorite-range input');
const elemCount = sliderElem.length;
 const slideWidth = line.clientWidth / displayedSlides;
sliderElem[2].classList.add('active-slide');
let sliderOutput = document.querySelector(".watch-your-favorite-range .demo");
let sliderCount = 0;
let sliderWidth = document.querySelector(".slider").offsetWidth;

function inputScroll() {
  sliderElem[2].classList.remove('active-slide');
  sliderElem[sliderCount].classList.remove('active-slide'); //0
  sliderElem[+sliderRange.value].classList.add('active-slide'); //1
  sliderCount = +sliderRange.value;
  line.style.transform = `translateX(${(-100 / (sliderElem.length * 0.97)) * (sliderCount - 2)}%)`;
  sliderOutput.innerHTML = sliderRange.value;
}


sliderRange.oninput = () => inputScroll();


//how-it-works slider

const howItWorksImages = document.querySelectorAll(
  ".how-it-works-slider .h-i-w-slider-line img"
);
const sliderLine = document.querySelector(".h-i-w-slider-line");
let count = 0;
let width;

function init() {
  width = document.querySelector(".how-it-works-slider").offsetWidth;
  sliderLine.style.width = width * howItWorksImages.length + "px";
  howItWorksImages.forEach((item) => {
    item.style.width = width + "px";
    item.style.height = "auto";
  });
  rollSlider();
}

/*сохраняет пропрорции, но получаетя не так, как в макете, если убрать это событие, то будет как в макете, то есть изображение 
будет постепенно обрезаться, высота останется изначальной*/
window.addEventListener("resize", init);
init();

const howItWorksRange = document.querySelector(".h-i-w-range input");

howItWorksRange.addEventListener("input", function () {
  if (howItWorksRange.value === "1") {
    count = 0;
    sliderLine.style.transform = "translate(-" + count * width + "px)";
  }
  if (howItWorksRange.value === "2") {
    count = 1;
    sliderLine.style.transform = "translate(-" + count * width + "px)";
  }
  if (howItWorksRange.value === "3") {
    count = 2;
    sliderLine.style.transform = "translate(-" + count * width + "px)";
  }
  if (howItWorksRange.value === "4") {
    count = 3;
    sliderLine.style.transform = "translate(-" + count * width + "px)";
  }
});

function rollSlider() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
}

//dark mode
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".toggle-control input");
const headerLogo = document.querySelector(".logo img");
const mapImg = document.querySelector(".map-image");

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled')
    mapImg.data = "../assets/images/map-dark.svg";
    darkModeToggle.checked = true; 
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
 mapImg.data = "../assets/images/map.svg";
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

//pets-in-zoo slider

let offset = 0;
let count1 = 0;
// const  slidesToScroll = 1;
 const  slidesToShow = 4;
 const crslLine = document.querySelector('.p-i-z-slider-line');
 const  crslElements = document.querySelectorAll('.pets-in-zoo-animal');
 const  crslElemFirst = document.querySelector('.pets-in-zoo-animal');
 const  leftArrow = document.querySelector('.pets-in-zoo-slider-item .left-arrow');
 const  rightArrow = document.querySelector('.pets-in-zoo-slider-item .right-arrow');
 const  PetsinZooRange = document.querySelector('.pets-in-zoo-range input');
 const itemsCount = crslElements.length;
 const itemWidth = crslLine.clientWidth / slidesToShow;
//  const movePosition = slidesToScroll * itemWidth;
 crslLine.children[0].classList.add('active-descr');
 let output = document.querySelector(".pets-in-zoo-range .demo");


  leftArrow.addEventListener('click', function() {
    count1--;
    if (count1 < 0) {
      count1 = 0;
    } 

    if (count1 === 0) {
      crslLine.children[0].classList.add('active-descr');
      crslLine.children[1].classList.remove('active-descr');
    }

    if (count1 === 1) {
      crslLine.children[1].classList.add('active-descr');
      crslLine.children[2].classList.remove('active-descr');
    }
    if (count1 === 2) {
      crslLine.children[2].classList.add('active-descr');
      crslLine.children[3].classList.remove('active-descr');
    }
    if (count1 === 3) {
      crslLine.children[3].classList.add('active-descr');
      crslLine.children[4].classList.remove('active-descr');
    }
    if (count1 === 4) {
      crslLine.children[4].classList.add('active-descr');
      crslLine.children[5].classList.remove('active-descr');
    }
    if (count1 === 5) {
      crslLine.children[5].classList.add('active-descr');
      crslLine.children[6].classList.remove('active-descr');
    }
    if (count1 === 6) {
      crslLine.children[6].classList.add('active-descr');
      crslLine.children[7].classList.remove('active-descr');
    }
  
    offset = offset - 242;
    if (offset < 0) {
      offset = 0; //960
    }
    crslLine.style.left = -offset + 'px';
    PetsinZooRange.value = count1 + 1;
    output.innerHTML =PetsinZooRange.value;
  })

  rightArrow.addEventListener('click', function() {
    count1++;
    const itemsLeft = itemsCount - (Math.abs(offset) + slidesToShow * itemWidth) / itemWidth;
    if (count1 > crslElements.length - 1) {
      count1 = 0;
    } 
    for (let i = 1; i < crslElements.length; i++) {
   
    if (count1 === i && count1 !== 0) {
      crslLine.children[count1].classList.add('active-descr');
      crslLine.children[count1 - 1].classList.remove('active-descr');
    } 
    if (count1 === 0) {
      crslLine.children[0].classList.add('active-descr');
      crslLine.children[crslElements.length - 1].classList.remove('active-descr');
    }

 }
  if (count1 >= 4) {
    offset = offset + (crslLine.clientWidth / slidesToShow);
    
  }
    if (itemsLeft === 0) {
      offset = 0;
    }

    crslLine.style.left = -offset + 'px';
    PetsinZooRange.value = count1 + 1;
    output.innerHTML =PetsinZooRange.value;
  })

  PetsinZooRange.addEventListener("input", function () {
    let rangeValue = +PetsinZooRange.value - 1;
    const itemsOnRight = itemsCount - (Math.abs(offset) + slidesToShow * itemWidth) / itemWidth;
    if (itemsOnRight < 0) {
      itemsOnRight = 0;
    }
    const itemsOnLeft = itemsCount - Math.abs(offset) / itemWidth;
    if (rangeValue === 0 && itemsOnRight === 4) {      
      crslLine.children[rangeValue].classList.add('active-descr'); 
      crslLine.children[rangeValue +1].classList.remove('active-descr');
    }
    if (rangeValue === 1 && itemsOnRight === 4) {      
      crslLine.children[rangeValue].classList.add('active-descr'); 
      crslLine.children[rangeValue -1].classList.remove('active-descr');
      crslLine.children[rangeValue +1].classList.remove('active-descr');
    }
    if (rangeValue === 2 && itemsOnRight === 4) {
      crslLine.children[rangeValue].classList.add('active-descr'); 
      crslLine.children[rangeValue -1].classList.remove('active-descr');
      crslLine.children[rangeValue +1].classList.remove('active-descr');
    }
    if (rangeValue === 3 && itemsOnRight === 4) {
      crslLine.children[rangeValue].classList.add('active-descr'); 
      crslLine.children[rangeValue -1].classList.remove('active-descr');
      crslLine.children[rangeValue +1].classList.remove('active-descr');
    }
    if (rangeValue === 4 && itemsOnRight === 4) {
      offset = offset + (crslLine.clientWidth / slidesToShow);
      crslLine.style.left = -offset + 'px';
      crslLine.children[rangeValue].classList.add('active-descr');
      crslLine.children[rangeValue -1].classList.remove('active-descr');
    }
    if (rangeValue === 5 && itemsOnRight === 3) {
      offset = offset + (crslLine.clientWidth / slidesToShow);
      crslLine.style.left = -offset + 'px';
      crslLine.children[rangeValue].classList.add('active-descr');
      crslLine.children[rangeValue -1].classList.remove('active-descr');
    }
    if (rangeValue === 6 && itemsOnRight === 2) {
      offset = offset + (crslLine.clientWidth / slidesToShow);
      crslLine.style.left = -offset + 'px';
      crslLine.children[rangeValue].classList.add('active-descr');
      crslLine.children[rangeValue -1].classList.remove('active-descr');
    }
    if (rangeValue === 7 && itemsOnRight === 1) {
      offset = offset + (crslLine.clientWidth / slidesToShow);
      crslLine.style.left = -offset + 'px';
      crslLine.children[rangeValue].classList.add('active-descr');
      crslLine.children[rangeValue -1].classList.remove('active-descr');
    }
    if (rangeValue === 6 && itemsOnRight !== 2) {
      offset = offset - (crslLine.clientWidth / slidesToShow);
      crslLine.style.left = -offset + 'px';
      crslLine.children[rangeValue].classList.add('active-descr');
      crslLine.children[rangeValue +1].classList.remove('active-descr');
    }
    if (rangeValue === 5 && itemsOnRight !== 3) {
      offset = offset - (crslLine.clientWidth / slidesToShow);
      crslLine.style.left = -offset + 'px';
      crslLine.children[rangeValue].classList.add('active-descr');
      crslLine.children[rangeValue +1].classList.remove('active-descr');
    }
    if (rangeValue === 4 && itemsOnRight !== 4) {
      offset = offset - (crslLine.clientWidth / slidesToShow);
      crslLine.style.left = -offset + 'px';
      crslLine.children[rangeValue].classList.add('active-descr');
      crslLine.children[rangeValue +1].classList.remove('active-descr');
    }
    if (rangeValue === 3 && itemsOnRight !== 4) {
      offset = offset - (crslLine.clientWidth / slidesToShow);
      crslLine.style.left = -offset + 'px';

      crslLine.children[rangeValue].classList.add('active-descr');
      crslLine.children[rangeValue +1].classList.remove('active-descr');
    }
    // if (rangeValue === 2 && itemsOnLeft === 8) {
    //   offset = offset - (crslLine.clientWidth / slidesToShow);
    //   crslLine.children[rangeValue].classList.add('active-descr');
    //   crslLine.children[rangeValue +1].classList.remove('active-descr');
    // }
  });

  //slides[this.count].classList.add('active');
  //PetsinZooRange.value = count1;
//console.log(PetsinZooRange.value)

 //crslElements.forEach((elem) => {
//    elem.style.minWidth = `${itemWidth}px`
//  });

//  rightArrow.addEventListener('click', function() {
//     const itemsLeft = itemsCount - (Math.abs(offset) + slidesToShow * itemWidth) / itemWidth;
//     offset -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
//     setPosition();
//    // checkBtn();
//   });

//   leftArrow.addEventListener('click', function() {
//     const itemsLeft = itemsCount - Math.abs(offset) / itemWidth;
//     offset += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
//     setPosition();
//     checkBtn();
//   });

//   const setPosition = () => {
//     crslLine.style.transform = `translateX(${offset}px)`;
//   };