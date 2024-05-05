import dayjs from "dayjs";
import Image from "next/image";
import { Fragment } from "react";
import type { PageContext, PostType } from "types";

import { BlogPagination, Layout } from "@/components";
import Link from "next/link";

export function BlogPosts({
	posts,
	pageContext,
}: {
	posts: PostType[];
	pageContext: PageContext;
}) {
	return (
		<Layout
			coverImage="/images/patrick-fore-0gkw_9fy0eQ-unsplash.jpg"
			title="Blog"
		>
			{posts.map(({ slug, title, date, category, featuredImage, content }) => {
				const [year, month, day] = date.split("-");

				return (
					<Fragment key={slug}>
						<article className="flex flex-col gap-8">
							<header className="flex flex-col gap-1 items-center">
								<span className="uppercase text-xs">{category}</span>
								<Link
									className="text-4xl font-bold text-primary text-center"
									href={`/${year}/${month}/${day}/${slug}`}
								>
									<p>{title}</p>
								</Link>
								<h4 className="text-sm">
									{dayjs(date).format("MMMM D, YYYY")}
								</h4>
							</header>
							<div className="w-full h-auto relative">
								<Image
									className="w-full h-auto"
									src={featuredImage}
									width={600}
									height={400}
									alt=""
								/>
							</div>
							<div
								className="font-serif prose-lg sm:prose-xl max-w-none prose-a:text-primary prose-li:list-disc"
								// biome-ignore lint/security/noDangerouslySetInnerHtml: until astro migration
								dangerouslySetInnerHTML={{ __html: content }}
							/>
						</article>
						<hr className="my-8 sm:my-16" />
					</Fragment>
				);
			})}
			<BlogPagination pageContext={pageContext} />
		</Layout>
	);
}
