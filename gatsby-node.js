const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    createNodeField({
      node,
      name: `collection`,
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { collection: { eq: "posts" } } }) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Create individual blog post pages (ie. claudiorivera.com/2020/06/19/javascript-set)
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/BlogPost.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  // Create blog index and paginate (ie. claudiorivera.com/blog/page-2)
  const postsPerPage = 3;
  const numPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    const currentPage = i + 1;
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
    createPage({
      path: i === 0 ? `/blog` : `/blog/page-${i + 1}`,
      component: path.resolve(`./src/templates/BlogPosts.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage,
        prevPage,
        nextPage,
      },
    });
  });
};
