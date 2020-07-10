import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "1rem",
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
    color: "white",
    lineHeight: "1.5rem",
    letterSpacing: "-.05rem",
  },
  description: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
  },
});

const Header = ({ siteTitle, siteDescription }) => {
  const styles = useStyles();
  return (
    <AppBar position="static" className={styles.root}>
      <Toolbar>
        <Grid container spacing={3} alignItems="baseline">
          <Grid item>
            <Link to="/" className={styles.link}>
              <Typography variant="h5" className={styles.title}>
                {siteTitle}
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="h6" className={styles.description}>
              {siteDescription}
            </Typography>
          </Grid>
        </Grid>
        <Button color="inherit" component={Link} to="/music">
          Music
        </Button>
        <Button color="inherit" component={Link} to="/dev">
          Dev
        </Button>
        <Button color="inherit" component={Link} to="/blog">
          Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
};

export default Header;
