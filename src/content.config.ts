import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/blog" }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		category: z.enum(["music", "tech"]),
		featuredImage: z.string(),
	}),
});

const devPortfolioItem = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/dev" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		demoLink: z.url(),
		githubLink: z.url(),
		screenshotDesktop: z.string(),
		screenshotMobile: z.string(),
		requiresAuth: z.boolean().default(false),
		order: z.number(),
	}),
});

const musicExperience = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/music" }),
	schema: z.object({
		title: z.string(),
		label: z.string(),
		years: z.string(),
		link: z.url(),
		order: z.number(),
	}),
});

export const collections = {
	blog,
	dev: devPortfolioItem,
	music: musicExperience,
};
