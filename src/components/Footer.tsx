import { Box, Typography } from "@mui/material";

import { Link } from "./Link";

export const Footer = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    p={7}
    mt={7}
    textAlign="center"
    bgcolor="primary.main"
  >
    <Typography sx={{ color: "white" }} variant="h5">
      <Link
        sx={{ color: "white" }}
        href="https://github.com/claudiorivera/claudiorivera-com"
      >
        Site made by me
      </Link>
      {". "}
      <Link sx={{ color: "white" }} href="mailto:me@claudiorivera.com">
        Email me
      </Link>{" "}
      or connect on{" "}
      <Link
        sx={{ color: "white" }}
        href="https://www.linkedin.com/in/atclaudiorivera/"
      >
        LinkedIn
      </Link>
      .
    </Typography>
  </Box>
);
