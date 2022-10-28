import "@/styles/global.css";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import Head from "next/head";

import { createEmotionCache, theme } from "@/styles";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const colors = {
	blue: "#0169e9",
	indigo: "#4770df",
};

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles
					styles={{
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
					}}
				/>
				<Component {...pageProps} />
				<Analytics />
			</ThemeProvider>
		</CacheProvider>
	);
}
