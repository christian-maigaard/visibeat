import { useCallback } from "react";
import { useAudioPlayer } from "expo-audio";

const tennisBallOneSource = require("../../assets/audio/tennisBallOne.wav");
const tennisBallTwoSource = require("../../assets/audio/tennisBallTwo.wav");

export const useTickSound = () => {
  const regularPlayer = useAudioPlayer(tennisBallOneSource);
  const accentPlayer = useAudioPlayer(tennisBallTwoSource);

  return useCallback(
    (beat: number) => {
      const player = beat === 0 ? accentPlayer : regularPlayer;
      player.seekTo(0);
      player.play();
    },
    [regularPlayer, accentPlayer],
  );
};
