import { useState } from "react";
import { CheckCircle, XCircle, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface QuizScreenProps {
  termOfDay: { term: string; description: string };
  onComplete: (isCorrect: boolean) => void;
}

export function QuizScreen({ termOfDay, onComplete }: QuizScreenProps) {
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const isCorrectAnswer = userAnswer.toLowerCase().trim() === termOfDay.term.toLowerCase();

  const handleSubmitAnswer = () => {
    const correct = isCorrectAnswer;
    setIsCorrect(correct);
    setIsAnswered(true);
  };

  const handleContinue = () => {
    onComplete(isCorrect);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background flex items-center justify-center p-4 py-6 md:py-8">
      <div className="max-w-2xl w-full space-y-6 md:space-y-8">
        <div className="text-center space-y-3 fade-in">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gold">
            Тест Знаний
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 max-w-20 bg-primary/30" />
            <ScrollText className="h-4 w-4 md:h-5 md:w-5 text-primary/50" />
            <div className="h-px flex-1 max-w-20 bg-primary/30" />
          </div>
        </div>

        <Card className="renaissance-border fade-in" style={{ animationDelay: "100ms" }}>
          <CardContent className="p-4 md:p-8 space-y-4 md:space-y-6">
            <div className="space-y-3 text-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-heading font-semibold text-foreground">
                Вспомните финансовый инструмент
              </h2>
              <p className="text-sm md:text-base font-body text-muted-foreground">
                В начале игры вам был показан финансовый инструмент эпохи Ренессанса.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-md p-3 md:p-4 mt-3 md:mt-4">
                <p className="text-xs md:text-sm text-muted-foreground font-body mb-1 md:mb-2">Определение:</p>
                <p className="text-base md:text-lg font-body text-foreground italic break-words">
                  "{termOfDay.description}"
                </p>
              </div>
            </div>

            {isAnswered ? (
              <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                <div
                  className={`p-3 md:p-4 rounded-md border ${
                    isCorrect
                      ? "bg-green-500/10 border-green-500/30"
                      : "bg-red-500/10 border-red-500/30"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-5 w-5 md:h-6 md:w-6 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0 space-y-2">
                      <p
                        className={`text-base md:text-lg font-heading font-semibold ${
                          isCorrect
                            ? "text-green-700 dark:text-green-300"
                            : "text-red-700 dark:text-red-300"
                        }`}
                      >
                        {isCorrect ? "Верно!" : "Неправильно!"}
                      </p>
                      {!isCorrect && (
                        <p className="text-sm md:text-base font-body text-muted-foreground break-words">
                          Правильный ответ:{" "}
                          <span className="font-semibold text-foreground">
                            {termOfDay.term}
                          </span>
                        </p>
                      )}
                      <p className="text-xs md:text-sm font-body text-muted-foreground">
                        {isCorrect
                          ? "Вы получите +5 опыта и +15 флоринов за правильный ответ!"
                          : "К сожалению, вы потеряете 2 опыта и 5 флоринов."}
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={handleContinue}
                  className="w-full mt-3 md:mt-4"
                  data-testid="button-quiz-continue"
                  size="lg"
                >
                  Продолжить к результатам
                </Button>
              </div>
            ) : (
              <div className="space-y-3 pt-2 md:pt-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    placeholder="Введите ответ..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmitAnswer()}
                    data-testid="input-quiz-term"
                    className="font-body flex-1 text-sm md:text-base"
                    autoFocus
                  />
                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={!userAnswer.trim()}
                    data-testid="button-quiz-submit"
                    className="whitespace-nowrap text-sm md:text-base"
                  >
                    Проверить
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
