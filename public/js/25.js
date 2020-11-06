(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

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
/* harmony import */ var _Shared_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Admin */ "./resources/js/Shared/Admin.jsx");
/* harmony import */ var _components_Admin_InfoBoxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Admin/InfoBoxes */ "./resources/js/components/Admin/InfoBoxes.jsx");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/dist/index.es.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Table */ "./resources/js/components/Table.jsx");
/* harmony import */ var _components_Admin_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Admin/SearchBar */ "./resources/js/components/Admin/SearchBar.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Admin_Content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Admin/Content */ "./resources/js/components/Admin/Content.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function Dashboard(props) {
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__["usePage"])(),
      auth = _usePage.auth;

  var orders = props.orders,
      success_message = props.success_message,
      order = props.order,
      stores = props.stores,
      searchValues = props.searchValues;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      dataSelected = _useState2[0],
      setDataSelected = _useState2[1];

  var updateStatus = function updateStatus(id) {
    return function (evt) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].put("/pedido/".concat(id), {
        status: evt.target.value
      });
    };
  };

  var columns = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    return [{
      Header: '-',
      accessor: 'uuid'
    }, {
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
  {
    /*<>*/
  }
  {
    /*    /!* start select *!/*/
  }
  {
    /*    <div className="inline-block relative w-full">*/
  }
  {
    /*        <select*/
  }
  {
    /*            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"*/
  }
  {
    /*            onChange={updateStatus(data.cell.row.original.id)}*/
  }
  {
    /*        >*/
  }
  {
    /*            <option value="opened" selected={data.cell.value.original !== 'opened'}>Visto</option>*/
  }
  {
    /*            <option value="placed" selected={data.cell.value.original === 'placed'}>En ruta/sucursal</option>*/
  }
  {
    /*            <option value="delivered" selected={data.cell.value.original === 'delivered'}>Entregada</option>*/
  }
  {
    /*            <option value="-" selected={data.cell.value.original === '-'}>Pendiente</option>*/
  }
  {
    /*        </select>*/
  }
  {
    /*        <div*/
  }
  {
    /*            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">*/
  }
  {
    /*            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">*/
  }
  {
    /*                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>*/
  }
  {
    /*            </svg>*/
  }
  {
    /*        </div>*/
  }
  {
    /*    </div>*/
  }
  {
    /*    /!* end select *!/*/
  }
  {
    /*</>*/
  }

  var openedAndShow = function openedAndShow(index) {
    var data = orders[index];
    setDataSelected(data);

    if (auth.user.isMatrix && data.status.original === 'created') {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].put("/admin/orders/".concat(data.id), {
        status: 'opened'
      });
    } // if(data.status.original !== 'created') {
    //     return false;
    // }

  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // openedAndShow(0);
    if (orders && dataSelected) {
      var orderUpdated = orders.find(function (order) {
        return order.id === dataSelected.id;
      });
      setDataSelected(orderUpdated);
    }
  }, [orders]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Admin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_InfoBoxes__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: dataSelected
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_Content__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_SearchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    stores: stores,
    searchValues: searchValues
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "font-bold text-black"
  }, "Psedidos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    columns: columns,
    data: orders,
    onClick: function onClick(row) {
      return openedAndShow(row.index);
    },
    selected: dataSelected
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

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
            original: 'alredyDelivered',
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dash-content",
    className: "bg-gray-200 py-6 lg:py-0 w-full lg:min-h-screen lg:max-w-sm flex flex-wrap content-start"
  }, data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "md:mx-6 md:my-3"
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
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input */ "./resources/js/components/Input.jsx");
/* harmony import */ var _Select_SearchStores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Select/SearchStores */ "./resources/js/components/Select/SearchStores.jsx");
/* harmony import */ var _components_DateSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/DateSelector */ "./resources/js/components/DateSelector.jsx");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dates */ "./node_modules/react-dates/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Select_SearchStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Select/SearchStatus */ "./resources/js/components/Select/SearchStatus.jsx");
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







var DateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div(_templateObject());
function SearchBar(props) {
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__["usePage"])(),
      user = _usePage.auth.user,
      stores = _usePage.stores;

  var searchValues = props.searchValues;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(searchValues.id || ''),
      _useState2 = _slicedToArray(_useState, 2),
      id = _useState2[0],
      setId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(searchValues.store || ''),
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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(searchValues.status),
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


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (searchValues && searchValues.store !== '') {
      var searchData = stores.find(function (current) {
        return current.id === store * 1;
      });
      setStoreObject({
        id: searchData.id,
        name: searchData.name,
        friendlyAddress: searchData.friendly_address
      });
    }

    if (searchValues && searchValues.date !== '') {
      // if search values has date value, needs to be set datepicker component with date const.
      setDate(moment__WEBPACK_IMPORTED_MODULE_8___default()(searchValues.date));
    }

    if (searchValues && searchValues.status !== '') {
      // if search values has date value, needs to be set datepicker component with date const.
      setStatus(searchValues.status);
    }
  }, [searchValues]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (store && stores) {
      var storeSelected = stores.find(function (current) {
        // convert string to number
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

  var toSearch = function toSearch() {
    // console.log(`Vamos a buscar id: ${id} , store: ${storeObject.id}, date: ${date}, status: ${status.value}`);
    var searchId = id ? "id=".concat(id) : '';
    var searchStore = storeObject && storeObject.id ? "store=".concat(storeObject.id) : '';
    var searchDate = date ? "date=".concat(date) : '';
    var searchStatus = status ? "status=".concat(status.value) : '';
    var url = "/admin?".concat(searchId, "&").concat(searchStore, "&").concat(searchDate, "&").concat(searchStatus);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_6__["Inertia"].visit(url);
  };

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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block mx-2 w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "id",
    label: "Id",
    onChange: onChange,
    placeholder: "ej. 234",
    error: [],
    onKeyDown: onChange,
    value: id
  })), user.isAdmin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block mx-2 w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Select_SearchStores__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setStore: setStore,
    stores: stores,
    storeSelected: storeObject
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block mx-2 w-1/5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-light text-gray-600 mt-4 lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "store",
    className: "sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block"
  }, "D\xEDa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateWrapper, {
    className: "w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_4__["SingleDatePicker"], {
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
    className: "w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full",
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
    className: "inline-block mx-2 w-1/5"
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
    className: "flex items-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "h-10 inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold px-4 rounded",
    onClick: toSearch
  }, "Buscar")));
}
;

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
    className: "w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full"
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
  }, "$", product.price.toFixed(2))), product.options.allow_instructions && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    className: "font-light text-gray-600 mt-4 lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "store",
    className: "sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block"
  }, "Estatus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    options: statuses,
    inputId: "status",
    name: "status",
    className: "w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full" // defaultMenuIsOpen
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
    className: "w-fullbg-white sm:w-7/12 sm:m-auto lg:w-full" // defaultMenuIsOpen
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