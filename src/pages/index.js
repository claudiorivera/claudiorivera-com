import { Container, Typography } from "@material-ui/core";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = ({ data }) => (
  <Layout coverImage={data.file.childImageSharp.fluid} coverTitle="Hello.">
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

export const query = graphql`
  {
    file(relativePath: { eq: "joe-lemke-cr-cover-photo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;
