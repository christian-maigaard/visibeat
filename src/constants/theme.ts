import { Platform } from "react-native";

export const colors = {
  background: "#000000",
  beat: {
    even: "#0D0D0F",
    odd: "#111115",
  },
  border: "#1a2e1a",
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

export const layout = {
  maxContentWidth: 800,
  bottomTabInset: Platform.select({ ios: 50, android: 80 }) ?? 0,
} as const;
