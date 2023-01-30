import * as React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ItemInfo = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    fontSize: theme.typography.body2.fontSize,
    textAlign: "left",
  }));