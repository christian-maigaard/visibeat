import { colors } from "@/constants/theme";
import { GlassView, isLiquidGlassAvailable } from "expo-glass-effect";
import { View, StyleSheet } from "react-native";
import CenterButton from "@/components/ClickWheel/CenterButton";
import { RingButton } from "./RingButton";
import { RING_BUTTON_OFFSET, RING_BUTTON_INSET, WHEEL_SIZE } from "./constants";

interface ClickWheelProps {
  isPlaying: boolean;
  onToggle: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

const WheelShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  if (isLiquidGlassAvailable()) {
    return <GlassView style={styles.wheel}>{children}</GlassView>;
  }
  return <View style={[styles.wheel, styles.wheelFallback]}>{children}</View>;
};

const ClickWheel: React.FC<ClickWheelProps> = ({ isPlaying, onToggle, onIncrease, onDecrease }) => (
  <WheelShell>
    <CenterButton isPlaying={isPlaying} onToggle={onToggle} />
    <RingButton icon="plus" onPress={onIncrease} style={{ top: RING_BUTTON_OFFSET, right: RING_BUTTON_INSET }} />
    <RingButton icon="minus" onPress={onDecrease} style={{ top: RING_BUTTON_OFFSET, left: RING_BUTTON_INSET }} />
  </WheelShell>
);

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
