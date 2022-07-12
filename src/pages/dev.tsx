import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

import Layout from "../components/Layout";
import PortfolioItem from "../components/PortfolioItem";
import Seo from "../components/Seo";
import portfolioScreenshot from "../content/dev-portfolio/game-night/images/game-night.png";
import coverImage from "../images/ferenc-almasi-L8KQIPCODV8-unsplash.jpg";

const portfolioItems = [
  {
    id: 1,
    frontmatter: {
      title: "Scavenger Hunt",
      description:
        "A game that challenges you to find the most random items around your house. Great for virtual parties!",
      demoLink: "https://google.com",
      githubLink: "https://google.com",
      screenshot: portfolioScreenshot,
    },
    html: `<ul>
    <li><a href="https://reactjs.org">React</a></li>
    <li><a href="https://www.typescriptlang.org">TypeScript</a></li>
    <li><a href="https://nextjs.org">Next.js</a></li>
    <li><a href="https://github.com/hoangvvo/next-connect">next-connect</a></li>
    <li><a href="https://www.mongodb.com">MongoDB</a></li>
    <li><a href="https://next-auth.js.org">NextAuth.js</a></li>
    <li><a href="https://swr.vercel.app">SWR</a></li>
    <li><a href="https://material-ui.com">Material-UI</a></li>
    <li><a href="https://cloudinary.com/">Cloudinary</a></li>
    </ul>`,
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
