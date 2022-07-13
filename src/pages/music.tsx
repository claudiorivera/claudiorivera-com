import { Container, Typography } from "@mui/material";
import Link from "next/link";

import AppleMusicEmbed from "../components/AppleMusicEmbed";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import YouTubeEmbed from "../components/YouTubeEmbed";

const musicExperiences = [
  {
    id: 1,
    frontmatter: {
      link: "https://google.com",
      title: "Saves The Day",
      label: "Equal Vision",
      years: "2020 - Present",
    },
    html: `<ul>
    <li>Touring drummer</li>
    </ul>`,
  },
];
const MusicPage = () => (
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
        <Container key={musicExperience.id}>
          <Typography variant="body1">
            <strong>
              <Link href={musicExperience.frontmatter.link}>
                {musicExperience.frontmatter.title}
              </Link>
              &nbsp;
            </strong>
            ({musicExperience.frontmatter.label}) - (
            {musicExperience.frontmatter.years})
          </Typography>

          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={{ __html: musicExperience.html }}
          />
        </Container>
      ))}
    </Container>
  </Layout>
);

export default MusicPage;
