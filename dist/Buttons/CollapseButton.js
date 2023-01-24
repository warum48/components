"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapseButton = void 0;
require("core-js/modules/es.symbol.description.js");
var _material = require("@mui/material");
var _styles = require("@mui/material/styles");
var _ArrowDropDown = _interopRequireDefault(require("@mui/icons-material/ArrowDropDown"));
var _ArrowDropUp = _interopRequireDefault(require("@mui/icons-material/ArrowDropUp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
;
const CollapseButton = _ref => {
  let {
    sx = null,
    onClick,
    isCollapsed = false
  } = _ref;
  const theme = (0, _styles.useTheme)();
  return <_material.Box onClick={onClick} sx={_objectSpread({
    border: "1px solid",
    borderRadius: "5px",
    borderColor: "hsl(0, 0%, 80%)",
    px: 1,
    cursor: "pointer"
  }, sx)}>
      {isCollapsed ? <_ArrowDropDown.default sx={{
      display: "block"
    }} /> : <_ArrowDropUp.default sx={{
      display: "block"
    }} />}
    </_material.Box>;
};
exports.CollapseButton = CollapseButton;