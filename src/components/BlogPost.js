import { Container, Typography } from "@material-ui/core";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";

const BlogPost = ({ post }) => {
  return (
    <Container key={post.id}>
      <div style={{ textAlign: "center" }}>
        <Typography variant="overline">{post.frontmatter.category}</Typography>
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
      <hr />
    </Container>
  );
};

BlogPost.propTypes = {
  post: PropTypes.shape({
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
};

export default BlogPost;
