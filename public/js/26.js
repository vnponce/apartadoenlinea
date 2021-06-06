(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./resources/js/Pages/Login.jsx":
/*!**************************************!*\
  !*** ./resources/js/Pages/Login.jsx ***!
  \**************************************/
/*! exports provided: triggerEvtInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerEvtInput", function() { return triggerEvtInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Input */ "./resources/js/components/Input.jsx");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function triggerEvtInput(target, value) {
  var nativeInputValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set;
  nativeInputValueSetter.call(target, value);
  var ev2 = new Event('input', {
    bubbles: true
  });
  target.dispatchEvent(ev2);
}

function Login(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__["usePage"])(),
      errors = _usePage.errors;

  var login = function login(e) {
    e.preventDefault();
    _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_4__["Inertia"].post('/login', data);
  };

  var handleInput = function handleInput(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setData(_objectSpread({}, data, _defineProperty({}, name, value)));
  };
  /**
   * @return {boolean}
   */


  function LOGIN_MOCK_DEV_ONLY(evt) {
    var _props$app = props.app,
        env = _props$app.env,
        mock = _props$app.mock;
    var target = evt.currentTarget;

    if (env === 'local') {
      if (mock && mock.username && mock.password && evt.key === 'Tab') {
        evt.preventDefault();

        if (target.id === 'username') {
          triggerEvtInput(target, mock.username);
          document.querySelector('#password').focus();
        } else {
          triggerEvtInput(target, mock.password);
          var form = document.querySelector('#login-form');
          setTimeout(function () {
            return form.dispatchEvent(new Event('submit', {
              bubbles: true
            }));
          }, 600);
        }

        return false;
      }
    }

    return true;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    title: "Log in",
    className: "container-fluid"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "max-w-sm mx-auto mt-24 mb-8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/Logo-Short.svg",
    className: "w-24 mb-8 mx-auto",
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-white shadow px-8 py-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "login-form"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: data.username,
    label: "Usuario",
    id: "username",
    type: "text",
    placeholder: "bernal",
    className: "mb-4" // errors="$page.errors.email"
    ,
    onChange: handleInput,
    autofocus: true,
    onKeyDown: LOGIN_MOCK_DEV_ONLY
  }), errors.email && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm m-auto text-red-500 error hour"
  }, errors.email[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Password",
    value: data.password,
    id: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022",
    type: "password" // errors="$page.errors.email"
    ,
    className: "mb-6",
    onChange: handleInput,
    onKeyDown: LOGIN_MOCK_DEV_ONLY
  }), errors.password && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-sm m-auto text-red-500 error hour"
  }, errors.password[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex justify-end pt-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "button",
    onClick: login
  }, "Log in"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

}]);