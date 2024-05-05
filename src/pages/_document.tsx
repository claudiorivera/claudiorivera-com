import Document, { Head, Html, Main, NextScript } from "next/document";
import type * as React from "react";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="theme-color" content="hsl(213 99% 46%)" />
					<link rel="shortcut icon" href="/static/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
