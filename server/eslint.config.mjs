/* eslint-disable quotes */
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: [
      "**/*.{js,mjs,cjs,ts}"
    ],
    ignores: [
      "eslint.config.mjs",
      "dist/**"
    ]
  },
  {
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    plugins: {
      prettier: prettier
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
      "eqeqeq": ["error", "always"],
      "arrow-body-style": ["error", "as-needed"],
      "@typescript-eslint/no-explicit-any": "error",
      "prettier/prettier": "error",
      "@typescript-eslint/explicit-function-return-type": ["error", { "allowExpressions": true }],
      "@typescript-eslint/explicit-module-boundary-types": "error",
    }
  }
];