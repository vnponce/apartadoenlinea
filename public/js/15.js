(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/Pages/Admin/Suggestions.jsx":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Admin/Suggestions.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Admin_Suggestions_Details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Admin/Suggestions/Details */ "./resources/js/components/Admin/Suggestions/Details.jsx");
/* harmony import */ var _components_Admin_UsersInfoBoxes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Admin/UsersInfoBoxes */ "./resources/js/components/Admin/UsersInfoBoxes.jsx");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Table */ "./resources/js/components/Table.jsx");
/* harmony import */ var _components_Admin_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Admin/Content */ "./resources/js/components/Admin/Content.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // import Admin from '../../Shared/Admin';


 // import 'sweetalert2/src/sweetalert2.scss';
// import Swal from 'sweetalert2/dist/sweetalert2.js';




function Suggestions(props) {
  var suggestions = props.suggestions,
      success_message = props.flash.success_message;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      dataSelected = _useState2[0],
      setDataSelected = _useState2[1];

  var columns = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    return [{
      Header: 'Nombre',
      accessor: 'name'
    }, {
      Header: 'Sugerencia',
      accessor: 'suggestion' // Cell: ({ cell }) => {
      //     return cell.value === 'god' ? 'Gerencia' : cell.value;
      // }

    }, {
      Header: 'Estatus',
      accessor: 'status'
    }, {
      Header: '-',
      accessor: 'solver'
    }];
  }, []);

  var openedAndShow = function openedAndShow(index) {
    var data = suggestions[index];
    setDataSelected(data);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (success_message) {// setDataSelected(false);
      // Swal.fire({
      //   position: 'top-end',
      //   icon: 'success',
      //   title: success_message,
      //   showConfirmButton: false,
      //   timer: 1500,
      // }).then(() => {
      //   location.reload();
      // });
    }
  }, [success_message]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Admin, {
    title: "Panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_Suggestions_Details__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: dataSelected
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_Content__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "font-bold text-black inline-block"
  }, "Sugerencias"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    columns: columns,
    data: suggestions.data,
    onClick: function onClick(row) {
      return openedAndShow(row.index);
    },
    selected: dataSelected
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Suggestions);

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

/***/ "./resources/js/components/Admin/Suggestions/Details.jsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/Admin/Suggestions/Details.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Details; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    select:disabled{\n       opacity: 0.6;\n       cursor: not-allowed;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
function Details(props) {
  var data = props.data;

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      errors = _usePage.errors,
      stores = _usePage.stores,
      success_message = _usePage.flash.success_message;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, data.name);
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