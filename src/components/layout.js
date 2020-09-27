import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { CssBaseline, Container, ThemeProvider } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import { createMuiTheme } from "@material-ui/core/styles";
// import Img from "gatsby-image";
import BackgroundImg from "./BackgroundImg";

const colors = {
  blue: "#0169e9",
  indigo: "#4770df",
  red: "#EC0B43",
  black: "#000000",
  gray: "#808080",
  white: "#000000",
};

const fonts = {
  serif: "PT Serif, serif",
  sans: "'Inter', sans-serif",
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
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: `${fonts.serif}`,
        fontWeight: 400,
        fontSize: "1.25rem",
      },
      h1: {
        fontFamily: `${fonts.sans}`,
        letterSpacing: "-.05rem",
        lineHeight: "1.25",
        fontWeight: 700,
        fontSize: "3rem",
      },
      h2: {
        fontFamily: `${fonts.sans}`,
        letterSpacing: "-.05rem",
        lineHeight: "1.25",
        fontWeight: 700,
        fontSize: "2rem",
      },
    },
    MuiCssBaseline: {
      "@global": {
        a: {
          color: `${colors.indigo}`,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
        ul: {
          marginBottom: "1rem",
        },
        li: {
          marginBottom: ".25rem",
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
  },
});

const Layout = ({ children }) => {
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
        height="100vh"
      >
        <Header
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
        />
      </BackgroundImg>
      <Container maxWidth="md">
        <main>{children}</main>
      </Container>
      <hr />
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
