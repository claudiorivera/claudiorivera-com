import { Typography } from "@mui/material";
import { GetStaticProps } from "next";
import React from "react";
import { PostType } from "types/post";

import Layout from "@/components/Layout";
import { getAllPosts, getPostBySlug } from "@/lib/postsApi";

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

export async function getStaticPaths() {
  const posts = await getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
