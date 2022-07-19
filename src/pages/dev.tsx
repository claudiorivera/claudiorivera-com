import { Box, Container, Typography } from "@mui/material";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { PortfolioItemType } from "types";

import { Layout, PortfolioItem } from "@/components";
import { getAllPortfolioItems } from "@/lib";

export const getStaticProps: GetStaticProps = async () => {
  const portfolioItems = await getAllPortfolioItems({
    fields: [
      "slug",
      "title",
      "description",
      "demoLink",
      "githubLink",
      "screenshot",
      "order",
      "content",
    ],
  });

  return {
    props: {
      portfolioItems,
    },
  };
};

type Props = {
  portfolioItems: PortfolioItemType[];
};
const DevPage = ({ portfolioItems }: Props) => (
  <Layout
    coverImage="/images/ferenc-almasi-L8KQIPCODV8-unsplash.jpg"
    title="Dev"
  >
    {portfolioItems.map((portfolioItem) => (
      <Fragment key={portfolioItem.slug}>
        <PortfolioItem portfolioItem={portfolioItem} />
        <hr />
      </Fragment>
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
