import type { WeatherData, WeatherAdvice } from '../types/weather';

export function getWeatherAdvice(weather: WeatherData): WeatherAdvice {
  const { temperature, condition, weatherCode, windSpeed } = weather;
  const conditionLower = condition.toLowerCase();

  // Check for precipitation (rain, drizzle, snow)
  if (
    conditionLower.includes('rain') || 
    conditionLower.includes('drizzle') || 
    conditionLower.includes('shower')
  ) {
    return {
      type: 'warning',
      title: '☔ Carry an Umbrella',
      message: 'Rain expected today! Don\'t forget your umbrella ☂️ and consider waterproof clothing. Roads may be slippery, so take care when traveling.'
    };
  }

  // Check for snow
  if (conditionLower.includes('snow')) {
    return {
      type: 'warning',
      title: '❄️ Wear Warm Clothes',
      message: 'Snowy conditions ahead! Dress warmly in layers 🧥🧣🧤 Watch for icy surfaces and allow extra travel time. Stay cozy!'
    };
  }

  // Check for thunderstorms
  if (conditionLower.includes('thunderstorm')) {
    return {
      type: 'warning',
      title: '⚡ Thunderstorm Alert',
      message: 'Storms expected! Stay indoors if possible 🏠 Avoid open areas and seek shelter during the storm. Carry an umbrella ☔ for sudden downpours.'
    };
  }

  // Check for fog
  if (conditionLower.includes('fog')) {
    return {
      type: 'warning',
      title: '🌫️ Foggy Conditions',
      message: 'Low visibility ahead! Drive carefully with fog lights and maintain safe distances. Allow extra time for your journey.'
    };
  }

  // Check for strong winds
  if (windSpeed > 30) {
    return {
      type: 'warning',
      title: '💨 Windy Weather',
      message: 'Strong winds expected! Secure loose items and be cautious of falling branches. Hold onto your hat! 🎩'
    };
  }

  // Check for cold temperatures
  if (temperature < 5) {
    return {
      type: 'info',
      title: '🧥 Wear Warm Clothes',
      message: 'It\'s cold outside! Dress warmly in layers and don\'t forget a jacket, scarf, and gloves 🧣🧤 Stay cozy and warm!'
    };
  }

  // Check for hot temperatures
  if (temperature > 30) {
    return {
      type: 'info',
      title: '💧 Stay Hydrated',
      message: 'Hot weather ahead! Drink plenty of water 🚰 and wear light, breathable clothing 👕 Avoid prolonged sun exposure during peak hours. Don\'t forget sunscreen! ☀️'
    };
  }

  // Default positive message for mild/clear weather
  return {
    type: 'positive',
    title: '✨ Great Weather!',
    message: 'Perfect conditions for outdoor activities! 🌤️ Enjoy your day and make the most of this beautiful weather!'
  };
}
