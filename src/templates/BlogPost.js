import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Typography } from "@material-ui/core";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.date}</h2>
        <h3>{post.frontmatter.category}</h3>
        <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
    }
  }
`;
