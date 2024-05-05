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
		<div className="flex flex-col gap-4 pb-16">
			<div className="flex flex-col gap-2">
				<h3 className="font-semibold text-xl">See</h3>
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
			</div>
			<div className="flex flex-col gap-2">
				<h3 className="font-semibold text-xl">Hear</h3>
					<Embed
						url="https://embed.music.apple.com/us/playlist/songs-ive-played-on/pl.u-MZrqIo3RAW?app=music"
						title="Songs I've Played On"
						iframeProps={{
							allow: "encrypted-media",
						}}
					/>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className="font-semibold text-xl">Selected Discography &amp; Experience</h3>
				<div className="flex flex-col gap-4">
					{musicExperiences.map((musicExperience) => (
						<MusicExperienceItem
							key={musicExperience.slug}
							musicExperience={musicExperience}
						/>
					))}
				</div>
			</div>
		</div>
	</Layout>
);

export default MusicPage;
