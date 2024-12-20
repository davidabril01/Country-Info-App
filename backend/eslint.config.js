const pkg = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');  // Usamos require para cargar el parser

/** @type {import('eslint').FlatConfig[]} */
module.exports = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser, // Usamos el objeto parser directamente
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(), // Usamos process.cwd() para obtener la raíz del proyecto
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': pkg, // Usamos el paquete por defecto
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
