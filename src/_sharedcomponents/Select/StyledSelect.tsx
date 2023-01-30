import * as React from "react";
import Select from "react-select";
import "./reactselect.css";

interface IProps{
    [x:string]: any;
}
export const StyledSelect = ({...props}:IProps) => {
    return <Select {...props}/>
}