(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./resources/js/Pages/Admin/Stores.jsx":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Admin/Stores.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Admin */ "./resources/js/Shared/Admin.jsx");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Table */ "./resources/js/components/Table.jsx");
/* harmony import */ var _components_Admin_UsersInfoBoxes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Admin/UsersInfoBoxes */ "./resources/js/components/Admin/UsersInfoBoxes.jsx");

 // import UsersInfoBoxes from "../../components/Admin/UsersInfoBoxes";





function Stores(props) {
  var stores = props.stores,
      success_message = props.success_message;
  console.log('stores =>', stores);
  var columns = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    return [{
      Header: 'Nombre',
      accessor: 'name'
    }, {
      Header: 'Dirección',
      accessor: 'address'
    }, {
      Header: 'Dirección amigable',
      accessor: 'friendly_address'
    }, {
      Header: 'Horas de entrega',
      accessor: 'delivery_time' // Cell: data => (
      //     <span className="">Change Password</span>
      // ),

    }, {
      Header: 'Lunes a Sábado',
      accessor: 'monday_saturday' // Cell: data => (
      //     <span className="">Change Password</span>
      // ),

    }, {
      Header: 'Domingo',
      accessor: 'sunday' // Cell: data => {
      //     console.log('data =>', data);
      //     const { original: user } = data.row;
      //     if(user.isAdmin) {
      //         return <span className="">Todas</span>
      //     }
      //     return <span className="">{user.stores[0].name}</span>;
      // },

    }];
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Admin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_UsersInfoBoxes__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: false,
    createUser: false,
    setCreateUser: function setCreateUser() {}
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
    className: "font-bold text-black inline-block"
  }, "Tiendas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0",
    onClick: function onClick() {
      return console.log('tienda');
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-store fa-fw"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    columns: columns,
    data: stores,
    onClick: function onClick(row) {
      return console.log('store =>', row);
    },
    selected: false
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Stores);

/***/ })

}]);