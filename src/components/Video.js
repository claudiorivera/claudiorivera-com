import React from "react";
import { Container } from "@material-ui/core";
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
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
    />
  </Container>
);
export default Video;
