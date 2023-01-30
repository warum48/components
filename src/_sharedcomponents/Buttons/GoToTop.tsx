import * as React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import { useInterval } from "react-use";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface IGoToTopProps{
  /**
   * Показывать кнопку всегда или только если скролл больше 100px? 
   */
  showAlways?: boolean;
}
// Whether show button always or only if page scroll is > 100px?

interface IShowProp {
  show: boolean; //"visible" | "hidden"
}

const TopButton = styled.button`
  border: 0;
  position: fixed;
  z-index: 9999;
  display: inline-block;
  background-color: #999999;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  bottom: 10px;
  right: 10px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  visibility: ${(props: IShowProp) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? 0.8 : 0)};
  color: white;

  /*&:after {
    content: "\\f077";
    font-family: FontAwesome;
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    line-height: 40px;
    color: #fff;
  } if to use fontAwesome instead of mui*/
  &:hover {
    cursor: pointer;
    background-color: #333;
  }
  &:active {
    background-color: #555;
  }
`;

/**
   * Кнопка "наверх" 
   */
export const GoToTop = ({showAlways=false}:IGoToTopProps) => {
  const [show, setShow] = useState(false || showAlways );

  function checkScrollTop() {
    if (window.scrollY > 100) {
      if (!show) {
        setShow(true);
      }
    } else {
      if (show) {
        if(!showAlways){
        setShow(false);
        }
      }
    }
  }

  useEffect(()=>{
    if (showAlways) {
      setShow(true);
    }else{
      setShow(false);
    }
  }, [showAlways])

  useInterval(() => {
    checkScrollTop();
  }, 500);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <TopButton onClick={goToTop} show={show}>
      <KeyboardArrowUpIcon />
    </TopButton>
  );
};

//custom setInterval
//https://stackoverflow.com/questions/64270739/bug-with-setinterval-in-react
