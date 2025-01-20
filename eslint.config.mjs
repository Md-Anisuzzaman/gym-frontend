import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Turn off unescaped entities warnings
      "@typescript-eslint/no-unused-vars": [
        "warn", 
        { vars: "all", args: "none", ignoreRestSiblings: true }
      ],
      "@typescript-eslint/no-explicit-any": "warn", // Change 'error' to 'warn'
    },
  },
];

export default eslintConfig;

