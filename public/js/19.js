(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

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
/* harmony import */ var _components_MenuIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MenuIcons */ "./resources/js/components/MenuIcons.js");
/* harmony import */ var _components_BreadCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BreadCard */ "./resources/js/components/BreadCard.jsx");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HeaderDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HeaderDescription */ "./resources/js/components/HeaderDescription.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Pagination */ "./resources/js/components/Pagination.jsx");








function Home(props) {
  var products = props.products,
      success_message = props.success_message,
      _props$category = props.category,
      category = _props$category === void 0 ? null : _props$category,
      search = props.search;

  var getData = function getData(data) {
    return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].visit("?page=".concat(data.page));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Panadr\xEDa La Especial"
  }, category && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: category.name,
    description: ""
  })), !(category || search) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MenuIcons__WEBPACK_IMPORTED_MODULE_2__["default"], null), search && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Buscando por '".concat(search, "'"),
    description: ""
  })), "            ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "w-1/2 mb-5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "flex flex-wrap w-full p-0 pb-16 sm:px-2"
  }, products.data.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      product: product
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
    items: products
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

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
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);


function BreadCard(props) {
  if (!props.product) {
    return false;
  }

  var product = props.product;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container bread-card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/pan/".concat(product.id),
    className: "flex-1 flex cursor-pointer sm:bg-brand-gray"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "m-auto w-full h-40 object-cover align-middle md:h-64",
    src: product.image_path,
    alt: "Banderilla mini"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/pan/".concat(product.id),
    className: "flex-1 flex flex-col h-32 overflow-hidden cursor-pointer sm:mt-4 sm:h-24"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 sm:text-center text-gray-600 font-medium uppercase"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "first-letter-bigger"
  }, product.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, product.formatPrice), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs align-top"
  }, "p/p"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 truncate text-gray-500 text-base"
  }, product.description)));
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
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);


function MenuIcons() {
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      categories = _usePage.categories;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "flex m-auto container pt-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full icons p-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/category/1",
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
  }, "Pan de Dulce")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/category/2",
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
  }, "Pan de sal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/category/3",
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
  }, "Bocadillos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/category/4",
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

/***/ }),

/***/ "./resources/js/components/Pagination.jsx":
/*!************************************************!*\
  !*** ./resources/js/components/Pagination.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




/* To handle checked state this component requires a single of css */

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
function Pagination(_ref) {
  var items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    className: "py-10 block w-full flex justify-center"
  }, items && items.data && items.data.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pagination mt-6 -mb-1 flex flex-wrap"
  }, items.links && items.links.map(function (link, key) {
    if (link.url === null) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: key,
        className: "page-link mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400 ".concat(link.label === 'Next' ? 'ml-auto' : '')
      }, link.label);
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
      key: key,
      "class": "page-link mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500 ".concat(link.active ? 'border-brand-orange bg-orange-400 text-white hover:text-gray-600' : '', " ").concat(link.label === 'Next' ? 'ml-auto' : '') // :class="{ 'bg-white': link.active, 'ml-auto': link.label === 'Next' }"
      ,
      href: link.url
    }, link.label);
  })));
}
;

/***/ })

}]);