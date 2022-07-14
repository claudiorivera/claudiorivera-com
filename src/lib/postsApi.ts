import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { markdownToHtml } from "./markdownToHtml";
import { paginate } from "./paginate";

const postsDirectory = join(process.cwd(), "public/posts");

export const getPostSlugs = () => fs.readdirSync(postsDirectory);

export const getPostBySlug = async (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
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

type GetAllPostsArgs = {
  fields: string[];
  limit?: number;
  skip?: number;
};
export const getAllPosts = async ({
  fields = [],
  limit = 3,
  skip = 1,
}: GetAllPostsArgs) => {
  const slugs = getPostSlugs();

  let posts = [];
  for (const slug of slugs) {
    const post = await getPostBySlug(slug, fields);
    posts.push(post);
  }

  const sortedPosts = posts.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  );

  const numPages = Math.ceil(sortedPosts.length / limit);
  const currentPage = skip;
  const prevPage = currentPage <= 1 ? 0 : currentPage - 1;
  const nextPage = currentPage >= numPages ? numPages : currentPage + 1;

  const response = {
    posts: paginate({
      array: sortedPosts,
      limit,
      skip,
    }),
    pageContext: {
      limit,
      numPages,
      currentPage,
      prevPage,
      nextPage,
    },
  };

  return response;
};
