/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard-scss", // configure for SCSS
    "stylelint-config-recommended-vue/scss", // add overrides for .Vue files
  ],
  // rules: {
  //   "declaration-block-trailing-semicolon": null,
  // },
};
