module.exports = {
  siteMetadata: {
    title: `IORoot`,
    description: `IORoot pages`,
    author: `github.com/ioroot`,
    siteUrl: `https://cute-maamoul-f8d341.netlify.app/`,
  },



  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `repo-one`,
        remote: `https://github.com/IORoot/gatsby-git-content.git`,
        branch: `master`,
        patterns: ["**/*"],
      }
    },
  ],
}
