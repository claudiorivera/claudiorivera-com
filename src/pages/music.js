import React from "react";
import Video from "../components/Video";
import Audio from "../components/Audio";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Typography } from "@material-ui/core";

const MusicPage = () => (
  <Layout>
    <SEO title="Music" />
    <Typography variant="h4">See</Typography>
    <Video
      videoSrcURL="https://www.youtube.com/embed/videoseries?list=PLB953FCBE7D8E1AC1"
      videoTitle="YouTube playlist of random drum and music-related videos of mine."
    />
    <Typography variant="h4">Hear</Typography>
    <Audio
      audioSrcUrl="https://embed.music.apple.com/us/playlist/songs-ive-played-on/pl.u-MZrqIo3RAW?app=music"
      audioTitle="Songs I've Played On"
    />
    <Typography variant="h4">Selected Discography & Experience</Typography>
    <Typography variant="body1">
      <strong>
        <a
          href="http://www.savestheday.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Saves The Day
        </a>
        &nbsp;
      </strong>
      (Equal Vision)
    </Typography>

    <ul>
      <li>Drummer (2020 – Present)</li>
    </ul>

    <Typography variant="body1">
      <strong>
        <a
          href="https://artist.landr.com/music/628810988617"
          target="_blank"
          rel="noreferrer noopener"
        >
          “Habit and Routine, Vol. 2”
        </a>
        &nbsp;
      </strong>
      (2020 – Self-released EP)
    </Typography>

    <ul>
      <li>Performed drums, vocals, and guitars</li>
      <li>Engineered and mixed</li>
    </ul>

    <Typography variant="body1">
      <strong>
        <a
          href="https://artist.landr.com/music/628810708741"
          target="_blank"
          rel="noreferrer noopener"
        >
          “Habit and Routine”
        </a>
        &nbsp;
      </strong>
      (2019 – Self-released EP)
    </Typography>

    <ul>
      <li>Performed drums, vocals, and guitars</li>
      <li>Engineered and mixed</li>
    </ul>

    <Typography variant="body1">
      <strong>
        <a
          href="https://motioncitysoundtrack.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Motion City Soundtrack
        </a>
        &nbsp;
      </strong>
      (Epitaph)
    </Typography>

    <ul>
      <li>Drummer (2013 – 2016)</li>
      <li>Performed drums on LP “Panic Stations” (2015)</li>
    </ul>

    <Typography variant="body1">
      <strong>
        <a
          href="http://www.savestheday.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Saves The Day
        </a>
        &nbsp;
      </strong>
      (Equal Vision)
    </Typography>

    <ul>
      <li>Drummer (2010 – 2013)</li>
      <li>Performed drums on LP “Saves The Day” (2013)</li>
    </ul>

    <Typography variant="body1">
      <strong>
        <a
          href="https://en.wikipedia.org/wiki/Jimmy_Robbins"
          target="_blank"
          rel="noreferrer noopener"
        >
          Jimmy Robbins
        </a>
        &nbsp;
      </strong>
      (Universal/Motown)
    </Typography>

    <ul>
      <li>Touring drummer (2009)</li>
    </ul>

    <Typography variant="body1">
      <strong>
        <a
          href="https://itunes.apple.com/us/artist/somerset/id102288119"
          target="_blank"
          rel="noreferrer noopener"
        >
          Somerset
        </a>
        &nbsp;
      </strong>
      (Punknews)
    </Typography>

    <ul>
      <li>Drummer (2002 – 2008)</li>
      <li>Performed drums on LP “Pandora” (2005)</li>
      <li>Performed drums on EP “Somerset” (2004)</li>
      <li>Performed drums on EP “This Thought Process” (2003)</li>
    </ul>

    <Typography variant="body1">
      <strong>
        <a
          href="https://itunes.apple.com/us/artist/sing-it-loud/id265101134"
          target="_blank"
          rel="noreferrer noopener"
        >
          Sing It Loud
        </a>
        &nbsp;
      </strong>
      (Epitaph)
    </Typography>

    <ul>
      <li>Co-produced drums on LP “Come Around” (2008)</li>
      <li>
        Performed drums on song “Come Around” from LP “Come Around” (2008)
      </li>
    </ul>
  </Layout>
);

export default MusicPage;
