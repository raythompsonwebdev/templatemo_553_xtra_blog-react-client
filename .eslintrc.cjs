module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },      
    ],
    "strict" : ["error","global"],
    "prefer-destructuring":["error",{
      "VariableDeclarator": {
        "array": false,
        "object": false
      },
      "AssignmentExpression": {
        "array": false,
        "object": false
      }
    },{"enforceForRenamedProperties":true}],
    "new-cap": "error",
    "no-invalid-this": "error",
    "prefer-const":"error",
    "no-new-func":"error",
    "no-unused-vars": "warn",
    "no-console": "warn",
    "func-names": "warn",
    "no-process-exit": "warn",
    "object-shorthand": "warn",
    "class-methods-use-this": "error",
    "no-param-reassign": "error",
    "no-var": "error",
    "prefer-arrow-callback": "warn",
    "prefer-rest-params": "warn",
    "arrow-parens": ["error", "always"],
    "arrow-body-style": ["error", "as-needed"],
    "no-eval":"error",
    "no-implied-eval":"error",
    "eqeqeq":"error",
    "no-with":"error",
    "no-plusplus":"error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
}
