/*
 * Copyright (c) 2024.
 */

const eslintPluginAstro = require('eslint-plugin-astro');
const eslintPluginSvelte = require('eslint-plugin-svelte');

module.exports = [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'], // In CommonJS, the `flat/` prefix is required.
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    }
  },
  ...eslintPluginSvelte.configs['flat/recommended'],
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    }
  }
];