(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

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
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pose */ "./node_modules/react-pose/dist/react-pose.es.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Input */ "./resources/js/components/Input.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Box = react_pose__WEBPACK_IMPORTED_MODULE_2__["default"].div({
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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      customMessage = _useState10[0],
      setCustomMessage = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState12 = _slicedToArray(_useState11, 2),
      quantity = _useState12[0],
      setQuantity = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    comment: false,
    customizable: false
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      error = _useState14[0],
      setError = _useState14[1];

  var addToCart = function addToCart(event) {
    // event.preventDefault();
    addToCardAnimation();
    setAnimate('hidden');
    setDisabled(true); // made animation
    // setTimeout(() => Inertia.visit('/'), 2000);

    setTimeout(function () {
      setAnimate('visible');
      setDisabled(false);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].post('/cart', {
        product_id: productId,
        comment: comment,
        quantity: quantity,
        custom_message: customMessage
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

    if (value.length < 120) {
      setComment(e.target.value);
      setError(_objectSpread({}, error, {
        comment: false
      }));
      setDisabled(false);
    } else {
      setDisabled(true);
      setError(_objectSpread({}, error, {
        comment: ['Máximo 120 caracteres']
      }));
    }
  };

  var handleCustomizable = function handleCustomizable(e) {
    var value = e.target.value;

    if (value.length < 25) {
      setCustomMessage(e.target.value);
      setError(_objectSpread({}, error, {
        customizable: false
      }));
      setDisabled(false);
    } else {
      setDisabled(true);
      setError(_objectSpread({}, error, {
        customizable: ['Máximo 25 caracteres']
      }));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
    src: product.image_path,
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
  }, product.description), product.ingredients && product.allow_ingredients && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 mt-4 sm:text-center lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "uppercase font-medium text-sm first-letter-bigger text-orange-600"
  }, "ingredientes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "font-light text-gray-600 font-light"
  }, product.ingredients.split(',').map(function (ingredient) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- ", ingredient);
  }))), product.allow_instructions && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-1 mt-5 font-light text-sm text-gray-600 sm:text-center lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: validateLength,
    value: comment,
    id: "comment",
    label: "Si no deseas alg\xFAn ingrediente, especif\xEDcalo:",
    placeholder: "Ej. sin picante",
    error: error.comment
  })), product.customizable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: handleCustomizable,
    value: customMessage,
    id: "custom-message",
    label: "Deseas personalizar tu pastel? De la forma lo env\xEDes ser\xE1 escrito",
    placeholder: "Felicidades Pedro",
    error: error.customizable
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: function onChange(e) {
      return setQuantity(e.target.value);
    },
    value: quantity,
    id: "quantity",
    label: "Cantidad:"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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