(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/Shared/Layout.js":
/*!***************************************!*\
  !*** ./resources/js/Shared/Layout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./resources/js/components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./resources/js/components/Footer.js");
/* harmony import */ var _components_Panel_Panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Panel/Panel */ "./resources/js/components/Panel/Panel.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  moment__WEBPACK_IMPORTED_MODULE_2___default.a.locale('es');

  var _useRememberedState = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["useRememberedState"])(false),
      _useRememberedState2 = _slicedToArray(_useRememberedState, 2),
      showPanel = _useRememberedState2[0],
      setShowPanel = _useRememberedState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.title = title;
  }, [title]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setShowPanel: setShowPanel
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Panel_Panel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    show: showPanel,
    setShowPanel: setShowPanel
  }), "            ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    id: "content-wrapper",
    className: "flex flex-wrap w-full p-0"
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
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
/* harmony import */ var react_select_async_creatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/async-creatable */ "./node_modules/react-select/async-creatable/dist/react-select.browser.esm.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import AsyncSelect from 'react-select/async';



function Autocomplete() {
  var customStylesBK = {
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

  var Svg = function Svg(p) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      focusable: "false",
      role: "presentation"
    }, p));
  };

  var DropdownIndicator = function DropdownIndicator() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: 24,
        width: 32
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Svg, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z",
      fill: "currentColor",
      fillRule: "evenodd"
    })));
  };

  var promiseOptions = function promiseOptions(inputValue) {
    if (inputValue && inputValue.length > 3) {
      return fetch("/product/search?q=".concat(inputValue)).then(function (response) {
        return response.json();
      }).then(function (json) {
        var options = [];
        options = json.map(function (item) {
          return {
            value: item.id,
            label: item.name
          };
        });
        return options;
      })["catch"](function (error) {
        return console.log('error =>', error);
      });
    }
  };

  var handleChange = function handleChange(selectedOption) {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].visit("/pan/".concat(selectedOption.value));
  };

  var onCreateOption = function onCreateOption(selectedOption) {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].visit("/?search=".concat(selectedOption));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_async_creatable__WEBPACK_IMPORTED_MODULE_1__["default"] // className="mr-3 w-1/3 bg-brand-orange border-solid border-b-2 border-brand-gray text-white"
  , {
    className: "mr-3 w-1/3 bg-brand-orange",
    options: options // styles={customStyles}
    ,
    isSearchable: true,
    placeholder: "Buscar",
    loadOptions: promiseOptions,
    onChange: handleChange,
    onCreateOption: onCreateOption,
    autoFocus: true,
    createOptionPosition: "first",
    formatCreateLabel: function formatCreateLabel(userInput) {
      return "Buscar por ".concat(userInput);
    } // components={{ DropdownIndicator, IndicatorSeparator: null }}

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
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);


function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "bg-brand-orange flex h-16 absolute bottom-0 w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/politicas",
    className: "flex-1 m-auto text-center text-white text-xs"
  }, "Pol\xEDtica de Privacidad"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/Logo-Short.svg",
    className: "h-10 flex-1 flex-grow-0 m-auto",
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 m-auto flex align-content-center justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/tyc",
    className: "text-center text-white text-xs"
  }, "T\xE9rminos y condiciones"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/panaderialaespecial/",
    className: "ml-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook-square text-white"
  }))));
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
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Autocomplete */ "./resources/js/components/Autocomplete.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // import 'sweetalert2/src/sweetalert2.scss'

function Header(_ref) {
  var setShowPanel = _ref.setShowPanel,
      showPanel = _ref.showPanel;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showSearch = _useState2[0],
      setShowSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showMobileMenu = _useState4[0],
      setShowMobileMenu = _useState4[1];

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      categories = _usePage.categories,
      content = _usePage.cart.content,
      auth = _usePage.auth;

  var removeItems = function removeItems() {
    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
      title: '¿Seguro?',
      text: 'Eliminar artículos de la charola',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí eliminar',
      cancelButtonText: 'No, mantener pan en la charola'
    }).then(function (result) {
      if (result.value) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].visit('/empty'); //     Swal.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //     )
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "md:px-12 bg-brand-orange"
  }, auth && auth.user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, !showMobileMenu && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "cursor-pointer stroke-current text-white lg:hidden feather feather-menu",
    onClick: function onClick() {
      return setShowMobileMenu(true);
    }
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
  })), showMobileMenu && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "cursor-pointer text-white text-xl",
    onClick: function onClick() {
      return setShowMobileMenu(false);
    }
  }, "X"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "hidden lg:flex items-center justify-end text-white"
  }, categories.map(function (category) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "md:ml-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
      className: "block md:inline",
      href: "/category/".concat(category.id)
    }, category.name));
  }), auth && auth.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "md:ml-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "block md:inline",
    href: '/admin'
  }, "Panel")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/Logo-Short.svg",
    className: "lg:hidden pt-2 h-20 flex-1 flex-grow-0 m-auto",
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 flex justify-end lg:items-end"
  }, showSearch && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Autocomplete__WEBPACK_IMPORTED_MODULE_4__["default"], null), !showSearch && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
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
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "cursor-pointer",
    onClick: function onClick() {
      window.location.pathname !== '/charola' ? setShowPanel(true) : false;
    },
    id: "charola"
  }, content && (content.length === 0 || Object.keys(content).filter(function (product) {
    return content[product].id !== 'orderDetailsId';
  }).length === 0) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
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
  })))), content && Object.keys(content).filter(function (product) {
    return content[product].id !== 'orderDetailsId';
  }).length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 fill-current stroke-current text-white",
    viewBox: "0 0 100 34.83"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Con Pan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 24.83h100l-10.63 10H10.59L0 24.83zM74.48 12a10.47 10.47 0 0 0-.7-.85A37 37 0 0 0 62.5 2.71v4.62a2.5 2.5 0 0 1-5 0V.82a29.39 29.39 0 0 0-5-.82v7.33a2.5 2.5 0 0 1-5 0V0a29.32 29.32 0 0 0-5 .82v6.51a2.5 2.5 0 0 1-5 0V2.71a37.12 37.12 0 0 0-11.3 8.47 10.47 10.47 0 0 0-.7.85 4.88 4.88 0 0 0-.85 2.8 5 5 0 0 0 5 5h40.7a5 5 0 0 0 5-5 4.88 4.88 0 0 0-.87-2.83z"
  }))), content && Object.keys(content).filter(function (product) {
    return content[product].id !== 'orderDetailsId';
  }).length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    tabIndex: "0",
    className: "ml-2 inline fa fa-trash fa-fw fill-current stroke-current text-white cursor-pointer hover:text-orange-900",
    onClick: removeItems,
    onKeyDown: function onKeyDown(e) {
      e.stopPropagation();

      if (e.key === 'Enter') {
        setTimeout(removeItems, 500);
      }
    }
  }))))), showMobileMenu && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "flex flex-col w-full items-center justify-end text-white"
  }, categories.map(function (category) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "md:ml-5"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
      className: "block md:inline",
      href: "/category/".concat(category.id)
    }, category.name));
  }), auth && auth.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "md:ml-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "block md:inline",
    href: '/admin'
  }, "Panel")))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex p-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/",
    className: "flex-2 m-auto h-20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/svg/Logo-Full.svg",
    className: "my-auto h-full",
    alt: ""
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "header-lines"
  }));
}

/***/ }),

/***/ "./resources/js/components/Panel/Header.jsx":
/*!**************************************************!*\
  !*** ./resources/js/components/Panel/Header.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Header = function Header(_ref) {
  var setShowPanel = _ref.setShowPanel;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "close-icon",
    onClick: function onClick() {
      return setShowPanel(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-3xl text-brand-orange"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-angle-double-right"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "uppercase flex-1 text-center"
  }, "tu charola")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./resources/js/components/Panel/Panel.jsx":
/*!*************************************************!*\
  !*** ./resources/js/components/Panel/Panel.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Panel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductListElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductListElement */ "./resources/js/components/ProductListElement.jsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./resources/js/components/Panel/Header.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      visibility: visible;\n      transition-delay: 0s;\n      transition: transform 0.3s 0.3s;\n      transform: translateY(0px);\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    visibility: visible;\n    transition: visibility 0s 0s;\n    .panel {\n      transform: translate3d(0, 0, 0);\n      transition-delay: 0s;\n    }\n    .panel {\n      transition: transform 0.3s 0.3s;\n      transform: translateY(0px);\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .panel {\n    transition: transform 0.3s 0.3s;\n    transform: translate3d(100%, 0, 0);\n    z-index: 100;\n  }\n\n  ", ";\n  .overlay {\n    z-index: 10;\n    visibility: hidden;\n    transition: transform 0.3s 0.3s;\n    transform: translate3d(100%, 0, 0);\n    ", ";\n  }\n\n  .list-wrapper {\n    // 100vh creates an issue in iOs\n    height: calc(96vh - 300px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var PanelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].aside(_templateObject(), function (props) {
  return props.show && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2());
}, function (props) {
  return props.show && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3());
});
function Panel(props) {
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])(),
      _usePage$flash$show_p = _usePage.flash.show_panel,
      show_panel = _usePage$flash$show_p === void 0 ? false : _usePage$flash$show_p,
      products = _usePage.cart.content,
      subtotal = _usePage.subtotal;

  var _useRememberedState = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["useRememberedState"])(show_panel),
      _useRememberedState2 = _slicedToArray(_useRememberedState, 2),
      localShow = _useRememberedState2[0],
      setLocalShow = _useRememberedState2[1];

  var show = props.show,
      setShowPanel = props.setShowPanel;
  {
    /* <PanelWrapper show={showPanel}> */
  }
  var cartIsEmpty = products && (products.length === 0 || Object.keys(products).filter(function (product) {
    return products[product].id !== 'orderDetailsId';
  }).length === 0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // this is a hack, because we need to keep open panel when go to remove or update *ep* and return the page
    // so when detects show_panel from flash backend message
    if (localShow) {
      setShowPanel(true);
      setLocalShow(false);
    }
  }, [localShow]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PanelWrapper, {
    show: show,
    className: "product-side-panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlay top-0 bg-brand-orange h-full fixed overflow-x-hidden p-0 w-full opacity-25",
    onClick: function onClick() {
      return setShowPanel(false);
    }
  }, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel fixed h-full top-0 right-0 bg-white w-full md:w-4/5 lg:w-1/2 p-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col h-full content-between justify-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setShowPanel: setShowPanel
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "header-lines"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "list-wrapper mt-16 overflow-auto"
  }, cartIsEmpty && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col justify-end h-64 text-center text-brand-orange m-auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-regularText"
  }, "No hay pan en la charola"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "mx-auto w-24 h-24 fill-current stroke-current cursor-not-allowed",
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
  }))))), Object.keys(products).sort(function (a, b) {
    if (products[a].id > products[b].id) {
      return 1;
    }

    if (products[a].id < products[b].id) {
      return -1;
    } // a must be equal to b


    return 0;
  }).filter(function (product) {
    return products[product].id !== 'orderDetailsId';
  }).map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductListElement__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: products[product].id,
      product: products[product],
      isEditable: true
    });
  }))), !cartIsEmpty && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-center text-regularText text-normal"
  }, "Total:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-center text-regularText text-2xl"
  }, "$", subtotal), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    href: "/pedido",
    role: "button",
    className: "flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Agregar datos"))))));
}

/***/ })

}]);