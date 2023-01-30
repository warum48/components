import * as React from "react";
import { Link, Paper } from "@mui/material";

interface IProps {
    text?: string;
    onClick?: () => void;
  }

export const DateItem = ({ text, onClick }: IProps) => {
    return (
      <Paper
        // {...props}
        onClick={onClick}
        sx={{
          p: 1,
          display: "inline-block",
          mr: "1px",
          mb: "1px",
          pt: 0,
          pb: "4px",
          cursor: "pointer",
          textTransform: "capitalize",
        }}
        elevation={0}
      >
        <Link
          //variant="caption"
          variant="body2"
        >
          {text}
        </Link>
      </Paper>
    );
  };