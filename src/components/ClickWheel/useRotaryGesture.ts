import { Platform } from "react-native";
import { Gesture } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import * as Haptics from "expo-haptics";
import { WHEEL_RADIUS, CENTER_RADIUS, RADIANS_PER_BPM } from "./constants";

interface RotaryGestureOptions {
  onIncrease: () => void;
  onDecrease: () => void;
}

const isInRingZone = (x: number, y: number): boolean => {
  "worklet";
  const dx = x - WHEEL_RADIUS;
  const dy = y - WHEEL_RADIUS;
  const dist = Math.sqrt(dx * dx + dy * dy);
  return dist > CENTER_RADIUS && dist < WHEEL_RADIUS;
};

const normalizeAngleDelta = (delta: number): number => {
  "worklet";
  if (delta > Math.PI) return delta - 2 * Math.PI;
  if (delta < -Math.PI) return delta + 2 * Math.PI;
  return delta;
};

export const useRotaryGesture = ({ onIncrease, onDecrease }: RotaryGestureOptions) => {
  const lastAngle = useSharedValue(0);
  const accumulated = useSharedValue(0);
  const isValidTouch = useSharedValue(false);

  const tick = (direction: "increase" | "decrease") => {
    if (Platform.OS === "ios") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    if (direction === "increase") {
      onIncrease();
    } else {
      onDecrease();
    }
  };

  return Gesture.Pan()
    .onBegin((e) => {
      isValidTouch.value = isInRingZone(e.x, e.y);
      lastAngle.value = Math.atan2(e.y - WHEEL_RADIUS, e.x - WHEEL_RADIUS);
      accumulated.value = 0;
    })
    .onUpdate((e) => {
      if (!isValidTouch.value) return;

      const currentAngle = Math.atan2(e.y - WHEEL_RADIUS, e.x - WHEEL_RADIUS);
      const delta = normalizeAngleDelta(currentAngle - lastAngle.value);

      lastAngle.value = currentAngle;
      accumulated.value += delta;

      if (accumulated.value >= RADIANS_PER_BPM) {
        accumulated.value -= RADIANS_PER_BPM;
        scheduleOnRN(tick, "increase");
      } else if (accumulated.value <= -RADIANS_PER_BPM) {
        accumulated.value += RADIANS_PER_BPM;
        scheduleOnRN(tick, "decrease");
      }
    });
};
