import { Link, navigate } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

const Header = ({ siteTitle }) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            <Link to="/" className={styles.link}>
              {siteTitle}
            </Link>
          </Typography>
          <Button color="inherit" onClick={() => navigate("/music")}>
            Music
          </Button>
          <Button color="inherit" onClick={() => navigate("/dev")}>
            Dev
          </Button>
          <Button color="inherit" onClick={() => navigate("/blog")}>
            Blog
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
