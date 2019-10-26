(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/Pages/Home.js":
/*!************************************!*\
  !*** ./resources/js/Pages/Home.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeaderDescription */ "./resources/js/components/HeaderDescription.js");
/* harmony import */ var _components_MenuIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MenuIcons */ "./resources/js/components/MenuIcons.js");
/* harmony import */ var _components_BreadCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BreadCard */ "./resources/js/components/BreadCard.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }







function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Panadr\xEDa La Especial"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "PANADER\xEDA",
    description: "Bienvenido a Panader\xEDa la Especial donde encotnrar\xE1s la mejor calidad y servicio"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MenuIcons__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "w-1/2 mb-5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "flex flex-wrap w-full p-0 pb-16 sm:px-2"
  }, _toConsumableArray(Array(10)).map(function (_, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadCard__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./resources/js/Shared/Layout.js":
/*!***************************************!*\
  !*** ./resources/js/Shared/Layout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./resources/js/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./resources/js/components/Footer.js");




function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.title = title;
  }, [title]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    id: "content-wrapper",
    className: "flex flex-wrap w-full p-0"
  }, children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/***/ }),

/***/ "./resources/js/components/BreadCard.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/BreadCard.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BreadCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function BreadCard() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container bread-card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "cursor-pointer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 flex sm:bg-brand-gray"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "m-auto w-full object-cover align-middle sm:h-64",
    src: "/breads/Cuernito.png",
    alt: "Banderilla mini"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 flex flex-col h-32 overflow-hidden sm:mt-4 sm:h-24"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 sm:text-center text-gray-600 font-medium uppercase"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "first-letter-bigger"
  }, "Banderilla mini"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$11.50"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs align-top"
  }, "p/p"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 truncate text-gray-500 text-base"
  }, "Pan de pasta hojaldrada, con forma de una barra larga y aplanada barnizada con clara de huevo y az\xFAcar. \xA1Buen\xEDsimas para remojar en chocolate!"))));
}
;

/***/ }),

/***/ "./resources/js/components/Footer.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Footer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "bg-brand-orange flex h-16 absolute bottom-0 w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex-1 m-auto text-center text-white text-xs"
  }, "Pol\xEDtica de Privacidad"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "Logo-Short.svg",
    className: "h-10 flex-1 flex-grow-0 m-auto",
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex-1 m-auto text-center text-white text-xs"
  }, "T\xE9rminos y condiciones"));
}
;

/***/ }),

/***/ "./resources/js/components/Header.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Header.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "md:px-12 bg-brand-orange"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex p-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-2 m-auto h-20 hidden lg:block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/svg/Logo-Full.svg",
    className: "my-auto h-full",
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-row lg:flex-col flex-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "flex-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "cursor-pointer stroke-current text-white lg:hidden feather feather-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "hidden lg:flex items-center justify-end text-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "md:ml-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "block md:inline",
    href: "#"
  }, "Pan de dulce")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "md:ml-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "block md:inline",
    href: "#"
  }, "Pan de sal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "md:ml-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "block md:inline",
    href: "#"
  }, "Bocadillos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "md:ml-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "block md:inline",
    href: "#"
  }, "Reposter\xEDa")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "md:ml-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "block md:inline",
    href: "#"
  }, "Favoritos")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "Logo-Short.svg",
    className: "lg:hidden pt-2 h-20 flex-1 flex-grow-0 m-auto",
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 flex justify-end lg:items-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-4 mr-3 fill-current stroke-current text-white",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Empty_Tray"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M71.22,62.86H66.67L65,61.43a37.85,37.85,0,0,0,8.83-24.29A36.89,36.89,0,1,0,37,74.27a38.3,38.3,0,0,0,24.22-8.85L63,66.85v4.58L91.46,100,100,91.43ZM37,62.86a25.7,25.7,0,1,1,25.65-25.7A25.58,25.58,0,0,1,37,62.86Z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "h-4 fill-current stroke-current text-white",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 44.83"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Empty_Tray"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Tray",
    points: "0 34.83 100 34.83 89.37 44.83 10.59 44.83 0 34.83"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Empty"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M27.33,10.15a2.51,2.51,0,0,1,3.21,1.5L35.78,26a2.42,2.42,0,0,1-1.41,3.17,2.57,2.57,0,0,1-3.29-1.46L25.84,13.36A2.51,2.51,0,0,1,27.33,10.15Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M72.64,10.15a2.51,2.51,0,0,1,1.49,3.21L68.92,27.75a2.43,2.43,0,0,1-3.12,1.53A2.58,2.58,0,0,1,64.22,26l5.21-14.39A2.51,2.51,0,0,1,72.64,10.15Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M50,0a2.5,2.5,0,0,1,2.5,2.5v25A2.43,2.43,0,0,1,50.1,30a2.58,2.58,0,0,1-2.59-2.5V2.5A2.5,2.5,0,0,1,50,0Z"
  }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "header-lines"
  }));
}
;

/***/ }),

/***/ "./resources/js/components/HeaderDescription.js":
/*!******************************************************!*\
  !*** ./resources/js/components/HeaderDescription.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderDescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function HeaderDescription(props) {
  var title = props.title,
      description = props.description;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "mt-24 w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block text-4xl text-center font-title font-semibold"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block p-2 text-gray-500 text-base text-center max-w-xl m-auto"
  }, description));
}
;

/***/ }),

/***/ "./resources/js/components/MenuIcons.js":
/*!**********************************************!*\
  !*** ./resources/js/components/MenuIcons.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuIcons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function MenuIcons() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "flex m-auto container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full icons p-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-brand-icons inline-block p-4 h-40 w-1/2 float-left md:w-1/4 md:float-left opacity-75 hover:opacity-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current stroke-current h-20 m-auto",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Pan-dulce"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Layer_2",
    "data-name": "Layer 2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Layer_1-2",
    "data-name": "Layer 1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M50,0A50,50,0,0,0,5.56,27.07a5.41,5.41,0,0,0,2.77.71c3.49,0,5.34-2.67,8.06-7s6-9.64,12.76-9.64,10.1,5.35,12.78,9.64,4.57,7,8.06,7,5.34-2.67,8.07-7,6-9.64,12.76-9.64,10.1,5.35,12.78,9.64,4.57,7,8.07,7a5.41,5.41,0,0,0,2.77-.71A50,50,0,0,0,50,0ZM96.72,32.15a10.88,10.88,0,0,1-5,1.18c-6.75,0-10.1-5.34-12.78-9.64s-4.57-7-8.07-7-5.33,2.66-8.06,7-6,9.64-12.77,9.64S39.9,28,37.22,23.69s-4.57-7-8.07-7-5.33,2.66-8,7-6,9.64-12.77,9.64a10.88,10.88,0,0,1-5.05-1.18,50,50,0,1,0,93.44,0ZM50,68.06a12.5,12.5,0,1,1,12.5-12.5A12.5,12.5,0,0,1,50,68.06Z"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-menu-category-text first-letter-bigger"
  }, "Pan de Dulce")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-brand-icons inline-block p-4 h-40 w-1/2 float-right md:w-1/4 md:float-left opacity-75 hover:opacity-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current stroke-current h-20 m-auto",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 133.53 100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Pan-sal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Layer_2",
    "data-name": "Layer 2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Layer_1-2",
    "data-name": "Layer 1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "Bread",
    className: "cls-1",
    d: "M131.29,79.46a27.89,27.89,0,0,0-1.84-2.24,97.75,97.75,0,0,0-29.71-22.3V67.08a6.59,6.59,0,0,1-13.17,0V49.94a76.65,76.65,0,0,0-13.22-2.17V67.08a6.59,6.59,0,0,1-13.17,0V47.77A76.23,76.23,0,0,0,47,49.93V67.08a6.59,6.59,0,0,1-13.17,0V54.89A97.81,97.81,0,0,0,4.08,77.22a27.89,27.89,0,0,0-1.84,2.24A12.81,12.81,0,0,0,0,86.83,13.21,13.21,0,0,0,13.17,100H120.36a13.21,13.21,0,0,0,13.17-13.17A12.81,12.81,0,0,0,131.29,79.46Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "cls-1",
    cx: "66.86",
    cy: "29.17",
    r: "4.17"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "cls-1",
    cx: "58.53",
    cy: "16.67",
    r: "4.17"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    className: "cls-1",
    cx: "66.86",
    cy: "4.17",
    r: "4.17"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-menu-category-text"
  }, "Pan de sal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-brand-icons inline-block p-4 h-40 w-1/2 float-left md:w-1/4 md:float-left opacity-75 hover:opacity-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current stroke-current h-20 m-auto",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 94.55 103.35"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Bocadillos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Layer_2",
    "data-name": "Layer 2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Layer_1-2",
    "data-name": "Layer 1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M0,101.35a2,2,0,0,0,2,2H74.84A2,2,0,0,0,76.3,100L3.46,22.2A2,2,0,0,0,0,23.56Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M83,99.64a2,2,0,0,1-1.45.54,2,2,0,0,1-1.41-.66A65.84,65.84,0,0,1,69.63,84.35a60.12,60.12,0,0,0-10.8-15.18A60.18,60.18,0,0,0,44.39,57.4,67.22,67.22,0,0,1,28.52,44.46,67.12,67.12,0,0,1,16.66,27.79,58.78,58.78,0,0,0,7.18,14.05a2,2,0,0,1,.12-2.8l2.18-2a2,2,0,0,1,2.85.13A65.74,65.74,0,0,1,22.82,24.51a60.12,60.12,0,0,0,10.8,15.18A60.18,60.18,0,0,0,48.06,51.46,67.22,67.22,0,0,1,63.93,64.4,67.31,67.31,0,0,1,75.79,81.07a59,59,0,0,0,9.47,13.74,2,2,0,0,1-.12,2.8Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M94.07,86.08a2,2,0,0,1-.15,2.76l-2.23,2.08a2,2,0,0,1-2.85-.12A66,66,0,0,1,78.35,75.63a60.12,60.12,0,0,0-10.8-15.18A60.08,60.08,0,0,0,53.11,48.67,66.85,66.85,0,0,1,37.25,35.74,67.23,67.23,0,0,1,25.38,19.06,59.41,59.41,0,0,0,15.91,5.32,2,2,0,0,1,16,2.53l2.12-2A2,2,0,0,1,19.63,0,2,2,0,0,1,21,.7Z"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-menu-category-text"
  }, "Bocadillos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "text-brand-icons inline-block p-4 h-40 w-1/2 float-right md:w-1/4 md:float-left opacity-75 hover:opacity-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "fill-current stroke-current h-20 m-auto",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 89.99 100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Reposter\xEDa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Layer_2",
    "data-name": "Layer 2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Layer_1-2",
    "data-name": "Layer 1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M45,57.46c-7.82,0-14.9-3.73-18.06-9.52l-2.57-4.72-4.93,2.14a16,16,0,0,1-6.4,1.31c-4.54,0-7.95-1.13-10.14-3.35C.51,40.86,0,37.43,0,35,0,20.68,16,0,45,0S90,20.6,90,34.84c0,2.48-.51,6-3,8.46-2.18,2.23-5.56,3.37-10,3.37a15.9,15.9,0,0,1-6.4-1.31l-4.94-2.14-2.57,4.72C59.94,53.73,52.85,57.46,45,57.46Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "cls-1",
    d: "M77,52.36a22.13,22.13,0,0,1-8.75-1.79C64.21,58,55.35,63.16,45,63.16S25.86,58,21.82,50.57a22.08,22.08,0,0,1-8.74,1.79,22.86,22.86,0,0,1-10-2,1.46,1.46,0,0,0-2,1.88L18.76,96.3a5.87,5.87,0,0,0,5.46,3.7H65.85a5.87,5.87,0,0,0,5.46-3.7L89,52.15a1.46,1.46,0,0,0-2-1.87A22.42,22.42,0,0,1,77,52.36Z"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-menu-category-text"
  }, "Reposter\xEDa"))));
}
;

/***/ })

}]);