import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://www.claudiorivera.com",
	integrations: [mdx(), sitemap(), react()],
	vite: {
		plugins: [tailwindcss()],
	},
	output: "static",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Inter",
			cssVariable: "--font-inter",
		},
		{
			provider: fontProviders.fontsource(),
			name: "EB Garamond",
			cssVariable: "--font-eb-garamond",
		},
	],
});
