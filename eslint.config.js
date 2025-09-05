// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,   // start with ESLint recommended rules
  {
    files: ["src/**/*.js"], // apply to all JS files in src/
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
