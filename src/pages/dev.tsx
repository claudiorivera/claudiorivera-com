import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import Layout from "../components/Layout";
import PortfolioItem from "../components/PortfolioItem";
import Seo from "../components/Seo";
import coverImage from "../images/ferenc-almasi-L8KQIPCODV8-unsplash.jpg";
import portfolioScreenshot from "../content/dev-portfolio/game-night/images/game-night.png";

const portfolioItems = [
  {
    id: 1,
    frontmatter: {
      title: "Google",
      description: "Portfolio item",
      demo_link: "https://google.com",
      github_link: "https://google.com",
      screenshot: portfolioScreenshot,
    },
    html: `<div>hello</div>`,
  },
];

const DevPage = () => (
  <Layout coverImage={coverImage} coverTitle="Dev">
    <Seo title="Dev" />
    {portfolioItems.map((portfolioItem) => (
      <div key={portfolioItem.id}>
        <PortfolioItem portfolioItem={portfolioItem} />
        <hr />
      </div>
    ))}
    <Container maxWidth="sm">
      <Box m={2}>
        <Typography variant="h1">
          For more, please visit{" "}
          <Link href="https://github.com/claudiorivera">my GitHub profile</Link>
          .
        </Typography>
      </Box>
    </Container>
  </Layout>
);

export default DevPage;
