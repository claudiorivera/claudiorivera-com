import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

const YouTubeEmbed = ({ url, title }) => (
  <Container className="videoWrapper">
    <iframe
      src={url}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </Container>
);

YouTubeEmbed.defaultProps = {
  url: "",
  title: "",
};

YouTubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default YouTubeEmbed;
