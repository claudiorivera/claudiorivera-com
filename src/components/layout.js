import {
  Container,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
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

const Layout = ({ children }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const data = useStaticQuery(graphql`
    query coverPhotoAndSiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { eq: "cr-drum-cover-photo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BackgroundImg
        title="background"
        fluid={data.file.childImageSharp.fluid}
        overlayColor={`${colors.blue}bf`}
        height={isMobile ? "15vh" : "50vh"}
      >
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
        />
        {!isMobile && (
          <h1 style={{ position: "absolute", bottom: 0, color: "white" }}>
            Hi.
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
};

export default Layout;
