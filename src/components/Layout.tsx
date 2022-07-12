import { ArrowDownward } from "@mui/icons-material";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { StaticImageData } from "next/future/image";
import { ReactNode } from "react";

import BackgroundImg from "./BackgroundImg";
import Footer from "./Footer";
import Header from "./Header";

const colors = {
  blue: "#0169e9",
  indigo: "#4770df",
};

type LayoutProps = {
  children: ReactNode;
  coverImage: StaticImageData;
  coverTitle?: string;
};
const Layout = ({ children, coverImage, coverTitle }: LayoutProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const data = {
    site: {
      siteMetadata: {
        title: "Claudio Rivera",
        description: "Drummer | Developer | Drum Tech",
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BackgroundImg
        image={coverImage}
        height={isMobile ? "15vh" : "100vh"}
        overlayColor={`${colors.blue}bf`}
        title="background"
      >
        <Header
          siteDescription={data.site.siteMetadata.description}
          siteTitle={data.site.siteMetadata.title}
        />
        {!isMobile && coverImage && (
          <Typography
            variant="h1"
            sx={{
              bottom: 0,
              color: "white",
              position: "absolute",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              {coverTitle || ""}
              <ArrowDownward fontSize="large" />
            </Box>
          </Typography>
        )}
      </BackgroundImg>
      <Container maxWidth="md">
        <main id="main">{children}</main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
