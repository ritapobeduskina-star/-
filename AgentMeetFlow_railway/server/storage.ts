import { randomUUID } from "crypto";
import type { InsertGameState, GameState } from "@shared/schema";

export interface IStorage {
  saveGameState(state: InsertGameState): Promise<GameState>;
  getGameState(id: string): Promise<GameState | undefined>;
  getAllGameStates(): Promise<GameState[]>;
}

export class MemStorage implements IStorage {
  private gameStates: Map<string, GameState>;

  constructor() {
    this.gameStates = new Map();
  }

  async saveGameState(insertState: InsertGameState): Promise<GameState> {
    const id = randomUUID();
    const state: GameState = {
      ...insertState,
      id,
      startedAt: new Date(),
    };
    this.gameStates.set(id, state);
    return state;
  }

  async getGameState(id: string): Promise<GameState | undefined> {
    return this.gameStates.get(id);
  }

  async getAllGameStates(): Promise<GameState[]> {
    return Array.from(this.gameStates.values());
  }
}

export const storage = new MemStorage();
