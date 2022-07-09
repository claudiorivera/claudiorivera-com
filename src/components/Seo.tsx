import { Helmet } from "react-helmet";

type SeoProps = {
  title: string;
  description?: string;
  lang?: string;
};
const Seo = ({ description, lang, title }: SeoProps) => {
  const site = {
    // TODO: use real data
    siteMetadata: {
      description: "",
      title: "",
    },
  };
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
      ]}
    />
  );
};

export default Seo;
