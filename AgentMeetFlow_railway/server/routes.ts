import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertGameStateSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Save game state
  app.post("/api/game/save", async (req, res) => {
    try {
      const result = insertGameStateSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Invalid game state data" });
      }
      const state = await storage.saveGameState(result.data);
      res.json(state);
    } catch (error) {
      res.status(500).json({ error: "Failed to save game state" });
    }
  });

  // Get game state by ID
  app.get("/api/game/:id", async (req, res) => {
    try {
      const state = await storage.getGameState(req.params.id);
      if (!state) {
        return res.status(404).json({ error: "Game state not found" });
      }
      res.json(state);
    } catch (error) {
      res.status(500).json({ error: "Failed to get game state" });
    }
  });

  // Get all game states (for stats/leaderboard)
  app.get("/api/games", async (req, res) => {
    try {
      const states = await storage.getAllGameStates();
      res.json(states);
    } catch (error) {
      res.status(500).json({ error: "Failed to get game states" });
    }
  });

  return httpServer;
}
