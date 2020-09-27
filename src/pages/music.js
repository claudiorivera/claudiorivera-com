import { Container, Link, Typography } from "@material-ui/core";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import AppleMusicEmbed from "../components/AppleMusicEmbed";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import YouTubeEmbed from "../components/YouTubeEmbed";

const MusicPage = ({ data }) => (
  <Layout coverImage={data.file.childImageSharp.fluid} coverTitle="Music">
    <SEO title="Music" />
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

MusicPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              label: PropTypes.string.isRequired,
              years: PropTypes.string.isRequired,
              link: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default MusicPage;
