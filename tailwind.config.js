const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
  theme: {
    extend: {
      colors: {
        yeller: `yellow`
      },
      fontFamily: {
        sans: [`Inter`, ...defaultTheme.fontFamily.sans]
      }
    },
    variants: {},
    plugins: []
  }
};
