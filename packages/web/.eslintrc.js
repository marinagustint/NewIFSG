module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'prettier/prettier': 0,
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
  },
  parser: 'babel-eslint',
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx'],
      env: {
        jest: true,
      },
    },
  ],
  env: {
    browser: true,
  },
  globals: {
    document: false,
  },
};
