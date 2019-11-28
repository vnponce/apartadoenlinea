(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/Pages/Admin/SiteBar.jsx":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Admin/SiteBar.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Admin */ "./resources/js/Shared/Admin.jsx");
/* harmony import */ var _components_Admin_InfoBoxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Admin/InfoBoxes */ "./resources/js/components/Admin/InfoBoxes.jsx");




function Dashboard(props) {
  var products = props.products,
      success_message = props.success_message,
      _props$category = props.category,
      category = _props$category === void 0 ? null : _props$category;
  console.log('succes_message =>', success_message);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Admin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_InfoBoxes__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "main-content",
    className: "w-full flex-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-1 flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full xl:w-2/3 p-6 xl:max-w-6xl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "max-w-full lg:max-w-3xl xl:max-w-5xl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b p-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "font-bold text-black"
  }, "Graph")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ct-chart ct-golden-section",
    id: "chart1"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b p-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "font-bold text-black"
  }, "Table")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "w-full p-5 text-gray-700"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-left text-blue-900"
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-left text-blue-900"
  }, "Side"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-left text-blue-900"
  }, "Role"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Obi Wan Kenobi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Light"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Jedi")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Greedo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "South"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Scumbag")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Darth Vader"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Dark"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Sith")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "py-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#"
  }, "See More issues...")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full xl:w-1/3 p-6 xl:max-w-4xl border-l-1 border-gray-300"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "max-w-sm lg:max-w-3xl xl:max-w-5xl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b p-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "font-bold text-black"
  }, "Graph")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ct-chart ct-golden-section",
    id: "chart2"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b p-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "font-bold text-black"
  }, "Graph")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ct-chart ct-golden-section",
    id: "chart3"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b p-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "font-bold text-black"
  }, "Graph")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ct-chart ct-golden-section",
    id: "chart4"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b p-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "font-bold text-black"
  }, "Template")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-5"
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

}]);