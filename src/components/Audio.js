import React from "react";
import { Container } from "@material-ui/core";
const Audio = ({ audioSrcUrl, audioTitle, ...props }) => (
  <Container>
    <iframe
      src={audioSrcUrl}
      title={audioTitle}
      width="100%"
      height="100%"
    ></iframe>
  </Container>
);
export default Audio;
