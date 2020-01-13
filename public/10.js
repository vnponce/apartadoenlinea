(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js ***!
  \****************************************************************************/
/*! exports provided: Autocomplete, BicyclingLayer, Circle, Data, DirectionsRenderer, DirectionsService, DistanceMatrixService, DrawingManager, GoogleMap, GroundOverlay, HeatmapLayer, InfoBox, InfoWindow, KmlLayer, LoadScript, LoadScriptNext, Marker, MarkerClusterer, OverlayView, Polygon, Polyline, Rectangle, StandaloneSearchBox, StreetViewPanorama, StreetViewService, TrafficLayer, TransitLayer, useGoogleMap, useLoadScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return Autocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BicyclingLayer", function() { return BicyclingLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsRenderer", function() { return DirectionsRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsService", function() { return DirectionsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceMatrixService", function() { return DistanceMatrixService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingManager", function() { return DrawingManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMap", function() { return GoogleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroundOverlay", function() { return GroundOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapLayer", function() { return HeatmapLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBox", function() { return InfoBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindow", function() { return InfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayer", function() { return KmlLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadScript", function() { return LoadScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadScriptNext", function() { return LoadScriptNext$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerClusterer", function() { return ClustererComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayView", function() { return OverlayView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandaloneSearchBox", function() { return StandaloneSearchBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPanorama", function() { return StreetViewPanorama; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewService", function() { return StreetViewService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficLayer", function() { return TrafficLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitLayer", function() { return TransitLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGoogleMap", function() { return useGoogleMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoadScript", function() { return useLoadScript; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_marker_clusterer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/marker-clusterer */ "./node_modules/@react-google-maps/marker-clusterer/dist/markerclusterer.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_google_maps_infobox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-google-maps/infobox */ "./node_modules/@react-google-maps/infobox/dist/infobox.esm.js");






function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MapContext =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
function useGoogleMap() {
  !!!react__WEBPACK_IMPORTED_MODULE_0__["useContext"] ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "useGoogleMap is React hook and requires React version 16.8+") : undefined : void 0;
  var map = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(MapContext);
  !!!map ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "useGoogleMap needs a GoogleMap available up in the tree") : undefined : void 0;
  return map;
}

var reduce = function reduce(obj, fn, acc) {
  return Object.keys(obj).reduce(function reducer(newAcc, key) {
    return fn(newAcc, obj[key], key);
  }, acc);
};

function forEach(obj, fn) {
  Object.keys(obj).forEach(function iterator(key) {
    return fn(obj[key], key);
  });
}

/* eslint-disable filenames/match-regex */
var applyUpdaterToNextProps = function applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance) {
  var map = {};

  var iter = function iter(fn, key) {
    var nextValue = nextProps[key];

    if (nextValue !== prevProps[key]) {
      map[key] = nextValue;
      fn(instance, nextValue);
    }
  };

  forEach(updaterMap, iter);
  return map;
};
function registerEvents(props, instance, eventMap) {
  var registeredList = reduce(eventMap, function reducer(acc, googleEventName, onEventName) {
    if (typeof props[onEventName] === 'function') {
      acc.push(google.maps.event.addListener(instance, googleEventName, props[onEventName]));
    }

    return acc;
  }, []);
  return registeredList;
}

function unregisterEvent(registered) {
  google.maps.event.removeListener(registered);
}

function unregisterEvents(events) {
  if (events === void 0) {
    events = [];
  }

  events.map(unregisterEvent);
}
function applyUpdatersToPropsAndRegisterEvents(_ref) {
  var updaterMap = _ref.updaterMap,
      eventMap = _ref.eventMap,
      prevProps = _ref.prevProps,
      nextProps = _ref.nextProps,
      instance = _ref.instance;
  var registeredEvents = registerEvents(nextProps, instance, eventMap);
  applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance);
  return registeredEvents;
}

var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMapTypeIdChanged: "maptypeid_changed",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseDown: "mousedown",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onTilesLoaded: "tilesloaded",
  onBoundsChanged: "bounds_changed",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onHeadingChanged: "heading_changed",
  onIdle: "idle",
  onProjectionChanged: "projection_changed",
  onResize: "resize",
  onTiltChanged: "tilt_changed",
  onZoomChanged: "zoom_changed"
};
var updaterMap = {
  extraMapTypes: function extraMapTypes(map, extra) {
    extra.forEach(function forEachExtra(it, i) {
      map.mapTypes.set(String(i), it);
    });
  },
  center: function center(map, _center) {
    map.setCenter(_center);
  },
  clickableIcons: function clickableIcons(map, clickable) {
    map.setClickableIcons(clickable);
  },
  heading: function heading(map, _heading) {
    map.setHeading(_heading);
  },
  mapTypeId: function mapTypeId(map, _mapTypeId) {
    map.setMapTypeId(_mapTypeId);
  },
  options: function options(map, _options) {
    map.setOptions(_options);
  },
  streetView: function streetView(map, _streetView) {
    map.setStreetView(_streetView);
  },
  tilt: function tilt(map, _tilt) {
    map.setTilt(_tilt);
  },
  zoom: function zoom(map, _zoom) {
    map.setZoom(_zoom);
  }
};
var GoogleMap =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(GoogleMap, _React$PureComponent);

  function GoogleMap() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      map: null
    };
    _this.registeredEvents = [];
    _this.mapRef = null; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.getInstance = function () {
      return new google.maps.Map(_this.mapRef, _this.props.options);
    };

    _this.panTo = function (latLng) {
      var map = _this.getInstance();

      if (map) {
        map.panTo(latLng);
      }
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name


    _this.setMapCallback = function () {
      if (_this.state.map !== null) {
        if (_this.props.onLoad) {
          _this.props.onLoad(_this.state.map);
        }
      }
    };
    /* eslint-disable @getify/proper-arrows/name */

    /* eslint-disable @getify/proper-arrows/this */


    _this.getRef = function (ref) {
      _this.mapRef = ref;
    };

    return _this;
  }

  var _proto = GoogleMap.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var map = this.getInstance();
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap,
      eventMap: eventMap,
      prevProps: {},
      nextProps: this.props,
      instance: map
    });

    function setMap() {
      return {
        map: map
      };
    }

    this.setState(setMap, this.setMapCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.map !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap,
        eventMap: eventMap,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.map
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.map !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.map);
      }

      unregisterEvents(this.registeredEvents);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      id: this.props.id,
      ref: this.getRef,
      style: this.props.mapContainerStyle,
      className: this.props.mapContainerClassName
    }, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MapContext.Provider, {
      value: this.state.map
    }, this.state.map !== null ? this.props.children : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null)));
  };

  return GoogleMap;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var isBrowser = typeof document !== 'undefined';

var injectScript = function injectScript(_ref) {
  var url = _ref.url,
      id = _ref.id;

  if (!isBrowser) {
    return Promise.reject(new Error('document is undefined'));
  }

  return new Promise(function injectScriptCallback(resolve, reject) {
    var existingScript = document.getElementById(id);
    var windowWithGoogleMap = window;

    if (existingScript) {
      // Same script id/url: keep same script
      if (existingScript.src === url) {
        if (existingScript.getAttribute('data-state') === 'ready') {
          return resolve(id);
        } else {
          var originalInitMap = windowWithGoogleMap.initMap;

          windowWithGoogleMap.initMap = function initMap() {
            if (originalInitMap) {
              originalInitMap();
            }

            resolve(id);
          };

          return;
        }
      } // Same script id but url changed: recreate the script
      else {
          existingScript.remove();
        }
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.id = id;
    script.async = true;
    script.onerror = reject;

    windowWithGoogleMap.initMap = function onload() {
      script.setAttribute('data-state', 'ready');
      resolve(id);
    };

    document.head.appendChild(script);
  })["catch"](function (err) {
    console.error('injectScript error: ', err);
  });
};

var isRobotoStyle = function isRobotoStyle(element) {
  // roboto font download
  if (element.href && element.href.indexOf('https://fonts.googleapis.com/css?family=Roboto') === 0) {
    return true;
  } // roboto style elements


  if (element.tagName.toLowerCase() === 'style' && // @ts-ignore
  element.styleSheet && // @ts-ignore
  element.styleSheet.cssText && // @ts-ignore
  element.styleSheet.cssText.replace('\r\n', '').indexOf('.gm-style') === 0) {
    // @ts-ignore
    element.styleSheet.cssText = '';
    return true;
  } // roboto style elements for other browsers


  if (element.tagName.toLowerCase() === 'style' && element.innerHTML && element.innerHTML.replace('\r\n', '').indexOf('.gm-style') === 0) {
    element.innerHTML = '';
    return true;
  } // when google tries to add empty style


  if (element.tagName.toLowerCase() === 'style' && // @ts-ignore
  !element.styleSheet && !element.innerHTML) {
    return true;
  }

  return false;
}; // Preventing the Google Maps libary from downloading an extra font


var preventGoogleFonts = function preventGoogleFonts() {
  // we override these methods only for one particular head element
  // default methods for other elements are not affected
  var head = document.getElementsByTagName('head')[0];
  var trueInsertBefore = head.insertBefore.bind(head); // TODO: adding return before reflect solves the TS issue
  //@ts-ignore

  head.insertBefore = function insertBefore(newElement, referenceElement) {
    if (!isRobotoStyle(newElement)) {
      Reflect.apply(trueInsertBefore, head, [newElement, referenceElement]);
    }
  };

  var trueAppend = head.appendChild.bind(head); // TODO: adding return before reflect solves the TS issue
  //@ts-ignore

  head.appendChild = function appendChild(textNode) {
    if (!isRobotoStyle(textNode)) {
      Reflect.apply(trueAppend, head, [textNode]);
    }
  };
};

function makeLoadScriptUrl(_ref) {
  var googleMapsApiKey = _ref.googleMapsApiKey,
      googleMapsClientId = _ref.googleMapsClientId,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? 'weekly' : _ref$version,
      language = _ref.language,
      region = _ref.region,
      libraries = _ref.libraries,
      channel = _ref.channel;
  var params = [];
  !(googleMapsApiKey && googleMapsClientId || !(googleMapsApiKey && googleMapsClientId)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time.') : undefined : void 0;

  if (googleMapsApiKey) {
    params.push("key=" + googleMapsApiKey);
  } else if (googleMapsClientId) {
    params.push("client=" + googleMapsClientId);
  }

  if (version) {
    params.push("v=" + version);
  }

  if (language) {
    params.push("language=" + language);
  }

  if (region) {
    params.push("region=" + region);
  }

  if (libraries && libraries.length) {
    params.push("libraries=" + libraries.sort().join(','));
  }

  if (channel) {
    params.push("channel=" + channel);
  }

  params.push('callback=initMap');
  return "https://maps.googleapis.com/maps/api/js?" + params.join('&');
}

var cleaningUp = false;
function DefaultLoadingElement() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, "Loading...");
}
var defaultLoadScriptProps = {
  id: 'script-loader',
  version: 'weekly'
};

var LoadScript =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(LoadScript, _React$PureComponent);

  function LoadScript() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.check = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.state = {
      loaded: false
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.cleanupCallback = function () {
      //@ts-ignore
      delete window.google;

      _this.injectScript();
    }; // eslint-disable-next-line @getify/proper-arrows/name


    _this.isCleaningUp = function () {
      try {
        var promiseCallback = function promiseCallback(resolve) {
          if (!cleaningUp) {
            resolve();
          } else {
            if (isBrowser) {
              var timer = window.setInterval(function interval() {
                if (!cleaningUp) {
                  window.clearInterval(timer);
                  resolve();
                }
              }, 1);
            }
          }
        };

        return Promise.resolve(new Promise(promiseCallback));
      } catch (e) {
        return Promise.reject(e);
      }
    };

    _this.cleanup = function () {
      cleaningUp = true;
      var script = document.getElementById(_this.props.id);

      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }

      Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function filter(script) {
        return script.src.includes("maps.googleapis");
      }).forEach(function forEach(script) {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
      Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function filter(link) {
        return link.href === "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans";
      }).forEach(function forEach(link) {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
      Array.prototype.slice.call(document.getElementsByTagName("style")).filter(function filter(style) {
        return style.innerText !== undefined && style.innerText.length > 0 && style.innerText.includes(".gm-");
      }).forEach(function forEach(style) {
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      });
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name


    _this.injectScript = function () {
      if (_this.props.preventGoogleFontsLoading) {
        preventGoogleFonts();
      }

      !!!_this.props.id ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'LoadScript requires "id" prop to be a string: %s', _this.props.id) : undefined : void 0;
      var injectScriptOptions = {
        id: _this.props.id,
        url: makeLoadScriptUrl(_this.props)
      };
      injectScript(injectScriptOptions) // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name
      .then(function () {
        if (_this.props.onLoad) {
          _this.props.onLoad();
        }

        _this.setState(function setLoaded() {
          return {
            loaded: true
          };
        });
      }) // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name
      ["catch"](function (err) {
        if (_this.props.onError) {
          _this.props.onError(err);
        }

        console.error("\n          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (" + (_this.props.googleMapsApiKey || '-') + ") or Client ID (" + (_this.props.googleMapsClientId || '-') + ") to <LoadScript />\n          Otherwise it is a Network issue.\n        ");
      });
    };

    return _this;
  }

  var _proto = LoadScript.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (isBrowser) {
      // @ts-ignore
      if (window.google && !cleaningUp) {
        console.error("google api is already presented");
        return;
      }

      this.isCleaningUp().then(this.injectScript)["catch"](function err(err) {
        console.error("Error at injecting script after cleaning up: ", err);
      });
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.libraries !== prevProps.libraries) {
      console.warn('Performance warning! Loadscript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable ounside of component, or somwhere in config files or ENV variables');
    }

    if (isBrowser && prevProps.language !== this.props.language) {
      this.cleanup(); // TODO: refactor to use gDSFP maybe... wait for hooks refactoring.
      // eslint-disable-next-line react/no-did-update-set-state

      this.setState(function setLoaded() {
        return {
          loaded: false
        };
      }, this.cleanupCallback);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    if (isBrowser) {
      this.cleanup(); // eslint-disable-next-line @getify/proper-arrows/this

      var timeoutCallback = function timeoutCallback() {
        if (!_this2.check.current) {
          //@ts-ignore
          delete window.google;
          cleaningUp = false;
        }
      };

      window.setTimeout(timeoutCallback, 1);

      if (this.props.onUnmount) {
        this.props.onUnmount();
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      ref: this.check
    }), this.state.loaded ? this.props.children : this.props.loadingElement || Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DefaultLoadingElement, null));
  };

  return LoadScript;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

LoadScript.defaultProps = defaultLoadScriptProps;

/* eslint-disable filenames/match-regex */
var previouslyLoadedUrl;
function useLoadScript(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? defaultLoadScriptProps.id : _ref$id,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? defaultLoadScriptProps.version : _ref$version,
      googleMapsApiKey = _ref.googleMapsApiKey,
      googleMapsClientId = _ref.googleMapsClientId,
      language = _ref.language,
      region = _ref.region,
      libraries = _ref.libraries,
      preventGoogleFontsLoading = _ref.preventGoogleFontsLoading,
      channel = _ref.channel;
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);

  var _React$useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoaded = _React$useState[0],
      setLoaded = _React$useState[1];

  var _React$useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      loadError = _React$useState2[0],
      setLoadError = _React$useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function trackMountedState() {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function applyPreventGoogleFonts() {
    if (isBrowser && preventGoogleFontsLoading) {
      preventGoogleFonts();
    }
  }, [preventGoogleFontsLoading]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function validateLoadedState() {
    if (isLoaded) {
      ! // @ts-ignore
      !!window.google ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "useLoadScript was marked as loaded, but window.google is not present. Something went wrong.") : undefined : void 0;
    }
  }, [isLoaded]);
  var url = makeLoadScriptUrl({
    version: version,
    googleMapsApiKey: googleMapsApiKey,
    googleMapsClientId: googleMapsClientId,
    language: language,
    region: region,
    libraries: libraries,
    channel: channel
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function loadScriptAndModifyLoadedState() {
    if (!isBrowser) {
      return;
    }

    function setLoadedIfMounted() {
      if (isMounted.current) {
        setLoaded(true);
        previouslyLoadedUrl = url;
      }
    }

    if (window.google && previouslyLoadedUrl === url) {
      setLoadedIfMounted();
      return;
    }

    injectScript({
      id: id,
      url: url
    }).then(setLoadedIfMounted)["catch"](function handleInjectError(err) {
      if (isMounted.current) {
        setLoadError(err);
      }

      console.warn("\n        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (" + (googleMapsApiKey || '-') + ") or Client ID (" + (googleMapsClientId || '-') + ")\n        Otherwise it is a Network issue.\n      ");
      console.error(err);
    });
  }, [id, url]);
  var prevLibraries = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function checkPerformance() {
    if (prevLibraries.current && libraries !== prevLibraries.current) {
      console.warn('Performance warning! Loadscript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables');
    }

    prevLibraries.current = libraries;
  }, [libraries]);
  return {
    isLoaded: isLoaded,
    loadError: loadError,
    url: url
  };
}

var defaultLoadingElement =
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(DefaultLoadingElement, null);

function LoadScriptNext(_ref) {
  var loadingElement = _ref.loadingElement,
      onLoad = _ref.onLoad,
      onError = _ref.onError,
      onUnmount = _ref.onUnmount,
      children = _ref.children,
      hookOptions = _objectWithoutPropertiesLoose(_ref, ["loadingElement", "onLoad", "onError", "onUnmount", "children"]);

  var _useLoadScript = useLoadScript(hookOptions),
      isLoaded = _useLoadScript.isLoaded,
      loadError = _useLoadScript.loadError;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function handleOnLoad() {
    if (isLoaded && typeof onLoad === "function") {
      onLoad();
    }
  }, [isLoaded, onLoad]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function handleOnError() {
    if (loadError && typeof onError === "function") {
      onError(loadError);
    }
  }, [loadError, onError]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function handleOnUnmount() {
    return function () {
      if (onUnmount) {
        onUnmount();
      }
    };
  }, [onUnmount]);
  return isLoaded ? children : loadingElement || defaultLoadingElement;
}

var LoadScriptNext$1 = /*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(LoadScriptNext);

var eventMap$1 = {};
var updaterMap$1 = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  }
};
var TrafficLayer =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(TrafficLayer, _PureComponent);

  function TrafficLayer() {
    var _this;

    _this = _PureComponent.apply(this, arguments) || this;
    _this.state = {
      trafficLayer: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setTrafficLayerCallback = function () {
      if (_this.state.trafficLayer !== null) {
        if (_this.props.onLoad) {
          // @ts-ignore
          _this.props.onLoad(_this.state.trafficLayer);
        }
      }
    };

    _this.registeredEvents = [];
    return _this;
  }

  var _proto = TrafficLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var trafficLayer = new google.maps.TrafficLayer(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$1,
      eventMap: eventMap$1,
      prevProps: {},
      nextProps: this.props,
      instance: trafficLayer
    });

    function setTrafficlayer() {
      return {
        trafficLayer: trafficLayer
      };
    }

    this.setState(setTrafficlayer, this.setTrafficLayerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.trafficLayer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$1,
        eventMap: eventMap$1,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.trafficLayer
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.trafficLayer !== null) {
      if (this.props.onUnmount) {
        // @ts-ignore
        this.props.onUnmount(this.state.trafficLayer);
      }

      unregisterEvents(this.registeredEvents); // @ts-ignore

      this.state.trafficLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return TrafficLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
TrafficLayer.contextType = MapContext;

var BicyclingLayer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(BicyclingLayer, _React$PureComponent);

  function BicyclingLayer() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      bicyclingLayer: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setBicyclingLayerCallback = function () {
      if (_this.state.bicyclingLayer !== null) {
        // TODO: how is this possibly null if we're doing a null check
        // @ts-ignore
        _this.state.bicyclingLayer.setMap(_this.context);

        if (_this.props.onLoad) {
          //@ts-ignore
          _this.props.onLoad(_this.state.bicyclingLayer);
        }
      }
    };

    return _this;
  }

  var _proto = BicyclingLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var bicyclingLayer = new google.maps.BicyclingLayer();

    function setBicyclingLayer() {
      return {
        bicyclingLayer: bicyclingLayer
      };
    }

    this.setState(setBicyclingLayer, this.setBicyclingLayerCallback);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.bicyclingLayer !== null) {
      if (this.props.onUnmount) {
        // @ts-ignore
        this.props.onUnmount(this.state.bicyclingLayer);
      } // @ts-ignore


      this.state.bicyclingLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return BicyclingLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
BicyclingLayer.contextType = MapContext;

var TransitLayer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(TransitLayer, _React$PureComponent);

  function TransitLayer() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      transitLayer: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setTransitLayerCallback = function () {
      if (_this.state.transitLayer !== null) {
        // TODO: how is this possibly null if we're doing a null check
        // @ts-ignore
        _this.state.transitLayer.setMap(_this.context);

        if (_this.props.onLoad) {
          //@ts-ignore
          _this.props.onLoad(_this.state.transitLayer);
        }
      }
    };

    return _this;
  }

  var _proto = TransitLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var transitLayer = new google.maps.TransitLayer();

    function setTransitLayer() {
      return {
        transitLayer: transitLayer
      };
    }

    this.setState(setTransitLayer, this.setTransitLayerCallback);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.transitLayer !== null) {
      if (this.props.onUnmount) {
        // @ts-ignore
        this.props.onUnmount(this.state.transitLayer);
      } // @ts-ignore


      this.state.transitLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return TransitLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
TransitLayer.contextType = MapContext;

var eventMap$2 = {
  onCircleComplete: "circlecomplete",
  onMarkerComplete: "markercomplete",
  onOverlayComplete: "overlaycomplete",
  onPolygonComplete: "polygoncomplete",
  onPolylineComplete: "polylinecomplete",
  onRectangleComplete: "rectanglecomplete"
};
var updaterMap$2 = {
  drawingMode: function drawingMode(instance, _drawingMode) {
    instance.setDrawingMode(_drawingMode);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  }
};
var DrawingManager =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DrawingManager, _React$PureComponent);

  function DrawingManager(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.registeredEvents = [];
    _this.state = {
      drawingManager: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setDrawingManagerCallback = function () {
      if (_this.state.drawingManager !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.drawingManager);
      }
    };

    !!!google.maps.drawing ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing) : undefined : void 0;
    return _this;
  }

  var _proto = DrawingManager.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var drawingManager = new google.maps.drawing.DrawingManager(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$2,
      eventMap: eventMap$2,
      prevProps: {},
      nextProps: this.props,
      instance: drawingManager
    });

    function setDrawingManager() {
      return {
        drawingManager: drawingManager
      };
    }

    this.setState(setDrawingManager, this.setDrawingManagerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.drawingManager !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$2,
        eventMap: eventMap$2,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.drawingManager
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.drawingManager !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.drawingManager);
      }

      unregisterEvents(this.registeredEvents);
      this.state.drawingManager.setMap(null);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return DrawingManager;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
DrawingManager.contextType = MapContext;

var eventMap$3 = {
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDraggableChanged: "draggable_changed",
  onDragStart: "dragstart",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onPositionChanged: "position_changed",
  onRightClick: "rightclick",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap$3 = {
  animation: function animation(instance, _animation) {
    instance.setAnimation(_animation);
  },
  clickable: function clickable(instance, _clickable) {
    instance.setClickable(_clickable);
  },
  cursor: function cursor(instance, _cursor) {
    instance.setCursor(_cursor);
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  icon: function icon(instance, _icon) {
    instance.setIcon(_icon);
  },
  label: function label(instance, _label) {
    instance.setLabel(_label);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  opacity: function opacity(instance, _opacity) {
    instance.setOpacity(_opacity);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  shape: function shape(instance, _shape) {
    instance.setShape(_shape);
  },
  title: function title(instance, _title) {
    instance.setTitle(_title);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};
var Marker =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Marker, _React$PureComponent);

  function Marker() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      marker: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setMarkerCallback = function () {
      if (_this.state.marker !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.marker);
      }
    };

    return _this;
  }

  var _proto = Marker.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var markerOptions = _extends({}, this.props.options || {}, {}, this.props.clusterer ? {} : {
      map: this.context
    }, {
      position: this.props.position
    });

    var marker = new google.maps.Marker(markerOptions);

    if (this.props.clusterer) {
      this.props.clusterer.addMarker( // @ts-ignore
      marker, !!this.props.noClustererRedraw);
    } else {
      marker.setMap(this.context);
    }

    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$3,
      eventMap: eventMap$3,
      prevProps: {},
      nextProps: this.props,
      instance: marker
    });

    function setMarker() {
      return {
        marker: marker
      };
    }

    this.setState(setMarker, this.setMarkerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.marker !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$3,
        eventMap: eventMap$3,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.marker
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.marker !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.marker);
      }

      unregisterEvents(this.registeredEvents);

      if (this.props.clusterer) {
        this.props.clusterer.removeMarker( // @ts-ignore
        this.state.marker, !!this.props.noClustererRedraw);
      } else {
        this.state.marker && this.state.marker.setMap(null);
      }
    }
  };

  _proto.render = function render() {
    return this.props.children || null;
  };

  return Marker;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Marker.contextType = MapContext;

var eventMap$4 = {
  onClick: "click",
  onClusteringBegin: "clusteringbegin",
  onClusteringEnd: "clusteringend",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover"
};
var updaterMap$4 = {
  averageCenter: function averageCenter(instance, _averageCenter) {
    instance.setAverageCenter(_averageCenter);
  },
  batchSizeIE: function batchSizeIE(instance, _batchSizeIE) {
    instance.setBatchSizeIE(_batchSizeIE);
  },
  calculator: function calculator(instance, _calculator) {
    instance.setCalculator(_calculator);
  },
  clusterClass: function clusterClass(instance, _clusterClass) {
    instance.setClusterClass(_clusterClass);
  },
  enableRetinaIcons: function enableRetinaIcons(instance, _enableRetinaIcons) {
    instance.setEnableRetinaIcons(_enableRetinaIcons);
  },
  gridSize: function gridSize(instance, _gridSize) {
    instance.setGridSize(_gridSize);
  },
  ignoreHidden: function ignoreHidden(instance, _ignoreHidden) {
    instance.setIgnoreHidden(_ignoreHidden);
  },
  imageExtension: function imageExtension(instance, _imageExtension) {
    instance.setImageExtension(_imageExtension);
  },
  imagePath: function imagePath(instance, _imagePath) {
    instance.setImagePath(_imagePath);
  },
  imageSizes: function imageSizes(instance, _imageSizes) {
    instance.setImageSizes(_imageSizes);
  },
  maxZoom: function maxZoom(instance, _maxZoom) {
    instance.setMaxZoom(_maxZoom);
  },
  minimumClusterSize: function minimumClusterSize(instance, _minimumClusterSize) {
    instance.setMinimumClusterSize(_minimumClusterSize);
  },
  styles: function styles(instance, _styles) {
    instance.setStyles(_styles);
  },
  title: function title(instance, _title) {
    instance.setTitle(_title);
  },
  zoomOnClick: function zoomOnClick(instance, _zoomOnClick) {
    instance.setZoomOnClick(_zoomOnClick);
  }
};
var ClustererComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ClustererComponent, _React$PureComponent);

  function ClustererComponent() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      markerClusterer: null
    };

    _this.setClustererCallback = function () {
      if (_this.state.markerClusterer !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.markerClusterer);
      }
    };

    return _this;
  }

  var _proto = ClustererComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.context) {
      var markerClusterer = new _react_google_maps_marker_clusterer__WEBPACK_IMPORTED_MODULE_2__["Clusterer"](this.context, [], this.props.options);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$4,
        eventMap: eventMap$4,
        prevProps: {},
        nextProps: this.props,
        instance: markerClusterer
      });
      this.setState(function setClusterer() {
        return {
          markerClusterer: markerClusterer
        };
      }, this.setClustererCallback);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.markerClusterer) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$4,
        eventMap: eventMap$4,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.markerClusterer
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.markerClusterer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.markerClusterer);
      }

      unregisterEvents(this.registeredEvents); //@ts-ignore

      this.state.markerClusterer.setMap(null);
    }
  };

  _proto.render = function render() {
    return this.state.markerClusterer !== null ? this.props.children(this.state.markerClusterer) : null;
  };

  return ClustererComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
ClustererComponent.contextType = MapContext;

var eventMap$5 = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap$5 = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  position: function position(instance, _position) {
    if (_position instanceof google.maps.LatLng) {
      instance.setPosition(_position);
    } else {
      instance.setPosition(new google.maps.LatLng(_position.lat, _position.lng));
    }
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};
var InfoBoxComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(InfoBoxComponent, _React$PureComponent);

  function InfoBoxComponent() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = null;
    _this.state = {
      infoBox: null
    };

    _this.open = function (infoBox, anchor) {
      if (anchor) {
        infoBox.open(_this.context, anchor);
      } else if (infoBox.getPosition()) {
        infoBox.open(_this.context);
      } else {
          true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "You must provide either an anchor or a position prop for <InfoBox>.") : undefined ;
      }
    };

    _this.setInfoBoxCallback = function () {
      var _this$props = _this.props,
          anchor = _this$props.anchor,
          onLoad = _this$props.onLoad;
      var infoBox = _this.state.infoBox;

      if (infoBox !== null && _this.containerElement !== null) {
        infoBox.setContent(_this.containerElement);

        _this.open(infoBox, anchor);

        if (onLoad) {
          onLoad(infoBox);
        }
      }
    };

    return _this;
  }

  var _proto = InfoBoxComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var options = this.props.options;

    var _ref = options || {},
        position = _ref.position,
        infoBoxOptions = _objectWithoutPropertiesLoose(_ref, ["position"]);

    var positionLatLng;

    if (position && !(position instanceof google.maps.LatLng)) {
      positionLatLng = new google.maps.LatLng(position.lat, position.lng);
    }

    var infoBox = new _react_google_maps_infobox__WEBPACK_IMPORTED_MODULE_4__["InfoBox"](_extends({}, infoBoxOptions, {}, positionLatLng ? {
      position: positionLatLng
    } : {}));
    this.containerElement = document.createElement('div');
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$5,
      eventMap: eventMap$5,
      prevProps: {},
      nextProps: this.props,
      instance: infoBox
    });
    this.setState({
      infoBox: infoBox
    }, this.setInfoBoxCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var infoBox = this.state.infoBox;

    if (infoBox !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$5,
        eventMap: eventMap$5,
        prevProps: prevProps,
        nextProps: this.props,
        instance: infoBox
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var onUnmount = this.props.onUnmount;
    var infoBox = this.state.infoBox;

    if (infoBox !== null) {
      if (onUnmount) {
        onUnmount(infoBox);
      }

      unregisterEvents(this.registeredEvents);
      infoBox.close();
    }
  };

  _proto.render = function render() {
    if (!this.containerElement) {
      return null;
    }

    return Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children), this.containerElement);
  };

  return InfoBoxComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
InfoBoxComponent.contextType = MapContext;

var eventMap$6 = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap$6 = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};
var InfoWindow =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(InfoWindow, _React$PureComponent);

  function InfoWindow() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = null;
    _this.state = {
      infoWindow: null
    };

    _this.open = function (infoWindow, anchor) {
      if (anchor) {
        infoWindow.open(_this.context, anchor);
      } else if (infoWindow.getPosition()) {
        infoWindow.open(_this.context);
      } else {
          true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.") : undefined ;
      }
    };

    _this.setInfowindowCallback = function () {
      if (_this.state.infoWindow !== null && _this.containerElement !== null) {
        _this.state.infoWindow.setContent(_this.containerElement);

        _this.open(_this.state.infoWindow, _this.props.anchor);

        if (_this.props.onLoad) {
          _this.props.onLoad(_this.state.infoWindow);
        }
      }
    };

    return _this;
  }

  var _proto = InfoWindow.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var infoWindow = new google.maps.InfoWindow(_extends({}, this.props.options || {}));
    this.containerElement = document.createElement("div");
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$6,
      eventMap: eventMap$6,
      prevProps: {},
      nextProps: this.props,
      instance: infoWindow
    });

    function setInfoWindow() {
      return {
        infoWindow: infoWindow
      };
    }

    this.setState(setInfoWindow, this.setInfowindowCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.infoWindow !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$6,
        eventMap: eventMap$6,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.infoWindow
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.infoWindow !== null) {
      unregisterEvents(this.registeredEvents);
      this.state.infoWindow.close();
    }
  };

  _proto.render = function render() {
    return this.containerElement ? Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children), this.containerElement) : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return InfoWindow;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
InfoWindow.contextType = MapContext;

var eventMap$7 = {
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$7 = {
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  path: function path(instance, _path) {
    instance.setPath(_path);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};
var Polyline =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Polyline, _React$PureComponent);

  function Polyline() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      polyline: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setPolylineCallback = function () {
      if (_this.state.polyline !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.polyline);
      }
    };

    return _this;
  }

  var _proto = Polyline.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var polyline = new google.maps.Polyline(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$7,
      eventMap: eventMap$7,
      prevProps: {},
      nextProps: this.props,
      instance: polyline
    });

    function setPolyline() {
      return {
        polyline: polyline
      };
    }

    this.setState(setPolyline, this.setPolylineCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.polyline !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$7,
        eventMap: eventMap$7,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.polyline
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.polyline !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.polyline);
      }

      unregisterEvents(this.registeredEvents);
      this.state.polyline.setMap(null);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return Polyline;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Polyline.contextType = MapContext;

var eventMap$8 = {
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$8 = {
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  path: function path(instance, _path) {
    instance.setPath(_path);
  },
  paths: function paths(instance, _paths) {
    instance.setPaths(_paths);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};
var Polygon =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Polygon, _React$PureComponent);

  function Polygon() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      polygon: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setPolygonCallback = function () {
      if (_this.state.polygon !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.polygon);
      }
    };

    _this.render = function () {
      return null;
    };

    return _this;
  }

  var _proto = Polygon.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var polygon = new google.maps.Polygon(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$8,
      eventMap: eventMap$8,
      prevProps: {},
      nextProps: this.props,
      instance: polygon
    });

    function setPolygon() {
      return {
        polygon: polygon
      };
    }

    this.setState(setPolygon, this.setPolygonCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.polygon !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$8,
        eventMap: eventMap$8,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.polygon
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.polygon !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.polygon);
      }

      unregisterEvents(this.registeredEvents);
      this.state.polygon && this.state.polygon.setMap(null);
    }
  };

  return Polygon;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Polygon.contextType = MapContext;

var eventMap$9 = {
  onBoundsChanged: "bounds_changed",
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
};
var updaterMap$9 = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds);
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};
var Rectangle =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Rectangle, _React$PureComponent);

  function Rectangle() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      rectangle: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setRectangleCallback = function () {
      if (_this.state.rectangle !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.rectangle);
      }
    };

    return _this;
  }

  var _proto = Rectangle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var rectangle = new google.maps.Rectangle(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$9,
      eventMap: eventMap$9,
      prevProps: {},
      nextProps: this.props,
      instance: rectangle
    });

    function setRectangle() {
      return {
        rectangle: rectangle
      };
    }

    this.setState(setRectangle, this.setRectangleCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.rectangle !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$9,
        eventMap: eventMap$9,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.rectangle
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.rectangle !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.rectangle);
      }

      unregisterEvents(this.registeredEvents);
      this.state.rectangle.setMap(null);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return Rectangle;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Rectangle.contextType = MapContext;

var eventMap$a = {
  onCenterChanged: "center_changed",
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRadiusChanged: "radius_changed",
  onRightClick: "rightclick"
};
var updaterMap$a = {
  center: function center(instance, _center) {
    instance.setCenter(_center);
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  radius: function radius(instance, _radius) {
    instance.setRadius(_radius);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};
var Circle =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Circle, _React$PureComponent);

  function Circle() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      circle: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setCircleCallback = function () {
      if (_this.state.circle !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.circle);
      }
    };

    return _this;
  }

  var _proto = Circle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var circle = new google.maps.Circle(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$a,
      eventMap: eventMap$a,
      prevProps: {},
      nextProps: this.props,
      instance: circle
    });

    function setCircle() {
      return {
        circle: circle
      };
    }

    this.setState(setCircle, this.setCircleCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.circle !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$a,
        eventMap: eventMap$a,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.circle
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.circle !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.circle);
      }

      unregisterEvents(this.registeredEvents);
      this.state.circle && this.state.circle.setMap(null);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return Circle;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Circle.contextType = MapContext;

var eventMap$b = {
  onAddFeature: "addfeature",
  onClick: "click",
  onDblClick: "dblclick",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRemoveFeature: "removefeature",
  onRemoveProperty: "removeproperty",
  onRightClick: "rightclick",
  onSetGeometry: "setgeometry",
  onSetProperty: "setproperty"
};
var updaterMap$b = {
  add: function add(instance, features) {
    instance.add(features);
  },
  addgeojson: function addgeojson(instance, geojson, options) {
    instance.addGeoJson(geojson, options);
  },
  contains: function contains(instance, feature) {
    instance.contains(feature);
  },
  foreach: function foreach(instance, callback) {
    instance.forEach(callback);
  },
  loadgeojson: function loadgeojson(instance, url, options, callback) {
    instance.loadGeoJson(url, options, callback);
  },
  overridestyle: function overridestyle(instance, feature, style) {
    instance.overrideStyle(feature, style);
  },
  remove: function remove(instance, feature) {
    instance.remove(feature);
  },
  revertstyle: function revertstyle(instance, feature) {
    instance.revertStyle(feature);
  },
  controlposition: function controlposition(instance, controlPosition // TODO: ???
  ) {
    instance.setControlPosition(controlPosition);
  },
  controls: function controls(instance, _controls) {
    instance.setControls(_controls);
  },
  drawingmode: function drawingmode(instance, mode) {
    instance.setDrawingMode(mode);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  style: function style(instance, _style) {
    instance.setStyle(_style);
  },
  togeojson: function togeojson(instance, callback) {
    instance.toGeoJson(callback);
  }
};
var Data =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Data, _React$PureComponent);

  function Data() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      data: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setDataCallback = function () {
      if (_this.state.data !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.data);
      }
    };

    return _this;
  }

  var _proto = Data.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var data = new google.maps.Data(_extends({}, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$b,
      eventMap: eventMap$b,
      prevProps: {},
      nextProps: this.props,
      instance: data
    });

    function setData() {
      return {
        data: data
      };
    }

    this.setState(setData, this.setDataCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.data !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$b,
        eventMap: eventMap$b,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.data
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.data !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.data);
      }

      unregisterEvents(this.registeredEvents);

      if (this.state.data) {
        this.state.data.setMap(null);
      }
    }
  };

  _proto.render = function render() {
    return null;
  };

  return Data;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Data.contextType = MapContext;

var eventMap$c = {
  onClick: "click",
  onDefaultViewportChanged: "defaultviewport_changed",
  onStatusChanged: "status_changed"
};
var updaterMap$c = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  url: function url(instance, _url) {
    instance.setUrl(_url);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};
var KmlLayer =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(KmlLayer, _PureComponent);

  function KmlLayer() {
    var _this;

    _this = _PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      kmlLayer: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setKmlLayerCallback = function () {
      if (_this.state.kmlLayer !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.kmlLayer);
      }
    };

    return _this;
  }

  var _proto = KmlLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var kmlLayer = new google.maps.KmlLayer(_extends({}, this.props.options, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$c,
      eventMap: eventMap$c,
      prevProps: {},
      nextProps: this.props,
      instance: kmlLayer
    });

    function setLmlLayer() {
      return {
        kmlLayer: kmlLayer
      };
    }

    this.setState(setLmlLayer, this.setKmlLayerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.kmlLayer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$c,
        eventMap: eventMap$c,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.kmlLayer
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.kmlLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.kmlLayer);
      }

      unregisterEvents(this.registeredEvents);
      this.state.kmlLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return KmlLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
KmlLayer.contextType = MapContext;

/* eslint-disable filenames/match-regex */
function getOffsetOverride(containerElement, getPixelPositionOffset) {
  return typeof getPixelPositionOffset === "function" ? getPixelPositionOffset(containerElement.offsetWidth, containerElement.offsetHeight) : {};
}

var createLatLng = function createLatLng(inst, Type) {
  return new Type(inst.lat, inst.lng);
};

var createLatLngBounds = function createLatLngBounds(inst, Type) {
  return new Type(new google.maps.LatLng(inst.ne.lat, inst.ne.lng), new google.maps.LatLng(inst.sw.lat, inst.sw.lng));
};

var ensureOfType = function ensureOfType(inst, type, factory) {
  return inst instanceof type ? inst : factory(inst, type);
};

var getLayoutStylesByBounds = function getLayoutStylesByBounds(mapCanvasProjection, offset, bounds) {
  var ne = mapCanvasProjection.fromLatLngToDivPixel(bounds.getNorthEast());
  var sw = mapCanvasProjection.fromLatLngToDivPixel(bounds.getSouthWest());

  if (ne && sw) {
    return {
      left: sw.x + offset.x + "px",
      top: ne.y + offset.y + "px",
      width: ne.x - sw.x - offset.x + "px",
      height: sw.y - ne.y - offset.y + "px"
    };
  }

  return {
    left: "-9999px",
    top: "-9999px"
  };
};

var getLayoutStylesByPosition = function getLayoutStylesByPosition(mapCanvasProjection, offset, position) {
  var point = mapCanvasProjection.fromLatLngToDivPixel(position);

  if (point) {
    var x = point.x,
        y = point.y;
    return {
      left: x + offset.x + "px",
      top: y + offset.y + "px"
    };
  }

  return {
    left: "-9999px",
    top: "-9999px"
  };
};

var getLayoutStyles = function getLayoutStyles(mapCanvasProjection, offset, bounds, // eslint-disable-next-line @getify/proper-arrows/params
position) {
  return bounds !== undefined ? getLayoutStylesByBounds(mapCanvasProjection, offset, ensureOfType(bounds, google.maps.LatLngBounds, createLatLngBounds)) : getLayoutStylesByPosition(mapCanvasProjection, offset, ensureOfType(position, google.maps.LatLng, createLatLng));
};

var ContentMountHandler =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ContentMountHandler, _React$Component);

  function ContentMountHandler() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ContentMountHandler.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onLoad) this.props.onLoad();
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return ContentMountHandler;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var OverlayView =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(OverlayView, _React$PureComponent);

  function OverlayView() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      overlayView: null
    };
    _this.containerElement = null; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setOverlayViewCallback = function () {
      if (_this.state.overlayView !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.overlayView);
      }

      _this.onPositionElement();
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name


    _this.onAdd = function () {
      _this.containerElement = document.createElement("div");
      _this.containerElement.style.position = "absolute";
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name


    _this.onPositionElement = function () {
      if (_this.state.overlayView !== null && _this.containerElement !== null) {
        var mapCanvasProjection = _this.state.overlayView.getProjection();

        var offset = _extends({
          x: 0,
          y: 0
        }, getOffsetOverride(_this.containerElement, _this.props.getPixelPositionOffset));

        var layoutStyles = getLayoutStyles(mapCanvasProjection, offset, _this.props.bounds, _this.props.position);
        Object.assign(_this.containerElement.style, layoutStyles);
      }
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name


    _this.draw = function () {
      !!!_this.props.mapPaneName ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "OverlayView requires props.mapPaneName but got %s", _this.props.mapPaneName) : undefined : void 0;
      var overlayView = _this.state.overlayView;

      if (overlayView === null) {
        return;
      } // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes


      var mapPanes = overlayView.getPanes();

      if (!mapPanes) {
        return;
      }

      if (_this.containerElement) {
        mapPanes[_this.props.mapPaneName].appendChild(_this.containerElement);
      }

      _this.onPositionElement();

      _this.forceUpdate();
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name


    _this.onRemove = function () {
      if (_this.containerElement !== null && _this.containerElement.parentNode) {
        _this.containerElement.parentNode.removeChild(_this.containerElement);

        delete _this.containerElement;
      }
    };

    return _this;
  }

  var _proto2 = OverlayView.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    var overlayView = new google.maps.OverlayView(); // You must implement three methods: onAdd(), draw(), and onRemove().

    overlayView.onAdd = this.onAdd;
    overlayView.draw = this.draw;
    overlayView.onRemove = this.onRemove;
    overlayView.setMap(this.context); // You must call setMap() with a valid Map object to trigger the call to
    // the onAdd() method and setMap(null) in order to trigger the onRemove() method.

    function setOverlayView() {
      return {
        overlayView: overlayView
      };
    }

    this.setState(setOverlayView);
  };

  _proto2.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    if (prevProps.position !== this.props.position || prevProps.bounds !== this.props.bounds) {
      setTimeout(function () {
        _this2.state.overlayView !== null && _this2.state.overlayView.draw();
      }, 0);
    }
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    if (this.state.overlayView !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.overlayView);
      }

      this.state.overlayView.setMap(null);
    }
  };

  _proto2.render = function render() {
    return this.containerElement !== null ? Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ContentMountHandler, {
      onLoad: this.setOverlayViewCallback
    }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children)), this.containerElement) : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return OverlayView;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
OverlayView.FLOAT_PANE = "floatPane";
OverlayView.MAP_PANE = "mapPane";
OverlayView.MARKER_LAYER = "markerLayer";
OverlayView.OVERLAY_LAYER = "overlayLayer";
OverlayView.OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
OverlayView.contextType = MapContext;

var eventMap$d = {
  onDblClick: "dblclick",
  onClick: "click"
};
var updaterMap$d = {
  opacity: function opacity(instance, _opacity) {
    instance.setOpacity(_opacity);
  }
};
var GroundOverlay =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(GroundOverlay, _React$PureComponent);

  function GroundOverlay() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      groundOverlay: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setGroundOverlayCallback = function () {
      if (_this.state.groundOverlay !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.groundOverlay);
      }
    };

    return _this;
  }

  var _proto = GroundOverlay.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !(!!this.props.url || !!this.props.bounds) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "For GroundOveray, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655") : undefined : void 0;
    var groundOverlay = new google.maps.GroundOverlay(this.props.url, this.props.bounds, _extends({}, this.props.options, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$d,
      eventMap: eventMap$d,
      prevProps: {},
      nextProps: this.props,
      instance: groundOverlay
    });

    function setGroundOverlay() {
      return {
        groundOverlay: groundOverlay
      };
    }

    this.setState(setGroundOverlay, this.setGroundOverlayCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.groundOverlay !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$d,
        eventMap: eventMap$d,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.groundOverlay
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.groundOverlay) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.groundOverlay);
      }

      this.state.groundOverlay.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return GroundOverlay;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
GroundOverlay.defaultProps = {
  onLoad: function onLoad() {}
};
GroundOverlay.contextType = MapContext;

var eventMap$e = {};
var updaterMap$e = {
  data: function data(instance, _data) {
    instance.setData(_data);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  }
};
var HeatmapLayer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(HeatmapLayer, _React$PureComponent);

  function HeatmapLayer() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      heatmapLayer: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setHeatmapLayerCallback = function () {
      if (_this.state.heatmapLayer !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.heatmapLayer);
      }
    };

    return _this;
  }

  var _proto = HeatmapLayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!google.maps.visualization ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization) : undefined : void 0;
    !!!this.props.data ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "data property is required in HeatmapLayer %s", this.props.data) : undefined : void 0;
    var heatmapLayer = new google.maps.visualization.HeatmapLayer(_extends({
      data: this.props.data
    }, this.props.options || {}, {
      map: this.context
    }));
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$e,
      eventMap: eventMap$e,
      prevProps: {},
      nextProps: this.props,
      instance: heatmapLayer
    });

    function setHeatmapLayer() {
      return {
        heatmapLayer: heatmapLayer
      };
    }

    this.setState(setHeatmapLayer, this.setHeatmapLayerCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    unregisterEvents(this.registeredEvents);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$e,
      eventMap: eventMap$e,
      prevProps: prevProps,
      nextProps: this.props,
      instance: this.state.heatmapLayer
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.heatmapLayer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.heatmapLayer);
      }

      unregisterEvents(this.registeredEvents);
      this.state.heatmapLayer.setMap(null);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return HeatmapLayer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
HeatmapLayer.contextType = MapContext;

var eventMap$f = {
  onCloseClick: "closeclick",
  onPanoChanged: "pano_changed",
  onPositionChanged: "position_changed",
  onPovChanged: "pov_changed",
  onResize: "resize",
  onStatusChanged: "status_changed",
  onVisibleChanged: "visible_changed",
  onZoomChanged: "zoom_changed"
};
var updaterMap$f = {
  register: function register(instance, provider, options) {
    instance.registerPanoProvider(provider, options);
  },
  links: function links(instance, _links) {
    instance.setLinks(_links);
  },
  motionTracking: function motionTracking(instance, _motionTracking) {
    instance.setMotionTracking(_motionTracking);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  pano: function pano(instance, _pano) {
    instance.setPano(_pano);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  pov: function pov(instance, _pov) {
    instance.setPov(_pov);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zoom: function zoom(instance, _zoom) {
    instance.setZoom(_zoom);
  }
};
var StreetViewPanorama =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(StreetViewPanorama, _React$PureComponent);

  function StreetViewPanorama() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      streetViewPanorama: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setStreetViewPanoramaCallback = function () {
      if (_this.state.streetViewPanorama !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.streetViewPanorama);
      }
    };

    return _this;
  }

  var _proto = StreetViewPanorama.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var streetViewPanorama = this.context.getStreetView();
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$f,
      eventMap: eventMap$f,
      prevProps: {},
      nextProps: this.props,
      instance: streetViewPanorama
    });

    function setStreetViewPanorama() {
      return {
        streetViewPanorama: streetViewPanorama
      };
    }

    this.setState(setStreetViewPanorama, this.setStreetViewPanoramaCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.streetViewPanorama !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$f,
        eventMap: eventMap$f,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.streetViewPanorama
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.streetViewPanorama !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.streetViewPanorama);
      }

      unregisterEvents(this.registeredEvents);
      this.state.streetViewPanorama.setVisible(false);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return StreetViewPanorama;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
StreetViewPanorama.contextType = MapContext;

var StreetViewService =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(StreetViewService, _React$PureComponent);

  function StreetViewService() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      streetViewService: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setStreetViewServiceCallback = function () {
      if (_this.state.streetViewService !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.streetViewService);
      }
    };

    return _this;
  }

  var _proto = StreetViewService.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var streetViewService = new google.maps.StreetViewService();

    function setStreetViewService() {
      return {
        streetViewService: streetViewService
      };
    }

    this.setState(setStreetViewService);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.streetViewService !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.streetViewService);
      }
    }
  };

  _proto.render = function render() {
    return null;
  };

  return StreetViewService;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
StreetViewService.contextType = MapContext;

var DirectionsService =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DirectionsService, _React$PureComponent);

  function DirectionsService() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      directionsService: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setDirectionsServiceCallback = function () {
      if (_this.state.directionsService !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.directionsService);
      }
    };

    return _this;
  }

  var _proto = DirectionsService.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!this.props.options ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "DirectionsService expected options object as parameter, but got %s", this.props.options) : undefined : void 0;
    var directionsService = new google.maps.DirectionsService();

    function setDirectionsService() {
      return {
        directionsService: directionsService
      };
    }

    this.setState(setDirectionsService, this.setDirectionsServiceCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.directionsService !== null) {
      this.state.directionsService.route(this.props.options, this.props.callback);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.directionsService !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.directionsService);
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return DirectionsService;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var eventMap$g = {
  onDirectionsChanged: "directions_changed"
};
var updaterMap$g = {
  directions: function directions(instance, _directions) {
    instance.setDirections(_directions);
  },
  map: function map(instance, _map) {
    instance.setMap(_map);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  panel: function panel(instance, _panel) {
    instance.setPanel(_panel);
  },
  routeIndex: function routeIndex(instance, _routeIndex) {
    instance.setRouteIndex(_routeIndex);
  }
};
var DirectionsRenderer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DirectionsRenderer, _React$PureComponent);

  function DirectionsRenderer() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.state = {
      directionsRenderer: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setDirectionsRendererCallback = function () {
      if (_this.state.directionsRenderer !== null) {
        _this.state.directionsRenderer.setMap(_this.context);

        if (_this.props.onLoad) {
          _this.props.onLoad(_this.state.directionsRenderer);
        }
      }
    };

    return _this;
  }

  var _proto = DirectionsRenderer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var directionsRenderer = new google.maps.DirectionsRenderer(this.props.options);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$g,
      eventMap: eventMap$g,
      prevProps: {},
      nextProps: this.props,
      instance: directionsRenderer
    });
    this.setState(function setDirectionsRenderer() {
      return {
        directionsRenderer: directionsRenderer
      };
    }, this.setDirectionsRendererCallback);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.directionsRenderer !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$g,
        eventMap: eventMap$g,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.directionsRenderer
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.directionsRenderer !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.directionsRenderer);
      }

      unregisterEvents(this.registeredEvents);

      if (this.state.directionsRenderer) {
        this.state.directionsRenderer.setMap(null);
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return DirectionsRenderer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
DirectionsRenderer.contextType = MapContext;

var DistanceMatrixService =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(DistanceMatrixService, _React$PureComponent);

  function DistanceMatrixService() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.state = {
      distanceMatrixService: null
    };

    _this.setDistanceMatrixServiceCallbak = function () {
      if (_this.state.distanceMatrixService !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.distanceMatrixService);
      }
    };

    return _this;
  }

  var _proto = DistanceMatrixService.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!this.props.options ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'DistanceMatrixService expected options object as parameter, but go %s', this.props.options) : undefined : void 0;
    var distanceMatrixService = new google.maps.DistanceMatrixService();

    function setDistanceMatrixService() {
      return {
        distanceMatrixService: distanceMatrixService
      };
    }

    this.setState(setDistanceMatrixService, this.setDistanceMatrixServiceCallbak);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.state.distanceMatrixService !== null) {
      this.state.distanceMatrixService.getDistanceMatrix(this.props.options, this.props.callback);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.distanceMatrixService !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.distanceMatrixService);
      }
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
  };

  return DistanceMatrixService;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var eventMap$h = {
  onPlacesChanged: "places_changed"
};
var updaterMap$h = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds);
  }
};

var StandaloneSearchBox =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(StandaloneSearchBox, _React$PureComponent);

  function StandaloneSearchBox() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.state = {
      searchBox: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setSearchBoxCallback = function () {
      if (_this.state.searchBox !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.searchBox);
      }
    };

    return _this;
  }

  var _proto = StandaloneSearchBox.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!google.maps.places ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places) : undefined : void 0;

    if (this.containerElement !== null && this.containerElement.current !== null) {
      var input = this.containerElement.current.querySelector("input");

      if (input) {
        var searchBox = new google.maps.places.SearchBox( // @ts-ignore
        input, this.props.options);
        this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
          updaterMap: updaterMap$h,
          eventMap: eventMap$h,
          prevProps: {},
          nextProps: this.props,
          instance: searchBox
        });
        this.setState(function setSearchBox() {
          return {
            searchBox: searchBox
          };
        }, this.setSearchBoxCallback);
      }
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.state.searchBox !== null) {
      unregisterEvents(this.registeredEvents);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$h,
        eventMap: eventMap$h,
        prevProps: prevProps,
        nextProps: this.props,
        instance: this.state.searchBox
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.searchBox !== null) {
      if (this.props.onUnmount) {
        this.props.onUnmount(this.state.searchBox);
      }

      unregisterEvents(this.registeredEvents);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      ref: this.containerElement
    }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children));
  };

  return StandaloneSearchBox;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

StandaloneSearchBox.contextType = MapContext;

var eventMap$i = {
  onPlaceChanged: "place_changed"
};
var updaterMap$i = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds);
  },
  restrictions: function restrictions(instance, _restrictions) {
    instance.setComponentRestrictions(_restrictions);
  },
  fields: function fields(instance, _fields) {
    instance.setFields(_fields);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  types: function types(instance, _types) {
    instance.setTypes(_types);
  }
};
var Autocomplete =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Autocomplete, _React$PureComponent);

  function Autocomplete() {
    var _this;

    _this = _React$PureComponent.apply(this, arguments) || this;
    _this.registeredEvents = [];
    _this.containerElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    _this.state = {
      autocomplete: null
    }; // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name

    _this.setAutocompleteCallback = function () {
      if (_this.state.autocomplete !== null && _this.props.onLoad) {
        _this.props.onLoad(_this.state.autocomplete);
      }
    };

    return _this;
  }

  var _proto = Autocomplete.prototype;

  _proto.componentDidMount = function componentDidMount() {
    !!!google.maps.places ?  true ? invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places) : undefined : void 0; // TODO: why is this possibly null
    // @ts-ignore

    var input = this.containerElement.current.querySelector("input");

    if (input) {
      var autocomplete = new google.maps.places.Autocomplete(input, this.props.options);
      this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
        updaterMap: updaterMap$i,
        eventMap: eventMap$i,
        prevProps: {},
        nextProps: this.props,
        instance: autocomplete
      });
      this.setState(function setAutocomplete() {
        return {
          autocomplete: autocomplete
        };
      }, this.setAutocompleteCallback);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    unregisterEvents(this.registeredEvents);
    this.registeredEvents = applyUpdatersToPropsAndRegisterEvents({
      updaterMap: updaterMap$i,
      eventMap: eventMap$i,
      prevProps: prevProps,
      nextProps: this.props,
      instance: this.state.autocomplete
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.state.autocomplete !== null) {
      unregisterEvents(this.registeredEvents);
    }
  };

  _proto.render = function render() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      ref: this.containerElement
    }, react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children));
  };

  return Autocomplete;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Autocomplete.contextType = MapContext;


//# sourceMappingURL=reactgooglemapsapi.esm.js.map


/***/ }),

/***/ "./node_modules/@react-google-maps/infobox/dist/infobox.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@react-google-maps/infobox/dist/infobox.esm.js ***!
  \*********************************************************************/
/*! exports provided: InfoBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBox", function() { return InfoBox; });
var InfoBox =
/*#__PURE__*/
function () {
  function InfoBox(options) {
    if (options === void 0) {
      options = {};
    }

    this.extend(InfoBox, google.maps.OverlayView); // Standard options (in common with google.maps.InfoWindow):

    this.content = options.content || '';
    this.disableAutoPan = options.disableAutoPan || false;
    this.maxWidth = options.maxWidth || 0;
    this.pixelOffset = options.pixelOffset || new google.maps.Size(0, 0);
    this.position = options.position || new google.maps.LatLng(0, 0);
    this.zIndex = options.zIndex || null; // Additional options (unique to InfoBox):

    this.boxClass = options.boxClass || 'infoBox';
    this.boxStyle = options.boxStyle || {};
    this.closeBoxMargin = options.closeBoxMargin || '2px';
    this.closeBoxURL = options.closeBoxURL || 'http://www.google.com/intl/en_us/mapfiles/close.gif';

    if (options.closeBoxURL === '') {
      this.closeBoxURL = '';
    }

    this.infoBoxClearance = options.infoBoxClearance || new google.maps.Size(1, 1);

    if (typeof options.visible === 'undefined') {
      if (typeof options.isHidden === 'undefined') {
        options.visible = true;
      } else {
        options.visible = !options.isHidden;
      }
    }

    this.isHidden = !options.visible;
    this.alignBottom = options.alignBottom || false;
    this.pane = options.pane || 'floatPane';
    this.enableEventPropagation = options.enableEventPropagation || false;
    this.div = null;
    this.closeListener = null;
    this.moveListener = null;
    this.mapListener = null;
    this.contextListener = null;
    this.eventListeners = null;
    this.fixedWidthSet = null;
  }

  var _proto = InfoBox.prototype;

  _proto.createInfoBoxDiv = function createInfoBoxDiv() {
    var _this = this;

    // This handler prevents an event in the InfoBox from being passed on to the map.
    function cancelHandler(event) {
      event.cancelBubble = true;

      if (event.stopPropagation) {
        event.stopPropagation();
      }
    } // This handler ignores the current event in the InfoBox and conditionally prevents
    // the event from being passed on to the map. It is used for the contextmenu event.
    // eslint-disable-next-line  @getify/proper-arrows/this


    var ignoreHandler = function ignoreHandler(event) {
      event.returnValue = false;

      if (event.preventDefault) {
        event.preventDefault();
      }

      if (!_this.enableEventPropagation) {
        cancelHandler(event);
      }
    };

    if (!this.div) {
      this.div = document.createElement('div');
      this.setBoxStyle();

      if (typeof this.content === 'string') {
        this.div.innerHTML = this.getCloseBoxImg() + this.content;
      } else {
        this.div.innerHTML = this.getCloseBoxImg();
        this.div.appendChild(this.content);
      } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore


      var panes = this.getPanes();
      panes[this.pane].appendChild(this.div); // Add the InfoBox div to the DOM

      this.addClickHandler();

      if (this.div.style.width) {
        this.fixedWidthSet = true;
      } else {
        if (this.maxWidth !== 0 && this.div.offsetWidth > this.maxWidth) {
          this.div.style.width = this.maxWidth + 'px';
          this.fixedWidthSet = true;
        } else {
          // The following code is needed to overcome problems with MSIE
          var bw = this.getBoxWidths();
          this.div.style.width = this.div.offsetWidth - bw.left - bw.right + 'px';
          this.fixedWidthSet = false;
        }
      }

      this.panBox(this.disableAutoPan);

      if (!this.enableEventPropagation) {
        this.eventListeners = []; // Cancel event propagation.
        // Note: mousemove not included (to resolve Issue 152)

        var events = ['mousedown', 'mouseover', 'mouseout', 'mouseup', 'click', 'dblclick', 'touchstart', 'touchend', 'touchmove'];

        for (var i = 0; i < events.length; i++) {
          this.eventListeners.push(google.maps.event.addDomListener(this.div, events[i], cancelHandler));
        } // Workaround for Google bug that causes the cursor to change to a pointer
        // when the mouse moves over a marker underneath InfoBox.


        this.eventListeners.push(google.maps.event.addDomListener(this.div, 'mouseover', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
        function () {
          if (_this.div) {
            _this.div.style.cursor = 'default';
          }
        }));
      }

      this.contextListener = google.maps.event.addDomListener(this.div, 'contextmenu', ignoreHandler);
      /**
       * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
       * @name InfoBox#domready
       * @event
       */

      google.maps.event.trigger(this, 'domready');
    }
  };

  _proto.getCloseBoxImg = function getCloseBoxImg() {
    var img = '';

    if (this.closeBoxURL !== '') {
      img = '<img';
      img += " src='" + this.closeBoxURL + "'";
      img += ' align=right'; // Do this because Opera chokes on style='float: right;'

      img += " style='";
      img += ' position: relative;'; // Required by MSIE

      img += ' cursor: pointer;';
      img += ' margin: ' + this.closeBoxMargin + ';';
      img += "'>";
    }

    return img;
  };

  _proto.addClickHandler = function addClickHandler() {
    if (this.div && this.div.firstChild && this.closeBoxURL !== '') {
      var closeBox = this.div.firstChild;
      this.closeListener = google.maps.event.addDomListener(closeBox, 'click', this.getCloseClickHandler());
    } else {
      this.closeListener = null;
    }
  };

  _proto.getCloseClickHandler = function getCloseClickHandler() {
    var _this2 = this;

    // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    return function (event) {
      // 1.0.3 fix: Always prevent propagation of a close box click to the map:
      event.cancelBubble = true;

      if (event.stopPropagation) {
        event.stopPropagation();
      }
      /**
       * This event is fired when the InfoBox's close box is clicked.
       * @name InfoBox#closeclick
       * @event
       */


      google.maps.event.trigger(_this2, 'closeclick');

      _this2.close();
    };
  };

  _proto.panBox = function panBox(disablePan) {
    if (this.div && !disablePan) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      var map = this.getMap(); // Only pan if attached to map, not panorama

      if (map instanceof google.maps.Map) {
        var xOffset = 0;
        var yOffset = 0;
        var bounds = map.getBounds();

        if (bounds && !bounds.contains(this.position)) {
          // Marker not in visible area of map, so set center
          // of map to the marker position first.
          map.setCenter(this.position);
        }

        var mapDiv = map.getDiv(); // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore

        var mapWidth = mapDiv.offsetWidth; // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore

        var mapHeight = mapDiv.offsetHeight;
        var iwOffsetX = this.pixelOffset.width;
        var iwOffsetY = this.pixelOffset.height;
        var iwWidth = this.div.offsetWidth;
        var iwHeight = this.div.offsetHeight;
        var padX = this.infoBoxClearance.width;
        var padY = this.infoBoxClearance.height; // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore

        var projection = this.getProjection();
        var pixPosition = projection.fromLatLngToContainerPixel(this.position);

        if (pixPosition.x < -iwOffsetX + padX) {
          xOffset = pixPosition.x + iwOffsetX - padX;
        } else if (pixPosition.x + iwWidth + iwOffsetX + padX > mapWidth) {
          xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
        }

        if (this.alignBottom) {
          if (pixPosition.y < -iwOffsetY + padY + iwHeight) {
            yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
          } else if (pixPosition.y + iwOffsetY + padY > mapHeight) {
            yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
          }
        } else {
          if (pixPosition.y < -iwOffsetY + padY) {
            yOffset = pixPosition.y + iwOffsetY - padY;
          } else if (pixPosition.y + iwHeight + iwOffsetY + padY > mapHeight) {
            yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
          }
        }

        if (!(xOffset === 0 && yOffset === 0)) {
          // Move the map to the shifted center.
          map.panBy(xOffset, yOffset);
        }
      }
    }
  };

  _proto.setBoxStyle = function setBoxStyle() {
    if (this.div) {
      // Apply style values from the style sheet defined in the boxClass parameter:
      this.div.className = this.boxClass; // Clear existing inline style values:

      this.div.style.cssText = ''; // Apply style values defined in the boxStyle parameter:

      var boxStyle = this.boxStyle;

      for (var i in boxStyle) {
        if (boxStyle.hasOwnProperty(i)) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          this.div.style[i] = boxStyle[i];
        }
      } // Fix for iOS disappearing InfoBox problem
      // See http://stackoverflow.com/questions/9229535/google-maps-markers-disappear-at-certain-zoom-level-only-on-iphone-ipad


      this.div.style.webkitTransform = 'translateZ(0)'; // Fix up opacity style for benefit of MSIE

      if (typeof this.div.style.opacity !== 'undefined' && this.div.style.opacity !== '') {
        // See http://www.quirksmode.org/css/opacity.html
        var opacity = parseFloat(this.div.style.opacity || ''); // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore

        this.div.style.msFilter = '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + opacity * 100 + ')"';
        this.div.style.filter = 'alpha(opacity=' + opacity * 100 + ')';
      } // Apply required styles


      this.div.style.position = 'absolute';
      this.div.style.visibility = 'hidden';

      if (this.zIndex !== null) {
        this.div.style.zIndex = this.zIndex + '';
      }

      if (!this.div.style.overflow) {
        this.div.style.overflow = 'auto';
      }
    }
  };

  _proto.getBoxWidths = function getBoxWidths() {
    var bw = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };

    if (!this.div) {
      return bw;
    }

    if (document.defaultView && document.defaultView.getComputedStyle) {
      var ownerDocument = this.div.ownerDocument;
      var computedStyle = ownerDocument && ownerDocument.defaultView ? ownerDocument.defaultView.getComputedStyle(this.div, '') : null;

      if (computedStyle) {
        // The computed styles are always in pixel units (good!)
        bw.top = parseInt(computedStyle.borderTopWidth || '', 10) || 0;
        bw.bottom = parseInt(computedStyle.borderBottomWidth || '', 10) || 0;
        bw.left = parseInt(computedStyle.borderLeftWidth || '', 10) || 0;
        bw.right = parseInt(computedStyle.borderRightWidth || '', 10) || 0;
      }
    } else if ( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    document.documentElement.currentStyle // MSIE
    ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        var currentStyle = this.div.currentStyle;

        if (currentStyle) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // The current styles may not be in pixel units, but assume they are (bad!)
          bw.top = parseInt(currentStyle.borderTopWidth || '', 10) || 0;
          bw.bottom = parseInt(currentStyle.borderBottomWidth || '', 10) || 0;
          bw.left = parseInt(currentStyle.borderLeftWidth || '', 10) || 0;
          bw.right = parseInt(currentStyle.borderRightWidth || '', 10) || 0;
        }
      }

    return bw;
  };

  _proto.onRemove = function onRemove() {
    if (this.div && this.div.parentNode) {
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  };

  _proto.draw = function draw() {
    this.createInfoBoxDiv();

    if (this.div) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      var projection = this.getProjection();
      var pixPosition = projection.fromLatLngToDivPixel(this.position);
      this.div.style.left = pixPosition.x + this.pixelOffset.width + 'px';

      if (this.alignBottom) {
        this.div.style.bottom = -(pixPosition.y + this.pixelOffset.height) + 'px';
      } else {
        this.div.style.top = pixPosition.y + this.pixelOffset.height + 'px';
      }

      if (this.isHidden) {
        this.div.style.visibility = 'hidden';
      } else {
        this.div.style.visibility = 'visible';
      }
    }
  };

  _proto.setOptions = function setOptions(options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof options.boxClass !== 'undefined') {
      // Must be first
      this.boxClass = options.boxClass;
      this.setBoxStyle();
    }

    if (typeof options.boxStyle !== 'undefined') {
      // Must be second
      this.boxStyle = options.boxStyle;
      this.setBoxStyle();
    }

    if (typeof options.content !== 'undefined') {
      this.setContent(options.content);
    }

    if (typeof options.disableAutoPan !== 'undefined') {
      this.disableAutoPan = options.disableAutoPan;
    }

    if (typeof options.maxWidth !== 'undefined') {
      this.maxWidth = options.maxWidth;
    }

    if (typeof options.pixelOffset !== 'undefined') {
      this.pixelOffset = options.pixelOffset;
    }

    if (typeof options.alignBottom !== 'undefined') {
      this.alignBottom = options.alignBottom;
    }

    if (typeof options.position !== 'undefined') {
      this.setPosition(options.position);
    }

    if (typeof options.zIndex !== 'undefined') {
      this.setZIndex(options.zIndex);
    }

    if (typeof options.closeBoxMargin !== 'undefined') {
      this.closeBoxMargin = options.closeBoxMargin;
    }

    if (typeof options.closeBoxURL !== 'undefined') {
      this.closeBoxURL = options.closeBoxURL;
    }

    if (typeof options.infoBoxClearance !== 'undefined') {
      this.infoBoxClearance = options.infoBoxClearance;
    }

    if (typeof options.isHidden !== 'undefined') {
      this.isHidden = options.isHidden;
    }

    if (typeof options.visible !== 'undefined') {
      this.isHidden = !options.visible;
    }

    if (typeof options.enableEventPropagation !== 'undefined') {
      this.enableEventPropagation = options.enableEventPropagation;
    }

    if (this.div) {
      this.draw();
    }
  };

  _proto.setContent = function setContent(content) {
    this.content = content;

    if (this.div) {
      if (this.closeListener) {
        google.maps.event.removeListener(this.closeListener);
        this.closeListener = null;
      } // Odd code required to make things work with MSIE.


      if (!this.fixedWidthSet) {
        this.div.style.width = '';
      }

      if (typeof content === 'string') {
        this.div.innerHTML = this.getCloseBoxImg() + content;
      } else {
        this.div.innerHTML = this.getCloseBoxImg();
        this.div.appendChild(content);
      } // Perverse code required to make things work with MSIE.
      // (Ensures the close box does, in fact, float to the right.)


      if (!this.fixedWidthSet) {
        this.div.style.width = this.div.offsetWidth + 'px';

        if (typeof content === 'string') {
          this.div.innerHTML = this.getCloseBoxImg() + content;
        } else {
          this.div.innerHTML = this.getCloseBoxImg();
          this.div.appendChild(content);
        }
      }

      this.addClickHandler();
    }
    /**
     * This event is fired when the content of the InfoBox changes.
     * @name InfoBox#content_changed
     * @event
     */


    google.maps.event.trigger(this, 'content_changed');
  };

  _proto.setPosition = function setPosition(latLng) {
    this.position = latLng;

    if (this.div) {
      this.draw();
    }
    /**
     * This event is fired when the position of the InfoBox changes.
     * @name InfoBox#position_changed
     * @event
     */


    google.maps.event.trigger(this, 'position_changed');
  };

  _proto.setVisible = function setVisible(isVisible) {
    this.isHidden = !isVisible;

    if (this.div) {
      this.div.style.visibility = this.isHidden ? 'hidden' : 'visible';
    }
  };

  _proto.setZIndex = function setZIndex(index) {
    this.zIndex = index;

    if (this.div) {
      this.div.style.zIndex = index + '';
    }
    /**
     * This event is fired when the zIndex of the InfoBox changes.
     * @name InfoBox#zindex_changed
     * @event
     */


    google.maps.event.trigger(this, 'zindex_changed');
  };

  _proto.getContent = function getContent() {
    return this.content;
  };

  _proto.getPosition = function getPosition() {
    return this.position;
  };

  _proto.getZIndex = function getZIndex() {
    return this.zIndex;
  };

  _proto.getVisible = function getVisible() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    var map = this.getMap();
    var isVisible;

    if (typeof map === 'undefined' || map === null) {
      isVisible = false;
    } else {
      isVisible = !this.isHidden;
    }

    return isVisible;
  };

  _proto.show = function show() {
    this.isHidden = false;

    if (this.div) {
      this.div.style.visibility = 'visible';
    }
  };

  _proto.hide = function hide() {
    this.isHidden = true;

    if (this.div) {
      this.div.style.visibility = 'hidden';
    }
  };

  _proto.open = function open(map, anchor) {
    var _this3 = this;

    if (anchor) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.position = anchor.getPosition();
      this.moveListener = google.maps.event.addListener(anchor, 'position_changed', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
      function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        var position = anchor.getPosition();

        _this3.setPosition(position);
      });
      this.mapListener = google.maps.event.addListener(anchor, 'map_changed', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
      function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        _this3.setMap(anchor.map);
      });
    } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore


    this.setMap(map);

    if (this.div) {
      this.panBox();
    }
  };

  _proto.close = function close() {
    if (this.closeListener) {
      google.maps.event.removeListener(this.closeListener);
      this.closeListener = null;
    }

    if (this.eventListeners) {
      for (var i = 0; i < this.eventListeners.length; i++) {
        google.maps.event.removeListener(this.eventListeners[i]);
      }

      this.eventListeners = null;
    }

    if (this.moveListener) {
      google.maps.event.removeListener(this.moveListener);
      this.moveListener = null;
    }

    if (this.mapListener) {
      google.maps.event.removeListener(this.mapListener);
      this.mapListener = null;
    }

    if (this.contextListener) {
      google.maps.event.removeListener(this.contextListener);
      this.contextListener = null;
    } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore


    this.setMap(null);
  };

  _proto.extend = function extend(obj1, obj2) {
    return function applyExtend(object) {
      // eslint-disable-next-line guard-for-in
      for (var property in object.prototype) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.prototype[property] = object.prototype[property];
      } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore


      return this;
    }.apply(obj1, [obj2]);
  };

  return InfoBox;
}();


//# sourceMappingURL=infobox.esm.js.map


/***/ }),

/***/ "./node_modules/@react-google-maps/marker-clusterer/dist/markerclusterer.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@react-google-maps/marker-clusterer/dist/markerclusterer.esm.js ***!
  \**************************************************************************************/
/*! exports provided: Cluster, ClusterIcon, Clusterer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cluster", function() { return Cluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterIcon", function() { return ClusterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clusterer", function() { return Clusterer; });
var ClusterIcon =
/*#__PURE__*/
function () {
  function ClusterIcon(cluster, styles) {
    cluster.getClusterer().extend(ClusterIcon, google.maps.OverlayView);
    this.cluster = cluster;
    this.className = this.cluster.getClusterer().getClusterClass();
    this.styles = styles;
    this.center = undefined;
    this.div = null;
    this.sums = null;
    this.visible = false;
    this.boundsChangedListener = null;
    this.url = '';
    this.height = 0;
    this.width = 0;
    this.anchorText = [0, 0];
    this.anchorIcon = [0, 0];
    this.textColor = 'black';
    this.textSize = 11;
    this.textDecoration = 'none';
    this.fontWeight = 'bold';
    this.fontStyle = 'normal';
    this.fontFamily = 'Arial,sans-serif';
    this.backgroundPosition = '0 0'; // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore

    this.setMap(cluster.getMap()); // Note: this causes onAdd to be called
  }

  var _proto = ClusterIcon.prototype;

  _proto.onAdd = function onAdd() {
    var _this = this;

    var cMouseDownInCluster;
    var cDraggingMapByCluster;
    this.div = document.createElement('div');
    this.div.className = this.className;

    if (this.visible) {
      this.show();
    } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore


    this.getPanes().overlayMouseTarget.appendChild(this.div); // Fix for Issue 157

    this.boundsChangedListener = google.maps.event.addListener( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.getMap(), 'boundschanged', function boundsChabged() {
      cDraggingMapByCluster = cMouseDownInCluster;
    });
    google.maps.event.addDomListener(this.div, 'mousedown', function onMouseDown() {
      cMouseDownInCluster = true;
      cDraggingMapByCluster = false;
    }); // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name

    google.maps.event.addDomListener(this.div, 'click', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function (event) {
      cMouseDownInCluster = false;

      if (!cDraggingMapByCluster) {
        var markerClusterer = _this.cluster.getClusterer();
        /**
         * This event is fired when a cluster marker is clicked.
         * @name MarkerClusterer#click
         * @param {Cluster} c The cluster that was clicked.
         * @event
         */


        google.maps.event.trigger(markerClusterer, 'click', _this.cluster);
        google.maps.event.trigger(markerClusterer, 'clusterclick', _this.cluster); // deprecated name
        // The default click handler follows. Disable it by setting
        // the zoomOnClick property to false.

        if (markerClusterer.getZoomOnClick()) {
          // Zoom into the cluster.
          var maxZoom = markerClusterer.getMaxZoom();

          var bounds = _this.cluster.getBounds(); // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore


          markerClusterer.getMap().fitBounds(bounds); // There is a fix for Issue 170 here:

          setTimeout(function timeout() {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            markerClusterer.getMap().fitBounds(bounds); // Don't zoom beyond the max zoom level
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore

            if (maxZoom !== null && markerClusterer.getMap().getZoom() > maxZoom) {
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              markerClusterer.getMap().setZoom(maxZoom + 1);
            }
          }, 100);
        } // Prevent event propagation to the map:


        event.cancelBubble = true;

        if (event.stopPropagation) {
          event.stopPropagation();
        }
      }
    });
    google.maps.event.addDomListener(this.div, 'mouseover', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function () {
      /**
       * This event is fired when the mouse moves over a cluster marker.
       * @name MarkerClusterer#mouseover
       * @param {Cluster} c The cluster that the mouse moved over.
       * @event
       */
      google.maps.event.trigger(_this.cluster.getClusterer(), 'mouseover', _this.cluster);
    }); // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name

    google.maps.event.addDomListener(this.div, 'mouseout', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function () {
      /**
       * This event is fired when the mouse moves out of a cluster marker.
       * @name MarkerClusterer#mouseout
       * @param {Cluster} c The cluster that the mouse moved out of.
       * @event
       */
      google.maps.event.trigger(_this.cluster.getClusterer(), 'mouseout', _this.cluster);
    });
  };

  _proto.onRemove = function onRemove() {
    if (this.div && this.div.parentNode) {
      this.hide();

      if (this.boundsChangedListener !== null) {
        google.maps.event.removeListener(this.boundsChangedListener);
      }

      google.maps.event.clearInstanceListeners(this.div);
      this.div.parentNode.removeChild(this.div);
      this.div = null;
    }
  };

  _proto.draw = function draw() {
    if (this.visible && this.div !== null && this.center) {
      var _this$getPosFromLatLn = this.getPosFromLatLng(this.center),
          x = _this$getPosFromLatLn.x,
          y = _this$getPosFromLatLn.y;

      this.div.style.top = y + 'px';
      this.div.style.left = x + 'px';
    }
  };

  _proto.hide = function hide() {
    if (this.div) {
      this.div.style.display = 'none';
    }

    this.visible = false;
  };

  _proto.show = function show() {
    if (this.div && this.center) {
      var img = '',
          divTitle = ''; // NOTE: values must be specified in px units

      var bp = this.backgroundPosition.split(' ');
      var spriteH = parseInt(bp[0].replace(/^\s+|\s+$/g, ''), 10);
      var spriteV = parseInt(bp[1].replace(/^\s+|\s+$/g, ''), 10);
      var pos = this.getPosFromLatLng(this.center);

      if (this.sums === null || typeof this.sums.title === 'undefined' || this.sums.title === '') {
        divTitle = this.cluster.getClusterer().getTitle();
      } else {
        divTitle = this.sums.title;
      }

      this.div.style.cssText = this.createCss(pos);
      img = "<img alt='" + divTitle + "' src='" + this.url + "' style='position: absolute; top: " + spriteV + 'px; left: ' + spriteH + 'px; '; // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      //@ts-ignore

      if (!this.cluster.getClusterer().enableRetinaIcons) {
        img += 'clip: rect(' + -1 * spriteV + 'px, ' + (-1 * spriteH + this.width) + 'px, ' + (-1 * spriteV + this.height) + 'px, ' + -1 * spriteH + 'px);';
      }

      img += "'>";
      this.div.innerHTML = img + "<div style='" + 'position: absolute;' + 'top: ' + this.anchorText[0] + 'px;' + 'left: ' + this.anchorText[1] + 'px;' + 'color: ' + this.textColor + ';' + 'font-size: ' + this.textSize + 'px;' + 'font-family: ' + this.fontFamily + ';' + 'font-weight: ' + this.fontWeight + ';' + 'font-style: ' + this.fontStyle + ';' + 'text-decoration: ' + this.textDecoration + ';' + 'text-align: center;' + 'width: ' + this.width + 'px;' + 'line-height:' + this.height + 'px;' + "'>" + // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.sums.text + '</div>';
      this.div.title = divTitle;
      this.div.style.display = '';
    }

    this.visible = true;
  };

  _proto.useStyle = function useStyle(sums) {
    this.sums = sums;
    var style = this.styles[Math.min(this.styles.length - 1, Math.max(0, sums.index - 1))];
    this.url = style.url;
    this.height = style.height;
    this.width = style.width;
    this.anchorText = style.anchorText || [0, 0];
    this.anchorIcon = style.anchorIcon || [this.height / 2, this.width / 2];
    this.textColor = style.textColor || 'black';
    this.textSize = style.textSize || 11;
    this.textDecoration = style.textDecoration || 'none';
    this.fontWeight = style.fontWeight || 'bold';
    this.fontStyle = style.fontStyle || 'normal';
    this.fontFamily = style.fontFamily || 'Arial,sans-serif';
    this.backgroundPosition = style.backgroundPosition || '0 0';
  };

  _proto.setCenter = function setCenter(center) {
    this.center = center;
  };

  _proto.createCss = function createCss(pos) {
    var style = [];
    style.push('cursor: pointer;');
    style.push('position: absolute; top: ' + pos.y + 'px; left: ' + pos.x + 'px;');
    style.push('width: ' + this.width + 'px; height: ' + this.height + 'px;');
    return style.join('');
  };

  _proto.getPosFromLatLng = function getPosFromLatLng(latlng) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    var pos = this.getProjection().fromLatLngToDivPixel(latlng);
    pos.x -= this.anchorIcon[1];
    pos.y -= this.anchorIcon[0];
    pos.x = pos.x;
    pos.y = pos.y;
    return pos;
  };

  return ClusterIcon;
}();

var Cluster =
/*#__PURE__*/
function () {
  function Cluster(markerClusterer) {
    this.markerClusterer = markerClusterer; // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore

    this.map = this.markerClusterer.getMap();
    this.gridSize = this.markerClusterer.getGridSize();
    this.minClusterSize = this.markerClusterer.getMinimumClusterSize();
    this.averageCenter = this.markerClusterer.getAverageCenter();
    this.markers = [];
    this.center = undefined;
    this.bounds = null;
    this.clusterIcon = new ClusterIcon(this, this.markerClusterer.getStyles());
  }

  var _proto = Cluster.prototype;

  _proto.getSize = function getSize() {
    return this.markers.length;
  };

  _proto.getMarkers = function getMarkers() {
    return this.markers;
  };

  _proto.getCenter = function getCenter() {
    return this.center;
  };

  _proto.getMap = function getMap() {
    return this.map;
  };

  _proto.getClusterer = function getClusterer() {
    return this.markerClusterer;
  };

  _proto.getBounds = function getBounds() {
    var bounds = new google.maps.LatLngBounds(this.center, this.center);
    var markers = this.getMarkers();

    for (var i = 0; i < markers.length; i++) {
      var position = markers[i].getPosition();

      if (position) {
        bounds.extend(position);
      }
    }

    return bounds;
  };

  _proto.remove = function remove() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.clusterIcon.setMap(null);
    this.markers = [];
    delete this.markers;
  };

  _proto.addMarker = function addMarker(marker) {
    if (this.isMarkerAlreadyAdded(marker)) {
      return false;
    }

    if (!this.center) {
      var position = marker.getPosition();

      if (position) {
        this.center = position;
        this.calculateBounds();
      }
    } else {
      if (this.averageCenter) {
        var _position = marker.getPosition();

        if (_position) {
          var length = this.markers.length + 1;
          this.center = new google.maps.LatLng((this.center.lat() * (length - 1) + _position.lat()) / length, (this.center.lng() * (length - 1) + _position.lng()) / length);
          this.calculateBounds();
        }
      }
    }

    marker.isAdded = true;
    this.markers.push(marker);
    var mCount = this.markers.length;
    var maxZoom = this.markerClusterer.getMaxZoom();

    if (maxZoom !== null && this.map.getZoom() > maxZoom) {
      // Zoomed in past max zoom, so show the marker.
      if (marker.getMap() !== this.map) {
        marker.setMap(this.map);
      }
    } else if (mCount < this.minClusterSize) {
      // Min cluster size not reached so show the marker.
      if (marker.getMap() !== this.map) {
        marker.setMap(this.map);
      }
    } else if (mCount === this.minClusterSize) {
      // Hide the markers that were showing.
      for (var i = 0; i < mCount; i++) {
        this.markers[i].setMap(null);
      }
    } else {
      marker.setMap(null);
    }

    this.updateIcon();
    return true;
  };

  _proto.isMarkerInClusterBounds = function isMarkerInClusterBounds(marker) {
    if (this.bounds !== null) {
      var position = marker.getPosition();

      if (position) {
        return this.bounds.contains(position);
      }
    }

    return false;
  };

  _proto.calculateBounds = function calculateBounds() {
    this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
  };

  _proto.updateIcon = function updateIcon() {
    var mCount = this.markers.length;
    var maxZoom = this.markerClusterer.getMaxZoom();

    if (maxZoom !== null && this.map.getZoom() > maxZoom) {
      this.clusterIcon.hide();
      return;
    }

    if (mCount < this.minClusterSize) {
      // Min cluster size not yet reached.
      this.clusterIcon.hide();
      return;
    }

    if (this.center) {
      this.clusterIcon.setCenter(this.center);
    }

    this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length));
    this.clusterIcon.show();
  };

  _proto.isMarkerAlreadyAdded = function isMarkerAlreadyAdded(marker) {
    if (this.markers.indexOf) {
      return this.markers.includes(marker);
    } else {
      for (var i = 0; i < this.markers.length; i++) {
        if (marker === this.markers[i]) {
          return true;
        }
      }
    }

    return false;
  };

  return Cluster;
}();

/* eslint-disable filenames/match-regex */

var CALCULATOR = function CALCULATOR(markers, numStyles) {
  var index = 0;
  var title = '';
  var count = markers.length.toString();
  var dv = count;

  while (dv !== 0) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    dv = parseInt(dv, 10) / 10;
    index++;
  }

  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index,
    title: title
  };
};

var BATCH_SIZE = 2000;
var BATCH_SIZE_IE = 500;
var IMAGE_PATH = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
var IMAGE_EXTENSION = 'png';
var IMAGE_SIZES = [53, 56, 66, 78, 90];
var CLUSTERER_CLASS = 'cluster';
var Clusterer =
/*#__PURE__*/
function () {
  function Clusterer(map, optMarkers, optOptions) {
    if (optMarkers === void 0) {
      optMarkers = [];
    }

    if (optOptions === void 0) {
      optOptions = {};
    }

    this.extend(Clusterer, google.maps.OverlayView);
    this.markers = [];
    this.clusters = [];
    this.listeners = [];
    this.activeMap = null;
    this.ready = false;
    this.gridSize = optOptions.gridSize || 60;
    this.minClusterSize = optOptions.minimumClusterSize || 2;
    this.maxZoom = optOptions.maxZoom || null;
    this.styles = optOptions.styles || [];
    this.title = optOptions.title || '';
    this.zoomOnClick = true;

    if (optOptions.zoomOnClick !== undefined) {
      this.zoomOnClick = optOptions.zoomOnClick;
    }

    this.averageCenter = false;

    if (optOptions.averageCenter !== undefined) {
      this.averageCenter = optOptions.averageCenter;
    }

    this.ignoreHidden = false;

    if (optOptions.ignoreHidden !== undefined) {
      this.ignoreHidden = optOptions.ignoreHidden;
    }

    this.enableRetinaIcons = false;

    if (optOptions.enableRetinaIcons !== undefined) {
      this.enableRetinaIcons = optOptions.enableRetinaIcons;
    }

    this.imagePath = optOptions.imagePath || IMAGE_PATH;
    this.imageExtension = optOptions.imageExtension || IMAGE_EXTENSION;
    this.imageSizes = optOptions.imageSizes || IMAGE_SIZES;
    this.calculator = optOptions.calculator || CALCULATOR;
    this.batchSize = optOptions.batchSize || BATCH_SIZE;
    this.batchSizeIE = optOptions.batchSizeIE || BATCH_SIZE_IE;
    this.clusterClass = optOptions.clusterClass || CLUSTERER_CLASS;

    if (navigator.userAgent.toLowerCase().indexOf('msie') !== -1) {
      // Try to avoid IE timeout when processing a huge number of markers:
      this.batchSize = this.batchSizeIE;
    }

    this.timerRefStatic = null;
    this.setupStyles();
    this.addMarkers(optMarkers, true); // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore

    this.setMap(map); // Note: this causes onAdd to be called
  }

  var _proto = Clusterer.prototype;

  _proto.onAdd = function onAdd() {
    var _this = this;

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.activeMap = this.getMap();
    this.ready = true;
    this.repaint(); // Add the map event listeners

    this.listeners = [google.maps.event.addListener( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.getMap(), 'zoom_changed', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function () {
      _this.resetViewport(false); // Workaround for this Google bug: when map is at level 0 and "-" of
      // zoom slider is clicked, a "zoom_changed" event is fired even though
      // the map doesn't zoom out any further. In this situation, no "idle"
      // event is triggered so the cluster markers that have been removed
      // do not get redrawn. Same goes for a zoom in at maxZoom.


      if ( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      _this.getMap().getZoom() === (_this.get('minZoom') || 0) || // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      _this.getMap().getZoom() === _this.get('maxZoom')) {
        google.maps.event.trigger(_this, 'idle');
      }
    }), google.maps.event.addListener( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.getMap(), 'idle', // eslint-disable-next-line  @getify/proper-arrows/this, @getify/proper-arrows/name
    function () {
      _this.redraw();
    })];
  } // eslint-disable-next-line @getify/proper-arrows/this
  ;

  _proto.onRemove = function onRemove() {
    // Put all the managed markers back on the map:
    for (var i = 0; i < this.markers.length; i++) {
      if (this.markers[i].getMap() !== this.activeMap) {
        this.markers[i].setMap(this.activeMap);
      }
    } // Remove all clusters:


    for (var _i = 0; _i < this.clusters.length; _i++) {
      this.clusters[_i].remove();
    }

    this.clusters = []; // Remove map event listeners:

    for (var _i2 = 0; _i2 < this.listeners.length; _i2++) {
      google.maps.event.removeListener(this.listeners[_i2]);
    }

    this.listeners = [];
    this.activeMap = null;
    this.ready = false;
  } // eslint-disable-next-line @typescript-eslint/no-empty-function
  ;

  _proto.draw = function draw() {};

  _proto.setupStyles = function setupStyles() {
    if (this.styles.length > 0) {
      return;
    }

    for (var i = 0; i < this.imageSizes.length; i++) {
      this.styles.push({
        url: this.imagePath + (i + 1) + '.' + this.imageExtension,
        height: this.imageSizes[i],
        width: this.imageSizes[i]
      });
    }
  };

  _proto.fitMapToMarkers = function fitMapToMarkers() {
    var markers = this.getMarkers();
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < markers.length; i++) {
      var position = markers[i].getPosition();

      if (position) {
        bounds.extend(position);
      }
    } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore


    this.getMap().fitBounds(bounds);
  };

  _proto.getGridSize = function getGridSize() {
    return this.gridSize;
  };

  _proto.setGridSize = function setGridSize(gridSize) {
    this.gridSize = gridSize;
  };

  _proto.getMinimumClusterSize = function getMinimumClusterSize() {
    return this.minClusterSize;
  };

  _proto.setMinimumClusterSize = function setMinimumClusterSize(minimumClusterSize) {
    this.minClusterSize = minimumClusterSize;
  };

  _proto.getMaxZoom = function getMaxZoom() {
    return this.maxZoom;
  };

  _proto.setMaxZoom = function setMaxZoom(maxZoom) {
    this.maxZoom = maxZoom;
  };

  _proto.getStyles = function getStyles() {
    return this.styles;
  };

  _proto.setStyles = function setStyles(styles) {
    this.styles = styles;
  };

  _proto.getTitle = function getTitle() {
    return this.title;
  };

  _proto.setTitle = function setTitle(title) {
    this.title = title;
  };

  _proto.getZoomOnClick = function getZoomOnClick() {
    return this.zoomOnClick;
  };

  _proto.setZoomOnClick = function setZoomOnClick(zoomOnClick) {
    this.zoomOnClick = zoomOnClick;
  };

  _proto.getAverageCenter = function getAverageCenter() {
    return this.averageCenter;
  };

  _proto.setAverageCenter = function setAverageCenter(averageCenter) {
    this.averageCenter = averageCenter;
  };

  _proto.getIgnoreHidden = function getIgnoreHidden() {
    return this.ignoreHidden;
  };

  _proto.setIgnoreHidden = function setIgnoreHidden(ignoreHidden) {
    this.ignoreHidden = ignoreHidden;
  };

  _proto.getEnableRetinaIcons = function getEnableRetinaIcons() {
    return this.enableRetinaIcons;
  };

  _proto.setEnableRetinaIcons = function setEnableRetinaIcons(enableRetinaIcons) {
    this.enableRetinaIcons = enableRetinaIcons;
  };

  _proto.getImageExtension = function getImageExtension() {
    return this.imageExtension;
  };

  _proto.setImageExtension = function setImageExtension(imageExtension) {
    this.imageExtension = imageExtension;
  };

  _proto.getImagePath = function getImagePath() {
    return this.imagePath;
  };

  _proto.setImagePath = function setImagePath(imagePath) {
    this.imagePath = imagePath;
  };

  _proto.getImageSizes = function getImageSizes() {
    return this.imageSizes;
  };

  _proto.setImageSizes = function setImageSizes(imageSizes) {
    this.imageSizes = imageSizes;
  };

  _proto.getCalculator = function getCalculator() {
    return this.calculator;
  };

  _proto.setCalculator = function setCalculator(calculator) {
    this.calculator = calculator;
  };

  _proto.getBatchSizeIE = function getBatchSizeIE() {
    return this.batchSizeIE;
  };

  _proto.setBatchSizeIE = function setBatchSizeIE(batchSizeIE) {
    this.batchSizeIE = batchSizeIE;
  };

  _proto.getClusterClass = function getClusterClass() {
    return this.clusterClass;
  };

  _proto.setClusterClass = function setClusterClass(clusterClass) {
    this.clusterClass = clusterClass;
  };

  _proto.getMarkers = function getMarkers() {
    return this.markers;
  };

  _proto.getTotalMarkers = function getTotalMarkers() {
    return this.markers.length;
  };

  _proto.getClusters = function getClusters() {
    return this.clusters;
  };

  _proto.getTotalClusters = function getTotalClusters() {
    return this.clusters.length;
  };

  _proto.addMarker = function addMarker(marker, optNoDraw) {
    this.pushMarkerTo(marker);

    if (!optNoDraw) {
      this.redraw();
    }
  };

  _proto.addMarkers = function addMarkers(markers, optNoDraw) {
    for (var key in markers) {
      if (markers.hasOwnProperty(key)) {
        this.pushMarkerTo(markers[key]);
      }
    }

    if (!optNoDraw) {
      this.redraw();
    }
  };

  _proto.pushMarkerTo = function pushMarkerTo(marker) {
    var _this2 = this;

    // If the marker is draggable add a listener so we can update the clusters on the dragend:
    if (marker.getDraggable()) {
      // eslint-disable-next-line @getify/proper-arrows/name, @getify/proper-arrows/this
      google.maps.event.addListener(marker, 'dragend', function () {
        if (_this2.ready) {
          marker.isAdded = false;

          _this2.repaint();
        }
      });
    }

    marker.isAdded = false;
    this.markers.push(marker);
  };

  _proto.removeMarker_ = function removeMarker_(marker) {
    var index = -1;

    if (this.markers.indexOf) {
      index = this.markers.indexOf(marker);
    } else {
      for (var i = 0; i < this.markers.length; i++) {
        if (marker === this.markers[i]) {
          index = i;
          break;
        }
      }
    }

    if (index === -1) {
      // Marker is not in our list of markers, so do nothing:
      return false;
    }

    marker.setMap(null);
    this.markers.splice(index, 1); // Remove the marker from the list of managed markers

    return true;
  };

  _proto.removeMarker = function removeMarker(marker, optNoDraw) {
    var removed = this.removeMarker_(marker);

    if (!optNoDraw && removed) {
      this.repaint();
    }

    return removed;
  };

  _proto.removeMarkers = function removeMarkers(markers, optNoDraw) {
    var removed = false;

    for (var i = 0; i < markers.length; i++) {
      removed = removed || this.removeMarker_(markers[i]);
    }

    if (!optNoDraw && removed) {
      this.repaint();
    }

    return removed;
  };

  _proto.clearMarkers = function clearMarkers() {
    this.resetViewport(true);
    this.markers = [];
  };

  _proto.repaint = function repaint() {
    var oldClusters = this.clusters.slice();
    this.clusters = [];
    this.resetViewport(false);
    this.redraw(); // Remove the old clusters.
    // Do it in a timeout to prevent blinking effect.

    setTimeout(function timeout() {
      for (var i = 0; i < oldClusters.length; i++) {
        oldClusters[i].remove();
      }
    }, 0);
  };

  _proto.getExtendedBounds = function getExtendedBounds(bounds) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    var projection = this.getProjection(); // Convert the points to pixels and the extend out by the grid size.

    var trPix = projection.fromLatLngToDivPixel( // Turn the bounds into latlng.
    new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng()));
    trPix.x += this.gridSize;
    trPix.y -= this.gridSize;
    var blPix = projection.fromLatLngToDivPixel( // Turn the bounds into latlng.
    new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng()));
    blPix.x -= this.gridSize;
    blPix.y += this.gridSize; // Extend the bounds to contain the new bounds.

    bounds.extend( // Convert the pixel points back to LatLng nw
    projection.fromDivPixelToLatLng(trPix));
    bounds.extend( // Convert the pixel points back to LatLng sw
    projection.fromDivPixelToLatLng(blPix));
    return bounds;
  };

  _proto.redraw = function redraw() {
    // Redraws all the clusters.
    this.createClusters(0);
  };

  _proto.resetViewport = function resetViewport(optHide) {
    // Remove all the clusters
    for (var i = 0; i < this.clusters.length; i++) {
      this.clusters[i].remove();
    }

    this.clusters = []; // Reset the markers to not be added and to be removed from the map.

    for (var _i3 = 0; _i3 < this.markers.length; _i3++) {
      var marker = this.markers[_i3];
      marker.isAdded = false;

      if (optHide) {
        marker.setMap(null);
      }
    }
  };

  _proto.distanceBetweenPoints = function distanceBetweenPoints(p1, p2) {
    var R = 6371; // Radius of the Earth in km

    var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
    var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  };

  _proto.isMarkerInBounds = function isMarkerInBounds(marker, bounds) {
    var position = marker.getPosition();

    if (position) {
      return bounds.contains(position);
    }

    return false;
  };

  _proto.addToClosestCluster = function addToClosestCluster(marker) {
    var cluster;
    var distance = 40000; // Some large number

    var clusterToAddTo = null;

    for (var i = 0; i < this.clusters.length; i++) {
      cluster = this.clusters[i];
      var center = cluster.getCenter();
      var position = marker.getPosition();

      if (center && position) {
        var d = this.distanceBetweenPoints(center, position);

        if (d < distance) {
          distance = d;
          clusterToAddTo = cluster;
        }
      }
    }

    if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
      clusterToAddTo.addMarker(marker);
    } else {
      cluster = new Cluster(this);
      cluster.addMarker(marker);
      this.clusters.push(cluster);
    }
  };

  _proto.createClusters = function createClusters(iFirst) {
    var _this3 = this;

    if (!this.ready) {
      return;
    } // Cancel previous batch processing if we're working on the first batch:


    if (iFirst === 0) {
      /**
       * This event is fired when the <code>Clusterer</code> begins
       *  clustering markers.
       * @name Clusterer#clusteringbegin
       * @param {Clusterer} mc The Clusterer whose markers are being clustered.
       * @event
       */
      google.maps.event.trigger(this, 'clusteringbegin', this);

      if (this.timerRefStatic !== null) {
        window.clearTimeout(this.timerRefStatic);
        delete this.timerRefStatic;
      }
    } // Get our current map view bounds.
    // Create a new bounds object so we don't affect the map.
    //
    // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:


    var mapBounds = // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.getMap().getZoom() > 3 ? new google.maps.LatLngBounds( // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.getMap().getBounds().getSouthWest(), // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.getMap().getBounds().getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
    var bounds = this.getExtendedBounds(mapBounds);
    var iLast = Math.min(iFirst + this.batchSize, this.markers.length);

    for (var i = iFirst; i < iLast; i++) {
      var marker = this.markers[i];

      if (!marker.isAdded && this.isMarkerInBounds(marker, bounds)) {
        if (!this.ignoreHidden || this.ignoreHidden && marker.getVisible()) {
          this.addToClosestCluster(marker);
        }
      }
    }

    if (iLast < this.markers.length) {
      this.timerRefStatic = window.setTimeout( // eslint-disable-next-line @getify/proper-arrows/this, @getify/proper-arrows/name
      function () {
        _this3.createClusters(iLast);
      }, 0);
    } else {
      this.timerRefStatic = null;
      /**
       * This event is fired when the <code>Clusterer</code> stops
       *  clustering markers.
       * @name Clusterer#clusteringend
       * @param {Clusterer} mc The Clusterer whose markers are being clustered.
       * @event
       */

      google.maps.event.trigger(this, 'clusteringend', this);
    }
  };

  _proto.extend = function extend(obj1, obj2) {
    return function applyExtend(object) {
      // eslint-disable-next-line guard-for-in
      for (var property in object.prototype) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.prototype[property] = object.prototype[property];
      } // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore


      return this;
    }.apply(obj1, [obj2]);
  };

  return Clusterer;
}();


//# sourceMappingURL=markerclusterer.esm.js.map


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/react-select/async/dist/react-select.browser.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-select/async/dist/react-select.browser.esm.js ***!
  \**************************************************************************/
/*! exports provided: default, defaultProps, makeAsyncSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncSelect", function() { return makeAsyncSelect; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _dist_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../dist/chunk-39d3fda8.browser.esm.js */ "./node_modules/react-select/dist/chunk-39d3fda8.browser.esm.js");
/* harmony import */ var _dist_chunk_80640036_browser_esm_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../dist/chunk-80640036.browser.esm.js */ "./node_modules/react-select/dist/chunk-80640036.browser.esm.js");
/* harmony import */ var _dist_base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../dist/base/dist/react-select-cac0a5ae.browser.esm.js */ "./node_modules/react-select/dist/base/dist/react-select-cac0a5ae.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _dist_chunk_b36baf1a_browser_esm_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../dist/chunk-b36baf1a.browser.esm.js */ "./node_modules/react-select/dist/chunk-b36baf1a.browser.esm.js");

























var defaultProps = {
  cacheOptions: false,
  defaultOptions: false,
  filterOption: null
};
var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Async, _Component);

    function Async(props) {
      var _this;

      Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Async);

      _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Async).call(this));

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "select", void 0);

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "lastRequest", void 0);

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "mounted", false);

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "optionsCache", {});

      Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this)), "handleInputChange", function (newValue, actionMeta) {
        var _this$props = _this.props,
            cacheOptions = _this$props.cacheOptions,
            onInputChange = _this$props.onInputChange; // TODO

        var inputValue = Object(_dist_chunk_39d3fda8_browser_esm_js__WEBPACK_IMPORTED_MODULE_17__["k"])(newValue, actionMeta, onInputChange);

        if (!inputValue) {
          delete _this.lastRequest;

          _this.setState({
            inputValue: '',
            loadedInputValue: '',
            loadedOptions: [],
            isLoading: false,
            passEmptyOptions: false
          });

          return;
        }

        if (cacheOptions && _this.optionsCache[inputValue]) {
          _this.setState({
            inputValue: inputValue,
            loadedInputValue: inputValue,
            loadedOptions: _this.optionsCache[inputValue],
            isLoading: false,
            passEmptyOptions: false
          });
        } else {
          var request = _this.lastRequest = {};

          _this.setState({
            inputValue: inputValue,
            isLoading: true,
            passEmptyOptions: !_this.state.loadedInputValue
          }, function () {
            _this.loadOptions(inputValue, function (options) {
              if (!_this.mounted) return;

              if (options) {
                _this.optionsCache[inputValue] = options;
              }

              if (request !== _this.lastRequest) return;
              delete _this.lastRequest;

              _this.setState({
                isLoading: false,
                loadedInputValue: inputValue,
                loadedOptions: options || [],
                passEmptyOptions: false
              });
            });
          });
        }

        return inputValue;
      });

      _this.state = {
        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
        inputValue: typeof props.inputValue !== 'undefined' ? props.inputValue : '',
        isLoading: props.defaultOptions === true,
        loadedOptions: [],
        passEmptyOptions: false
      };
      return _this;
    }

    Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Async, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.mounted = true;
        var defaultOptions = this.props.defaultOptions;
        var inputValue = this.state.inputValue;

        if (defaultOptions === true) {
          this.loadOptions(inputValue, function (options) {
            if (!_this2.mounted) return;
            var isLoading = !!_this2.lastRequest;

            _this2.setState({
              defaultOptions: options || [],
              isLoading: isLoading
            });
          });
        }
      }
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        // if the cacheOptions prop changes, clear the cache
        if (nextProps.cacheOptions !== this.props.cacheOptions) {
          this.optionsCache = {};
        }

        if (nextProps.defaultOptions !== this.props.defaultOptions) {
          this.setState({
            defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : undefined
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "loadOptions",
      value: function loadOptions(inputValue, callback) {
        var loadOptions = this.props.loadOptions;
        if (!loadOptions) return callback();
        var loader = loadOptions(inputValue, callback);

        if (loader && typeof loader.then === 'function') {
          loader.then(callback, function () {
            return callback();
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props2 = this.props,
            loadOptions = _this$props2.loadOptions,
            props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props2, ["loadOptions"]);

        var _this$state = this.state,
            defaultOptions = _this$state.defaultOptions,
            inputValue = _this$state.inputValue,
            isLoading = _this$state.isLoading,
            loadedInputValue = _this$state.loadedInputValue,
            loadedOptions = _this$state.loadedOptions,
            passEmptyOptions = _this$state.passEmptyOptions;
        var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(SelectComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
          ref: function ref(_ref) {
            _this3.select = _ref;
          },
          options: options,
          isLoading: isLoading,
          onInputChange: this.handleInputChange
        }));
      }
    }]);

    return Async;
  }(react__WEBPACK_IMPORTED_MODULE_11__["Component"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(_class, "defaultProps", defaultProps), _temp;
};
var SelectState = Object(_dist_chunk_b36baf1a_browser_esm_js__WEBPACK_IMPORTED_MODULE_23__["m"])(_dist_base_dist_react_select_cac0a5ae_browser_esm_js__WEBPACK_IMPORTED_MODULE_19__["S"]);
var Async = makeAsyncSelect(SelectState);

/* harmony default export */ __webpack_exports__["default"] = (Async);



/***/ })

}]);