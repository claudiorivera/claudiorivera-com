import React from "react";
import { Typography, Container } from "@material-ui/core";
import Img from "gatsby-image";

const BlogPost = ({ post }) => {
  const { category, title, date, featuredImage } = post.frontmatter;

  return (
    <Container>
      <Typography variant="overline">{category}</Typography>
      <Typography variant="h5">{date}</Typography>
      <Typography variant="h3">{title}</Typography>
      <Img fluid={featuredImage.childImageSharp.fluid} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  );
};

export default BlogPost;
