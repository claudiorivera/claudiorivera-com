import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const DevPage = () => (
  <Layout>
    <SEO title="Dev" />
    <h1>Dev</h1>
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
  </Layout>
);

export default DevPage;
