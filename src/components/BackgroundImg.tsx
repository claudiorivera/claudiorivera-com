import { styled } from "@material-ui/core";
import Img from "gatsby-image";
import React from "react";

const Container = styled("div")({
  backgroundColor: "#0169e9bf",
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

const Image = styled(Img)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: -1,
  "& > img": {
    objectFit: "cover",
    objectPosition: "0% 0%",
    fontFamily: "object-fit: cover; object-position: 0% 0%;",
  },
});

const BackgroundImg = ({ fluid, children, height }) => {
  return (
    <Container>
      <Image fluid={fluid} style={{ height }} />
      <Content>{children}</Content>
    </Container>
  );
};

export default BackgroundImg;
