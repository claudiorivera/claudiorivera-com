import { AlignJustify } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { MENU_LINKS } from "~/consts";

export function MobileMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<AlignJustify />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{MENU_LINKS.map(({ url, title }) => (
					<DropdownMenuItem key={url}>
						<a className="font-sans" href={url}>
							{title}
						</a>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
