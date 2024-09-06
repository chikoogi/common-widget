module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "eslint-config-prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "prettier", "react-refresh"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off", // React 17+ JSX Transform 대응
    "react/jsx-uses-react": "off",
    "@typescript-eslint/no-namespace": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "@typescript-eslint/no-explicit-any": "off",
  },
};
