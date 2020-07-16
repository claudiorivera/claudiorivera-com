import React from "react";
import { Container } from "@material-ui/core";
const AppleMusicEmbed = ({ url, title }) => (
  <Container>
    <iframe src={url} title={title} width="100%" height="300px" />
  </Container>
);
export default AppleMusicEmbed;
