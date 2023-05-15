module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'react', '@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    indent: ['off', 2, { SwitchCase: 1 }], // 들여쓰기 몇 칸? 기본 2칸으로 하되, switch문에서는 1칸으로 지정
    quotes: ['off', 'single'], // 쌍따옴표가 아닌 홑따옴표를 사용
    semi: ['error', 'always'], // semi colon을 강제함
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'comma-dangle': ['error', 'always-multiline'], // 두 줄 이상의 경우에는 후행 쉼표를 항상 사용, 한 개 일 때는 사용하지 않음
    'object-curly-spacing': ['error', 'always'], // 객체 괄호 앞 뒤 공백 추가
    'space-in-parens': ['error', 'never'], // 일반 괄호 앞 뒤 공백 추가
    'computed-property-spacing': ['error', 'never'], // 대괄호 앞 뒤 공백 추가하지 않음
    'comma-spacing': ['error', { before: false, after: true }], // 반점 앞 뒤 공백: 앞에는 없고, 뒤에는 있게
    'eol-last': ['error', 'always'], // line의 가장 마지막 줄에는 개행 넣기
    'no-tabs': ['error', { allowIndentationTabs: true }], // \t의 사용을 금지하고 tab키의 사용은 허용
    'react-hooks/rules-of-hooks': 'error', // 리액트 훅의 순서를 지키게끔 한다. (React는 Hook이 호출되는 순서에 의존하기 때문에)
    'react-hooks/exhaustive-deps': 'off', // Checks effect dependencies
    'react/react-in-jsx-scope': 'off', // import React from "react"가 필수였던 시기에 필요한 규칙
    'import/no-unresolved': 'off',
    'arrow-body-style': ['error', 'as-needed'], // 한 줄일 때는 {} 없이, 두 줄 이상이면 {} 포함
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // function 및 arrow function 사용
    'no-else-return': 'error', // if(cond) return a; else return b; 대신에 if(cond) return a; return b; 사용
    'object-shorthand': ['error', 'always'], // const obj = {a, b} 가능
    'arrow-parens': ['error', 'always'], // arrow-function 인자가 2개 이상이면 괄호 필수
    'no-multi-spaces': 'error', // 스페이스 여러개 금지
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};