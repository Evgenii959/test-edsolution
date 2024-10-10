/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/styles.scss":
/*!********************************!*\
  !*** ./src/assets/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_assets_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/styles.scss */ "./src/assets/styles.scss");


// burger
var burger = document.querySelector('.header__burger');
var sidebar = document.querySelector('.sidebar');
var isMenuOpen = false;
burger.addEventListener('click', function () {
  isMenuOpen = !isMenuOpen;
  burger.classList.toggle('active', isMenuOpen);
  sidebar.classList.toggle('active', isMenuOpen);
});

// slider
document.getElementById('submitButton').addEventListener('click', function () {
  var selectedSlide = document.querySelector('input[name="r"]:checked').id;
  var slideData = {};
  switch (selectedSlide) {
    case 'r1':
      slideData = {
        slideNumber: 1,
        price: '50 CR/$5'
      };
      break;
    case 'r2':
      slideData = {
        slideNumber: 2,
        price: '150 CR'
      };
      break;
    case 'r3':
      slideData = {
        slideNumber: 3,
        price: '300 CR'
      };
      break;
    case 'r4':
      slideData = {
        slideNumber: 4,
        price: '500 CR'
      };
      break;
    case 'r5':
      slideData = {
        slideNumber: 5,
        price: '1000 CR'
      };
      break;
    default:
      console.log('Слайд не выбран');
      return;
  }
  console.log('Данные отправлены:', slideData);
});

// timer

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds,
    hours;
  var interval = setInterval(function () {
    hours = Math.floor(timer / 3600);
    minutes = Math.floor(timer % 3600 / 60);
    seconds = Math.floor(timer % 60);
    display.textContent = "".concat(hours.toString().padStart(2, '0'), " : ").concat(minutes.toString().padStart(2, '0'), " : ").concat(seconds.toString().padStart(2, '0'));
    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
window.onload = function () {
  var thirtyMinutes = 60 * 30;
  var display = document.querySelector('.credit__timer');
  startTimer(thirtyMinutes, display);
};

// паралакс
window.addEventListener('scroll', function () {
  var scrolled = window.pageYOffset;
  document.querySelector('.page').style.backgroundPosition = "calc(-150px + ".concat(scrolled * 0.2, "px) calc(250px + ").concat(scrolled * 0.4, "px), \n    calc(100% - ").concat(scrolled * 0.1, "px) calc(200px + ").concat(scrolled * 0.3, "px)");
});
})();

/******/ })()
;