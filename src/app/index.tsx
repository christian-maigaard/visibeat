import { colors, spacing } from "@/constants/theme";
import { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import BeatBackground from "@/components/BeatBackground";
import TimeSignatureLabel from "@/components/TimeSignatureLabel";
import BpmDisplay from "@/components/BpmDisplay";
import ClickWheel from "@/components/ClickWheel";

const BPM = 120;

const Index: React.FC = () => {
  const [timeSignature, _] = useState({ beats: 4, note: 4 }); // TODO: make this dynamic later
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentBeat, setCurrentBeat] = useState(0);
  const beatRef = useRef(0);

  // TODO TEST cycle code, remove this later
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(
      () => {
        beatRef.current = (beatRef.current + 1) % timeSignature.beats;
        setCurrentBeat(beatRef.current);
      },
      (60 / BPM) * 1000,
    );
    return () => clearInterval(interval);
  }, [isPlaying, timeSignature]);

  return (
    <View style={styles.background}>
      <BeatBackground
        beats={timeSignature.beats}
        isPlaying={isPlaying}
        currentBeat={currentBeat}
      />
      <View style={styles.content}>
        <TimeSignatureLabel
          beats={timeSignature.beats}
          note={timeSignature.note}
        />
        <View style={styles.center}>
          <BpmDisplay bpm={BPM} />
          <ClickWheel />
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxxl,
    paddingBottom: spacing.xxl,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.xl,
    marginBottom: spacing.xxl,
  },
});
