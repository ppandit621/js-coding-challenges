// Q4. Merge Config
// Given:
// defaultConfig = { dark: false, lang: "en" }
// userConfig = { dark: true }
// Merge using spread, where user overrides default.

const defaultConfig = { dark: false, lang: "en" };
const userConfig = { dark: true };

const finalConfig = { 
  ...defaultConfig, 
  ...userConfig 
};

console.log(finalConfig);