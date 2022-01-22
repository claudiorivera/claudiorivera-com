import { Container, Typography } from "@material-ui/core";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React, { Fragment } from "react";
import BlogPagination from "../components/BlogPagination";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const BlogPosts = ({ data, pageContext }) => {
  return (
    <Layout coverImage={data.file.childImageSharp.fluid} coverTitle="Blog">
      <Seo title="Blog" />
      {data.allMarkdownRemark.edges.map(({ node: post }) => (
        <Fragment key={post.id}>
          <Container>
            <div style={{ textAlign: "center" }}>
              <Typography variant="overline">
                {post.frontmatter.category}
              </Typography>
              <Link to={post.fields.slug}>
                <h1>{post.frontmatter.title}</h1>
              </Link>
              <h2>{post.frontmatter.date}</h2>
            </div>
            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
            <Typography
              variant="body1"
              component="div"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Container>
          <hr />
        </Fragment>
      ))}
      <BlogPagination pageContext={pageContext} />
    </Layout>
  );
};

export const query = graphql`
  query backgroundImageAndMarkdownQuery($skip: Int!, $limit: Int!) {
    file(relativePath: { eq: "patrick-fore-0gkw_9fy0eQ-unsplash.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "posts" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "LL")
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
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogPosts;
