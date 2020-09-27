import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";

const useStyles = makeStyles({
  postInfo: {
    textAlign: "center",
  },
});

const BlogPage = ({ data }) => {
  const styles = useStyles();
  return (
    <Layout coverImage={data.file.childImageSharp.fluid} coverTitle="Blog">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Container key={node.id}>
          <div className={styles.postInfo}>
            <Typography variant="overline">
              {node.frontmatter.category}
            </Typography>
            <Link to={node.fields.slug}>
              <h1>{node.frontmatter.title}</h1>
            </Link>
            <h2>{node.frontmatter.date}</h2>
          </div>
          <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
          <hr />
        </Container>
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
