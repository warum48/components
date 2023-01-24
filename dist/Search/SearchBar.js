"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = SearchBar;
var React = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _InputBase = _interopRequireDefault(require("@mui/material/InputBase"));
var _Search = _interopRequireDefault(require("@mui/icons-material/Search"));
var _StyledButton = require("../Buttons/StyledButton");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//import { panel_bg} from "_mui/MuiStyledComponents";
//import { searchInputVar } from "_apollo/state";
//import { StyledButton } from "../Buttons/StyledButton";

const Search = (0, _styles.styled)(_Box.default)(_ref => {
  let {
    theme
  } = _ref;
  return {
    position: "relative",
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    width: "100%",
    maxWidth: "500px"
    //...panel_bg[theme.palette.mode],
  };
});

const SearchIconWrapper = (0, _styles.styled)("div")(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
});
const StyledInputBase = (0, _styles.styled)(_InputBase.default)(_ref3 => {
  let {
    theme
  } = _ref3;
  return {
    color: "inherit",
    "& .MuiInputBase-input": {
      //padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
      transition: theme.transitions.create("width"),
      width: "100%",
      /*[theme.breakpoints.up('md')]: {
        width: '20ch',
      },*/
      fontSize: theme.typography.body2.fontSize,
      border: 1,
      borderColor: "hsl(0, 0%, 80%)",
      //"grey.300", //like in ReactSelect
      borderRadius: 1
    }
  };
});
function SearchBar(_ref4) {
  let {
    searchVar
  } = _ref4;
  const theme = (0, _styles.useTheme)();
  const inputRef = React.useRef(null);
  const handleKeypress = e => {
    //it triggers by pressing the enter key
    if (e.key === 'Enter') {
      var _inputRef$current;
      searchVar((_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.value);
    }
  };
  return /*#__PURE__*/React.createElement(_Box.default, {
    sx: {
      display: "flex",
      maxHeight: "90px",
      my: 2
    }
  }, /*#__PURE__*/React.createElement(Search, null, /*#__PURE__*/React.createElement(SearchIconWrapper, null, /*#__PURE__*/React.createElement(_Search.default, null)), /*#__PURE__*/React.createElement(StyledInputBase, {
    ref: inputRef,
    fullWidth: true,
    placeholder: "\u2026",
    inputProps: {
      "aria-label": "search"
    },
    defaultValue: searchVar(),
    onChange: e => {
      inputRef.current.value = e.target.value;
    },
    onKeyPress: handleKeypress,
    sx: {
      fontSize: theme.typography.body2.fontSize,
      border: 1,
      borderColor: "hsl(0, 0%, 80%)",
      //"grey.300", //like in ReactSelect
      borderRadius: 1
    }
    //!!!---instant update---//onChange={e => {if(e.target.value.length > 2 || e.target.value.length==0){searchInputVar(e.target.value)}}}
  })), /*#__PURE__*/React.createElement(_StyledButton.StyledButton, {
    type: "submit",
    variant: "contained",
    onClick: () => {
      var _inputRef$current2;
      return searchVar((_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.value);
    }
  }, "\u0418\u0441\u043A\u0430\u0442\u044C"));
}