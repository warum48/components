import * as React from "react";
import { TableCell, tableCellClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import { panel_bg } from "_mui/MuiStyledComponents";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: panel_bg[theme.palette.mode],
      fontSize: theme.typography.body2.fontSize,
      //!!makes button-like
      //textTransform: 'uppercase',
      //color:theme.palette.text.secondary,
      //color: theme.palette.common.black,
      //fontSize:'12px'
    },
    [`&.${tableCellClasses.body}`]: {
      //fontSize: '0.875rem'//13,
      //fontSize:10
      fontSize: theme.typography.body2.fontSize,
      overflowWrap: "break-word",
    },
  }));