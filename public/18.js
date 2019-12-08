(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./resources/js/components/Admin/InfoBoxes.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/Admin/InfoBoxes.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoBoxes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/Admin */ "./resources/js/Shared/Admin.jsx");
/* harmony import */ var _InfoBoxes_UserDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InfoBoxes/UserDetails */ "./resources/js/components/Admin/InfoBoxes/UserDetails.jsx");
/* harmony import */ var _InfoBoxes_StoreDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InfoBoxes/StoreDetails */ "./resources/js/components/Admin/InfoBoxes/StoreDetails.jsx");
/* harmony import */ var _InfoBoxes_ProductsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InfoBoxes/ProductsList */ "./resources/js/components/Admin/InfoBoxes/ProductsList.jsx");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__);







function InfoBoxes(props) {
  var data = props.data;
  console.log('infoboxes data =>', data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dash-content",
    className: "bg-gray-200 py-6 lg:py-0 w-full h-full lg:max-w-sm flex flex-wrap content-start"
  }, data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md:mx-6 md:my-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Pedido No: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, data.id)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-calendar-day fa-fw text-brand-icons text-sm mr-3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, data.date.formatted))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoBoxes_UserDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data.customer
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoBoxes_StoreDetails__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data.store
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoBoxes_ProductsList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data.products
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-center text-regularText text-normal"
  }, "Total:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-center text-regularText text-2xl"
  }, "$", data.total)), !data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-shrink pr-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-full p-3 bg-gray-400"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-hand-pointer fa-fw fa-inverse text-indigo-500 text-3xl"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 mt-3"
  }, "No hay ningun pedido seleccionado para mostrar informaci\xF3n."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "flex-1 mt-3 text-brand-orange"
  }, "Hacer click sobre el pedido para ver los detalles.")))));
}
;

/***/ }),

/***/ "./resources/js/components/Admin/InfoBoxes/ProductsList.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/components/Admin/InfoBoxes/ProductsList.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductListElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ProductListElement */ "./resources/js/components/ProductListElement.jsx");


function ProductsList(props) {
  var data = props.data;
  console.log('data products =>', data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-2 md:mx-6 md:my-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full flex flex-col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex content-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex-1 text-brand-orange font-thin text-left"
  }, "Producto"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex-1 text-brand-orange font-thin text-center"
  }, "Cant."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex-1 text-brand-orange font-thin text-right"
  }, "Prec. Unit.")), data.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductListElement__WEBPACK_IMPORTED_MODULE_1__["default"], {
      product: product,
      isEditable: false
    });
  })));
}
;

/***/ }),

/***/ "./resources/js/components/Admin/InfoBoxes/StoreDetails.jsx":
/*!******************************************************************!*\
  !*** ./resources/js/components/Admin/InfoBoxes/StoreDetails.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StoreDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function StoreDetails(props) {
  var data = props.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-2 md:mx-6 md:my-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-shrink pr-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-full p-3 bg-gray-400"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-store fa-fw fa-inverse text-indigo-500 text-xl"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-1 flex-col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg"
  }, data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-map-marker-alt fa-fw text-brand-icons text-sm"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline"
  }, ": ", data.friendlyAddress)))));
}
;

/***/ }),

/***/ "./resources/js/components/Admin/InfoBoxes/UserDetails.jsx":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Admin/InfoBoxes/UserDetails.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function UserDetails(props) {
  var data = props.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-2 md:mx-6 md:my-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-shrink pr-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-full p-3 bg-gray-400"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-user fa-fw fa-inverse text-indigo-500 text-xl"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-1 flex-col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg"
  }, data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-mobile-alt fa-fw text-brand-icons text-sm"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline"
  }, ": ", data.phone)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-at fa-fw text-brand-icons text-sm"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline"
  }, ": ", data.email)))));
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
  console.log('ProductListElement product =>', product);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showInput = _useState2[0],
      setShowInput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      comment = _useState4[0],
      setComment = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setComment(product.options.comment);
  }, [product]);

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
    console.log('Addint one item');
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
    className: "mb-8 w-full"
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
  }, "$", product.price.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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