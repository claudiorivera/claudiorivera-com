import { Box, Container, Typography } from "@mui/material";
import { GetServerSideProps } from "next";
import Image from "next/future/image";
import { Fragment } from "react";
import { PostType } from "types/post";

import BlogPagination from "@/components/BlogPagination";
import Link from "@/components/Link";
import { getAllPosts } from "@/lib/postsApi";

import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page } = query;
  const { posts, pageContext } = await getAllPosts({
    fields: ["slug", "title", "date", "featuredImage", "content"],
    ...(!!page && { skip: +page }),
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
  pageContext: {
    currentPage: number;
    limit: number;
    nextPage: number;
    numPages: number;
    prevPage: number;
  };
};
const BlogPosts = ({ posts, pageContext }: Props) => {
  return (
    <Layout
      coverImage="/images/patrick-fore-0gkw_9fy0eQ-unsplash.jpg"
      coverTitle="Blog"
    >
      <Seo title="Blog" />
      {!!posts?.length &&
        posts.map((post) => {
          const postYear = post.date.split("-")[0];
          const postMonth = post.date.split("-")[1];
          const postDay = post.date.split("-")[2];

          return (
            <Fragment key={post.slug}>
              <Container>
                <div style={{ textAlign: "center" }}>
                  <Typography variant="overline">{post.category}</Typography>
                  <Link
                    href={`/${postYear}/${postMonth}/${postDay}/${post.slug}`}
                  >
                    <h1>{post.title}</h1>
                  </Link>
                  <h2>{post.date}</h2>
                </div>
                <Box
                  sx={{ width: "100%", height: "auto", position: "relative" }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    src={post.featuredImage}
                    width={600}
                    height={400}
                    alt=""
                  />
                </Box>
                <Typography
                  variant="body1"
                  component="div"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </Container>
              <hr />
            </Fragment>
          );
        })}
      <BlogPagination pageContext={pageContext} />
    </Layout>
  );
};

export default BlogPosts;
