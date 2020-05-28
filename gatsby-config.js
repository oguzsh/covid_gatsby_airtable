module.exports = {
  siteMetadata: {
    title: `Covid-19`,
    description: `It is a website created to give information about Covid-19.`,
    author: `@oguzsh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-covid19-project`,
        short_name: `covidGatsby`,
        start_url: `/`,
        background_color: `#4756DF`,
        theme_color: `#4756DF`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
}
