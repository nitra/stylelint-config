module.exports = {
  extends: [
    "stylelint-config-standard-scss", // configure for SCSS
    "stylelint-config-recommended-vue", // add overrides for .Vue files
    "stylelint-config-prettier", // turn off any rules that conflict with Prettier
  ],
  plugins: [],
  rules: {},
};
