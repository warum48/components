import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
//import { ContainerPaperWithPadding } from "../Layout/ContainerPaperWithPadding";

interface IProps {
  text?: string;
}
export const NotFound = ({ text = "" }: IProps) => {
  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Typography variant="subtitle2">
        {text ? text : "Ничего не найдено"}
      </Typography>
    </Box>
  );
};
