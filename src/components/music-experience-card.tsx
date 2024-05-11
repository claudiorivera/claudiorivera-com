import Link from "next/link";
import type { MusicExperienceItem } from "types";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";

export function MusicExperienceCard({
	musicExperience,
}: {
	musicExperience: MusicExperienceItem;
}) {
	return (
		<Card className="shadow">
			<CardHeader>
				<CardTitle>
					<Link className="text-primary text-xl" href={musicExperience.link}>
						{musicExperience.title}
					</Link>
				</CardTitle>
				<CardDescription>
					<div className="flex flex-col gap-2">
						<div className="uppercase text-xs">{musicExperience.label}</div>
						<div className="font-semibold text-secondary-foreground">
							{musicExperience.years}
						</div>
					</div>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div
					className="font-serif prose-lg sm:prose-xl max-w-none prose-a:text-primary prose-li:list-disc prose-li:my-0"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
					dangerouslySetInnerHTML={{ __html: musicExperience.content }}
				/>
			</CardContent>
		</Card>
	);
}
