module.exports = {
  siteMetadata: {
    title: `Defeating COVID-19`,
    description: `we can defeat covid, together.`,
    author: `@anusrisaraf`,
    meta: [
      "covid",
      "covid-19",
      "virus",
      "startup",
      "student-led",
      "corona",
      "coronavirus",
      "media",
      "share",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sri's website`,
        short_name: `sri's site`,
        start_url: `/`,
        background_color: `#a9ddf5`,
        theme_color: `#a9ddf5`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
