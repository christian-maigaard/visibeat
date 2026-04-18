import { colors, fontSizes, fontWeights } from "@/constants/theme";
import { Text, StyleSheet } from "react-native";

type Props = {
  beats: number;
  note: number;
};

const TimeSignatureLabel: React.FC<Props> = ({ beats, note }) => (
  <Text style={styles.label}>
    {beats}/{note} Time
  </Text>
);

export default TimeSignatureLabel;

const styles = StyleSheet.create({
  label: {
    color: colors.text.muted,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.medium,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
