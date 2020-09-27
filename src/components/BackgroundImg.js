// https://markoskon.com/gatsby-background-image-example/#usage
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  position: relative;
  background-color: ${({ bc }) => bc};
  margin-bottom: 5rem;
  box-shadow: 0 5px 25px 5px #0000004d;
`;

const FakeBgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
  z-index: -1;

  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const BackgroundImg = ({
  fluid,
  title,
  height,
  mobileHeight,
  overlayColor,
  children,
  className,
}) => (
  <Parent bc={overlayColor}>
    <FakeBgImage
      fluid={fluid}
      title={title}
      height={height}
      mobileHeight={mobileHeight}
    />
    <Content className={className}>{children}</Content>
  </Parent>
);

export default BackgroundImg;
