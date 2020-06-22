/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Liam Cavens`,
    titleTemplate: `%s · Developer`,
    author: {
      name: `Liam Cavens`,
      summary: `Software Developer`,
    },
    description: `An opinionated starter for Gatsby`,
    url: `https://liamcavens.netlify.app/`,
    logo: `/logo.png`,
    twitter: `liamcavens`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Articles`,
        link: `/articles`,
      },
      {
        name: `About`,
        link: `/about`,
      },
      {
        name: `Projects`,
        link: `/projects`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-css-customs`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects/`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Event`, // a fixed string
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
              quality: 100,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Project`,
        short_name: `The Project`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `static/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
