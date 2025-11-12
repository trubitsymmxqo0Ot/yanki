import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import pluginReactHook from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";

const filesPath = ["src/**/*.{js,ts,jsx,tsx}"];

export default defineConfig([
  {
    files: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, react: pluginReact },
    extends: ["js/recommended"],
    settings: {
      react: {
        version: 'detect'
      }
    },
    ignores: ["**/*.stories.{tsx}", "**/*.test.{ts,tsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "array-callback-return": "error",
      "for-direction": "error",
      "no-await-in-loop": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-const-assign": "error",
      "no-constant-binary-expression": "warn",
      "no-constant-condition": "warn",
      "no-control-regex": "warn",
      "no-dupe-args": "off", //Проверяет ts, навсякий случай отключу
      "no-dupe-class-members": "warn",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "warn",
      "no-empty-pattern": "error",
      "no-ex-assign": "warn",
      "no-fallthrough": "warn",
      "no-func-assign": "error",
      "no-import-assign": "error",
      "no-invalid-regexp": "warn",
      "no-loss-of-precision": "warn",
      "no-promise-executor-return": "error",
      "no-self-compare": "warn",
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "react/react-in-jsx-scope": "off",
      "no-template-curly-in-string": "warn",
      "no-unassigned-vars": "warn",
      "no-unreachable": "error",
      "no-unreachable-loop": "warn",
      "no-unsafe-negation": "warn",
      "no-unsafe-optional-chaining": "warn",
      "no-use-before-define": "error",
      eqeqeq: "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "prefer-const": "warn",
      "no-var": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
      "react/display-name": "off",
      "react-refresh/only-export-components": "warn",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    files: filesPath,
    extends: [tseslint.configs.recommended],
  },
  {
    files: filesPath,
    extends: [pluginReactHook.configs.flat.recommended],
  },
  {
    files: filesPath,
    extends: [pluginReactRefresh.configs.recommended],
  },
]);
