import { Box } from "@mui/material";
import React from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { pathToImg } from "CONSTS";

interface IPreviewImage {
  src: string;
  type: string;
  images?: string[];
  photoIndexStart?: number;
}

export const PreviewImage = ({ src, type = "small", images=[], photoIndexStart=0 }: IPreviewImage) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(Number(photoIndexStart));
  //const imagesFull = [pathToImg + images[ photoIndexStart]]//images.map(i => pathToImg + i)
  const imagesFull = images.map(i => pathToImg + i)
  return (
    <>
    {/*<a href={src} target="_blank">*/}
      <Box
        sx={{
          position: "relative",
          width: type === "small" ? "100px" : "300px",
          cursor: "pointer",
          borderRadius: "8px",
          overflow:'hidden',
          boxSizing:'border-box'
        }}
        onClick={()=>{setIsOpen(true); setPhotoIndex(photoIndexStart)}}
      >
        <Box
          sx={{
            position: "absolute",
            p: 0.5,
            right: "3px",
            top: "3px",
            backgroundColor: "#00000099",
            borderRadius: "5px",
          }}
        >
          <ZoomInIcon sx={{ color: "white" }} />
          
        </Box>
        <img src={src} 
        style={{maxWidth:'100%', display: 'block'}}
        //width={type === "small" ? "100px" : "300px"} 
        />
      </Box>
    {/*</a>*/}
{isOpen && 


    <Lightbox
    //key={'ps'+photoIndexStart}
              mainSrc={imagesFull[photoIndex]}
              //mainSrc={imagesFull[0]}
              nextSrc={
                photoIndex < imagesFull.length - 1
                  ? imagesFull[(photoIndex + 1) % imagesFull.length]
                  : undefined
              }
              prevSrc={
                photoIndex !== 0
                  ? imagesFull[(photoIndex + imagesFull.length - 1) % imagesFull.length]
                  : undefined
              }
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length
                )
              }
            />
           
}
    </>
  );
};
