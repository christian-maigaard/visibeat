import { colors } from "@/constants/theme";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import BeatBackground from "@/components/BeatBackground";

const Index: React.FC = () => {
  const [timeSignature, _] = useState(4);

  return (
    <View style={styles.background}>
      <BeatBackground beats={timeSignature} />
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
