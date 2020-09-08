module.exports = {
    siteMetadata: {
        title: `lr - app`,
        siteUrl: 'https://lr-project.vercel.app/'
    },

    plugins: [`gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-strapi`,
            options: {
                apiURL: `https://lrstrapi.burrow.io`,
                queryLimit: 1000, // Default to 100
                contentTypes: [`material`, `leader-page`],
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-scroll-reveal`,
        'gatsby-plugin-robots-txt',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-mdx`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/krzak.png`, // This path is relative to the root of the site.
            },
        },
// this (optional) plugin enables Progressive Web App + Offline functionality
// To learn more, visit: https://gatsby.dev/offline
// `gatsby-plugin-offline`,
    ],
}
