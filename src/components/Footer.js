import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    color: "white",
    textAlign: "center",
    backgroundColor: "#1e73be",
    margin: 0,
    marginTop: "4rem",
    height: "4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Footer = () => {
  const styles = useStyles();
  return (
    <div className={styles.footer}>
      © {new Date().getFullYear()} Claudio Rivera. Made with Gatsby.
    </div>
  );
};

export default Footer;
