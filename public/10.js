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
/* harmony import */ var _components_ProductListElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductListElement */ "./resources/js/components/ProductListElement.jsx");
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductListElement__WEBPACK_IMPORTED_MODULE_4__["default"], {
      product: content[product],
      isEditable: false
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-center text-regularText text-normal"
  }, "Total:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-center text-brand-orange text-2xl"
  }, "$", subtotal)))));
}

/* harmony default export */ __webpack_exports__["default"] = (Success);

/***/ }),

/***/ "./resources/js/components/Input.jsx":
/*!*******************************************!*\
  !*** ./resources/js/components/Input.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Input(_ref) {
  var id = _ref.id,
      label = _ref.label,
      inputType = _ref.type,
      inputValue = _ref.value,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: id,
    className: "hover:border-grey-900 italic sm:block"
  }, label ? label : 'Label'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: id,
    type: inputType ? inputType : 'text',
    placeholder: placeholder ? placeholder : '',
    value: inputValue ? inputValue : '',
    onChange: onChange,
    style: {
      height: '2.4rem'
    },
    className: "border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto lg:w-full"
  }));
}
;

/***/ }),

/***/ "./resources/js/components/ProductListElement.jsx":
/*!********************************************************!*\
  !*** ./resources/js/components/ProductListElement.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductListElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./resources/js/components/Input.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function ProductListElement(props) {
  var product = props.product,
      _props$isEditable = props.isEditable,
      isEditable = _props$isEditable === void 0 ? true : _props$isEditable;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showInput = _useState2[0],
      setShowInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(product.options.comment),
      _useState4 = _slicedToArray(_useState3, 2),
      comment = _useState4[0],
      setComment = _useState4[1];

  var removeOneItem = function removeOneItem() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].post('/cart', {
      product_id: product.id,
      comment: product.options.comment,
      quantity: -1,
      redirect: 'product'
    });
  };

  var removeItem = function removeItem() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"]["delete"]("/cart/product/".concat(product.rowId));
  };

  var addOneItem = function addOneItem() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].post('/cart', {
      product_id: product.id,
      comment: product.options.comment,
      quantity: 1,
      redirect: 'product'
    });
  };

  var updateComment = function updateComment() {
    setShowInput(false);

    if (comment === product.options.comment) {
      return false;
    }

    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].post("/cart/product/".concat(product.id, "/update/comment"), {
      product_id: product.id,
      comment: comment,
      quantity: product.qty,
      remove_rowId: product.rowId
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center flex-1 inline-block"
  }, isEditable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    onClick: removeItem,
    className: "cursor-pointer -ml-5 mr-2 stroke-current fill-current  text-gray-500 w-3",
    viewBox: "0 0 20 20",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-0 text-lg"
  }, product.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-1 text-center items-center"
  }, isEditable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    onClick: removeOneItem,
    className: "w-5 cursor-pointer fill-current text-brand-orange",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 20 20",
    "enable-background": "new 0 0 20 20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16,10c0,0.553-0.048,1-0.601,1H4.601C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H15.4  C15.952,9,16,9.447,16,10z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex-1 cursor-pointer "
  }, product.qty), isEditable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    onClick: addOneItem,
    className: "w-5 cursor-pointer fill-current text-brand-orange",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 20 20",
    "enable-background": "new 0 0 20 20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601  C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399  C15.952,9,16,9.447,16,10z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-1 items-center flex-row-reverse"
  }, "$", product.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      return setShowInput(true);
    },
    className: "text-sm italic text-brand-orange"
  }, showInput && isEditable ?
  /* <Input id="comment" value={product.options.comment} placeholder="Ej. sin chile" type="text" onChange={() => console.log('hola')} /> */
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "comment",
    type: "text",
    placeholder: "Ej. sin chile",
    value: comment,
    onBlur: updateComment,
    onChange: function onChange(e) {
      return setComment(e.target.value);
    },
    className: "border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto lg:w-full"
  }) : comment || (isEditable ? 'Agregar breve comentario' : '')));
}
;

/***/ })

}]);