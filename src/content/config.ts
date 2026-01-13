import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.date(),
		category: z.enum(["music", "tech"]),
		featuredImage: z.string(),
	}),
});

const devPortfolioItem = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		demoLink: z.string().url(),
		githubLink: z.string().url(),
		screenshotDesktop: z.string(),
		screenshotMobile: z.string(),
		requiresAuth: z.boolean().default(false),
		order: z.number(),
	}),
});

const musicExperience = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		label: z.string(),
		years: z.string(),
		link: z.string().url(),
		order: z.number(),
	}),
});

export const collections = {
	blog,
	dev: devPortfolioItem,
	music: musicExperience,
};
