import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { markdownToHtml } from "./markdownToHtml";

const musicExperiencesDirectory = join(
  process.cwd(),
  "public/music-experience"
);

export const getMusicExperienceSlugs = () =>
  fs.readdirSync(musicExperiencesDirectory);

export const getMusicExperienceBySlug = async (
  slug: string,
  fields: string[] = []
) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(musicExperiencesDirectory, `${realSlug}.md`);
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

type GetAllMusicExperiencesArgs = {
  fields: string[];
};
export const getAllMusicExperiences = async ({
  fields = [],
}: GetAllMusicExperiencesArgs) => {
  const slugs = getMusicExperienceSlugs();

  let musicExperiences = [];
  for (const slug of slugs) {
    const musicExperience = await getMusicExperienceBySlug(slug, fields);
    musicExperiences.push(musicExperience);
  }

  const response = musicExperiences.sort((m1, m2) =>
    m1.order < m2.order ? -1 : 1
  );

  return response;
};
