import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    color: "white",
    backgroundColor: "#1e73be",
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
      <a
        style={{ color: "white" }}
        href="https://github.com/claudiorivera/cr-com"
      >
        View Source
      </a>
    </div>
  );
};

export default Footer;
