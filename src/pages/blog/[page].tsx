import type { GetStaticPaths, GetStaticProps } from "next";
import { ContentType, getAllItems } from "~/lib/api";

export const getStaticPaths: GetStaticPaths = async () => {
	const { pageContext } = await getAllItems({
		contentType: ContentType.Blog,
		fields: ["slug"],
		itemsPerPage: 3,
		orderByField: "date",
		orderByDirection: "desc",
	});

	const { numPages } = pageContext;

	const pageNumbers = [...Array(numPages)].map((_, i) => i + 1);

	return {
		paths: pageNumbers.map((pageNumber) => ({
			params: {
				page: `page-${pageNumber}`,
			},
		})),
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const page = (params?.page as string).split("-")[1];
	const { data: posts, pageContext } = await getAllItems({
		contentType: ContentType.Blog,
		fields: ["slug", "title", "date", "category", "featuredImage", "content"],
		page: Number.parseInt(page),
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

export { BlogPosts as default } from "~/components/blog-posts";
