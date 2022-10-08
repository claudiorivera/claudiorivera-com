import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { MusicExperienceType } from "types";

import { Link } from "./Link";

type Props = {
	musicExperience: MusicExperienceType;
};
export const MusicExperienceItem = ({ musicExperience }: Props) => (
	<Card key={musicExperience.slug} sx={{ mb: 2 }}>
		<CardHeader
			sx={{ px: 4, pt: 4, pb: 0 }}
			title={
				<>
					<Link href={musicExperience.link}>
						<Typography variant="h3">{musicExperience.title}</Typography>
					</Link>
					<Typography variant="overline">{musicExperience.label}</Typography>
				</>
			}
			subheader={
				<Typography variant="subtitle1">{musicExperience.years}</Typography>
			}
		/>
		<CardContent sx={{ pt: 0 }}>
			<Typography
				sx={{ py: 0, my: 0 }}
				variant="body2"
				component="div"
				dangerouslySetInnerHTML={{ __html: musicExperience.content }}
			/>
		</CardContent>
	</Card>
);
