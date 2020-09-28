import { Container, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";

const BlogPost = ({ node }) => {
  return (
    <Container key={node.id}>
      <div style={{ textAlign: "center" }}>
        <Typography variant="overline">{node.frontmatter.category}</Typography>
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
  );
};

BlogPost.propTypes = {
  node: PropTypes.shape({
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
  }).isRequired,
};

export default BlogPost;
