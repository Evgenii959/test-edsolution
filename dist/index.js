/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_assets_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/assets/styles.scss */ \"./src/assets/styles.scss\");\n\n\n// burger\nvar burger = document.querySelector('.header__burger');\nvar sidebar = document.querySelector('.sidebar');\nvar isMenuOpen = false;\nburger.addEventListener('click', function () {\n  isMenuOpen = !isMenuOpen;\n  burger.classList.toggle('active', isMenuOpen);\n  sidebar.classList.toggle('active', isMenuOpen);\n});\n\n// slider\ndocument.getElementById('submitButton').addEventListener('click', function () {\n  var selectedSlide = document.querySelector('input[name=\"r\"]:checked').id;\n  var slideData = {};\n  switch (selectedSlide) {\n    case 'r1':\n      slideData = {\n        slideNumber: 1,\n        price: '50 CR/$5'\n      };\n      break;\n    case 'r2':\n      slideData = {\n        slideNumber: 2,\n        price: '150 CR'\n      };\n      break;\n    case 'r3':\n      slideData = {\n        slideNumber: 3,\n        price: '300 CR'\n      };\n      break;\n    case 'r4':\n      slideData = {\n        slideNumber: 4,\n        price: '500 CR'\n      };\n      break;\n    case 'r5':\n      slideData = {\n        slideNumber: 5,\n        price: '1000 CR'\n      };\n      break;\n    default:\n      console.log('Слайд не выбран');\n      return;\n  }\n  console.log('Данные отправлены:', slideData);\n});\n\n// timer\n\nfunction startTimer(duration, display) {\n  var timer = duration,\n    minutes,\n    seconds,\n    hours;\n  var interval = setInterval(function () {\n    hours = Math.floor(timer / 3600);\n    minutes = Math.floor(timer % 3600 / 60);\n    seconds = Math.floor(timer % 60);\n    display.textContent = \"\".concat(hours.toString().padStart(2, '0'), \" : \").concat(minutes.toString().padStart(2, '0'), \" : \").concat(seconds.toString().padStart(2, '0'));\n    if (--timer < 0) {\n      timer = duration;\n    }\n  }, 1000);\n}\nwindow.onload = function () {\n  var thirtyMinutes = 60 * 30;\n  var display = document.querySelector('.credit__timer');\n  startTimer(thirtyMinutes, display);\n};\n\n//# sourceURL=webpack://test-edsolution/./src/index.js?");

/***/ }),

/***/ "./src/assets/styles.scss":
/*!********************************!*\
  !*** ./src/assets/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-edsolution/./src/assets/styles.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;