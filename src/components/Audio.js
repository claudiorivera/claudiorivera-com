import React from "react";
import { Container } from "@material-ui/core";
const Audio = ({ audioSrcUrl, audioTitle }) => (
  <Container>
    <iframe src={audioSrcUrl} title={audioTitle} width="100%" height="300px" />
  </Container>
);
export default Audio;
