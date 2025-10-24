import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node, // <- adiciona Node (inclui "process")
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      quotes: ['error', 'single'],
      indent: ['error', 'tab'],
      'comma-dangle': ['error', 'always-multiline'],
      semi: ['error', 'never'],
      '@typescript-eslint/no-explicit-any': 'error',
      'object-curly-spacing': ['error', 'always'],
      'quote-props': ['error', 'as-needed'],
      'jsx-quotes': ['error', 'prefer-single'],
      'arrow-parens': ['error', 'always'],
      'prefer-const': 'warn',
      'no-use-before-define': ['error', { functions: true, classes: true }],
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    },
  },
)
