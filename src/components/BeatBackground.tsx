import { colors } from "@/constants/theme";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  beats: number;
  currentBeat: number;
  isPlaying: boolean;
};

const BeatBackground: React.FC<Props> = ({ beats, currentBeat, isPlaying }) => {
  const opacity = useSharedValue(1);

  useEffect(() => {
    if (isPlaying) {
      opacity.value = withRepeat(
        withTiming(0.5, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
        -1,
        true,
      );
    } else {
      opacity.value = 1;
    }
  }, [isPlaying]);

  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return (
    <View style={styles.container}>
      {Array.from({ length: beats }, (_, i) => (
        <View
          key={i}
          style={[
            styles.column,
            {
              backgroundColor: i % 2 === 0 ? colors.beat.even : colors.beat.odd,
              borderRightWidth: i < beats - 1 ? 1 : 0,
              borderRightColor: colors.border,
            },
          ]}
        >
          {isPlaying && i === currentBeat && (
            <Animated.View style={[StyleSheet.absoluteFill, animatedStyle]}>
              <LinearGradient
                colors={[colors.beat.pulseTop, colors.beat.pulseBottom]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={StyleSheet.absoluteFill}
              />
            </Animated.View>
          )}
        </View>
      ))}
    </View>
  );
};

export default BeatBackground;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});
