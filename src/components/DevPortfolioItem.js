import React from "react";
import Img from "gatsby-image";
import {
  Box,
  Button,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const DevPortfolioItem = ({ node }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box my={!isMobile ? "7rem" : ""}>
      <Grid container alignItems="center" spacing={4}>
        <Grid item sm={6} xs={12}>
          <Link href={node.frontmatter.demo_link}>
            <Typography variant="h1" align="center" gutterBottom>
              {node.frontmatter.title}
            </Typography>
          </Link>
          <Link href={node.frontmatter.demo_link}>
            <Img fluid={node.frontmatter.screenshot.childImageSharp.fluid} />
          </Link>
          <Typography
            align="center"
            variant="body1"
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              padding: "1rem",
            }}
          >
            {node.frontmatter.description}
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="h2">Technologies Used:</Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
          <Box display="flex" justifyContent="space-evenly" width="100%" mt={8}>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              href={node.frontmatter.demo_link}
            >
              Live Demo
            </Button>
            <Button
              size="large"
              variant="outlined"
              color="secondary"
              href={node.frontmatter.github_link}
            >
              View Source
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DevPortfolioItem;
