import "~/styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { EB_Garamond, Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const ebGaramond = EB_Garamond({
	subsets: ["latin"],
	variable: "--font-eb-garamond",
});

export default function MyApp(props: AppProps) {
	const { Component, pageProps } = props;
	return (
		<>
			<style jsx global>{`
        html {
          font-family: var(${inter.variable});
        }
      `}</style>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<main className={`${ebGaramond.variable}`}>
				<Component {...pageProps} />
			</main>
			<Analytics />
		</>
	);
}
