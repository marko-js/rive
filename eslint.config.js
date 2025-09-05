import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import testingLibrary from "eslint-plugin-testing-library";
import globals from "globals";

export default [
  // Global ignores
  {
    ignores: [
      "__snapshots__",
      "coverage",
      "dist",
      "node_modules",
      "storybook-static",
    ],
  },
  // Base configuration for all files
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...js.configs.recommended,
    plugins: { import: importPlugin, "testing-library": testingLibrary },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2024,
        // Test globals
        it: "readonly",
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        vi: "readonly",
        // Marko globals
        Marko: "readonly",
      },
    },
    settings: {
      "import/resolver": {
        typescript: { alwaysTryTypes: true },
        node: { extensions: [".js", ".jsx", ".ts", ".tsx", ".marko", ".riv"] },
      },
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      "import/no-unresolved": [
        "error",
        { ignore: ["\\.marko\\?raw$", "vitest/config"] },
      ],
      "import/order": [
        "error",
        {
          groups: [
            ["builtin"],
            ["external"],
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          alphabetize: {
            order: "asc",
            orderImportKind: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  // TypeScript specific configuration
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2024,
        // Test globals
        it: "readonly",
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        vi: "readonly",
        // Marko globals
        Marko: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      import: importPlugin,
      "testing-library": testingLibrary,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "import/no-unresolved": [
        "error",
        {
          ignore: ["\\.marko\\?raw$", "vitest/config", "@marko/run/namespace"],
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            ["builtin"],
            ["external"],
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          alphabetize: {
            order: "asc",
            orderImportKind: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  // Prettier configuration (should be last)
  prettier,
];
