(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./resources/js/Pages/Order.jsx":
/*!**************************************!*\
  !*** ./resources/js/Pages/Order.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _components_HeaderDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HeaderDescription */ "./resources/js/components/HeaderDescription.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Input */ "./resources/js/components/Input.jsx");
/* harmony import */ var _components_Select_Stores__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Select/Stores */ "./resources/js/components/Select/Stores.jsx");
/* harmony import */ var _components_DateSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/DateSelector */ "./resources/js/components/DateSelector.jsx");
/* harmony import */ var _components_Select_Hour__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Select/Hour */ "./resources/js/components/Select/Hour.jsx");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Map */ "./resources/js/components/Map.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function Order() {
  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])(),
      stores = _usePage.stores,
      errors = _usePage.errors,
      content = _usePage.cart.content; // const { stores } = props;


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      wantInvoice = _useState2[0],
      setWantInvoice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      store = _useState4[0],
      setStore = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      date = _useState6[0],
      setDate = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      hour = _useState8[0],
      setHour = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      employeeName = _useState10[0],
      setEmployeeName = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      showMap = _useState12[0],
      setShowMap = _useState12[1]; // customer info


  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState14 = _slicedToArray(_useState13, 2),
      customer = _useState14[0],
      setCustomer = _useState14[1]; // invoice info


  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState16 = _slicedToArray(_useState15, 2),
      invoice = _useState16[0],
      setInvoice = _useState16[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (Object.keys(content).length) {
      // const orderDetails = Object.keys(content).find((product) => content[product].id === 'orderDetailsId');
      var orderDetails = Object.values(content).find(function (_ref) {
        var id = _ref.id;
        return id === 'orderDetailsId';
      });

      if (orderDetails) {
        var _orderDetails$options = orderDetails.options,
            name = _orderDetails$options.name,
            _date = _orderDetails$options.date,
            email = _orderDetails$options.email,
            _employeeName = _orderDetails$options.employeeName,
            _hour = _orderDetails$options.hour,
            lastname = _orderDetails$options.lastname,
            phone = _orderDetails$options.phone,
            _store = _orderDetails$options.store;
        setStore(_store);
        setDate(moment__WEBPACK_IMPORTED_MODULE_3___default()(_date));
        setHour(_hour);
        setEmployeeName(_employeeName);
        setCustomer({
          name: name,
          lastname: lastname,
          phone: phone,
          email: email
        });
      }
    }
  }, []);

  var wantInvoiceOnChange = function wantInvoiceOnChange() {
    setWantInvoice(!wantInvoice);

    if (!invoice.name) {
      var fullName = customer.name && customer.lastname ? "".concat(customer.name, " ").concat(customer.lastname) : '';
      setInvoice({
        name: fullName,
        phone: customer.phone || '',
        email: customer.email || ''
      });
    }
  };

  var customerInfoOnChange = function customerInfoOnChange(e) {
    setCustomer(_objectSpread({}, customer, _defineProperty({}, e.target.name, e.target.value)));
  };

  var invoiceInfoOnChange = function invoiceInfoOnChange(e) {
    setInvoice(_objectSpread({}, invoice, _defineProperty({}, e.target.name, e.target.value)));
  };

  var onSubmit = function onSubmit() {
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__["Inertia"].post('/pedido/detalles', {
      store: store,
      date: date,
      hour: hour,
      name: customer.name,
      lastname: customer.lastname,
      phone: customer.phone,
      email: customer.email,
      employeeName: employeeName // date y hour en un solo string ej. '28/05/2020 7:30'
      // pickUp,
      // mandar invoice info solo si es 'wantInvoice' true

    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Producto seleccionado"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeaderDescription__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "PEDIDOS",
    description: "Por favor recuerda llenar el formulario para indicarnos en d\xF3nde recogeras tu pedido."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 w-full pb-24 "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-4 lg:w-1/2 lg:float-left lg:content-end"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lg:w-3/4 lg:float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sm:w-7/12 sm:m-auto lg:w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Select_Stores__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setStore: setStore,
    stores: stores,
    storeSelected: store && stores.filter(function (s) {
      return s.id === store;
    })[0]
  }), errors && errors.store && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm text-red-500 error store"
  }, errors.store[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_DateSelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    date: date,
    setDate: setDate,
    store: store && stores.filter(function (s) {
      return s.id === store;
    })[0]
  }), errors && errors.date && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm text-red-500 error date"
  }, errors.date[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Select_Hour__WEBPACK_IMPORTED_MODULE_9__["default"], {
    hour: hour,
    setHour: setHour,
    store: store && stores.filter(function (s) {
      return s.id === store;
    })[0],
    date: date
  }), errors && errors.hour && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm text-red-500 error hour"
  }, errors.hour[0])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(showMap ? '' : 'hidden', " border h-56 mt-4 bg-brand-gray sm:block")
  }, !window.Cypress && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_10__["default"], {
    store: store && stores.filter(function (s) {
      return s.id === store;
    })[0]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return setShowMap(!showMap);
    },
    className: "flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white sm:hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Ver el mapa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    version: "1.1",
    className: "stroke-current fill-current w-6",
    id: "Location_pin",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10,2.009c-2.762,0-5,2.229-5,4.99c0,4.774,5,11,5,11s5-6.227,5-11C15,4.239,12.762,2.009,10,2.009zM10,9.76c-1.492,0-2.7-1.209-2.7-2.7s1.208-2.7,2.7-2.7c1.49,0,2.699,1.209,2.699,2.7S11.49,9.76,10,9.76z"
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-4 mt-8 mb-6 lg:hidden"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "w-100"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-4 lg:w-1/2 lg:float-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sm:w-7/12 sm:m-auto lg:w-3/4 lg:m-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Nombre",
    id: "name",
    placeholder: "Ej. Juan",
    value: customer.name,
    onChange: customerInfoOnChange
  }), errors && errors.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm text-red-500 error name"
  }, errors.name[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Apellido",
    id: "lastname",
    placeholder: "Apellido",
    value: customer.lastname,
    onChange: customerInfoOnChange
  }), errors && errors.lastname && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm text-red-500 error lastname"
  }, errors.lastname[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Tel\xE9fono",
    id: "phone",
    placeholder: "",
    value: customer.phone,
    type: "phone",
    onChange: customerInfoOnChange
  }), errors && errors.phone && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm text-red-500 error phone"
  }, errors.phone[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Correo electr\xF3nico",
    id: "email",
    placeholder: "",
    value: customer.email,
    type: "email",
    onChange: customerInfoOnChange
  }), errors && errors.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm text-red-500 error email"
  }, errors.email[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "\xBFQui\xE9n levant\xF3 el pedido?",
    id: "employee",
    placeholder: "",
    value: employeeName,
    onChange: function onChange(e) {
      return setEmployeeName(e.target.value);
    }
  }), errors && errors.employeeName && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm text-red-500 error email"
  }, errors.employeeName[0])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: onSubmit,
    className: "next flex cursor-pointer justify-center font-bold py-2 px-4 rounded w-1/2 m-auto mt-4 block bg-transparent border border-brand-orange text-brand-orange text-bold hover:bg-brand-orange hover:text-white hover:shadow hover:text-white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Proceder")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Order);

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

/***/ "./resources/js/components/HeaderDescription.js":
/*!******************************************************!*\
  !*** ./resources/js/components/HeaderDescription.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderDescription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function HeaderDescription(props) {
  var title = props.title,
      description = props.description;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "mt-24 w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block text-4xl text-center font-title font-semibold"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block p-2 text-gray-500 text-base text-center max-w-xl m-auto"
  }, description));
}
;

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

/***/ "./resources/js/components/Select/Hour.jsx":
/*!*************************************************!*\
  !*** ./resources/js/components/Select/Hour.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hour; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .shop-option-description {\n    display: block;\n    font-size: 0.8rem;\n    color: #6f6f6f;\n\n    &.selected {\n      color: #fff !important;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var SelectWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var getTimeFromString = function getTimeFromString(date, time) {
  var clone = date.clone().subtract(12, 'h');

  var _time$split = time.split(':'),
      _time$split2 = _slicedToArray(_time$split, 2),
      hours = _time$split2[0],
      minutes = _time$split2[1];

  return clone.add(hours, 'hours').add(minutes, 'minutes');
};

var getHoursFromStore = function getHoursFromStore(store, date, gapTimeInMinutes) {
  if (!store || !date) {
    return false;
  }

  var hourPropertyName = 'delivery_time'; // if(date && date.isoWeekday() === 7 && !date.isSame('Sun Nov 01 2020 12:00:00 GMT-0600')) {

  if (date && date.isoWeekday() === 7) {
    hourPropertyName = 'sunday';
  }

  var _store$hourPropertyNa = store[hourPropertyName].split(' a '),
      _store$hourPropertyNa2 = _slicedToArray(_store$hourPropertyNa, 2),
      openString = _store$hourPropertyNa2[0],
      closeString = _store$hourPropertyNa2[1]; // 7:00 a 21:00


  var open = getTimeFromString(date, openString);
  var close = getTimeFromString(date, closeString);
  var hours = [];

  for (open; open <= close; open.add(gapTimeInMinutes, 'm')) {
    var time = open.format('H:mm');
    hours.push({
      value: time,
      label: time
    });
  }

  return hours;
};

function Hour(props) {
  var hour = props.hour,
      setHour = props.setHour,
      store = props.store,
      date = props.date;
  var gapTimeInMinutes = 30;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectWrapper, {
    className: "font-light text-gray-600 mt-4 lg:text-justify"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "hour",
    className: "sm:text-center lg:text-justify text-sm hover:border-grey-900 italic sm:block"
  }, "Hora"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    options: getHoursFromStore(store, date, gapTimeInMinutes),
    inputId: "hour",
    name: "hour",
    placeholder: "Elige una hora",
    className: "w-full",
    classNamePrefix: "hour-selector",
    onChange: function onChange(hour) {
      return setHour(hour.value);
    },
    isDisabled: !date // defaultValue={defaultValue}
    ,
    defaultValue: {
      label: hour,
      value: hour
    },
    value: {
      label: hour,
      value: hour
    }
  }));
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
    } // defaultMenuIsOpen
    // menuIsOpen
    // inputValue={'Bernal'}  muestra bernal pero la unica opcin

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