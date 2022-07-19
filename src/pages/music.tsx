import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import { GetStaticProps } from "next";
import { MusicExperienceType } from "types";

import { Embed, Layout, Link, Seo } from "@/components";
import { getAllMusicExperiences } from "@/lib";

export const getStaticProps: GetStaticProps = async () => {
  const musicExperiences = await getAllMusicExperiences({
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
  <Layout coverImage="/images/joe-lemke-cr-behind-kit.jpg" coverTitle="Music">
    <Seo title="Music" />
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
        <Card key={musicExperience.slug} sx={{ mb: 2 }}>
          <CardHeader
            sx={{ px: 4, pt: 4, pb: 0 }}
            title={
              <>
                <Link href={musicExperience.link}>
                  <Typography variant="h3">{musicExperience.title}</Typography>
                </Link>
                <Typography variant="overline">
                  {musicExperience.label}
                </Typography>
              </>
            }
            subheader={
              <Typography variant="subtitle1">
                {musicExperience.years}
              </Typography>
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
      ))}
    </Container>
  </Layout>
);

export default MusicPage;
