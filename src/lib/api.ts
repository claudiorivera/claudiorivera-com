import fs from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { markdownToHtml } from "~/lib/markdown-to-html";
import { paginate } from "~/lib/paginate";

type Items = Record<string, string>;

export enum ContentType {
	Music = "music-experience",
	Blog = "posts",
	Dev = "dev-portfolio",
}

export function getSlugs({
	contentType,
}: {
	contentType: ContentType;
}) {
	return fs.readdirSync(getDirectoryForContentType(contentType));
}

export async function getItemBySlug({
	contentType,
	slug,
	fields = [],
}: {
	contentType: ContentType;
	slug: string;
	fields: string[];
}) {
	const realSlug = Array.isArray(slug) ? slug[3] : slug.replace(/\.md$/, "");
	const fullPath = join(
		getDirectoryForContentType(contentType),
		`${realSlug}.md`,
	);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	const items: Items = {};

	// Ensure only the minimal needed data is exposed
	for (const field of fields) {
		if (field === "slug") {
			items[field] = realSlug;
		}
		if (field === "content") {
			items[field] = await markdownToHtml(content || "");
		}

		if (typeof data[field] !== "undefined") {
			items[field] = data[field];
		}
	}

	return items;
}

export async function getAllItems({
	contentType,
	fields = [],
	orderByField = "order",
	orderByDirection = "asc",
	itemsPerPage,
	page = 1,
}: {
	contentType: ContentType;
	fields: string[];
	orderByField?: string;
	orderByDirection?: "asc" | "desc";
	itemsPerPage?: number;
	page?: number;
}) {
	const slugs = getSlugs({
		contentType,
	});

	const items = await Promise.all(
		slugs.map((slug) =>
			getItemBySlug({
				contentType,
				slug,
				fields,
			}),
		),
	);

	const sortAscending = (a: Items, b: Items) =>
		a[orderByField] < b[orderByField] ? -1 : 1;
	const sortDescending = (a: Items, b: Items) =>
		a[orderByField] > b[orderByField] ? -1 : 1;

	const sortedItems = items.sort((m1, m2) =>
		orderByDirection === "asc" ? sortAscending(m1, m2) : sortDescending(m1, m2),
	);

	const numPages = itemsPerPage
		? Math.ceil(sortedItems.length / itemsPerPage)
		: 1;
	const prevPage = page <= 1 ? 1 : page - 1;
	const nextPage = page >= numPages ? numPages : page + 1;

	return {
		data: paginate({
			array: sortedItems,
			itemsPerPage,
			page,
		}),
		pageContext: {
			itemsPerPage: itemsPerPage ?? sortedItems.length,
			numPages,
			currentPage: page,
			prevPage,
			nextPage,
		},
	};
}

function getDirectoryForContentType(contentType: ContentType) {
	return join(process.cwd(), "public", contentType);
}
