import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Typography } from "@material-ui/core";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout
      coverImage={post.frontmatter.featuredImage.childImageSharp.fluid}
      coverTitle={post.frontmatter.title}
    >
      <div>
        <h2>{post.frontmatter.date}</h2>
        <Typography variant="overline">{post.frontmatter.category}</Typography>
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
