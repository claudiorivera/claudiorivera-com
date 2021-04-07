import { Box, Typography } from "@material-ui/core";
import React from "react";
import Obfuscate from "react-obfuscate";

const Footer = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    p={7}
    mt={7}
    textAlign="center"
    bgcolor="primary.main"
    color="white"
  >
    <Typography variant="h5">
      <a
        href="https://github.com/claudiorivera/cr-com"
        style={{ color: "white" }}
      >
        <span>Made by me with Gatsby</span>
      </a>
      {". "}
      <span>
        Email&nbsp;
        <Obfuscate
          style={{ color: "white" }}
          email="me@claudiorivera.com"
          headers={{
            subject: "Hi Claudio",
          }}
        />
        .
      </span>{" "}
      Connect with me on{" "}
      <a
        href="https://www.linkedin.com/in/atclaudiorivera/"
        style={{ color: "white" }}
      >
        LinkedIn
      </a>
      .
    </Typography>
  </Box>
);

export default Footer;
