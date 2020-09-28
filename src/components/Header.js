import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

const useStyles = makeStyles(() => ({
  navBar: {
    padding: "1rem",
    color: "white",
    marginTop: "2vh",
  },
  title: {
    fontSize: "2.4rem",
    fontWeight: 700,
    letterSpacing: "-0.04em",
  },
  description: {
    letterSpacing: "-.04em",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  hideOnMobile: {
    display: "none",
  },
}));

const menuLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Music",
    url: "/music",
  },
  {
    title: "Dev",
    url: "/dev",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

const Header = ({ siteTitle, siteDescription }) => {
  const styles = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  // Responsive menu
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      color="transparent"
      position="relative"
      className={styles.navBar}
      elevation={0}
    >
      <Toolbar>
        <Grid container spacing={2} alignItems="baseline">
          <Grid item>
            <Link to="/" className={styles.link}>
              <Typography variant="h4" className={styles.title}>
                {siteTitle}
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              className={styles.description}
            >
              {siteDescription}
            </Typography>
          </Grid>
        </Grid>
        {isMobile && (
          <div>
            <IconButton
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={isOpen}
              onClose={handleClose}
            >
              {menuLinks.map(({ title, url }, index) => (
                <MenuItem
                  key={index}
                  onClick={handleClose}
                  component={Link}
                  to={url}
                >
                  {title}
                </MenuItem>
              ))}
            </Menu>
          </div>
        )}
        {!isMobile &&
          menuLinks.map(({ title, url }, index) => (
            <Button
              key={index}
              color="inherit"
              component={Link}
              to={url}
              size="large"
            >
              {title}
            </Button>
          ))}
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
