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
import PropTypes from "prop-types";
import React from "react";

const PortfolioItem = ({ portfolioItem }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Box my={!isMobile ? "7rem" : ""}>
      <Grid container spacing={2} justifyContent="center">
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
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            spacing={2}
          >
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

PortfolioItem.propTypes = {
  portfolioItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      demo_link: PropTypes.string.isRequired,
      github_link: PropTypes.string.isRequired,
      screenshot: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({
            src: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    html: PropTypes.string.isRequired,
  }).isRequired,
};

export default PortfolioItem;
