import { Container, Typography } from "@mui/material";
import Link from "next/link";

import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const IndexPage = () => (
  <Layout coverImage="/images/joe-lemke-cr-cover-photo.jpg" coverTitle="Hello">
    <Seo title="Home" />
    <Container>
      <Typography variant="body1" paragraph>
        My name is Claudio. I&apos;ve been all over this beautiful Earth,
        playing drums and working for bands. I&apos;ve also been fortunate to
        have made some records with rad bands.
      </Typography>
      <Typography variant="body1" paragraph>
        I&apos;m endorsed by Promark, Evans, Sabian, and DW.
      </Typography>
      <Typography variant="body1" paragraph>
        I am also a software developer. Please visit my{" "}
        <Link href="/dev">development</Link> page for more info.
      </Typography>
    </Container>
  </Layout>
);

export default IndexPage;
