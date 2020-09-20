import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Img from "gatsby-image";

const useStyles = makeStyles({
  center: {
    textAlign: "center",
  },
});

const BlogPage = ({ data }) => {
  const styles = useStyles();
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Fragment>
          <div className={styles.center}>
            <Typography variant="overline">
              {node.frontmatter.category}
            </Typography>
            <Link key={node.id} to={node.fields.slug}>
              <h1>{node.frontmatter.title}</h1>
            </Link>
            <h2>{node.frontmatter.date}</h2>
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
          </div>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
          <hr />
        </Fragment>
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
