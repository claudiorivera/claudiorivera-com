import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context) {
	const posts = await getCollection("blog");

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => {
			const [year, month, day] = post.data.date
				.toISOString()
				.slice(0, 10)
				.split("-");

			return {
				...post.data,
				pubDate: post.data.date.toUTCString(),
				link: `/${year}/${month}/${day}/${post.slug}`,
			};
		}),
	});
}
