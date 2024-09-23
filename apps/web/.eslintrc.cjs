/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/mixins/react.js"],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
