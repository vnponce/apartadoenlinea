(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

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
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Table */ "./resources/js/components/Table.jsx");
/* harmony import */ var _components_Admin_StoresInfoBoxes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Admin/StoresInfoBoxes */ "./resources/js/components/Admin/StoresInfoBoxes.jsx");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Admin_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Admin/Content */ "./resources/js/components/Admin/Content.jsx");
/* harmony import */ var _Shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Shared/utils */ "./resources/js/Shared/utils.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./resources/js/hooks/useWindowSize.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // import UsersInfoBoxes from "../../components/Admin/UsersInfoBoxes";
// import {Inertia} from "@inertiajs/inertia";




 // import 'sweetalert2/src/sweetalert2.scss'




function Stores(props) {
  var stores = props.stores,
      success_message = props.flash.success_message;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      storeId = _useState2[0],
      setStoreId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      mobileShowInfoBoxes = _useState4[0],
      setMobileShowInfoBoxes = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isInfoBoxOpen = _useState6[0],
      setIsInfoBoxOpen = _useState6[1];

  var _useWindowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__["useWindowSize"])(),
      isLessThanLG = _useWindowSize.isLessThanLG;

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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (success_message) {
      // setCreateUser(false);
      // setDataSelected(false);
      sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
        position: 'top-end',
        icon: 'success',
        title: success_message,
        showConfirmButton: false,
        timer: 1500
      }).then(function () {
        location.reload();
      });
    }
  }, [success_message]);

  var openedAndShow = function openedAndShow(index) {
    var data = stores[index];
    setStoreId(data.id); // setStoreId(data.id);

    setIsInfoBoxOpen(true);

    if (isLessThanLG) {
      setMobileShowInfoBoxes(true);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Admin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Panel"
  }, (isLessThanLG && isInfoBoxOpen || !isLessThanLG) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_StoresInfoBoxes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: storeId,
    createStore: false,
    setCreateStore: function setCreateStore() {}
  }), !mobileShowInfoBoxes && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_Content__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "font-bold text-black inline-block"
  }, "Tiendas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    columns: columns,
    data: stores,
    onClick: function onClick(row) {
      return openedAndShow(row.index);
    },
    selected: false
  }))));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Stores);

/***/ }),

/***/ "./resources/js/components/Admin/StoresInfoBoxes.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/components/Admin/StoresInfoBoxes.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoBoxes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StoresInfoBoxes_CreateStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoresInfoBoxes/CreateStore */ "./resources/js/components/Admin/StoresInfoBoxes/CreateStore.jsx");


function InfoBoxes(props) {
  var id = props.id,
      _props$editStore = props.editStore,
      editStore = _props$editStore === void 0 ? false : _props$editStore,
      _props$createStore = props.createStore,
      createStore = _props$createStore === void 0 ? false : _props$createStore,
      setCreateStore = props.setCreateStore;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dash-content",
    className: "h-full lg:h-auto bg-gray-200 py-6 lg:py-0 w-full lg:max-w-sm flex flex-wrap content-start"
  }, id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full sticky top-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-2 md:mx-6 md:my-6"
  }, id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StoresInfoBoxes_CreateStore__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: id
  }))), !id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full sticky top-0"
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
  }, "No hay sucursal seleccionada para ver su informaci\xF3n.")))));
}
;

/***/ }),

/***/ "./resources/js/components/Admin/StoresInfoBoxes/CreateStore.jsx":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Admin/StoresInfoBoxes/CreateStore.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Input */ "./resources/js/components/Input.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_filepond__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-filepond */ "./node_modules/react-filepond/dist/react-filepond.js");
/* harmony import */ var react_filepond__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_filepond__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! filepond-plugin-image-exif-orientation */ "./node_modules/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.js");
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! filepond-plugin-image-preview */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js");
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Select_Stores__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Select/Stores */ "./resources/js/components/Select/Stores.jsx");
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Textarea */ "./resources/js/components/Textarea.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // import 'filepond/dist/filepond.min.css';


 // import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";



function CreateStore(props) {
  var id = props.id;

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])(),
      errors = _usePage.errors,
      stores = _usePage.stores;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(stores.filter(function (store) {
    return store.id === id;
  })[0]),
      _useState2 = _slicedToArray(_useState, 2),
      storeData = _useState2[0],
      setStoreData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      editing = _useState4[0],
      setEditing = _useState4[1];

  var onChange = function onChange(e) {
    setStoreData(_objectSpread({}, storeData, _defineProperty({}, e.target.name, e.target.value)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (id) {
      setEditing(true);
      setStoreData(stores.filter(function (store) {
        return store.id === id;
      })[0]);
    }
  }, [id]);

  var createStore = function createStore() {
    if (editing) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].put("stores/".concat(id), _objectSpread({}, storeData));
    } else {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].post("stores", _objectSpread({}, storeData));
    }
  };

  var cancelStore = function cancelStore() {
    var hostname = window.location.hostname;
    var url = window.location.href;

    var _url$split = url.split(hostname),
        _url$split2 = _slicedToArray(_url$split, 2),
        port = _url$split2[0],
        path = _url$split2[1];

    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].visit(path);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, storeData.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Textarea__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onChange: onChange,
    value: storeData.address,
    id: "address",
    label: "Direcci\xF3n",
    placeholder: "email",
    error: errors.address
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Textarea__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onChange: onChange,
    value: storeData.friendly_address,
    id: "friendly_address",
    label: "Direcci\xF3n amigable",
    placeholder: "Direcci\xF3n amigable",
    error: errors.friendly_address
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: onChange,
    value: storeData.lat,
    id: "lat",
    label: "Latitud",
    placeholder: "Latitud",
    error: errors.lat
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: onChange,
    value: storeData.lon,
    id: "lon",
    label: "Longitud",
    placeholder: "Longitud",
    error: errors.lon
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "my-6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0",
    onClick: createStore
  }, editing ? 'Editar sucursal' : 'Crear sucursal'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "inline-block float-left text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0",
    onClick: cancelStore
  }, "Cancelar"));
}
;

/***/ })

}]);