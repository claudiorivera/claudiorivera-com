import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    color: "grey",
    textAlign: "center",
  },
});

const Footer = () => {
  const styles = useStyles();
  return (
    <Container className={styles.footer}>
      © {new Date().getFullYear()} Claudio Rivera. Made with Gatsby.
    </Container>
  );
};

export default Footer;
