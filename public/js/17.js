(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./resources/js/Pages/Admin/Dashboard.jsx":
/*!************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_Admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/Admin */ "./resources/js/Shared/Admin.jsx");
/* harmony import */ var _components_Admin_InfoBoxes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Admin/InfoBoxes */ "./resources/js/components/Admin/InfoBoxes.jsx");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Table */ "./resources/js/components/Table.jsx");
/* harmony import */ var _components_Admin_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Admin/SearchBar */ "./resources/js/components/Admin/SearchBar.jsx");
/* harmony import */ var _components_Admin_Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Admin/Content */ "./resources/js/components/Admin/Content.jsx");
/* harmony import */ var _Shared_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Shared/utils */ "./resources/js/Shared/utils.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Pagination */ "./resources/js/components/Pagination.jsx");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./resources/js/hooks/useWindowSize.js");
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Accordion */ "./resources/js/components/Accordion.jsx");
/* harmony import */ var _components_Admin_InfoBoxes_InfoBoxesDetailsWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Admin/InfoBoxes/InfoBoxesDetailsWrapper */ "./resources/js/components/Admin/InfoBoxes/InfoBoxesDetailsWrapper.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function Dashboard(props) {
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])(),
      auth = _usePage.auth;

  var orders = props.orders,
      orderAll = props.orderAll,
      success_message = props.success_message,
      order = props.order,
      stores = props.stores,
      searchValues = props.searchValues;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      dataSelected = _useState2[0],
      setDataSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPaginateActive = _useState4[0],
      setIsPaginateActive = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isHistoric = _useState6[0],
      setIsHistoric = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      accordionText = _useState8[0],
      setAccordionText = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      mobileShowInfoBoxes = _useState10[0],
      setMobileShowInfoBoxes = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isInfoBoxOpen = _useState12[0],
      setIsInfoBoxOpen = _useState12[1];

  var _useWindowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_10__["useWindowSize"])(),
      isLessThanLG = _useWindowSize.isLessThanLG;

  var updateStatus = function updateStatus(id) {
    return function (evt) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].put("/pedido/".concat(id), {
        status: evt.target.value
      });
    };
  };

  var columns = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    return [// {
    //     Header: '-',
    //     accessor: 'uuid',
    // },
    {
      Header: 'Cliente',
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
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: ""
        }, data.cell.row.original.canceled ? 'Cancelado' : data.cell.value.step);
      }
    }, {
      Header: 'Pagado',
      accessor: 'payed',
      Cell: function Cell(data) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: ""
        }, data.cell.value.label);
      }
    }];
  }, []);

  var openedAndShow = function openedAndShow(index) {
    var data = orders[index];
    setDataSelected(data);
    setIsInfoBoxOpen(true);

    if (isLessThanLG) {
      setMobileShowInfoBoxes(true);
    }

    if (auth.user.isMatrix && data.status.original === 'created') {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__["Inertia"].put("/admin/orders/".concat(data.id), {
        status: 'opened'
      });
    } // if(data.status.original !== 'created') {
    //     return false;
    // }

  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // console.log('orderAll =>', orderAll);
    var requestGetPagiante = Object(_Shared_utils__WEBPACK_IMPORTED_MODULE_8__["getParameterByName"])('get') === 'paginate';
    setIsPaginateActive(requestGetPagiante);
    var requestHistorict = Object(_Shared_utils__WEBPACK_IMPORTED_MODULE_8__["getParameterByName"])('date') === 'historic';
    setIsHistoric(requestHistorict);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // openedAndShow(0);
    if (orders && dataSelected) {
      var orderUpdated = orders.find(function (order) {
        return order.id === dataSelected.id;
      });
      setDataSelected(orderUpdated);
    }
  }, [orders]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Admin__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Panel"
  }, (isLessThanLG && isInfoBoxOpen || !isLessThanLG) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_InfoBoxes_InfoBoxesDetailsWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_InfoBoxes__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: dataSelected
  })), !mobileShowInfoBoxes && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_Content__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_11__["default"], {
    text: accordionText
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    stores: stores,
    searchValues: searchValues,
    setAccordionText: setAccordionText
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "font-bold text-black"
  }, isHistoric ? 'Pedidos anteriores' : 'Pedidos'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mx-3"
  }, "|"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    href: isHistoric ? '/admin' : '/admin?date=historic&status=all&sort=desc&get=paginate'
  }, isHistoric ? 'Pedidos' : 'Pedidos anteriores')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    columns: columns,
    data: orders,
    onClick: function onClick(row) {
      return openedAndShow(row.index);
    },
    selected: dataSelected
  })), isPaginateActive && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
    items: orderAll
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./resources/js/components/Accordion.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/Accordion.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useWindowSize */ "./resources/js/hooks/useWindowSize.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .item {\n    transition: ", ";\n    overflow: hidden;\n    // transform: scaleX(0);\n    transform: translateX(-400px);\n    height: 0;\n    &.active {\n      overflow: unset;\n      transform: none;\n      height: auto;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ElementStyled = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject(), function (_ref) {
  var isLessThanSM = _ref.isLessThanSM;
  return isLessThanSM ? 'ease-out all .2s' : '';
});
function Accordion(_ref2) {
  var children = _ref2.children,
      text = _ref2.text;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useWindowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__["useWindowSize"])(),
      isLessThanSM = _useWindowSize.isLessThanSM;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setIsOpen(true);

    if (isLessThanSM) {
      setIsOpen(false);
    }
  }, [isLessThanSM]);

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementStyled, {
    id: "accordion",
    isLessThanSM: isLessThanSM,
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "accordion-close",
    className: "item flex flex-col ".concat(!isOpen ? 'active' : '')
  }, text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "cursor-pointer pb-2 text-center hover:bg-gray-200 mt-2 border-t-2",
    onClick: toggle
  }, "Filtros", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "m-auto h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M13 5l7 7-7 7M5 5l7 7-7 7"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "accordion-open",
    className: "item flex flex-col ".concat(isOpen ? 'active' : '')
  }, children, isLessThanSM && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "cursor-pointer pb-2 text-center hover:bg-gray-200 mt-2 border-t-2",
    onClick: toggle
  }, "Ocultar filtros", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "m-auto h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
  })))));
}
;

/***/ }),

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
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./resources/js/hooks/useWindowSize.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









 // import 'sweetalert2/src/sweetalert2.scss'

function InfoBoxes(props) {
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      user = _usePage.auth.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      nextStatus = _useState2[0],
      setNextStatus = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isCancel = _useState4[0],
      setIsCancel = _useState4[1];

  var data = props.data;

  var _useWindowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_8__["useWindowSize"])(),
      isLessThanLG = _useWindowSize.isLessThanLG;

  var onCancelHandle = function onCancelHandle() {
    var hostname = window.location.hostname;
    var url = window.location.href;

    var _url$split = url.split(hostname),
        _url$split2 = _slicedToArray(_url$split, 2),
        port = _url$split2[0],
        path = _url$split2[1];

    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__["Inertia"].visit(path);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (data) {
      var status = data.status,
          store = data.store,
          canceled = data.canceled;
      setIsCancel(canceled);

      switch (status.original) {
        case 'created':
        case 'opened':
          setNextStatus({
            original: 'journey',
            step: 'En ruta',
            allowed: user.isAdmin
          });
          break;

        case 'journey':
          setNextStatus({
            original: 'placed',
            step: 'En sucursal',
            allowed: user.role === 'manager' || user.isAdmin && store.isMatrix
          });
          break;

        case 'placed':
          setNextStatus({
            original: 'delivered',
            step: 'Entregado',
            allowed: user.role === 'manager' || user.isAdmin && store.isMatrix
          });
          break;

        case 'delivered':
          setNextStatus({
            original: 'delivered',
            step: 'Ya entregado',
            allowed: false
          });
          break;

        default:
          setNextStatus({
            original: 'default',
            step: 'Default',
            allowed: false
          });
          break;
      }
    }
  }, [data]);

  var updateToNextStatus = function updateToNextStatus() {
    if (nextStatus.allowed || user.isGod) {
      sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
        title: '¿Seguro?',
        text: "Vamos a pasar la orden de ".concat(data.status.step, " a ").concat(nextStatus.step),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí cambiar estatus',
        cancelButtonText: 'No cambiar estatus'
      }).then(function (result) {
        if (result.value) {
          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__["Inertia"].put("/admin/orders/".concat(data.id), {
            status: nextStatus.original
          }); //     Swal.fire(
          //         'Deleted!',
          //         'Your file has been deleted.',
          //         'success'
          //     )
        }
      });
    }
  };

  var updateToPayed = function updateToPayed() {
    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
      title: '¿Seguro?',
      text: "La orden se considerar\xE1 como pagada",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí ha sido pagada',
      cancelButtonText: 'No ha sido pagada'
    }).then(function (result) {
      if (result.value) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__["Inertia"].put("/admin/orders/".concat(data.id), {
          payed: true
        }); //     Swal.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //     )
      }
    });
  };

  var updateToCancel = function updateToCancel() {
    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
      title: '¿Seguro?',
      text: "La orden se considerar\xE1 como cancelada",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí esta cancelada',
      cancelButtonText: 'No, no esta cancelada'
    }).then(function (result) {
      if (result.value) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__["Inertia"].put("/admin/orders/".concat(data.id), {
          canceled: true
        }); //     Swal.fire(
        //         'Deleted!',
        //         'Your file has been deleted.',
        //         'success'
        //     )
      }
    });
  };

  var allowedToModify = function allowedToModify() {
    if (isCancel) return false;

    if (user.isGod) {
      return true;
    }

    return nextStatus.allowed;
  };

  var buttonClass = 'w-full inline-block text-white hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded m-6';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLessThanLG && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full right-0 flex flex-col items-end pr-3 pt-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: onCancelHandle,
    className: "w-16 h-12 cursor-pointer rounded-full bg-white flex items-center justify-center hover:bg-gray-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-8 w-8",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
  })))), data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-2 md:mx-6 md:my-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Pedido No: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, data.uuid)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
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
  }, "$", data.total), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-2 md:mx-6 md:my-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg"
  }, data.employee.name), " levant\xF3 este pedido."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: allowedToModify() ? "".concat(buttonClass, " bg-orange-400 hover:bg-brand-orange") : "".concat(buttonClass, " bg-orange-400 cursor-not-allowed"),
    onClick: function onClick() {
      return updateToNextStatus(data.status);
    },
    disabled: !allowedToModify()
  }, nextStatus.step)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: allowedToModify() ? "".concat(buttonClass, " bg-green-500 hover:bg-brand-green") : "".concat(buttonClass, " bg-green-500 cursor-not-allowed"),
    onClick: function onClick() {
      return updateToPayed(data.id);
    },
    disabled: !allowedToModify()
  }, "Pagar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: allowedToModify() ? "".concat(buttonClass, " bg-red-500 hover:bg-red-600") : "".concat(buttonClass, " bg-red-500 cursor-not-allowed"),
    onClick: function onClick() {
      return updateToCancel(data.id);
    },
    disabled: !allowedToModify()
  }, isCancel ? 'Cancelado' : 'Cancelar pedido'))), !data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-shrink pr-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-full p-3 bg-gray-400"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-hand-pointer fa-fw fa-inverse text-3xl"
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
    className: "fa fa-store fa-fw fa-inverse text-xl"
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
    className: "fa fa-user fa-fw fa-inverse text-xl"
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

/***/ "./resources/js/components/Admin/SearchBar.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/Admin/SearchBar.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dates */ "./node_modules/react-dates/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_DateSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/DateSelector */ "./resources/js/components/DateSelector.jsx");
/* harmony import */ var _Select_SearchStores__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Select/SearchStores */ "./resources/js/components/Select/SearchStores.jsx");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Input */ "./resources/js/components/Input.jsx");
/* harmony import */ var _Select_SearchStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Select/SearchStatus */ "./resources/js/components/Select/SearchStatus.jsx");
/* harmony import */ var _Shared_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Shared/utils */ "./resources/js/Shared/utils.js");
/* harmony import */ var _ListItemValue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ListItemValue */ "./resources/js/components/ListItemValue.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .DateInput_input {\n        padding: 7px 7px 5px;\n    }\n    .SingleDatePickerInput__withBorder {\n        border-radius: 3px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







 // jajaja if I remove this line, i get white page jajajaja






var DateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
function SearchBar(_ref) {
  var setAccordionText = _ref.setAccordionText;

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__["usePage"])(),
      user = _usePage.auth.user,
      stores = _usePage.stores;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      id = _useState2[0],
      setId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      store = _useState4[0],
      setStore = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState6 = _slicedToArray(_useState5, 2),
      storeObject = _useState6[0],
      setStoreObject = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      date = _useState8[0],
      setDate = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: 'No entregados',
    value: 'not-delivered' // @todo: not-delivered

  }),
      _useState10 = _slicedToArray(_useState9, 2),
      status = _useState10[0],
      setStatus = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      focus = _useState12[0],
      setFocus = _useState12[1]; // function pressEnterToSearch(event) {
  //     if (event.defaultPrevented) {
  //         return; // Should do nothing if the default action has been cancelled
  //     }
  //
  //     if (event.key === 'Enter') {
  //         toSearch();
  //     }
  // }
  // useEffect(() => {
  //     document.addEventListener('keyup', pressEnterToSearch);
  //     return () => document.removeEventListener('keyup', pressEnterToSearch);
  // })
  //


  var setStatusObject = function setStatusObject(currentStatus) {
    switch (currentStatus) {
      case 'not-delivered':
        setStatus({
          label: 'No entregados',
          value: 'not-delivered'
        });
        break;

      case 'delivered':
        setStatus({
          label: 'Entregados',
          value: 'delivered'
        });
        break;

      case 'all':
        setStatus({
          label: 'Todos',
          value: 'all'
        });
        break;

      default:
        setStatus({
          label: 'No entregados',
          value: 'not-delivered'
        });
        break;
    }
  };

  var statusObjectBluePrint = {
    'not-delivered': {
      label: 'No entregados',
      value: 'not-delivered'
    },
    'delivered': {
      label: 'Entregados',
      value: 'delivered'
    },
    'all': {
      label: 'Todos',
      value: 'all'
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var queryId = Object(_Shared_utils__WEBPACK_IMPORTED_MODULE_10__["getParameterByName"])('id');
    setId(queryId || '');
    var queryStore = Object(_Shared_utils__WEBPACK_IMPORTED_MODULE_10__["getParameterByName"])('store');
    setStore(queryStore || '');
    var queryDate = Object(_Shared_utils__WEBPACK_IMPORTED_MODULE_10__["getParameterByName"])('date'); // @todo: think if we going to have more special status

    setDate(queryDate && queryDate !== 'historic' ? moment__WEBPACK_IMPORTED_MODULE_5___default()(queryDate) : null);
    var queryStatus = Object(_Shared_utils__WEBPACK_IMPORTED_MODULE_10__["getParameterByName"])('status');
    setStatusObject(queryStatus); // creando el texto

    setAccordionText(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListItemValue__WEBPACK_IMPORTED_MODULE_11__["default"], {
      items: [{
        filter: 'nombre o id:',
        value: queryId
      }, {
        filter: 'Sucursal:',
        value: queryStore ? stores.find(function (current) {
          return current.id === queryStore * 1;
        }).name : null
      }, {
        filter: 'fecha:',
        value: queryDate && queryDate !== 'historic' ? moment__WEBPACK_IMPORTED_MODULE_5___default()(queryDate).format('D MMMM, YYYY') : null
      }, {
        filter: 'Estatus:',
        value: queryStatus ? statusObjectBluePrint[queryStatus].label : null
      }]
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (store && stores) {
      // convert string to number
      var storeSelected = stores.find(function (current) {
        return current.id === store * 1;
      });
      setStoreObject({
        id: storeSelected.id,
        name: storeSelected.name,
        friendlyAddress: storeSelected.friendly_address
      });
    } // if user clear store selector it must remove selected store


    if (store === null) {
      setStoreObject({
        id: '',
        name: '',
        friendlyAddress: ''
      });
    }
  }, [store]);

  var onChange = function onChange(e) {
    if (e.key === 'Enter') {
      toSearch(); // return false;
    }

    setId(e.target.value);
  };

  var setDateParam = function setDateParam() {
    if (date) {
      return "date=".concat(date);
    }

    if (Object(_Shared_utils__WEBPACK_IMPORTED_MODULE_10__["getParameterByName"])('date')) {
      if (Object(_Shared_utils__WEBPACK_IMPORTED_MODULE_10__["getParameterByName"])('date') === 'historic') {
        return 'date=historic';
      }
    }

    return '';
  }; // const urlBuilder = queryParams => {
  //     if(queryParams.length) {
  //         let url;
  //         queryParams.forEach((query, index) => {
  //             console.log('query =>', query);
  //             console.log('index =>', index);
  //             if(index === 0){
  //                 url = url + `?${Object.keys(query)[0]}=${Object.values(query)[0]}`;
  //             } else {
  //                 url = url + `&${Object.keys(query)[0]}=${Object.values(query)[0]}`;
  //             }
  //             console.log('url =>', url);
  //             // url = url + '&'
  //         });
  //     }
  //     return '';
  // }


  var toSearch = function toSearch() {
    // const queries = [
    //   'id',
    //   'store',
    //   'date',
    //   'status',
    //   'get',
    // ];
    // const queriesWithValue = queries.filter(query => getParameterByName(query) && getParameterByName(query) !== '').map((query) => {
    //   const value = getParameterByName(query);
    //     console.log('[query] =>,', [query]);
    //   return { [query]: value };
    // });
    // console.log('queriesWithValue', queriesWithValue);
    // console.log(`Vamos a buscar id: ${id} , store: ${storeObject.id}, date: ${date}, status: ${status.value}`);
    var searchId = id ? "id=".concat(id) : '';
    var searchStore = storeObject && storeObject.id ? "store=".concat(storeObject.id) : '';
    var searchDate = setDateParam(); // const searchDate = date ? `date=${date}` : '';

    var searchStatus = status ? "status=".concat(status.value) : '';
    var paginateQuery = Object(_Shared_utils__WEBPACK_IMPORTED_MODULE_10__["getParameterByName"])('get') === 'paginate' ? 'get=paginate' : '';
    var sortQuery = Object(_Shared_utils__WEBPACK_IMPORTED_MODULE_10__["getParameterByName"])('sort') === 'desc' ? 'sort=desc' : ''; // console.log('url builder', urlBuilder(queriesWithValue))

    var url = "/admin?".concat(paginateQuery, "&").concat(searchId, "&").concat(searchStore, "&").concat(searchDate, "&").concat(searchStatus, "&").concat(sortQuery); // Inertia.visit(urlBuilder(queriesWithValue));

    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].visit(url);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-col sm:flex-row sm:items-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block mx-2 flex-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "id",
    label: "Nombre o Id",
    onChange: onChange,
    placeholder: "ej. Juan",
    error: [],
    onKeyDown: onChange,
    value: id
  })), user.isAdmin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block mx-2 flex-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Select_SearchStores__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setStore: setStore,
    stores: stores,
    storeSelected: storeObject
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block mx-2 flex-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-light text-gray-600 mt-4 lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "store",
    className: "sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block"
  }, "D\xEDa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateWrapper, {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_1__["SingleDatePicker"], {
    id: "date",
    name: "date",
    date: date,
    onDateChange: function onDateChange(date) {
      return setDate(date);
    },
    focused: focus,
    onFocusChange: function onFocusChange(props) {
      return setFocus(props.focused);
    } // disabled={!store}
    ,
    className: "w-full",
    displayFormat: "D MMMM YYYY",
    numberOfMonths: 1,
    placeholder: "Elige una fecha",
    isOutsideRange: function isOutsideRange() {
      return false;
    },
    phrases: {
      closeDatePicker: 'Cerrar',
      clearDates: 'Limpiar'
    },
    showClearDate: true,
    block: true
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block mx-2 flex-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Select_SearchStatus__WEBPACK_IMPORTED_MODULE_9__["default"], {
    status: status,
    setStatus: setStatusObject,
    statuses: [{
      label: 'No entregados',
      value: 'not-delivered'
    }, {
      label: 'Entregados',
      value: 'delivered'
    }, {
      label: 'Todos',
      value: 'all'
    }]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-auto mx-2 sm:w-auto mt-2 sm:mt-0 flex items-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "w-full h-10 inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold px-4 rounded",
    onClick: toSearch
  }, "Buscar")));
}

/***/ }),

/***/ "./resources/js/components/DateSelector.jsx":
/*!**************************************************!*\
  !*** ./resources/js/components/DateSelector.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dates/initialize */ "./node_modules/react-dates/initialize.js");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dates */ "./node_modules/react-dates/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .DateInput_input {\n        padding: 7px 7px 5px;\n    }\n    .SingleDatePickerInput__withBorder {\n        border-radius: 3px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // import 'react-dates/lib/css/_datepicker.css';




var DateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
function DateSelector(props) {
  // moment.locale('es');
  var today = moment__WEBPACK_IMPORTED_MODULE_4___default()();
  var date = props.date,
      setDate = props.setDate,
      _props$store = props.store,
      store = _props$store === void 0 ? false : _props$store;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      focus = _useState2[0],
      setFocus = _useState2[1];

  var pickUpAllowed = function pickUpAllowed(dayDate) {
    // @todo: que si son despues de las 8:00pm no poder poner el siguiente día, se hiría hasta el 'pasado mañana'
    var shopSelected = store; // if the sunday field means that the shop delivers on sundays, leave this, otherwise comment out

    if (shopSelected.sunday !== 'Cierra') {
      return false;
    } // console.log({ isSame: dayDate.isSame('2020-11-01'), dayDate});
    // if (dayDate.isSame('Sun Nov 01 2020 12:00:00 GMT-0600')) {
    //     console.log('mismo dia =>', dayDate);
    //     return false;
    // }
    // console.log({ dayDate });
    // if sunday return true to block day


    return dayDate.isoWeekday() === 7;
    /*
    const dayNumber = dayDate.day();
    const today = new Date();
    const todayDayNumber = today.getDate();
     if (dayNumber <= todayDayNumber) return false;
     return !shopSelected.deliver_days.includes(dayNumber);
      */
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-light text-gray-600 mt-4 lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "store",
    className: "sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block"
  }, "D\xEDa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateWrapper, {
    className: "w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_2__["SingleDatePicker"], {
    id: "date",
    name: "date",
    date: date,
    onDateChange: function onDateChange(date) {
      return setDate(date);
    },
    focused: focus,
    onFocusChange: function onFocusChange(props) {
      return setFocus(props.focused);
    },
    disabled: !store,
    className: "w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full" // showDefaultInputIcon

    /*
    date={pickupDate}
    focused={pickupFocused}
    onDateChange={
        this.onPickupDateChange
    }
    onFocusChange={
        this.onPickupFocusChange
    }
    */
    // Valida que no se pueda pedir el mismo día que se ingresa.
    // Esto debe aplicar si es un usuario normal y no de panadería
    ,
    isOutsideRange: function isOutsideRange(day) {
      return !Object(react_dates__WEBPACK_IMPORTED_MODULE_2__["isInclusivelyAfterDay"])(day, today) || false;
    } // day.isSame(today, 'd')
    ,
    isDayBlocked: pickUpAllowed //-- orientation="vertical"
    //-- verticalHeight={350}
    ,
    displayFormat: "D MMMM YYYY" // disabled={!shopSelected}
    ,
    numberOfMonths: 1,
    placeholder: "Elige una fecha",
    phrases: {
      closeDatePicker: 'Cerrar',
      clearDates: 'Limpiar'
    },
    showClearDate: true,
    block: true
  })));
}
;

/***/ }),

/***/ "./resources/js/components/ListItemValue.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/ListItemValue.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListItemValue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ListItemValue(_ref) {
  var items = _ref.items;
  return items.filter(function (item) {
    return item.value;
  }).map(function (_ref2) {
    var filter = _ref2.filter,
        value = _ref2.value;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, filter, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "ml-2 font-bold"
    }, value));
  });
}
;

/***/ }),

/***/ "./resources/js/components/Pagination.jsx":
/*!************************************************!*\
  !*** ./resources/js/components/Pagination.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useWindowSize */ "./resources/js/hooks/useWindowSize.js");
function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





/* To handle checked state this component requires a single of css */

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
function Pagination(_ref) {
  var items = _ref.items;

  var _useWindowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_3__["useWindowSize"])(),
      isLessThanMD = _useWindowSize.isLessThanMD;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    className: "py-10 block w-full flex justify-center"
  }, items && items.data && items.data.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pagination mt-6 -mb-1 flex flex-wrap"
  }, items.links && items.links.map(function (link, key) {
    if (isLessThanMD) {
      // Prev + and dots disabled
      if (link.url === null) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: key,
          className: "page-link mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400 ".concat(link.label === 'Next' ? 'ml-auto' : '')
        }, link.label);
      } // prev active


      if (key === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
          key: key,
          "class": "page-link mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500 ".concat(link.active ? 'border-brand-orange bg-orange-400 text-white hover:text-gray-600' : '', " ").concat(link.label === 'Next' ? 'ml-auto' : '') // :class="{ 'bg-white': link.active, 'ml-auto': link.label === 'Next' }"
          ,
          href: link.url
        }, link.label);
      } // next


      if (key + 1 === items.links.length) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
          key: key,
          "class": "page-link mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500 ".concat(link.active ? 'border-brand-orange bg-orange-400 text-white hover:text-gray-600' : '', " ").concat(link.label === 'Next' ? 'ml-auto' : '') // :class="{ 'bg-white': link.active, 'ml-auto': link.label === 'Next' }"
          ,
          href: link.url
        }, link.label);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }

    if (link.url === null) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: key,
        className: "page-link mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400 ".concat(link.label === 'Next' ? 'ml-auto' : '')
      }, link.label);
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
      key: key,
      "class": "page-link mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500 ".concat(link.active ? 'border-brand-orange bg-orange-400 text-white hover:text-gray-600' : '', " ").concat(link.label === 'Next' ? 'ml-auto' : '') // :class="{ 'bg-white': link.active, 'ml-auto': link.label === 'Next' }"
      ,
      href: link.url
    }, link.label);
  })));
}
;

/***/ }),

/***/ "./resources/js/components/Select/SearchStatus.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/Select/SearchStatus.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchStatus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .shop-option-description {\n    display: block;\n    font-size: 0.8rem;\n    color: #6f6f6f;\n\n    &.selected {\n      color: #fff !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var SelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
function SearchStatus(props) {
  var status = props.status,
      statuses = props.statuses,
      setStatus = props.setStatus;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectWrapper, {
    className: "font-light text-gray-600 lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "store",
    className: "sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block"
  }, "Estatus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    options: statuses,
    inputId: "status",
    name: "status",
    className: "w-full" // defaultMenuIsOpen
    ,
    classNamePrefix: "status-selector"
    /*
    getOptionValue={option =>
        option.key
    }
    getOptionLabel={option =>
        option.key
    }
    isClearable
     */
    // isClearable
    ,
    placeholder: "Elige estatus",
    onChange: function onChange(selected) {
      if (selected === null) {
        setStatus(null);
      } else {
        setStatus(selected.value);
      }
    } // defaultValue={{label: storeSelected.name }}
    ,
    value: [{
      label: status.label
    }]
    /*
    onFocus={
        this.onShopFocus
    }
    value={shopSelected}
    invalid={
        this.state
            .errorsState.store
    }
     */

  }));
}
;

/***/ }),

/***/ "./resources/js/components/Select/SearchStores.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/Select/SearchStores.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stores; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .shop-option-description {\n    display: block;\n    font-size: 0.8rem;\n    color: #6f6f6f;\n\n    &.selected {\n      color: #fff !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var SelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var transformStoreList = function transformStoreList(stores) {
  return stores.map(function (store) {
    return {
      value: store.id,
      label: store.name,
      friendlyAddress: store.friendly_address
    };
  });
};

var ShopOptionComponent = function ShopOptionComponent(props) {
  var children = props.children,
      friendlyAddress = props.data.friendlyAddress,
      isSelected = props.isSelected; // console.log('ShopOptionComponent props =>', props);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["components"].Option, props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "shop-option-name"
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "shop-option-description".concat(isSelected ? ' selected' : '')
  }, friendlyAddress));
};

function Stores(props) {
  var setStore = props.setStore,
      stores = props.stores,
      _props$storeSelected = props.storeSelected,
      storeSelected = _props$storeSelected === void 0 ? false : _props$storeSelected;
  var storesToSelect = transformStoreList(stores);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (storeSelected) {
      setStore(storeSelected.id);
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectWrapper, {
    className: "font-light text-gray-600 mt-4 lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "store",
    className: "sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block"
  }, "Sucursal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    options: storesToSelect,
    inputId: "store",
    name: "store",
    className: "w-full" // defaultMenuIsOpen
    ,
    classNamePrefix: "stores-selector"
    /*
    getOptionValue={option =>
        option.key
    }
    getOptionLabel={option =>
        option.key
    }
    isClearable
     */
    ,
    isClearable: true,
    placeholder: "Elige una sucursal",
    components: {
      Option: ShopOptionComponent
    },
    onChange: function onChange(selected) {
      if (selected === null) {
        setStore(null);
      } else {
        setStore(selected.value);
      }
    } // defaultValue={{label: storeSelected.name }}
    ,
    value: [{
      label: storeSelected.name,
      value: storeSelected.id
    }]
    /*
    onFocus={
        this.onShopFocus
    }
    value={shopSelected}
    invalid={
        this.state
            .errorsState.store
    }
     */

  }));
}
;

/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);