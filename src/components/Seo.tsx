import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

type SeoProps = {
  title: string;
  description: string;
  lang: string;
};
const Seo = ({ description, lang, title }: SeoProps) => {
  const { site } = useStaticQuery<{
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
  }>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

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

Seo.defaultProps = {
  description: "The official home of Claudio Rivera",
  lang: "en",
  title: "Claudio Rivera",
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Seo;
