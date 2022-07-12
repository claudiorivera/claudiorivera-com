import Layout from "../components/Layout";
import Seo from "../components/Seo";
import coverImage from "../images/billow926-rTufXtvIFXc-unsplash.jpg";

const NotFoundPage = () => (
  <Layout coverImage={coverImage} coverTitle="Uh Oh!">
    <Seo title="404: Not found" />
    <h1>There&apos;s nothing here. Sorry about that.</h1>
  </Layout>
);

export default NotFoundPage;
