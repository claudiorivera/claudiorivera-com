import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  navBar: {
    padding: "1rem",
    backgroundImage: `linear-gradient(
      rgba(1, 105, 233, .75),
      rgba(1, 105, 233, .75)
    ),
    url('/static/cd99cdc16a0214c172b830efb8d87973/14b42/IMG_0011_wide.jpg');`,
    backgroundSize: "cover",
    background: "center center",
    color: "white",
    marginBottom: "3rem",
    height: "100vh",
  },
  title: {
    fontWeight: 700,
    lineHeight: "1.5rem",
    letterSpacing: "-.05rem",
  },
  description: {
    letterSpacing: "-.05rem",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  pageName: {
    textAlign: "center",
  },
}));

const Header = ({ siteTitle, siteDescription }) => {
  const styles = useStyles();
  return (
    <Fragment>
      <AppBar position="static" color="transparent" className={styles.navBar}>
        <Toolbar>
          <Grid container spacing={2} alignItems="baseline">
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
      <Typography variant="h1" className={styles.pageName}>
        Hello.
      </Typography>
    </Fragment>
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
