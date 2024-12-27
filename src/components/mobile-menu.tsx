import { AlignJustify } from "lucide-react";
import { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { MENU_LINKS } from "~/consts";

export function MobileMenu() {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
			<DropdownMenuTrigger
				onClick={() => {
					setDropdownOpen((val) => !val);
				}}
			>
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
