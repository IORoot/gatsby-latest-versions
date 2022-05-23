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
    'gatsby-plugin-postcss',
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
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyOtFXVVALGtAgsJ`, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `app8NMPBTR6QCoYX2`,
            tableName: `versions`
          }
        ]
      }
    }
  ],
}
