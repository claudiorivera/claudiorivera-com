import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
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
    <Layout>
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

export default BlogPage;
