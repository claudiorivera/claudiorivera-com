import {
  Box,
  Button,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Img from "gatsby-image";
import React from "react";

const PortfolioItem = ({ portfolioItem }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box my={!isMobile ? "7rem" : ""}>
      <Grid container spacing={2} justify="center">
        <Grid item md={6} sm={12}>
          <Link href={portfolioItem.frontmatter.demo_link}>
            <Typography variant="h1" align="center" gutterBottom>
              {portfolioItem.frontmatter.title}
            </Typography>
          </Link>
          <Link href={portfolioItem.frontmatter.demo_link}>
            <Img
              fluid={portfolioItem.frontmatter.screenshot.childImageSharp.fluid}
            />
          </Link>
          <Typography align="center" variant="body2">
            {portfolioItem.frontmatter.description}
          </Typography>
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography variant="h2">Technologies Used:</Typography>
          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={{ __html: portfolioItem.html }}
          />
          <Grid container direction="row" justify="space-evenly" spacing={2}>
            <Grid item>
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                href={portfolioItem.frontmatter.demo_link}
              >
                Live Demo
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                href={portfolioItem.frontmatter.github_link}
              >
                View Source
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PortfolioItem;
