import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Typography } from "@material-ui/core";
import { graphql } from "gatsby";
import DevPortfolioItem from "../components/DevPortfolioItem";

const DevPage = ({ data }) => (
  <Layout>
    <SEO title="Dev" />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <DevPortfolioItem node={node} key={node.id} />
    ))}
    <Typography variant="h4">
      For more, please visit{" "}
      <a
        href="https://github.com/claudiorivera"
        target="_blank"
        rel="noopener noreferrer"
      >
        my GitHub profile
      </a>
      .
    </Typography>
  </Layout>
);

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "dev-portfolio" } } }
      sort: { order: ASC, fields: fileAbsolutePath }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            demo_link
            github_link
            screenshot {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;

export default DevPage;
