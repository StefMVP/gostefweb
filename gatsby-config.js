module.exports = {
    siteMetadata: {
        siteUrl: "https://www.gostef.com",
        title: "Stefan Ralston",
        description: "",
        author: "Stefan Ralston",
        siteLanguage: "en",
        image: "banner.jpg",
        titleTemplate: "gostef",
        twitterUsername: "",
        getform_url:
            "https://getform.io/f/11fa628d-de9b-48a2-bc76-f92a854cc1e2",
        socials: [
            {
                id: 1,
                title: "linkedin",
                path: "https://www.linkedin.com/in/stefanralston",
                icon: "Linkedin",
            },
            {
                id: 2,
                title: "github",
                path: "https://github.com/StefMVP",
                icon: "GitHub",
            },
        ],
        contact: {
            phone: "",
            email: "sralston@protonmail.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Inbio",
                short_name: "inbio",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
