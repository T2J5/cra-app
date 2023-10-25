export default {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    'airbnb',
    'airbnb/hooks',
    'plugin:eslint-comments/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    // 专门支持了 eslint-plugin-react
    'prettier/react',
    // 专门支持了 @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
  }
};
