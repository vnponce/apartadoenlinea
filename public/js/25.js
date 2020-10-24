(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./resources/js/Pages/Landing.jsx":
/*!****************************************!*\
  !*** ./resources/js/Pages/Landing.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Map */ "./resources/js/components/Map.jsx");
/* harmony import */ var _components_Select_Stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Select/Stores */ "./resources/js/components/Select/Stores.jsx");
/* harmony import */ var _components_Geolocalated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Geolocalated */ "./resources/js/components/Geolocalated.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // import ReactDOM from 'react-dom';





 // import styled from "styled-components";
// const TwoColumns = styled.div `
//     column-count: 2;
// `

function Landing(props) {
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      stores = _usePage.stores;

  var _useRememberedState = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["useRememberedState"])(1),
      _useRememberedState2 = _slicedToArray(_useRememberedState, 2),
      store = _useRememberedState2[0],
      setStore = _useRememberedState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if ('geolocation' in navigator) {
      console.log('Available');
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log('Latitude is :', position.coords.latitude);
        console.log('Longitude is :', position.coords.longitude);
      });
      console.log('navigator?');
    } else {
      console.log('Not Available');
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Pan de muerto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full flex items-center flex-col mt-12 sm:mt-16 px-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "h-56 m-auto w-full object-scale-down align-middle sm:h-full sm:object-cover md:h-64 lg:h-full",
    src: "/breads/Cuernito.png",
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center m-8 flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Peque\xF1a"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "$30.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Mediana"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "$30.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Grande"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "$30.00"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-justify pb-16"
  }, console.log('stores =>', stores), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Geolocalated__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_3__["default"], {
    store: store && stores.filter(function (s) {
      return s.id === store;
    })[0]
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./resources/js/components/Geolocalated.jsx":
/*!**************************************************!*\
  !*** ./resources/js/components/Geolocalated.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-geolocated */ "./node_modules/react-geolocated/dist-modules/index.js");
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_geolocated__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Geolocalated =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Geolocalated, _React$Component);

  function Geolocalated() {
    _classCallCheck(this, Geolocalated);

    return _possibleConstructorReturn(this, _getPrototypeOf(Geolocalated).apply(this, arguments));
  }

  _createClass(Geolocalated, [{
    key: "render",
    value: function render() {
      return !this.props.isGeolocationAvailable ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Your browser does not support Geolocation") : !this.props.isGeolocationEnabled ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Geolocation is not enabled") : this.props.coords ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "latitude"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.props.coords.latitude)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "longitude"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.props.coords.longitude)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "altitude"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.props.coords.altitude)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "heading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.props.coords.heading)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "speed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, this.props.coords.speed)))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Getting the location data\u2026 ");
    }
  }]);

  return Geolocalated;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_geolocated__WEBPACK_IMPORTED_MODULE_1__["geolocated"])({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Geolocalated));

/***/ }),

/***/ "./resources/js/components/Map.jsx":
/*!*****************************************!*\
  !*** ./resources/js/components/Map.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js");


function Map(props) {
  console.log('store map => ', props);
  var _props$store = props.store,
      _props$store$lat = _props$store.lat,
      lat = _props$store$lat === void 0 ? "19.1707806" : _props$store$lat,
      _props$store$lon = _props$store.lon,
      lng = _props$store$lon === void 0 ? "-96.1270615" : _props$store$lon;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__["LoadScript"], {
    id: "script-loader",
    googleMapsApiKey: "AIzaSyBP_-J4zi-joMx0Jb3sGVjf5SGze8_bdGs"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
    id: "example-map",
    mapContainerStyle: {
      height: "225px" // width: "800px"

    },
    zoom: 15,
    center: {
      lat: parseFloat(lat),
      lng: parseFloat(lng) // lat: 19.1707806,
      // lng: -96.1270615,

    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
    onLoad: function onLoad(marker) {
      console.log('marker: ', marker);
    },
    position: {
      lat: parseFloat(lat),
      lng: parseFloat(lng)
    } // draggable
    // onDragEnd={ (a, b, c) => console.log('e onDrag =>', a.latLng.lat(), a.latLng.lng())}

  })));
}

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
  console.log('Stores storeSelected => ', storeSelected);
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
    } // inputValue={'Bernal'}  muestra bernal pero la unica opcin

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