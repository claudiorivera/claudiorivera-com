import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import {
  CssBaseline,
  Container,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import Header from "./Header";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0169e9",
    },
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: "Merriweather, 'Times New Roman', serif",
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
      <Container maxWidth="sm">
        <main>{children}</main>
      </Container>
      <Container>
        <Typography variant="caption">
          © {new Date().getFullYear()} Claudio Rivera
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
