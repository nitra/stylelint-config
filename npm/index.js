/**
 * Shareable Stylelint configuration (SCSS and Vue SFC styles) for Nitra projects.
 * @type {import('stylelint').Config}
 */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        'no-invalid-position-declaration': null
      }
    }
  ]
}
