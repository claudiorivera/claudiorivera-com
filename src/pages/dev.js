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
      <div>
        <DevPortfolioItem node={node} key={node.id} />
        <hr style={{ marginTop: "5rem", marginBottom: "5rem" }} />
      </div>
    ))}
    <Typography variant="h2">
      For more, please visit{" "}
      <a href="https://github.com/claudiorivera">my GitHub profile</a>.
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
            description
            demo_link
            github_link
            screenshot {
              childImageSharp {
                fluid(maxWidth: 600) {
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
