import type { WeatherData } from '../types/weather';

interface OpenMeteoResponse {
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    weather_code: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
    surface_pressure: number;
    visibility: number;
    is_day: number;
  };
}

// WMO Weather interpretation codes
const weatherCodeMap: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Foggy',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Light freezing rain',
  67: 'Heavy freezing rain',
  71: 'Slight snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  77: 'Snow grains',
  80: 'Slight rain showers',
  81: 'Moderate rain showers',
  82: 'Violent rain showers',
  85: 'Slight snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail'
};

export async function fetchCurrentWeather(lat: number, lon: number): Promise<WeatherData> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m,surface_pressure,visibility,is_day`;
  
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const data: OpenMeteoResponse = await response.json();
  const current = data.current;

  return {
    temperature: current.temperature_2m,
    apparentTemperature: current.apparent_temperature,
    condition: weatherCodeMap[current.weather_code] || 'Unknown',
    weatherCode: current.weather_code,
    windSpeed: current.wind_speed_10m,
    humidity: current.relative_humidity_2m,
    pressure: current.surface_pressure,
    visibility: current.visibility,
    isDay: current.is_day === 1
  };
}
