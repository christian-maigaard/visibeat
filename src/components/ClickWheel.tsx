import { colors } from "@/constants/theme";
import { GlassView, isLiquidGlassAvailable } from "expo-glass-effect";
import { View, StyleSheet } from "react-native";

const WHEEL_SIZE = 260;

const ClickWheel: React.FC = () => {
  const content = null; // placeholder for inner content

  if (isLiquidGlassAvailable()) {
    return <GlassView style={styles.wheel}>{content}</GlassView>;
  }

  return <View style={[styles.wheel, styles.wheelFallback]}>{content}</View>;
};

export default ClickWheel;

const styles = StyleSheet.create({
  wheel: {
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
    borderRadius: WHEEL_SIZE / 2,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: colors.wheel.border,
    boxShadow: `0 20px 60px rgba(0, 0, 0, 0.8), 0 8px 24px rgba(0, 0, 0, 0.6), inset 0 1px 0 ${colors.wheel.highlightInset}`,
  },
  wheelFallback: {
    backgroundColor: colors.wheel.background,
  },
});
