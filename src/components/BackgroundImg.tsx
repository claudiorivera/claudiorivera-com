// https://markoskon.com/gatsby-background-image-example/#usage
import { Box } from "@mui/material";
import Image from "next/future/image";
import { ReactNode } from "react";

type BackgroundImgProps = {
  children: ReactNode;
  image: string;
  height: string;
  overlayColor: string;
  title: string;
};
export const BackgroundImg = ({
  children,
  image,
  height,
  overlayColor,
  title,
}: BackgroundImgProps) => (
  <Box
    sx={{
      backgroundColor: overlayColor,
      position: "relative",
      marginBottom: "3.5rem",
      boxShadow: "0 5px 25px 5px #0000004d",
      height,
    }}
  >
    <Image
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      src={image}
      title={title}
      alt=""
      width={600}
      height={400}
    />
    <Box
      sx={{
        position: "absolute",
        top: 0,
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  </Box>
);
