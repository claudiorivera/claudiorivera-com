import React from "react";
import { Container, Typography } from "@material-ui/core";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Link } from "gatsby";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Typography variant="body1" paragraph>
        My name is Claudio. I’ve been all over this beautiful Earth, playing
        drums and working for bands. I’ve also been fortunate to have made some
        records with rad bands.
      </Typography>
      <Typography variant="body1" paragraph>
        I’m available for drumming sessions, live gigs, touring, drums/keys
        tech, monitor tech, producing, mixing, or anything else you can throw at
        me. Email me for availability and rates. I’m endorsed by Promark, Evans,
        Sabian, and DW.
      </Typography>
      <Typography variant="body1" paragraph>
        I am also a full stack web developer looking for work. Please visit my{" "}
        <Link to="/dev">development</Link> page for more info.
      </Typography>
    </Container>
  </Layout>
);

export default IndexPage;
