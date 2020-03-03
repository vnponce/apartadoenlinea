(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

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
      Header: 'username',
      accessor: 'username'
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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/vnponce/Projects/laespecial/resources/js/components/Admin/UsersInfoBoxes/CreateUser.jsx: Unterminated JSX contents (143:35)\n\n\u001b[0m \u001b[90m 141 | \u001b[39m                className\u001b[33m=\u001b[39m\u001b[32m\"inline-block float-left text-white bg-orange-400 hover:bg-brand-orange hover:text-white focus:outline-none focus:shadow-outline font-bold py-2 px-4 rounded sm:m-auto lg:m-0\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 142 | \u001b[39m                onClick\u001b[33m=\u001b[39m{cancelProduct}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 143 | \u001b[39m                \u001b[33mCancelar\u001b[39m        \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 144 | \u001b[39m    )\u001b[0m\n\u001b[0m \u001b[90m 145 | \u001b[39m}\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 146 | \u001b[39m\u001b[0m\n    at Object.raise (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:6325:17)\n    at Object.jsxReadToken (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:3232:14)\n    at Object.getTokenFromCode (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:3610:19)\n    at Object.nextToken (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:6525:12)\n    at Object.next (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:6465:10)\n    at Object.eat (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:6470:12)\n    at Object.expect (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:7628:10)\n    at Object.jsxParseClosingElementAt (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:3503:12)\n    at Object.jsxParseElementAt (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:3527:37)\n    at Object.jsxParseElementAt (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:3531:32)\n    at Object.jsxParseElement (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:3589:17)\n    at Object.parseExprAtom (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:3596:19)\n    at Object.parseExprSubscripts (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:8412:23)\n    at Object.parseMaybeUnary (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:8392:21)\n    at Object.parseExprOps (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:8267:23)\n    at Object.parseMaybeConditional (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:8240:23)\n    at Object.parseMaybeAssign (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:8187:21)\n    at Object.parseParenAndDistinguishExpression (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:8978:28)\n    at Object.parseExprAtom (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:8762:21)\n    at Object.parseExprAtom (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:3601:20)\n    at Object.parseExprSubscripts (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:8412:23)\n    at Object.parseMaybeUnary (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:8392:21)\n    at Object.parseExprOps (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:8267:23)\n    at Object.parseMaybeConditional (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:8240:23)\n    at Object.parseMaybeAssign (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:8187:21)\n    at Object.parseExpression (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:8135:23)\n    at Object.parseReturnStatement (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:10198:28)\n    at Object.parseStatementContent (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:9877:21)\n    at Object.parseStatement (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:9829:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:10405:25)\n    at Object.parseBlockBody (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:10392:10)\n    at Object.parseBlock (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:10376:10)\n    at Object.parseFunctionBody (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:9424:24)\n    at Object.parseFunctionBodyAndFinish (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:9394:10)\n    at /Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:10535:12\n    at Object.withTopicForbiddingContext (/Users/vnponce/Projects/laespecial/node_modules/@babel/parser/lib/index.js:9702:14)");

/***/ })

}]);