module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
    description: "Portfolia site",
    copyright: "This website is copyright 2021 Erkhembayar Enkhtaivan",
    contact: "erkhemee0908@gmail.com"
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
