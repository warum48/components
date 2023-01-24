"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoToTop = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _react = require("react");
var _reactUse = require("react-use");
var _KeyboardArrowUp = _interopRequireDefault(require("@mui/icons-material/KeyboardArrowUp"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const TopButton = _styled.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 0;\n  position: fixed;\n  z-index: 9999;\n  display: inline-block;\n  background-color: #999999;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  border-radius: 4px;\n  bottom: 10px;\n  right: 10px;\n  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;\n  visibility: ", ";\n  opacity: ", ";\n  color: white;\n\n  /*&:after {\n    content: \"\\f077\";\n    font-family: FontAwesome;\n    font-weight: normal;\n    font-style: normal;\n    font-size: 20px;\n    line-height: 40px;\n    color: #fff;\n  } if to use fontAwesome instead of mui*/\n  &:hover {\n    cursor: pointer;\n    background-color: #333;\n  }\n  &:active {\n    background-color: #555;\n  }\n"], ["\n  border: 0;\n  position: fixed;\n  z-index: 9999;\n  display: inline-block;\n  background-color: #999999;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  border-radius: 4px;\n  bottom: 10px;\n  right: 10px;\n  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;\n  visibility: ", ";\n  opacity: ", ";\n  color: white;\n\n  /*&:after {\n    content: \"\\\\f077\";\n    font-family: FontAwesome;\n    font-weight: normal;\n    font-style: normal;\n    font-size: 20px;\n    line-height: 40px;\n    color: #fff;\n  } if to use fontAwesome instead of mui*/\n  &:hover {\n    cursor: pointer;\n    background-color: #333;\n  }\n  &:active {\n    background-color: #555;\n  }\n"])), props => props.show ? "visible" : "hidden", props => props.show ? 0.8 : 0);

/**
   * Кнопка "наверх" 
   */
const GoToTop = _ref => {
  let {
    showAlways = false
  } = _ref;
  const [show, setShow] = (0, _react.useState)(false || showAlways);
  function checkScrollTop() {
    if (window.scrollY > 100) {
      if (!show) {
        setShow(true);
      }
    } else {
      if (show) {
        if (!showAlways) {
          setShow(false);
        }
      }
    }
  }
  (0, _react.useEffect)(() => {
    if (showAlways) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [showAlways]);
  (0, _reactUse.useInterval)(() => {
    checkScrollTop();
  }, 500);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <TopButton onClick={goToTop} show={show}>
      <_KeyboardArrowUp.default />
    </TopButton>;
};

//custom setInterval
//https://stackoverflow.com/questions/64270739/bug-with-setinterval-in-react
exports.GoToTop = GoToTop;