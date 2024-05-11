import dayjs from "dayjs";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { Post } from "types";
import { Layout } from "~/components/layout";
import { ContentType, getAllItems, getItemBySlug } from "~/lib/api";

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: posts } = await getAllItems({
		contentType: ContentType.Blog,
		fields: ["slug", "date"],
	});

	return {
		paths: posts.map((post) => ({
			params: {
				slug: [
					post.date.split("-")[0],
					post.date.split("-")[1],
					post.date.split("-")[2],
					post.slug,
				],
			},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = await getItemBySlug({
		contentType: ContentType.Blog,
		slug: params?.slug as string,
		fields: ["slug", "title", "category", "date", "featuredImage", "content"],
	});

	return {
		props: {
			post,
		},
	};
};

type Props = {
	post: Post;
};
const BlogPost = ({ post }: Props) => {
	return (
		<Layout coverImage={post.featuredImage} title={`${post.title}`}>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2 items-start">
					<h2 className="text-3xl font-bold sm:hidden">{post.title}</h2>
					<span className="uppercase text-xs">{post.category}</span>
					<h3 className="font-bold text-xl">
						{dayjs(post.date).format("MMMM d, YYYY")}
					</h3>
				</div>
				<div
					className="font-serif prose-lg sm:prose-xl max-w-none prose-a:text-primary prose-li:list-disc"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: until astro migration
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</div>
		</Layout>
	);
};

export default BlogPost;
