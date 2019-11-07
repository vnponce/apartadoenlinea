(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./resources/js/Pages/Success.jsx":
/*!****************************************!*\
  !*** ./resources/js/Pages/Success.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-image:\n        linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),\n        url('/images/successWithoutBlur.jpg');\n    background-size: cover;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SuccessImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

function Success(props) {
  console.log('props =>', props);
  var order = props.order,
      subtotal = props.subtotal,
      content = props.cart.content,
      stores = props.stores;
  var store = stores.find(function (store) {
    return store.id === order.store_id;
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Gracias"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "mt-24 w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block text-brand-orange text-4xl text-center font-title font-semibold"
  }, "GRACIAS POR TU COMPRA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block p-2 text-gray-500 text-base text-center max-w-xl m-auto"
  }, "\xA1Tu pan esta en el horno!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SuccessImage, {
    className: "w-full h-64 bg-cover"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "flex w-full px-4 pb-24 bg-brand-gray justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-1/2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full mt-5 uppercase text-brand-orange text-center text-sm tracking-wider font-bold"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg"
  }, "r"), "esumen de compra:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "flex w-full mt-4 flex-col items-center md:flex-row md:justify-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-thin"
  }, "Nombre:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-bold ml-1"
  }, order.name, " ", order.lastname)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-thin"
  }, "N\xFAmero de pedido:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-bold ml-1"
  }, order.id))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-thin"
  }, "Recoger en:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-bold ml-1"
  }, store.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-thin"
  }, "D\xEDa:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-bold ml-1"
  }, moment__WEBPACK_IMPORTED_MODULE_3___default()(order.date).format('D MMMM, YYYY'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-thin"
  }, "Hora:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-bold ml-1"
  }, order.hour)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full mt-4 mb-5"
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mb-8"
    }, console.log('product =>', content[product]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex items-center flex-1 inline-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "ml-0 text-lg"
    }, content[product].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex flex-1 text-center items-center justify-center"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, content[product].qty)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex flex-1 items-center flex-row-reverse"
    }, "$ ", content[product].price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-sm italic text-brand-orange"
    }, content[product].options && content[product].options.comment || ''));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-center text-regularText text-normal"
  }, "Total:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-center text-brand-orange text-2xl"
  }, "$", subtotal)))));
}

/* harmony default export */ __webpack_exports__["default"] = (Success);

/***/ })

}]);