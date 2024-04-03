module.exports = {
  extends: [
    "stylelint-config-standard-scss", // configure for SCSS
    "stylelint-config-recommended-vue", // add overrides for .Vue files
  ],
  plugins: [],
  rules: {
    "declaration-block-trailing-semicolon": null,
  },
};
