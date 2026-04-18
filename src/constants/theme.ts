import { Platform } from "react-native";

export const colors = {
  background: "#000000",
  beat: {
    even: "#0D0D0F",
    odd: "#111115",
    pulseTop: "rgba(57, 255, 20, 0.30)",
    pulseBottom: "rgba(57, 255, 20, 0.08)",
  },
  border: "#1a2e1a",
  wheel: {
    background: "rgba(28, 28, 30, 0.9)",
    border: "rgba(255, 255, 255, 0.18)",
    highlightInset: "rgba(255, 255, 255, 0.05)",
    buttonBackground: "rgba(44, 44, 46, 0.9)",
    buttonBorder: "rgba(255, 255, 255, 0.2)",
    playColor: "#39FF14",
    playBorder: "rgba(57, 255, 20, 0.5)",
    playGradientTop: "rgba(57, 255, 20, 0.2)",
    playGradientBottom: "rgba(57, 255, 20, 0.12)",
    playGlow: "rgba(57, 255, 20, 0.25)",
    shadow: "rgba(0, 0, 0, 0.4)",
  },
  text: {
    primary: "#FFFFFF",
    muted: "#6B7280",
  },
} as const;

export const spacing = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 64,
  xxxxl: 100,
} as const;

export const fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
})!;

export const fontSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  display: 72,
} as const;

export const fontWeights = {
  light: "300",
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

export const layout = {
  maxContentWidth: 800,
  bottomTabInset: Platform.select({ ios: 50, android: 80 }) ?? 0,
} as const;
