module.exports = {
  siteMetadata: {
    title: `Habit & Routine`,
    description: `The official site of musician, drum tech, and developer, Claudio Rivera.`,
    author: `Claudio Rivera`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Claudio Rivera`,
        short_name: `Claudio Rivera`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/cr-profile-pic.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
