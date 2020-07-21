import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

const BlogPage = ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Fragment>
          <Link key={node.id} to={node.fields.slug}>
            <h1>{node.frontmatter.title}</h1>
            <h2>{node.frontmatter.date}</h2>
            <p>{node.excerpt}</p>
          </Link>
          <hr />
        </Fragment>
      ))}
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default BlogPage;
