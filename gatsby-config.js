require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// npx tailwindcss -i ./src/components/input.css -o ./dist/output.css --watch


module.exports = {
  siteMetadata: {
    title: `Charlie Cook's Favourite Book`,
    description: `Book your ticket for the Charlie Cook's Favourite Book show at a theatre near you! `,
    author: `Peter Broadhead`,
    siteUrl: `https://charliecooksfavouritebook.com/`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `Charlie Cook`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lat.png`, 
      },
    },
  ],
}
