import PropTypes from "prop-types";
import React from "react";

const AppleMusicEmbed = ({ url, title }) => (
  <div className="videoWrapper">
    <iframe src={url} title={title} width="100%" allow="encrypted-media" />
  </div>
);

AppleMusicEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AppleMusicEmbed;
