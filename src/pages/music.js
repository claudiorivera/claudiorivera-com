import React from "react";
import Video from "../components/Video";
import Audio from "../components/Audio";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Typography } from "@material-ui/core";

const MusicPage = () => (
  <Layout>
    <SEO title="Music" />
    <Typography variant="h1">Music</Typography>
    <Typography variant="h3">Video</Typography>
    <Video
      videoSrcURL="https://www.youtube.com/embed/videoseries?list=PLB953FCBE7D8E1AC1"
      videoTitle="YouTube playlist of random drum and music-related videos of mine."
    />
    <Typography variant="h3">Audio</Typography>
    <Audio
      audioSrcUrl="https://embed.music.apple.com/us/playlist/songs-ive-played-on/pl.u-MZrqIo3RAW?app=music"
      audioTitle="Songs I've Played On"
    />
    <Typography variant="h3">Selected Discography & Experience</Typography>
    <Typography variant="body1">
      <p>
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
      </p>

      <ul>
        <li>Drummer (2020 – Present)</li>
      </ul>

      <p>
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
      </p>

      <ul>
        <li>Performed drums, vocals, and guitars</li>
        <li>Engineered and mixed</li>
      </ul>

      <p>
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
      </p>

      <ul>
        <li>Performed drums, vocals, and guitars</li>
        <li>Engineered and mixed</li>
      </ul>

      <p>
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
      </p>

      <ul>
        <li>Drummer (2013 – 2016)</li>
        <li>Performed drums on LP “Panic Stations” (2015)</li>
      </ul>

      <p>
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
      </p>

      <ul>
        <li>Drummer (2010 – 2013)</li>
        <li>Performed drums on LP “Saves The Day” (2013)</li>
      </ul>

      <p>
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
      </p>

      <ul>
        <li>Touring drummer (2009)</li>
      </ul>

      <p>
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
      </p>

      <ul>
        <li>Drummer (2002 – 2008)</li>
        <li>Performed drums on LP “Pandora” (2005)</li>
        <li>Performed drums on EP “Somerset” (2004)</li>
        <li>Performed drums on EP “This Thought Process” (2003)</li>
      </ul>

      <p>
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
      </p>

      <ul>
        <li>Co-produced drums on LP “Come Around” (2008)</li>
        <li>
          Performed drums on song “Come Around” from LP “Come Around” (2008)
        </li>
      </ul>
    </Typography>
  </Layout>
);

export default MusicPage;
