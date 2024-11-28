import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

/**
 * eslint adjustment
 * @type {ConfigWithExtends}
 */
const myConf = {
  overrides: [{
    "files": [
      "*.ts"
    ],
    "parserOptions": {
      "project": [
        "tsconfig.json"
      ],
      "createDefaultProgram": true
    },
    "settings": {
      "import/parsers": {
        "@typescript-eslint/parser": [
          ".ts"
        ]
      },
      "import/resolver": {
        "typescript": {
          "project": "tsconfig.json"
        }
      }
    },
    "extends": [
      "eslint:recommended",
      "plugin:prettier/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@angular-eslint/recommended",
      "plugin:@angular-eslint/template/process-inline-templates",
      "plugin:import/recommended",
      "plugin:import/typescript"
    ],
    "plugins": [
      "@typescript-eslint",
      "unused-imports",
      "import"
    ],
    "rules": {
      // @angular metadata rules
      "@angular-eslint/component-selector": [
        "error",
        {
          "type": "element",
          "prefix": [
            "app",
            "itera",
            "tk"
          ],
          "style": "kebab-case"
        }
      ],
      "@angular-eslint/directive-selector": [
        "error",
        {
          "type": "attribute",
          "prefix": ["app", "itera", "tk"],
          "style": "camelCase"
        }
      ],
      "@angular-eslint/no-host-metadata-property": [
        "error",
        {
          "allowStatic": true
        }
      ],

      // empty functions/methods checks
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": [
        "error",
        { "allow": ["methods"] }
      ],

      // explicit/implicit any checks
      "@typescript-eslint/no-explicit-any": ["warn"],
      "@typescript-eslint/no-unsafe-argument": ["warn"],
      "@typescript-eslint/no-unsafe-assignment": ["warn"],
      "@typescript-eslint/no-unsafe-call": ["warn"],
      "@typescript-eslint/no-unsafe-member-access": ["warn"],
      "@typescript-eslint/no-unsafe-return": ["warn"],
      "@typescript-eslint/explicit-function-return-type": ["warn"],

      // unused imports/vars/expressions
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          "allowShortCircuit": true,
          "allowTernary": true
        }
      ],
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          "vars": "all",
          "varsIgnorePattern": "^_",
          "args": "after-used",
          "argsIgnorePattern": "^_"
        }
      ],

      // stylistic rules
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        { "accessibility": "no-public" }
      ],
      "arrow-parens": [
        "error",
        "always"
      ],
      "no-underscore-dangle": [
        "error",
        {
          "allowAfterThis": true
        }
      ],
      "id-blacklist": ["error"],
      "@typescript-eslint/no-namespace": ["off"],

      // imports sorting
      "import/no-unresolved": ["error"],
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "unknown"
          ],
          "newlines-between": "always",
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ],

      // debugging leftovers
      "no-console": ["error", { "allow": ["warn", "error"] }],
      "no-debugger": "error"
    }
  }]
}

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.stylistic,
  // myConf,
);
