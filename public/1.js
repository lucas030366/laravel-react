(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/projeto-react/components/dashboard/variables/Variaveis.jsx":
/*!*********************************************************************************!*\
  !*** ./resources/js/projeto-react/components/dashboard/variables/Variaveis.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _resources_store_variaveis_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/resources/store/variaveis/actions */ "./resources/js/projeto-react/resources/store/variaveis/actions.js");
/* harmony import */ var _resources_request_variables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/resources/request/variables */ "./resources/js/projeto-react/resources/request/variables.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(1)
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    }
  };
});


var getVariables = _resources_store_variaveis_actions__WEBPACK_IMPORTED_MODULE_8__["default"].getVariables;

var Variaveis = function Variaveis() {
  var classes = useStyles();
  var variables = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.set_variables.variables;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      itens = _useState2[0],
      set_itens = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (Object.values(variables).length > 0) return;

    _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _resources_request_variables__WEBPACK_IMPORTED_MODULE_9__["default"].get_variables();

            case 3:
              response = _context.sent;
              dispatch(getVariables(response));
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }))();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    set_itens(variables);
  }, [variables]);

  function onChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    set_itens(_objectSpread(_objectSpread({}, itens), {}, _defineProperty({}, name, value)));
  }

  function submit() {
    return _submit.apply(this, arguments);
  }
  /*****************************************************/


  function _submit() {
    _submit = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var edit_itens;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", console.log(itens));

            case 5:
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0.message);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 7]]);
    }));
    return _submit.apply(this, arguments);
  }

  function allData() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Container"], {
      maxWidth: "xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      container: true,
      direction: "row",
      alignItems: "center",
      justify: "space-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
      variant: "h3"
    }, "Vari\xE1veis")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Breadcrumbs"], {
      separator: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["NavigateNext"], {
        fontSize: "small"
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
      color: "textPrimary"
    }, "In\xEDcio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
      color: "textPrimary"
    }, "Vari\xE1veis")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
      variant: "h6"
    }, "Ve\xEDculo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Combust\xEDvel",
      name: "combustivel",
      id: "combustivel",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.combustivel || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
      variant: "h6"
    }, "Telhado (pre\xE7o unit\xE1rio)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      container: true,
      direction: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Cer\xE2mica",
      name: "telhado_ceramica",
      id: "telhado_ceramica",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.telhado_ceramica || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Fibrocimento",
      name: "telhado_fibrocimento",
      id: "telhado_fibrocimento",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.telhado_fibrocimento || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Madeira",
      name: "telhado_madeira",
      id: "telhado_madeira",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.telhado_madeira || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Policarbonato",
      name: "telhado_policarbonato",
      id: "telhado_policarbonato",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.telhado_policarbonato || "",
      onChange: onChange
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
      variant: "h6"
    }, "Piso (pre\xE7o unit\xE1rio)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      container: true,
      direction: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Cer\xE2mica",
      name: "piso_ceramica",
      id: "piso_ceramica",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.piso_ceramica || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Porcelanato",
      name: "piso_porcelanato",
      id: "piso_porcelanato",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.piso_porcelanato || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "L\xE2minado",
      name: "piso_laminado",
      id: "piso_laminado",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.piso_laminado || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Policarbonato",
      name: "piso_policarbonato",
      id: "piso_policarbonato",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.piso_policarbonato || "",
      onChange: onChange
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
      variant: "h6"
    }, "Pintura"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      container: true,
      direction: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Tinta",
      name: "tinta",
      id: "tinta",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.tinta || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Pincel",
      name: "pincel",
      id: "pincel",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.pincel || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Rolo de Pintura",
      name: "rolo_pintura",
      id: "rolo_pintura",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.rolo_pintura || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Bandeja",
      name: "bandeja",
      id: "bandeja",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.bandeja || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Fita Crepe",
      name: "fita_crepe",
      id: "fita_crepe",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.fita_crepe || "",
      onChange: onChange
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
      variant: "h6"
    }, "M\xE3o de obra (metro quadrado)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      container: true,
      direction: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Piso",
      name: "mao_obra_piso",
      id: "mao_obra_piso",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.mao_obra_piso || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Telhado",
      name: "mao_obra_telhado",
      id: "mao_obra_telhado",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.mao_obra_telhado || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Grafiato",
      name: "mao_obra_grafiato",
      id: "mao_obra_grafiato",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.mao_obra_grafiato || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Pintura",
      name: "mao_obra_pintura",
      id: "mao_obra_pintura",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.mao_obra_pintura || "",
      onChange: onChange
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
      variant: "h6"
    }, "Outros"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      container: true,
      direction: "row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Pregos (pct)",
      name: "pregos",
      id: "pregos",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.pregos || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Madeira / Viga",
      name: "madeira_viga",
      id: "madeira_viga",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.madeira_viga || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Luvas",
      name: "luvas",
      id: "luvas",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.luvas || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Argamassa",
      name: "argamassa",
      id: "argamassa",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.argamassa || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Cimento",
      name: "cimento",
      id: "cimento",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.cimento || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Areia",
      name: "areia",
      id: "areia",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.areia || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Brita",
      name: "brita",
      id: "brita",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.brita || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Vergalh\xE3o",
      name: "vergalhao",
      id: "vergalhao",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.vergalhao || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Escoras",
      name: "escoras",
      id: "escoras",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.escoras || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Rejunte",
      name: "rejunte",
      id: "rejunte",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.rejunte || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Abra\xE7adeira",
      name: "abracadeira",
      id: "abracadeira",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.abracadeira || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Gesso",
      name: "gesso",
      id: "gesso",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.gesso || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Lixa",
      name: "lixa",
      id: "lixa",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.lixa || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Lona",
      name: "lona",
      id: "lona",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.lona || "",
      onChange: onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      item: true,
      md: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      label: "Vassoura",
      name: "vassoura",
      id: "vassoura",
      variant: "outlined",
      size: "small",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.margin, classes.textField),
      InputProps: {
        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputAdornment"], {
          position: "start"
        }, "R$")
      },
      value: itens.vassoura || "",
      onChange: onChange
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      container: true,
      direction: "row",
      justify: "flex-end",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      variant: "contained",
      color: "primary",
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_5__["DoneAllRounded"], null),
      onClick: submit
    }, "Salvar")));
  }

  function loading() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
      container: true,
      direction: "row",
      justify: "center",
      alignItems: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CircularProgress"], null));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object.keys(itens).length > 0 ? allData() : loading());
};

/* harmony default export */ __webpack_exports__["default"] = (Variaveis);

/***/ }),

/***/ "./resources/js/projeto-react/resources/request/axios.js":
/*!***************************************************************!*\
  !*** ./resources/js/projeto-react/resources/request/axios.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var apiClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: window.origin + "/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (apiClient);

/***/ }),

/***/ "./resources/js/projeto-react/resources/request/variables.js":
/*!*******************************************************************!*\
  !*** ./resources/js/projeto-react/resources/request/variables.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axios */ "./resources/js/projeto-react/resources/request/axios.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var get_variables = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var url, response, extract_data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "/variaveis";
            _context.prev = 1;
            console.log("requisicao");
            _context.next = 5;
            return _axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(url);

          case 5:
            response = _context.sent;
            extract_data = {};
            response.data.map(function (el) {
              return extract_data = _objectSpread({}, el);
            });
            return _context.abrupt("return", extract_data);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function get_variables() {
    return _ref.apply(this, arguments);
  };
}();

var create_variables = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
    var url, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "/variaveis";
            _context2.prev = 1;
            _context2.next = 4;
            return _axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(url, data);

          case 4:
            response = _context2.sent;
            console.log(response.data);
            return _context2.abrupt("return");

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0.message);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function create_variables(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = ({
  get_variables: get_variables,
  create_variables: create_variables
});

/***/ }),

/***/ "./resources/js/projeto-react/resources/store/variaveis/actions.js":
/*!*************************************************************************!*\
  !*** ./resources/js/projeto-react/resources/store/variaveis/actions.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getVariables = function getVariables(response) {
  return {
    type: "GET_VARIABLES",
    response: response
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  getVariables: getVariables
});

/***/ })

}]);