import { Helmet } from "react-helmet";

type SeoProps = {
  title: string;
  description?: string;
  lang?: string;
};
const Seo = ({ description, lang, title }: SeoProps) => {
  const site = {
    siteMetadata: {
      description:
        "The official home of musician and developer, Claudio Rivera.",
      title: "Claudio Rivera",
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
