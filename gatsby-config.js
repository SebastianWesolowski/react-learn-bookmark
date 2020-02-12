// const path = require('path');
const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/images\/.*\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        jpegProgressive: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-styled-components',
      option: {
        displayName: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:100,300,400,500,700,900'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
    `gatsby-plugin-webpack-size`,
    {
      resolve: 'gatsby-plugin-eslint',
      option: {
        test: /\.js$/,
        exclude: /(node_modules|cache|plublic)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    {
      resolve: '@danbruegge/gatsby-plugin-stylelint',
      option: {
        files: ['**/*.js'],
      },
    },
  ],
};
