import type { GetStaticProps } from "next";

import { ContentType, getAllItems } from "@/lib";

export const getStaticProps: GetStaticProps = async () => {
	const { data: posts, pageContext } = await getAllItems({
		contentType: ContentType.Blog,
		fields: ["slug", "title", "date", "category", "featuredImage", "content"],
		page: 1,
		itemsPerPage: 3,
		orderByField: "date",
		orderByDirection: "desc",
	});

	return {
		props: {
			posts,
			pageContext,
		},
	};
};

export { BlogPosts as default } from "@/components/blog-posts";
