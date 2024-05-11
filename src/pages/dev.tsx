import { Layout } from "@/components/layout";
import { PortfolioItem } from "@/components/portfolio-item";
import { ContentType, getAllItems } from "@/lib/api";
import type { GetStaticProps } from "next";
import Link from "next/link";
import type { PortfolioItem as PortfolioItemType } from "types";

export const getStaticProps: GetStaticProps = async () => {
	const { data: portfolioItems } = await getAllItems({
		contentType: ContentType.Dev,
		fields: [
			"slug",
			"title",
			"description",
			"demoLink",
			"githubLink",
			"screenshot",
			"order",
			"content",
		],
	});

	return {
		props: {
			portfolioItems,
		},
	};
};

type Props = {
	portfolioItems: PortfolioItemType[];
};
const DevPage = ({ portfolioItems }: Props) => (
	<Layout
		coverImage="/images/ferenc-almasi-L8KQIPCODV8-unsplash.jpg"
		title="Dev"
	>
		<div className="flex flex-col gap-8 sm:gap-16">
			<div className="flex flex-col gap-8 sm:gap-16">
				{portfolioItems.map((portfolioItem) => (
					<div className="border-b pb-8 sm:pb-16" key={portfolioItem.slug}>
						<PortfolioItem portfolioItem={portfolioItem} />
					</div>
				))}
			</div>

			<h1 className="font-semibold text-5xl">
				For more, please visit{" "}
				<Link className="text-primary" href="https://github.com/claudiorivera">
					my GitHub profile
				</Link>
				.
			</h1>
		</div>
	</Layout>
);

export default DevPage;
