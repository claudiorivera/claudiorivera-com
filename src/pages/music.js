import { Container, Link, Typography } from "@material-ui/core";
import { graphql } from "gatsby";
import React from "react";
import AppleMusicEmbed from "../components/AppleMusicEmbed";
import Layout from "../components/Layout";
import YouTubeEmbed from "../components/YouTubeEmbed";

const MusicPage = ({ data }) => (
  <Layout coverImage={data.file.childImageSharp.fluid} coverTitle="Music">
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
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Container key={node.id}>
          <Typography variant="body1">
            <strong>
              <Link href={node.frontmatter.link}>{node.frontmatter.title}</Link>
              &nbsp;
            </strong>
            ({node.frontmatter.label}) - ({node.frontmatter.years})
          </Typography>

          <Typography
            variant="body1"
            component="div"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
        </Container>
      ))}
    </Container>
  </Layout>
);

export const query = graphql`
  {
    file(relativePath: { eq: "joe-lemke-cr-behind-kit.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "music-experience" } } }
      sort: { order: ASC, fields: fileAbsolutePath }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            label
            years
            link
          }
          html
        }
      }
    }
  }
`;

export default MusicPage;
