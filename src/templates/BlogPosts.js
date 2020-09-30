import { Container, Typography } from "@material-ui/core";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const BlogPosts = ({ data, pageContext }) => {
  return (
    <Layout coverImage={data.file.childImageSharp.fluid} coverTitle="Blog">
      <SEO title="Blog" />
      {data.allMarkdownRemark.edges.map(({ node: post }) => (
        <>
          <Container key={post.id}>
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
        </>
      ))}
      <div>test</div>
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

BlogPosts.propTypes = {
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
              date: PropTypes.string.isRequired,
              category: PropTypes.string.isRequired,
              featuredImage: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                  fluid: PropTypes.shape({
                    src: PropTypes.string.isRequired,
                  }).isRequired,
                }).isRequired,
              }).isRequired,
            }).isRequired,
            html: PropTypes.string.isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPosts;
