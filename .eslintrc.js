module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended"
  ],
  parser: "babel-eslint",
  plugins: ["import", "prettier", "jsx-a11y", "react", "react-hooks"],
  rules: {
    "jsx-a11y/anchor-is-valid": ["OFF"],
    "jsx-a11y/click-events-have-key-events": ["OFF"],
    "jsx-a11y/no-noninteractive-element-interactions": ["OFF"],
    "linebreak-style": ["error", "unix"],
    "prettier/prettier": "error",
    quotes: ["error", "backtick"],
    "react/jsx-sort-props": ["error"],
    "react/jsx-sort-props": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
