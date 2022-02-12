import { styled } from "@material-ui/core";
import Img, { FluidObject } from "gatsby-image";
import PropTypes from "prop-types";
import React, { ReactNode } from "react";

type ContainerProps = {
  overlayColor: string;
};
const Container = styled("div")({
  backgroundColor: ({ overlayColor }: ContainerProps) => overlayColor,
  position: "relative",
  marginBottom: "5rem",
  boxShadow: "0 5px 25px 5px #0000004d;",
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
    objectPosition: "0% 0%;",
    fontFamily: "object-fit: cover; object-position: 0% 0%;",
  },
});

type BackgroundImgProps = {
  fluid: FluidObject;
  title: string;
  height: string;
  overlayColor?: string;
  children: ReactNode;
};
const BackgroundImg = ({
  fluid,
  title,
  height,
  overlayColor = "transparent",
  children,
}: BackgroundImgProps) => (
  <Container overlayColor={overlayColor}>
    <Image fluid={fluid} title={title} height={height} />
    <Content>{children}</Content>
  </Container>
);

BackgroundImg.propTypes = {
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  overlayColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default BackgroundImg;
