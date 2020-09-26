import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { CssBaseline, Container, ThemeProvider } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  blue: "#1e73be",
  red: "#EC0B43",
  black: "#000000",
  gray: "#808080",
  white: "#000000",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${colors.blue}`,
    },
    secondary: {
      main: `${colors.red}`,
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
          color: "#1e73be",
        },
        ul: {
          marginBottom: "2rem",
        },
        li: {
          marginBottom: ".5rem",
        },
        hr: {
          border: 0,
          height: "1px",
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0))",
          margin: "5rem 0 5rem",
        },
      },
    },
    MuiLink: {
      root: {
        textDecoration: "none",
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
      <Container maxWidth="lg">
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
