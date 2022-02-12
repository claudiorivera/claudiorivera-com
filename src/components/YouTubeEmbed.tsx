import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

type YouTubeEmbedProps = {
  url: string;
  title: string;
};
const YouTubeEmbed = ({ url, title }: YouTubeEmbedProps) => {
  if (!url || !title) return null;

  return (
    <Container className="videoWrapper">
      <iframe
        src={url}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
      />
    </Container>
  );
};

YouTubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default YouTubeEmbed;
