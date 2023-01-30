import * as React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SectionHeader = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightRegular,
    "&:first-letter":{
      textTransform: 'uppercase'
    }
  }));