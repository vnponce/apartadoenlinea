(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./resources/js/Pages/Product.jsx":
/*!****************************************!*\
  !*** ./resources/js/Pages/Product.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__);





function Product(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Producto seleccionado"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col mt-12 sm:mt-16 sm:flex-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-8 h-8 mb-4 ml-4 text-lg sm:w-16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "19",
    y1: "12",
    x2: "5",
    y2: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "12 19 5 12 12 5"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col pb-16 md:flex-row md:w-11/12 md:m-0 md:mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-brand-gray sm:w-2/3 sm:m-auto md:m-0 md:4/6 md:flex-1 md:h-64 lg:h-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "h-56 m-auto w-full object-scale-down align-middle sm:h-full sm:object-cover md:h-64 lg:h-full",
    src: "/breads/Cuernito.png",
    alt: "Banderilla mini"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col m-5 md:flex-1 lg:ml-24 lg:mt-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 sm:text-center text-gray-700 font-medium uppercase lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "first-letter-bigger text-center lg:text-justify"
  }, "Banderilla mini"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-2 text-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$11.50"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs align-top"
  }, "p/p"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 flex-1 text-gray-600 font-light sm:text-center lg:text-justify"
  }, "Pan de pasta hojaldrada, con forma de una barra larga y aplanada barnizada con clara de huevo y az\xFAcar. \xA1Buen\xEDsimas para remojar en chocolate!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 mt-4 sm:text-center lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase font-medium text-sm first-letter-bigger text-orange-600"
  }, "ingredientes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "font-light text-gray-600 font-light"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Harina de trigo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Agua"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Sal"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 mt-5 font-light text-sm text-gray-600 sm:text-center lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "hover:border-grey-900 italic"
  }, "Si no deseas alg\xFAn ingrediente, especif\xEDcalo:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Ej. sin picante",
    className: "border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 mt-5 font-light text-sm text-gray-600 sm:text-center sm:w-1/3 sm:m-auto lg:text-justify lg:m-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "hover:border-grey-900 italic"
  }, "Cantidad:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    placeholder: "Cantidad",
    value: "1",
    className: "border border-transparent rounded w-1/2 mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 mt-5 font-light text-sm text-gray-600 sm:text-center sm:text-base lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      // made animation
      setTimeout(function () {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].visit('/');
      }, 2000); // Inertia.visit('/home');
    },
    className: "w-full bg-orange-500 hover:bg-brand-orange focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded sm:w-1/3 sm:m-auto lg:m-0 md:w-1/2"
  }, "Poner en la charola"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Product);

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

/***/ "./resources/js/components/Autocomplete.jsx":
/*!**************************************************!*\
  !*** ./resources/js/components/Autocomplete.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Autocomplete; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Autocomplete() {
  var customStyles = {
    option: function option(provided, state) {
      return _objectSpread({}, provided, {
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 20 // backgroundColor: 'black',

      });
    },
    control: function control() {
      return {
        // none of react-select's styles are passed to <Control />
        // width: 200,
        // backgroundColor: 'black',
        display: 'flex' // borderBottom: '1px solid grey',

      };
    },
    singleValue: function singleValue(provided, state) {
      var opacity = state.isDisabled ? 0.5 : 1;
      var transition = 'opacity 300ms';
      return _objectSpread({}, provided, {
        opacity: opacity,
        transition: transition
      });
    }
  };
  var options = [{
    value: 'chocolate',
    label: 'Chocolate'
  }, {
    value: 'strawberry',
    label: 'Strawberry'
  }, {
    value: 'vanilla',
    label: 'Vanilla'
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "mr-3 w-1/3 bg-brand-orange border-solid border-b-2 border-brand-gray text-white",
    options: options,
    styles: customStyles,
    isSearchable: true
  });
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
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Autocomplete */ "./resources/js/components/Autocomplete.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Header() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showSearch = _useState2[0],
      setShowSearch = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "md:px-12 bg-brand-orange"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex p-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/",
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "block md:inline",
    href: "/pan-dulce"
  }, "Pan de dulce")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "md:ml-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "block md:inline",
    href: "/pan-sal"
  }, "Pan de sal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "md:ml-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "block md:inline",
    href: "/bocadillos"
  }, "Bocadillos")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "md:ml-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "block md:inline",
    href: "/reposteria"
  }, "Reposter\xEDa")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "md:ml-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "block md:inline",
    href: "/favoritos"
  }, "Favoritos")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "Logo-Short.svg",
    className: "lg:hidden pt-2 h-20 flex-1 flex-grow-0 m-auto",
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 flex justify-end lg:items-end"
  }, showSearch && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Autocomplete__WEBPACK_IMPORTED_MODULE_2__["default"], null), !showSearch && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    onClick: function onClick() {
      return setShowSearch(true);
    },
    className: "h-4 mr-3 fill-current stroke-current text-white cursor-pointer",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Empty_Tray"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M71.22,62.86H66.67L65,61.43a37.85,37.85,0,0,0,8.83-24.29A36.89,36.89,0,1,0,37,74.27a38.3,38.3,0,0,0,24.22-8.85L63,66.85v4.58L91.46,100,100,91.43ZM37,62.86a25.7,25.7,0,1,1,25.65-25.7A25.58,25.58,0,0,1,37,62.86Z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/pedido"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
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
  })))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "header-lines"
  }));
}
;

/***/ })

}]);