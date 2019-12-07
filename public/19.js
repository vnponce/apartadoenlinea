(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./resources/js/Pages/Admin/Products.jsx":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Admin/Products.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Admin */ "./resources/js/Shared/Admin.jsx");
/* harmony import */ var _components_Admin_InfoBoxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Admin/InfoBoxes */ "./resources/js/components/Admin/InfoBoxes.jsx");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/dist/index.es.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Table */ "./resources/js/components/Table.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function Products(props) {
  var products = props.products,
      success_message = props.success_message;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      dataSelected = _useState2[0],
      setDataSelected = _useState2[1];

  var updateStatus = function updateStatus(id) {
    return function (evt) {
      console.log('id =>', id);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].put("/products/".concat(id), {
        status: evt.target.value
      });
    };
  };

  var columns = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    return [{
      Header: 'Nombre',
      accessor: 'id'
    }, {
      Header: 'Descripción',
      accessor: 'customer',
      Cell: function Cell(data) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: ""
        }, data.cell.value.name);
      }
    }, {
      Header: 'Sucrusal',
      accessor: 'store',
      Cell: function Cell(data) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: ""
        }, data.cell.value.name);
      }
    }, {
      Header: 'Fecha',
      accessor: 'date',
      Cell: function Cell(data) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: ""
        }, data.cell.value.formatted);
      }
    }, {
      Header: 'Estatus',
      accessor: 'status',
      Cell: function Cell(data) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "inline-block relative w-full"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
          className: "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
          onChange: updateStatus(data.cell.row.original.id)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "opened",
          selected: data.cell.value.original !== 'opened'
        }, "Visto"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "placed",
          selected: data.cell.value.original === 'placed'
        }, "En ruta/sucursal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "delivered",
          selected: data.cell.value.original === 'delivered'
        }, "Entregada"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: "-",
          selected: data.cell.value.original === '-'
        }, "Pendiente")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
          className: "fill-current h-4 w-4",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        })))));
      }
    }];
  }, []);

  var openedAndShow = function openedAndShow(index) {
    var data = orders[index];
    setDataSelected(data);

    if (data.status.original !== 'created') {
      return false;
    }

    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].put("pedido/".concat(data.id), {
      status: 'opened'
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// openedAndShow(0);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Admin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_InfoBoxes__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: dataSelected
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "main-content",
    className: "w-full flex-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-1 flex-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full py-6 xl:max-w-6xl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "max-w-full lg:max-w-3xl xl:max-w-5xl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-b p-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "font-bold text-black"
  }, "Pedidos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
    columns: columns,
    data: orders,
    onClick: function onClick(row) {
      return openedAndShow(row.index);
    },
    selected: dataSelected
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

}]);