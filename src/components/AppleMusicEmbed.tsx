import PropTypes from "prop-types";
import React from "react";

type AppleMusicEmbedProps = {
  url: string;
  title: string;
};
const AppleMusicEmbed = ({ url, title }: AppleMusicEmbedProps) => {
  if (!url || !title) return null;

  return (
    <div className="videoWrapper">
      <iframe src={url} title={title} width="100%" allow="encrypted-media" />
    </div>
  );
};

AppleMusicEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AppleMusicEmbed;
