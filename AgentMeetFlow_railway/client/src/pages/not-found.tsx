import { Link } from "wouter";
import { MapPin, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background via-card to-background">
      <Card className="max-w-md w-full p-8 renaissance-border text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-muted">
              <MapPin className="h-8 w-8 text-muted-foreground" />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-heading font-bold text-gold">
              Путь потерян
            </h1>
            <p className="font-body text-muted-foreground">
              Вы заблудились на улицах Флоренции. Эта страница не существует.
            </p>
          </div>
          
          <Link href="/">
            <Button className="gap-2 font-heading" data-testid="button-go-home">
              <Home className="h-4 w-4" />
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
