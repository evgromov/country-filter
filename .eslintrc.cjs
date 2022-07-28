module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'no-param-reassign': [2, { props: false }],
    'react/prop-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
