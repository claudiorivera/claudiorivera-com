import { Typography } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { PostType } from "types/post";

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
    fallback: false, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string, [
    "slug",
    "title",
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
  if (!post) return null;

  return (
    <Layout coverImage={post.featuredImage} coverTitle={post.title}>
      <h2>{post.date}</h2>
      <Typography variant="overline">{post.category}</Typography>
      <Typography
        variant="body1"
        component="div"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
  );
};

export default BlogPost;