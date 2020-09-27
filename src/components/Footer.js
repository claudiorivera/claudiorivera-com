import { Box, Typography } from "@material-ui/core";
import React from "react";

const Footer = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    p={8}
    mt={7}
    textAlign="center"
    bgcolor="primary.main"
    color="white"
  >
    <Typography variant="h5">
      Made by me with Gatsby.&nbsp;
      <a
        href="https://github.com/claudiorivera/cr-com"
        style={{ color: "white" }}
      >
        View Source
      </a>
    </Typography>
  </Box>
);

export default Footer;
