import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "@repo/eslint-config/react-internal.js",
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "warn", // 'any' 타입 사용 억제
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // 사용되지 않는 변수 규칙
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/prop-types": "off", // TypeScript 사용 시 prop-types를 끄는 설정
      "react/react-in-jsx-scope": "off", // React 17+에서는 import가 필요 없음

      // TanStack Query 규칙 적용
      "@tanstack/query/exhaustive-deps": "warn", // exhaustive-deps 체크
      "@tanstack/query/no-explicit-generics": "warn", // 명시적 제네릭 사용 금지
      "@tanstack/query/prefer-query-object-syntax": "warn", // Query 객체 구문을 선호
    },
  }
);
