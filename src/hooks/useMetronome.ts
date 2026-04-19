import { useEffect } from "react";
import { useSharedValue, useFrameCallback } from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";

interface UseMetronomeOptions {
  bpm: number;
  beats: number;
  isPlaying: boolean;
  onBeat: (beat: number) => void;
}

export const useMetronome = ({ bpm, beats, isPlaying, onBeat }: UseMetronomeOptions) => {
  const bpmShared = useSharedValue(bpm);
  const beatsShared = useSharedValue(beats);
  const lastBeatTime = useSharedValue(0);
  const currentBeat = useSharedValue(0);

  useEffect(() => { bpmShared.value = bpm; }, [bpm]);
  useEffect(() => { beatsShared.value = beats; }, [beats]);

  useEffect(() => {
    if (!isPlaying) {
      lastBeatTime.value = 0;
      currentBeat.value = 0;
    }
  }, [isPlaying]);

  useFrameCallback((frameInfo) => {
    if (!isPlaying) return;

    const now = frameInfo.timestamp;
    const interval = 60000 / bpmShared.value;

    if (lastBeatTime.value === 0) {
      lastBeatTime.value = now;
      currentBeat.value = 0;
      scheduleOnRN(onBeat, 0);
      return;
    }

    if (now - lastBeatTime.value >= interval) {
      lastBeatTime.value += interval;
      // Catch up if we're more than one interval behind (e.g. after tab switch)
      if (now - lastBeatTime.value > interval) {
        lastBeatTime.value = now;
      }
      const next = (currentBeat.value + 1) % beatsShared.value;
      currentBeat.value = next;
      scheduleOnRN(onBeat, next);
    }
  }, isPlaying);
};
