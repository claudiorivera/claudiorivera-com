import "@fontsource/eb-garamond/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

import { createTheme } from "@mui/material/styles";

const colors = {
  blue: "#0169e9",
  indigo: "#4770df",
};

const fonts = {
  serif: "EB Garamond, serif",
  sans: "Inter, sans-serif",
};

export const theme = createTheme({
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
  components: {
    MuiTypography: {
      styleOverrides: {
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
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: `${colors.indigo}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlinedSizeLarge: {
          fontSize: "1.75rem",
        },
        textSizeLarge: {
          fontSize: "1.5rem",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: "4rem",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "1.5rem",
        },
      },
    },
  },
});
