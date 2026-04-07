/**
 * Shareable Stylelint configuration (SCSS and Vue SFC styles) for Nitra projects.
 * @type {import('stylelint').Config}
 */
export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
  rules: {
    // Quasar генерує класи з BEM і подвійним підкресленням — не приводимо до kebab-case
    'selector-class-pattern': null,
    //  вимикає жорсткий патерн для SCSS-змінних ($...), якщо у вас або у фреймворку змінні не під стандартний kebab-case
    'scss/dollar-variable-pattern': null
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        'no-invalid-position-declaration': null
      }
    }
  ]
}
