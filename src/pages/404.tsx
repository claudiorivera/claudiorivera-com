import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

type NotFoundPageProps = {
  data: {
    file: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
};
const NotFoundPage = ({ data }: NotFoundPageProps) => (
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

NotFoundPage.propTypes = {
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

export default NotFoundPage;
