import { useEffect, useRef } from "react";
import lyreAudio from "@assets/Лира_1764612064217.mp3";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.loop = true;
      audio.play().catch(() => {
        console.log("Audio playback prevented by browser");
      });
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={lyreAudio}
      loop
      data-testid="background-music"
    />
  );
}
