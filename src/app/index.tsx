import { colors, spacing } from "@/constants/theme";
import { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import BeatBackground from "@/components/BeatBackground";
import TimeSignatureLabel from "@/components/TimeSignatureLabel";
import BpmDisplay from "@/components/BpmDisplay";
import ClickWheel from "@/components/ClickWheel/ClickWheel";

const BPM_MIN = 40;
const BPM_MAX = 240;

const Index: React.FC = () => {
  const [timeSignature, _] = useState({ beats: 4, note: 4 }); // TODO: make this dynamic later
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentBeat, setCurrentBeat] = useState(0);
  const beatRef = useRef(0);

  const increaseBpm = () => setBpm((v) => Math.min(v + 1, BPM_MAX));
  const decreaseBpm = () => setBpm((v) => Math.max(v - 1, BPM_MIN));

  // TODO TEST cycle code, remove this later
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(
      () => {
        beatRef.current = (beatRef.current + 1) % timeSignature.beats;
        setCurrentBeat(beatRef.current);
      },
      (60 / bpm) * 1000,
    );
    return () => clearInterval(interval);
  }, [isPlaying, timeSignature, bpm]);

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
        <View style={styles.section}>
          <BpmDisplay bpm={bpm} />
        </View>
        <View style={styles.section}>
          <ClickWheel
            isPlaying={isPlaying}
            onToggle={() => setIsPlaying((v) => !v)}
            onIncrease={increaseBpm}
            onDecrease={decreaseBpm}
          />
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
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxxxl,
    paddingBottom: spacing.xxxxl,
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
