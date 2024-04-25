import { ArrowDownward } from "@mui/icons-material";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import Head from "next/head";
import type { ReactNode } from "react";

import { BackgroundImg } from "./BackgroundImg";
import { Footer } from "./Footer";
import { Header } from "./Header";

const colors = {
	blue: "#0169e9",
	indigo: "#4770df",
};

type LayoutProps = {
	children: ReactNode;
	coverImage: string;
	title?: string;
};
export const Layout = ({
	children,
	coverImage,
	title = "Home",
}: LayoutProps) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const meta = {
		title: "Claudio Rivera",
		description: "Drummer | Developer | Drum Tech",
	};

	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>{`${title} | Claudio Rivera`}</title>
				<meta name="description" content={meta.description} />
				<meta
					property="og:title"
					content={`${title} | Claudio Rivera`}
					key="title"
				/>
				<meta property="og:description" content={meta.description} />
				<meta property="og:type" content="website" />
			</Head>
			<BackgroundImg
				image={coverImage}
				height={isMobile ? "15vh" : "100vh"}
				overlayColor={`${colors.blue}bf`}
				title="background"
			>
				<Header siteDescription={meta.description} siteTitle={meta.title} />
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
							{title || ""}
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
