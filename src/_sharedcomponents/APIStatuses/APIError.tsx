import * as React from "react";
import { Box, Typography } from "@mui/material";

export const APIError = ({ text }: {text:string}) => {
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="caption" color="error.main">
          {text}
        </Typography>
      </Box>
    );
  };