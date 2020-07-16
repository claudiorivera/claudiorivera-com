import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

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
    position: "relative",
    textAlign: "center",
    top: "60vh",
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
  const pageName = "Hello.";

  // Responsive menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
            <Typography
              variant="h6"
              className={isMobile ? styles.hideOnMobile : styles.description}
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
              <MenuIcon />
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
              open={open}
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
            <Button key={index} color="inherit" component={Link} to={url}>
              {title}
            </Button>
          ))}
      </Toolbar>
      <Typography variant="h1" className={styles.pageName}>
        {pageName}
      </Typography>
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
