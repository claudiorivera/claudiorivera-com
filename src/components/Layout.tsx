import {
  Container,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { graphql, useStaticQuery } from "gatsby";
import { FluidObject } from "gatsby-image";
import PropTypes from "prop-types";
import React, { ReactNode } from "react";
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

const theme = createTheme({
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
        marginTop: "1rem",
        marginBottom: "1rem",
        padding: "1rem",
      },
      h1: {
        fontWeight: 700,
        fontSize: "5rem",
      },
      h2: {
        fontWeight: 700,
        fontSize: "3rem",
      },
      h3: {
        fontWeight: 700,
        fontSize: "1.5rem",
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
      outlinedSizeLarge: {
        fontSize: "1.75rem",
      },
      textSizeLarge: {
        fontSize: "1.5rem",
      },
    },
    MuiSvgIcon: {
      fontSizeLarge: {
        fontSize: "4rem",
      },
    },
    MuiMenuItem: {
      root: {
        fontSize: "1.5rem",
      },
    },
  },
});

type LayoutProps = {
  children: ReactNode;
  coverImage: FluidObject;
  coverTitle?: string;
};
const Layout = ({ children, coverImage, coverTitle }: LayoutProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const data = useStaticQuery<{
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
  }>(graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BackgroundImg
        fluid={coverImage}
        height={isMobile ? "15vh" : "100vh"}
        overlayColor={`${colors.blue}bf`}
        title="background"
      >
        <Header
          siteDescription={data.site.siteMetadata.description}
          siteTitle={data.site.siteMetadata.title}
        />
        {!isMobile && coverImage && (
          <h1
            style={{
              bottom: 0,
              color: "white",
              position: "absolute",
              textAlign: "center",
            }}
          >
            {coverTitle || ""}
            <br />
            <ArrowDownwardIcon fontSize="large" />
          </h1>
        )}
      </BackgroundImg>
      <Container maxWidth="md">
        <main id="main">{children}</main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  coverImage: PropTypes.object.isRequired,
  coverTitle: PropTypes.string.isRequired,
};

export default Layout;
