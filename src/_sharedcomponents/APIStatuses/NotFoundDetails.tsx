import * as React from "react";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ContainerPaperWithPadding } from "../Layout/ContainerPaperWithPadding";
//import { ContainerPaperWithPadding } from "../Layout/ContainerPaperWithPadding";

interface IProps {
  text: string;
}
export const NotFoundDetails = ({text=''}:IProps) => {
  return (
    <ContainerPaperWithPadding>
      <Typography variant="body2">
        {text}
      </Typography>
    </ContainerPaperWithPadding>
  );
};
