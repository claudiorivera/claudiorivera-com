import React from "react";
import Img from "gatsby-image";
import { Container, Grid, Typography } from "@material-ui/core";

const DevPortfolioItem = ({ node }) => {
  return (
    <Container>
      <Grid container alignItems="center">
        <Grid item sm={6} xs={12}>
          <a
            href={node.frontmatter.demo_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fluid={node.frontmatter.screenshot.childImageSharp.fluid} />
          </a>
        </Grid>
        <Grid item sm={6} xs={12} alignItems="flex-start">
          <a href={node.frontmatter.demo_link}>
            <Typography variant="h2">{node.frontmatter.title}</Typography>
          </a>
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
        </Grid>
      </Grid>
      <hr />
    </Container>
  );
};

export default DevPortfolioItem;
