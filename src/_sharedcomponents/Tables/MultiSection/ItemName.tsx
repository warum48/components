import * as React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ItemName = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "left",
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightBold,
  }));