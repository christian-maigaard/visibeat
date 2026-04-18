import { colors } from "@/constants/theme";
import { View, StyleSheet } from "react-native";

type Props = {
  beats: number;
};

const BeatBackground: React.FC<Props> = ({ beats }) => {
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
        />
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
