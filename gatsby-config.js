module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    { resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/blog`,
      },
    },
    `gatsby-transformer-remark`
  ]
};
