import { Box, Container, Typography } from "@mui/material";
import { GetStaticProps } from "next";
import Image from "next/future/image";
import { Fragment } from "react";
import { PostType } from "types/post";

import Link from "@/components/Link";
import { getAllPosts } from "@/lib/postsApi";

import BlogPagination from "../../components/BlogPagination";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import coverImage from "../../images/patrick-fore-0gkw_9fy0eQ-unsplash.jpg";

const pageContext = {
  prevPage: 0,
  limit: 10,
  nextPage: 2,
  numPages: 2,
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts([
    "slug",
    "title",
    "date",
    "featuredImage",
    "content",
  ]);

  return {
    props: {
      posts,
    },
  };
};

type Props = {
  posts: PostType[];
};
const BlogPosts = ({ posts }: Props) => {
  return (
    <Layout coverImage={coverImage} coverTitle="Blog">
      <Seo title="Blog" />
      {!!posts?.length &&
        posts.map((post) => {
          // const image = dynamic(
          //   () => import(`src/content/posts/${slug}/${post.featuredImage}`)
          // );
          return (
            <Fragment key={post.slug}>
              <Container>
                <div style={{ textAlign: "center" }}>
                  <Typography variant="overline">{post.category}</Typography>
                  <Link href={post.slug}>
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
                    src={`/assets/blog/${post.featuredImage}`}
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
