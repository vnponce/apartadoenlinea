(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./resources/js/Pages/Admin/Users.jsx":
/*!********************************************!*\
  !*** ./resources/js/Pages/Admin/Users.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Admin */ "./resources/js/Shared/Admin.jsx");
/* harmony import */ var _components_Admin_UsersInfoBoxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Admin/UsersInfoBoxes */ "./resources/js/components/Admin/UsersInfoBoxes.jsx");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Table */ "./resources/js/components/Table.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 // import 'sweetalert2/src/sweetalert2.scss';




function Users(props) {
  var users = props.users,
      success_message = props.flash.success_message;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      dataSelected = _useState2[0],
      setDataSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      createUser = _useState4[0],
      setCreateUser = _useState4[1];

  var updateStatus = function updateStatus(id) {
    return function (evt) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].put("/users/".concat(id), {
        status: evt.target.value
      });
    };
  };

  var columns = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    return [{
      Header: 'Nombre',
      accessor: 'name'
    }, {
      Header: 'email',
      accessor: 'email'
    }, {
      Header: 'role',
      accessor: 'role'
    },
    /*
    {
        Header: 'password',
        accessor: 'password',
        Cell: data => (
            <span className="">Change Password</span>
        ),
    },
    */
    {
      Header: 'Tienda',
      accessor: 'stores',
      Cell: function Cell(data) {
        var user = data.row.original;

        if (user.isAdmin) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: ""
          }, "Todas");
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: ""
        }, user.stores[0].name);
      }
    }];
  }, []);

  var openedAndShow = function openedAndShow(index) {
    var data = users[index];
    setCreateUser(false);
    setDataSelected(data);
  };

  var showCreateUser = function showCreateUser() {
    setCreateUser(true);
    setDataSelected(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (success_message) {
      setCreateUser(false);
      setDataSelected(false);
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Admin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_UsersInfoBoxes__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: dataSelected,
    createUser: createUser,
    setCreateUser: setCreateUser
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
  }, "Usuarios"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0",
    onClick: showCreateUser
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-user-plus fa-fw"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    columns: columns,
    data: users,
    onClick: function onClick(row) {
      return openedAndShow(row.index);
    },
    selected: dataSelected
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ }),

/***/ "./resources/js/components/Admin/UsersInfoBoxes.jsx":
/*!**********************************************************!*\
  !*** ./resources/js/components/Admin/UsersInfoBoxes.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoBoxes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input */ "./resources/js/components/Input.jsx");
/* harmony import */ var _UsersInfoBoxes_CreateUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsersInfoBoxes/CreateUser */ "./resources/js/components/Admin/UsersInfoBoxes/CreateUser.jsx");



function InfoBoxes(props) {
  var data = props.data,
      _props$editUser = props.editUser,
      editUser = _props$editUser === void 0 ? false : _props$editUser,
      _props$createUser = props.createUser,
      createUser = _props$createUser === void 0 ? false : _props$createUser,
      setCreateUser = props.setCreateUser;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dash-content",
    className: "bg-gray-200 py-6 lg:py-0 w-full lg:min-h-screen lg:max-w-sm flex flex-wrap content-start"
  }, (data || createUser) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-2 md:mx-6 md:my-6"
  }, createUser && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UsersInfoBoxes_CreateUser__WEBPACK_IMPORTED_MODULE_2__["default"], null), data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UsersInfoBoxes_CreateUser__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data
  }), data && false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: data.name,
    className: "w-24 h-24 rounded-full mr-4",
    src: data.avatar_path
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-1 flex-col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg my-6"
  }, data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-user-shield fa-fw text-brand-icons text-lg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline"
  }, " ", data.role)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-at fa-fw text-brand-icons text-lg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline"
  }, " ", data.email)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-store fa-fw text-brand-icons text-lg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline"
  }, data.isAdmin ? 'Todas' : data.stores[0].name)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Cambiar Contrase\xF1a"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Editar"))))), !(data || createUser) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, "No hay ningun usuario seleccionado para editar la informaci\xF3n."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    onClick: setCreateUser,
    className: "flex-1 mt-3 text-brand-orange cursor-pointer"
  }, "Haz click para crear usuario.")))));
}
;

/***/ }),

/***/ "./resources/js/components/Admin/UsersInfoBoxes/CreateUser.jsx":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Admin/UsersInfoBoxes/CreateUser.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateUser; });
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 // import 'filepond/dist/filepond.min.css';


 // import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

 // Register the plugins

Object(react_filepond__WEBPACK_IMPORTED_MODULE_4__["registerPlugin"])(filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_5___default.a, filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_6___default.a);
function CreateUser(props) {
  var data = props.data;

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])(),
      errors = _usePage.errors,
      stores = _usePage.stores,
      success_message = _usePage.flash.success_message;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    // store: 1,
    role: 'god'
  }),
      _useState2 = _slicedToArray(_useState, 2),
      userData = _useState2[0],
      setUserData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      storeSelected = _useState4[0],
      setStoreSelected = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      editing = _useState6[0],
      setEditing = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      avatar = _useState8[0],
      setAvatar = _useState8[1];

  var onChange = function onChange(e) {
    setUserData(_objectSpread({}, userData, _defineProperty({}, e.target.name, e.target.value)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (data) {
      setEditing(true);
      setUserData(_objectSpread({}, data));
    }
  }, [data]);

  var createUser = function createUser() {
    /*
    const formData = new FormData();
    formData.append("file", avatar, avatar.name);
    formData.set("name", userData.name ? userData.name : '');
    formData.set("email", userData.email ? userData.email : '');
    formData.set("password", userData.password ? userData.password : '');
    formData.set("role", userData.role ? userData.role : '');
    formData.set("store", storeSelected ? storeSelected : '');
     */
    if (editing) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].put("users/".concat(userData.id), _objectSpread({}, userData, {
        store: storeSelected
      }));
    } else {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].post("users", _objectSpread({}, userData, {
        store: storeSelected
      }));
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: onChange,
    value: userData.name,
    id: "name",
    label: "Nombre de usuario",
    placeholder: "Nombre",
    error: errors.name
  }), !editing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: onChange,
    value: userData.email,
    id: "email",
    label: "Correo Electr\xF3nico",
    placeholder: "email",
    error: errors.email
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: onChange,
    value: userData.password,
    id: "password",
    label: "Contrase\xF1a",
    placeholder: "Contrase\xF1a",
    type: "password",
    error: errors.password
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "role",
    className: "hover:border-grey-900 italic sm:block"
  }, "Role"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    id: "role",
    name: "role",
    className: "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
    onChange: onChange
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "god",
    selected: userData.role !== 'god'
  }, "Dios"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "admin",
    selected: userData.role === 'admmin'
  }, "Administrador/Matriz"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "manager",
    selected: userData.role === 'manager'
  }, "Manager/Sucursal"))), errors.role && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm m-auto text-red-500 error role"
  }, errors.role[0]), userData.role === 'manager' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !editing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Select_Stores__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setStore: setStoreSelected,
    stores: stores
  }), editing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Select_Stores__WEBPACK_IMPORTED_MODULE_7__["default"], {
    storeSelected: userData.stores[0],
    setStore: setStoreSelected,
    stores: stores
  }), errors.store && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm m-auto text-red-500 error store"
  }, errors.store[0])), userData.role !== 'manager' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "role",
    className: "hover:border-grey-900 italic sm:block"
  }, "Sucursal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-base"
  }, "Visualiza todas las sucursales"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "role",
    name: "role",
    type: "hidden",
    value: "1"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "my-6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0",
    onClick: createUser
  }, editing ? 'Editar usuario' : 'Crear usuario'));
}
;

/***/ }),

/***/ "./resources/js/components/Select/Stores.jsx":
/*!***************************************************!*\
  !*** ./resources/js/components/Select/Stores.jsx ***!
  \***************************************************/
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
      isSelected = props.isSelected;
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
    placeholder: "Elige una sucursal",
    components: {
      Option: ShopOptionComponent
    },
    onChange: function onChange(selected) {
      setStore(selected.value);
    },
    defaultValue: {
      label: storeSelected.name,
      value: storeSelected.id
    }
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

/***/ })

}]);