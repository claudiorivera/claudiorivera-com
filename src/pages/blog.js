import React, { Fragment } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import BlogPost from "../components/BlogPost";
import { Divider } from "@material-ui/core";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      {data.allMarkdownRemark.edges.map(({ node: post }) => (
        <Fragment>
          <BlogPost key={post.id} post={post} />
          <Divider />
        </Fragment>
      ))}
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query posts {
    # https://www.gatsbyjs.org/docs/graphql-reference/#sort
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            category
            featuredImage {
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
