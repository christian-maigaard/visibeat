import { colors } from "@/constants/theme";
import { SymbolView, type SymbolViewProps } from "expo-symbols";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { WHEEL_SIZE, RING_BUTTON_SIZE } from "./constants";

interface RingButtonProps {
  icon: SymbolViewProps["name"];
  onPress: () => void;
  style: object;
}

export const RingButton: React.FC<RingButtonProps> = ({
  icon,
  onPress,
  style,
}) => {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[styles.ringButton, style, animatedStyle]}>
      <Pressable
        onPress={onPress}
        onPressIn={() => {
          scale.value = withSpring(0.9);
        }}
        onPressOut={() => {
          scale.value = withSpring(1);
        }}
        style={({ pressed }) => [
          styles.ringButtonPressable,
          pressed && styles.ringButtonPressed,
        ]}
      >
        <SymbolView
          name={icon}
          size={24}
          tintColor={colors.wheel.playColor}
          weight="semibold"
        />
      </Pressable>
    </Animated.View>
  );
};

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
  ringButton: {
    position: "absolute",
    width: RING_BUTTON_SIZE,
    height: RING_BUTTON_SIZE,
    borderRadius: RING_BUTTON_SIZE / 2,
    overflow: "hidden",
  },
  ringButtonPressable: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ringButtonPressed: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
});
