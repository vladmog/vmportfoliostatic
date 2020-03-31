module.exports = {
  siteMetadata: {
    title: `Vladislav Mogilevskiy`,
    description: `Los Angeles based full stack web developer.`,
    author: `Vladislav Mogilevskiy`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/mdx-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx-pages`,
        path: `${__dirname}/src/mdx-pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        defaultLayouts: {
          // posts: require.resolve("./src/components/posts-layout.js"),
          mdx: require.resolve("./src/templates/mdxTemplate.js"),
        }
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
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
        name: `Vladislav Mogilevskiy`,
        short_name: `Vlad`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/v.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
