import React from "react";
import Img from "gatsby-image";
import { Container, Typography } from "@material-ui/core";

const DevPortfolioItem = ({ node }) => {
  return (
    <Container>
      <a
        href={node.frontmatter.demo_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>{node.frontmatter.title}</h1>
      </a>
      <Img fluid={node.frontmatter.screenshot.childImageSharp.fluid} />
      <Typography
        variant="body1"
        dangerouslySetInnerHTML={{ __html: node.html }}
      />
      <a
        href={node.frontmatter.github_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Source
      </a>
      <hr />
    </Container>
  );
};

export default DevPortfolioItem;
