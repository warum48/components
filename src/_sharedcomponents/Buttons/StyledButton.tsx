import * as React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IProps {
  appearance?: string;
  // All other props
  [x: string]: any;
}
const StyledButtonMain = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  boxShadow: theme.shadows[0], //"0",
  background: theme.palette.common.buttonGradient,
  "&.Mui-disabled": {
    //background: "#eaeaea",
    color: "#ffffff",
    opacity: 0.3,
  },
  /*':hover': {
      color: theme.palette[_color].main,
      backgroundColor: 'white',
    },*/
}));

export const StyledButton = ({ appearance = "main", ...props }: IProps) => {
  /*if(appearance === "main"){
        return (<StyledButtonMain {...props}/>);
    }*/

  if (appearance === "smallwhite") {
    return (
      <Button
        size="small"
        variant="outlined"
        sx={{
          color: "white",
          fontSize: "10px",
          px: 1.2,
          mx: 0.5,
          minWidth: "10px",
        }}
        {...props}
      />
    );
  }

  //default
  return <StyledButtonMain {...props} />;
};
