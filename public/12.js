(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./resources/js/Pages/Login.jsx":
/*!**************************************!*\
  !*** ./resources/js/Pages/Login.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



function Login(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Layout, {
    title: "Log in"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "max-w-sm mx-auto mt-24 mb-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "w-24 mb-8 mx-auto",
    viewBox: "0 0 114 114",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    x1: "0%",
    y1: "50%",
    y2: "50%",
    id: "a"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    "stop-color": "#9553E9",
    offset: "0%"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    "stop-color": "#6D74ED",
    offset: "100%"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M57 114C25.52 114 0 88.48 0 57S25.52 0 57 0s57 25.52 57 57-25.52 57-57 57zm0-2c30.376 0 55-24.624 55-55S87.376 2 57 2 2 26.624 2 57s24.624 55 55 55zm0-3C28.281 109 5 85.719 5 57S28.281 5 57 5s52 23.281 52 52-23.281 52-52 52z",
    fill: "url(#a)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M45.8 40L63 57.2 45.8 74.4H28l17.2-17.2L28 40h17.8zm26.9 0l17.2 17.2-17.2 17.2H54.9l17.2-17.2L54.9 40h17.8z",
    fill: "#FFF",
    "fill-rule": "nonzero"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white shadow px-8 py-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextField, {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "billy@example.com",
    className: "mb-4",
    "v-model": "form.email",
    errors: "$page.errors.email",
    autofocus: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextField, {
    label: "Password",
    name: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
    type: "password",
    "v-model": "form.password",
    errors: "$page.errors.email",
    className: "mb-6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "button"
  }, "Log in"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

}]);