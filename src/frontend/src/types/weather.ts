export interface Place {
  id: string;
  name: string;
  displayName: string;
  lat: number;
  lon: number;
}

export interface WeatherData {
  temperature: number;
  apparentTemperature: number;
  condition: string;
  weatherCode: number;
  windSpeed: number;
  humidity: number;
  pressure: number;
  visibility: number;
  isDay: boolean;
}

export interface WeatherAdvice {
  type: 'warning' | 'info' | 'positive';
  title: string;
  message: string;
}
