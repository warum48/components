import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StackHeader = styled(Box)(({ theme }) => ({
    //fontWeight: 500,
    //fontSize: "0.875rem",
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    //lineHeight: "1.5rem",
  }));