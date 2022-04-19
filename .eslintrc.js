module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": ["error", {"allowEmptyCatch": true}],
    "no-ex-assign":"error",
    "no-extra-boolean-cast": "error",
    "curly": "error"
  },
};
