import { Typography } from "@mui/material";

import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const NotFoundPage = () => (
  <Layout
    coverImage="/images/billow926-rTufXtvIFXc-unsplash.jpg"
    coverTitle="Uh Oh!"
  >
    <Seo title="404: Not found" />
    <Typography variant="h2">
      There&apos;s nothing here. Sorry about that.
    </Typography>
  </Layout>
);

export default NotFoundPage;
