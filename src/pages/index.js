import React from "react";
import { Typography } from "@material-ui/core";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Typography variant="body1" paragraph>
      My name is Claudio. I’ve been all over this beautiful Earth, playing drums
      and working for bands. I’ve also been fortunate to have made some records
      with rad bands.
    </Typography>
    <Typography variant="body1" paragraph>
      I’m available for drumming sessions, live gigs, touring, drums/keys tech,
      monitor tech, producing, mixing, or anything else you can throw at me.
      Email me for availability and rates. I’m endorsed by Promark, Evans,
      Sabian, and DW.
    </Typography>
    <Typography variant="body1" paragraph>
      I also dabble in full stack web development, and I’ll be slowly rolling
      out some projects that I’ve worked on. If you’re looking for a developer
      who drums (or a drummer who codes), look no further!
    </Typography>
  </Layout>
);

export default IndexPage;
