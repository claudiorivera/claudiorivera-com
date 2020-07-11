import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Typography } from "@material-ui/core";

const DevPage = () => (
  <Layout>
    <SEO title="Dev" />
    <Typography variant="h1">Dev</Typography>
    <Typography variant="body1">
      <p>Coming soon...</p>

      <p>
        In the meantime, visit{" "}
        <a
          href="https://github.com/claudiorivera"
          target="_blank"
          rel="noreferrer noopener"
        >
          my GitHub profile
        </a>
        .
      </p>
    </Typography>
  </Layout>
);

export default DevPage;
