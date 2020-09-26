import React from "react";
import { Box, Link } from "@material-ui/core";

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
      <div>
        &copy; {new Date().getFullYear()} Claudio Rivera. Made with
        Gatsby.&nbsp;
      </div>
      <Link href="https://github.com/claudiorivera/cr-com">View Source</Link>
    </Box>
  );
};

export default Footer;
