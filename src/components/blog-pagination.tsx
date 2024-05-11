import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export function BlogPagination({
	pageContext,
}: {
	pageContext: {
		currentPage: number;
		prevPage: number;
		nextPage: number;
		numPages: number;
		itemsPerPage: number;
	};
}) {
	const { currentPage, prevPage, nextPage, itemsPerPage } = pageContext;

	return (
		<div className="container mx-auto px-4">
			<div className="flex justify-between items-center">
				<Link
					className={cn("text-primary", {
						"pointer-events-none text-slate-400 no-underline":
							currentPage === prevPage,
						"opacity-50": currentPage === prevPage,
					})}
					href={prevPage === 1 ? "/blog" : `/blog/page-${prevPage}`}
				>
					<div className="flex items-center">
						<ArrowLeft /> Prev {itemsPerPage}
					</div>
				</Link>
				<Link
					className={cn("text-primary", {
						"pointer-events-none text-slate-400 no-underline":
							currentPage === nextPage,
						"opacity-50": currentPage === nextPage,
					})}
					href={`/blog/page-${nextPage}`}
				>
					<div className="flex items-center">
						Next {itemsPerPage} <ArrowRight />
					</div>
				</Link>
			</div>
		</div>
	);
}
