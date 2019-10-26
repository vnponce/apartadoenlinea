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



function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Panadr\xEDa La Especial"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "flex flex-wrap w-full p-0 pb-16 sm:px-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container bread-card"
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
  }, "Pan de pasta hojaldrada, con forma de una barra larga y aplanada barnizada con clara de huevo y az\xFAcar. \xA1Buen\xEDsimas para remojar en chocolate!")))));
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

/***/ })

}]);