module.exports = {
  plugins: [
    require(`postcss-import`),
    require(`tailwindcss`),
    ...(process.env.NODE_ENV === `production`
      ? [
          require(`@fullhuman/postcss-purgecss`)({
            content: [`./src/**/*.js`],
            defaultExtractor: content =>
              content.match(/[A-Za-z0-9-_:/]+/g) || []
          }),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      : [])
  ]
};
