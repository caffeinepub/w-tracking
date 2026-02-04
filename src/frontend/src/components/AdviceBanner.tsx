import { AlertCircle, Umbrella, Wind, Snowflake, Sun, CloudRain, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import type { WeatherData, WeatherAdvice } from '../types/weather';

interface AdviceBannerProps {
  advice: WeatherAdvice;
  weather: WeatherData;
}

export function AdviceBanner({ advice, weather }: AdviceBannerProps) {
  const getIcon = () => {
    if (advice.type === 'warning') {
      if (weather.condition.toLowerCase().includes('rain') || weather.condition.toLowerCase().includes('drizzle')) {
        return <Umbrella className="w-5 h-5" />;
      }
      if (weather.condition.toLowerCase().includes('snow')) {
        return <Snowflake className="w-5 h-5" />;
      }
      if (weather.windSpeed > 30) {
        return <Wind className="w-5 h-5" />;
      }
      return <AlertTriangle className="w-5 h-5" />;
    }
    if (advice.type === 'info') {
      return <AlertCircle className="w-5 h-5" />;
    }
    return <Sun className="w-5 h-5" />;
  };

  const getVariant = () => {
    if (advice.type === 'warning') return 'destructive';
    return 'default';
  };

  const getBgClass = () => {
    if (advice.type === 'warning') {
      return 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900';
    }
    if (advice.type === 'info') {
      return 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900';
    }
    return 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900';
  };

  return (
    <Alert className={getBgClass()}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          {getIcon()}
        </div>
        <div className="flex-1">
          <AlertTitle className="text-lg font-semibold mb-1">
            {advice.title}
          </AlertTitle>
          <AlertDescription className="text-base">
            {advice.message}
          </AlertDescription>
        </div>
      </div>
    </Alert>
  );
}
