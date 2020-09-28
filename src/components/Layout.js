import {
  Container,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import BackgroundImg from "./BackgroundImg";
import Footer from "./Footer";
import Header from "./Header";

const colors = {
  blue: "#0169e9",
  indigo: "#4770df",
};

const fonts = {
  serif: "EB Garamond, serif",
  sans: "Inter, sans-serif",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${colors.blue}`,
    },
    secondary: {
      main: `${colors.indigo}`,
    },
  },
  typography: {
    fontFamily: `${fonts.sans}`,
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: `${fonts.serif}`,
        fontSize: "2.2rem",
      },
      body2: {
        fontFamily: `${fonts.serif}`,
        fontSize: "1.75rem",
      },
      h1: {
        fontWeight: 700,
        fontSize: "5rem",
      },
      h2: {
        fontWeight: 700,
        fontSize: "3rem",
      },
      overline: {
        fontSize: "1.5rem",
      },
    },
    MuiCssBaseline: {
      "@global": {
        html: {
          fontSize: "62.5%",
        },
        h1: {
          fontSize: "6rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        },
        h2: {
          fontSize: "1.5rem",
        },
        a: {
          color: `${colors.indigo}`,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
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
        color: `${colors.indigo}`,
      },
    },
    MuiButton: {
      textSizeLarge: {
        fontSize: "1.5rem",
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: "3rem",
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: "1.5rem",
      },
    },
  },
});

const Layout = ({ children, coverTitle, coverImage }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const data = useStaticQuery(graphql`
    query siteMetadataQuery {
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
      <BackgroundImg
        title="background"
        fluid={coverImage}
        overlayColor={`${colors.blue}bf`}
        height={isMobile ? "15vh" : "100vh"}
      >
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
        />
        {!isMobile && coverImage && (
          <h1
            style={{
              position: "absolute",
              bottom: 0,
              color: "white",
              textAlign: "center",
            }}
          >
            {coverTitle || ""}
            <br />
            <ArrowDownwardIcon />
          </h1>
        )}
      </BackgroundImg>
      <Container maxWidth="md">
        <main>{children}</main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  coverTitle: PropTypes.string,
  coverImage: PropTypes.object,
};

export default Layout;
