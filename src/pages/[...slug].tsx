import { Typography, useMediaQuery, useTheme } from "@mui/material";
import dayjs from "dayjs";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { PostType } from "types";

import Layout from "@/components/Layout";
import { getAllPosts, getPostBySlug } from "@/lib/postsApi";

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await getAllPosts({
    fields: ["slug", "date"],
  });

  return {
    paths: posts.map((post) => ({
      params: {
        slug: [
          post.date.split("-")[0],
          post.date.split("-")[1],
          post.date.split("-")[2],
          post.slug,
        ],
      },
    })),
    fallback: true, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string, [
    "slug",
    "title",
    "category",
    "date",
    "featuredImage",
    "content",
  ]);

  return {
    props: {
      post,
    },
  };
};

type Props = {
  post: PostType;
};
const BlogPost = ({ post }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!post) return null;

  return (
    <Layout coverImage={post.featuredImage} coverTitle={post.title}>
      {isMobile && <Typography variant="h2">{post.title}</Typography>}
      <Typography variant="overline">{post.category}</Typography>
      <Typography variant="h3">
        {dayjs(post.date).format("MMMM d, YYYY")}
      </Typography>
      <Typography
        variant="body1"
        component="div"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
  );
};

export default BlogPost;
