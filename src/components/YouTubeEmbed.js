import React from "react";
import { Container } from "@material-ui/core";
const YouTubeEmbed = ({ url, title }) => (
  <Container>
    <iframe
      src={url}
      title={title}
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
export default YouTubeEmbed;
