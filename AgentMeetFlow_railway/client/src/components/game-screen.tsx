import { useState, useEffect } from "react";
import { Coins, Star, MapPin, ChevronRight, BookOpen, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import florenceImage from "@assets/фЛОРЕНЦИЯ ПЛОЩАДЬ_1764612821690.jpeg";
import type { GameChapter, GameChoice } from "@shared/schema";

interface GameScreenProps {
  chapter: GameChapter;
  experience: number;
  money: number;
  playerName: string;
  termOfDay: { term: string; description: string };
  onChoice: (choice: GameChoice) => void;
}

const locationImages: Record<string, string> = {
  "Флоренция, Площадь Синьории": florenceImage,
  "Банк Медичи": "https://images.unsplash.com/photo-1544716278-ca5e3af564d9?w=1600&h=900&fit=crop&q=80",
  "Mercato Vecchio": "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1600&h=900&fit=crop&q=80",
  "Контора менялы": "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1600&h=900&fit=crop&q=80",
  "Порт Ливорно": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&q=80",
  "Флоренция": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&q=80",
  "Via de' Bardi": "https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=1600&h=900&fit=crop&q=80",
  "Палаццо Веккьо": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&h=900&fit=crop&q=80",
  "Ваш новый банк": "https://images.unsplash.com/photo-1548225221-bbf1b3fb7146?w=1600&h=900&fit=crop&q=80",
  "Флоренция, много лет спустя": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&q=80",
};

export function GameScreen({ chapter, experience, money, playerName, termOfDay, onChoice }: GameScreenProps) {
  const [currentNarrativeIndex, setCurrentNarrativeIndex] = useState(0);
  const [showChoices, setShowChoices] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<GameChoice | null>(null);
  const [showReward, setShowReward] = useState(false);

  const allText = [
    ...chapter.narrative,
    ...(chapter.dialogue || []),
  ];

  useEffect(() => {
    setCurrentNarrativeIndex(0);
    setShowChoices(false);
    setIsTransitioning(false);
    setSelectedChoice(null);
    setShowReward(false);
  }, [chapter.id]);

  const handleContinue = () => {
    if (currentNarrativeIndex < allText.length - 1) {
      setCurrentNarrativeIndex(currentNarrativeIndex + 1);
    } else {
      setShowChoices(true);
    }
  };

  const handleChoice = (choice: GameChoice) => {
    setSelectedChoice(choice);
    setShowReward(true);
    
    setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        onChoice(choice);
      }, 300);
    }, 1500);
  };

  const isDialogue = currentNarrativeIndex >= chapter.narrative.length;
  const currentText = allText[currentNarrativeIndex];
  const bgImage = locationImages[chapter.location] || "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop&q=80";

  return (
    <div 
      className={`min-h-screen flex flex-col transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'brightness(1.1) contrast(1.15) saturate(1.2) blur(0px) drop-shadow(0 0 1px rgba(0,0,0,0.1))',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col h-full">
        <header className="sticky top-0 z-10 bg-card/95 backdrop-blur border-b border-border">
          <div className="max-w-4xl mx-auto px-3 md:px-4 py-2 md:py-3 flex items-center justify-between gap-2 md:gap-4 flex-wrap">
            <div className="flex items-center gap-1 md:gap-2 min-w-0 flex-shrink">
              <Badge variant="outline" className="font-label text-xs uppercase tracking-wider px-2 md:px-3 py-1 truncate">
                <span className="hidden sm:inline mr-1 md:mr-2">{playerName}</span>
              </Badge>
              <Badge variant="outline" className="font-label text-xs uppercase tracking-wider px-2 md:px-3 py-1 truncate hidden xs:inline-flex">
                <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                <span className="hidden sm:inline truncate">{chapter.location}</span>
              </Badge>
            </div>
            
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
              <div className="flex items-center gap-1 px-2 md:px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 whitespace-nowrap">
                <Coins className="h-3 w-3 md:h-4 md:w-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <span className="font-heading font-semibold tabular-nums text-amber-700 dark:text-amber-300 text-xs md:text-sm">
                  {money}
                </span>
              </div>
              <div className="flex items-center gap-1 px-2 md:px-3 py-1 rounded-full bg-primary/10 border border-primary/20 whitespace-nowrap">
                <Star className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0" />
                <span className="font-heading font-semibold tabular-nums text-primary text-xs md:text-sm">
                  {experience}
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col w-full overflow-hidden">
          <div className="max-w-2xl lg:max-w-4xl mx-auto w-full px-4 py-6">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-center mb-6 text-gold drop-shadow-lg scale-in text-glow break-words">
              {chapter.title}
            </h2>
          </div>

          {showReward && selectedChoice && (
            <div className="flex-1 flex items-center justify-center px-4 pb-6 scale-in w-full overflow-hidden">
              <Card className="max-w-xl lg:max-w-2xl w-full p-6 md:p-10 parchment-bg renaissance-border fade-in text-center pulse-glow">
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-gold mb-4 flip-in">
                  {selectedChoice.consequence || "Выбор сделан"}
                </h3>
                
                <div className="flex items-center justify-center gap-6 py-6">
                  {selectedChoice.moneyChange !== 0 && (
                    <div className={`flex flex-col items-center gap-2 p-4 rounded-lg scale-in ${selectedChoice.moneyChange > 0 ? 'bg-green-500/10' : 'bg-red-500/10'}`} style={{ animationDelay: '0.2s' }}>
                      <Coins className={`h-6 w-6 icon-bounce ${selectedChoice.moneyChange > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`} />
                      <span className={`font-heading font-bold text-lg ${selectedChoice.moneyChange > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {selectedChoice.moneyChange > 0 ? '+' : ''}{selectedChoice.moneyChange} флоринов
                      </span>
                    </div>
                  )}
                  
                  {selectedChoice.experienceChange !== 0 && (
                    <div className={`flex flex-col items-center gap-2 p-4 rounded-lg scale-in ${selectedChoice.experienceChange > 0 ? 'bg-blue-500/10' : 'bg-orange-500/10'}`} style={{ animationDelay: '0.4s' }}>
                      <Star className={`h-6 w-6 icon-bounce ${selectedChoice.experienceChange > 0 ? 'text-blue-600 dark:text-blue-400' : 'text-orange-600 dark:text-orange-400'}`} />
                      <span className={`font-heading font-bold text-lg ${selectedChoice.experienceChange > 0 ? 'text-blue-600 dark:text-blue-400' : 'text-orange-600 dark:text-orange-400'}`}>
                        {selectedChoice.experienceChange > 0 ? '+' : ''}{selectedChoice.experienceChange} опыта
                      </span>
                    </div>
                  )}
                </div>
                
                <p className="text-sm font-body text-muted-foreground italic">
                  Переход на следующую сцену...
                </p>
              </Card>
            </div>
          )}

          {!showReward && (
            <div className="flex-1 flex items-center justify-center px-4 pb-6 card-hover w-full overflow-hidden">
              <Card className="max-w-xl lg:max-w-3xl w-full p-6 md:p-8 lg:p-10 parchment-bg renaissance-border fade-in card-hover">
                {isDialogue && chapter.speaker && (
                  <div className="mb-4">
                    <span className="font-heading text-lg font-semibold text-primary">
                      {chapter.speaker}:
                    </span>
                    <div className="h-px bg-primary/20 mt-2" />
                  </div>
                )}
                
                <p 
                  key={currentNarrativeIndex}
                  className={`text-lg md:text-xl font-body leading-relaxed fade-in ${isDialogue ? 'italic' : ''}`}
                >
                  {isDialogue ? `«${currentText}»` : currentText}
                </p>

                {chapter.id === 'intro' && currentNarrativeIndex === 0 && (
                  <div className="mt-6 md:mt-8 p-4 rounded-md border border-amber-500/30 bg-amber-500/10 fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-label uppercase tracking-wider text-amber-700 dark:text-amber-300 mb-2">
                          Запомните термин
                        </p>
                        <p className="font-heading font-semibold text-lg text-amber-900 dark:text-amber-100 mb-1">
                          {termOfDay.term}
                        </p>
                        <p className="text-sm font-body text-amber-800 dark:text-amber-200 mb-2">
                          {termOfDay.description}
                        </p>
                        <p className="text-xs text-amber-700 dark:text-amber-300 italic">
                          Вам понадобится вспомнить это в конце игры
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!showChoices && (
                  <div className="mt-8 flex justify-end">
                    <Button
                      onClick={handleContinue}
                      className="gap-2 font-body"
                      data-testid="button-continue"
                    >
                      Продолжить
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          )}

          {showChoices && !showReward && chapter.choices.length > 0 && (
            <div className="bg-card/50 backdrop-blur border-t border-border py-6 px-4 w-full overflow-x-hidden">
              <div className="max-w-2xl lg:max-w-3xl mx-auto space-y-3 w-full">
                <p className="text-sm font-label uppercase tracking-wider text-muted-foreground text-center mb-4">
                  Ваш выбор
                </p>
                {chapter.choices.map((choice, index) => (
                  <Button
                    key={choice.id}
                    variant="outline"
                    onClick={() => handleChoice(choice)}
                    className="w-full min-h-16 h-auto py-4 px-4 md:px-6 text-left justify-start flex-col items-start gap-1 hover-elevate slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    data-testid={`button-choice-${choice.id}`}
                  >
                    <span className="font-body text-sm md:text-base leading-relaxed break-words">
                      {choice.text}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
