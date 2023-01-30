import * as React from "react";
import { Box, Typography } from "@mui/material";

export const LoadingBox = () => {
    return (
      <Box sx={{ textAlign: "center", p: 3 }}>
        <Typography variant="caption">Загрузка ...</Typography>
      </Box>
    );
  };