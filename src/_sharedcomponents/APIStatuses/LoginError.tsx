import * as React from "react";
import { Box, Typography } from "@mui/material";
import { LogOut } from "_components/User/LogOut";

interface IText {
    text?: string;
  }

export const LoginError = ({ text }: IText) => {
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="caption" color="error.main">
          {text}
        </Typography>
        <LogOut appearance='logerror'/>
      </Box>
    );
  };