import { z } from "zod";

// Game choice structure
export interface GameChoice {
  id: string;
  text: string;
  consequence?: string;
  experienceChange: number;
  moneyChange: number;
  nextChapterId: string;
  usedInstrument?: string;
}

// Game chapter/scene structure
export interface GameChapter {
  id: string;
  title: string;
  location: string;
  narrative: string[];
  speaker?: string;
  dialogue?: string[];
  choices: GameChoice[];
  isEnding?: boolean;
  endingType?: "success" | "failure" | "neutral";
}

// Player game state
export interface GameState {
  id: string;
  currentChapterId: string;
  experience: number;
  money: number;
  choiceHistory: string[];
  usedInstruments: string[];
  startedAt: Date;
}

// Financial instrument comparison for ending screen
export interface FinancialInstrument {
  id: string;
  renaissanceName: string;
  renaissanceDescription: string;
  modernName: string;
  modernDescription: string;
  icon: string;
}

// Insert schemas
export const insertGameStateSchema = z.object({
  currentChapterId: z.string(),
  experience: z.number(),
  money: z.number(),
  choiceHistory: z.array(z.string()),
  usedInstruments: z.array(z.string()),
});

export type InsertGameState = z.infer<typeof insertGameStateSchema>;
