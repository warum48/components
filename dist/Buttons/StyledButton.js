"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = void 0;
var _material = require("@mui/material");
var _styles = require("@mui/material/styles");
var React = _interopRequireWildcard(require("react"));
const _excluded = ["appearance"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const StyledButtonMain = (0, _styles.styled)(_material.Button)(_ref => {
  let {
    theme
  } = _ref;
  return {
    color: "#ffffff",
    boxShadow: theme.shadows[0],
    //"0",
    background: theme.palette.common.buttonGradient,
    "&.Mui-disabled": {
      //background: "#eaeaea",
      color: "#ffffff",
      opacity: 0.3
    }
    /*':hover': {
        color: theme.palette[_color].main,
        backgroundColor: 'white',
      },*/
  };
});

const StyledButton = _ref2 => {
  let {
      appearance = "main"
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded);
  /*if(appearance === "main"){
        return (<StyledButtonMain {...props}/>);
    }*/

  if (appearance === "smallwhite") {
    return /*#__PURE__*/React.createElement(_material.Button, _extends({
      size: "small",
      variant: "outlined",
      sx: {
        color: "white",
        fontSize: "10px",
        px: 1.2,
        mx: 0.5,
        minWidth: "10px"
      }
    }, props));
  }

  //default
  return /*#__PURE__*/React.createElement(StyledButtonMain, props);
};
exports.StyledButton = StyledButton;