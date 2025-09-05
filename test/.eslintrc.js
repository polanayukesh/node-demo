import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    languageOptions: { globals: { ...globals.node, ...globals.es2021 } }
  },
  js.configs.recommended
];

