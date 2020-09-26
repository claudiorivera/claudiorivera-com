import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Container, Link, Typography } from "@material-ui/core";
import { graphql } from "gatsby";
import DevPortfolioItem from "../components/DevPortfolioItem";

const DevPage = ({ data }) => (
  <Layout>
    <SEO title="Dev" />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <DevPortfolioItem node={node} key={node.id} />
        <hr />
      </div>
    ))}
    <Container maxWidth="sm">
      <Typography variant="h2">
        For more, please visit{" "}
        <Link href="https://github.com/claudiorivera">my GitHub profile</Link>.
      </Typography>
    </Container>
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
