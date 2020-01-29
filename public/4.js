(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@popmotion/easing/dist/easing.es.js":
/*!**********************************************************!*\
  !*** ./node_modules/@popmotion/easing/dist/easing.es.js ***!
  \**********************************************************/
/*! exports provided: reversed, mirrored, createReversedEasing, createMirroredEasing, createExpoIn, createBackIn, createAnticipateEasing, linear, easeIn, easeOut, easeInOut, circIn, circOut, circInOut, backIn, backOut, backInOut, anticipate, bounceOut, bounceIn, bounceInOut, cubicBezier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reversed", function() { return reversed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrored", function() { return mirrored; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReversedEasing", function() { return createReversedEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMirroredEasing", function() { return createMirroredEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return createExpoIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return createBackIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnticipateEasing", function() { return createAnticipateEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return easeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return easeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return circIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return circOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return circInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return anticipate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return cubicBezier; });
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var reversed = function (easing) {
    return function (p) {
        return 1 - easing(1 - p);
    };
};
var mirrored = function (easing) {
    return function (p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
var createReversedEasing = reversed;
var createMirroredEasing = mirrored;
var createExpoIn = function (power) {
    return function (p) {
        return Math.pow(p, power);
    };
};
var createBackIn = function (power) {
    return function (p) {
        return p * p * ((power + 1) * p - power);
    };
};
var createAnticipateEasing = function (power) {
    var backEasing = createBackIn(power);
    return function (p) {
        return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};
var linear = function (p) {
    return p;
};
var easeIn = /*#__PURE__*/createExpoIn(2);
var easeOut = /*#__PURE__*/reversed(easeIn);
var easeInOut = /*#__PURE__*/mirrored(easeIn);
var circIn = function (p) {
    return 1 - Math.sin(Math.acos(p));
};
var circOut = /*#__PURE__*/reversed(circIn);
var circInOut = /*#__PURE__*/mirrored(circOut);
var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = /*#__PURE__*/reversed(backIn);
var backInOut = /*#__PURE__*/mirrored(backIn);
var anticipate = /*#__PURE__*/createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
var ca = 4356.0 / 361.0;
var cb = 35442.0 / 1805.0;
var cc = 16061.0 / 1805.0;
var bounceOut = function (p) {
    var p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = function (p) {
    return 1.0 - bounceOut(1.0 - p);
};
var bounceInOut = function (p) {
    return p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
};
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
var a = function (a1, a2) {
    return 1.0 - 3.0 * a2 + 3.0 * a1;
};
var b = function (a1, a2) {
    return 3.0 * a2 - 6.0 * a1;
};
var c = function (a1) {
    return 3.0 * a1;
};
var getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
function cubicBezier(mX1, mY1, mX2, mY2) {
    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
    var binarySubdivide = function (aX, aA, aB) {
        var i = 0;
        var currentX;
        var currentT;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
    };
    var newtonRaphsonIterate = function (aX, aGuessT) {
        var i = 0;
        var currentSlope = 0;
        var currentX;
        for (; i < NEWTON_ITERATIONS; ++i) {
            currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) {
                return aGuessT;
            }
            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    };
    var calcSampleValues = function () {
        for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
            sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
        }
    };
    var getTForX = function (aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = K_SPLINE_TABLE_SIZE - 1;
        var dist = 0.0;
        var guessForT = 0.0;
        var initialSlope = 0.0;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += K_SAMPLE_STEP_SIZE;
        }
        --currentSample;
        dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
        initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) {
            return newtonRaphsonIterate(aX, guessForT);
        } else if (initialSlope === 0.0) {
            return guessForT;
        } else {
            return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
        }
    };
    calcSampleValues();
    var resolver = function (aX) {
        var returnValue;
        if (mX1 === mY1 && mX2 === mY2) {
            returnValue = aX;
        } else if (aX === 0) {
            returnValue = 0;
        } else if (aX === 1) {
            returnValue = 1;
        } else {
            returnValue = calcBezier(getTForX(aX), mY1, mY2);
        }
        return returnValue;
    };
    return resolver;
}




/***/ }),

/***/ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@popmotion/popcorn/dist/popcorn.es.js ***!
  \************************************************************/
/*! exports provided: createAnticipateEasing, createBackIn, createExpoIn, cubicBezier, linear, easeIn, easeOut, easeInOut, circIn, circOut, circInOut, backIn, backOut, backInOut, anticipate, reversed, mirrored, angle, applyOffset, clamp, conditional, degreesToRadians, distance, interpolate, isPoint, isPoint3D, mix, mixArray, mixColor, mixComplex, mixObject, pipe, pointFromVector, progress, radiansToDegrees, smooth, smoothFrame, snap, springForce, springForceExpo, springForceLinear, steps, toDecimal, velocityPerFrame, velocityPerSecond, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyOffset", function() { return applyOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditional", function() { return conditional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint", function() { return isPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint3D", function() { return isPoint3D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixArray", function() { return mixArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixColor", function() { return mixColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixComplex", function() { return mixComplex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixObject", function() { return mixObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointFromVector", function() { return pointFromVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radiansToDegrees", function() { return radiansToDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smooth", function() { return smooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothFrame", function() { return smoothFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snap", function() { return snap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForce", function() { return springForce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForceExpo", function() { return springForceExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "springForceLinear", function() { return springForceLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDecimal", function() { return toDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerFrame", function() { return velocityPerFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return velocityPerSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap$1; });
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAnticipateEasing", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createAnticipateEasing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createBackIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["createExpoIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["cubicBezier"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["linear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["easeInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["circInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backIn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["backInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["anticipate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reversed", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["reversed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mirrored", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_3__["mirrored"]; });







var zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
var isNum = function (v) { return typeof v === 'number'; };

var radiansToDegrees = (function (radians) { return (radians * 180) / Math.PI; });

var angle = (function (a, b) {
    if (b === void 0) { b = zeroPoint; }
    return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
});

var applyOffset = (function (from, to) {
    var hasReceivedFrom = true;
    if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
    }
    return function (v) {
        if (hasReceivedFrom) {
            return v - from + to;
        }
        else {
            from = v;
            hasReceivedFrom = true;
            return to;
        }
    };
});

var curryRange = (function (func) { return function (min, max, v) { return (v !== undefined ? func(min, max, v) : function (cv) { return func(min, max, cv); }); }; });

var clamp = function (min, max, v) {
    return Math.min(Math.max(v, min), max);
};
var clamp$1 = curryRange(clamp);

var conditional = (function (check, apply) { return function (v) {
    return check(v) ? apply(v) : v;
}; });

var degreesToRadians = (function (degrees) { return (degrees * Math.PI) / 180; });

var isPoint = (function (point) {
    return point.hasOwnProperty('x') && point.hasOwnProperty('y');
});

var isPoint3D = (function (point) {
    return isPoint(point) && point.hasOwnProperty('z');
});

var distance1D = function (a, b) { return Math.abs(a - b); };
var distance = (function (a, b) {
    if (b === void 0) { b = zeroPoint; }
    if (isNum(a) && isNum(b)) {
        return distance1D(a, b);
    }
    else if (isPoint(a) && isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
    return 0;
});

var progress = (function (from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
});

var mix = (function (from, to, progress) {
    return -progress * from + progress * to + from;
});

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var mixLinearColor = function (from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_0__["hex"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["rgba"], style_value_types__WEBPACK_IMPORTED_MODULE_0__["hsla"]];
var getColorType = function (v) {
    return colorTypes.find(function (type) { return type.test(v); });
};
var notAnimatable = function (color$$1) {
    return "'" + color$$1 + "' is not an animatable color. Use the equivalent color code instead.";
};
var mixColor = (function (from, to) {
    var fromColorType = getColorType(from);
    var toColorType = getColorType(to);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!fromColorType, notAnimatable(from));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!toColorType, notAnimatable(to));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fromColorType.transform === toColorType.transform, 'Both colors must be hex/RGBA, OR both must be HSLA.');
    var fromColor = fromColorType.parse(from);
    var toColor = toColorType.parse(to);
    var blended = __assign({}, fromColor);
    var mixFunc = fromColorType === style_value_types__WEBPACK_IMPORTED_MODULE_0__["hsla"] ? mix : mixLinearColor;
    return function (v) {
        for (var key in blended) {
            if (key !== 'alpha') {
                blended[key] = mixFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
});

var combineFunctions = function (a, b) { return function (v) { return b(a(v)); }; };
var pipe = (function () {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
});

function getMixer(origin, target) {
    if (isNum(origin)) {
        return function (v) { return mix(origin, target, v); };
    }
    else if (style_value_types__WEBPACK_IMPORTED_MODULE_0__["color"].test(origin)) {
        return mixColor(origin, target);
    }
    else {
        return mixComplex(origin, target);
    }
}
var mixArray = function (from, to) {
    var output = from.slice();
    var numValues = output.length;
    var blendValue = from.map(function (fromThis, i) { return getMixer(fromThis, to[i]); });
    return function (v) {
        for (var i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
var mixObject = function (origin, target) {
    var output = __assign({}, origin, target);
    var blendValue = {};
    for (var key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return function (v) {
        for (var key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
function analyse(value) {
    var parsed = style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"].parse(value);
    var numValues = parsed.length;
    var numNumbers = 0;
    var numRGB = 0;
    var numHSL = 0;
    for (var i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === 'number') {
            numNumbers++;
        }
        else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            }
            else {
                numRGB++;
            }
        }
    }
    return { parsed: parsed, numNumbers: numNumbers, numRGB: numRGB, numHSL: numHSL };
}
var mixComplex = function (origin, target) {
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_0__["complex"].createTransformer(target);
    var originStats = analyse(origin);
    var targetStats = analyse(target);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(originStats.numHSL === targetStats.numHSL &&
        originStats.numRGB === targetStats.numRGB &&
        originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
};

var mixNumber = function (from, to) { return function (p) { return mix(from, to, p); }; };
function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    }
    else if (typeof v === 'string') {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_0__["color"].test(v)) {
            return mixColor;
        }
        else {
            return mixComplex;
        }
    }
    else if (Array.isArray(v)) {
        return mixArray;
    }
    else if (typeof v === 'object') {
        return mixObject;
    }
}
function createMixers(output, ease, customMixer) {
    var mixers = [];
    var mixerFactory = customMixer || detectMixerFactory(output[0]);
    var numMixers = output.length - 1;
    for (var i = 0; i < numMixers; i++) {
        var mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            var easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate(_a, _b) {
    var from = _a[0], to = _a[1];
    var mixer = _b[0];
    return function (v) { return mixer(progress(from, to, v)); };
}
function slowInterpolate(input, mixers) {
    var inputLength = input.length;
    var lastInputIndex = inputLength - 1;
    return function (v) {
        var mixerIndex = 0;
        var foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        }
        else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            var i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        var progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.clamp, clamp = _c === void 0 ? true : _c, ease = _b.ease, mixer = _b.mixer;
    var inputLength = input.length;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(inputLength === output.length, 'Both input and output ranges must be the same length');
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    var mixers = createMixers(output, ease, mixer);
    var interpolator = inputLength === 2
        ? fastInterpolate(input, mixers)
        : slowInterpolate(input, mixers);
    return clamp
        ? pipe(clamp$1(input[0], input[inputLength - 1]), interpolator)
        : interpolator;
}

var pointFromVector = (function (origin, angle, distance) {
    angle = degreesToRadians(angle);
    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
});

var toDecimal = (function (num, precision) {
    if (precision === void 0) { precision = 2; }
    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
});

var smoothFrame = (function (prevValue, nextValue, duration, smoothing) {
    if (smoothing === void 0) { smoothing = 0; }
    return toDecimal(prevValue +
        (duration * (nextValue - prevValue)) / Math.max(smoothing, duration));
});

var smooth = (function (strength) {
    if (strength === void 0) { strength = 50; }
    var previousValue = 0;
    var lastUpdated = 0;
    return function (v) {
        var currentFramestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])().timestamp;
        var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta
            ? smoothFrame(previousValue, v, timeDelta, strength)
            : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
    };
});

var snap = (function (points) {
    if (typeof points === 'number') {
        return function (v) { return Math.round(v / points) * points; };
    }
    else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function (v) {
            var lastDistance = Math.abs(points[0] - v);
            for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                var point = points[i_1];
                var distance = Math.abs(point - v);
                if (distance === 0)
                    return point;
                if (distance > lastDistance)
                    return points[i_1 - 1];
                if (i_1 === numPoints_1 - 1)
                    return point;
                lastDistance = distance;
            }
        };
    }
});

var identity = function (v) { return v; };
var springForce = function (alterDisplacement) {
    if (alterDisplacement === void 0) { alterDisplacement = identity; }
    return curryRange(function (constant, origin, v) {
        var displacement = origin - v;
        var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
        return displacement <= 0
            ? origin + springModifiedDisplacement
            : origin - springModifiedDisplacement;
    });
};
var springForceLinear = springForce();
var springForceExpo = springForce(Math.sqrt);

var velocityPerFrame = (function (xps, frameDuration) {
    return isNum(xps) ? xps / (1000 / frameDuration) : 0;
});

var velocityPerSecond = (function (velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
});

var wrap = function (min, max, v) {
    var rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
var wrap$1 = curryRange(wrap);

var clampProgress = clamp$1(0, 1);
var steps = (function (steps, direction) {
    if (direction === void 0) { direction = 'end'; }
    return function (progress) {
        progress =
            direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        var expanded = progress * steps;
        var rounded = direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);
        return clampProgress(rounded / steps);
    };
});




/***/ }),

/***/ "./node_modules/framesync/dist/framesync.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/framesync/dist/framesync.es.js ***!
  \*****************************************************/
/*! exports provided: default, cancelSync, getFrameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelSync", function() { return cancelSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrameData", function() { return getFrameData; });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");


var prevTime = 0;
var onNextFrame = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined
    ? function (callback) { return window.requestAnimationFrame(callback); }
    : function (callback) {
        var timestamp = Date.now();
        var timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
        prevTime = timestamp + timeToCall;
        setTimeout(function () { return callback(prevTime); }, timeToCall);
    };

var createStep = (function (setRunNextFrame) {
    var processToRun = [];
    var processToRunNextFrame = [];
    var numThisFrame = 0;
    var isProcessing = false;
    var i = 0;
    var cancelled = new WeakSet();
    var toKeepAlive = new WeakSet();
    var renderStep = {
        cancel: function (process) {
            var indexOfCallback = processToRunNextFrame.indexOf(process);
            cancelled.add(process);
            if (indexOfCallback !== -1) {
                processToRunNextFrame.splice(indexOfCallback, 1);
            }
        },
        process: function (frame) {
            var _a;
            isProcessing = true;
            _a = [
                processToRunNextFrame,
                processToRun
            ], processToRun = _a[0], processToRunNextFrame = _a[1];
            processToRunNextFrame.length = 0;
            numThisFrame = processToRun.length;
            if (numThisFrame) {
                var process_1;
                for (i = 0; i < numThisFrame; i++) {
                    process_1 = processToRun[i];
                    process_1(frame);
                    if (toKeepAlive.has(process_1) === true && !cancelled.has(process_1)) {
                        renderStep.schedule(process_1);
                        setRunNextFrame(true);
                    }
                }
            }
            isProcessing = false;
        },
        schedule: function (process, keepAlive, immediate) {
            if (keepAlive === void 0) { keepAlive = false; }
            if (immediate === void 0) { immediate = false; }
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_0__["invariant"])(typeof process === 'function', 'Argument must be a function');
            var addToCurrentBuffer = immediate && isProcessing;
            var buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;
            cancelled.delete(process);
            if (keepAlive)
                toKeepAlive.add(process);
            if (buffer.indexOf(process) === -1) {
                buffer.push(process);
                if (addToCurrentBuffer)
                    numThisFrame = processToRun.length;
            }
        }
    };
    return renderStep;
});

var StepId;
(function (StepId) {
    StepId["Read"] = "read";
    StepId["Update"] = "update";
    StepId["Render"] = "render";
    StepId["PostRender"] = "postRender";
    StepId["FixedUpdate"] = "fixedUpdate";
})(StepId || (StepId = {}));

var maxElapsed = 40;
var defaultElapsed = (1 / 60) * 1000;
var useDefaultElapsed = true;
var willRunNextFrame = false;
var isProcessing = false;
var frame = {
    delta: 0,
    timestamp: 0
};
var stepsOrder = [
    StepId.Read,
    StepId.Update,
    StepId.Render,
    StepId.PostRender
];
var setWillRunNextFrame = function (willRun) { return (willRunNextFrame = willRun); };
var _a = stepsOrder.reduce(function (acc, key) {
    var step = createStep(setWillRunNextFrame);
    acc.sync[key] = function (process, keepAlive, immediate) {
        if (keepAlive === void 0) { keepAlive = false; }
        if (immediate === void 0) { immediate = false; }
        if (!willRunNextFrame)
            startLoop();
        step.schedule(process, keepAlive, immediate);
        return process;
    };
    acc.cancelSync[key] = function (process) { return step.cancel(process); };
    acc.steps[key] = step;
    return acc;
}, {
    steps: {},
    sync: {},
    cancelSync: {}
}), steps = _a.steps, sync = _a.sync, cancelSync = _a.cancelSync;
var processStep = function (stepId) { return steps[stepId].process(frame); };
var processFrame = function (timestamp) {
    willRunNextFrame = false;
    frame.delta = useDefaultElapsed
        ? defaultElapsed
        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    if (!useDefaultElapsed)
        defaultElapsed = frame.delta;
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (willRunNextFrame) {
        useDefaultElapsed = false;
        onNextFrame(processFrame);
    }
};
var startLoop = function () {
    willRunNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing)
        onNextFrame(processFrame);
};
var getFrameData = function () { return frame; };

/* harmony default export */ __webpack_exports__["default"] = (sync);



/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/*! exports provided: invariant, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/popmotion-pose/dist/popmotion-pose.es.js":
/*!***************************************************************!*\
  !*** ./node_modules/popmotion-pose/dist/popmotion-pose.es.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var pose_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pose-core */ "./node_modules/pose-core/dist/pose-core.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");






/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function () {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
}

var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));

var measureWithoutTransform = function (element) {
    var transform$$1 = element.style.transform;
    element.style.transform = '';
    var bbox = element.getBoundingClientRect();
    element.style.transform = transform$$1;
    return bbox;
};
var resolveProp = function (target, props) {
    return typeof target === 'function' ? target(props) : target;
};

var interpolate = popmotion__WEBPACK_IMPORTED_MODULE_0__["transform"].interpolate;
var singleAxisPointer = function (axis) {
    return function (from) {
        var _a;
        return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["pointer"])((_a = {}, _a[axis] = typeof from === 'string' ? parseFloat(from) : from, _a)).pipe(function (v) {
            return v[axis];
        });
    };
};
var pointerX = /*#__PURE__*/singleAxisPointer('x');
var pointerY = /*#__PURE__*/singleAxisPointer('y');
var createPointer = function (axisPointerCreator, min, max, measurement) {
    return function (transitionProps) {
        var from = transitionProps.from,
            type = transitionProps.type,
            dimensions = transitionProps.dimensions,
            dragBounds = transitionProps.dragBounds;
        var axisPointer = axisPointerCreator(dimensions.measurementAsPixels(measurement, from, type));
        var transformQueue = [];
        if (dragBounds) {
            var resolvedDragBounds_1 = resolveProp(dragBounds, transitionProps);
            if (resolvedDragBounds_1[min] !== undefined) {
                transformQueue.push(function (v) {
                    return Math.max(v, dimensions.measurementAsPixels(measurement, resolvedDragBounds_1[min], type));
                });
            }
            if (resolvedDragBounds_1[max] !== undefined) {
                transformQueue.push(function (v) {
                    return Math.min(v, dimensions.measurementAsPixels(measurement, resolvedDragBounds_1[max], type));
                });
            }
        }
        if (type === style_value_types__WEBPACK_IMPORTED_MODULE_2__["percent"]) {
            transformQueue.push(interpolate([0, dimensions.get(measurement)], [0, 100], { clamp: false }), function (v) {
                return v + '%';
            });
        }
        return transformQueue.length ? axisPointer.pipe.apply(axisPointer, transformQueue) : axisPointer;
    };
};
var just = function (from) {
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["action"])(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        update(from);
        complete();
    });
};
var underDampedSpring = function (_a) {
    var from = _a.from,
        velocity = _a.velocity,
        to = _a.to;
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["spring"])({
        from: from,
        to: to,
        velocity: velocity,
        stiffness: 500,
        damping: 25,
        restDelta: 0.5,
        restSpeed: 10
    });
};
var overDampedSpring = function (_a) {
    var from = _a.from,
        velocity = _a.velocity,
        to = _a.to;
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["spring"])({ from: from, to: to, velocity: velocity, stiffness: 700, damping: to === 0 ? 100 : 35 });
};
var linearTween = function (_a) {
    var from = _a.from,
        to = _a.to;
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["tween"])({ from: from, to: to, ease: _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["linear"] });
};
var intelligentTransition = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: overDampedSpring,
    scaleY: overDampedSpring,
    scale: overDampedSpring,
    opacity: linearTween,
    default: popmotion__WEBPACK_IMPORTED_MODULE_0__["tween"]
};
var dragAction = /*#__PURE__*/__assign({}, intelligentTransition, { x: /*#__PURE__*/createPointer(pointerX, 'left', 'right', BoundingBoxDimension.width), y: /*#__PURE__*/createPointer(pointerY, 'top', 'bottom', BoundingBoxDimension.height) });
var justAxis = function (_a) {
    var from = _a.from;
    return just(from);
};
var intelligentDragEnd = /*#__PURE__*/__assign({}, intelligentTransition, { x: justAxis, y: justAxis });
var defaultTransitions = /*#__PURE__*/new Map([['default', intelligentTransition], ['drag', dragAction], ['dragEnd', intelligentDragEnd]]);

var animationLookup = {
    tween: popmotion__WEBPACK_IMPORTED_MODULE_0__["tween"],
    spring: popmotion__WEBPACK_IMPORTED_MODULE_0__["spring"],
    decay: popmotion__WEBPACK_IMPORTED_MODULE_0__["decay"],
    keyframes: popmotion__WEBPACK_IMPORTED_MODULE_0__["keyframes"],
    physics: popmotion__WEBPACK_IMPORTED_MODULE_0__["physics"]
};
var easingLookup = {
    linear: _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["linear"],
    easeIn: _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["easeIn"],
    easeOut: _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["easeOut"],
    easeInOut: _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["easeInOut"],
    circIn: _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["circIn"],
    circOut: _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["circOut"],
    circInOut: _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["circInOut"],
    backIn: _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["backIn"],
    backOut: _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["backOut"],
    backInOut: _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["backInOut"],
    anticipate: _popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["anticipate"]
};

var auto = {
    test: function (v) {
        return v === 'auto';
    },
    parse: function (v) {
        return v;
    }
};
var valueTypeTests = [style_value_types__WEBPACK_IMPORTED_MODULE_2__["number"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["degrees"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["percent"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["px"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["vw"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["vh"], auto];
var testValueType = function (v) {
    return function (type) {
        return type.test(v);
    };
};
var getValueType = function (v) {
    return valueTypeTests.find(testValueType(v));
};

var createPassiveValue = function (init, parent, transform$$1) {
    var raw = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["value"])(transform$$1(init));
    parent.raw.subscribe(function (v) {
        return raw.update(transform$$1(v));
    });
    return { raw: raw };
};
var createValue = function (init) {
    var type = getValueType(init);
    var raw = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["value"])(init);
    return { raw: raw, type: type };
};
var addActionDelay = function (delay$$1, transition) {
    if (delay$$1 === void 0) {
        delay$$1 = 0;
    }
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["chain"])(Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["delay"])(delay$$1), transition);
};
var isCubicBezierArgs = function (args) {
    return typeof args[0] === 'number';
};
var getAction = function (v, _a, _b) {
    var from = _b.from,
        to = _b.to,
        velocity = _b.velocity;
    var _c = _a.type,
        type = _c === void 0 ? 'tween' : _c,
        definedEase = _a.ease,
        def = __rest(_a, ["type", "ease"]);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(animationLookup[type] !== undefined, "Invalid transition type '" + type + "'. Valid transition types are: tween, spring, decay, physics and keyframes.");
    var ease;
    if (type === 'tween') {
        if (typeof definedEase !== 'function') {
            if (typeof definedEase === 'string') {
                Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(easingLookup[definedEase] !== undefined, "Invalid easing type '" + definedEase + "'. popmotion.io/pose/api/config");
                ease = easingLookup[definedEase];
            } else if (Array.isArray(definedEase) && isCubicBezierArgs(definedEase)) {
                Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(definedEase.length === 4, "Cubic bezier arrays must contain four numerical values.");
                var x1 = definedEase[0],
                    y1 = definedEase[1],
                    x2 = definedEase[2],
                    y2 = definedEase[3];
                ease = Object(_popmotion_easing__WEBPACK_IMPORTED_MODULE_1__["cubicBezier"])(x1, y1, x2, y2);
            }
        }
    }
    ease = ease || definedEase;
    var baseProps = type !== 'keyframes' ? {
        from: from,
        to: to,
        velocity: velocity,
        ease: ease
    } : { ease: ease };
    return animationLookup[type](__assign({}, baseProps, def));
};
var isAction = function (action$$1) {
    return typeof action$$1.start !== 'undefined';
};
var pose = function (_a) {
    var transformPose = _a.transformPose,
        addListenerToValue = _a.addListenerToValue,
        extendAPI = _a.extendAPI,
        readValueFromSource = _a.readValueFromSource,
        posePriority = _a.posePriority,
        setValueNative = _a.setValueNative;
    return Object(pose_core__WEBPACK_IMPORTED_MODULE_3__["default"])({
        bindOnChange: function (values, onChange) {
            return function (key) {
                if (!values.has(key)) return;
                var raw = values.get(key).raw;
                raw.subscribe(onChange[key]);
            };
        },
        readValue: function (_a) {
            var raw = _a.raw;
            return raw.get();
        },
        setValue: function (_a, to) {
            var raw = _a.raw;
            return raw.update(to);
        },
        createValue: function (init, key, _a, _b) {
            var elementStyler = _a.elementStyler;
            var _c = _b === void 0 ? {} : _b,
                passiveParent = _c.passiveParent,
                passiveProps = _c.passiveProps;
            var val = passiveParent ? createPassiveValue(init, passiveParent, passiveProps) : createValue(init);
            val.raw.subscribe(addListenerToValue(key, elementStyler));
            return val;
        },
        convertValue: function (raw, key, _a) {
            var elementStyler = _a.elementStyler;
            raw.subscribe(addListenerToValue(key, elementStyler));
            return {
                raw: raw,
                type: getValueType(raw.get())
            };
        },
        getTransitionProps: function (_a, to) {
            var raw = _a.raw,
                type = _a.type;
            return {
                from: raw.get(),
                velocity: raw.getVelocity(),
                to: to,
                type: type
            };
        },
        resolveTarget: function (_, to) {
            return to;
        },
        selectValueToRead: function (_a) {
            var raw = _a.raw;
            return raw;
        },
        startAction: function (_a, action$$1, complete) {
            var raw = _a.raw;
            var reaction = {
                update: function (v) {
                    return raw.update(v);
                },
                complete: complete
            };
            return action$$1.start(reaction);
        },
        stopAction: function (action$$1) {
            return action$$1.stop();
        },
        getInstantTransition: function (_, _a) {
            var to = _a.to;
            return just(to);
        },
        convertTransitionDefinition: function (val, def, props) {
            if (isAction(def)) return def;
            var delay$$1 = def.delay,
                min = def.min,
                max = def.max,
                round = def.round,
                remainingDef = __rest(def, ["delay", "min", "max", "round"]);
            var action$$1 = getAction(val, remainingDef, props);
            var outputPipe = [];
            if (delay$$1) action$$1 = addActionDelay(delay$$1, action$$1);
            if (min !== undefined) outputPipe.push(function (v) {
                return Math.max(v, min);
            });
            if (max !== undefined) outputPipe.push(function (v) {
                return Math.min(v, max);
            });
            if (round) outputPipe.push(Math.round);
            return outputPipe.length ? action$$1.pipe.apply(action$$1, outputPipe) : action$$1;
        },
        setValueNative: setValueNative,
        addActionDelay: addActionDelay,
        defaultTransitions: defaultTransitions,
        transformPose: transformPose,
        readValueFromSource: readValueFromSource,
        posePriority: posePriority,
        extendAPI: extendAPI
    });
};

var createDimensions = function (element) {
    var hasMeasured = false;
    var current = {
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    };
    return {
        get: function (measurement) {
            return measurement ? current[measurement] : current;
        },
        measure: function () {
            current = element.getBoundingClientRect();
            hasMeasured = true;
            return current;
        },
        measurementAsPixels: function (measurement, value$$1, type) {
            return type === style_value_types__WEBPACK_IMPORTED_MODULE_2__["percent"] ? (typeof value$$1 === 'string' ? parseFloat(value$$1) : value$$1) / 100 * current[measurement] : value$$1;
        },
        has: function () {
            return hasMeasured;
        }
    };
};

var makeUIEventApplicator = function (_a) {
    var startEvents = _a.startEvents,
        endEvents = _a.endEvents,
        startPose = _a.startPose,
        endPose = _a.endPose,
        startCallback = _a.startCallback,
        endCallback = _a.endCallback,
        useDocumentToEnd = _a.useDocumentToEnd,
        preventScroll = _a.preventScroll;
    return function (element, activeActions, poser, config) {
        var startListener = startPose + 'Start';
        var endListener = startPose + 'End';
        var moveListener = startPose + 'Move';
        if (preventScroll) {
            var touchMoveListener = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["listen"])(element, 'touchmove', {
                passive: false
            }).start(function (e) {
                e.preventDefault();
            });
            activeActions.set(moveListener, touchMoveListener);
        }
        var eventStartListener = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["listen"])(element, startEvents).start(function (startEvent) {
            poser.unset(endPose);
            poser.set(startPose);
            if (startCallback && config[startCallback]) config[startCallback](startEvent);
            var eventEndListener = Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["listen"])(useDocumentToEnd ? document.documentElement : element, endEvents + (useDocumentToEnd ? ' mouseenter' : '')).start(function (endEvent) {
                if (useDocumentToEnd && endEvent.type === 'mouseenter' && endEvent.buttons === 1) {
                    return;
                }
                activeActions.get(endListener).stop();
                poser.unset(startPose);
                poser.set(endPose);
                if (endCallback && config[endCallback]) config[endCallback](endEvent);
            });
            activeActions.set(endListener, eventEndListener);
        });
        activeActions.set(startListener, eventStartListener);
    };
};
var events = {
    draggable: /*#__PURE__*/makeUIEventApplicator({
        startEvents: 'mousedown touchstart',
        endEvents: 'mouseup touchend',
        startPose: 'drag',
        endPose: 'dragEnd',
        startCallback: 'onDragStart',
        endCallback: 'onDragEnd',
        useDocumentToEnd: true,
        preventScroll: true
    }),
    hoverable: /*#__PURE__*/makeUIEventApplicator({
        startEvents: 'mouseenter',
        endEvents: 'mouseleave',
        startPose: 'hover',
        endPose: 'hoverEnd'
    }),
    focusable: /*#__PURE__*/makeUIEventApplicator({
        startEvents: 'focus',
        endEvents: 'blur',
        startPose: 'focus',
        endPose: 'blur'
    }),
    pressable: /*#__PURE__*/makeUIEventApplicator({
        startEvents: 'mousedown touchstart',
        endEvents: 'mouseup touchend',
        startPose: 'press',
        endPose: 'pressEnd',
        startCallback: 'onPressStart',
        endCallback: 'onPressEnd',
        useDocumentToEnd: true
    })
};
var eventKeys = /*#__PURE__*/Object.keys(events);
var appendEventListeners = function (element, activeActions, poser, _a) {
    var props = _a.props;
    return eventKeys.forEach(function (key) {
        if (props[key]) events[key](element, activeActions, poser, props);
    });
};

var ORIGIN_START = 0;
var ORIGIN_CENTER = '50%';
var ORIGIN_END = '100%';
var findCenter = function (_a) {
    var top = _a.top,
        right = _a.right,
        bottom = _a.bottom,
        left = _a.left;
    return {
        x: (left + right) / 2,
        y: (top + bottom) / 2
    };
};
var positionalProps = ['width', 'height', 'top', 'left', 'bottom', 'right'];
var positionalPropsDict = /*#__PURE__*/new Set(positionalProps);
var checkPositionalProp = function (key) {
    return positionalPropsDict.has(key);
};
var hasPositionalProps = function (pose) {
    return Object.keys(pose).some(checkPositionalProp);
};
var isFlipPose = function (flip, key, state) {
    return state.props.element instanceof HTMLElement && (flip === true || key === 'flip');
};
var setValue = function (_a, key, to) {
    var values = _a.values,
        props = _a.props;
    if (values.has(key)) {
        var raw = values.get(key).raw;
        raw.update(to);
        raw.update(to);
    } else {
        values.set(key, {
            raw: Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["value"])(to, function (v) {
                return props.elementStyler.set(key, v);
            })
        });
    }
};
var explicitlyFlipPose = function (state, nextPose) {
    var _a = state.props,
        dimensions = _a.dimensions,
        elementStyler = _a.elementStyler;
    dimensions.measure();
    var width = nextPose.width,
        height = nextPose.height,
        top = nextPose.top,
        left = nextPose.left,
        bottom = nextPose.bottom,
        right = nextPose.right,
        position = nextPose.position,
        remainingPose = __rest(nextPose, ["width", "height", "top", "left", "bottom", "right", "position"]);
    var propsToSet = positionalProps.concat('position').reduce(function (acc, key) {
        if (nextPose[key] !== undefined) {
            acc[key] = resolveProp(nextPose[key], state.props);
        }
        return acc;
    }, {});
    elementStyler.set(propsToSet).render();
    return implicitlyFlipPose(state, remainingPose);
};
var implicitlyFlipPose = function (state, nextPose) {
    var _a = state.props,
        dimensions = _a.dimensions,
        element = _a.element,
        elementStyler = _a.elementStyler;
    if (!dimensions.has()) return {};
    var prev = dimensions.get();
    var next = measureWithoutTransform(element);
    var originX = prev.left === next.left ? ORIGIN_START : prev.right === next.right ? ORIGIN_END : ORIGIN_CENTER;
    var originY = prev.top === next.top ? ORIGIN_START : prev.bottom === next.bottom ? ORIGIN_END : ORIGIN_CENTER;
    elementStyler.set({ originX: originX, originY: originY });
    if (prev.width !== next.width) {
        setValue(state, 'scaleX', prev.width / next.width);
        nextPose.scaleX = 1;
    }
    if (prev.height !== next.height) {
        setValue(state, 'scaleY', prev.height / next.height);
        nextPose.scaleY = 1;
    }
    var prevCenter = findCenter(prev);
    var nextCenter = findCenter(next);
    if (originX === ORIGIN_CENTER) {
        setValue(state, 'x', prevCenter.x - nextCenter.x);
        nextPose.x = 0;
    }
    if (originY === ORIGIN_CENTER) {
        setValue(state, 'y', prevCenter.y - nextCenter.y);
        nextPose.y = 0;
    }
    elementStyler.render();
    return nextPose;
};
var flipPose = function (props, nextPose) {
    return hasPositionalProps(nextPose) ? explicitlyFlipPose(props, nextPose) : implicitlyFlipPose(props, nextPose);
};

var getPosFromMatrix = function (matrix, pos) {
    return parseFloat(matrix.split(', ')[pos]);
};
var getTranslateFromMatrix = function (pos2, pos3) {
    return function (element, bbox, _a) {
        var transform$$1 = _a.transform;
        if (transform$$1 === 'none') return 0;
        var matrix3d = transform$$1.match(/^matrix3d\((.+)\)$/);
        if (matrix3d) return getPosFromMatrix(matrix3d[1], pos3);
        return getPosFromMatrix(transform$$1.match(/^matrix\((.+)\)$/)[1], pos2);
    };
};
var positionalValues = {
    width: function (element, _a) {
        var width = _a.width;
        return width;
    },
    height: function (element, _a) {
        var height = _a.height;
        return height;
    },
    top: function (element, bbox, _a) {
        var top = _a.top;
        return parseFloat(top);
    },
    left: function (element, bbox, _a) {
        var left = _a.left;
        return parseFloat(left);
    },
    bottom: function (element, _a, _b) {
        var height = _a.height;
        var top = _b.top;
        return parseFloat(top) + height;
    },
    right: function (element, _a, _b) {
        var width = _a.width;
        var left = _b.left;
        return parseFloat(left) + width;
    },
    x: /*#__PURE__*/getTranslateFromMatrix(4, 13),
    y: /*#__PURE__*/getTranslateFromMatrix(5, 14)
};
var isPositionalKey = function (v) {
    return positionalValues[v] !== undefined;
};
var isPositional = function (pose) {
    return Object.keys(pose).some(isPositionalKey);
};
var convertPositionalUnits = function (state, nextPose) {
    var values = state.values,
        props = state.props;
    var element = props.element,
        elementStyler = props.elementStyler;
    var positionalPoseKeys = Object.keys(nextPose).filter(isPositionalKey);
    var changedPositionalKeys = [];
    var elementComputedStyle = getComputedStyle(element);
    var applyAtEndHasBeenCopied = false;
    positionalPoseKeys.forEach(function (key) {
        var value$$1 = values.get(key);
        var fromValueType = getValueType(value$$1.raw.get());
        var to = resolveProp(nextPose[key], props);
        var toValueType = getValueType(to);
        if (fromValueType !== toValueType) {
            changedPositionalKeys.push(key);
            if (!applyAtEndHasBeenCopied) {
                applyAtEndHasBeenCopied = true;
                nextPose.applyAtEnd = nextPose.applyAtEnd ? __assign({}, nextPose.applyAtEnd) : {};
            }
            nextPose.applyAtEnd[key] = nextPose.applyAtEnd[key] || nextPose[key];
            setValue(state, key, to);
        }
    });
    if (!changedPositionalKeys.length) return nextPose;
    var originBbox = element.getBoundingClientRect();
    var top = elementComputedStyle.top,
        left = elementComputedStyle.left,
        bottom = elementComputedStyle.bottom,
        right = elementComputedStyle.right,
        transform$$1 = elementComputedStyle.transform;
    var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform$$1 };
    elementStyler.render();
    var targetBbox = element.getBoundingClientRect();
    changedPositionalKeys.forEach(function (key) {
        setValue(state, key, positionalValues[key](element, originBbox, originComputedStyle));
        nextPose[key] = positionalValues[key](element, targetBbox, elementComputedStyle);
    });
    elementStyler.render();
    return nextPose;
};

var getCurrent = function (prop) {
    return function (_a) {
        var elementStyler = _a.elementStyler;
        return elementStyler.get(prop);
    };
};
var dragPoses = function (draggable) {
    var drag = {
        preTransition: function (_a) {
            var dimensions = _a.dimensions;
            return dimensions.measure();
        }
    };
    var dragEnd = {};
    if (draggable === true || draggable === 'x') {
        drag.x = dragEnd.x = getCurrent('x');
    }
    if (draggable === true || draggable === 'y') {
        drag.y = dragEnd.y = getCurrent('y');
    }
    return { drag: drag, dragEnd: dragEnd };
};
var createPoseConfig = function (element, _a) {
    var onDragStart = _a.onDragStart,
        onDragEnd = _a.onDragEnd,
        onPressStart = _a.onPressStart,
        onPressEnd = _a.onPressEnd,
        draggable = _a.draggable,
        hoverable = _a.hoverable,
        focusable = _a.focusable,
        pressable = _a.pressable,
        dragBounds = _a.dragBounds,
        config = __rest(_a, ["onDragStart", "onDragEnd", "onPressStart", "onPressEnd", "draggable", "hoverable", "focusable", "pressable", "dragBounds"]);
    var poseConfig = __assign({ flip: {} }, config, { props: __assign({}, config.props, { onDragStart: onDragStart,
            onDragEnd: onDragEnd,
            onPressStart: onPressStart,
            onPressEnd: onPressEnd,
            dragBounds: dragBounds,
            draggable: draggable,
            hoverable: hoverable,
            focusable: focusable,
            pressable: pressable,
            element: element, elementStyler: Object(popmotion__WEBPACK_IMPORTED_MODULE_0__["styler"])(element, { preparseOutput: false }), dimensions: createDimensions(element) }) });
    if (draggable) {
        var _b = dragPoses(draggable),
            drag = _b.drag,
            dragEnd = _b.dragEnd;
        poseConfig.drag = __assign({}, drag, poseConfig.drag);
        poseConfig.dragEnd = __assign({}, dragEnd, poseConfig.dragEnd);
    }
    return poseConfig;
};
var domPose = /*#__PURE__*/pose({
    posePriority: ['drag', 'press', 'focus', 'hover'],
    transformPose: function (_a, name, state) {
        var flip = _a.flip,
            pose$$1 = __rest(_a, ["flip"]);
        if (isFlipPose(flip, name, state)) {
            return flipPose(state, pose$$1);
        } else if (isPositional(pose$$1)) {
            return convertPositionalUnits(state, pose$$1);
        }
        return pose$$1;
    },
    forceRender: function (_a) {
        var elementStyler = _a.elementStyler;
        elementStyler.render();
    },
    addListenerToValue: function (key, elementStyler) {
        return function (v) {
            return elementStyler.set(key, v);
        };
    },
    readValueFromSource: function (key, _a) {
        var elementStyler = _a.elementStyler,
            dragBounds = _a.dragBounds;
        var value$$1 = elementStyler.get(key);
        if (dragBounds && (key === 'x' || key === 'y')) {
            var bound = key === 'x' ? dragBounds.left || dragBounds.right : dragBounds.top || dragBounds.bottom;
            if (bound) {
                var boundType = getValueType(bound);
                value$$1 = boundType.transform(value$$1);
            }
        }
        return isNaN(value$$1) ? value$$1 : parseFloat(value$$1);
    },
    setValueNative: function (key, to, _a) {
        var elementStyler = _a.elementStyler;
        return elementStyler.set(key, to);
    },
    extendAPI: function (api, _a, config) {
        var props = _a.props,
            activeActions = _a.activeActions;
        var measure = props.dimensions.measure;
        var poserApi = __assign({}, api, { addChild: function (element, childConfig) {
                return api._addChild(createPoseConfig(element, childConfig), domPose);
            }, measure: measure, flip: function (op) {
                if (op) {
                    measure();
                    op();
                }
                return api.set('flip');
            } });
        props.elementStyler.render();
        appendEventListeners(props.element, activeActions, poserApi, config);
        return poserApi;
    }
});
var domPose$1 = function (element, config) {
    return domPose(createPoseConfig(element, config));
};

/* harmony default export */ __webpack_exports__["default"] = (domPose$1);


/***/ }),

/***/ "./node_modules/popmotion/dist/popmotion.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/popmotion.es.js ***!
  \*****************************************************/
/*! exports provided: valueTypes, easing, styler, action, multicast, value, decay, inertia, keyframes, everyFrame, physics, spring, timeline, tween, listen, pointer, mouse, multitouch, chain, composite, crossfade, delay, merge, parallel, schedule, stagger, calc, transform, css, svg, Action, ValueReaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multicast", function() { return multicast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decay", function() { return vectorDecay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inertia", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "everyFrame", function() { return frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "physics", function() { return vectorPhysics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return vectorSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tween", function() { return tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listen", function() { return listen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointer", function() { return index$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multitouch", function() { return multitouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composite", function() { return composite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossfade", function() { return crossfade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallel", function() { return parallel$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schedule", function() { return schedule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stagger", function() { return stagger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transformers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueReaction", function() { return ValueReaction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popmotion/popcorn */ "./node_modules/@popmotion/popcorn/dist/popcorn.es.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "valueTypes", function() { return style_value_types__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @popmotion/easing */ "./node_modules/@popmotion/easing/dist/easing.es.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var stylefire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylefire */ "./node_modules/stylefire/dist/stylefire.es.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styler", function() { return stylefire__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");













var Chainable = /*#__PURE__*/function () {
    function Chainable(props) {
        if (props === void 0) {
            props = {};
        }
        this.props = props;
    }
    Chainable.prototype.applyMiddleware = function (middleware) {
        return this.create(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { middleware: this.props.middleware ? [middleware].concat(this.props.middleware) : [middleware] }));
    };
    Chainable.prototype.pipe = function () {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        var pipedUpdate = funcs.length === 1 ? funcs[0] : _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["pipe"].apply(void 0, funcs);
        return this.applyMiddleware(function (update) {
            return function (v) {
                return update(pipedUpdate(v));
            };
        });
    };
    Chainable.prototype.while = function (predicate) {
        return this.applyMiddleware(function (update, complete) {
            return function (v) {
                return predicate(v) ? update(v) : complete();
            };
        });
    };
    Chainable.prototype.filter = function (predicate) {
        return this.applyMiddleware(function (update) {
            return function (v) {
                return predicate(v) && update(v);
            };
        });
    };
    return Chainable;
}();

var Observer = /*#__PURE__*/function () {
    function Observer(_a, observer) {
        var middleware = _a.middleware,
            onComplete = _a.onComplete;
        var _this = this;
        this.isActive = true;
        this.update = function (v) {
            if (_this.observer.update) _this.updateObserver(v);
        };
        this.complete = function () {
            if (_this.observer.complete && _this.isActive) _this.observer.complete();
            if (_this.onComplete) _this.onComplete();
            _this.isActive = false;
        };
        this.error = function (err) {
            if (_this.observer.error && _this.isActive) _this.observer.error(err);
            _this.isActive = false;
        };
        this.observer = observer;
        this.updateObserver = function (v) {
            return observer.update(v);
        };
        this.onComplete = onComplete;
        if (observer.update && middleware && middleware.length) {
            middleware.forEach(function (m) {
                return _this.updateObserver = m(_this.updateObserver, _this.complete);
            });
        }
    }
    return Observer;
}();
var createObserver = function (observerCandidate, _a, onComplete) {
    var middleware = _a.middleware;
    if (typeof observerCandidate === 'function') {
        return new Observer({ middleware: middleware, onComplete: onComplete }, { update: observerCandidate });
    } else {
        return new Observer({ middleware: middleware, onComplete: onComplete }, observerCandidate);
    }
};

var Action = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Action.prototype.create = function (props) {
        return new Action(props);
    };
    Action.prototype.start = function (observerCandidate) {
        if (observerCandidate === void 0) {
            observerCandidate = {};
        }
        var isComplete = false;
        var subscription = {
            stop: function () {
                return undefined;
            }
        };
        var _a = this.props,
            init = _a.init,
            observerProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["init"]);
        var observer = createObserver(observerCandidate, observerProps, function () {
            isComplete = true;
            subscription.stop();
        });
        var api = init(observer);
        subscription = api ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, subscription, api) : subscription;
        if (observerCandidate.registerParent) {
            observerCandidate.registerParent(subscription);
        }
        if (isComplete) subscription.stop();
        return subscription;
    };
    return Action;
}(Chainable);
var action = function (init) {
    return new Action({ init: init });
};

var BaseMulticast = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseMulticast, _super);
    function BaseMulticast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscribers = [];
        return _this;
    }
    BaseMulticast.prototype.complete = function () {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.complete();
        });
    };
    BaseMulticast.prototype.error = function (err) {
        this.subscribers.forEach(function (subscriber) {
            return subscriber.error(err);
        });
    };
    BaseMulticast.prototype.update = function (v) {
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].update(v);
        }
    };
    BaseMulticast.prototype.subscribe = function (observerCandidate) {
        var _this = this;
        var observer = createObserver(observerCandidate, this.props);
        this.subscribers.push(observer);
        var subscription = {
            unsubscribe: function () {
                var index = _this.subscribers.indexOf(observer);
                if (index !== -1) _this.subscribers.splice(index, 1);
            }
        };
        return subscription;
    };
    BaseMulticast.prototype.stop = function () {
        if (this.parent) this.parent.stop();
    };
    BaseMulticast.prototype.registerParent = function (subscription) {
        this.stop();
        this.parent = subscription;
    };
    return BaseMulticast;
}(Chainable);

var Multicast = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Multicast, _super);
    function Multicast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multicast.prototype.create = function (props) {
        return new Multicast(props);
    };
    return Multicast;
}(BaseMulticast);
var multicast = function () {
    return new Multicast();
};

var stepProgress = function (steps, progress$$1) {
    var segment = 1 / (steps - 1);
    var subsegment = 1 / (2 * (steps - 1));
    var percentProgressOfTarget = Math.min(progress$$1, 1);
    var subsegmentProgressOfTarget = percentProgressOfTarget / subsegment;
    var segmentProgressOfTarget = Math.floor((subsegmentProgressOfTarget + 1) / 2);
    return segmentProgressOfTarget * segment;
};

var calc = /*#__PURE__*/Object.freeze({
    angle: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["angle"],
    degreesToRadians: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["degreesToRadians"],
    distance: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["distance"],
    isPoint3D: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["isPoint3D"],
    isPoint: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["isPoint"],
    dilate: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"],
    getValueFromProgress: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"],
    pointFromAngleAndDistance: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["pointFromVector"],
    getProgressFromValue: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"],
    radiansToDegrees: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["radiansToDegrees"],
    smooth: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["smoothFrame"],
    speedPerFrame: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"],
    speedPerSecond: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"],
    stepProgress: stepProgress
});

var isValueList = function (v) {
    return Array.isArray(v);
};
var isSingleValue = function (v) {
    var typeOfV = typeof v;
    return typeOfV === 'string' || typeOfV === 'number';
};
var ValueReaction = /*#__PURE__*/function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ValueReaction, _super);
    function ValueReaction(props) {
        var _this = _super.call(this, props) || this;
        _this.scheduleVelocityCheck = function () {
            return framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(_this.velocityCheck);
        };
        _this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
            }
        };
        _this.prev = _this.current = props.value || 0;
        if (isSingleValue(_this.current)) {
            _this.updateCurrent = function (v) {
                return _this.current = v;
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getSingleVelocity(_this.current, _this.prev);
            };
        } else if (isValueList(_this.current)) {
            _this.updateCurrent = function (v) {
                return _this.current = v.slice();
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getListVelocity();
            };
        } else {
            _this.updateCurrent = function (v) {
                _this.current = {};
                for (var key in v) {
                    if (v.hasOwnProperty(key)) {
                        _this.current[key] = v[key];
                    }
                }
            };
            _this.getVelocityOfCurrent = function () {
                return _this.getMapVelocity();
            };
        }
        if (props.initialSubscription) _this.subscribe(props.initialSubscription);
        return _this;
    }
    ValueReaction.prototype.create = function (props) {
        return new ValueReaction(props);
    };
    ValueReaction.prototype.get = function () {
        return this.current;
    };
    ValueReaction.prototype.getVelocity = function () {
        return this.getVelocityOfCurrent();
    };
    ValueReaction.prototype.update = function (v) {
        _super.prototype.update.call(this, v);
        this.prev = this.current;
        this.updateCurrent(v);
        var _a = Object(framesync__WEBPACK_IMPORTED_MODULE_2__["getFrameData"])(),
            delta = _a.delta,
            timestamp = _a.timestamp;
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        framesync__WEBPACK_IMPORTED_MODULE_2__["default"].postRender(this.scheduleVelocityCheck);
    };
    ValueReaction.prototype.subscribe = function (observerCandidate) {
        var sub = _super.prototype.subscribe.call(this, observerCandidate);
        this.subscribers[this.subscribers.length - 1].update(this.current);
        return sub;
    };
    ValueReaction.prototype.getSingleVelocity = function (current, prev) {
        return typeof current === 'number' && typeof prev === 'number' ? Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(current - prev, this.timeDelta) : Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
    };
    ValueReaction.prototype.getListVelocity = function () {
        var _this = this;
        return this.current.map(function (c, i) {
            return _this.getSingleVelocity(c, _this.prev[i]);
        });
    };
    ValueReaction.prototype.getMapVelocity = function () {
        var velocity = {};
        for (var key in this.current) {
            if (this.current.hasOwnProperty(key)) {
                velocity[key] = this.getSingleVelocity(this.current[key], this.prev[key]);
            }
        }
        return velocity;
    };
    return ValueReaction;
}(BaseMulticast);
var value = function (value, initialSubscription) {
    return new ValueReaction({ value: value, initialSubscription: initialSubscription });
};

var multi = function (_a) {
    var getCount = _a.getCount,
        getFirst = _a.getFirst,
        getOutput = _a.getOutput,
        mapApi = _a.mapApi,
        setProp = _a.setProp,
        startActions = _a.startActions;
    return function (actions) {
        return action(function (_a) {
            var update = _a.update,
                complete = _a.complete,
                error = _a.error;
            var numActions = getCount(actions);
            var output = getOutput();
            var updateOutput = function () {
                return update(output);
            };
            var numCompletedActions = 0;
            var subs = startActions(actions, function (a, name) {
                var hasCompleted = false;
                return a.start({
                    complete: function () {
                        if (!hasCompleted) {
                            hasCompleted = true;
                            numCompletedActions++;
                            if (numCompletedActions === numActions) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(complete);
                        }
                    },
                    error: error,
                    update: function (v) {
                        setProp(output, name, v);
                        framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updateOutput, false, true);
                    }
                });
            });
            return Object.keys(getFirst(subs)).reduce(function (api, methodName) {
                api[methodName] = mapApi(subs, methodName);
                return api;
            }, {});
        });
    };
};

var composite = /*#__PURE__*/multi({
    getOutput: function () {
        return {};
    },
    getCount: function (subs) {
        return Object.keys(subs).length;
    },
    getFirst: function (subs) {
        return subs[Object.keys(subs)[0]];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return Object.keys(subs).reduce(function (output, propKey) {
                var _a;
                if (subs[propKey][methodName]) {
                    args[0] && args[0][propKey] !== undefined ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
                }
                return output;
            }, {});
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return Object.keys(actions).reduce(function (subs, key) {
            subs[key] = starter(actions[key], key);
            return subs;
        }, {});
    }
});

var parallel = /*#__PURE__*/multi({
    getOutput: function () {
        return [];
    },
    getCount: function (subs) {
        return subs.length;
    },
    getFirst: function (subs) {
        return subs[0];
    },
    mapApi: function (subs, methodName) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subs.map(function (sub, i) {
                if (sub[methodName]) {
                    return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
                }
            });
        };
    },
    setProp: function (output, name, v) {
        return output[name] = v;
    },
    startActions: function (actions, starter) {
        return actions.map(function (action, i) {
            return starter(action, i);
        });
    }
});
var parallel$1 = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return parallel(actions);
};

var createVectorTests = function (typeTests) {
    var testNames = Object.keys(typeTests);
    var isVectorProp = function (prop, key) {
        return prop !== undefined && !typeTests[key](prop);
    };
    var getVectorKeys = function (props) {
        return testNames.reduce(function (vectorKeys, key) {
            if (isVectorProp(props[key], key)) vectorKeys.push(key);
            return vectorKeys;
        }, []);
    };
    var testVectorProps = function (props) {
        return props && testNames.some(function (key) {
            return isVectorProp(props[key], key);
        });
    };
    return { getVectorKeys: getVectorKeys, testVectorProps: testVectorProps };
};
var unitTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_3__["px"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["percent"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["degrees"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["vh"], style_value_types__WEBPACK_IMPORTED_MODULE_3__["vw"]];
var findUnitType = function (prop) {
    return unitTypes.find(function (type) {
        return type.test(prop);
    });
};
var isUnitProp = function (prop) {
    return Boolean(findUnitType(prop));
};
var createAction = function (action, props) {
    return action(props);
};
var reduceArrayValue = function (i) {
    return function (props, key) {
        props[key] = props[key][i];
        return props;
    };
};
var createArrayAction = function (action, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionList = props[firstVectorKey].map(function (v, i) {
        var childActionProps = vectorKeys.reduce(reduceArrayValue(i), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        return getActionCreator(v)(action, childActionProps);
    });
    return parallel$1.apply(void 0, actionList);
};
var reduceObjectValue = function (key) {
    return function (props, propKey) {
        props[propKey] = props[propKey][key];
        return props;
    };
};
var createObjectAction = function (action, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionMap = Object.keys(props[firstVectorKey]).reduce(function (map, key) {
        var childActionProps = vectorKeys.reduce(reduceObjectValue(key), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
        map[key] = getActionCreator(props[firstVectorKey][key])(action, childActionProps);
        return map;
    }, {});
    return composite(actionMap);
};
var createUnitAction = function (action, _a) {
    var from = _a.from,
        to = _a.to,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to"]);
    var unitType = findUnitType(from) || findUnitType(to);
    var transform = unitType.transform,
        parse = unitType.parse;
    return action(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { from: typeof from === 'string' ? parse(from) : from, to: typeof to === 'string' ? parse(to) : to })).pipe(transform);
};
var createMixerAction = function (mixer) {
    return function (action, _a) {
        var from = _a.from,
            to = _a.to,
            props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to"]);
        return action(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { from: 0, to: 1 })).pipe(mixer(from, to));
    };
};
var createColorAction = /*#__PURE__*/createMixerAction(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixColor"]);
var createComplexAction = /*#__PURE__*/createMixerAction(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixComplex"]);
var createVectorAction = function (action, typeTests) {
    var _a = createVectorTests(typeTests),
        testVectorProps = _a.testVectorProps,
        getVectorKeys = _a.getVectorKeys;
    var vectorAction = function (props) {
        var isVector = testVectorProps(props);
        if (!isVector) return action(props);
        var vectorKeys = getVectorKeys(props);
        var testKey = vectorKeys[0];
        var testProp = props[testKey];
        return getActionCreator(testProp)(action, props, vectorKeys);
    };
    return vectorAction;
};
var getActionCreator = function (prop) {
    if (typeof prop === 'number') {
        return createAction;
    } else if (Array.isArray(prop)) {
        return createArrayAction;
    } else if (isUnitProp(prop)) {
        return createUnitAction;
    } else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__["color"].test(prop)) {
        return createColorAction;
    } else if (style_value_types__WEBPACK_IMPORTED_MODULE_3__["complex"].test(prop)) {
        return createComplexAction;
    } else if (typeof prop === 'object') {
        return createObjectAction;
    } else {
        return createAction;
    }
};

var decay = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0 : _b,
            _c = props.from,
            from = _c === void 0 ? 0 : _c,
            _d = props.power,
            power = _d === void 0 ? 0.8 : _d,
            _e = props.timeConstant,
            timeConstant = _e === void 0 ? 350 : _e,
            _f = props.restDelta,
            restDelta = _f === void 0 ? 0.5 : _f,
            modifyTarget = props.modifyTarget;
        var elapsed = 0;
        var amplitude = power * velocity;
        var idealTarget = Math.round(from + amplitude);
        var target = typeof modifyTarget === 'undefined' ? idealTarget : modifyTarget(idealTarget);
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var frameDelta = _a.delta;
            elapsed += frameDelta;
            var delta = -amplitude * Math.exp(-elapsed / timeConstant);
            var isMoving = delta > restDelta || delta < -restDelta;
            var current = isMoving ? target + delta : target;
            update(current);
            if (!isMoving) {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            }
        }, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorDecay = /*#__PURE__*/createVectorAction(decay, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    modifyTarget: function (func) {
        return typeof func === 'function';
    },
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var spring = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.velocity,
            velocity = _b === void 0 ? 0.0 : _b;
        var _c = props.from,
            from = _c === void 0 ? 0.0 : _c,
            _d = props.to,
            to = _d === void 0 ? 0.0 : _d,
            _e = props.stiffness,
            stiffness = _e === void 0 ? 100 : _e,
            _f = props.damping,
            damping = _f === void 0 ? 10 : _f,
            _g = props.mass,
            mass = _g === void 0 ? 1.0 : _g,
            _h = props.restSpeed,
            restSpeed = _h === void 0 ? 0.01 : _h,
            _j = props.restDelta,
            restDelta = _j === void 0 ? 0.01 : _j;
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var t = 0;
        var delta = to - from;
        var position = from;
        var prevPosition = position;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var timeDelta = _a.delta;
            t += timeDelta;
            var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
            var angularFreq = Math.sqrt(stiffness / mass) / 1000;
            prevPosition = position;
            if (dampingRatio < 1) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
            } else {
                var envelope = Math.exp(-angularFreq * t);
                position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
            }
            velocity = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerSecond"])(position - prevPosition, timeDelta);
            var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
            var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
            if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
                position = to;
                update(position);
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            } else {
                update(position);
            }
        }, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorSpring = /*#__PURE__*/createVectorAction(spring, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    stiffness: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    damping: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    mass: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var inertia = function (_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.velocity,
        velocity = _c === void 0 ? 0 : _c,
        min = _a.min,
        max = _a.max,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 700 : _e,
        _f = _a.bounceStiffness,
        bounceStiffness = _f === void 0 ? 500 : _f,
        _g = _a.bounceDamping,
        bounceDamping = _g === void 0 ? 10 : _g,
        _h = _a.restDelta,
        restDelta = _h === void 0 ? 1 : _h,
        modifyTarget = _a.modifyTarget;
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var current = value(from);
        var activeAnimation;
        var isSpring = false;
        var isLessThanMin = function (v) {
            return min !== undefined && v <= min;
        };
        var isMoreThanMax = function (v) {
            return max !== undefined && v >= max;
        };
        var isOutOfBounds = function (v) {
            return isLessThanMin(v) || isMoreThanMax(v);
        };
        var isTravellingAwayFromBounds = function (v, currentVelocity) {
            return isLessThanMin(v) && currentVelocity < 0 || isMoreThanMax(v) && currentVelocity > 0;
        };
        var startAnimation = function (animation, next) {
            activeAnimation && activeAnimation.stop();
            activeAnimation = animation.start({
                update: function (v) {
                    return current.update(v);
                },
                complete: function () {
                    if (next) {
                        next();
                        return;
                    }
                    complete();
                }
            });
        };
        var startSpring = function (props) {
            isSpring = true;
            startAnimation(vectorSpring(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { to: isLessThanMin(props.from) ? min : max, stiffness: bounceStiffness, damping: bounceDamping, restDelta: restDelta })));
        };
        current.subscribe(function (v) {
            update(v);
            var currentVelocity = current.getVelocity();
            if (activeAnimation && !isSpring && isTravellingAwayFromBounds(v, currentVelocity)) {
                startSpring({ from: v, velocity: currentVelocity });
            }
        });
        if (isOutOfBounds(from)) {
            startSpring({ from: from, velocity: velocity });
        } else if (velocity !== 0) {
            var animation = vectorDecay({
                from: from,
                velocity: velocity,
                timeConstant: timeConstant,
                power: power,
                restDelta: isOutOfBounds(from) ? 20 : restDelta,
                modifyTarget: modifyTarget
            });
            startAnimation(animation, function () {
                var v = current.get();
                if (isOutOfBounds(v)) {
                    startSpring({ from: v, velocity: current.getVelocity() });
                } else {
                    complete();
                }
            });
        } else {
            complete();
        }
        return {
            stop: function () {
                return activeAnimation && activeAnimation.stop();
            }
        };
    });
};
var index = /*#__PURE__*/createVectorAction(inertia, {
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    min: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    max: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    damping: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    stiffness: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    modifyTarget: function (func) {
        return typeof func === 'function';
    }
});

var frame = function () {
    return action(function (_a) {
        var update = _a.update;
        var initialTime = 0;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var timestamp = _a.timestamp;
            if (!initialTime) initialTime = timestamp;
            update(timestamp - initialTime);
        }, true, true);
        return {
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};

var scrubber = function (_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1 : _c,
        _d = _a.ease,
        ease = _d === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"] : _d,
        _e = _a.reverseEase,
        reverseEase = _e === void 0 ? false : _e;
    if (reverseEase) {
        ease = Object(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["createReversedEasing"])(ease);
    }
    return action(function (_a) {
        var update = _a.update;
        return {
            seek: function (progress$$1) {
                return update(progress$$1);
            }
        };
    }).pipe(ease, function (v) {
        return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(from, to, v);
    });
};
var vectorScrubber = /*#__PURE__*/createVectorAction(scrubber, {
    ease: function (func) {
        return typeof func === 'function';
    },
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var clampProgress = /*#__PURE__*/Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, 1);
var tween = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var _b = props.duration,
            duration = _b === void 0 ? 300 : _b,
            _c = props.ease,
            ease = _c === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["easeOut"] : _c,
            _d = props.flip,
            flip = _d === void 0 ? 0 : _d,
            _e = props.loop,
            loop = _e === void 0 ? 0 : _e,
            _f = props.yoyo,
            yoyo = _f === void 0 ? 0 : _f,
            _g = props.repeatDelay,
            repeatDelay = _g === void 0 ? 0 : _g;
        var _h = props.from,
            from = _h === void 0 ? 0 : _h,
            _j = props.to,
            to = _j === void 0 ? 1 : _j,
            _k = props.elapsed,
            elapsed = _k === void 0 ? 0 : _k,
            _l = props.flipCount,
            flipCount = _l === void 0 ? 0 : _l,
            _m = props.yoyoCount,
            yoyoCount = _m === void 0 ? 0 : _m,
            _o = props.loopCount,
            loopCount = _o === void 0 ? 0 : _o;
        var playhead = vectorScrubber({ from: from, to: to, ease: ease }).start(update);
        var currentProgress = 0;
        var process;
        var isActive = false;
        var reverseAnimation = function (reverseEase) {
            if (reverseEase === void 0) {
                reverseEase = false;
            }
            var _a;
            _a = [to, from], from = _a[0], to = _a[1];
            playhead = vectorScrubber({ from: from, to: to, ease: ease, reverseEase: reverseEase }).start(update);
        };
        var isTweenComplete = function () {
            var isComplete = isActive && elapsed > duration + repeatDelay;
            if (!isComplete) return false;
            if (isComplete && !loop && !flip && !yoyo) return true;
            elapsed = duration - (elapsed - repeatDelay);
            if (loop && loopCount < loop) {
                loopCount++;
                return false;
            } else if (flip && flipCount < flip) {
                flipCount++;
                reverseAnimation();
                return false;
            } else if (yoyo && yoyoCount < yoyo) {
                yoyoCount++;
                reverseAnimation(yoyoCount % 2 !== 0);
                return false;
            }
            return true;
        };
        var updateTween = function () {
            currentProgress = clampProgress(Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"])(0, duration, elapsed));
            playhead.seek(currentProgress);
        };
        var startTimer = function () {
            isActive = true;
            process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
                var delta = _a.delta;
                elapsed += delta;
                updateTween();
                if (isTweenComplete()) {
                    framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                    complete && framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(complete, false, true);
                }
            }, true);
        };
        var stopTimer = function () {
            isActive = false;
            if (process) framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
        };
        startTimer();
        return {
            isActive: function () {
                return isActive;
            },
            getElapsed: function () {
                return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, duration, elapsed);
            },
            getProgress: function () {
                return currentProgress;
            },
            stop: function () {
                stopTimer();
            },
            pause: function () {
                stopTimer();
                return this;
            },
            resume: function () {
                if (!isActive) startTimer();
                return this;
            },
            seek: function (newProgress) {
                elapsed = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(0, duration, newProgress);
                framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updateTween, false, true);
                return this;
            },
            reverse: function () {
                reverseAnimation();
                return this;
            }
        };
    });
};

var clampProgress$1 = /*#__PURE__*/Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"])(0, 1);
var defaultEasings = function (values, easing$$1) {
    return values.map(function () {
        return easing$$1 || _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["easeOut"];
    }).splice(0, values.length - 1);
};
var defaultTimings = function (values) {
    var numValues = values.length;
    return values.map(function (value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
};
var interpolateScrubbers = function (input, scrubbers, update) {
    var rangeLength = input.length;
    var finalInputIndex = rangeLength - 1;
    var finalScrubberIndex = finalInputIndex - 1;
    var subs = scrubbers.map(function (scrub) {
        return scrub.start(update);
    });
    return function (v) {
        if (v <= input[0]) {
            subs[0].seek(0);
        }
        if (v >= input[finalInputIndex]) {
            subs[finalScrubberIndex].seek(1);
        }
        var i = 1;
        for (; i < rangeLength; i++) {
            if (input[i] > v || i === finalInputIndex) break;
        }
        var progressInRange = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"])(input[i - 1], input[i], v);
        subs[i - 1].seek(clampProgress$1(progressInRange));
    };
};
var keyframes = function (_a) {
    var easings = _a.easings,
        _b = _a.ease,
        ease = _b === void 0 ? _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"] : _b,
        times = _a.times,
        values = _a.values,
        tweenProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["easings", "ease", "times", "values"]);
    easings = Array.isArray(easings) ? easings : defaultEasings(values, easings);
    times = times || defaultTimings(values);
    var scrubbers = easings.map(function (easing$$1, i) {
        return vectorScrubber({
            from: values[i],
            to: values[i + 1],
            ease: easing$$1
        });
    });
    return tween(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, tweenProps, { ease: ease })).applyMiddleware(function (update) {
        return interpolateScrubbers(times, scrubbers, update);
    });
};

var physics = function (props) {
    if (props === void 0) {
        props = {};
    }
    return action(function (_a) {
        var complete = _a.complete,
            update = _a.update;
        var _b = props.acceleration,
            acceleration = _b === void 0 ? 0 : _b,
            _c = props.friction,
            friction = _c === void 0 ? 0 : _c,
            _d = props.velocity,
            velocity = _d === void 0 ? 0 : _d,
            springStrength = props.springStrength,
            to = props.to;
        var _e = props.restSpeed,
            restSpeed = _e === void 0 ? 0.001 : _e,
            _f = props.from,
            from = _f === void 0 ? 0 : _f;
        var current = from;
        var process = framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(function (_a) {
            var delta = _a.delta;
            var elapsed = Math.max(delta, 16);
            if (acceleration) velocity += Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(acceleration, elapsed);
            if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);
            if (springStrength !== undefined && to !== undefined) {
                var distanceToTarget = to - current;
                velocity += distanceToTarget * Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(springStrength, elapsed);
            }
            current += Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["velocityPerFrame"])(velocity, elapsed);
            update(current);
            var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
            if (isComplete) {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
                complete();
            }
        }, true);
        return {
            set: function (v) {
                current = v;
                return this;
            },
            setAcceleration: function (v) {
                acceleration = v;
                return this;
            },
            setFriction: function (v) {
                friction = v;
                return this;
            },
            setSpringStrength: function (v) {
                springStrength = v;
                return this;
            },
            setSpringTarget: function (v) {
                to = v;
                return this;
            },
            setVelocity: function (v) {
                velocity = v;
                return this;
            },
            stop: function () {
                return framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(process);
            }
        };
    });
};
var vectorPhysics = /*#__PURE__*/createVectorAction(physics, {
    acceleration: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    friction: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    velocity: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    from: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    to: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test,
    springStrength: style_value_types__WEBPACK_IMPORTED_MODULE_3__["number"].test
});

var DEFAULT_DURATION = 300;
var flattenTimings = function (instructions) {
    var flatInstructions = [];
    var lastArg = instructions[instructions.length - 1];
    var isStaggered = typeof lastArg === 'number';
    var staggerDelay = isStaggered ? lastArg : 0;
    var segments = isStaggered ? instructions.slice(0, -1) : instructions;
    var numSegments = segments.length;
    var offset = 0;
    segments.forEach(function (item, i) {
        flatInstructions.push(item);
        if (i !== numSegments - 1) {
            var duration = item.duration || DEFAULT_DURATION;
            offset += staggerDelay;
            flatInstructions.push("-" + (duration - offset));
        }
    });
    return flatInstructions;
};
var flattenArrayInstructions = function (instructions, instruction) {
    Array.isArray(instruction) ? instructions.push.apply(instructions, flattenTimings(instruction)) : instructions.push(instruction);
    return instructions;
};
var convertDefToProps = function (props, def, i) {
    var duration = props.duration,
        easings = props.easings,
        times = props.times,
        values = props.values;
    var numValues = values.length;
    var prevTimeTo = times[numValues - 1];
    var timeFrom = def.at === 0 ? 0 : def.at / duration;
    var timeTo = (def.at + def.duration) / duration;
    if (i === 0) {
        values.push(def.from);
        times.push(timeFrom);
    } else {
        if (prevTimeTo !== timeFrom) {
            if (def.from !== undefined) {
                values.push(values[numValues - 1]);
                times.push(timeFrom);
                easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"]);
            }
            var from = def.from !== undefined ? def.from : values[numValues - 1];
            values.push(from);
            times.push(timeFrom);
            easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"]);
        } else if (def.from !== undefined) {
            values.push(def.from);
            times.push(timeFrom);
            easings.push(_popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["linear"]);
        }
    }
    values.push(def.to);
    times.push(timeTo);
    easings.push(def.ease || _popmotion_easing__WEBPACK_IMPORTED_MODULE_4__["easeInOut"]);
    return props;
};
var timeline = function (instructions, _a) {
    var _b = _a === void 0 ? {} : _a,
        duration = _b.duration,
        elapsed = _b.elapsed,
        ease = _b.ease,
        loop = _b.loop,
        flip = _b.flip,
        yoyo = _b.yoyo;
    var playhead = 0;
    var calculatedDuration = 0;
    var flatInstructions = instructions.reduce(flattenArrayInstructions, []);
    var animationDefs = [];
    flatInstructions.forEach(function (instruction) {
        if (typeof instruction === 'string') {
            playhead += parseFloat(instruction);
        } else if (typeof instruction === 'number') {
            playhead = instruction;
        } else {
            var def = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, instruction, { at: playhead });
            def.duration = def.duration === undefined ? DEFAULT_DURATION : def.duration;
            animationDefs.push(def);
            playhead += def.duration;
            calculatedDuration = Math.max(calculatedDuration, def.at + def.duration);
        }
    });
    var tracks = {};
    var numDefs = animationDefs.length;
    for (var i = 0; i < numDefs; i++) {
        var def = animationDefs[i];
        var track = def.track;
        if (track === undefined) {
            throw new Error('No track defined');
        }
        if (!tracks.hasOwnProperty(track)) tracks[track] = [];
        tracks[track].push(def);
    }
    var trackKeyframes = {};
    for (var key in tracks) {
        if (tracks.hasOwnProperty(key)) {
            var keyframeProps = tracks[key].reduce(convertDefToProps, {
                duration: calculatedDuration,
                easings: [],
                times: [],
                values: []
            });
            trackKeyframes[key] = keyframes(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, keyframeProps, { duration: duration || calculatedDuration, ease: ease,
                elapsed: elapsed,
                loop: loop,
                yoyo: yoyo,
                flip: flip }));
        }
    }
    return composite(trackKeyframes);
};

var listen = function (element, events, options) {
    return action(function (_a) {
        var update = _a.update;
        var eventNames = events.split(' ').map(function (eventName) {
            element.addEventListener(eventName, update, options);
            return eventName;
        });
        return {
            stop: function () {
                return eventNames.forEach(function (eventName) {
                    return element.removeEventListener(eventName, update, options);
                });
            }
        };
    });
};

var defaultPointerPos = function () {
    return {
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        x: 0,
        y: 0
    };
};
var eventToPoint = function (e, point) {
    if (point === void 0) {
        point = defaultPointerPos();
    }
    point.clientX = point.x = e.clientX;
    point.clientY = point.y = e.clientY;
    point.pageX = e.pageX;
    point.pageY = e.pageY;
    return point;
};

var points = [/*#__PURE__*/defaultPointerPos()];
var isTouchDevice = false;
if (typeof document !== 'undefined') {
    var updatePointsLocation = function (_a) {
        var touches = _a.touches;
        isTouchDevice = true;
        var numTouches = touches.length;
        points.length = 0;
        for (var i = 0; i < numTouches; i++) {
            var thisTouch = touches[i];
            points.push(eventToPoint(thisTouch));
        }
    };
    listen(document, 'touchstart touchmove', {
        passive: true,
        capture: true
    }).start(updatePointsLocation);
}
var multitouch = function (_a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.preventDefault,
        preventDefault = _c === void 0 ? true : _c,
        _d = _b.scale,
        scale = _d === void 0 ? 1.0 : _d,
        _e = _b.rotate,
        rotate = _e === void 0 ? 0.0 : _e;
    return action(function (_a) {
        var update = _a.update;
        var output = {
            touches: points,
            scale: scale,
            rotate: rotate
        };
        var initialDistance = 0.0;
        var initialRotation = 0.0;
        var isGesture = points.length > 1;
        if (isGesture) {
            var firstTouch = points[0],
                secondTouch = points[1];
            initialDistance = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["distance"])(firstTouch, secondTouch);
            initialRotation = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["angle"])(firstTouch, secondTouch);
        }
        var updatePoint = function () {
            if (isGesture) {
                var firstTouch = points[0],
                    secondTouch = points[1];
                var newDistance = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["distance"])(firstTouch, secondTouch);
                var newRotation = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["angle"])(firstTouch, secondTouch);
                output.scale = scale * (newDistance / initialDistance);
                output.rotate = rotate + (newRotation - initialRotation);
            }
            update(output);
        };
        var onMove = function (e) {
            if (preventDefault || e.touches.length > 1) e.preventDefault();
            framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        };
        var updateOnMove = listen(document, 'touchmove', {
            passive: !preventDefault
        }).start(onMove);
        if (isTouchDevice) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        return {
            stop: function () {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};
var getIsTouchDevice = function () {
    return isTouchDevice;
};

var point = /*#__PURE__*/defaultPointerPos();
var isMouseDevice = false;
if (typeof document !== 'undefined') {
    var updatePointLocation = function (e) {
        isMouseDevice = true;
        eventToPoint(e, point);
    };
    listen(document, 'mousedown mousemove', true).start(updatePointLocation);
}
var mouse = function (_a) {
    var _b = (_a === void 0 ? {} : _a).preventDefault,
        preventDefault = _b === void 0 ? true : _b;
    return action(function (_a) {
        var update = _a.update;
        var updatePoint = function () {
            return update(point);
        };
        var onMove = function (e) {
            if (preventDefault) e.preventDefault();
            framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        };
        var updateOnMove = listen(document, 'mousemove').start(onMove);
        if (isMouseDevice) framesync__WEBPACK_IMPORTED_MODULE_2__["default"].update(updatePoint);
        return {
            stop: function () {
                framesync__WEBPACK_IMPORTED_MODULE_2__["cancelSync"].update(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};

var getFirstTouch = function (_a) {
    var firstTouch = _a[0];
    return firstTouch;
};
var pointer = function (props) {
    if (props === void 0) {
        props = {};
    }
    return getIsTouchDevice() ? multitouch(props).pipe(function (_a) {
        var touches = _a.touches;
        return touches;
    }, getFirstTouch) : mouse(props);
};
var index$1 = function (_a) {
    if (_a === void 0) {
        _a = {};
    }
    var x = _a.x,
        y = _a.y,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["x", "y"]);
    if (x !== undefined || y !== undefined) {
        var applyXOffset_1 = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["applyOffset"])(x || 0);
        var applyYOffset_1 = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["applyOffset"])(y || 0);
        var delta_1 = { x: 0, y: 0 };
        return pointer(props).pipe(function (point) {
            delta_1.x = applyXOffset_1(point.x);
            delta_1.y = applyYOffset_1(point.y);
            return delta_1;
        });
    } else {
        return pointer(props);
    }
};

var chain = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var i = 0;
        var current;
        var playCurrent = function () {
            current = actions[i].start({
                complete: function () {
                    i++;
                    i >= actions.length ? complete() : playCurrent();
                },
                update: update
            });
        };
        playCurrent();
        return {
            stop: function () {
                return current && current.stop();
            }
        };
    });
};

var crossfade = function (a, b) {
    return action(function (observer) {
        var balance = 0;
        var fadable = parallel$1(a, b).start(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, observer, { update: function (_a) {
                var va = _a[0],
                    vb = _a[1];
                observer.update(Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(va, vb, balance));
            } }));
        return {
            setBalance: function (v) {
                return balance = v;
            },
            stop: function () {
                return fadable.stop();
            }
        };
    });
};

var delay = function (timeToDelay) {
    return action(function (_a) {
        var complete = _a.complete;
        var timeout = setTimeout(complete, timeToDelay);
        return {
            stop: function () {
                return clearTimeout(timeout);
            }
        };
    });
};

var merge = function () {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i] = arguments[_i];
    }
    return action(function (observer) {
        var subs = actions.map(function (thisAction) {
            return thisAction.start(observer);
        });
        return {
            stop: function () {
                return subs.forEach(function (sub) {
                    return sub.stop();
                });
            }
        };
    });
};

var schedule = function (scheduler, schedulee) {
    return action(function (_a) {
        var update = _a.update,
            complete = _a.complete;
        var latest;
        var schedulerSub = scheduler.start({
            update: function () {
                return latest !== undefined && update(latest);
            },
            complete: complete
        });
        var scheduleeSub = schedulee.start({
            update: function (v) {
                return latest = v;
            },
            complete: complete
        });
        return {
            stop: function () {
                schedulerSub.stop();
                scheduleeSub.stop();
            }
        };
    });
};

var stagger = function (actions, interval) {
    var intervalIsNumber = typeof interval === 'number';
    var actionsWithDelay = actions.map(function (a, i) {
        var timeToDelay = intervalIsNumber ? interval * i : interval(i);
        return chain(delay(timeToDelay), a);
    });
    return parallel$1.apply(void 0, actionsWithDelay);
};

var appendUnit = function (unit) {
    return function (v) {
        return "" + v + unit;
    };
};
var steps = function (st, min, max) {
    if (min === void 0) {
        min = 0;
    }
    if (max === void 0) {
        max = 1;
    }
    return function (v) {
        var current = Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["progress"])(min, max, v);
        return Object(_popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mix"])(min, max, stepProgress(st, current));
    };
};
var transformMap = function (childTransformers) {
    return function (v) {
        var output = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v);
        for (var key in childTransformers) {
            if (childTransformers.hasOwnProperty(key)) {
                var childTransformer = childTransformers[key];
                output[key] = childTransformer(v[key]);
            }
        }
        return output;
    };
};

var transformers = /*#__PURE__*/Object.freeze({
    applyOffset: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["applyOffset"],
    clamp: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["clamp"],
    conditional: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["conditional"],
    interpolate: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["interpolate"],
    blendArray: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixArray"],
    blendColor: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["mixColor"],
    pipe: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["pipe"],
    smooth: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["smooth"],
    snap: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["snap"],
    generateStaticSpring: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["springForce"],
    nonlinearSpring: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["springForceExpo"],
    linearSpring: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["springForceLinear"],
    wrap: _popmotion_popcorn__WEBPACK_IMPORTED_MODULE_1__["wrap"],
    appendUnit: appendUnit,
    steps: steps,
    transformMap: transformMap
});

var css = function (element, props) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_6__["warning"])(false, 'css() is deprecated, use styler instead');
    return Object(stylefire__WEBPACK_IMPORTED_MODULE_5__["default"])(element, props);
};
var svg = function (element, props) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_6__["warning"])(false, 'svg() is deprecated, use styler instead');
    return Object(stylefire__WEBPACK_IMPORTED_MODULE_5__["default"])(element, props);
};




/***/ }),

/***/ "./node_modules/pose-core/dist/pose-core.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/pose-core/dist/pose-core.es.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");



var getPoseValues = function (_a) {
    var transition = _a.transition,
        flip = _a.flip,
        delay = _a.delay,
        delayChildren = _a.delayChildren,
        staggerChildren = _a.staggerChildren,
        staggerDirection = _a.staggerDirection,
        afterChildren = _a.afterChildren,
        beforeChildren = _a.beforeChildren,
        preTransition = _a.preTransition,
        applyAtStart = _a.applyAtStart,
        applyAtEnd = _a.applyAtEnd,
        props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["transition", "flip", "delay", "delayChildren", "staggerChildren", "staggerDirection", "afterChildren", "beforeChildren", "preTransition", "applyAtStart", "applyAtEnd"]);
    return props;
};
var selectPoses = function (_a) {
    var label = _a.label,
        props = _a.props,
        values = _a.values,
        parentValues = _a.parentValues,
        ancestorValues = _a.ancestorValues,
        onChange = _a.onChange,
        passive = _a.passive,
        initialPose = _a.initialPose,
        poses = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["label", "props", "values", "parentValues", "ancestorValues", "onChange", "passive", "initialPose"]);
    return poses;
};
var selectAllValues = function (values, selectValue) {
    var allValues = {};
    values.forEach(function (value, key) {
        return allValues[key] = selectValue(value);
    });
    return allValues;
};

var resolveProp = function (target, props) {
    return typeof target === 'function' ? target(props) : target;
};
var poseDefault = function (pose, prop, defaultValue, resolveProps) {
    return pose && pose[prop] !== undefined ? resolveProp(pose[prop], resolveProps) : defaultValue;
};
var startChildAnimations = function (children, next, pose, props) {
    var animations = [];
    var delay = poseDefault(pose, 'delayChildren', 0, props);
    var stagger = poseDefault(pose, 'staggerChildren', 0, props);
    var staggerDirection = poseDefault(pose, 'staggerDirection', 1, props);
    var maxStaggerDuration = (children.size - 1) * stagger;
    var generateStaggerDuration = staggerDirection === 1 ? function (i) {
        return i * stagger;
    } : function (i) {
        return maxStaggerDuration - i * stagger;
    };
    Array.from(children).forEach(function (child, i) {
        animations.push(child.set(next, {
            delay: delay + generateStaggerDuration(i)
        }));
    });
    return animations;
};
var resolveTransition = function (transition, key, value, props, convertTransitionDefinition, getInstantTransition) {
    var resolvedTransition;
    if (typeof transition === 'function') {
        var resolvedTransitionMap = transition(props);
        resolvedTransition = resolveTransition(resolvedTransitionMap, key, value, props, convertTransitionDefinition, getInstantTransition);
    } else if (transition[key] || transition.default) {
        var keyTransition = transition[key] || transition.default;
        if (typeof keyTransition === 'function') {
            resolvedTransition = keyTransition(props);
        } else {
            resolvedTransition = keyTransition;
        }
    } else {
        resolvedTransition = transition;
    }
    return resolvedTransition === false ? getInstantTransition(value, props) : convertTransitionDefinition(value, resolvedTransition, props);
};
var findInsertionIndex = function (poseList, priorityList, priorityIndex) {
    var insertionIndex = 0;
    for (var i = priorityIndex - 1; i >= 0; i--) {
        var nextHighestPriorityIndex = poseList.indexOf(priorityList[i]);
        if (nextHighestPriorityIndex !== -1) {
            insertionIndex = nextHighestPriorityIndex + 1;
            break;
        }
    }
    return insertionIndex;
};
var applyValues = function (toApply, values, props, setValue, setValueNative) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(typeof toApply === 'object', 'applyAtStart and applyAtEnd must be of type object');
    return Object.keys(toApply).forEach(function (key) {
        var valueToSet = resolveProp(toApply[key], props);
        values.has(key) ? setValue(values.get(key), valueToSet) : setValueNative(key, valueToSet, props);
    });
};
var createPoseSetter = function (setterProps) {
    var state = setterProps.state,
        poses = setterProps.poses,
        startAction = setterProps.startAction,
        stopAction = setterProps.stopAction,
        getInstantTransition = setterProps.getInstantTransition,
        addActionDelay = setterProps.addActionDelay,
        getTransitionProps = setterProps.getTransitionProps,
        resolveTarget = setterProps.resolveTarget,
        transformPose = setterProps.transformPose,
        posePriority = setterProps.posePriority,
        convertTransitionDefinition = setterProps.convertTransitionDefinition,
        setValue = setterProps.setValue,
        setValueNative = setterProps.setValueNative,
        forceRender = setterProps.forceRender;
    return function (next, nextProps, propagate) {
        if (nextProps === void 0) {
            nextProps = {};
        }
        if (propagate === void 0) {
            propagate = true;
        }
        var children = state.children,
            values = state.values,
            props = state.props,
            activeActions = state.activeActions,
            activePoses = state.activePoses;
        var _a = nextProps.delay,
            delay = _a === void 0 ? 0 : _a;
        var hasChildren = children.size;
        var baseTransitionProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, nextProps);
        var nextPose = poses[next];
        var getChildAnimations = function () {
            return hasChildren && propagate ? startChildAnimations(children, next, nextPose, baseTransitionProps) : [];
        };
        var getParentAnimations = function () {
            if (!nextPose) return [];
            var applyAtStart = nextPose.applyAtStart;
            if (applyAtStart) {
                applyValues(applyAtStart, values, baseTransitionProps, setValue, setValueNative);
                if (forceRender) forceRender(baseTransitionProps);
            }
            if (transformPose) nextPose = transformPose(nextPose, next, state);
            var preTransition = nextPose.preTransition,
                getTransition = nextPose.transition,
                applyAtEnd = nextPose.applyAtEnd;
            if (preTransition) preTransition(baseTransitionProps);
            var animations = Object.keys(getPoseValues(nextPose)).map(function (key) {
                var valuePoses = activePoses.has(key) ? activePoses.get(key) : (activePoses.set(key, []), activePoses.get(key));
                var existingIndex = valuePoses.indexOf(next);
                if (existingIndex !== -1) valuePoses.splice(existingIndex, 1);
                var priority = posePriority ? posePriority.indexOf(next) : 0;
                var insertionIndex = priority <= 0 ? 0 : findInsertionIndex(valuePoses, posePriority, priority);
                valuePoses.splice(insertionIndex, 0, next);
                return insertionIndex === 0 ? new Promise(function (complete) {
                    var value = values.get(key);
                    var transitionProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, baseTransitionProps, { key: key,
                        value: value });
                    var target = resolveTarget(value, resolveProp(nextPose[key], transitionProps));
                    if (activeActions.has(key)) stopAction(activeActions.get(key));
                    var resolveTransitionProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ to: target }, transitionProps, getTransitionProps(value, target, transitionProps));
                    var transition = resolveTransition(getTransition, key, value, resolveTransitionProps, convertTransitionDefinition, getInstantTransition);
                    var poseDelay = delay || resolveProp(nextPose.delay, transitionProps);
                    if (poseDelay) {
                        transition = addActionDelay(poseDelay, transition);
                    }
                    activeActions.set(key, startAction(value, transition, complete));
                }) : Promise.resolve();
            });
            return applyAtEnd ? [Promise.all(animations).then(function () {
                applyValues(applyAtEnd, values, baseTransitionProps, setValue, setValueNative);
            })] : animations;
        };
        if (nextPose && hasChildren) {
            if (resolveProp(nextPose.beforeChildren, baseTransitionProps)) {
                return Promise.all(getParentAnimations()).then(function () {
                    return Promise.all(getChildAnimations());
                });
            } else if (resolveProp(nextPose.afterChildren, baseTransitionProps)) {
                return Promise.all(getChildAnimations()).then(function () {
                    return Promise.all(getParentAnimations());
                });
            }
        }
        return Promise.all(getParentAnimations().concat(getChildAnimations()));
    };
};

var DEFAULT_INITIAL_POSE = 'init';
var isScale = function (key) {
    return key.includes('scale');
};
var defaultReadValueFromSource = function (key) {
    return isScale(key) ? 1 : 0;
};
var readValueFromPose = function (pose, key, props) {
    var valueToResolve = pose.applyAtEnd && pose.applyAtEnd[key] !== undefined ? pose.applyAtEnd[key] : pose[key] !== undefined ? pose[key] : pose.applyAtStart && pose.applyAtStart[key] !== undefined ? pose.applyAtStart[key] : 0;
    return resolveProp(valueToResolve, props);
};
var getPosesToSearch = function (pose) {
    var posesToSearch = Array.isArray(pose) ? pose : [pose];
    posesToSearch.push(DEFAULT_INITIAL_POSE);
    return posesToSearch;
};
var getInitialValue = function (poses, key, initialPose, props, readValueFromSource, activePoses) {
    if (readValueFromSource === void 0) {
        readValueFromSource = defaultReadValueFromSource;
    }
    var posesToSearch = getPosesToSearch(initialPose);
    var pose = posesToSearch.filter(Boolean).find(function (name) {
        var thisPose = poses[name];
        return thisPose && (thisPose[key] !== undefined || thisPose.applyAtStart && thisPose.applyAtStart[key] !== undefined || thisPose.applyAtEnd && thisPose.applyAtEnd[key] !== undefined);
    });
    activePoses.set(key, [pose || DEFAULT_INITIAL_POSE]);
    return pose ? readValueFromPose(poses[pose], key, props) : readValueFromSource(key, props);
};
var createValues = function (values, _a) {
    var userSetValues = _a.userSetValues,
        createValue = _a.createValue,
        convertValue = _a.convertValue,
        readValueFromSource = _a.readValueFromSource,
        initialPose = _a.initialPose,
        poses = _a.poses,
        activePoses = _a.activePoses,
        props = _a.props;
    return function (key) {
        if (values.has(key)) return;
        var value;
        if (userSetValues && userSetValues[key] !== undefined) {
            value = convertValue(userSetValues[key], key, props);
        } else {
            var initValue = getInitialValue(poses, key, initialPose, props, readValueFromSource, activePoses);
            value = createValue(initValue, key, props);
        }
        values.set(key, value);
    };
};
var scrapeValuesFromPose = function (values, props) {
    return function (key) {
        var pose = props.poses[key];
        Object.keys(getPoseValues(pose)).forEach(createValues(values, props));
    };
};
var getAncestorValue = function (key, fromParent, ancestors) {
    if (fromParent === true) {
        return ancestors[0] && ancestors[0].values.get(key);
    } else {
        var foundAncestor = ancestors.find(function (_a) {
            var label = _a.label;
            return label === fromParent;
        });
        return foundAncestor && foundAncestor.values.get(key);
    }
};
var bindPassiveValues = function (values, _a) {
    var passive = _a.passive,
        ancestorValues = _a.ancestorValues,
        createValue = _a.createValue,
        readValue = _a.readValue,
        props = _a.props;
    return function (key) {
        var _a = passive[key],
            valueKey = _a[0],
            passiveProps = _a[1],
            fromParent = _a[2];
        var valueToBind = fromParent && ancestorValues.length ? getAncestorValue(valueKey, fromParent, ancestorValues) : values.has(valueKey) ? values.get(valueKey) : false;
        if (!valueToBind) return;
        var newValue = createValue(readValue(valueToBind), key, props, {
            passiveParentKey: valueKey,
            passiveParent: valueToBind,
            passiveProps: passiveProps
        });
        values.set(key, newValue);
    };
};
var setNativeValues = function (_a) {
    var setValueNative = _a.setValueNative,
        initialPose = _a.initialPose,
        props = _a.props,
        poses = _a.poses;
    var valuesHaveSet = new Set();
    var setValues = function (pose, propKey) {
        if (pose[propKey]) {
            for (var key in pose[propKey]) {
                if (!valuesHaveSet.has(key)) {
                    valuesHaveSet.add(key);
                    setValueNative(key, resolveProp(pose[propKey][key], props), props);
                }
            }
        }
    };
    getPosesToSearch(initialPose).forEach(function (poseKey) {
        var pose = poses[poseKey];
        if (pose) {
            setValues(pose, 'applyAtEnd');
            setValues(pose, 'applyAtStart');
        }
    });
};
var createValueMap = function (props) {
    var poses = props.poses,
        passive = props.passive;
    var values = new Map();
    Object.keys(poses).forEach(scrapeValuesFromPose(values, props));
    setNativeValues(props);
    if (passive) Object.keys(passive).forEach(bindPassiveValues(values, props));
    return values;
};

var applyDefaultTransition = function (pose, key, defaultTransitions) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, pose, { transition: defaultTransitions.has(key) ? defaultTransitions.get(key) : defaultTransitions.get('default') });
};
var generateTransitions = function (poses, defaultTransitions) {
    Object.keys(poses).forEach(function (key) {
        var pose = poses[key];
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(typeof pose === 'object', "Pose '" + key + "' is of invalid type. All poses should be objects.");
        poses[key] = pose.transition !== undefined ? pose : applyDefaultTransition(pose, key, defaultTransitions);
    });
    return poses;
};

var sortByReversePriority = function (priorityOrder) {
    return function (a, b) {
        var aP = priorityOrder.indexOf(a);
        var bP = priorityOrder.indexOf(b);
        if (aP === -1 && bP !== -1) return -1;
        if (aP !== -1 && bP === -1) return 1;
        return aP - bP;
    };
};

var poseFactory = function (_a) {
    var getDefaultProps = _a.getDefaultProps,
        defaultTransitions = _a.defaultTransitions,
        bindOnChange = _a.bindOnChange,
        startAction = _a.startAction,
        stopAction = _a.stopAction,
        readValue = _a.readValue,
        readValueFromSource = _a.readValueFromSource,
        resolveTarget = _a.resolveTarget,
        setValue = _a.setValue,
        setValueNative = _a.setValueNative,
        createValue = _a.createValue,
        convertValue = _a.convertValue,
        getInstantTransition = _a.getInstantTransition,
        getTransitionProps = _a.getTransitionProps,
        addActionDelay = _a.addActionDelay,
        selectValueToRead = _a.selectValueToRead,
        convertTransitionDefinition = _a.convertTransitionDefinition,
        transformPose = _a.transformPose,
        posePriority = _a.posePriority,
        forceRender = _a.forceRender,
        extendAPI = _a.extendAPI;
    return function (config) {
        var parentValues = config.parentValues,
            _a = config.ancestorValues,
            ancestorValues = _a === void 0 ? [] : _a;
        if (parentValues) ancestorValues.unshift({ values: parentValues });
        var activeActions = new Map();
        var activePoses = new Map();
        var children = new Set();
        var poses = generateTransitions(selectPoses(config), defaultTransitions);
        var _b = config.props,
            props = _b === void 0 ? {} : _b;
        if (getDefaultProps) props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getDefaultProps(config), props);
        var passive = config.passive,
            userSetValues = config.values,
            _c = config.initialPose,
            initialPose = _c === void 0 ? DEFAULT_INITIAL_POSE : _c;
        var values = createValueMap({
            poses: poses,
            passive: passive,
            ancestorValues: ancestorValues,
            readValue: readValue,
            setValueNative: setValueNative,
            createValue: createValue,
            convertValue: convertValue,
            readValueFromSource: readValueFromSource,
            userSetValues: userSetValues,
            initialPose: initialPose,
            activePoses: activePoses,
            props: props
        });
        var state = {
            activeActions: activeActions,
            activePoses: activePoses,
            children: children,
            props: props,
            values: values
        };
        var onChange = config.onChange;
        if (onChange) Object.keys(onChange).forEach(bindOnChange(values, onChange));
        var set = createPoseSetter({
            state: state,
            poses: poses,
            getInstantTransition: getInstantTransition,
            getTransitionProps: getTransitionProps,
            convertTransitionDefinition: convertTransitionDefinition,
            setValue: setValue,
            setValueNative: setValueNative,
            startAction: startAction,
            stopAction: stopAction,
            resolveTarget: resolveTarget,
            addActionDelay: addActionDelay,
            transformPose: transformPose,
            posePriority: posePriority,
            forceRender: forceRender
        });
        var has = function (poseName) {
            return !!poses[poseName];
        };
        var api = {
            set: set,
            unset: function (poseName, poseProps) {
                var posesToSet = [];
                activePoses.forEach(function (valuePoses) {
                    var poseIndex = valuePoses.indexOf(poseName);
                    if (poseIndex === -1) return;
                    var currentPose = valuePoses[0];
                    valuePoses.splice(poseIndex, 1);
                    var nextPose = valuePoses[0];
                    if (nextPose === currentPose) return;
                    if (posesToSet.indexOf(nextPose) === -1) {
                        posesToSet.push(nextPose);
                    }
                });
                var animationsToResolve = posesToSet.sort(sortByReversePriority(posePriority)).map(function (poseToSet) {
                    return set(poseToSet, poseProps, false);
                });
                children.forEach(function (child) {
                    return animationsToResolve.push(child.unset(poseName));
                });
                return Promise.all(animationsToResolve);
            },
            get: function (valueName) {
                return valueName ? selectValueToRead(values.get(valueName)) : selectAllValues(values, selectValueToRead);
            },
            has: has,
            setProps: function (newProps) {
                return state.props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.props, newProps);
            },
            _addChild: function (childConfig, factory) {
                var child = factory(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ initialPose: initialPose }, childConfig, { ancestorValues: [{ label: config.label, values: values }].concat(ancestorValues) }));
                children.add(child);
                return child;
            },
            removeChild: function (child) {
                return children.delete(child);
            },
            clearChildren: function () {
                children.forEach(function (child) {
                    return child.destroy();
                });
                children.clear();
            },
            destroy: function () {
                activeActions.forEach(stopAction);
                children.forEach(function (child) {
                    return child.destroy();
                });
            }
        };
        return extendAPI(api, state, config);
    };
};

/* harmony default export */ __webpack_exports__["default"] = (poseFactory);


/***/ }),

/***/ "./node_modules/react-pose/dist/react-pose.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-pose/dist/react-pose.es.js ***!
  \*******************************************************/
/*! exports provided: default, Transition, PoseGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoseGroup", function() { return PoseGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var popmotion_pose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion-pose */ "./node_modules/popmotion-pose/dist/popmotion-pose.es.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/react-pose/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");






var hasChanged = function (prev, next) {
    if (prev === next)
        return false;
    var prevIsArray = Array.isArray(prev);
    var nextIsArray = Array.isArray(next);
    if (prevIsArray !== nextIsArray || (!prevIsArray && !nextIsArray)) {
        return true;
    }
    else if (prevIsArray && nextIsArray) {
        var numPrev = prev.length;
        var numNext = next.length;
        if (numPrev !== numNext)
            return true;
        for (var i = 0; i < numPrev; i++) {
            if (prev[i] !== next[i])
                return true;
        }
    }
    return false;
};

var pickAssign = function (shouldPick, sources) {
    return sources.reduce(function (picked, source) {
        for (var key in source) {
            if (shouldPick(key)) {
                picked[key] = source[key];
            }
        }
        return picked;
    }, {});
};

var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({}), PoseParentConsumer = _a.Consumer, PoseParentProvider = _a.Provider;
var calcPopFromFlowStyle = function (el) {
    var offsetTop = el.offsetTop, offsetLeft = el.offsetLeft, offsetWidth = el.offsetWidth, offsetHeight = el.offsetHeight;
    return {
        position: 'absolute',
        top: offsetTop,
        left: offsetLeft,
        width: offsetWidth,
        height: offsetHeight
    };
};
var hasPose = function (pose, key) {
    return Array.isArray(pose) ? pose.indexOf(key) !== -1 : pose === key;
};
var objectToMap = function (obj) {
    return Object.keys(obj).reduce(function (map, key) {
        map.set(key, { raw: obj[key] });
        return map;
    }, new Map());
};
var testAlwaysTrue = function () { return true; };
var filterProps = function (_a) {
    var elementType = _a.elementType, poseConfig = _a.poseConfig, onValueChange = _a.onValueChange, innerRef = _a.innerRef, _pose = _a._pose, pose = _a.pose, initialPose = _a.initialPose, poseKey = _a.poseKey, onPoseComplete = _a.onPoseComplete, getParentPoseConfig = _a.getParentPoseConfig, registerChild = _a.registerChild, onUnmount = _a.onUnmount, getInitialPoseFromParent = _a.getInitialPoseFromParent, popFromFlow = _a.popFromFlow, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, onPressStart = _a.onPressStart, onPressEnd = _a.onPressEnd, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["elementType", "poseConfig", "onValueChange", "innerRef", "_pose", "pose", "initialPose", "poseKey", "onPoseComplete", "getParentPoseConfig", "registerChild", "onUnmount", "getInitialPoseFromParent", "popFromFlow", "values", "parentValues", "onDragStart", "onDragEnd", "onPressStart", "onPressEnd"]);
    return props;
};
var PoseElement = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PoseElement, _super);
    function PoseElement(props) {
        var _this = _super.call(this, props) || this;
        _this.children = new Set();
        _this.childrenHandlers = {
            registerChild: function (props) {
                _this.children.add(props);
                if (_this.poser)
                    _this.flushChildren();
            },
            onUnmount: function (child) { return _this.poser.removeChild(child); },
            getParentPoseConfig: function () { return _this.poseConfig; },
            getInitialPoseFromParent: function () { return _this.getInitialPose(); }
        };
        _this.setRef = function (ref) {
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["warning"])(ref === null || (ref instanceof Element && _this.ref === undefined), 'ref must be provided to the same DOM component for the entire lifecycle of a posed component.');
            _this.ref = ref;
            var innerRef = _this.props.innerRef;
            if (!innerRef)
                return;
            if (typeof innerRef === 'function') {
                innerRef(ref);
            }
            else {
                innerRef.current = ref;
            }
        };
        _this.shouldForwardProp =
            typeof _this.props.elementType === 'string' ? _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_3__["default"] : testAlwaysTrue;
        var poseConfig = _this.props.poseConfig;
        _this.poseConfig =
            typeof poseConfig === 'function'
                ? poseConfig(filterProps(props))
                : poseConfig;
        return _this;
    }
    PoseElement.prototype.getInitialPose = function () {
        var _a = this.props, getInitialPoseFromParent = _a.getInitialPoseFromParent, pose = _a.pose, _pose = _a._pose, initialPose = _a.initialPose;
        if (initialPose) {
            return initialPose;
        }
        else {
            var parentPose = getInitialPoseFromParent && getInitialPoseFromParent();
            var initialPoses = (Array.isArray(parentPose)
                ? parentPose
                : [parentPose])
                .concat(pose, _pose)
                .filter(Boolean);
            return initialPoses.length > 0 ? initialPoses : undefined;
        }
    };
    PoseElement.prototype.getFirstPose = function () {
        var _a = this.props, initialPose = _a.initialPose, pose = _a.pose, _pose = _a._pose;
        if (!initialPose)
            return;
        var firstPose = (Array.isArray(pose) ? pose : [pose])
            .concat(_pose)
            .filter(Boolean);
        return firstPose.length === 1 ? firstPose[0] : firstPose;
    };
    PoseElement.prototype.getSetProps = function () {
        var props = filterProps(this.props);
        if (this.props.popFromFlow && this.ref && this.ref instanceof HTMLElement) {
            if (!this.popStyle) {
                props.style = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props.style, calcPopFromFlowStyle(this.ref));
                this.popStyle = props.style;
            }
            else {
                props.style = this.popStyle;
            }
        }
        else {
            this.popStyle = null;
        }
        return props;
    };
    PoseElement.prototype.componentDidMount = function () {
        var _this = this;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(this.ref instanceof Element, "No valid DOM ref found. If you're converting an existing component via posed(Component), you must ensure you're passing the ref to the host DOM node via the React.forwardRef function.");
        var _a = this.props, onValueChange = _a.onValueChange, registerChild = _a.registerChild, values = _a.values, parentValues = _a.parentValues, onDragStart = _a.onDragStart, onDragEnd = _a.onDragEnd, onPressStart = _a.onPressStart, onPressEnd = _a.onPressEnd;
        var config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.poseConfig, { initialPose: this.getInitialPose(), values: values || this.poseConfig.values, parentValues: parentValues ? objectToMap(parentValues) : undefined, props: this.getSetProps(), onDragStart: onDragStart,
            onDragEnd: onDragEnd,
            onPressStart: onPressStart,
            onPressEnd: onPressEnd, onChange: onValueChange });
        if (!registerChild) {
            this.initPoser(Object(popmotion_pose__WEBPACK_IMPORTED_MODULE_2__["default"])(this.ref, config));
        }
        else {
            registerChild({
                element: this.ref,
                poseConfig: config,
                onRegistered: function (poser) { return _this.initPoser(poser); }
            });
        }
    };
    PoseElement.prototype.getSnapshotBeforeUpdate = function () {
        var _a = this.props, pose = _a.pose, _pose = _a._pose;
        if (hasPose(pose, 'flip') || hasPose(_pose, 'flip'))
            this.poser.measure();
        return null;
    };
    PoseElement.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, pose = _a.pose, _pose = _a._pose, poseKey = _a.poseKey;
        this.poser.setProps(this.getSetProps());
        if (poseKey !== prevProps.poseKey ||
            hasChanged(prevProps.pose, pose) ||
            pose === 'flip') {
            this.setPose(pose);
        }
        if (_pose !== prevProps._pose || _pose === 'flip')
            this.setPose(_pose);
    };
    PoseElement.prototype.componentWillUnmount = function () {
        if (!this.poser)
            return;
        var onUnmount = this.props.onUnmount;
        if (onUnmount)
            onUnmount(this.poser);
        this.poser.destroy();
    };
    PoseElement.prototype.initPoser = function (poser) {
        this.poser = poser;
        this.flushChildren();
        var firstPose = this.getFirstPose();
        if (firstPose)
            this.setPose(firstPose);
    };
    PoseElement.prototype.setPose = function (pose) {
        var _this = this;
        var onPoseComplete = this.props.onPoseComplete;
        var poseList = Array.isArray(pose) ? pose : [pose];
        Promise.all(poseList.map(function (key) { return key && _this.poser.set(key); })).then(function () { return onPoseComplete && onPoseComplete(pose); });
    };
    PoseElement.prototype.flushChildren = function () {
        var _this = this;
        this.children.forEach(function (_a) {
            var element = _a.element, poseConfig = _a.poseConfig, onRegistered = _a.onRegistered;
            return onRegistered(_this.poser.addChild(element, poseConfig));
        });
        this.children.clear();
    };
    PoseElement.prototype.render = function () {
        var elementType = this.props.elementType;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PoseParentProvider, { value: this.childrenHandlers }, Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementType, pickAssign(this.shouldForwardProp, [
            this.getSetProps(),
            { ref: this.setRef }
        ]))));
    };
    return PoseElement;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));

var supportedElements = [
    'a',
    'article',
    'aside',
    'audio',
    'b',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dialog',
    'div',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'i',
    'iframe',
    'img',
    'input',
    'label',
    'legend',
    'li',
    'nav',
    'object',
    'ol',
    'option',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'section',
    'select',
    'span',
    'strong',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'ul',
    'video',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan'
];

var componentCache = new Map();
var createComponentFactory = function (key) {
    var componentFactory = function (poseConfig) {
        if (poseConfig === void 0) { poseConfig = {}; }
        return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (_a, ref) {
            var _b = _a.withParent, withParent = _b === void 0 ? true : _b, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["withParent"]);
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["warning"])(props.innerRef === undefined, 'innerRef is deprecated. Please use ref instead.');
            return !withParent || props.parentValues ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PoseElement, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ poseConfig: poseConfig, innerRef: ref, elementType: key }, props))) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PoseParentConsumer, null, function (parentCtx) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PoseElement, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ poseConfig: poseConfig, elementType: key, innerRef: ref }, props, parentCtx))); }));
        });
    };
    componentCache.set(key, componentFactory);
    return componentFactory;
};
var getComponentFactory = function (key) {
    return componentCache.has(key)
        ? componentCache.get(key)
        : createComponentFactory(key);
};
var posed = (function (component) {
    return getComponentFactory(component);
});
supportedElements.reduce(function (acc, key) {
    acc[key] = createComponentFactory(key);
    return acc;
}, posed);

var getKey = function (child) {
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["invariant"])(child && child.key !== null, 'Every child of Transition must be given a unique key');
    var childKey = typeof child.key === 'number' ? child.key.toString() : child.key;
    return childKey.replace('.$', '');
};
var prependProps = function (element, props) {
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(element.type, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: element.key, ref: element.ref }, props, element.props));
};
var handleTransition = function (_a, _b) {
    var displayedChildren = _b.displayedChildren, finishedLeaving = _b.finishedLeaving, hasInitialized = _b.hasInitialized, indexedChildren = _b.indexedChildren, scheduleChildRemoval = _b.scheduleChildRemoval;
    var incomingChildren = _a.children, preEnterPose = _a.preEnterPose, enterPose = _a.enterPose, exitPose = _a.exitPose, animateOnMount = _a.animateOnMount, enterAfterExit = _a.enterAfterExit, flipMove = _a.flipMove, onRest = _a.onRest, propsForChildren = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["children", "preEnterPose", "enterPose", "exitPose", "animateOnMount", "enterAfterExit", "flipMove", "onRest"]);
    var targetChildren = makeChildList(incomingChildren);
    var nextState = {
        displayedChildren: []
    };
    if (true) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_4__["warning"])(!propsForChildren.onPoseComplete, "<Transition/> (or <PoseGroup/>) doesn't accept onPoseComplete prop.");
    }
    var prevKeys = displayedChildren.map(getKey);
    var nextKeys = targetChildren.map(getKey);
    var hasPropsForChildren = Object.keys(propsForChildren).length !== 0;
    var entering = new Set(nextKeys.filter(function (key) { return finishedLeaving.hasOwnProperty(key) || prevKeys.indexOf(key) === -1; }));
    entering.forEach(function (key) { return delete finishedLeaving[key]; });
    var leaving = [];
    var newlyLeaving = {};
    prevKeys.forEach(function (key) {
        if (entering.has(key)) {
            return;
        }
        var isLeaving = finishedLeaving.hasOwnProperty(key);
        if (!isLeaving && nextKeys.indexOf(key) !== -1) {
            return;
        }
        leaving.push(key);
        if (!isLeaving) {
            finishedLeaving[key] = false;
            newlyLeaving[key] = true;
        }
    });
    var moving = new Set(prevKeys.filter(function (key, i) {
        return !entering.has(key) || leaving.indexOf(key) === -1;
    }));
    targetChildren.forEach(function (child) {
        var newChildProps = {};
        if (entering.has(child.key)) {
            if (hasInitialized || animateOnMount) {
                newChildProps.initialPose = preEnterPose;
            }
            newChildProps._pose = enterPose;
        }
        else if (moving.has(child.key) && flipMove) {
            newChildProps._pose = [enterPose, 'flip'];
        }
        else {
            newChildProps._pose = enterPose;
        }
        var newChild = Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child, newChildProps);
        indexedChildren[child.key] = newChild;
        nextState.displayedChildren.push(hasPropsForChildren ? prependProps(newChild, propsForChildren) : newChild);
    });
    leaving.forEach(function (key) {
        var child = indexedChildren[key];
        var newChild = newlyLeaving[key]
            ? Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(child, {
                _pose: exitPose,
                onPoseComplete: function (pose) {
                    if (pose === exitPose)
                        scheduleChildRemoval(key);
                    var onPoseComplete = child.props.onPoseComplete;
                    if (onPoseComplete)
                        onPoseComplete(pose);
                },
                popFromFlow: flipMove
            })
            : child;
        var insertionIndex = prevKeys.indexOf(key);
        indexedChildren[child.key] = newChild;
        nextState.displayedChildren.splice(insertionIndex, 0, hasPropsForChildren ? prependProps(newChild, propsForChildren) : newChild);
    });
    return nextState;
};
var handleChildrenTransitions = (function (props, state) {
    var newState = handleTransition(props, state);
    newState.hasInitialized = true;
    return newState;
});
var makeChildList = function (children) {
    var list = [];
    react__WEBPACK_IMPORTED_MODULE_1__["Children"].forEach(children, function (child) { return child && list.push(child); });
    return list;
};

var Transition = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Transition, _super);
    function Transition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            displayedChildren: [],
            finishedLeaving: {},
            hasInitialized: false,
            indexedChildren: {},
            scheduleChildRemoval: function (key) { return _this.removeChild(key); }
        };
        return _this;
    }
    Transition.prototype.removeChild = function (key) {
        var _a = this.state, displayedChildren = _a.displayedChildren, finishedLeaving = _a.finishedLeaving;
        var _b = this.props, enterAfterExit = _b.enterAfterExit, onRest = _b.onRest;
        if (!finishedLeaving.hasOwnProperty(key))
            return;
        finishedLeaving[key] = true;
        if (!Object.keys(finishedLeaving).every(function (leavingKey) { return finishedLeaving[leavingKey]; })) {
            return;
        }
        var targetChildren = displayedChildren.filter(function (child) { return !finishedLeaving.hasOwnProperty(child.key); });
        var newState = enterAfterExit
            ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ finishedLeaving: {} }, handleChildrenTransitions(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props, { enterAfterExit: false }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state, { displayedChildren: targetChildren }))) : {
            finishedLeaving: {},
            displayedChildren: targetChildren
        };
        this.setState(newState, onRest);
    };
    Transition.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.state !== nextState;
    };
    Transition.prototype.render = function () {
        return this.state.displayedChildren;
    };
    Transition.defaultProps = {
        flipMove: false,
        enterAfterExit: false,
        preEnterPose: 'exit',
        enterPose: 'enter',
        exitPose: 'exit'
    };
    Transition.getDerivedStateFromProps = handleChildrenTransitions;
    return Transition;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

var PoseGroup = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PoseGroup, _super);
    function PoseGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PoseGroup.prototype.render = function () {
        return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Transition, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props));
    };
    PoseGroup.defaultProps = {
        flipMove: true
    };
    return PoseGroup;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/* harmony default export */ __webpack_exports__["default"] = (posed);



/***/ }),

/***/ "./node_modules/react-pose/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-pose/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/react-pose/node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/react-pose/node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-pose/node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


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



/***/ }),

/***/ "./node_modules/style-value-types/dist/style-value-types.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-value-types/dist/style-value-types.es.js ***!
  \*********************************************************************/
/*! exports provided: number, scale, alpha, degrees, percent, progressPercentage, px, vw, vh, rgba, rgbUnit, hsla, hex, color, complex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressPercentage", function() { return progressPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vw", function() { return vw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vh", function() { return vh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbUnit", function() { return rgbUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return complex; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var clamp = function (min, max) { return function (v) {
    return Math.max(Math.min(v, max), min);
}; };
var sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };
var floatRegex = /(-)?(\d[\d\.]*)/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i;

var number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; }
};
var alpha = __assign({}, number, { transform: clamp(0, 1) });
var scale = __assign({}, number, { default: 1 });

var createUnitType = function (unit) { return ({
    test: function (v) {
        return typeof v === 'string' && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function (v) { return "" + v + unit; }
}); };
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var vh = createUnitType('vh');
var vw = createUnitType('vw');
var progressPercentage = __assign({}, percent, { parse: function (v) { return percent.parse(v) / 100; }, transform: function (v) { return percent.transform(v * 100); } });

var getValueFromFunctionString = function (value) {
    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};
var clampRgbUnit = clamp(0, 255);
var isRgba = function (v) { return v.red !== undefined; };
var isHsla = function (v) { return v.hue !== undefined; };
var splitColorValues = function (terms) {
    return function (v) {
        if (typeof v !== 'string')
            return v;
        var values = {};
        var valuesArray = getValueFromFunctionString(v).split(/,\s*/);
        for (var i = 0; i < 4; i++) {
            values[terms[i]] =
                valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
        }
        return values;
    };
};
var rgbaTemplate = function (_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha$$1 + ")";
};
var hslaTemplate = function (_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
    return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha$$1 + ")";
};
var rgbUnit = __assign({}, number, { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
function isColorString(color, colorType) {
    return color.startsWith(colorType) && singleColorRegex.test(color);
}
var rgba = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'rgb') : isRgba(v)); },
    parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
    transform: function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
        return rgbaTemplate({
            red: rgbUnit.transform(red),
            green: rgbUnit.transform(green),
            blue: rgbUnit.transform(blue),
            alpha: sanitize(alpha.transform(alpha$$1))
        });
    }
};
var hsla = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'hsl') : isHsla(v)); },
    parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
    transform: function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$$1 = _b === void 0 ? 1 : _b;
        return hslaTemplate({
            hue: Math.round(hue),
            saturation: percent.transform(sanitize(saturation)),
            lightness: percent.transform(sanitize(lightness)),
            alpha: sanitize(alpha.transform(alpha$$1))
        });
    }
};
var hex = __assign({}, rgba, { test: function (v) { return typeof v === 'string' && isColorString(v, '#'); }, parse: function (v) {
        var r = '';
        var g = '';
        var b = '';
        if (v.length > 4) {
            r = v.substr(1, 2);
            g = v.substr(3, 2);
            b = v.substr(5, 2);
        }
        else {
            r = v.substr(1, 1);
            g = v.substr(2, 1);
            b = v.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
        return {
            red: parseInt(r, 16),
            green: parseInt(g, 16),
            blue: parseInt(b, 16),
            alpha: 1
        };
    } });
var color = {
    test: function (v) {
        return (typeof v === 'string' && singleColorRegex.test(v)) ||
            isRgba(v) ||
            isHsla(v);
    },
    parse: function (v) {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else if (hex.test(v)) {
            return hex.parse(v);
        }
        return v;
    },
    transform: function (v) {
        if (isRgba(v)) {
            return rgba.transform(v);
        }
        else if (isHsla(v)) {
            return hsla.transform(v);
        }
        return v;
    }
};

var COLOR_TOKEN = '${c}';
var NUMBER_TOKEN = '${n}';
var convertNumbersToZero = function (v) {
    return typeof v === 'number' ? 0 : v;
};
var complex = {
    test: function (v) {
        if (typeof v !== 'string' || !isNaN(v))
            return false;
        var numValues = 0;
        var foundNumbers = v.match(floatRegex);
        var foundColors = v.match(colorRegex);
        if (foundNumbers)
            numValues += foundNumbers.length;
        if (foundColors)
            numValues += foundColors.length;
        return numValues > 0;
    },
    parse: function (v) {
        var input = v;
        var parsed = [];
        var foundColors = input.match(colorRegex);
        if (foundColors) {
            input = input.replace(colorRegex, COLOR_TOKEN);
            parsed.push.apply(parsed, foundColors.map(color.parse));
        }
        var foundNumbers = input.match(floatRegex);
        if (foundNumbers) {
            parsed.push.apply(parsed, foundNumbers.map(number.parse));
        }
        return parsed;
    },
    createTransformer: function (prop) {
        var template = prop;
        var token = 0;
        var foundColors = prop.match(colorRegex);
        var numColors = foundColors ? foundColors.length : 0;
        if (foundColors) {
            for (var i = 0; i < numColors; i++) {
                template = template.replace(foundColors[i], COLOR_TOKEN);
                token++;
            }
        }
        var foundNumbers = template.match(floatRegex);
        var numNumbers = foundNumbers ? foundNumbers.length : 0;
        if (foundNumbers) {
            for (var i = 0; i < numNumbers; i++) {
                template = template.replace(foundNumbers[i], NUMBER_TOKEN);
                token++;
            }
        }
        return function (v) {
            var output = template;
            for (var i = 0; i < token; i++) {
                output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
            }
            return output;
        };
    },
    getAnimatableNone: function (target) {
        var parsedTarget = complex.parse(target);
        var targetTransformer = complex.createTransformer(target);
        return targetTransformer(parsedTarget.map(convertNumbersToZero));
    }
};




/***/ }),

/***/ "./node_modules/stylefire/dist/stylefire.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/stylefire/dist/stylefire.es.js ***!
  \*****************************************************/
/*! exports provided: default, createStylerFactory, buildStyleProperty, isTransformProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStylerFactory", function() { return createStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildStyleProperty", function() { return buildStyleProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransformProp", function() { return isTransformProp; });
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");




/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function () {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
}

var createStyler = function (_a) {
    var onRead = _a.onRead,
        onRender = _a.onRender,
        _b = _a.uncachedValues,
        uncachedValues = _b === void 0 ? new Set() : _b,
        _c = _a.useCache,
        useCache = _c === void 0 ? true : _c;
    return function (_a) {
        if (_a === void 0) {
            _a = {};
        }
        var props = __rest(_a, []);
        var state = {};
        var changedValues = [];
        var hasChanged = false;
        function setValue(key, value) {
            if (key.startsWith('--')) {
                props.hasCSSVariable = true;
            }
            var currentValue = state[key];
            state[key] = value;
            if (state[key] === currentValue) return;
            if (changedValues.indexOf(key) === -1) {
                changedValues.push(key);
            }
            if (!hasChanged) {
                hasChanged = true;
                framesync__WEBPACK_IMPORTED_MODULE_0__["default"].render(styler.render);
            }
        }
        var styler = {
            get: function (key, forceRead) {
                if (forceRead === void 0) {
                    forceRead = false;
                }
                var useCached = !forceRead && useCache && !uncachedValues.has(key) && state[key] !== undefined;
                return useCached ? state[key] : onRead(key, props);
            },
            set: function (values, value) {
                if (typeof values === 'string') {
                    setValue(values, value);
                } else {
                    for (var key in values) {
                        setValue(key, values[key]);
                    }
                }
                return this;
            },
            render: function (forceRender) {
                if (forceRender === void 0) {
                    forceRender = false;
                }
                if (hasChanged || forceRender === true) {
                    onRender(state, props, changedValues);
                    hasChanged = false;
                    changedValues.length = 0;
                }
                return this;
            }
        };
        return styler;
    };
};

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};
var setDomAttrs = function (element, attrs) {
    for (var key in attrs) {
        if (attrs.hasOwnProperty(key)) {
            element.setAttribute(key, attrs[key]);
        }
    }
};

var camelCache = /*#__PURE__*/new Map();
var dashCache = /*#__PURE__*/new Map();
var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var isBrowser = typeof document !== 'undefined';
var testElement;
var setDashPrefix = function (key, prefixed) {
    return dashCache.set(key, camelToDash(prefixed));
};
var testPrefix = function (key) {
    testElement = testElement || document.createElement('div');
    for (var i = 0; i < numPrefixes; i++) {
        var prefix = prefixes[i];
        var noPrefix = prefix === '';
        var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
        if (prefixedPropertyName in testElement.style || noPrefix) {
            camelCache.set(key, prefixedPropertyName);
            setDashPrefix(key, "" + (noPrefix ? '' : '-') + camelToDash(prefixedPropertyName));
        }
    }
};
var setServerProperty = function (key) {
    return setDashPrefix(key, key);
};
var prefixer = function (key, asDashCase) {
    if (asDashCase === void 0) {
        asDashCase = false;
    }
    var cache = asDashCase ? dashCache : camelCache;
    if (!cache.has(key)) isBrowser ? testPrefix(key) : setServerProperty(key);
    return cache.get(key) || key;
};

var axes = ['', 'X', 'Y', 'Z'];
var order = ['scale', 'rotate', 'skew', 'transformPerspective'];
var transformProps = /*#__PURE__*/order.reduce(function (acc, key) {
    return axes.reduce(function (axesAcc, axesKey) {
        axesAcc.push(key + axesKey);
        return axesAcc;
    }, acc);
}, ['x', 'y', 'z']);
var transformPropDictionary = /*#__PURE__*/transformProps.reduce(function (dict, key) {
    dict[key] = true;
    return dict;
}, {});
function isTransformProp(key) {
    return transformPropDictionary[key] === true;
}
function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
}
var transformOriginProps = /*#__PURE__*/new Set(['originX', 'originY', 'originZ']);
function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
}

var rounded = /*#__PURE__*/__assign({}, style_value_types__WEBPACK_IMPORTED_MODULE_1__["number"], { transform: Math.round });
var valueTypes = {
    color: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    fill: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    stroke: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    radius: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    width: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    height: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    size: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    top: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    right: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    left: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    padding: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    margin: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    skew: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["degrees"],
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    x: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    y: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    z: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__["alpha"],
    originX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["progressPercentage"],
    originY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["progressPercentage"],
    originZ: style_value_types__WEBPACK_IMPORTED_MODULE_1__["px"],
    zIndex: rounded
};
var getValueType = function (key) {
    return valueTypes[key];
};
var getValueAsType = function (value, type) {
    return type && typeof value === 'number' ? type.transform(value) : value;
};

var SCROLL_LEFT = 'scrollLeft';
var SCROLL_TOP = 'scrollTop';
var scrollKeys = /*#__PURE__*/new Set([SCROLL_LEFT, SCROLL_TOP]);

var blacklist = /*#__PURE__*/new Set([SCROLL_LEFT, SCROLL_TOP, 'transform']);
var translateAlias = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ'
};
function isCustomTemplate(v) {
    return typeof v === 'function';
}
function buildTransform(state, transform, transformKeys, transformIsDefault, enableHardwareAcceleration) {
    var transformString = '';
    var transformHasZ = false;
    transformKeys.sort(sortTransformProps);
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
        transformHasZ = key === 'z' ? true : transformHasZ;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
        transformString += 'translateZ(0)';
    } else {
        transformString = transformString.trim();
    }
    if (isCustomTemplate(state.transform)) {
        transformString = state.transform(transform, transformString);
    } else if (transformIsDefault) {
        transformString = 'none';
    }
    return transformString;
}
function buildStyleProperty(state, enableHardwareAcceleration, styles, transform, transformOrigin, transformKeys, isDashCase) {
    if (enableHardwareAcceleration === void 0) {
        enableHardwareAcceleration = true;
    }
    if (styles === void 0) {
        styles = {};
    }
    if (transform === void 0) {
        transform = {};
    }
    if (transformOrigin === void 0) {
        transformOrigin = {};
    }
    if (transformKeys === void 0) {
        transformKeys = [];
    }
    if (isDashCase === void 0) {
        isDashCase = false;
    }
    var transformIsDefault = true;
    var hasTransform = false;
    var hasTransformOrigin = false;
    for (var key in state) {
        var value = state[key];
        var valueType = getValueType(key);
        var valueAsType = getValueAsType(value, valueType);
        if (isTransformProp(key)) {
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            if (transformIsDefault) {
                if (valueType.default && value !== valueType.default || !valueType.default && value !== 0) {
                    transformIsDefault = false;
                }
            }
        } else if (isTransformOriginProp(key)) {
            transformOrigin[key] = valueAsType;
            hasTransformOrigin = true;
        } else if (!blacklist.has(key) || !isCustomTemplate(valueAsType)) {
            styles[prefixer(key, isDashCase)] = valueAsType;
        }
    }
    if (hasTransform || typeof state.transform === 'function') {
        styles.transform = buildTransform(state, transform, transformKeys, transformIsDefault, enableHardwareAcceleration);
    }
    if (hasTransformOrigin) {
        styles.transformOrigin = (transformOrigin.originX || 0) + " " + (transformOrigin.originY || 0) + " " + (transformOrigin.originZ || 0);
    }
    return styles;
}
function createStyleBuilder(enableHardwareAcceleration) {
    if (enableHardwareAcceleration === void 0) {
        enableHardwareAcceleration = true;
    }
    var styles = {};
    var transform = {};
    var transformOrigin = {};
    var transformKeys = [];
    return function (state) {
        transformKeys.length = 0;
        buildStyleProperty(state, enableHardwareAcceleration, styles, transform, transformOrigin, transformKeys, true);
        return styles;
    };
}

function onRead(key, options) {
    var element = options.element,
        preparseOutput = options.preparseOutput;
    var defaultValueType = getValueType(key);
    if (isTransformProp(key)) {
        return defaultValueType ? defaultValueType.default || 0 : 0;
    } else if (scrollKeys.has(key)) {
        return element[key];
    } else {
        var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer(key, true)) || 0;
        return preparseOutput && defaultValueType && defaultValueType.test(domValue) && defaultValueType.parse ? defaultValueType.parse(domValue) : domValue;
    }
}
function onRender(state, _a, changedValues) {
    var element = _a.element,
        buildStyles = _a.buildStyles,
        hasCSSVariable = _a.hasCSSVariable;
    Object.assign(element.style, buildStyles(state));
    if (hasCSSVariable) {
        var numChangedValues = changedValues.length;
        for (var i = 0; i < numChangedValues; i++) {
            var key = changedValues[i];
            if (key.startsWith('--')) {
                element.style.setProperty(key, state[key]);
            }
        }
    }
    if (changedValues.indexOf(SCROLL_LEFT) !== -1) {
        element[SCROLL_LEFT] = state[SCROLL_LEFT];
    }
    if (changedValues.indexOf(SCROLL_TOP) !== -1) {
        element[SCROLL_TOP] = state[SCROLL_TOP];
    }
}
var cssStyler = /*#__PURE__*/createStyler({
    onRead: onRead,
    onRender: onRender,
    uncachedValues: scrollKeys
});
function createCssStyler(element, _a) {
    if (_a === void 0) {
        _a = {};
    }
    var enableHardwareAcceleration = _a.enableHardwareAcceleration,
        props = __rest(_a, ["enableHardwareAcceleration"]);
    return cssStyler(__assign({ element: element, buildStyles: createStyleBuilder(enableHardwareAcceleration), preparseOutput: true }, props));
}

var camelCaseAttributes = /*#__PURE__*/new Set(['baseFrequency', 'diffuseConstant', 'kernelMatrix', 'kernelUnitLength', 'keySplines', 'keyTimes', 'limitingConeAngle', 'markerHeight', 'markerWidth', 'numOctaves', 'targetX', 'targetY', 'surfaceScale', 'specularConstant', 'specularExponent', 'stdDeviation', 'tableValues']);

var ZERO_NOT_ZERO = 0.0000001;
var progressToPixels = function (progress, length) {
    return progress * length + 'px';
};
var build = function (state, dimensions, isPath, pathLength) {
    var hasTransform = false;
    var hasDashArray = false;
    var props = {};
    var dashArrayStyles = isPath ? {
        pathLength: '0',
        pathSpacing: "" + pathLength
    } : undefined;
    var scale$$1 = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
    var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale$$1 || 1;
    var transformOriginX = dimensions.width * (state.originX || 50) + dimensions.x;
    var transformOriginY = dimensions.height * (state.originY || 50) + dimensions.y;
    var scaleTransformX = -transformOriginX * (scale$$1 * 1);
    var scaleTransformY = -transformOriginY * (scaleY * 1);
    var scaleReplaceX = transformOriginX / scale$$1;
    var scaleReplaceY = transformOriginY / scaleY;
    var transform = {
        translate: "translate(" + state.x + ", " + state.y + ") ",
        scale: "translate(" + scaleTransformX + ", " + scaleTransformY + ") scale(" + scale$$1 + ", " + scaleY + ") translate(" + scaleReplaceX + ", " + scaleReplaceY + ") ",
        rotate: "rotate(" + state.rotate + ", " + transformOriginX + ", " + transformOriginY + ") ",
        skewX: "skewX(" + state.skewX + ") ",
        skewY: "skewY(" + state.skewY + ") "
    };
    for (var key in state) {
        if (state.hasOwnProperty(key)) {
            var value = state[key];
            if (isTransformProp(key)) {
                hasTransform = true;
            } else if (isPath && (key === 'pathLength' || key === 'pathSpacing') && typeof value === 'number') {
                hasDashArray = true;
                dashArrayStyles[key] = progressToPixels(value, pathLength);
            } else if (isPath && key === 'pathOffset') {
                props['stroke-dashoffset'] = progressToPixels(-value, pathLength);
            } else {
                var attrKey = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
                props[attrKey] = value;
            }
        }
    }
    if (hasDashArray) {
        props['stroke-dasharray'] = dashArrayStyles.pathLength + ' ' + dashArrayStyles.pathSpacing;
    }
    if (hasTransform) {
        props.transform = '';
        for (var key in transform) {
            if (transform.hasOwnProperty(key)) {
                var defaultValue = key === 'scale' ? '1' : '0';
                props.transform += transform[key].replace(/undefined/g, defaultValue);
            }
        }
    }
    return props;
};

var int = /*#__PURE__*/__assign({}, style_value_types__WEBPACK_IMPORTED_MODULE_1__["number"], { transform: Math.round });
var valueTypes$1 = {
    fill: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    stroke: style_value_types__WEBPACK_IMPORTED_MODULE_1__["color"],
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_1__["scale"],
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__["alpha"],
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__["alpha"],
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_1__["alpha"],
    numOctaves: int
};
var getValueType$1 = function (key) {
    return valueTypes$1[key];
};

var getDimensions = function (element) {
    return typeof element.getBBox === 'function' ? element.getBBox() : element.getBoundingClientRect();
};
var getSVGElementDimensions = function (element) {
    try {
        return getDimensions(element);
    } catch (e) {
        return { x: 0, y: 0, width: 0, height: 0 };
    }
};

var svgStyler = /*#__PURE__*/createStyler({
    onRead: function (key, _a) {
        var element = _a.element;
        if (!isTransformProp(key)) {
            return element.getAttribute(key);
        } else {
            var valueType = getValueType$1(key);
            return valueType ? valueType.default : 0;
        }
    },
    onRender: function (state, _a) {
        var dimensions = _a.dimensions,
            element = _a.element,
            isPath = _a.isPath,
            pathLength = _a.pathLength;
        setDomAttrs(element, build(state, dimensions, isPath, pathLength));
    }
});
var svg = function (element) {
    var dimensions = getSVGElementDimensions(element);
    var props = {
        element: element,
        dimensions: dimensions,
        isPath: false
    };
    if (element.tagName === 'path') {
        props.isPath = true;
        props.pathLength = element.getTotalLength();
    }
    return svgStyler(props);
};

var viewport = /*#__PURE__*/createStyler({
    useCache: false,
    onRead: function (key) {
        return key === 'scrollTop' ? window.pageYOffset : window.pageXOffset;
    },
    onRender: function (_a) {
        var _b = _a.scrollTop,
            scrollTop = _b === void 0 ? 0 : _b,
            _c = _a.scrollLeft,
            scrollLeft = _c === void 0 ? 0 : _c;
        return window.scrollTo(scrollLeft, scrollTop);
    }
});

var cache = /*#__PURE__*/new WeakMap();
var createDOMStyler = function (node, props) {
    var styler;
    if (node instanceof HTMLElement) {
        styler = createCssStyler(node, props);
    } else if (node instanceof SVGElement) {
        styler = svg(node);
    } else if (node === window) {
        styler = viewport(node);
    }
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_2__["invariant"])(styler !== undefined, 'No valid node provided. Node must be HTMLElement, SVGElement or window.');
    cache.set(node, styler);
    return styler;
};
var getStyler = function (node, props) {
    return cache.has(node) ? cache.get(node) : createDOMStyler(node, props);
};
function index(nodeOrSelector, props) {
    var node = typeof nodeOrSelector === 'string' ? document.querySelector(nodeOrSelector) : nodeOrSelector;
    return getStyler(node, props);
}

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ })

}]);