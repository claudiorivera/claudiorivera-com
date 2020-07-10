import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
    fontSize: "1.5rem",
  },
  description: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
    fontWeight: 700,
  },
});

const Header = ({ siteTitle, siteDescription }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={1} alignItems="baseline">
            <Grid item>
              <Typography variant="h6" className={styles.title}>
                <Link to="/" className={styles.link}>
                  {siteTitle}
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" className={styles.description}>
                {siteDescription}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} justify="flex-end" alignItems="center">
            <Grid item>
              <Link to="/music" className={styles.link}>
                Music
              </Link>
            </Grid>
            <Grid item>
              <Link to="/dev" className={styles.link}>
                Dev
              </Link>
            </Grid>
            <Grid item>
              <Link to="/blog" className={styles.link}>
                Blog
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
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
