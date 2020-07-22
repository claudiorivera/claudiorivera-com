import React from "react";

const AppleMusicEmbed = ({ url, title }) => (
  <div className="videoWrapper">
    <iframe src={url} title={title} width="100%" />
  </div>
);
export default AppleMusicEmbed;
