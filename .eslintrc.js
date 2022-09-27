module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:mocha/recommended',
  ],
  overrides: [
    {
      files: ['**/*.test.js'],
      rules: {
        'prefer-arrow-callback': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'mocha',
  ],
  rules: {
    'func-names': 'off',
    'global-require': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
};
