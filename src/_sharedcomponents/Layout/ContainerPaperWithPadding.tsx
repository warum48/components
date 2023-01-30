import * as React from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerPaperWithPadding = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    position: 'relative'
  }));