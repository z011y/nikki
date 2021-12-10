import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  theme,
  createTheme,
  config,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      primary: "#F76809",
      accent: "#FFF1E7",
      background: "#FEFCFB",
      text: "#451E11",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px",
      7: "256px",
      8: "512px",
      9: "1024px",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "18px",
      5: "20px",
      6: "24px",
      7: "32px",
      8: "48px",
    },
    fonts: {
      normal: '"Poppins", apple-system, sans-serif',
      serif: '"Coustard", serif',
    },
  },
  media: {
    bp1: "(min-width: 415px)",
    dark: "(prefers-color-scheme: dark)",
  },
});

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
  },
  html: {
    width: "100%",
    maxWidth: "100%",
    height: "100vh",
  },
  body: {
    width: "100%",
    maxWidth: "100%",
    height: "100vh",
    margin: 0,
    fontFamily: theme.fonts.normal,
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
  },
  __next: {
    width: "100%",
    maxWidth: "100%",
    height: "100vh",
  },
  "__next > div": {
    width: "100%",
    maxWidth: "100%",
    height: "100vh",
  },
  a: {
    fontFamily: theme.fonts.normal,
    fontSize: theme.fontSizes[4],
    textDecoration: "none",
    color: theme.colors.text,
    letterSpacing: "0",
  },
  h1: {
    fontSize: theme.fontSizes[8],
    fontFamily: theme.fonts.serif,
    fontWeight: "900",
    letterSpacing: "-1.8px",
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  h2: {
    fontSize: theme.fontSizes[4],
    fontWeight: "400",
    lineHeight: "1.2",
    width: "100%",
  },
  h4: {
    fontSize: theme.fontSizes[3],
    fontWeight: "400",
    fontFamily: "$mono",
    color: theme.colors.text,
    textTransform: "uppercase",
    marginBlockStart: 0,
    marginBlockEnd: 0,
    width: "100%",
  },

  "::selection": {
    backgroundColor: theme.colors.primary,
  },
});
