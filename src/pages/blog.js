import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Typography } from "@material-ui/core";

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Typography variant="body1">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quisquam
      dolorum, dignissimos molestiae excepturi voluptatum nobis distinctio ad
      magni reprehenderit impedit quam dolore. Distinctio ratione rerum nulla
      neque quas doloribus. Quasi doloribus rem sapiente mollitia veniam a et ea
      debitis.
    </Typography>
  </Layout>
);

export default BlogPage;
