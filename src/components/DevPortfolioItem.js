import React from "react";
import Img from "gatsby-image";
import { Container, Grid, Typography } from "@material-ui/core";

const DevPortfolioItem = ({ node }) => {
  return (
    <Container>
      <Grid container alignItems="center" spacing={4}>
        <Grid item sm={6} xs={12}>
          <a href={node.frontmatter.demo_link}>
            <Img fluid={node.frontmatter.screenshot.childImageSharp.fluid} />
          </a>
        </Grid>
        <Grid item sm={6} xs={12}>
          <a href={node.frontmatter.demo_link}>
            <Typography variant="h1">{node.frontmatter.title}</Typography>
          </a>
          <Typography
            variant="body1"
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              padding: "2rem",
              border: ".15rem #4770df solid",
            }}
          >
            {node.frontmatter.description}
          </Typography>
          <Typography variant="h2">Technologies Used:</Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
          <a href={node.frontmatter.github_link}>View Source</a>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DevPortfolioItem;
