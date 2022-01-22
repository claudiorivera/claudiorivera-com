import { Box, Container, Link, Typography } from "@material-ui/core";
import { graphql } from "gatsby";
import React from "react";
import PortfolioItem from "../components/PortfolioItem";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const DevPage = ({ data }) => (
  <Layout coverImage={data.file.childImageSharp.fluid} coverTitle="Dev">
    <Seo title="Dev" />
    {data.allMarkdownRemark.edges.map(({ node: portfolioItem }) => (
      <div key={portfolioItem.id}>
        <PortfolioItem portfolioItem={portfolioItem} />
        <hr />
      </div>
    ))}
    <Container maxWidth="sm">
      <Box m={2}>
        <Typography variant="h1">
          For more, please visit{" "}
          <Link href="https://github.com/claudiorivera">my GitHub profile</Link>
          .
        </Typography>
      </Box>
    </Container>
  </Layout>
);

export const query = graphql`
  {
    file(relativePath: { eq: "ferenc-almasi-L8KQIPCODV8-unsplash.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "dev-portfolio" } } }
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
