import { Container } from "@mui/material";

type YouTubeEmbedProps = {
  url: string;
  title: string;
};
const YouTubeEmbed = ({ url, title }: YouTubeEmbedProps) => (
  <Container
    sx={{
      position: "relative",
      paddingBottom: "56.25%",
      height: 0,
      marginBottom: "2rem",
    }}
  >
    <iframe
      src={url}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  </Container>
);

export default YouTubeEmbed;
