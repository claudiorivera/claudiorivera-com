import React from "react";
import { Container } from "@material-ui/core";

const Footer = () => {
  return <Container>© {new Date().getFullYear()} Claudio Rivera</Container>;
};

export default Footer;
