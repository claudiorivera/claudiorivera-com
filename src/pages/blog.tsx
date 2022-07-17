import { Box, Container, Typography } from "@mui/material";
import dayjs from "dayjs";
import { GetServerSideProps } from "next";
import Image from "next/future/image";
import { Fragment } from "react";
import { PageContext, PostType } from "types";

import BlogPagination from "@/components/BlogPagination";
import Layout from "@/components/Layout";
import Link from "@/components/Link";
import Seo from "@/components/Seo";
import { getAllPosts } from "@/lib/postsApi";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page } = query;
  const { posts, pageContext } = await getAllPosts({
    fields: ["slug", "title", "date", "category", "featuredImage", "content"],
    page: !!page ? parseInt(page as string) : 1,
  });

  return {
    props: {
      posts,
      pageContext,
    },
  };
};

type Props = {
  posts: PostType[];
  pageContext: PageContext;
};
const BlogPosts = ({ posts, pageContext }: Props) => (
  <Layout
    coverImage="/images/patrick-fore-0gkw_9fy0eQ-unsplash.jpg"
    coverTitle="Blog"
  >
    <Seo title="Blog" />
    {posts.map((post) => {
      const { slug, title, date, category, featuredImage, content } = post;
      const postYear = date.split("-")[0];
      const postMonth = date.split("-")[1];
      const postDay = date.split("-")[2];

      return (
        <Fragment key={slug}>
          <Container>
            <Box style={{ textAlign: "center" }}>
              <Typography variant="overline">{category}</Typography>
              <Link href={`/${postYear}/${postMonth}/${postDay}/${slug}`}>
                <Typography variant="h2">{title}</Typography>
              </Link>
              <Typography variant="subtitle2" my={1.5}>
                {dayjs(date).format("MMMM D, YYYY")}
              </Typography>
            </Box>
            <Box sx={{ width: "100%", height: "auto", position: "relative" }}>
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={featuredImage}
                width={600}
                height={400}
                alt=""
              />
            </Box>
            <Typography
              variant="body1"
              component="div"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </Container>
          <hr style={{ marginBlock: "4rem" }} />
        </Fragment>
      );
    })}
    <BlogPagination pageContext={pageContext} />
  </Layout>
);

export default BlogPosts;
