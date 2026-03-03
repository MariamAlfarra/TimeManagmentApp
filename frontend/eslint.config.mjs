import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Ignore build outputs
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  // Prettier integration:
  // 1) disable ESLint rules that conflict with Prettier
  prettier,

  // 2) run Prettier as an ESLint rule (so ESLint can fix formatting)
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      "prettier/prettier": "warn",
    },
  },
]);

export default eslintConfig;
