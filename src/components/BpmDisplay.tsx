import { colors, fonts, fontSizes, fontWeights } from "@/constants/theme";
import { Text, StyleSheet } from "react-native";

type Props = {
  bpm: number;
};

const BpmDisplay: React.FC<Props> = ({ bpm }) => (
  <>
    <Text style={styles.bpm}>{bpm}</Text>
    <Text style={styles.label}>Beats Per Minute</Text>
  </>
);

export default BpmDisplay;

const styles = StyleSheet.create({
  bpm: {
    color: colors.text.primary,
    fontSize: fontSizes.display,
    fontWeight: fontWeights.light,
    fontFamily: fonts?.mono,
    letterSpacing: -1,
    lineHeight: fontSizes.display,
  },
  label: {
    color: colors.text.muted,
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
});
