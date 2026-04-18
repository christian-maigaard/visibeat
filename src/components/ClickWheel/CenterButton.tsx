import { colors } from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import { SymbolView } from "expo-symbols";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { View, Pressable, StyleSheet } from "react-native";
import { WHEEL_SIZE } from "./constants";

const CENTER_SIZE = 112;
export const CENTER_OFFSET = (WHEEL_SIZE - CENTER_SIZE) / 2;

const PlayButton: React.FC = () => (
  <View
    style={[
      styles.button,
      {
        backgroundColor: colors.wheel.buttonBackground,
        borderColor: colors.wheel.buttonBorder,
        boxShadow: `0 4px 20px ${colors.wheel.shadow}, inset 0 1px 0 ${colors.wheel.highlightInset}`,
      },
    ]}
  >
    <SymbolView name="play.fill" size={40} tintColor={colors.text.primary} />
  </View>
);

const StopButton: React.FC = () => (
  <LinearGradient
    colors={[colors.wheel.playGradientTop, colors.wheel.playGradientBottom]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={[
      styles.button,
      {
        borderColor: colors.wheel.playBorder,
        boxShadow: `0 0 30px ${colors.wheel.playGlow}, 0 4px 20px ${colors.wheel.shadow}, inset 0 1px 0 ${colors.wheel.highlightInset}`,
      },
    ]}
  >
    <SymbolView name="pause.fill" size={40} tintColor={colors.wheel.playColor} />
  </LinearGradient>
);

interface CenterButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const CenterButton: React.FC<CenterButtonProps> = ({ isPlaying, onToggle }) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Pressable
      onPress={onToggle}
      onPressIn={() => { scale.value = withSpring(0.9); }}
      onPressOut={() => { scale.value = withSpring(1); }}
      style={styles.wrapper}
    >
      <Animated.View style={animatedStyle}>
        {isPlaying ? <StopButton /> : <PlayButton />}
      </Animated.View>
    </Pressable>
  );
};

export default CenterButton;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: CENTER_OFFSET,
    left: CENTER_OFFSET,
  },
  button: {
    width: CENTER_SIZE,
    height: CENTER_SIZE,
    borderRadius: CENTER_SIZE / 2,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
});
