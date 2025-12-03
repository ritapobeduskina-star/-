import { useState } from "react";
import { Coins, BookOpen, ScrollText, Zap, Clock, BookOpenCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface WelcomeScreenProps {
  onStartGame: (playerName: string, gameMode: "short" | "medium" | "full") => void;
}

export function WelcomeScreen({ onStartGame }: WelcomeScreenProps) {
  const [playerName, setPlayerName] = useState("");
  const [hasEnteredName, setHasEnteredName] = useState(false);
  const [selectedMode, setSelectedMode] = useState<"short" | "medium" | "full" | null>(null);

  const handleStartGame = (mode: "short" | "medium" | "full") => {
    if (playerName.trim()) {
      onStartGame(playerName.trim(), mode);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && playerName.trim()) {
      handleStartGame();
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background via-card to-background"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <Card className="max-w-2xl w-full p-6 md:p-8 lg:p-12 renaissance-border fade-in relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          <div className="space-y-2">
            <div className="flex justify-center gap-3 mb-4 md:mb-6">
              <Coins className="h-6 w-6 md:h-8 md:w-8 text-gold" />
              <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-gold" />
              <ScrollText className="h-6 w-6 md:h-8 md:w-8 text-gold" />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gold tracking-wide">
              Менялы времён
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gold tracking-wide">
              Ренессанса
            </h1>
            
            <div className="flex items-center justify-center gap-4 py-3 md:py-4">
              <div className="h-px flex-1 bg-primary/30" />
              <ScrollText className="h-4 w-4 md:h-5 md:w-5 text-primary/50" />
              <div className="h-px flex-1 bg-primary/30" />
            </div>
            
            <p className="text-sm md:text-lg lg:text-xl font-body text-muted-foreground italic">
              Una Storia di Finanza e Fortuna
            </p>
          </div>

          <div className="space-y-3 md:space-y-4 max-w-lg mx-auto">
            <p className="font-body text-sm md:text-base lg:text-lg leading-relaxed text-foreground/90">
              Флоренция, XV век. Вы — меняла, стоящий на пороге великих перемен в мире финансов. 
              Ваши решения определят, станете ли вы великим банкиром или потеряете всё.
            </p>
            
            <p className="font-body text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
              Познакомьтесь с финансовыми инструментами эпохи Возрождения, 
              которые легли в основу современной банковской системы.
            </p>
          </div>

          <div className="pt-4 space-y-6 max-w-md mx-auto">
            <div className="space-y-2">
              <label className="block text-sm font-label uppercase tracking-wider text-muted-foreground">
                Как вас зовут, меняла?
              </label>
              <Input
                type="text"
                placeholder="Введите ваше имя..."
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                onFocus={() => setHasEnteredName(true)}
                className="text-center font-body"
                data-testid="input-player-name"
              />
            </div>
            
            {playerName.trim() && (
              <>
                <div className="space-y-2">
                  <label className="block text-sm font-label uppercase tracking-wider text-muted-foreground">
                    Выберите режим игры
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      variant={selectedMode === "short" ? "default" : "outline"}
                      onClick={() => setSelectedMode("short")}
                      className="flex flex-col items-center gap-2 h-auto py-3 font-body text-xs"
                      data-testid="button-mode-short"
                    >
                      <Zap className="h-5 w-5" />
                      <span>Короткая</span>
                      <span className="text-xs text-muted-foreground">3 сцены</span>
                    </Button>
                    <Button
                      variant={selectedMode === "medium" ? "default" : "outline"}
                      onClick={() => setSelectedMode("medium")}
                      className="flex flex-col items-center gap-2 h-auto py-3 font-body text-xs"
                      data-testid="button-mode-medium"
                    >
                      <Clock className="h-5 w-5" />
                      <span>Средняя</span>
                      <span className="text-xs text-muted-foreground">7 сцен</span>
                    </Button>
                    <Button
                      variant={selectedMode === "full" ? "default" : "outline"}
                      onClick={() => setSelectedMode("full")}
                      className="flex flex-col items-center gap-2 h-auto py-3 font-body text-xs"
                      data-testid="button-mode-full"
                    >
                      <BookOpenCheck className="h-5 w-5" />
                      <span>Полная</span>
                      <span className="text-xs text-muted-foreground">16+ сцен</span>
                    </Button>
                  </div>
                </div>
                
                <Button
                  size="lg"
                  onClick={() => handleStartGame(selectedMode || "full")}
                  disabled={!selectedMode}
                  className="text-lg px-8 py-6 font-heading tracking-wider w-full"
                  data-testid="button-start-game"
                >
                  Начать Путешествие
                </Button>
              </>
            )}
            
            <p className="text-xs font-label uppercase tracking-widest text-muted-foreground">
              Образовательная игра о развитии банковской системы
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
