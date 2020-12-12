(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./resources/js/Pages/Checkout.jsx":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Checkout.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeaderDescription */ "./resources/js/components/HeaderDescription.js");
/* harmony import */ var _components_ProductListElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProductListElement */ "./resources/js/components/ProductListElement.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Loading */ "./resources/js/components/Loading.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Checkout(props) {
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["usePage"])(),
      content = _usePage.cart.content,
      subtotal = _usePage.subtotal,
      auth = _usePage.auth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      agreeTerms = _useState2[0],
      setAgreeTerms = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var createOrder = function createOrder() {
    setLoading(true);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__["Inertia"].post('/pedido');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (content.length <= 0) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__["Inertia"].visit('/');
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Mi charola"
  }, loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "MI CHAROLA",
    description: "Esto tiene tu charola"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center w-full pb-24 px-8 content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md:w-1/2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full mt-8 px-2 mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "w-100"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full flex flex-col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex content-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex-1 text-brand-orange font-thin text-left"
  }, "Producto"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex-1 text-brand-orange font-thin text-center"
  }, "Cant."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex-1 text-brand-orange font-thin text-right"
  }, "Prec. Unit.")), Object.keys(content).sort().filter(function (product) {
    return content[product].id !== 'orderDetailsId';
  }).map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductListElement__WEBPACK_IMPORTED_MODULE_3__["default"], {
      product: content[product]
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-center text-regularText text-normal"
  }, "Total:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-center text-regularText text-2xl"
  }, "$", subtotal)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full mt-2 px-2 mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "w-100"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "checkout-agree",
    className: "w-10 h-10 cursor-pointer mr-2 mt-1",
    type: "checkbox",
    value: agreeTerms,
    onChange: function onChange() {
      return setAgreeTerms(!agreeTerms);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "checkout-agree",
    className: "cursor-pointer text-center text-gray-500 text-base italic"
  }, "\xBFEl contenido de tu compra es el correcto?, recuerda que no hay cambios, devoluciones ni modificaciones.")), auth && auth.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    disabled: !agreeTerms,
    onClick: createOrder,
    className: "flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-full md:w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white disabled:opacity-75"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Crear pedido")), !auth.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    disabled: !agreeTerms,
    onClick: createOrder,
    className: "flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-full md:w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white disabled:opacity-75"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Paypal"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Checkout);

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

/***/ "./resources/js/components/Loading.jsx":
/*!*********************************************!*\
  !*** ./resources/js/components/Loading.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.8);\n\n  > div {\n    width: 100%;\n    height: 100%;\n    display: flex;\n\n    img {\n      width: 200px;\n      height: 200px;\n      display: flex;\n      align-self: center;\n      margin: 0 auto;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

var Loading = function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/loading.gif",
    alt: "cargando"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ })

}]);