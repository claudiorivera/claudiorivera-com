import { styled } from "@material-ui/core";
import Img from "gatsby-image";
import React, { ReactNode } from "react";

type ContainerProps = {
  bc: string;
};
const Container = styled("div")({
  backgroundColor: ({ bc }: ContainerProps) => bc,
  position: "relative",
  marginBottom: "5rem",
  boxShadow: "0 5px 25px 5px #0000004d",
});

const Content = styled("div")({
  position: "absolute",
  top: 0,
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

type ImageProps = {
  height: string;
  mobileHeight: string;
};
const Image = styled(Img)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: -1,
  height: ({ height }: ImageProps) => height,
  "& > img": {
    objectFit: "cover",
    objectPosition: "0% 0%",
    fontFamily: "object-fit: cover; object-position: 0% 0%;",
  },
  "@media screen and (max-width: 600px)": {
    height: ({ mobileHeight }) => mobileHeight,
  },
});

type BackgroundImgProps = {
  fluid: any;
  title: string;
  height: string;
  mobileHeight?: string;
  className?: string;
  overlayColor: string;
  children: ReactNode;
};
const BackgroundImg = ({
  fluid,
  title,
  height,
  mobileHeight,
  overlayColor,
  children,
  className,
}: BackgroundImgProps) => (
  <Container bc={overlayColor}>
    <Image
      fluid={fluid}
      title={title}
      height={height}
      mobileHeight={mobileHeight}
    />
    <Content className={className}>{children}</Content>
  </Container>
);

export default BackgroundImg;
