(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./resources/js/Pages/Order.jsx":
/*!**************************************!*\
  !*** ./resources/js/Pages/Order.jsx ***!
  \**************************************/
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
/* harmony import */ var _components_HeaderDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HeaderDescription */ "./resources/js/components/HeaderDescription.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Input */ "./resources/js/components/Input.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Order(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      wantInvoice = _useState2[0],
      setWantInvoice = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Producto seleccionado"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "PEDIDOS",
    description: "Por favor recuerda llenar el formulario para indicarnos en d\xF3nde recogeras tu pedido."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 w-full pb-24 "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-4 lg:w-1/2 lg:float-left lg:content-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-3/4 lg:float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Sucursal",
    id: "store",
    placeholder: "Bravo",
    value: "Bravo"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "D\xEDa",
    id: "date",
    placeholder: "D\xEDa",
    value: "12 de octubre"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Hora",
    id: "hour",
    placeholder: "9:30",
    value: "9:30pm"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden border h-56 mt-4 bg-brand-gray sm:block"
  }, "MAPA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white sm:hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Ver el mapa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    className: "stroke-current fill-current w-6",
    id: "Location_pin",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10,2.009c-2.762,0-5,2.229-5,4.99c0,4.774,5,11,5,11s5-6.227,5-11C15,4.239,12.762,2.009,10,2.009zM10,9.76c-1.492,0-2.7-1.209-2.7-2.7s1.208-2.7,2.7-2.7c1.49,0,2.699,1.209,2.699,2.7S11.49,9.76,10,9.76z"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-4 mt-8 mb-6 lg:hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "w-100"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-4 lg:w-1/2 lg:float-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-3/4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Nombre",
    id: "name",
    placeholder: "Ej. Juan",
    value: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Apellido",
    id: "lastname",
    placeholder: "Apellido",
    value: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Tel\xE9fono",
    id: "phone",
    placeholder: "",
    value: "",
    type: "tel"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Correo electr\xF3nico",
    id: "email",
    placeholder: "",
    value: "",
    type: "email"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full bg-brand-gray mt-8 p-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "want-invoice",
    className: "mr-2",
    type: "checkbox",
    onClick: function onClick() {
      return setWantInvoice(!wantInvoice);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "want-invoice",
    className: "text-brand-orange text-lg italic font-thin"
  }, "\xBFQuieres factura?")), wantInvoice && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "RFC",
    id: "invoice-rfc"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Selector",
    id: "invoice-type"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Direcci\xF3n",
    id: "invoice-address"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Nombre completo",
    id: "invoice-full-name"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Tel\xE9fono",
    id: "invoice-phone",
    type: "tel"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Correo electr\xF3nico",
    id: "email",
    type: "email"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    href: "/charola",
    className: "flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Proceder")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Order);

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
      placeholder = _ref.placeholder;
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
    className: "border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto lg:w-full"
  }));
}
;

/***/ })

}]);