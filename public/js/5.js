(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Table */ "./resources/js/components/Table.jsx");
/* harmony import */ var _components_Admin_ProductsInfoBoxes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Admin/ProductsInfoBoxes */ "./resources/js/components/Admin/ProductsInfoBoxes.jsx");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Admin_Content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Admin/Content */ "./resources/js/components/Admin/Content.jsx");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Pagination */ "./resources/js/components/Pagination.jsx");
/* harmony import */ var _Shared_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Shared/utils */ "./resources/js/Shared/utils.js");
/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useWindowSize */ "./resources/js/hooks/useWindowSize.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Input */ "./resources/js/components/Input.jsx");
/* harmony import */ var _components_Admin_InfoBoxes_InfoBoxesDetailsWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Admin/InfoBoxes/InfoBoxesDetailsWrapper */ "./resources/js/components/Admin/InfoBoxes/InfoBoxesDetailsWrapper.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








 // import 'sweetalert2/src/sweetalert2.scss'






function Products(props) {
  var products = props.products,
      success_message = props.flash.success_message;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      productToSearch = _useState2[0],
      setProductToSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      dataSelected = _useState4[0],
      setDataSelected = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      createProduct = _useState6[0],
      setCreateProduct = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      editing = _useState8[0],
      setEditing = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      mobileShowInfoBoxes = _useState10[0],
      setMobileShowInfoBoxes = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isInfoBoxOpen = _useState12[0],
      setIsInfoBoxOpen = _useState12[1];

  var _useWindowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_9__["useWindowSize"])(),
      isLessThanLG = _useWindowSize.isLessThanLG;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var queryName = Object(_Shared_utils__WEBPACK_IMPORTED_MODULE_8__["getParameterByName"])('name');
    setProductToSearch(queryName || '');
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (success_message) {
      setCreateProduct(null);
      setEditing(false);
      sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
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

  var showCreateProduct = function showCreateProduct() {
    setCreateProduct(true);
    setDataSelected(false);
    setEditing(false);
    setIsInfoBoxOpen(true);

    if (isLessThanLG) {
      setMobileShowInfoBoxes(true);
    }
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
    setEditing(false);
    setDataSelected(data);
    setIsInfoBoxOpen(true);

    if (isLessThanLG) {
      setMobileShowInfoBoxes(true);
    }
  };

  var getData = function getData(data) {
    return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].visit("?page=".concat(data.page));
  };

  var onChange = function onChange(e) {
    console.log('onchange =>', e.key, e.target.value);

    if (e.key === 'Enter') {
      toSearch(); // return false;
    }

    setProductToSearch(e.target.value);
  };

  var toSearch = function toSearch() {
    var searchProduct = productToSearch ? "name=".concat(productToSearch) : '';
    var url = "/admin/products?".concat(searchProduct);
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].visit(url);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Admin__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Panel"
  }, (isLessThanLG && isInfoBoxOpen || !isLessThanLG) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_InfoBoxes_InfoBoxesDetailsWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_ProductsInfoBoxes__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: dataSelected,
    setDataSelected: setDataSelected,
    createProduct: createProduct,
    setCreateProduct: setCreateProduct,
    editing: editing,
    setEditing: setEditing
  })), !mobileShowInfoBoxes && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Admin_Content__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full flex items-end mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inline-block flex mr-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "id",
    label: "Nombre",
    onChange: onChange,
    placeholder: "ej. dona",
    error: [],
    onKeyDown: onChange,
    value: productToSearch
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "h-10 inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold px-4 rounded",
    onClick: toSearch
  }, "Buscar"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "font-bold text-black inline-block"
  }, "Productos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "inline-block float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0",
    onClick: showCreateProduct
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-bread-slice fa-fw"
  }), "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full overflow-y-hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
    columns: columns,
    data: products.data,
    onClick: function onClick(row) {
      return openedAndShow(row.index);
    },
    selected: dataSelected
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    items: products
  })));
}

;
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
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function InfoBoxes(props) {
  var data = props.data,
      _props$createProduct = props.createProduct,
      createProduct = _props$createProduct === void 0 ? false : _props$createProduct,
      setCreateProduct = props.setCreateProduct,
      editing = props.editing,
      setEditing = props.setEditing,
      setDataSelected = props.setDataSelected; // console.log('InfoBoxes data =>', data);
  // console.log('InfoBoxes createProduct =>', createProduct);
  // useEffect(() => {
  //     if(data){
  //         setDataSelected(data);
  //     }
  // }, [data]);

  var cancelProduct = function cancelProduct() {
    var hostname = window.location.hostname;
    var url = window.location.href;

    var _url$split = url.split(hostname),
        _url$split2 = _slicedToArray(_url$split, 2),
        port = _url$split2[0],
        path = _url$split2[1];

    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].visit(path);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, (data || createProduct) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-2 md:mx-6 md:my-3"
  }, createProduct && !data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductsInfoBoxes_CreateProduct__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setDataSelected: setDataSelected,
    setCreateProduct: setCreateProduct
  }), editing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductsInfoBoxes_CreateProduct__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setCreateProduct: setCreateProduct,
    setDataSelected: setDataSelected,
    data: data,
    editing: editing,
    setEditing: setEditing
  }), data && !editing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, data.favorite ? 'Favorito' : 'No es favorito')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "inline fa fa-pencil-alt fa-fw text-brand-icons text-lg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "inline"
  }, data.customizable ? 'Personalizable' : 'No es personalizable')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-row w-full justify-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0",
    onClick: cancelProduct
  }, "Cancelar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "inline-block text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0",
    onClick: function onClick() {
      return setEditing(true);
    }
  }, "Editar"))))), !(data || createProduct) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-3"
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
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_filepond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-filepond */ "./node_modules/react-filepond/dist/react-filepond.js");
/* harmony import */ var react_filepond__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_filepond__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! filepond-plugin-image-exif-orientation */ "./node_modules/filepond-plugin-image-exif-orientation/dist/filepond-plugin-image-exif-orientation.js");
/* harmony import */ var filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! filepond-plugin-image-preview */ "./node_modules/filepond-plugin-image-preview/dist/filepond-plugin-image-preview.js");
/* harmony import */ var filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var filepond__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! filepond */ "./node_modules/filepond/dist/filepond.js");
/* harmony import */ var filepond__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(filepond__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _Select_Stores__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Select/Stores */ "./resources/js/components/Select/Stores.jsx");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Checkbox */ "./resources/js/components/Checkbox.jsx");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Input */ "./resources/js/components/Input.jsx");
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Textarea */ "./resources/js/components/Textarea.jsx");
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

Object(react_filepond__WEBPACK_IMPORTED_MODULE_3__["registerPlugin"])(filepond_plugin_image_exif_orientation__WEBPACK_IMPORTED_MODULE_4___default.a, filepond_plugin_image_preview__WEBPACK_IMPORTED_MODULE_5___default.a);
function CreateProduct(props) {
  var data = props.data,
      setCreateProduct = props.setCreateProduct,
      _props$editing = props.editing,
      editing = _props$editing === void 0 ? false : _props$editing,
      _props$setEditing = props.setEditing,
      setEditing = _props$setEditing === void 0 ? function () {} : _props$setEditing,
      setDataSelected = props.setDataSelected;

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      errors = _usePage.errors,
      stores = _usePage.stores,
      categories = _usePage.categories,
      flash = _usePage.flash;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      successMessageCount = _useState2[0],
      setSuccessMessageCount = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    description: '',
    ingredients: '',
    price: '',
    favorite: 0,
    available: 0,
    customizable: 0,
    category_id: categories[0].id
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      productData = _useState4[0],
      setProductData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      storeSelected = _useState6[0],
      setStoreSelected = _useState6[1]; // const [editing, setEditing] = useState(false);


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      avatar = _useState8[0],
      setAvatar = _useState8[1];

  var onChange = function onChange(e) {
    setProductData(_objectSpread({}, productData, _defineProperty({}, e.target.name, e.target.value)));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (window.Cypress) {
      var dataBase64 = '/9j/4AAQSkZJRgABAQEAZABkAAD/7AARRHVja3kAAQAEAAAAZAAA/9sAQwACAQEBAQECAQEBAgIC\n' + 'AgIEAwICAgIFBAQDBAYFBgYGBQYGBgcJCAYHCQcGBggLCAkKCgoKCgYICwwLCgwJCgoK/9sAQwEC\n' + 'AgICAgIFAwMFCgcGBwoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoK\n' + 'CgoKCgoK/8IAEQgCWAMgAwERAAIRAQMRAf/EABwAAQACAwEBAQAAAAAAAAAAAAAFBgIDBAcBCP/E\n' + 'ABoBAQADAQEBAAAAAAAAAAAAAAABAwQCBQb/2gAMAwEAAhADEAAAAf38AAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + '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\n' + 'zsjqR4tiLKPh382cHdffxZzdca0Ab461THVz3y9cYo7ubIrumar0Q1lG+J2R1rmNkTkapgbonRPI\n' + 'zidPUZxMxXdsdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ52pySAAPiOPrjs5s+nJNfXFgGhzvd\n' + 'DU52ugAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI/qrmnjpjvl642xO2OuDqvanKHy\n' + 'WtHdzb382AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADU5wlqnnbE60b460zzsdfDW5\n' + '+pzOiOwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + '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\n' + 'YFb5T9/qt8p+/wBVvlP3+qq5opY7NKFXTAWBW+U/f6rfKfv9VvlP3+qq5opY7NKFXTAWBW+U/f6r\n' + 'fKfv9VvlP3+q3yn7/Vb5T9/qt8p+/wBVvlP3+q3yn7/VTyxF4kjPFCsgI1VXNFLHZpQqqYCwK3yn\n' + '7/Vb5T9/qt8p+/1W+U/f6ppDhcfxdzGv+oLJh6QsmHpCyYekLJh6QsmHpCyYekLJh6QsmHpCyYek\n' + 'LJh6QsmHpCyYekLJh6QsmHpCyYekLJh6QsmHpCyYekLJh6QsmHpCyYekLJh6QsmHpCyYekLJh6Qs\n' + 'mHpCyYekLJh6QsmHpCyYekLJh6QsmHpCyYekLJh6QsmHpCyYekLJh6QsmHpCyYekLJh6QsmHpCyY\n' + 'ekLJh6QsmHpCsAP9qyQBxQN/uy5rdfCtK4xnjofVRPEeY496z5WkYxwKlOGMlGZzcAaNUJp3OLMP\n' + 'EJs7nw4mjimTPzMD1vEpYZA3gnTu+ENHEqGUyXB1Ce+YVQARlkLy2MaKGXNZdPmfmYGBTOecBtxu\n' + 'mTPzMDx+q3iTDmYfh/8AazvmW5WuhVXhLrcfCMUBySx6ZTyGJ7XalFs02FrhaymaXREBZT8UfDRM\n' + 'Y4VDnclkSiG1ueijgcJb4bCycJYqcsI80+EuwvtfgoGYQfhspWyZ7XtF1hlhkcWi4Kp4zGzjqVMx\n' + '7ncWYghDLhZfkU6Nzp78rWWCoEWTbzU0DixoZy4J0Ds4W0/x4ZNNCXXt/tu92EIF17FB7XHgsxne\n' + 'g4FAgi4WJqLmhYsWixste6Dg7RCQXIKL2t1KuCsY70HNdohIw80XBuqxttdY22usxnei5o1Vxa6b\n' + 'I1zA5Y24bp0gtcLG211jaQbFF7Rqi9oWK77K/FB7Sg9pVwg9pNkHtJt4AfpoiCbhncr4iLINOU0f\n' + '0UtwbjnwTbaDkixxcQrOLQ79UwC5KwuympgFyVY4H++SN+IRDrC3Pgnt4u4ch+6kaS7h3H9kXAll\n' + 'vfAp+oKF7hxHerEuv+v7Jo+NyYC0AnuCYA1qAOBn6f4VuOL9UfiNwOakaS4+XqpAST/QoHA7itD3\n' + 'KMG4/onC7jw5LW414Li6414K+Itt74JjeABJ4e+5N1ACBv4Dw3df7nNj79oaL9jEL22kgeGv+t5L\n' + '4y0kFNdjdw0R+GRzv0/yvibY3T74gAsTzeyNwXG6cXCw71eS3u6N3YePP9imE3I8M2F7q2EcFG3A\n' + '2ywjFdCMBWBN1gF0Wg3RaCsAQY0LCP8AzNf/xAA0EQACAQMCBAUBBgYDAAAAAAABAgADERITURAg\n' + 'ITEEIiNBYDAyM0JQUmEUQHBxgfCgsMH/2gAIAQIBAT8B/wCkfAvMEpi7z+It2E1wftCNSVhdPkFI\n' + 'YKXMJLG54o5RryrT63X6S0HPeDww3n8Ou8Ph29oQR35lRn7Q0KkNx8HAJNoStAWHeNUZxY8orOot\n' + 'A61ejRlKtbksbX4Ihc2ESmqcrKGHWVKRTkSmzyo+HlWB3HvCNdL+8ZSh6/BvDjzxjdvoMq1uoMII\n' + 'NuFNc2tLo505icsYiBFtzkAyomDca5K2UcbkRSKyWPeEWNvgtJsXlVCrfQp3zFpX+84fc0/3MBIN\n' + '43mAqLFYML/QrrknEVEdbPMfD7zHw+8x8PvF0ENwYzZNf4MtYgWMyobTLw+0y8PtMvD7TLw+0y8P\n' + 'tMvD7TVpp9kQkk3lFLnIyo+bX4UXxbrF9J8fY8+a5Ywi/wAXUFjaVWCjAci+rTt7iUnyXryu2C3m\n' + 'k2OXvEYOt4e/xZBppmZ35FYo143lIqCXuOT717+wmsdS/tD6TXHY/FqSZtKgFVbrwppm0ISoMR7Q\n' + '3EALG0GCjTMpko2B41W/CO8qkIuA4UyKiYGEWNvhuLH25+8f0qeI7ym+DSpSubrHOkmIgJU3EcCq\n' + 'uSxRopke8JJN596mQ7iI+a3jMFF4pxBqNCSTfgCQbiVQHXMcqqWNhLUaffrMqDdxKlPDqO3wRECL\n' + 'k0Nd7zpXX94VZe/LSUKMzGYsb8EqlITc8Kbmmbx3Lm54U3wafdPf2Mb1Xx9p4gHptwNAhL+/CgDa\n' + '57SomDcUQubCeSiDY9eNN1wxaNRGN0PwKgB1aNUZ+/AMV7RDrJi0ZSpseKJm1pWcfZHt9KkQ64GN\n' + '6NPH3MpP+FotMUiWMFY53jUQ7XHaVnv5RB61O3vxp9KJI5aT4N1lWmFGQ7fAab4GEeHPvMfD7zHw\n' + '+8GgDe8qNm1+P3NP9z9MEg3hYsbngzswseC1GVbcEYo15WUfbHClUwPXtDTpHs00k/VNJP1TST9U\n' + '0k/VKjKECL8Iopc5GVHza/8AJ0WB8hjKUa3w5QWNpVOC4D+Vb1aeXv8ACKVLMXM7Hlp2ppmYSSb8\n' + 'tKnn3jDFrclKnn3jDFrclKnn3jDFrctN8GlZMWvy0qeZ6xlxa3wF20rKJXWzX5KSZtKr5N05mOlT\n' + 'AlYXAccjHSpgSsLgOORjpUwJWFwHHNTOomBhBBtyE6VIAd5WGQDj4BQW7Xjtk14PPStx7xvSp4+/\n' + 'NSXJ5VbJ5S86FONJcnlVsnlLzoU40lyeVWyeUvOhTmBKm8qgOuY40lyeVWyeUvMhQ/AG9Ojbfghx\n' + 'aVVxfhRUAZmMxZr8y+nRvvwU49ZXWzX4L6dG+/BTj1ldbNfgvp0b78FOPWV1s1+ai9jYyomDW4L6\n' + 'dG+/BTj1H+/7/wCSutmv+fC15WXMZiWJiBnNhK7DoIil2tKzD7I56g1UusAJ7RcmNhKpAQLwqDVS\n' + '6wAntFyY2EqkBAvCoNVLrACe0XJjYSqQEC849anb3HBxqpdYATFyJsJVsqBfz+nUKGBVIOPvHcUx\n' + 'ivAejTv7n6COUNxKYRjmsJFEWHfijlDcSmEY5rCRRFh34o5Q3EphGOawkURYd/oIxRrysv4xEcob\n' + 'iJgxzEJWgth3/PFRn7TRqbTRqbTRqbTRqbSmjqpmjU2lOi2XmlRKrte00am00am00am00am00am0\n' + '0am00am00am0oo6t1mjV2mjU2mjU2mjU2lFHVus0au00am00am00am0oo6t1mjV2mjU2mjU2mjU2\n' + 'mjU2mjU2mjU2mjU2mjU2lNHxxYQ0Kl5RR1brNGqfaaNTaaNTaaNTaaNTaEEH83BI7TN95m+8zfeZ\n' + 'vvM33mb7zN95m+8zfeZvvM33mb7zN95m+8zfeZvvM33mb7zN95m+8zfeZvvM33mb7zN95m+8zfeZ\n' + 'vvM33mb7zN95m+8zfeZvvM33mb7zN95m+8zfeZvvM33mb7zN95m+/wDTgAn4rVAb+4jrliJpqb4n\n' + 'tE6sJpg5XPaFKYF79IaYV7ExkGN1mkl8b9YKY6kx1x7RQmlAihbtHXA2iouORiADIXjIuN1mmt8b\n' + '9Zh5bw0rPb4i9T1LiNVXMES6JcgxCAwMzWzRmBpgTUTO8aoMLXvBg9TK8VwLi9pUa/veIV0ypl0d\n' + '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\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAACsATAAAAQBEgAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGkAAwAAicABoAMBwAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANgAAC8fggAAVAABmgAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAgAAC2ZPgAABgH/AIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL//APz3B2AABZQAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCAOAAATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAABcAEGABoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBjwsBkOAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPQABJC4MJG0DgAGMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAJ3QABGHgeEPJRMBrBiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwKgFwAAAAmrjWRgAGAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAJP9wGQAAAAmCMCgZ/3QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAoAAAAAAAAA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKwAAAAAAAABEAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAALAAJwAMABgAMAABwAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG\n' + 'wBwAANABoANAAAUANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6wBQAAoIFBAoIABUAXQAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAYSEwAAQCCAQQCAAKRQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI5Ka\n' + 'AADU8anjU8AAA70+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwY6AABhYMLBhYAAATn0AAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAABCSSUySSSVCSoSVCSSSWVCSeAAAAAAAAAAAAAAAAAAAAAAAAAAAW222222\n' + '222222222222222wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAALQKAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHnR\n' + '0SJT46L6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqU+b4i8k3wAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWPM2FmILGYL4UGSyU4wAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAABNeltRa6bIOUJ9NZD25mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAARAwAg\n' + 'OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AE3BlwAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAADyVdgeEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n' + '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\n' + '7RQpFsX5Hebyd5vJ3m8nebyd5vJ3m8nebyd5vJ3hFhn0gaAr7kdooUiir8ibyd5vJ3m8nebyd4gG\n' + '5/b3dSa7qzXdWa7qzXdWa7qzXdWa7qzXdWa7qzXdWa7qzXdWa7qzXdWa7qzXdWa7qzXdWa7qzXdW\n' + 'a7qzXdWa7qzXdWa7qzXdWa7qzXdWa7qzXdWa7qzXdWa7qzXdWa7qzXdWa7qzXdWa7qzXdWa7qzXd\n' + 'Wa7qzXdWKrV/6ppwBWgREaP8YihbyqbQsV9T9RKfMIjFR+XpAirTGFQuPzBFarTGYUhesHVNK0xl\n' + 'Ar8EfUYDTVhsVUbRTW/pAjUrakfNRVa0eR9yjFRS8orVxpjN8E98NEgi3Cla+UQA9aBA2cIYtFwC\n' + 'nOIzJjQ63cOsC9ysq42VBpZjHiq8ogjE5U0imeKN4jC1pSKQpXGFDJ0ZTloFCYdrZ5jFMYVKGrOe\n' + '2KVfgUziRa4+9aygFzU9G/lkGk/9cEjKwiqkRwpG8IiqMxkg1KZxxOiNWlILhFBFyGKCIhWNqmOM\n' + 'GxIgKksEMNTGY9KTGpSFsSqtM48vpLKmMUhMoihSUBUvCyIWRMKW40+5iwEboiOFLwSekTqSJlU8\n' + 'gHI0YIijUTl72gJS31vGoV5/UaEyY9z3wmJVnjABzcH0P1TpBHA4UOXN/MTQED0/1jzmtuWUTQED\n' + '0/1gL1qfcDA39W2PKvvCork1N9INEuNX6JjHmfmsEK5fkliYOkRAvLPkWru0qVDiH5tAQ9YwAHE3\n' + '6UxIlViMlrbrMQsDDDHWvOVFFyYTE2CEFeSJh5F/2UHmat3D1yvGFDn+GUKTjXtKYGzXnU9c5ZXD\n' + 'EwGvvAK3PXWJQBR15+8oRXqN/aJRp5DEQr/BpcVtFKeOAUaZeWvz/EoCTBCvubZh7ev1h916Qpzx\n' + 'fxKUwUpX4hKyWpAqDTG9648vSUBjPtGVYYShcq01pWAYhl7XIRBhXyzVgyiqxZj8GQAdbwQJzgBS\n' + 'BU0g1WAWMIpXXD8wIDl+f/Zr/8QALhABAQACAgIBBAEDAwQDAAAAAREhMQBBUWFxECBggZEwUKGx\n' + 'wdFAcOHxoLDw/9oACAEBAAE/EP8A6R9uHJARlXiaY10PNRz6BnOMgNNFHp7yN+ccFRNVPVU18rlF\n' + 'iASphHJfEaQygiUaP48aUFVAPK8IAMqQKgvlE7XscAwCAyu07Tle36sHo4zPD8tJ2ewSIMwQKGQp\n' + 'pTQVwKm0AHkTf9CZMBweVcBzCrrEF/RfkcbYHA3/AIcG3yEP8q/6cUM9MXzA/guPXbIqeE2vTn7j\n' + 'DZSH3hKnuTy8FHWjj91IPkOSuYcHyJv8HxUFWsDQdroO1nGolbzL0aR3SOBsLp0mp1LjAcbDz9rd\n' + 'LAy9g0L38vFRuuVLMggOpCnivEDSxSpsX2InuXv7AVFJqJkGmz+Tz9GJKtE9E8eXQf5ZLQbC6X/W\n' + 'fqGPt2nRVg+RgemnMzYDcZu2flZPKZ+y+1bpcbNFxl60PHK9FYpk7FFOAqNIgYWCPoD+jyXmYSlk\n' + 'GFpFLl0HHdomvDJk+dPS/gzvRTdmT/8ALHBRYUzAVe1q+37xaBRgiI/IvFCkHWRQWgHIXLd80kOl\n' + 'Qo/RLRFTYP6CK9LgghNRQr1r+Bzomcu0ZAyTwTDzjlKQddfHy7XtXqB9wmuKQThOSo90xhkPAifK\n' + 'XD9bfuhTaIdWx4IO+ABAgfQIFCYSOzI8H74QiwbBxFBNGMcbw6xEHpOkcJ5PwWZukM10eVZPacnz\n' + 'W0QATsSXxR4v3hQ7/UmR71e5zQBH5TXr/c4AUgBleuKWuaTuf7v+EvHxNaYUTHj09cupHCRtL2oP\n' + 'gjmvKWQaGDsN6SJ6f6E11ScGT82j5/WQn4gSsjEFURBZrZMP3P1Ro1P9QMgRy3mMyuY7f8/VR4FK\n' + 'H4Msp+mdnILduD4qvJ9zTTPlX/P3mjRo0aNBLma1nwD4Vl1zQzMYCHz88pMh3009uj1XjjmkecjK\n' + '+DT0H0CnW0lyEzcX2IbeK0EygS4H7PWuYffKH+/H+6nniVRe1AD/ACc1bKh0l/FqZwM2tB7VA9vL\n' + '2wupsUNAp6TmP2PVKusgZr1fBDg5G7QqKHson+4+1BK4W5l8uA9pxsTHbcANsKwZTFdcwQKqZH7O\n' + 'mdicnZgTVCfixrS3aaH/ACn3dF4H8b8AQPsAmYSVLI+xj71p47q7trKHuGnl4YcxWRtWiPwn1BXL\n' + 'gDKvJ2BCqEDscx7I4ccG8Qh5VevxwReHfQySfIWCPcFn4tFrlHlU0+A49vTh0DIxZfAVeA8Z+gxW\n' + '0OrbPJV+Dacpig5SqqwBYHthmHDqrRtJxd7ENB0eVYBtUOEFhLs6mMRLcMNICvjM9CBfuJ7L7+ra\n' + 'LskACF3kM7R7eIJvMcbR6OD2ls+jexNS8FfATfRW04Hw1+0d+E0nSfhsAwxP3xVcqFZeB5H7kblH\n' + 'gyq/APBuBhYyjPV+AZOXeIs6NP8AAnw7DhM+RVH/AIOAmiOcrtAr5VT2ByvRoQM7aG1sD0GI9Jxi\n' + 'Dq3Zh9JhP8CvNvR5qMQ6ex7zka3hzphiJ3c3zXgjU7u4K9VVdk0cN8bGmR+zCPseT4g0wdr6FX0c\n' + 'bK0L0585pZpMxDnT/MwIfL5e1+gtnG7j2eEYj0g8Zvfia5h6OZ0Bt+2ep6FRou1/5wC8ZSTMcRc2\n' + 'h1RQnTx8O0LewM36D43yjoXPADEMiOFZrb+Brf4BCZVXAe+VFIqkXAzArNkrYir7LHe0ED0398Ck\n' + 'TGSsYDVhYS2KYWoMVF/yfsH23ivLGk/UPgDdTkCZ6Gdi+1X9/RZFBJH2qQdZQYjiEyzpw/1+drv6\n' + 'F9tYnFxSgZKWD0cUrUb8gVgaC4Dtq8P9B0CbPQYfkejgaERsLJ3LsexcuBxFZsc4PnD9BxXELeZp\n' + 'vBcjQHOR6w14rMCKqugO+Y1JmDUqwb0IIrhOCJRo8g4oatMEK0B8M+hu2lsJodAw+U6+rkmomNou\n' + 'iZVwHuCqS2FGiqxaIAZPBKzmBEADQGPpXwwUIQCgSJ0Gt8c8IGMYCJicBRdzL+BK7rdggU+QtHrg\n' + '5CuHALV5QYQwYwfQAHqoASnhi/zxCMBobEyhEDsfBGYRMQUUdIEesYU+ooUVSg/p7fALyJTEZZ+h\n' + 'cfh5P9JpGommK+DE+AtvDJgxQ8oGFvm9hOX9MDyLQ7QwPR1ECQsVEFpfhb4h4JjEZhAezEE6BZmU\n' + 'mrQU8T9OHpDqo5EbDMrut/qDFHACk5smiey+4GnhrUVgEoj2fQjgS7AqZ3UE713wAIED7HtMZtWL\n' + 'MFI/I4NPSKESQrsqjBRj8Bew21CMyyKGTIg5kZtLEUO3/LQfqaNQpGSA8AwuYvjl1bkUpBehYOKF\n' + 'hr6KBVgcdFadsZ/mQ9zheHxBAYDx/SZ2FRiGcmR9mR4Bpa1JVqqqr7f9uIJEo8tJ8uw0AkNzIMHg\n' + '+jTOhjvGNPkoA0x9JmGcFRyPw78infErghaTEveRHtEwfQpVUQNG+wQV0+KofZKnDvNPtT0c/wDZ\n' + '8v8A2fL/ANnyWgz0rN4ohGvS1WQAXLlhi/g62AHs9U8Lw/bEOFxgY2Bc+CA9F7f+jF3Aos8DO5fZ\n' + '4OEJmUtSwvsae96fw6vLE76Au1YB5TlfmQYSr0DH3W8/9IxI5tEIidiM4SwR7JY1fD/kIfhA6AGC\n' + 'GAQSIFn/AFc1mjMMKPkfts/HWDseZY8ydDzSFI4CB9rqXjtkUEaqA+uA1dsOpPdB9n2OpeO2RQRq\n' + 'oD64DV2w6k90H2fY6l47ZFBGqgPrgNXbDqT3QfZ9uYY8BrlvgE+Y9cPoQxpKIObj5Cuz7U4EUQ2Q\n' + 'EaqD9+OTZFhfV8gE/X4AdTSoEqvwHECAMyjP5UjYjhGJE8GsP0egD7BZSdxIzHgN+Ud8RtZZwtov\n' + 'Za+zcPtUCrA46OptQWX5p0vpyAQvw6T6sPNv1UCrA46OptQWX5p0vpyAQvw6T6sPNv1UCrA46Opt\n' + 'QWX5p0vpyAQvw6T6sPNv3LxaVi2vxLeiXKc7f5mBT4fJ0n2ZKLlaih9qD08Zr9XlkfTTPZ+AN2jb\n' + 'MUw+T7BcBZA6z/5Sf1DgWX9EGL3UyOxUwn1k9IMIqnoA5BJeFFkpq5+RGT7vJoVkQ/BN3mcxATJC\n' + 'CNe/2A8FgLvKhN7UA6o7HhszuUQET9P08mhWRD8E3eZzEBMkII17/YDwWAu8qE3tQDqjseGzO5RA\n' + 'RP0/TyaFZEPwTd5nMQEyQgjXv9gPBYC7yoTe1AOqOx4bM7lEBE/T9tEK1ZDpPCMR6Q5gYYC10V0c\n' + 'DqG36gc4DcgoH7F8zzybhMxkEp4gE8jywiXgdp81pqnseLuSLBBE9Ij/AH96MCpUlf3I+hxKDQ0w\n' + 'YUpS9XkLwUFpl7V90p8cwvS7tMi80p5Xx9KAaNfIMaIPiBsXkdJRSL5X2tf8dfcZqkdqQl+bD6Bx\n' + 'gQVaAzSVXevo4ENRe2teJI/SZqkdqQl+bD6BxgQVaAzSVXevo4ENRe2teJI/SZqkdqQl+bD6BxgQ\n' + 'VaAzSVXevo4ENRe2teJI/dy7uCNUO6Y/CG+fBoOQVDrQ+Z0/R7PxygQH5fgy+hMiBCBl1UrK6DRy\n' + 'tqetNc/hPQD+/AWZ43J+hR/XAaor5ACushWYbMO9PMDl4VqyYPPEoFGSiAuClXR75waAVbAIEdAg\n' + 'uRnUWNVKsUGf7K+AXrmUzCcoseNJ4Ebn3JOwAsfM4Dtgk5YVdIq9YeQWVLYGgoFY49cO8ESYEIAl\n' + 'eD23RM5n2qoFHwFdKQ7iTsALHzOA7YJOWFXSKvWHkFlS2BoKBWOPXDvBEmBCAJXg9t0TOZ9qqBR8\n' + 'BXSkO4k7ACx8zgO2CTlhV0ir1h5BZUtgaCgVjj1w7wRJgQgCV4PbdEzmfaqgUfAV0pDufc55AHYy\n' + 'Tq2PQNPBNalUCYSb4UldFvQS9yrtHTIV2rgmgUCsYcaoDjJQACV0nde4plu7U1Rp5nQKQ7D+/Wog\n' + 'lk94srf42djQ8Xo+HTDHuC5FUQZ0CW3Jr028uOABgCAGuOeQR2Mt7sj2Dbw0IgGANAffBQX/AIED\n' + 'yaT9JTdXpioXwZ3CuoniIbMH/Ovb0RQIP50WAAwAdfSCgv8AwIHk0n6Sm6vTFQvgzuFdRPEQ2YP+\n' + 'de3oigQfzosABgA6+kFBf+BA8mk/SU3V6YqF8GdwrqJ4iGzB/wA69vRFAg/nRYADAB198aqVKgM/\n' + '2x8infA22CeURHmpPKJgXkFBf+BA8mk/SXUNKuRR8FBzCeATtsQMXIPdnEB4IaBEADQf3u6PT0Yt\n' + 'JJG/P2pJJJPHhj6qAUwwLtxnJoYGAMfFfzBvzAlkYTVXEOBUnUbGQd9D4vb/AEUkkkkkkklfUBmZ\n' + 'ASVZcwxjhtfnJEACQDE+xJJJX1AZmQElWXMMY4bX5yRAAkAxPsSSSV9QGZkBJVlzDGOG1+ckQAJA\n' + 'MT+ikkkkkkklM38cZhInYrVAa40yJ8xlKDHFGcV9QGZkBJVlzDGOBZKWiIAGIH2pJJJEuCIIKUYx\n' + 'PhL/AHcUapA9yyGWH8f22VKlSpUqVKlSpUqVKlSpUqVKlSpUqVKlSpUqVKlSpUqVKlSpUqVKEqc2\n' + 'EQAMAHX/AGocHRlBL+uIIkgGvD9G6UKHbVcB74FkBJAoEwiNE/pyki+PiHb6/FckqxsjLegb/U1m\n' + 'tBExaw6qC9W8PBb5GlcNNzUXqcJz89ATDsdcOt4lkgRD1NQFnGKXAUxA2BJkM5muKuEVBqLNEjq5\n' + 'D3xMlbwJijISfw+FEscsAgRI9gyZlmRQ0jo1UZagPj3zP7/htfDMceuKmvvEYTHUxwiC5TAKGd4S\n' + 'rKOsK3iR6yZOzImsPnmjfvPENK5M35m3ZEYoxgrgWG9D6483xIFLS0znG2NVQcxEgqdBf/KcZLY4\n' + 'BJQ12+HD92Flpq7yz7fDnri8F7lzPxCLqoKKIFilJeuF4AyZQ0oBGgypeIVwQioZAKXNlK4zjHn+\n' + 'lAVAZ7Xjuj1gDmWJLR+uZ2/LwxDEVsNcXPBZKbAGnFvcoDBRxVpbqCdgJW3gSESeiMk0BjedZrX4\n' + 'xhmIyKo+AmaHXDHiGnUQ4DpzrmGQxigtZM9fwvBUnLzKOxKtNE73b3PLQD3AZMWy74SSwGDLNU1E\n' + 'wXzum27XbSzVjbwYDip2WzE3J5Fk98lrujoJdkUm5mPbF2HrligYBjLlOHJixRyTNoTg6zo/GVXJ\n' + 'k3VW6KupPXAAAAMB1/22wTnWdGBivhXAVTmY8qSKMyShrdBC1VDdwEFdEpmjJxa6F4vG6V8Wnc4E\n' + 'xIqBVIggxj64Zhy2C6Tye+TEcNmdH5Ink5P/AKqEBT20htp5OX0MIxPEc9EmvbjpNd4mq6VQjNQl\n' + 'Tikh5gyFBysjHzye9ZEqieSgCwZOuLAElsVjmGjmDD44oQANzYH8jbzYfXRMLWYgEJbW4Ok5aNaF\n' + '2owUZviBrbwEr0aKUxvhe9pk7QCuPBxtHzHrAVwODOHw87PkMBF6QYN4m+JA2g2gHCpBFQAI6TlH\n' + 'dAVECgpRSuil3yACgJKZEyp8cCMz2EZBQvMIZ65ZxU3MuY7yxhbiXjwL4lhQGJEY9J54E3cxKAAG\n' + 'kS+TridvpUgolHCtMNR5MOujUyyVG5WC5eFKY/qmJXc8M742xssgaBihv8c2eOjApZ0SEpucOA7r\n' + '3PF1fDDnioqIFALgguDhhjHheChuwnP0X9cc6wSbA0oaCpGycsAAqyyjSI0FSPj8AxxDEtdolwZg\n' + 'VLBYcL4wOnUBkLUgKgyhS0T0doCulNElC8MKS7glQpMquuDwoSim+2ZJzUFGYJOeuZKp5AkE6U06\n' + 'PNk3fSmS8lVaJaFDiS46hyk9pFzoLh4io2vLMpB4piTIcSXHUOUntIudBcPE03hVKSJsiJdTgQN1\n' + 'KbJpKhwWsEF0FZDBC3OZmC9cW1gZroiNBDQOk4VYJINjoHDPhGnkKPx4AZgr8U28WUZ5AVahZYdI\n' + 'UteJvBMI0isjlKxR+ZYVIUIBBaaTguDEkCCD4LOMZKhLI7248FWOQOOiBSSzSGShEITjcQ0sehgV\n' + 'SMWMFIJNHXIbgiosC64k3ZSgrgDkCgPDgeKl9kQUIRUXgIvXAnxFwjpmVob3yjeAhQpZAwHdyxjC\n' + 'cifSFiiTtIy8MBK7uggCEwwhTHHHiPHwWMUxbk8nMiG+6BWC7MAVToDqtyTCIzsgGGURXGx0QBhG\n' + 'p372UwsjDSywa2hpbN5RCE+FUYAHArKFHBwxICMUyAmv2Z/A9sKQUKPkTToUJWt6nMPYzbg++GVC\n' + 'vAc/lCdmrPF4CSiUfo75FzOlPJoqsAOW/U2tFLDBIa4KLGX61FRVZKMGM2sMTaD+NclVP7hFsuQu\n' + 'DApWXxkCALe8k/PwcbIaQDG80NPa3yIa/wAtYA2DtwqsGUCaDBEQivccLpiAqI5vqeSTUkJgip/6\n' + 'PFTh5DGfm8rzAHXgADlNQHNYwFYNSQzeJUCQCq8Me0EYqcAlKjDB701d3S0gGIxljOr+M988mnQm\n' + 't980sJpEiQZV2f7cRIEpQtGLQL4OS5RnWNIREprbnibC6tF7EgqwUIM441w5SMcd45FR50wAoZUA\n' + 'VJmbwaRimaR6wsnIrbXjKhN4URo3I8SRWaATJxRNdBlB5S1MR3T4aaMQIQqrTWIRUQxE0ijhf/ma\n' + '/wD/2Q==';
      var arrayBuffer = Uint8Array.from(window.atob(dataBase64), function (c) {
        return c.charCodeAt(0);
      });
      var file = new File([arrayBuffer], 'dummy.pdf', {
        type: 'application/pdf'
      });
      setAvatar(file);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (flash.success) {
      setEditing(false);
      setCreateProduct(false);
      setDataSelected(false);

      if (successMessageCount === 0) {
        // toast(flash.success);
        setSuccessMessageCount(1);
      }
    }
  }, [flash]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (data) {
      setEditing(true);
      setProductData(_objectSpread({}, data, {
        price: data.price / 100
      }));
    }
  }, [data]);

  var cancelProduct = function cancelProduct() {
    var hostname = window.location.hostname;
    var url = window.location.href;

    var _url$split = url.split(hostname),
        _url$split2 = _slicedToArray(_url$split, 2),
        port = _url$split2[0],
        path = _url$split2[1];

    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].visit(path);
  };

  var refreshPage = function refreshPage() {
    var hostname = window.location.hostname;
    var url = window.location.href;

    var _url$split3 = url.split(hostname),
        _url$split4 = _slicedToArray(_url$split3, 2),
        port = _url$split4[0],
        path = _url$split4[1];

    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].visit(path);
  };

  var getFormData = function getFormData() {
    var formData = new FormData();
    console.log('avatar =>', avatar);
    formData.append('file', avatar, avatar.name);
    formData.set('name', productData.name || '');
    formData.set('description', productData.description || '');
    formData.set('ingredients', productData.ingredients || '');
    formData.set('price', productData.price || '');
    formData.set('category_id', productData.category_id || '');
    formData.set('available', productData.available);
    formData.set('favorite', productData.favorite);
    formData.set('customizable', productData.customizable); // Display the key/value pairs
    // for (var pair of formData.entries()) {
    // console.log('[getFormData] =>' + pair[0]+ ', ' + pair[1]);
    // }

    return formData;
  };

  var createProduct = function createProduct() {
    if (editing) {
      if (avatar) {
        var updateFormData = getFormData();
        /*
                const updateFormData = new FormData();
                console.log('before updateFormData =>', updateFormData);
                updateFormData.append("file", avatar, avatar.name);
                updateFormData.set("name", productData.name || '');
                updateFormData.set("description", productData.description || '');
                updateFormData.set("ingredients", productData.ingredients || '');
                updateFormData.set("price", productData.price || '');
                updateFormData.set("category_id", productData.category_id || '');
                updateFormData.set("available", productData.available);
                updateFormData.set("favorite", productData.favorite);
                  */

        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post("products/".concat(productData.id), updateFormData);
      } else {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].put("products/".concat(productData.id), _objectSpread({}, productData));
      }
    } else {
      var formData = getFormData();
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post('products', formData); // Inertia.post("products", {
      //     ...productData,
      //     // store: storeSelected,
      // });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_filepond__WEBPACK_IMPORTED_MODULE_3__["FilePond"], {
    onupdatefiles: function onupdatefiles(fileItems) {
      // setAvatar(fileItems.map(fileItem => fileItem.file));
      setAvatar(fileItems[0].file);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onChange: onChange,
    value: productData.name,
    id: "name",
    label: "Nombre de producto",
    placeholder: "Nombre",
    error: errors.name
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Textarea__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onChange: onChange,
    value: productData.description,
    id: "description",
    label: "Descripci\xF3n",
    placeholder: "Descripci\xF3n",
    error: errors.description
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onChange: onChange,
    value: productData.ingredients,
    id: "ingredients",
    label: "Ingredientes",
    placeholder: "Ingredientes separados por coma",
    error: errors.ingredients
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onChange: onChange,
    value: productData.price,
    id: "price",
    label: "Precio",
    placeholder: "12.50",
    error: errors.price
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify"
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
    className: 'text-sm m-auto text-red-500 error category'
  }, errors.category_id[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Disponible",
    checked: productData.available,
    setChecked: function setChecked() {
      return setProductData(_objectSpread({}, productData, {
        available: productData.available === 0 ? 1 : 0
      }));
    },
    error: errors.available
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Favorito",
    checked: productData.favorite,
    setChecked: function setChecked() {
      return setProductData(_objectSpread({}, productData, {
        favorite: productData.favorite === 0 ? 1 : 0
      }));
    },
    error: errors.favorite
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"], {
    label: "Personalizable",
    checked: productData.customizable,
    setChecked: function setChecked() {
      return setProductData(_objectSpread({}, productData, {
        customizable: productData.customizable === 0 ? 1 : 0
      }));
    },
    error: errors.customizable
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

/***/ "./resources/js/components/Textarea.jsx":
/*!**********************************************!*\
  !*** ./resources/js/components/Textarea.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Textarea; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function Textarea(_ref) {
  var id = _ref.id,
      label = _ref.label,
      inputValue = _ref.value,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      _ref$onKeyDown = _ref.onKeyDown,
      onKeyDown = _ref$onKeyDown === void 0 ? function () {
    return false;
  } : _ref$onKeyDown,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? [] : _ref$error,
      _ref$extraProps = _ref.extraProps,
      extraProps = _ref$extraProps === void 0 ? {} : _ref$extraProps;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-light text-sm text-gray-600 mt-4 sm:text-center lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: id,
    className: "hover:border-grey-900 italic sm:block"
  }, label || 'Label'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", _extends({
    id: id,
    name: id,
    placeholder: placeholder || '',
    value: inputValue || '',
    onChange: onChange // className="border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 sm:w-7/12 sm:m-auto lg:w-full disabled:bg-brand-grayOpt disabled:cursor-not-allowed"
    ,
    className: "border border-transparent rounded w-full mt-1 bg-white border-gray-400 hover:border-orange-400 hover:shadow-xl focus:border-orange-400 focus:outline-none px-3 py-1 lg:w-full disabled:bg-brand-grayOpt disabled:cursor-not-allowed",
    onKeyDown: onKeyDown,
    rows: "4"
  }, extraProps))), error && error[0] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm m-auto text-red-500 error error-".concat(id)
  }, error[0]));
}

/***/ })

}]);