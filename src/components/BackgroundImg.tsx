// https://markoskon.com/gatsby-background-image-example/#usage
import { styled } from "@material-ui/core";
import Img, { FluidObject } from "gatsby-image";
import PropTypes from "prop-types";
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
};
const Image = styled(Img)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: -1,
  height: ({ height }: ImageProps) => height,
});

type BackgroundImgProps = {
  children: ReactNode;
  fluid: FluidObject;
  height: string;
  overlayColor: string;
  title: string;
};
const BackgroundImg = ({
  children,
  fluid,
  height,
  overlayColor,
  title,
}: BackgroundImgProps) => (
  <Container bc={overlayColor}>
    <Image fluid={fluid} height={height} title={title} />
    <Content>{children}</Content>
  </Container>
);

BackgroundImg.propTypes = {
  children: PropTypes.node.isRequired,
  fluid: PropTypes.object.isRequired,
  height: PropTypes.string,
  overlayColor: PropTypes.string,
  title: PropTypes.string.isRequired,
};

BackgroundImg.defaultProps = {
  height: "100%",
  overlayColor: "transparent",
};

export default BackgroundImg;
