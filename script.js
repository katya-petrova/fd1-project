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
    mapImg.data = "./assets/images/map-dark.svg";
    darkModeToggle.checked = true; 
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
 mapImg.data = "./assets/images/map.svg";
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
  });

  //testimonials

  $('.feedback-slider-wrapper').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // const feedbacks = document.querySelectorAll(
  //   ".feedback"
  // );
  // const feedbackLine = document.querySelector(".feedback-line");
  // let count2 = 0;
  // let width2;
  
  // function init2() {
  //   if (window.innerWidth > 1300) {
  //   width2 = document.querySelector(".line-wrap").offsetWidth;
  //   feedbackLine.style.width2 = width2 * feedbacks.length + "px";
  //   feedbacks.forEach((item) => {
  //     item.style.width = width2 + "px"; 
  //   });
  //   rollSlider2();
  // }
  // }
  
  // /*сохраняет пропрорции, но получаетя не так, как в макете, если убрать это событие, то будет как в макете, то есть изображение 
  // будет постепенно обрезаться, высота останется изначальной*/
  // window.addEventListener("resize", init2);
  // init2();
  
  // const feedbackRange = document.querySelector(".testimonials-range input");
  
  // feedbackRange.addEventListener("input", function () {
  //   for (let i = 0; i < feedbacks.length; i++) {
  //     count2 = feedbackRange.value - 1;
  //     rollSlider2()
  //   }
  // });
  
  // function rollSlider2() {
  //   feedbackLine.style.transform = "translate(-" + count2 * width2 + "px)";
  // }

  //-----attempt to make slider using class-----//

  // function Ant(crslId) {

  //   let id = document.getElementById(crslId);
  //   if(id) {
  //     this.crslRoot = id
  //   }
  //   else {
  //     this.crslRoot = document.querySelector('.feedback-slider-wrapper')
  //   };
  
  //   // Carousel objects
  //   this.crslList = this.crslRoot.querySelector('.feedback-line');
  //   this.crslElements = this.crslList.querySelectorAll('.feedback');
  //   this.crslElemFirst = this.crslList.querySelector('.feedback');
  //   this.leftArrow = this.crslRoot.querySelector('.feedback-slider-item .left-arrow');
  //   this.rightArrow = this.crslRoot.querySelector('.feedback-slider-item .right-arrow');
  //   this.feedbackRange = this.crslRoot.querySelector('.estimonials-range input');

  
  //   // Initialization
  //   this.options = Ant.defaults;
  //   Ant.initialize(this)
  // };
  
  // Ant.defaults = {
  
  //   // Default options for the carousel
  //   elemVisible: 8, // Кол-во отображаемых элементов в карусели
  //   loop: true,     // Бесконечное зацикливание карусели 
  //   auto: false,     // Автоматическая прокрутка
  //   interval: 5000, // Интервал между прокруткой элементов (мс)
  //   speed: 750,     // Скорость анимации (мс)
  //   touch: true,    // Прокрутка  прикосновением
  //   arrows: true,   // Прокрутка стрелками
  //   dots: false      // Индикаторные точки
  // };
  
  // Ant.prototype.elemPrev = function(num) {
  //   num = num || 1;
  
  //   if(!this.options.loop) {  // сдвиг вправо без цикла
  //     this.currentOffset += this.elemWidth*num;
  //     this.crslList.style.marginLeft = this.currentOffset + 'px';
  //     if(this.currentElement == 0) {
  //       this.leftArrow.style.display = 'none'; this.touchPrev = false
  //     }
  //     this.rightArrow.style.display = 'block'; this.touchNext = true
  //   }
  //   else {                    // сдвиг вправо с циклом
  //     let elm, buf, this$ = this;
  //     for(let i=0; i<num; i++) {
  //       elm = this.crslList.lastElementChild;
  //       buf = elm.cloneNode(true);
  //       this.crslList.insertBefore(buf, this.crslList.firstElementChild);
  //       this.crslList.removeChild(elm)
  //     }; 
  //     this.crslList.style.marginLeft = '-' + this.elemWidth*num + 'px';
  //     let compStyle = window.getComputedStyle(this.crslList).marginLeft;
  //     this.crslList.style.cssText = 'transition:margin '+this.options.speed+'ms ease;';
  //     this.crslList.style.marginLeft = '0px';
  //     setTimeout(function() {
  //       this$.crslList.style.cssText = 'transition:none;'
  //     }, this.options.speed)
  //   }
  // };
  
  // Ant.prototype.elemNext = function(num) {
  //   num = num || 1;
  
  //   if(!this.options.loop) {  // сдвиг влево без цикла
  //     this.currentOffset -= this.elemWidth*num;
  //     this.crslList.style.marginLeft = this.currentOffset + 'px';
  //      console.log(this.currentElement);
  //     if(this.currentElement == this.dotsVisible-1) {
  //       this.rightArrow.style.display = 'none'; this.touchNext = false
  //     }
  //     this.leftArrow.style.display = 'block'; this.touchPrev = true
  //   }
  //   else {                    // сдвиг влево с циклом
  //     let elm, buf, this$ = this;
  //     this.crslList.style.cssText = 'transition:margin '+this.options.speed+'ms ease;';
  //     this.crslList.style.marginLeft = '-' + this.elemWidth*num + 'px';
  //     setTimeout(function() {
  //       this$.crslList.style.cssText = 'transition:none;';
  //       for(let i=0; i<num; i++) {
  //         elm = this$.crslList.firstElementChild;
  //         buf = elm.cloneNode(true); this$.crslList.appendChild(buf);
  //         this$.crslList.removeChild(elm)
  //       };
  //       this$.crslList.style.marginLeft = '0px'
  //     }, this.options.speed)
  //   }
  // };
  
  // Ant.initialize = function(that) {
  
  //   // Constants
  //   that.elemCount = that.crslElements.length; // Количество элементов
  // //  that.dotsVisible = that.elemCount;         // Число видимых точек
  //   let elemStyle = window.getComputedStyle(that.crslElemFirst);
  
  //   that.elemWidth = that.crslElemFirst.offsetWidth +  // Ширина элемента (без margin)
  //     parseInt(elemStyle.marginLeft) + parseInt(elemStyle.marginRight);
  
  //   // Variables
  //   that.currentElement = 0; that.currentOffset = 0;
  //   that.touchPrev = true; that.touchNext = true;
  //   let xTouch, yTouch, xDiff, yDiff, stTime, mvTime;
  //   let bgTime = getTime();
  
  //   // Functions
  //   function getTime() {
  //     return new Date().getTime();
  //   };
  
  //   if(that.options.touch) {   // инициализация прокрутки прикосновением
  //     that.crslList.addEventListener('touchstart', function(e) {
  //       xTouch = parseInt(e.touches[0].clientX);
  //       yTouch = parseInt(e.touches[0].clientY);
  //       stTime = getTime()
  //     }, false);
  //     that.crslList.addEventListener('touchmove', function(e) {
  //       if(!xTouch || !yTouch) return;
  //       xDiff = xTouch - parseInt(e.touches[0].clientX);
  //       yDiff = yTouch - parseInt(e.touches[0].clientY);
  //       mvTime = getTime();
  //       if(Math.abs(xDiff) > 15 && Math.abs(xDiff) > Math.abs(yDiff) && mvTime - stTime < 75) {
  //         stTime = 0;
  //         if(that.touchNext && xDiff > 0) {
  //           bgTime = mvTime; that.elemNext()
  //         }
  //         else if(that.touchPrev && xDiff < 0) {
  //           bgTime = mvTime; that.elemPrev()
  //         }
  //       }
  //     }, false)
  //   };
  
  //   if(that.options.arrows) {  // инициализация стрелок
  //     if(!that.options.loop) that.crslList.style.cssText =
  //       'transition:margin '+that.options.speed+'ms ease;';
  //     that.leftArrow.addEventListener('click', function() {
  //       let fnTime = getTime();
  //       if(fnTime - bgTime > that.options.speed) {
  //         bgTime = fnTime; that.elemPrev()
  //       }
  //     }, false);
  //     that.rightArrow.addEventListener('click', function() {
  //       let fnTime = getTime();
  //       if(fnTime - bgTime > that.options.speed) {
  //         bgTime = fnTime; that.elemNext()
  //       }
  //     }, false)
  //   }
  // };
  
  // new Ant();
  
  
  