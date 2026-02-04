import { MapPin, Thermometer, Droplets, Wind, Eye, Gauge, Loader2, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { useCurrentWeather } from '../hooks/useCurrentWeather';
import { getWeatherAdvice } from '../lib/weatherAdvice';
import { AdviceBanner } from './AdviceBanner';
import type { Place } from '../types/weather';

interface WeatherPanelProps {
  place: Place;
  onNewSearch: () => void;
}

export function WeatherPanel({ place, onNewSearch }: WeatherPanelProps) {
  const { data: weather, isLoading, error, refetch } = useCurrentWeather(place.lat, place.lon);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="border-amber-200 dark:border-slate-700 shadow-lg">
          <CardContent className="flex items-center justify-center py-16">
            <div className="text-center space-y-4">
              <Loader2 className="w-12 h-12 animate-spin text-amber-600 dark:text-amber-400 mx-auto" />
              <p className="text-muted-foreground">Loading weather data...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="max-w-4xl mx-auto space-y-4">
        <Alert variant="destructive">
          <AlertTitle>Failed to Load Weather</AlertTitle>
          <AlertDescription>
            We couldn't fetch the weather data for this location. Please try again.
          </AlertDescription>
        </Alert>
        <div className="flex gap-2 justify-center">
          <Button onClick={() => refetch()} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Retry
          </Button>
          <Button onClick={onNewSearch}>
            Search Another Location
          </Button>
        </div>
      </div>
    );
  }

  const advice = getWeatherAdvice(weather);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Location Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6 text-amber-600 dark:text-amber-400" />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {place.name}
            </h2>
            <p className="text-sm text-muted-foreground">{place.displayName}</p>
          </div>
        </div>
        <Button onClick={onNewSearch} variant="outline" size="lg">
          <MapPin className="w-4 h-4 mr-2" />
          Change Location
        </Button>
      </div>

      {/* Advice Banner */}
      <AdviceBanner advice={advice} weather={weather} />

      {/* Main Weather Card */}
      <Card className="border-amber-200 dark:border-slate-700 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl">Current Weather</CardTitle>
          <CardDescription>Real-time conditions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Temperature Display */}
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30">
                <Thermometer className="w-12 h-12 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-bold text-foreground">
                  {Math.round(weather.temperature)}°
                </p>
                <p className="text-lg text-muted-foreground mt-1">
                  Feels like {Math.round(weather.apparentTemperature)}°
                </p>
              </div>
            </div>

            {/* Weather Condition */}
            <div className="flex flex-col justify-center">
              <Badge variant="secondary" className="text-lg px-4 py-2 w-fit">
                {weather.condition}
              </Badge>
              <p className="text-sm text-muted-foreground mt-2">
                {weather.isDay ? '☀️ Daytime' : '🌙 Nighttime'}
              </p>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Additional Details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Wind className="w-4 h-4" />
                <span className="text-sm">Wind</span>
              </div>
              <p className="text-xl font-semibold">{Math.round(weather.windSpeed)} km/h</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Droplets className="w-4 h-4" />
                <span className="text-sm">Humidity</span>
              </div>
              <p className="text-xl font-semibold">{weather.humidity}%</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Gauge className="w-4 h-4" />
                <span className="text-sm">Pressure</span>
              </div>
              <p className="text-xl font-semibold">{weather.pressure} hPa</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Eye className="w-4 h-4" />
                <span className="text-sm">Visibility</span>
              </div>
              <p className="text-xl font-semibold">{(weather.visibility / 1000).toFixed(1)} km</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
