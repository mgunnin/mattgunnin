module.exports = {
  // ...

  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(37, 30, 64)",
          100: "rgb(44, 34, 80)",
          200: "rgb(50, 39, 95)",
          300: "rgb(57, 44, 114)",
          400: "rgb(68, 53, 146)",
          500: "rgb(88, 66, 195)",
          600: "rgb(110, 86, 207)",
          700: "rgb(124, 102, 220)",
          800: "rgb(158, 140, 252)",
          900: "rgb(241, 238, 254)",
        },
        neutral: {
          0: "rgb(10, 10, 10)",
          50: "rgb(23, 23, 23)",
          100: "rgb(38, 38, 38)",
          200: "rgb(64, 64, 64)",
          300: "rgb(82, 82, 82)",
          400: "rgb(115, 115, 115)",
          500: "rgb(163, 163, 163)",
          600: "rgb(212, 212, 212)",
          700: "rgb(229, 229, 229)",
          800: "rgb(245, 245, 245)",
          900: "rgb(250, 250, 250)",
          950: "rgb(255, 255, 255)",
        },
        error: {
          50: "rgb(60, 24, 39)",
          100: "rgb(72, 26, 45)",
          200: "rgb(84, 27, 51)",
          300: "rgb(100, 29, 59)",
          400: "rgb(128, 29, 69)",
          500: "rgb(174, 25, 85)",
          600: "rgb(233, 61, 130)",
          700: "rgb(240, 79, 136)",
          800: "rgb(247, 97, 144)",
          900: "rgb(254, 236, 244)",
        },
        warning: {
          50: "rgb(52, 28, 0)",
          100: "rgb(63, 34, 0)",
          200: "rgb(74, 41, 0)",
          300: "rgb(87, 51, 0)",
          400: "rgb(105, 63, 5)",
          500: "rgb(130, 78, 0)",
          600: "rgb(255, 178, 36)",
          700: "rgb(255, 203, 71)",
          800: "rgb(241, 161, 13)",
          900: "rgb(254, 243, 221)",
        },
        success: {
          50: "rgb(15, 41, 30)",
          100: "rgb(17, 49, 35)",
          200: "rgb(19, 57, 41)",
          300: "rgb(22, 68, 48)",
          400: "rgb(27, 84, 58)",
          500: "rgb(35, 110, 74)",
          600: "rgb(48, 164, 108)",
          700: "rgb(60, 177, 121)",
          800: "rgb(76, 195, 138)",
          900: "rgb(229, 251, 235)",
        },
        "brand-primary": "rgb(110, 86, 207)",
        "default-font": "rgb(250, 250, 250)",
        "subtext-color": "rgb(163, 163, 163)",
        "neutral-border": "rgb(64, 64, 64)",
        black: "rgb(10, 10, 10)",
        "default-background": "rgb(10, 10, 10)",
      },
      fontSize: {
        caption: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
          },
        ],
        "caption-bold": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
          },
        ],
        body: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "body-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        "heading-3": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],
        "heading-2": [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        "heading-1": [
          "30px",
          {
            lineHeight: "36px",
            fontWeight: "500",
          },
        ],
        "monospace-body": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
      },
      fontFamily: {
        caption: "Inter",
        "caption-bold": "Inter",
        body: "Inter",
        "body-bold": "Inter",
        "heading-3": "Inter",
        "heading-2": "Inter",
        "heading-1": "Inter",
        "monospace-body": "monospace",
      },
      boxShadow: {
        default: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        overlay:
          "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
      },
      container: {
        padding: {
          DEFAULT: "16px",
          sm: "calc((100vw + 16px - 640px) / 2)",
          md: "calc((100vw + 16px - 768px) / 2)",
          lg: "calc((100vw + 16px - 1024px) / 2)",
          xl: "calc((100vw + 16px - 1280px) / 2)",
          "2xl": "calc((100vw + 16px - 1536px) / 2)",
        },
      },
      spacing: {
        112: "28rem",
        144: "36rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
      },
      screens: {
        mobile: {
          max: "767px",
        },
      },
    },
  },
};
