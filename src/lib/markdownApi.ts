import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { markdownToHtml } from "./markdownToHtml";
import { paginate } from "./paginate";

export enum ContentType {
  Music = "music-experience",
  Blog = "posts",
  Dev = "dev-portfolio",
}

type GetSlugsArgs = {
  contentType: ContentType;
};
export const getSlugs = ({ contentType }: GetSlugsArgs) =>
  fs.readdirSync(getDirectoryForContentType(contentType));

type GetItemBySlugArgs = {
  contentType: ContentType;
  slug: string;
  fields: string[];
};
export const getItemBySlug = async ({
  contentType,
  slug,
  fields = [],
}: GetItemBySlugArgs) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(
    getDirectoryForContentType(contentType),
    `${realSlug}.md`
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
};

type GetAllItemsArgs = {
  contentType: ContentType;
  fields: string[];
  orderByField?: string;
  orderByDirection?: "asc" | "desc";
  itemsPerPage?: number;
  page?: number;
};
export const getAllItems = async ({
  contentType,
  fields = [],
  orderByField = "order",
  orderByDirection = "asc",
  itemsPerPage,
  page = 1,
}: GetAllItemsArgs) => {
  const slugs = getSlugs({
    contentType,
  });

  let items = [];
  for (const slug of slugs) {
    const item = await getItemBySlug({
      contentType,
      slug,
      fields,
    });
    items.push(item);
  }

  const sortAscending = (a: Items, b: Items) =>
    a[orderByField] < b[orderByField] ? -1 : 1;
  const sortDescending = (a: Items, b: Items) =>
    a[orderByField] > b[orderByField] ? -1 : 1;

  const sortedItems = items.sort((m1, m2) =>
    orderByDirection === "asc" ? sortAscending(m1, m2) : sortDescending(m1, m2)
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
};

type Items = {
  [key: string]: string;
};

const getDirectoryForContentType = (contentType: ContentType) =>
  join(process.cwd(), "public", contentType);
