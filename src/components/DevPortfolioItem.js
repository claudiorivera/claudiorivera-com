import React from "react";
import Img from "gatsby-image";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";

const DevPortfolioItem = ({ node }) => {
  return (
    <Container>
      <Grid container alignItems="center" spacing={4}>
        <Grid item sm={6} xs={12}>
          <Link href={node.frontmatter.demo_link}>
            <Img fluid={node.frontmatter.screenshot.childImageSharp.fluid} />
          </Link>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Link href={node.frontmatter.demo_link}>
            <Typography variant="h1">{node.frontmatter.title}</Typography>
          </Link>
          <Typography
            variant="body1"
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              padding: "1rem",
            }}
          >
            {node.frontmatter.description}
          </Typography>
          <Typography variant="h2">Technologies Used:</Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
          <Box display="flex" justifyContent="space-evenly" maxWidth="30rem">
            <Button
              variant="outlined"
              color="primary"
              href={node.frontmatter.demo_link}
            >
              Live Demo
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href={node.frontmatter.github_link}
            >
              View Source
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DevPortfolioItem;
