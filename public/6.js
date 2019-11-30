(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Checkout(props) {
  console.log('props => ', props);

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["usePage"])(),
      content = _usePage.cart.content,
      subtotal = _usePage.subtotal,
      auth = _usePage.auth;

  console.log('content =>', content);
  console.log('props =>', props);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      agreeTerms = _useState2[0],
      setAgreeTerms = _useState2[1];

  var createOrder = function createOrder() {
    console.log('create order');
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__["Inertia"].post('/pedido');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Mi charola"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    className: "flex items-center justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "checkout-agree",
    className: "mr-2",
    type: "checkbox",
    value: agreeTerms,
    onChange: function onChange() {
      return setAgreeTerms(!agreeTerms);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    "for": "checkout-agree",
    className: "text-center text-gray-500 text-base italic"
  }, "\xBFEl contenido de tu compra es el correcto?")), auth && auth.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    disabled: !agreeTerms,
    onClick: createOrder,
    className: "flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-full md:w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white disabled:opacity-75"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Crear pedido")), !auth && !auth.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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

/***/ })

}]);