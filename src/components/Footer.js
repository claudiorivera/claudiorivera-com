import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    color: "white",
    backgroundColor: "#0169e9",
    margin: 0,
    marginTop: "4rem",
    height: "7rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Footer = () => {
  const styles = useStyles();
  return (
    <div className={styles.footer}>
      &copy; {new Date().getFullYear()} Claudio Rivera. Made with Gatsby.&nbsp;
      <Link href="https://github.com/claudiorivera/cr-com" color="inherit">
        View Source
      </Link>
    </div>
  );
};

export default Footer;
