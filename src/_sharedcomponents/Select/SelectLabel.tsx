import * as React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ISelectLabel {
  text: string;
}

export const SelectLabel = ({ text }: ISelectLabel) => {
  const theme = useTheme();
  return (
    <Typography
      variant="subtitle2"
      sx={{
        lineHeight: "100%",
        pb: 1,
      }}
    >
      {text}
    </Typography>
  );
};
