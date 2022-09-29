const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        body: {
          lighter: "#3d3d3d",
          light: "#2d2d2d",
          DEFAULT: "#191919",
          dark: "#000000"
        },
        accent: {
          DEFAULT: "#ffbf50"
        },
        error: {
          light: "#cd6262",
          DEFAULT: "#c75151",
          dark: "#B94848"
        },
        warn: {
          light: "#FBC06E",
          DEFAULT: "#f0ad4e",
          dark: "#DE9939"
        },
        success: {
          light: "#66A55B",
          DEFAULT: "#538d4a",
          dark: "#497E40"
        },
        info: {
          light: "#378FC2",
          DEFAULT: "#277cad",
          dark: "#23719E"
        },
        white: {
          light: colors.white,
          DEFAULT: "#CCCCCC",
          dark: "#BBBBBB"
        },
      },
      margin: ({ theme }) => ({
        row: theme("spacing.6"),
        box: "16px",
        window: "24px",
      }),
      padding: ({ theme }) => ({
        row: theme("spacing.6"),
        box: "16px",
        window: "24px",
      }),
      gap: theme => ({
        row: theme("spacing.6")
      }),
      backgroundImage: {
        divider: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%);`,
      }
    },
    fontSize: {
      xxs: ['0.65rem', { lineHeight: '1rem' }],
      xs: ['0.8rem', { lineHeight: '1rem' }],
      sm: ['0.9rem', { lineHeight: '1.1rem' }],
      base: ['0.98rem', { lineHeight: '1.25rem' }],
      md: ["18px", { lineHeight: "2rem" }],
      lg: ['1rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.25rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '4rem' }]
    },
    fontWeight: {
      light: '400',
      normal: '500',
      semi: '600',
      bold: '700'
    }
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
};