const eslintrc = {
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['prettier', 'import'],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:prettier/recommended',
    // Extends two more configuration from "import" plugin
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true, // don"t want to sort import lines, use eslint-plugin-import instead
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],

    // turn on errors for missing imports
    'import/no-unresolved': 'warn',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin', // Built-in imports (come from NodeJS native) go first
          'external', // <- External imports
          'internal', // <- Absolute imports
          ['sibling', 'parent'], // <- Relative imports, the sibling and parent types they can be mingled together
          'index', // <- index imports
          'unknown', // <- unknown
        ],
        'newlines-between': 'always',
        alphabetize: {
          /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
          order: 'asc',
          /* ignore case. Options: [true, false] */
          caseInsensitive: true,
        },
      },
    ],

    'no-unused-vars': 'warn',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};

module.exports = eslintrc;
