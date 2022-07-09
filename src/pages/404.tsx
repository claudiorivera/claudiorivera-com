import Layout from "../components/Layout";
import Seo from "../components/Seo";

type NotFoundPageProps = {
  data: {
    file: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
};
const NotFoundPage = ({ data }: NotFoundPageProps) => (
  <Layout coverImage={data.file.childImageSharp.fluid} coverTitle="Uh Oh!">
    <Seo title="404: Not found" />
    <h1>There's nothing here. Sorry about that.</h1>
  </Layout>
);

export default NotFoundPage;
