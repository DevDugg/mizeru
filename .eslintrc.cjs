module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    es2023: true,
    browser: true,
    node: true,
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: { project: './tsconfig.eslint.json' },
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    },
    next: { rootDir: __dirname },
  },
  extends: [
    'next/core-web-vitals',
    'plugin:@ typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'unused-imports', 'tailwindcss'],
  rules: {
    /* --- General strictness --- */
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    eqeqeq: ['error', 'smart'],
    curly: ['error', 'all'],
    'prefer-const': 'error',
    'object-shorthand': ['error', 'always'],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'next/router',
            message: 'Use `next/navigation` in the App Router.',
          },
        ],
      },
    ],

    /* --- Imports hygiene --- */
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    /* --- TypeScript strict async & safety --- */
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } },
    ],
    '@typescript-eslint/only-throw-error': 'error',

    /* --- React & Hooks --- */
    'react/react-in-jsx-scope': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/self-closing-comp': 'error',
    'react/no-danger': 'error',
    'react/prop-types': 'off', // using TS
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      { additionalHooks: '(useMemoOne|useEvent|useDebouncedCallback)' },
    ],

    /* --- A11y --- */
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',

    /* --- Tailwind (optional but helpful) --- */
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
    'tailwindcss/no-custom-classname': 'off', // turn on if you want stricter naming
  },

  overrides: [
    /* Node scripts / config files */
    {
      files: ['*.config.{js,cjs,mjs}', 'scripts/**/*.{js,ts}'],
      env: { node: true },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
    },

    /* Next.js App Router: route handlers should NOT default-export */
    {
      files: ['app/**/route.{ts,tsx}'],
      rules: {
        'import/no-default-export': 'error',
      },
    },

    /* Next.js App Router: pages/layouts ARE default exports */
    {
      files: ['app/**/page.{ts,tsx}', 'app/**/layout.{ts,tsx}', 'pages/**/*.{ts,tsx}'],
      rules: {
        'import/no-default-export': 'off',
      },
    },

    /* Tests */
    {
      files: ['**/*.{test,spec}.{ts,tsx}'],
      env: { jest: true, node: true },
      rules: {
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/require-await': 'off',
        'no-console': 'off',
      },
    },
  ],
};
