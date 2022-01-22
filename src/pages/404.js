import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = ({ data }) => (
  <Layout coverImage={data.file.childImageSharp.fluid} coverTitle="Uh Oh!">
    <Seo title="404: Not found" />
    <h1>There's nothing here. Sorry about that.</h1>
  </Layout>
);

export const query = graphql`
  {
    file(relativePath: { eq: "billow926-rTufXtvIFXc-unsplash.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default NotFoundPage;
