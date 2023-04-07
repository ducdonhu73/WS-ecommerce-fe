const defaultTheme = require("tailwindcss/defaultTheme");
const formsPlugin = require("@tailwindcss/forms");
/** @type {import('tailwindcss/types').Config} */
const config = {
  content: ["index.html", "src/**/*.tsx"],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1536px",
    },
    extend: {
      fontFamily: {
        primary: "var(--font-family-primary)",
        secondary: "var(--font-family-secondary)",
      },
      maxWidth: {
        primary: "var(--max-width-primary)",
      },
      fontSize: {
        lg: ["1.125rem", "1.5rem"],
        "2xl": ["1.5rem", "1.875rem"],
        "3xl": ["2rem", "2.5rem"],
        "4xl": ["2.5rem", "3rem"],
        "5xl": ["3rem", "3.5rem"],
        "6xl": ["3.5rem", "3.875rem"],
        "7xl": ["3.75rem", "4.25rem"],
      },
    },
    colors: {
      primary: {
        DEFAULT: "var(--color-primary)",
        01: "var(--color-primary-01)",
        02: "var(--color-primary-02)",
        03: "var(--color-primary-03)",
        04: "var(--color-primary-04)",
        05: "var(--color-primary-05)",
      },
      secondary: {
        DEFAULT: "var(--color-secondary-05)",
        01: "var(--color-secondary-01)",
        02: "var(--color-secondary-02)",
        03: "var(--color-secondary-03)",
        04: "var(--color-secondary-04)",
        05: "var(--color-secondary-05)",
      },
      text: {
        DEFAULT: "var(--color-text-05)",
        01: "var(--color-text-01)",
        02: "var(--color-text-02)",
        03: "var(--color-text-03)",
        04: "var(--color-text-04)",
        05: "var(--color-text-05)",
        06: "var(--color-text-06)",
        07: "var(--color-text-07)",
        08: "var(--color-text-08)",
        09: "var(--color-text-09)",
        10: "var(--color-text-10)",
      },
      background: {
        DEFAULT: "var(--color-background)",
        01: "var(--color-background-01)",
      },
      white: "var(--color-white)",
      transparent: "transparent",
    },
  },
  experimental: { optimizeUniversalDefaults: true },
  plugins: [formsPlugin],
};
module.exports = config;
