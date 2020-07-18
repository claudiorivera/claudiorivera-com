import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import BlogPost from "../components/BlogPost";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      {data.allMarkdownRemark.edges.map(({ node: post }) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query posts {
    allMarkdownRemark {
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
