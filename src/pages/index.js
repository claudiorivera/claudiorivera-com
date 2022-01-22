import { Container, Typography } from "@material-ui/core";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = ({ data }) => (
  <Layout coverImage={data.file.childImageSharp.fluid} coverTitle="Hello">
    <Seo title="Home" />
    <Container>
      <Typography variant="body1" paragraph>
        My name is Claudio. I’ve been all over this beautiful Earth, playing
        drums and working for bands. I’ve also been fortunate to have made some
        records with rad bands.
      </Typography>
      <Typography variant="body1" paragraph>
        I’m endorsed by Promark, Evans, Sabian, and DW.
      </Typography>
      <Typography variant="body1" paragraph>
        I am also a software developer. Please visit my{" "}
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

export default IndexPage;
