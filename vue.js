/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
}
