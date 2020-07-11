import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
    letterSpacing: "-.05rem",
  },
  link: {
    textDecoration: "none",
  },
  hero: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(20, 0, 5),
    color: "white",
    backgroundImage: `url("/static/cd99cdc16a0214c172b830efb8d87973/14b42/IMG_0011_wide.jpg")`,
    textAlign: "center",
    marginBottom: "3rem",
  },
}));

const Header = ({ siteTitle, siteDescription }) => {
  const styles = useStyles();
  return (
    <Fragment>
      <AppBar position="static" className={styles.root}>
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
      <div className={styles.hero}>
        <Typography variant="h1">Hello.</Typography>
      </div>
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
