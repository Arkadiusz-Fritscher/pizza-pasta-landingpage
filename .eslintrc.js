module.exports = {
  root: true,

  env: {
    node: true,
  },

  // plugins: ["graphql"],
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],

  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
  },
};
