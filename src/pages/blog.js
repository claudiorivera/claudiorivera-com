import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import BlogPost from "../components/BlogPost";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

// https://github.com/gatsbyjs/gatsby/issues/17914#issuecomment-690954264
import { withTwoPassRendering } from "../util/withTwoPassRendering";
const BlogPostWithTwoPassRendering = withTwoPassRendering(BlogPost);

const BlogPage = ({ data }) => {
  return (
    <Layout coverImage={data.file.childImageSharp.fluid} coverTitle="Blog">
      <SEO title="Blog" />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogPostWithTwoPassRendering key={node.id} node={node} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    file(relativePath: { eq: "patrick-fore-0gkw_9fy0eQ-unsplash.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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

BlogPage.propTypes = {
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

export default BlogPage;
