(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/Shared/Admin.jsx":
/*!***************************************!*\
  !*** ./resources/js/Shared/Admin.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Admin_SiteBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Admin/SiteBar */ "./resources/js/components/Admin/SiteBar.jsx");
/* harmony import */ var _components_Admin_UserMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Admin/UserMenu */ "./resources/js/components/Admin/UserMenu.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .nunito {\n        font-family: 'nunito', font-sans;\n    }\n\n    .border-b-1 {\n        border-bottom-width: 1px;\n    }\n\n    .border-l-1 {\n        border-left-width: 1px;\n    }\n\n    hover\\:border-none:hover {\n        border-style: none;\n    }\n\n    #sidebar {\n        transition: ease-in-out all .3s;\n        z-index: 9999;\n    }\n\n    #sidebar span {\n        opacity: 0;\n        position: absolute;\n        transition: ease-in-out all .1s;\n    }\n\n    #sidebar:hover {\n        width: 150px;\n        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n        /*shadow-2xl*/\n    }\n\n    #sidebar:hover span {\n        opacity: 1;\n    }\n"], ["\n    .nunito {\n        font-family: 'nunito', font-sans;\n    }\n\n    .border-b-1 {\n        border-bottom-width: 1px;\n    }\n\n    .border-l-1 {\n        border-left-width: 1px;\n    }\n\n    hover\\\\:border-none:hover {\n        border-style: none;\n    }\n\n    #sidebar {\n        transition: ease-in-out all .3s;\n        z-index: 9999;\n    }\n\n    #sidebar span {\n        opacity: 0;\n        position: absolute;\n        transition: ease-in-out all .1s;\n    }\n\n    #sidebar:hover {\n        width: 150px;\n        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n        /*shadow-2xl*/\n    }\n\n    #sidebar:hover span {\n        opacity: 1;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  moment__WEBPACK_IMPORTED_MODULE_2___default.a.locale('es');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      userMenuDiv = _useState2[0],
      setUserMenuDiv = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      userMenu = _useState4[0],
      setUserMenu = _useState4[1];

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["usePage"])(),
      flash = _usePage.flash,
      user = _usePage.auth.user;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.title = title;
  }, [title]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setUserMenuDiv(document.getElementById("userMenu"));
    setUserMenu(document.getElementById("userButton"));
  }, []);
  /**
   * JS
   * */

  /*Toggle dropdown list*/

  /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

  document.onclick = check;

  function check(e) {
    var target = e && e.target || event && event.srcElement; //User Menu

    if (!checkParent(target, userMenuDiv)) {
      // click NOT on the menu
      if (checkParent(target, userMenu)) {
        // click on the link
        if (userMenuDiv.classList.contains("invisible")) {
          userMenuDiv.classList.remove("invisible");
        } else {
          userMenuDiv.classList.add("invisible");
        }
      } else {
        // click both outside link and outside menu, hide menu
        userMenuDiv.classList.add("invisible");
      }
    }
  }

  function checkParent(t, elm) {
    while (t.parentNode) {
      if (t === elm) {
        return true;
      }

      t = t.parentNode;
    }

    return false;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito:400,700,800",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex h-screen bg-gray-100 font-sans"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Admin_SiteBar__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex flex-row flex-wrap flex-1 flex-grow content-start pl-16"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "h-40 lg:h-20 w-full flex flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    id: "logo",
    className: "bg-gray-200 w-full lg:max-w-sm flex items-center border-b-1 border-gray-300 order-2 lg:order-1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], {
    href: "/",
    className: "flex-2 m-auto h-16 hidden lg:block"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/svg/Logo-Full.svg",
    className: "my-auto h-full",
    alt: ""
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    id: "header1",
    className: "bg-gray-100 w-auto flex-1 border-b-1 border-gray-300 order-1 lg:order-2"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex h-full justify-between items-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "relative w-full max-w-3xl px-6"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Admin_UserMenu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    user: user
  })))), children)));
}

/***/ }),

/***/ "./resources/js/components/Admin/Content.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/Admin/Content.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Content; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: calc(100% - 5rem);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Section = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());
function Content(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "main-contents",
    className: "w-1/2 flex-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    className: "flex flex-1 flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full xl:max-w-6xl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full max-w-full lg:max-w-3xl xl:max-w-5xl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "h-full border-b overflow-auto p-3"
  }, children)))));
}
;

/***/ }),

/***/ "./resources/js/components/Admin/SiteBar.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/Admin/SiteBar.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);


function SiteBar(props) {
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      user = _usePage.auth.user;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "sidebar",
    className: "h-screen w-16 menu bg-white text-white px-4 flex items-center nunito static fixed shadow"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-reset "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "my-2 md:my-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/admin",
    className: "block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-home fa-fw mr-3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "w-full inline-block pb-1 md:pb-0 text-sm"
  }, "Panel"))), user.isGod && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "my-2 md:my-0 "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/admin/products",
    className: "block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-bread-slice fa-fw mr-3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "w-full inline-block pb-1 md:pb-0 text-sm"
  }, "Pan"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "my-2 md:my-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/admin/stores",
    className: "block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-store fa-fw mr-3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "w-full inline-block pb-1 md:pb-0 text-sm"
  }, "Sucursales"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "my-2 md:my-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/admin/users",
    className: "block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-users fa-fw mr-3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "w-full inline-block pb-1 md:pb-0 text-sm"
  }, "Usuarios")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "my-2 md:my-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/admin/suggestions",
    className: "block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-comment-alt mr-3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "w-full inline-block pb-1 md:pb-0 text-sm"
  }, "Sugerencias")))));
}
;

/***/ }),

/***/ "./resources/js/components/Admin/UserMenu.jsx":
/*!****************************************************!*\
  !*** ./resources/js/components/Admin/UserMenu.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);



function UserMenu(props) {
  var user = props.user;

  var logout = function logout() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post('/logout');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex relative inline-block pr-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative text-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    id: "userButton",
    className: "flex items-center focus:outline-none mr-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "w-8 h-8 rounded-full mr-4",
    src: user.avatar || 'https://cdn2.iconfinder.com/data/icons/office-and-business-19/65/61-512.png',
    alt: "Avatar of User"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "hidden md:inline-block"
  }, "Hola, ", user.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "pl-2 h-2",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 129 129",
    enableBackground: "new 0 0 129 129"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "userMenu",
    className: "bg-white nunito rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-reset"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: logout,
    className: "px-4 py-2 block text-gray-900 hover:bg-indigo-400 hover:text-white no-underline hover:no-underline"
  }, "Logout"))))));
}
;

/***/ }),

/***/ "./resources/js/components/Table.jsx":
/*!*******************************************!*\
  !*** ./resources/js/components/Table.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/dist/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function Table(_ref) {
  var columns = _ref.columns,
      data = _ref.data,
      _onClick = _ref.onClick,
      selected = _ref.selected;

  // Use the state and functions returned from useTable to build your UI
  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_0__["useTable"])({
    columns: columns,
    data: data
  }),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow; // Render the UI for your table


  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", _extends({
    className: "table-auto w-full"
  }, getTableProps()), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", _extends({
        className: "px-4 py-2 py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
      }, column.getHeaderProps()), column.render('Header'));
    }));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", getTableBodyProps(), rows.map(function (row, i) {
    prepareRow(row);
    var cx = classnames__WEBPACK_IMPORTED_MODULE_1___default()('hover:bg-gray-300', 'cursor-pointer', {
      'bg-gray-200': i % 2
    }, {
      'text-brand-orange': selected && row.original.id === selected.id
    }, {
      'text-red-500': row.original.date && row.original.date.forToday
    }, {
      'bg-red-100': row.original.date && row.original.date.forToday
    }, {
      'text-yellow-500': row.original.date && row.original.date.forTomorrow
    }, {
      'bg-yellow-100': row.original.date && row.original.date.forTomorrow
    }, {
      'line-through': row.original.canceled
    });
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", _extends({
      id: row.original.id,
      onClick: function onClick() {
        return _onClick(row);
      },
      className: cx
    }, row.getRowProps()), row.cells.map(function (cell) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", _extends({
        className: "py-4 px-2 border-b border-grey-light"
      }, cell.getCellProps()), cell.render('Cell'));
    }));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ })

}]);