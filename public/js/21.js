(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/dom-confetti/lib/main.js":
/*!***********************************************!*\
  !*** ./node_modules/dom-confetti/lib/main.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confetti = confetti;
var defaultColors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];

function createElements(root, elementCount, colors, width, height) {
  return Array.from({ length: elementCount }).map(function (_, index) {
    var element = document.createElement("div");
    var color = colors[index % colors.length];
    element.style["background-color"] = color; // eslint-disable-line space-infix-ops
    element.style.width = width;
    element.style.height = height;
    element.style.position = "absolute";
    element.style.willChange = "transform, opacity";
    element.style.visibility = "hidden";
    root.appendChild(element);
    return element;
  });
}

function randomPhysics(angle, spread, startVelocity, random) {
  var radAngle = angle * (Math.PI / 180);
  var radSpread = spread * (Math.PI / 180);
  return {
    x: 0,
    y: 0,
    wobble: random() * 10,
    wobbleSpeed: 0.1 + random() * 0.1,
    velocity: startVelocity * 0.5 + random() * startVelocity,
    angle2D: -radAngle + (0.5 * radSpread - random() * radSpread),
    angle3D: -(Math.PI / 4) + random() * (Math.PI / 2),
    tiltAngle: random() * Math.PI,
    tiltAngleSpeed: 0.1 + random() * 0.3
  };
}

function updateFetti(fetti, progress, dragFriction, decay) {
  /* eslint-disable no-param-reassign */
  fetti.physics.x += Math.cos(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.y += Math.sin(fetti.physics.angle2D) * fetti.physics.velocity;
  fetti.physics.z += Math.sin(fetti.physics.angle3D) * fetti.physics.velocity;
  fetti.physics.wobble += fetti.physics.wobbleSpeed;
  // Backward compatibility
  if (decay) {
    fetti.physics.velocity *= decay;
  } else {
    fetti.physics.velocity -= fetti.physics.velocity * dragFriction;
  }
  fetti.physics.y += 3;
  fetti.physics.tiltAngle += fetti.physics.tiltAngleSpeed;

  var _fetti$physics = fetti.physics,
      x = _fetti$physics.x,
      y = _fetti$physics.y,
      tiltAngle = _fetti$physics.tiltAngle,
      wobble = _fetti$physics.wobble;

  var wobbleX = x + 10 * Math.cos(wobble);
  var wobbleY = y + 10 * Math.sin(wobble);
  var transform = "translate3d(" + wobbleX + "px, " + wobbleY + "px, 0) rotate3d(1, 1, 1, " + tiltAngle + "rad)";

  fetti.element.style.visibility = "visible";
  fetti.element.style.transform = transform;
  fetti.element.style.opacity = 1 - progress;

  /* eslint-enable */
}

function animate(root, fettis, dragFriction, decay, duration, stagger) {
  var startTime = void 0;

  return new Promise(function (resolve) {
    function update(time) {
      if (!startTime) startTime = time;
      var elapsed = time - startTime;
      var progress = startTime === time ? 0 : (time - startTime) / duration;
      fettis.slice(0, Math.ceil(elapsed / stagger)).forEach(function (fetti) {
        updateFetti(fetti, progress, dragFriction, decay);
      });

      if (time - startTime < duration) {
        requestAnimationFrame(update);
      } else {
        fettis.forEach(function (fetti) {
          if (fetti.element.parentNode === root) {
            return root.removeChild(fetti.element);
          }
        });
        resolve();
      }
    }

    requestAnimationFrame(update);
  });
}

var defaults = {
  angle: 90,
  spread: 45,
  startVelocity: 45,
  elementCount: 50,
  width: "10px",
  height: "10px",
  colors: defaultColors,
  duration: 3000,
  stagger: 0,
  dragFriction: 0.1,
  random: Math.random
};

function backwardPatch(config) {
  if (!config.stagger && config.delay) {
    config.stagger = config.delay;
  }
  return config;
}

function confetti(root) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _Object$assign = Object.assign({}, defaults, backwardPatch(config)),
      elementCount = _Object$assign.elementCount,
      colors = _Object$assign.colors,
      width = _Object$assign.width,
      height = _Object$assign.height,
      angle = _Object$assign.angle,
      spread = _Object$assign.spread,
      startVelocity = _Object$assign.startVelocity,
      decay = _Object$assign.decay,
      dragFriction = _Object$assign.dragFriction,
      duration = _Object$assign.duration,
      stagger = _Object$assign.stagger,
      random = _Object$assign.random;

  var elements = createElements(root, elementCount, colors, width, height);
  var fettis = elements.map(function (element) {
    return {
      element: element,
      physics: randomPhysics(angle, spread, startVelocity, random)
    };
  });

  return animate(root, fettis, dragFriction, decay, duration, stagger);
}

/***/ }),

/***/ "./node_modules/react-dom-confetti/lib/confetti.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-dom-confetti/lib/confetti.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _domConfetti = __webpack_require__(/*! dom-confetti */ "./node_modules/dom-confetti/lib/main.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  position: "relative"
};

var Confetti = function (_Component) {
  _inherits(Confetti, _Component);

  function Confetti(props) {
    _classCallCheck(this, Confetti);

    var _this = _possibleConstructorReturn(this, (Confetti.__proto__ || Object.getPrototypeOf(Confetti)).call(this, props));

    _this.setRef = _this.setRef.bind(_this);
    return _this;
  }

  _createClass(Confetti, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.active && !this.props.active) {
        (0, _domConfetti.confetti)(this.container, nextProps.config);
      }
    }
  }, {
    key: "setRef",
    value: function setRef(ref) {
      this.container = ref;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", { className: this.props.className, style: style, ref: this.setRef });
    }
  }]);

  return Confetti;
}(_react.Component);

exports.default = Confetti;

/***/ }),

/***/ "./resources/js/Pages/Success.jsx":
/*!****************************************!*\
  !*** ./resources/js/Pages/Success.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ProductListElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductListElement */ "./resources/js/components/ProductListElement.jsx");
/* harmony import */ var react_dom_confetti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom-confetti */ "./node_modules/react-dom-confetti/lib/confetti.js");
/* harmony import */ var react_dom_confetti__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_confetti__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Map */ "./resources/js/components/Map.jsx");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_7__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background-image:\n        linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)),\n        url('/images/successWithoutBlur.jpg');\n    background-size: cover;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var SuccessImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var config = {
  angle: "50",
  spread: "107",
  startVelocity: "93",
  elementCount: "10",
  dragFriction: 0.1,
  duration: "6060",
  stagger: "0",
  width: "12px",
  height: "12px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

function Success(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      triggerConfetti = _useState2[0],
      setTriggerConfeti = _useState2[1];

  var order = props.order,
      subtotal = props.successTotalCart,
      content = props.successCart,
      stores = props.stores;
  var store = stores.find(function (store) {
    return store.id === order.store_id;
  });

  var toggleTriggerConfeti = function toggleTriggerConfeti() {
    return setTriggerConfeti(!triggerConfetti);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(toggleTriggerConfeti, 500); //eslint-disable-next-line

    return function () {
      // to avoid return to charola when is success page.
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_7__["Inertia"].visit('/');
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Gracias"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dom_confetti__WEBPACK_IMPORTED_MODULE_5___default.a, {
    active: triggerConfetti,
    config: config
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "mt-24 w-full"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block text-brand-orange text-4xl text-center font-title font-semibold"
  }, "GRACIAS POR TU COMPRA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "block p-2 text-gray-500 text-base text-center max-w-xl m-auto"
  }, "\xA1Tu pan esta en el horno!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SuccessImage, {
    className: "w-full h-64 bg-cover"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "flex w-full px-4 pb-24 bg-brand-gray justify-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full md:w-1/2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full mt-5 uppercase text-brand-orange text-center text-sm tracking-wider font-bold"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-lg"
  }, "r"), "esumen de compra:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "flex w-full mt-4 flex-col items-left md:items-center md:flex-row md:justify-around"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-thin"
  }, "Nombre:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-bold ml-1"
  }, order.name, " ", order.lastname)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-thin"
  }, "N\xFAmero de pedido:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-bold ml-1"
  }, order.uuid))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "whitespace-no-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-thin"
  }, "Recoger en:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-bold ml-1"
  }, store.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-thin"
  }, "D\xEDa:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-bold ml-1"
  }, moment__WEBPACK_IMPORTED_MODULE_3___default()(order.date).format('D MMMM, YYYY'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-thin"
  }, "Hora:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-sm font-bold ml-1"
  }, order.hour)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dom_confetti__WEBPACK_IMPORTED_MODULE_5___default.a, {
    active: triggerConfetti,
    config: config
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full mt-4 mb-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "w-100"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full flex flex-col"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex content-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex-1 text-brand-orange font-thin text-left"
  }, "Producto"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex-1 text-brand-orange font-thin text-center"
  }, "Cant."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "flex-1 text-brand-orange font-thin text-right"
  }, "Prec. Unit.")), Object.keys(content).sort().filter(function (product) {
    return content[product].id !== 'orderDetailsId';
  }).map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProductListElement__WEBPACK_IMPORTED_MODULE_4__["default"], {
      product: content[product],
      isEditable: false
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-center text-regularText text-normal"
  }, "Total:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full text-center text-brand-orange text-2xl"
  }, "$", subtotal), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hidden border h-56 mt-4 bg-brand-gray sm:block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_6__["default"], {
    store: store
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://maps.google.com/?q=".concat(store.lat, ",").concat(store.lon, "&z=8")
  }, "ir a mapa"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dom_confetti__WEBPACK_IMPORTED_MODULE_5___default.a, {
    active: triggerConfetti,
    config: config
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Success);

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
    googleMapsApiKey: "[MAPSAPI]"
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

/***/ })

}]);