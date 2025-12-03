// Audio manager for background music - Lyre-themed Renaissance sounds
export class AudioManager {
  private audio: HTMLAudioElement | null = null;
  private currentTrack: string | null = null;

  private tracks: Record<string, string> = {
    welcome: "https://assets.mixkit.co/active_storage/sfx/2862/2862-preview.mp3",
    gameplay: "https://assets.mixkit.co/active_storage/sfx/2860/2860-preview.mp3",
    success: "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3",
    failure: "https://assets.mixkit.co/active_storage/sfx/2868/2868-preview.mp3",
  };

  constructor() {
    if (typeof window !== "undefined") {
      this.audio = new Audio();
      this.audio.loop = true;
      this.audio.volume = 0.25;
    }
  }

  playTrack(trackName: string) {
    if (!this.audio) return;

    if (this.currentTrack === trackName && !this.audio.paused) {
      return;
    }

    const trackUrl = this.tracks[trackName];
    if (!trackUrl) return;

    this.audio.src = trackUrl;
    this.audio.play().catch(() => {
      console.log("Audio playback prevented by browser");
    });
    this.currentTrack = trackName;
  }

  stop() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.currentTrack = null;
    }
  }

  setVolume(volume: number) {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
    }
  }
}

export const audioManager = new AudioManager();
