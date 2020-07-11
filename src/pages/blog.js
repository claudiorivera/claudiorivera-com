import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Typography } from "@material-ui/core";

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Typography variant="h1">Blog</Typography>
  </Layout>
);

export default BlogPage;
