import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { CssBaseline, Container, ThemeProvider } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  blue: "#4770df",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${colors.blue}`,
    },
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: "'Merriweather', sans-serif",
        fontSize: "1.2rem",
      },
      h1: {
        fontFamily: "'Inter', sans-serif",
        letterSpacing: "-.05rem",
        lineHeight: "1.25",
        fontWeight: 700,
        fontSize: "3rem",
      },
      h2: {
        fontFamily: "'Inter', sans-serif",
        letterSpacing: "-.05rem",
        lineHeight: "1.25",
        fontWeight: 700,
        fontSize: "2rem",
      },
    },
    MuiCssBaseline: {
      "@global": {
        a: {
          textDecoration: "none",
          color: `${colors.blue}`,
        },
        ul: {
          marginBottom: ".75rem",
        },
        li: {
          marginBottom: ".75rem",
        },
      },
    },
  },
});

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />
      <Container maxWidth="xl">
        <main>{children}</main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
