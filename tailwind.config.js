/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light futuristic palette — electric blue / cyan on clean whites
        "background":                  "#f0f5ff",
        "on-background":               "#0f172a",
        "surface":                     "#ffffff",
        "surface-dim":                 "#e8efff",
        "surface-bright":              "#ffffff",
        "surface-container-lowest":    "#e8efff",
        "surface-container-low":       "#eef3ff",
        "surface-container":           "#f5f8ff",
        "surface-container-high":      "#dde8ff",
        "surface-container-highest":   "#d0deff",
        "surface-variant":             "#e2ebff",
        "surface-tint":                "#2563eb",
        "on-surface":                  "#0f172a",
        "on-surface-variant":          "#475569",
        "inverse-surface":             "#0f172a",
        "inverse-on-surface":          "#f8faff",

        // Primary — electric blue
        "primary":                     "#3b82f6",
        "on-primary":                  "#ffffff",
        "primary-container":           "#2563eb",
        "on-primary-container":        "#1e3a8a",
        "primary-fixed":               "#dbeafe",
        "primary-fixed-dim":           "#93c5fd",
        "on-primary-fixed":            "#ffffff",
        "on-primary-fixed-variant":    "#1e3a8a",
        "inverse-primary":             "#93c5fd",

        // Secondary — cyan
        "secondary":                   "#0ea5e9",
        "on-secondary":                "#ffffff",
        "secondary-container":         "#06b6d4",
        "on-secondary-container":      "#164e63",
        "secondary-fixed":             "#cffafe",
        "secondary-fixed-dim":         "#67e8f9",
        "on-secondary-fixed":          "#164e63",
        "on-secondary-fixed-variant":  "#0e7490",

        // Tertiary — teal
        "tertiary":                    "#14b8a6",
        "on-tertiary":                 "#ffffff",
        "tertiary-container":          "#0f766e",
        "on-tertiary-container":       "#f0fdfa",
        "tertiary-fixed":              "#ccfbf1",
        "tertiary-fixed-dim":          "#5eead4",
        "on-tertiary-fixed":           "#134e4a",
        "on-tertiary-fixed-variant":   "#0f766e",

        // Error
        "error":                       "#ef4444",
        "on-error":                    "#ffffff",
        "error-container":             "#fef2f2",
        "on-error-container":          "#b91c1c",

        // Outline
        "outline":                     "#94a3b8",
        "outline-variant":             "#e2e8f0",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      spacing: {
        gutter: "24px",
        "container-max": "1440px",
        unit: "4px",
        margin: "32px",
      },
      maxWidth: {
        "container-max": "1440px",
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        "headline-md": ['Space Grotesk'],
        "display-lg": ['Space Grotesk'],
        "headline-lg": ['Space Grotesk'],
        "headline-xl": ['Space Grotesk'],
        "body-md": ['Space Grotesk'],
        "label-caps": ['Space Grotesk'],
        "label-sm": ['Space Grotesk'],
        "label-md": ['Space Grotesk'],
        "body-lg": ['Space Grotesk'],
      },
      fontSize: {
        'headline-md': ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        'display-lg': ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        'headline-lg': ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        'headline-xl': ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        'headline-sm': ["20px", { lineHeight: "1.4", letterSpacing: "0", fontWeight: "600" }],
        'body-md': ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        'label-caps': ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "700" }],
        'label-sm': ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "600" }],
        'label-md': ["14px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "500" }],
        'body-lg': ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        'code': ["14px", { lineHeight: "1.5", letterSpacing: "0", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};
