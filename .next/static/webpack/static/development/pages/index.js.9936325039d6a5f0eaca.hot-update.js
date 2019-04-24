webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/elementos/estados/estados.js":
/*!********************************************!*\
  !*** ./pages/elementos/estados/estados.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _siglas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./siglas */ "./pages/elementos/estados/siglas.js");







var _jsxFileName = "D:\\sites\\vestibular\\pages\\elementos\\estados\\estados.js";




var estadosdoBrasil = [{
  sigla: 'AC',
  nome: 'Acre'
}, {
  sigla: 'AL',
  nome: 'Alagoas'
}, {
  sigla: 'AM',
  nome: 'Amazonas'
}, {
  sigla: 'AP',
  nome: 'Amapá'
}, {
  sigla: 'BA',
  nome: 'Bahia'
}, {
  sigla: 'CE',
  nome: 'Ceará'
}, {
  sigla: 'DF',
  nome: 'Distrito Federal'
}, {
  sigla: 'ES',
  nome: 'Espiríto Santo'
}, {
  sigla: 'GO',
  nome: 'Goiás'
}, {
  sigla: 'MA',
  nome: 'Maranhão'
}, {
  sigla: 'MG',
  nome: 'Minas Gerais'
}, {
  sigla: 'MS',
  nome: 'Mato Grosso do Sul'
}, {
  sigla: 'MT',
  nome: 'Mato Grosso'
}, {
  sigla: 'PB',
  nome: 'Paraiba'
}, {
  sigla: 'PE',
  nome: 'Pernambuco'
}, {
  sigla: 'PI',
  nome: 'Piaui'
}, {
  sigla: 'PR',
  nome: 'Paraná'
}, {
  sigla: 'RJ',
  nome: 'Rio de Janeiro'
}, {
  sigla: 'RN',
  nome: 'Rio Grande do Norte'
}, {
  sigla: 'RI',
  nome: 'Rondônia'
}, {
  sigla: 'RR',
  nome: 'Roraima'
}, {
  sigla: 'RS',
  nome: 'Rio Grande do Sul'
}, {
  sigla: 'SC',
  nome: 'Santa Catarina'
}, {
  sigla: 'SE',
  nome: 'Sergipe'
}, {
  sigla: 'SP',
  nome: 'São Paulo'
}, {
  sigla: 'TO',
  nome: 'Tocantins'
}];

var Estados =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Estados, _Component);

  function Estados() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Estados);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Estados)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Estados, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.grupoEstados,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.porEstados,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Por estado"), estadosdoBrasil.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_siglas__WEBPACK_IMPORTED_MODULE_10__["default"], {
          key: item.sigla,
          siglas: item.sigla,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        });
      })));
    }
  }]);

  return Estados;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Estados);

/***/ })

})
//# sourceMappingURL=index.js.9936325039d6a5f0eaca.hot-update.js.map