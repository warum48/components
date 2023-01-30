import { Box, Stack } from "@mui/material";
import { pathToImg } from "CONSTS";
import React from "react";
import { PreviewImage } from "./PreviewImage";

interface IProps {
  images: string[];
}

export const ImagesPane = ({ images }: IProps) => {
  console.log('images', images);
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        //flex: "1 1 auto",
        overflowX: "auto",
        overflowY: "hidden",
        //minWidth: 0,
      }}
    >
      <Stack direction="row">
        {images.map((img: string, imgindex: number) => (
          <Box key={"ihold" + imgindex}>
            <Box
              key={"iholda" + imgindex}
              sx={{
                //display: "inline-flex",
                display: "inline-block",
                position: "relative",
                maxWidth: "300px",
                mr: 1,
                //flexShrink: '0',
              }}
            >
              <PreviewImage
                src={pathToImg + img}
                type="medium"
                images={images}
                photoIndexStart={imgindex}
              />
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
