import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem as PortfolioItemType } from "types";

export function PortfolioItem({
	portfolioItem,
}: {
	portfolioItem: PortfolioItemType;
}) {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
			<div className="flex flex-col items-center gap-4">
				<Link
					className="text-5xl font-bold text-primary text-center"
					href={portfolioItem.demoLink}
				>
					<h2>{portfolioItem.title}</h2>
				</Link>
				<Link className="w-full h-auto relative" href={portfolioItem.demoLink}>
					<Image
						className="w-full h-auto"
						width={600}
						height={400}
						src={portfolioItem.screenshot}
						alt={`screenshot of ${portfolioItem.title}`}
					/>
				</Link>
				<p className="font-serif text-lg text-center">
					{portfolioItem.description}
				</p>
			</div>
			<div className="text-primary flex flex-col gap-4 px-16">
				<h2 className="text-2xl font-semibold text-black">
					Technologies Used:
				</h2>
				<div
					className="font-serif prose-lg sm:prose-xl max-w-none prose-a:text-primary prose-li:list-disc prose-li:my-0"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: until the astro migration
					dangerouslySetInnerHTML={{ __html: portfolioItem.content }}
				/>
				<div className="flex gap-4 justify-center">
					<Button variant="outline" color="secondary" asChild>
						<Link href={portfolioItem.demoLink}>Live Demo</Link>
					</Button>
					<Button variant="outline" color="secondary" asChild>
						<Link href={portfolioItem.githubLink}>View Source</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
