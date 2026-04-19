import { colors, spacing } from "@/constants/theme";
import { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import BeatBackground from "@/components/BeatBackground";
import TimeSignatureLabel from "@/components/TimeSignatureLabel";
import BpmDisplay from "@/components/BpmDisplay";
import ClickWheel from "@/components/ClickWheel/ClickWheel";
import { useMetronome } from "@/hooks/useMetronome";
import { useTickSound } from "@/hooks/useTickSound";

const BPM_MIN = 20;
const BPM_MAX = 600;

const Index: React.FC = () => {
  const [timeSignature, _] = useState({ beats: 4, note: 4 }); // TODO: make this dynamic later
  const [bpm, setBpm] = useState(120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);

  const increaseBpm = () => setBpm((v) => Math.min(v + 1, BPM_MAX));
  const decreaseBpm = () => setBpm((v) => Math.max(v - 1, BPM_MIN));

  const playTick = useTickSound();

  const onBeat = useCallback(
    (beat: number) => {
      setCurrentBeat(beat);
      playTick(beat);
    },
    [playTick],
  );

  useMetronome({ bpm, beats: timeSignature.beats, isPlaying, onBeat });

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
