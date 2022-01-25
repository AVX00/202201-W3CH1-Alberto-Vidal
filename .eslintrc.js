module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],

    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-debugger": "off",
    "no-console": "off",
    "max-classes-per-file": "off",
    "import/extensions": "off",
  },
};
