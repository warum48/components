import * as React from "react";
import { Box, Typography } from "@mui/material";

interface IText {
  text?: string;
}

export const CodeError = ({ text }: IText) => {
  //| any
  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Typography variant="caption" color="error.main">
        {text}
      </Typography>
    </Box>
  );
};
