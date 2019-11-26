(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Box = react_pose__WEBPACK_IMPORTED_MODULE_3__["default"].div({
  visible: {
    opacity: 1,
    transform: 'scale(1)'
  },
  hidden: {
    opacity: 0,
    transform: 'scale(0.5)'
  }
});

function Product(props) {
  var product = props.product;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('visible'),
      _useState2 = _slicedToArray(_useState, 2),
      animate = _useState2[0],
      setAnimate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      disabled = _useState4[0],
      setDisabled = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(product.id),
      _useState6 = _slicedToArray(_useState5, 1),
      productId = _useState6[0];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      comment = _useState8[0],
      setComment = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState10 = _slicedToArray(_useState9, 2),
      quantity = _useState10[0],
      setQuantity = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState12 = _slicedToArray(_useState11, 2),
      error = _useState12[0],
      setError = _useState12[1];

  var addToCart = function addToCart(event) {
    // event.preventDefault();
    addToCardAnimation();
    setAnimate('hidden');
    setDisabled(true); // made animation
    // setTimeout(() => Inertia.visit('/'), 2000);

    setTimeout(function () {
      setAnimate('visible');
      setDisabled(false);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post('/cart', {
        product_id: productId,
        comment: comment,
        quantity: quantity
      });
    }, 2000);
  };

  var addToCardAnimation = function addToCardAnimation(cb) {
    var cart = $('#charola');
    var imgtodrag = $('#main-image');

    if (imgtodrag) {
      var imgclone = imgtodrag.clone().offset({
        top: imgtodrag.offset().top,
        left: imgtodrag.offset().left
      }).css({
        opacity: '0.7',
        position: 'absolute',
        height: 'initial',
        // height: '150px',
        // width: '150px',
        width: 'initial',
        'z-index': '100'
      }).appendTo($('body')).animate({
        top: cart.offset().top + 10,
        left: cart.offset().left + 15,
        width: 75,
        height: 75
      }, 1000, // 1000000,
      'easeInOutExpo');
      setTimeout(function () {
        cart.effect('bounce', {
          times: 2
        }, 600);
      }, 1500);
      imgclone.animate({
        width: 0,
        height: 0
      }, function () {
        $(this).detach();
        /*
        cb().then(() => {
            Router.back();
        });
        */
      });
    }
  };

  var validateLength = function validateLength(e) {
    var value = e.target.value;
    console.log('value.length =>', value.length);

    if (value.length < 120) {
      setComment(e.target.value);
      setError('');
      setDisabled(false);
    } else {
      console.log('mayor a 120');
      setDisabled(true);
      setError('Máximo 120 caracteres');
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: product.name
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col mt-12 sm:mt-16 sm:flex-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    onClick: function onClick() {
      return window.history.back();
    },
    className: "w-8 h-8 mb-4 ml-4 text-lg sm:w-16 cursor-pointer",
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box, {
    pose: animate,
    className: "bg-brand-gray sm:w-2/3 sm:m-auto md:m-0 md:4/6 md:flex-1 md:h-64 lg:h-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "h-56 m-auto w-full object-scale-down align-middle sm:h-full sm:object-cover md:h-64 lg:h-full",
    src: "/breads/Cuernito.png",
    alt: product.name,
    id: "main-image"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col m-5 md:flex-1 lg:ml-24 lg:mt-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 sm:text-center text-gray-700 font-medium uppercase lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "first-letter-bigger text-center lg:text-justify"
  }, product.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-2 text-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, product.formatPrice), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-xs align-top"
  }, "p/p"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 flex-1 text-gray-600 font-light sm:text-center lg:text-justify"
  }, product.description), product.ingredients && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 mt-4 sm:text-center lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase font-medium text-sm first-letter-bigger text-orange-600"
  }, "ingredientes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "font-light text-gray-600 font-light"
  }, product.ingredients.split(',').map(function (ingredient) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- ", ingredient);
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 mt-5 font-light text-sm text-gray-600 sm:text-center lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "hover:border-grey-900 italic"
  }, "Si no deseas alg\xFAn ingrediente, especif\xEDcalo:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    value: comment,
    type: "text",
    placeholder: "Ej. sin picante",
    onChange: validateLength,
    className: "border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto"
  }), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm text-red-500 error hour"
  }, error)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 mt-5 font-light text-sm text-gray-600 sm:text-center sm:w-1/3 sm:m-auto lg:text-justify lg:m-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "hover:border-grey-900 italic"
  }, "Cantidad:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "quantity",
    type: "number",
    min: "1",
    placeholder: "Cantidad",
    value: quantity,
    onChange: function onChange(e) {
      return setQuantity(e.target.value);
    },
    className: "border border-transparent rounded w-1/2 mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 mt-5 font-light text-sm text-gray-600 sm:text-center sm:text-base lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: addToCart,
    className: "w-full bg-orange-500 hover:bg-brand-orange focus:outline-none focus:shadow-outline text-white font-bold py-2 px-4 rounded sm:w-1/3 sm:m-auto lg:m-0 md:w-1/2",
    disabled: disabled
  }, "Poner en la charola"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ })

}]);