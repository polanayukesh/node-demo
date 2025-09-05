const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,  // ESLint's recommended rules
  {
    files: ["src/**/*.js"],  // only lint source files
    rules: {
      "no-unused-vars": "warn",  // don't fail build for unused vars
      "no-console": "off"        // allow console.log (common in Node apps)
    }
  }
];
