import { Container, Typography } from "@mui/material";
import type { GetStaticProps } from "next";
import type { MusicExperienceType } from "types";

import { Embed, Layout } from "@/components";
import { MusicExperienceItem } from "@/components/MusicExperienceItem";
import { ContentType, getAllItems } from "@/lib";

export const getStaticProps: GetStaticProps = async () => {
	const { data: musicExperiences } = await getAllItems({
		contentType: ContentType.Music,
		fields: ["slug", "title", "order", "label", "years", "link", "content"],
	});

	return {
		props: {
			musicExperiences,
		},
	};
};

type Props = {
	musicExperiences: MusicExperienceType[];
};
const MusicPage = ({ musicExperiences }: Props) => (
	<Layout coverImage="/images/joe-lemke-cr-behind-kit.jpg" title="Music">
		<Container>
			<Typography variant="h3" gutterBottom>
				See
			</Typography>
			<Embed
				url="https://www.youtube.com/embed/videoseries?list=PLB953FCBE7D8E1AC1"
				title="YouTube playlist of random drum and music-related videos of mine."
				iframeProps={{
					allow:
						"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
					frameBorder: "0",
					allowFullScreen: true,
				}}
			/>
		</Container>
		<Container>
			<Typography variant="h3" gutterBottom>
				Hear
			</Typography>
			<Embed
				url="https://embed.music.apple.com/us/playlist/songs-ive-played-on/pl.u-MZrqIo3RAW?app=music"
				title="Songs I've Played On"
				iframeProps={{
					allow: "encrypted-media",
				}}
			/>
		</Container>
		<Container>
			<Typography variant="h3" gutterBottom>
				Selected Discography &amp; Experience
			</Typography>
			{musicExperiences.map((musicExperience) => (
				<MusicExperienceItem
					key={musicExperience.slug}
					musicExperience={musicExperience}
				/>
			))}
		</Container>
	</Layout>
);

export default MusicPage;
