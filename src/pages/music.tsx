import { Container, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { MusicExperienceType } from "types/musicExperience";

import AppleMusicEmbed from "@/components/AppleMusicEmbed";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { getAllMusicExperiences } from "@/lib/musicExperienceApi";

export const getServerSideProps: GetServerSideProps = async () => {
  const musicExperiences = await getAllMusicExperiences({
    fields: ["slug", "title", "label", "years", "link", "content"],
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
  <Layout coverImage="/images/joe-lemke-cr-behind-kit.jpg" coverTitle="Music">
    <Seo title="Music" />
    <Container>
      <Typography variant="h1">See</Typography>
      <YouTubeEmbed
        url="https://www.youtube.com/embed/videoseries?list=PLB953FCBE7D8E1AC1"
        title="YouTube playlist of random drum and music-related videos of mine."
      />
    </Container>
    <Container>
      <Typography variant="h1">Hear</Typography>
      <AppleMusicEmbed
        url="https://embed.music.apple.com/us/playlist/songs-ive-played-on/pl.u-MZrqIo3RAW?app=music"
        title="Songs I've Played On"
      />
    </Container>
    <Container>
      <Typography variant="h1">
        Selected Discography &amp; Experience
      </Typography>
      {musicExperiences.map((musicExperience) => (
        <Container key={musicExperience.slug}>
          <Typography variant="body1">
            <strong>
              <Link href={musicExperience.link}>{musicExperience.title}</Link>
              &nbsp;
            </strong>
            ({musicExperience.label}) - ({musicExperience.years})
          </Typography>

          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={{ __html: musicExperience.content }}
          />
        </Container>
      ))}
    </Container>
  </Layout>
);

export default MusicPage;
