import React from "react";
import YouTubeEmbed from "../components/YouTubeEmbed";
import AppleMusicEmbed from "../components/AppleMusicEmbed";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Typography } from "@material-ui/core";
import { graphql } from "gatsby";

const MusicPage = ({ data }) => (
  <Layout>
    <SEO title="Music" />
    <Typography variant="h4">See</Typography>
    <YouTubeEmbed
      url="https://www.youtube.com/embed/videoseries?list=PLB953FCBE7D8E1AC1"
      title="YouTube playlist of random drum and music-related videos of mine."
    />
    <Typography variant="h4">Hear</Typography>
    <AppleMusicEmbed
      url="https://embed.music.apple.com/us/playlist/songs-ive-played-on/pl.u-MZrqIo3RAW?app=music"
      title="Songs I've Played On"
    />
    <Typography variant="h4">Selected Discography & Experience</Typography>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Typography variant="body1">
          <strong>
            <a
              href={node.frontmatter.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              {node.frontmatter.title}
            </a>
            &nbsp;
          </strong>
          ({node.frontmatter.label}) - ({node.frontmatter.years})
        </Typography>

        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: node.html }}
        />
      </div>
    ))}
  </Layout>
);

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "music-experience" } } }
      sort: { order: ASC, fields: fileAbsolutePath }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            label
            years
            link
          }
        }
      }
    }
  }
`;

export default MusicPage;
