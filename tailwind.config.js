/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Primary font stack for transport/manufacturing
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "Roboto Mono",
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "Monaco",
          "Consolas",
          "monospace",
        ],

        // Alternative font stacks
        display: ["Inter", "system-ui", "sans-serif"], // For headers and branding
        body: ["Inter", "system-ui", "sans-serif"], // For body text
        numeric: ["Roboto Mono", "ui-monospace", "monospace"], // For numbers, codes, tracking IDs

        // Industry-specific alternatives
        industrial: ["IBM Plex Sans", "system-ui", "sans-serif"],
        technical: ["Work Sans", "system-ui", "sans-serif"],
        corporate: ["Open Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Transport/Manufacturing specific text sizes
        tracking: [
          "0.875rem",
          { lineHeight: "1.25rem", letterSpacing: "0.025em" },
        ], // For tracking numbers
        data: [
          "0.8125rem",
          { lineHeight: "1.125rem", letterSpacing: "0.01em" },
        ], // For data tables
        label: [
          "0.75rem",
          { lineHeight: "1rem", letterSpacing: "0.05em", fontWeight: "600" },
        ], // For form labels
        status: [
          "0.6875rem",
          { lineHeight: "1rem", letterSpacing: "0.1em", fontWeight: "700" },
        ], // For status badges
      },
      colors: {
        primary: "hsl(var(--primary) / <alpha-value>)",
        "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        "secondary-foreground":
          "hsl(var(--secondary-foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
      },
      letterSpacing: {
        tighter: "-0.025em",
        tight: "-0.0125em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
    },
  },
  plugins: [],
};
