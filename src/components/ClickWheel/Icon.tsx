import { Image } from "expo-image";
import { Text } from "react-native";

const FALLBACK: Record<string, string> = {
  "play.fill": "▶",
  "pause.fill": "⏸",
  plus: "+",
  minus: "−",
};

interface IconProps {
  name: keyof typeof FALLBACK;
  size: number;
  color: string;
}

export const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  if (process.env.EXPO_OS === "ios") {
    return <Image source={`sf:${name}`} style={{ width: size, height: size, tintColor: color }} />;
  }
  return <Text style={{ fontSize: size * 0.8, color }}>{FALLBACK[name]}</Text>;
};
