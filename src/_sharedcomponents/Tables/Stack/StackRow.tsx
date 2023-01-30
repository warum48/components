import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

/**
 * Компонент для унификации ряда в стеке, делает только это: align-items: center; gap: 10px;
 */
export const StackRow = styled(Box)`
  gap: 10px;
  display: flex;
  align-items: center;
`;