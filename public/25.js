(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

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
/* harmony import */ var _components_Admin_ProductsInfoBoxes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Admin/ProductsInfoBoxes */ "./resources/js/components/Admin/ProductsInfoBoxes.jsx");
/* harmony import */ var react_laravel_paginex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-laravel-paginex */ "./node_modules/react-laravel-paginex/dist/index.js");
/* harmony import */ var react_laravel_paginex__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_laravel_paginex__WEBPACK_IMPORTED_MODULE_9__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function Products(props) {
  var products = props.products,
      success_message = props.success_message;
  console.log('products =>', products);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      dataSelected = _useState2[0],
      setDataSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      createProduct = _useState4[0],
      setCreateProduct = _useState4[1];

  var updateStatus = function updateStatus(id) {
    return function (evt) {
      console.log('id =>', id);
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].put("/products/".concat(id), {
        status: evt.target.value
      });
    };
  };

  var showCreateProduct = function showCreateProduct() {
    console.log('crear product');
    setCreateProduct(true);
    setDataSelected(false);
  };

  var columns = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    return [{
      Header: 'Nombre',
      accessor: 'name'
    }, {
      Header: 'Descripción',
      accessor: 'description'
    }, {
      Header: 'Ingredientes',
      accessor: 'ingredients'
    }, {
      Header: 'Precio',
      accessor: 'price',
      Cell: function Cell(data) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: ""
        }, data.row.original.formatPrice);
      }
    }, {
      Header: 'Disponible',
      accessor: 'available',
      Cell: function Cell(data) {
        var available = data.row.original.available;

        if (available) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fas fa-check-circle table m-auto"
          });
        } else {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fas fa-times-circle table m-auto"
          });
        }
      }
    }];
  }, []);

  var openedAndShow = function openedAndShow(index) {
    var data = products.data[index];
    setDataSelected(data);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// openedAndShow(0);
  }, []);

  var getData = function getData(data) {
    return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].visit("?page=".concat(data.page));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Admin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Panel"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_ProductsInfoBoxes__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: dataSelected,
    createProduct: createProduct,
    setCreateProduct: setCreateProduct
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
  }, "Productos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0",
    onClick: showCreateProduct
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-bread-slice fa-fw"
  }), "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_7__["default"], {
    columns: columns,
    data: products.data,
    onClick: function onClick(row) {
      return openedAndShow(row.index);
    },
    selected: dataSelected
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-10 block w-full flex justify-center"
  }, products && products.data.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_laravel_paginex__WEBPACK_IMPORTED_MODULE_9__["Pagination"], {
    containerClass: "flex flex-wrap h-12",
    numberButtonClass: "mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo focus:text-indigo" // numberClass="mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo focus:text-indigo"
    ,
    activeClass: "border-brand-orange bg-orange-400 text-white hover:text-gray-600",
    changePage: getData,
    nextButtonText: "Siguiente",
    buttonIcons: true,
    prevButtonClass: "mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo focus:text-indigo",
    nextButtonClass: "mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-indigo focus:text-indigo" // prevButtonText="Anterior"
    // prevButtonIcon="fa fa-chevron-left"
    ,
    data: products
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./resources/js/components/Admin/ProductsInfoBoxes.jsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/Admin/ProductsInfoBoxes.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoBoxes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input */ "./resources/js/components/Input.jsx");
/* harmony import */ var _ProductsInfoBoxes_CreateProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductsInfoBoxes/CreateProduct */ "./resources/js/components/Admin/ProductsInfoBoxes/CreateProduct.jsx");
/* harmony import */ var filepond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! filepond */ "./node_modules/filepond/dist/filepond.js");
/* harmony import */ var filepond__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(filepond__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function InfoBoxes(props) {
  var data = props.data,
      _props$editProduct = props.editProduct,
      editProduct = _props$editProduct === void 0 ? false : _props$editProduct,
      _props$createProduct = props.createProduct,
      createProduct = _props$createProduct === void 0 ? false : _props$createProduct,
      setCreateProduct = props.setCreateProduct;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  console.log('ProductInfoboxes data =>', data);
  console.log('ProductInfoboxes createProduct =>', createProduct);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('mounting');
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "dash-content",
    className: "bg-gray-200 py-6 lg:py-0 w-full h-full lg:max-w-sm flex flex-wrap content-start"
  }, (data || createProduct) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-2 md:mx-6 md:my-3"
  }, createProduct && !data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductsInfoBoxes_CreateProduct__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setCreateProduct: setCreateProduct
  }), isEditing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductsInfoBoxes_CreateProduct__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data
  }), data && !isEditing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-center"
  }, data.image_path && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: data.image_path,
    className: "w-64 h-64 rounded mr-4",
    src: data.image_path
  }), !data.image && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "far fa-image text-6xl rounded mr-4"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-1 flex-col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg my-3"
  }, data.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-align-left fa-fw text-brand-icons text-lg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline"
  }, " ", data.description || 'No tiene descripción')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-list-ul fa-fw text-brand-icons text-lg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline"
  }, " ", data.ingredients || 'No tiene ingredientes')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-dollar-sign fa-fw text-brand-icons text-lg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline"
  }, data.formatPrice)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-layer-group fa-fw text-brand-icons text-lg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline"
  }, data.category.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-check-circle fa-fw text-brand-icons text-lg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline"
  }, data.available ? 'Disponible' : 'No disponible')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-star fa-fw text-brand-icons text-lg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline"
  }, data.favorite ? 'Favorito' : 'No es favorito')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "inline-block float-left text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0",
    onClick: function onClick() {
      return setIsEditing(true);
    }
  }, "Editar"))))), !(data || createProduct) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-1/2 lg:w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-3"
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
  }, "No hay ningun producto seleccionado para editar la informaci\xF3n."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    onClick: setCreateProduct,
    className: "flex-1 mt-3 text-brand-orange cursor-pointer"
  }, "Haz click para crear producto.")))));
}
;

/***/ }),

/***/ "./resources/js/components/Admin/ProductsInfoBoxes/CreateProduct.jsx":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Admin/ProductsInfoBoxes/CreateProduct.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateProduct; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Input */ "./resources/js/components/Input.jsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_filepond__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-filepond */ "./node_modules/react-filepond/dist/react-filepond.js");
/* harmony import */ var react_filepond__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_filepond__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! filepond/dist/filepond.min.css */ "./node_modules/filepond/dist/filepond.min.css");
/* harmony import */ var filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(filepond_dist_filepond_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! filepond-plugin-image-exif-orientation */ "./node_modules/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.js");
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! filepond-plugin-image-preview */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js");
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var filepond_plugin_image_preview_dist_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css");
/* harmony import */ var filepond_plugin_image_preview_dist_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview_dist_filepond_plugin_image_preview_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Select_Stores__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Select/Stores */ "./resources/js/components/Select/Stores.jsx");
/* harmony import */ var filepond__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! filepond */ "./node_modules/filepond/dist/filepond.js");
/* harmony import */ var filepond__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(filepond__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Checkbox */ "./resources/js/components/Checkbox.jsx");
/* harmony import */ var _babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/esm/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













 // Register the plugins

Object(react_filepond__WEBPACK_IMPORTED_MODULE_4__["registerPlugin"])(filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_6___default.a, filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_7___default.a);
function CreateProduct(props) {
  var data = props.data,
      setCreateProduct = props.setCreateProduct;

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])(),
      errors = _usePage.errors,
      stores = _usePage.stores,
      categories = _usePage.categories,
      success_message = _usePage.success_message;

  console.log('errors =>', errors);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    favorite: 0,
    available: 0,
    category_id: categories[0].id
  }),
      _useState2 = _slicedToArray(_useState, 2),
      productData = _useState2[0],
      setProductData = _useState2[1];

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
    setProductData(_objectSpread({}, productData, _defineProperty({}, e.target.name, e.target.value)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log('mounting Create Product data =>', data);

    if (data) {
      setEditing(true);
      setProductData(_objectSpread({}, data));
    }
  }, [data]);

  var cancelProduct = function cancelProduct() {
    var hostname = window.location.hostname;
    var url = window.location.href;

    var _url$split = url.split(hostname),
        _url$split2 = _slicedToArray(_url$split, 2),
        port = _url$split2[0],
        path = _url$split2[1];

    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].visit(path);
  };

  var refreshPage = function refreshPage() {
    var hostname = window.location.hostname;
    var url = window.location.href;

    var _url$split3 = url.split(hostname),
        _url$split4 = _slicedToArray(_url$split3, 2),
        port = _url$split4[0],
        path = _url$split4[1];

    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].visit(path);
  };

  var createProduct = function createProduct() {
    console.log('createProduct isEditing =>', editing);

    if (editing) {
      console.log('editing true');
      console.log('editing productData =>', productData); // console.log('editing storeSelected =>', storeSelected);

      if (avatar) {
        console.log('Exist avatar =>', avatar);
        var formData = new FormData();
        formData.append("file", avatar, avatar.name);
        formData.set("name", productData.name || '');
        formData.set("description", productData.description || '');
        formData.set("ingredients", productData.ingredients || '');
        formData.set("price", productData.price || '');
        formData.set("category_id", productData.category_id || '');
        formData.set("available", productData.available);
        formData.set("favorite", productData.favorite);
        console.log('editing else con post');
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].put("products/".concat(productData.id), formData).then(function (response) {
          console.log("response from products/".concat(productData.id), response);
          setEditing(false);
        }).then(function (response) {
          console.log('refreshing page'); // refreshPage()
        });
      } else {
        console.log('editing sin imagen');
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].put("products/".concat(productData.id), _objectSpread({}, productData)).then(function (response) {
          console.log('response =>', response); // refreshPage();

          if (Object.keys(errors).length === 0) {
            console.log('Errors length === 0', errors);
            setEditing(false);
          }
        });
      }
    } else {
      var _formData = new FormData();

      _formData.append("file", avatar, avatar.name);

      _formData.set("name", productData.name || '');

      _formData.set("description", productData.description || '');

      _formData.set("ingredients", productData.ingredients || '');

      _formData.set("price", productData.price || '');

      _formData.set("category_id", productData.category_id || '');

      _formData.set("available", productData.available);

      _formData.set("favorite", productData.favorite);

      console.log('editing else con post');
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__["Inertia"].post("products", _formData).then(function (response) {
        console.log('response =>', response);
        setCreateProduct(false);
      }).then(function (response) {
        refreshPage();
      }); // Inertia.post("products", {
      //     ...productData,
      //     // store: storeSelected,
      // });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_filepond__WEBPACK_IMPORTED_MODULE_4__["FilePond"], {
    onupdatefiles: function onupdatefiles(fileItems) {
      console.log('onupdatefiles =>', fileItems); // setAvatar(fileItems.map(fileItem => fileItem.file));

      setAvatar(fileItems[0].file);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: onChange,
    value: productData.name,
    id: "name",
    label: "Nombre de producto",
    placeholder: "Nombre",
    error: errors.name
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: onChange,
    value: productData.description,
    id: "description",
    label: "Descripci\xF3n",
    placeholder: "Descripci\xF3n",
    error: errors.description
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: onChange,
    value: productData.ingredients,
    id: "ingredients",
    label: "Ingredientes",
    placeholder: "Ingredientes separados por coma",
    error: errors.ingredients
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onChange: onChange,
    value: productData.price,
    id: "price",
    label: "Precio",
    placeholder: "12.50",
    error: errors.price
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "category_id",
    className: "hover:border-grey-900 italic sm:block"
  }, "Categor\xEDa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    id: "category_id",
    name: "category_id",
    className: "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
    onChange: onChange
  }, categories.map(function (category) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: category.id,
      selected: productData.category_id === category.id
    }, category.name);
  }))), errors.category_id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm m-auto text-red-500 error category"
  }, errors.category_id[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: "Disponible",
    checked: productData.available,
    setChecked: function setChecked() {
      return setProductData(_objectSpread({}, productData, {
        available: productData.available === 0 ? 1 : 0
      }));
    },
    error: errors.available
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: "Favorito",
    checked: productData.favorite,
    setChecked: function setChecked() {
      return setProductData(_objectSpread({}, productData, {
        favorite: productData.favorite === 0 ? 1 : 0
      }));
    },
    error: errors.favorite
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "my-6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0",
    onClick: createProduct
  }, editing ? 'Editar' : 'Crear producto'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "inline-block float-left text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0",
    onClick: cancelProduct
  }, "Cancelar"));
}
;

/***/ }),

/***/ "./resources/js/components/Checkbox.jsx":
/*!**********************************************!*\
  !*** ./resources/js/components/Checkbox.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .custom-label input:checked + svg {\n        display: block !important;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* To handle checked state this component requires a single of css */

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject()); // export default function Checkbox({ id, label, type: inputType, value: inputValue, placeholder, onChange, onKeyDown = () => false, error = [] }) {

function Checkbox(_ref) {
  var label = _ref.label,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      setChecked = _ref.setChecked,
      error = _ref.error;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    className: "mt-10"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "custom-label flex cursor-pointer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "select-none"
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white shadow w-6 h-6 p-1 flex justify-center items-center ml-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "hidden",
    checked: checked,
    onClick: setChecked
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "hidden w-4 h-4 text-green-600 pointer-events-none",
    viewBox: "0 0 172 172"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    strokeWidth: "none",
    strokeMiterlimit: "10",
    fontFamily: "none",
    fontWeight: "none",
    fontSize: "none",
    textAnchor: "none"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 172V0h172v172z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z",
    fill: "currentColor",
    strokeWidth: "1"
  }))))), error && error[0] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm m-auto text-red-500 error ".concat(error)
  }, error[0]));
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
  console.log('ShopOptionComponent props =>', props);
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
  console.log('storeSelected =>', storeSelected);
  console.log('stores =>', stores);
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