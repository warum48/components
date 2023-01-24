"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = void 0;
var _material = require("@mui/material");
var _styles = require("@mui/material/styles");
const _excluded = ["appearance"];
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
    return <_material.Button size="small" variant="outlined" sx={{
      color: "white",
      fontSize: "10px",
      px: 1.2,
      mx: 0.5,
      minWidth: "10px"
    }} {...props} />;
  }

  //default
  return <StyledButtonMain {...props} />;
};
exports.StyledButton = StyledButton;