(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Map */ "./resources/js/components/Map.jsx");
/* harmony import */ var _components_Select_Stores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Select/Stores */ "./resources/js/components/Select/Stores.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: 2rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    // transform: rotate(180deg);\n    transform: scaleX(-1);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    & > div {\n        max-width: 1024px;\n    }\n    img {\n        max-width: 1024px;\n    }\n    label[for=\"store\"] {\n        color: #feebc8;\n\n    }\n    @keyframes do-levitation {\n      0% {\n        transform: translate(0, 0);\n      }\n      100% {\n        transform: translate(0px, 5px);\n      }\n    }\n    @keyframes do-levitation-reverted {\n      0% {\n        transform: translate(0px, 5px);\n      }\n      100% {\n        transform: translate(0px, 0px);\n      }\n    }\n\n    .levitate {\n      animation: do-levitation 3s alternate ease-in-out infinite;\n    }\n    .levitate-delayed {\n      animation: do-levitation-reverted 3.3s alternate ease-in-out infinite;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // import ReactDOM from 'react-dom';





 // import Geolocalated from "../components/Geolocalated";

var MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var RotateWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());

function Landing(props) {
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      stores = _usePage.stores;

  var _useRememberedState = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["useRememberedState"])(1),
      _useRememberedState2 = _slicedToArray(_useRememberedState, 2),
      store = _useRememberedState2[0],
      setStore = _useRememberedState2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(store && stores.filter(function (s) {
    return s.id === store;
  })[0]),
      _useState2 = _slicedToArray(_useState, 2),
      storeObject = _useState2[0],
      setStoreObject = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setStoreObject(store && stores.filter(function (s) {
      return s.id === store;
    })[0]);
  }, [store]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Pan de muerto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainWrapper, {
    className: "h-full bg-indigo-900 w-full flex items-center flex-col px-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-20 text-4xl text-center md:text-6xl",
    style: {
      fontFamily: 'Rye'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RotateWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "levitate h-10 md:h-16",
    src: "/images/decorator-pan-muerto.svg",
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-orange-200"
  }, "PAN DE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "levitate-delayed h-10 md:h-16",
    src: "/images/decorator-pan-muerto.svg",
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-orange-200 -mt-4 md:-mt-8"
  }, "MUERTO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-4/5 text-orange-200 text-center mt-6 flex justify-around md:text-3xl"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-brand-orange"
  }, "Peque\xF1o"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "$25.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-brand-orange"
  }, "Mediano"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "$45.00")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-brand-orange"
  }, "Grande"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "$75.00"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "drop-shadow h-56 -mt-20 md:m-auto w-full object-scale-down align-middle sm:h-full sm:object-cover sm:h-64 md:-mt-32 lg:h-full",
    src: "/images/pan-de-muerto.png",
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-brand-orange mt-8 font-bold italic text-lg  md:text-3xl"
  }, "Encuentra tu sucursal m\xE1s cercana"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-justify pb-20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    className: "md:w-3/5 m-auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Select_Stores__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setStore: setStore,
    stores: stores,
    storeSelected: store && stores.filter(function (s) {
      return s.id === store;
    })[0]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_4__["default"], {
    store: storeObject
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    className: "flex justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "mb-5 pb-3 inline-block w-full text-center float-right text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0 sm:w-3/5",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://maps.google.com/?q=".concat(storeObject.lat, ",").concat(storeObject.lon, "&z=8")
  }, "Ir a mapa")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Landing);

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
  var storesToSelect = transformStoreList(stores);

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km

    var dLat = deg2rad(lat2 - lat1); // deg2rad below

    var dLon = deg2rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km

    return d;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var _position$coords = position.coords,
            latitude = _position$coords.latitude,
            longitude = _position$coords.longitude;
        var closestDistance = Number.MAX_VALUE;
        var closestStoreId = storeSelected;
        stores.forEach(function (_ref) {
          var lat = _ref.lat,
              lon = _ref.lon,
              id = _ref.id;
          var result = getDistanceFromLatLonInKm(latitude, longitude, lat, lon); // console.log('result =>', result);

          if (result < closestDistance) {
            // eslint-disable-next-line no-console
            closestDistance = result;
            closestStoreId = id;
          }
        }); // console.log('closestDistance =>', closestDistance);

        console.log('closestStoreId =>', closestStoreId);
        setStore(closestStoreId);
      });
    } else {
      console.log('Not Available');
    }
  }, []);
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
    },
    value: {
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

/***/ })

}]);