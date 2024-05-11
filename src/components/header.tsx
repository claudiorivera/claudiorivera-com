import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MENU_LINKS } from "@/lib/constants";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

export function Header({
	siteTitle,
	siteDescription,
}: {
	siteTitle: string;
	siteDescription: string;
}) {
	return (
		<header
			color="transparent"
			className="relative sm:p-4 text-primary-foreground w-full flex flex-col justify-center sm:justify-start"
		>
			<div className="flex justify-between items-center">
				<div className="flex items-baseline gap-4 flex-wrap">
					<Link href="/">
						<h1 className="font-bold tracking-tighter text-xl sm:text-2xl">
							{siteTitle}
						</h1>
					</Link>
					<h2 className="tracking-tighter text-lg sm:text-xl font-medium">
						{siteDescription}
					</h2>
				</div>
				<div className="flex">
					<div className="sm:hidden">
						<DropdownMenu>
							<DropdownMenuTrigger>
								<AlignJustify />
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								{MENU_LINKS.map(({ url, title }) => (
									<DropdownMenuItem key={url}>
										<Link className="font-sans" href={url}>
											{title}
										</Link>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
					<div className="hidden sm:flex">
						{MENU_LINKS.map(({ title, url }) => (
							<Button
								key={url}
								asChild
								variant="ghost"
								size="sm"
								className="uppercase"
							>
								<Link href={url}>{title}</Link>
							</Button>
						))}
					</div>
				</div>
			</div>
		</header>
	);
}
