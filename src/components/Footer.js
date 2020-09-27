import { Box, Link, Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      p={4}
      m={4}
      textAlign="center"
    >
      <Typography variant="h5">
        &copy; {new Date().getFullYear()} Claudio Rivera. Made with
        Gatsby.&nbsp;
        <Link href="https://github.com/claudiorivera/cr-com">View Source</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
