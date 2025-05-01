// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Volvo Construction Equipment`,
    description: `Volvo Construction Equipment offers a wide range of products and services in more than 140 countries through proprietary or authorized dealers.`,
    author: `@volvoce`,
    siteUrl: `https://www.volvce.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `volvo-construction-equipment`,
        short_name: `volvo-ce`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#003057`,
        display: `minimal-ui`,
        icon: `src/images/volvo-icon.png`, // Add a Volvo icon to the src/images folder
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`), require(`autoprefixer`)],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
