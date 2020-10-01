// https://markoskon.com/gatsby-background-image-example/#usage
import { styled } from "@material-ui/core";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";

const Container = styled("div")({
  backgroundColor: ({ bc }) => bc,
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
  zIndex: "-1",
  height: ({ height }) => height,
  "& > img": {
    objectFit: {
      cover: "!important",
    },
    objectPosition: `0% 0% !important`,
    fontFamily: {
      objectFit: {
        cover: "!important",
        objectPosition: "0% 0% !important",
      },
    },
  },
  "@media screen and (max-width: 600px)": {
    height: ({ mobileHeight }) => mobileHeight,
  },
});

const BackgroundImg = ({
  fluid,
  title,
  height,
  mobileHeight,
  overlayColor,
  children,
  className,
}) => (
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

BackgroundImg.propTypes = {
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

BackgroundImg.defaultProps = {
  height: null,
  mobileHeight: null,
  overlayColor: "transparent",
  children: null,
  className: null,
};

export default BackgroundImg;
