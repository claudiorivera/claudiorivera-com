import Link from "@/components/Link";
import { Box, Container, Typography } from "@mui/material";
import { Fragment } from "react";
import BlogPagination from "../components/BlogPagination";
import Image from "next/future/image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import featuredImage from "../content/posts/2021/04/06/pair-programming/images/amir-abbas-abdolali-_Tm4622z4Dg-unsplash.jpg";
import coverImage from "../images/patrick-fore-0gkw_9fy0eQ-unsplash.jpg";

const posts = [
  {
    id: 1,
    frontmatter: {
      category: "tech",
      title: "How to use TypeScript",
      date: "2020-01-01",
      featuredImage,
    },
    fields: {
      slug: "/tech/1",
    },
    html: `<p>The strangest thing happens when a colleague hops on a video call and I share my screen. Instead of feeling miserable and stupid, a flip switches in my head and I'm able to crank out more code in just a half hour than I have all day. Besides the obvious way that pair programming is able to get a developer unstuck--referred to as <a href="https://en.wikipedia.org/wiki/Rubber_duck_debugging">"rubber ducking"</a>--I have found that there's even more at play for me.</p>`,
  },
];
const pageContext = {
  prevPage: 0,
  limit: 10,
  nextPage: 2,
  numPages: 2,
};

const BlogPosts = () => {
  return (
    <Layout coverImage={coverImage} coverTitle="Blog">
      <Seo title="Blog" />
      {posts.map((post) => (
        <Fragment key={post.id}>
          <Container>
            <div style={{ textAlign: "center" }}>
              <Typography variant="overline">
                {post.frontmatter.category}
              </Typography>
              <Link href={post.fields.slug}>
                <h1>{post.frontmatter.title}</h1>
              </Link>
              <h2>{post.frontmatter.date}</h2>
            </div>
            <Box sx={{ width: "100%", height: "auto", position: "relative" }}>
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={post.frontmatter.featuredImage}
              />
            </Box>
            <Typography
              variant="body1"
              component="div"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Container>
          <hr />
        </Fragment>
      ))}
      <BlogPagination pageContext={pageContext} />
    </Layout>
  );
};

export default BlogPosts;
