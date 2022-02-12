import { Box, Container, Link, Typography } from "@material-ui/core";
import { graphql } from "gatsby";
import { FluidObject } from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";
import PortfolioItem from "../components/PortfolioItem";

type DevPageProps = {
  data: {
    file: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          frontmatter: {
            title: string;
            description: string;
            demo_link: string;
            github_link: string;
            screenshot: {
              childImageSharp: {
                fluid: FluidObject;
              };
            };
          };
          html: string;
        };
      }[];
    };
  };
};
const DevPage = ({ data }: DevPageProps) => {
  if (!data.file || !data.allMarkdownRemark) return null;

  return (
    <Layout coverImage={data.file.childImageSharp.fluid} coverTitle="Dev">
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
            <Link href="https://github.com/claudiorivera">
              my GitHub profile
            </Link>
            .
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

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
      sort: { order: ASC, fields: frontmatter___order }
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

DevPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              demo_link: PropTypes.string.isRequired,
              github_link: PropTypes.string.isRequired,
              screenshot: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  fluid: PropTypes.shape({
                    src: PropTypes.string.isRequired,
                  }).isRequired,
                }).isRequired,
              }).isRequired,
            }).isRequired,
            html: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default DevPage;
