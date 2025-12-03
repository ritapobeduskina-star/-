import { 
  Coins, 
  Star, 
  Trophy, 
  AlertTriangle, 
  Medal,
  BookOpen,
  ScrollText,
  PieChart,
  TrendingUp,
  Landmark,
  ArrowRight,
  RotateCcw,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { FinancialInstrument } from "@shared/schema";
import { calculateEnding } from "@/lib/gameData";
import type { GameplayRecord } from "@/App";

interface ResultsScreenProps {
  experience: number;
  money: number;
  usedInstruments: FinancialInstrument[];
  choiceCount: number;
  quizAnswerCorrect?: boolean;
  gameHistory: GameplayRecord[];
  onRestart: () => void;
}

const iconMap: Record<string, typeof BookOpen> = {
  BookOpen,
  ScrollText,
  PieChart,
  Coins,
  TrendingUp,
  Landmark,
};

function getEndingIcon(type: "success" | "failure" | "neutral") {
  switch (type) {
    case "success":
      return Trophy;
    case "failure":
      return AlertTriangle;
    default:
      return Medal;
  }
}

function getEndingColor(type: "success" | "failure" | "neutral") {
  switch (type) {
    case "success":
      return "text-amber-500";
    case "failure":
      return "text-red-500";
    default:
      return "text-blue-500";
  }
}

export function ResultsScreen({
  experience: initialExperience,
  money: initialMoney,
  usedInstruments,
  choiceCount,
  quizAnswerCorrect,
  gameHistory,
  onRestart,
}: ResultsScreenProps) {
  let experience = initialExperience;
  let money = initialMoney;
  
  if (quizAnswerCorrect !== undefined) {
    if (quizAnswerCorrect) {
      experience += 5;
      money += 15;
    } else {
      experience = Math.max(0, experience - 2);
      money = Math.max(0, money - 5);
    }
  }

  const ending = calculateEnding(experience, money);
  const EndingIcon = getEndingIcon(ending.type);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background py-8 px-4 w-full overflow-x-hidden">
      <div className="max-w-2xl lg:max-w-4xl mx-auto space-y-6 md:space-y-8 w-full">
        <div className="text-center space-y-4 fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gold">
            Конец Путешествия
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-24 bg-primary/30" />
            <ScrollText className="h-5 w-5 text-primary/50" />
            <div className="h-px flex-1 max-w-24 bg-primary/30" />
          </div>
        </div>

        <Card className="renaissance-border fade-in" style={{ animationDelay: "100ms" }}>
          <CardContent className="p-6 md:p-8 text-center space-y-4">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${
              ending.type === "success" ? "bg-amber-500/20" :
              ending.type === "failure" ? "bg-red-500/20" : "bg-blue-500/20"
            }`}>
              <EndingIcon className={`h-10 w-10 ${getEndingColor(ending.type)}`} />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-heading font-semibold">
              {ending.title}
            </h2>
            
            <p className="text-lg font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {ending.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                <Coins className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span className="font-heading font-semibold text-lg tabular-nums text-amber-700 dark:text-amber-300">
                  {money} флоринов
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Star className="h-5 w-5 text-primary" />
                <span className="font-heading font-semibold text-lg tabular-nums text-primary">
                  {experience} опыта
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
                <span className="font-label text-sm text-muted-foreground">
                  {choiceCount} решений принято
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 fade-in" style={{ animationDelay: "150ms" }}>
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-heading font-semibold text-gold mb-2">
              От инструментов прошлого к настоящему
            </h3>
            <p className="text-sm text-muted-foreground font-body">
              Многие финансовые инструменты эпохи Ренессанса используются и в наши дни — 
              в том же виде или усовершенствованными.
            </p>
          </div>

          {usedInstruments.length > 0 ? (
            <div className="grid gap-3 md:gap-4 md:grid-cols-2 w-full">
              {usedInstruments.map((instrument, index) => {
                const IconComponent = iconMap[instrument.icon] || BookOpen;
                return (
                  <Card 
                    key={instrument.id} 
                    className="hover-elevate slide-up overflow-hidden"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="font-label text-xs uppercase">
                          Использовано в игре
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-heading font-semibold text-lg">
                          {instrument.renaissanceName}
                        </h4>
                        <p className="text-sm font-body text-muted-foreground leading-relaxed">
                          {instrument.renaissanceDescription}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 py-2">
                        <div className="h-px flex-1 bg-border" />
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <div className="h-px flex-1 bg-border" />
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-heading font-semibold text-lg text-primary">
                          {instrument.modernName}
                        </h4>
                        <p className="text-sm font-body text-muted-foreground leading-relaxed">
                          {instrument.modernDescription}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground font-body">
                Вы не использовали новые финансовые инструменты в своём путешествии. 
                Попробуйте ещё раз и изучите все возможности!
              </p>
            </Card>
          )}
        </div>

        {gameHistory.length > 0 && (
          <div className="space-y-4 fade-in" style={{ animationDelay: "600ms" }}>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-gold mb-2">
                История Прохождений
              </h3>
              <p className="text-sm text-muted-foreground font-body">
                Ваши последние {Math.min(gameHistory.length, 10)} игр
              </p>
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {gameHistory.slice(0, 10).map((record, index) => (
                <Card key={record.id} className="p-4 hover-elevate">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <p className="font-heading font-semibold text-sm">
                          {record.playerName}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3" />
                          {record.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {record.gameMode === "short" ? "Короткая" : record.gameMode === "medium" ? "Средняя" : "Полная"}
                        </Badge>
                        <Badge variant={record.endingType === "success" ? "default" : record.endingType === "failure" ? "destructive" : "secondary"} className="text-xs">
                          {record.endingType === "success" ? "✓ Успех" : record.endingType === "failure" ? "✗ Поражение" : "◆ Нейтраль"}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm font-body text-muted-foreground line-clamp-1">
                      {record.endingTitle}
                    </p>
                    <div className="flex items-center gap-3 text-xs flex-wrap">
                      <span className="flex items-center gap-1">
                        <Coins className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                        {record.finalMoney} флоринов
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-primary" />
                        {record.finalExperience} опыта
                      </span>
                      <span className="text-muted-foreground">
                        {record.choiceCount} выборов
                      </span>
                      {record.quizCorrect && (
                        <Badge variant="outline" className="text-xs bg-green-500/10">
                          ✓ Квиз
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="text-center pt-4 fade-in" style={{ animationDelay: "500ms" }}>
          <Button
            size="lg"
            onClick={onRestart}
            className="gap-2 font-heading tracking-wider"
            data-testid="button-restart-game"
          >
            <RotateCcw className="h-4 w-4" />
            Начать заново
          </Button>
        </div>

        <Card className="mt-8 p-6 bg-muted/50 fade-in" style={{ animationDelay: "600ms" }}>
          <div className="text-center space-y-3">
            <h4 className="font-heading font-semibold">Интересный факт</h4>
            <p className="text-sm font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Банк Медичи, основанный Джованни ди Биччи де Медичи в 1397 году, 
              стал одним из самых влиятельных финансовых институтов Европы. 
              Многие принципы и методы, которые они использовали — включая систему двойной записи, 
              векселя и диверсификацию — легли в основу современной банковской системы.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
