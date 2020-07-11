import React from "react";
import { Container } from "@material-ui/core";
const Video = ({ videoSrcURL, videoTitle }) => (
  <Container>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="100%"
      height="300px"
    />
  </Container>
);
export default Video;
