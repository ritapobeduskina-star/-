import { useState, useCallback, useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BackgroundMusic } from "@/components/background-music";
import { WelcomeScreen } from "@/components/welcome-screen";
import { GameScreen } from "@/components/game-screen";
import { QuizScreen } from "@/components/quiz-screen";
import { ResultsScreen } from "@/components/results-screen";
import { 
  getChapterById, 
  getUsedInstruments, 
  getRandomTerm,
  calculateEnding,
  INITIAL_MONEY, 
  INITIAL_EXPERIENCE 
} from "@/lib/gameData";
import type { GameChoice, GameChapter } from "@shared/schema";

type GamePhase = "welcome" | "playing" | "quiz" | "results";
type GameMode = "short" | "medium" | "full";

interface GameStateInternal {
  currentChapter: GameChapter;
  experience: number;
  money: number;
  choiceHistory: string[];
  usedInstruments: string[];
  playerName: string;
  gameMode: GameMode;
  termOfDay: { term: string; description: string };
  quizAnswerCorrect?: boolean;
}

export interface GameplayRecord {
  id: string;
  playerName: string;
  gameMode: GameMode;
  finalExperience: number;
  finalMoney: number;
  endingTitle: string;
  endingType: "success" | "failure" | "neutral";
  quizCorrect: boolean;
  choiceCount: number;
  date: string;
}

function loadGameHistory(): GameplayRecord[] {
  try {
    const stored = localStorage.getItem("game-history");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveGameResult(record: GameplayRecord): void {
  try {
    const history = loadGameHistory();
    history.unshift(record);
    if (history.length > 50) history.pop();
    localStorage.setItem("game-history", JSON.stringify(history));
  } catch {
    console.error("Failed to save game result");
  }
}

function App() {
  const [gamePhase, setGamePhase] = useState<GamePhase>("welcome");
  const [gameState, setGameState] = useState<GameStateInternal | null>(null);
  const [gameHistory, setGameHistory] = useState<GameplayRecord[]>([]);

  useEffect(() => {
    setGameHistory(loadGameHistory());
  }, []);

  const startGame = useCallback((playerName: string, gameMode: GameMode) => {
    const introChapter = getChapterById("intro", gameMode);
    if (!introChapter) return;

    setGameState({
      currentChapter: introChapter,
      experience: INITIAL_EXPERIENCE,
      money: INITIAL_MONEY,
      choiceHistory: [],
      usedInstruments: [],
      playerName,
      gameMode,
      termOfDay: getRandomTerm(),
    });
    setGamePhase("playing");
  }, []);

  const handleChoice = useCallback((choice: GameChoice) => {
    if (!gameState) return;

    const nextChapter = getChapterById(choice.nextChapterId, gameState.gameMode);
    if (!nextChapter) return;

    const newUsedInstruments = choice.usedInstrument
      ? [...gameState.usedInstruments, choice.usedInstrument]
      : gameState.usedInstruments;

    const newState: GameStateInternal = {
      currentChapter: nextChapter,
      experience: gameState.experience + choice.experienceChange,
      money: Math.max(0, gameState.money + choice.moneyChange),
      choiceHistory: [...gameState.choiceHistory, choice.id],
      usedInstruments: newUsedInstruments,
      playerName: gameState.playerName,
      gameMode: gameState.gameMode,
      termOfDay: gameState.termOfDay,
    };

    setGameState(newState);

    if (nextChapter.isEnding) {
      setGamePhase("quiz");
    }
  }, [gameState]);

  const handleQuizComplete = useCallback((isCorrect: boolean) => {
    if (!gameState) return;

    let experience = gameState.experience;
    let money = gameState.money;
    
    if (isCorrect) {
      experience += 5;
      money += 15;
    } else {
      experience = Math.max(0, experience - 2);
      money = Math.max(0, money - 5);
    }

    const ending = calculateEnding(experience, money, gameState.gameMode);
    
    const record: GameplayRecord = {
      id: Date.now().toString(),
      playerName: gameState.playerName,
      gameMode: gameState.gameMode,
      finalExperience: experience,
      finalMoney: money,
      endingTitle: ending.title,
      endingType: ending.type,
      quizCorrect: isCorrect,
      choiceCount: gameState.choiceHistory.length,
      date: new Date().toLocaleString("ru-RU"),
    };

    saveGameResult(record);
    setGameHistory(prev => [record, ...prev]);

    const newState = {
      ...gameState,
      quizAnswerCorrect: isCorrect,
      experience,
      money,
    };
    setGameState(newState);
    setGamePhase("results");
  }, [gameState]);

  const restartGame = useCallback(() => {
    setGameState(null);
    setGamePhase("welcome");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BackgroundMusic />
        <div className="min-h-screen bg-background">
          {gamePhase === "welcome" && (
            <WelcomeScreen onStartGame={startGame} />
          )}
          
          {gamePhase === "playing" && gameState && (
            <GameScreen
              chapter={gameState.currentChapter}
              experience={gameState.experience}
              money={gameState.money}
              playerName={gameState.playerName}
              termOfDay={gameState.termOfDay}
              onChoice={handleChoice}
            />
          )}

          {gamePhase === "quiz" && gameState && (
            <QuizScreen
              termOfDay={gameState.termOfDay}
              onComplete={handleQuizComplete}
            />
          )}
          
          {gamePhase === "results" && gameState && (
            <ResultsScreen
              experience={gameState.experience}
              money={gameState.money}
              usedInstruments={getUsedInstruments(gameState.usedInstruments)}
              choiceCount={gameState.choiceHistory.length}
              quizAnswerCorrect={gameState.quizAnswerCorrect}
              gameHistory={gameHistory}
              onRestart={restartGame}
            />
          )}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
