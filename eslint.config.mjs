import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import astroEslint from 'eslint-plugin-astro';
import globals from 'globals';

export default [
  { ignores: ['dist/', '.astro/'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astroEslint.configs.recommended,
  // Node.js globals for build scripts
  {
    files: ['scripts/**/*.mjs'],
    languageOptions: { globals: globals.node },
  },
  // Downgrade no-explicit-any to warn: WebGL/canvas APIs require runtime `any` casts
  {
    rules: { '@typescript-eslint/no-explicit-any': 'warn' },
  },
];
