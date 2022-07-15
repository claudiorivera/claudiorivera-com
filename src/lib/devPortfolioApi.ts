import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { markdownToHtml } from "./markdownToHtml";

const portfolioItemsDirectory = join(process.cwd(), "public/dev-portfolio");

export const getPortfolioItemSlugs = () =>
  fs.readdirSync(portfolioItemsDirectory);

export const getPortfolioItemBySlug = async (
  slug: string,
  fields: string[] = []
) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(portfolioItemsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

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
};

type GetAllPortfolioItemsArgs = {
  fields: string[];
};
export const getAllPortfolioItems = async ({
  fields = [],
}: GetAllPortfolioItemsArgs) => {
  const slugs = getPortfolioItemSlugs();

  let portfolioItems = [];
  for (const slug of slugs) {
    const portfolioItem = await getPortfolioItemBySlug(slug, fields);
    portfolioItems.push(portfolioItem);
  }

  const response = portfolioItems.sort((p1, p2) =>
    p1.order < p2.order ? -1 : 1
  );

  return response;
};
