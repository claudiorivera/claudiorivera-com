import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>{node.frontmatter.title}</div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogPage;
