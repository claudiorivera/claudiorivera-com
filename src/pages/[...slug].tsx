import dayjs from "dayjs";
import type { GetStaticPropsContext } from "next";
import type { Post } from "types";
import { Layout } from "~/components/layout";
import { ContentType, getAllItems, getItemBySlug } from "~/lib/api";

export async function getStaticPaths() {
	const { data: posts } = await getAllItems({
		contentType: ContentType.Blog,
		fields: ["slug", "date"],
	});

	return {
		paths: posts.map(({ date, slug }) => {
			const [year, month, day] = date.split("-");

			return {
				params: {
					slug: [year, month, day, slug],
				},
			};
		}),
		fallback: false,
	};
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
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
}

export default function BlogPostPage({
	post,
}: {
	post: Post;
}) {
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
}
