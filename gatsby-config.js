module.exports = {
    siteMetadata: {
        title: `JAMstack e-commerce`,
        author: `@Pivil`,
    },
    plugins: ["gatsby-plugin-react-helmet"],

    plugins: [
        {
            resolve: `gatsby-source-mysql`,
            options: {
                connectionDetails: {
                    host: 'eu-cdbr-west-02.cleardb.net',
                    user: 'bb6d0a4f7e03ff',
                    password: 'f3f91044',
                    database: 'heroku_14154f6484cc5ce',
                },
                queries: [
                    {
                        statement: 'SELECT * from articles',
                        idFieldName: 'id',
                        name: 'shoppingList',
                        remoteImageFieldNames: ['profile_url']
                    }
                ]
            }
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
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
                icon: `src/images/gatsby-icon.png`
            },
        },
        `gatsby-plugin-offline`
    ],
};
