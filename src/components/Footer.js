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
      Made by me with Gatsby.{" "}
      <a
        href="https://github.com/claudiorivera/cr-com"
        style={{ color: "white" }}
      >
        <span>View Source</span>
      </a>
      .{" "}
      <span>
        Email{" "}
        <Obfuscate
          style={{ color: "white" }}
          email="me@claudiorivera.com"
          headers={{
            subject: "Hi Claudio",
          }}
        />
        .
      </span>
    </Typography>
  </Box>
);

export default Footer;
