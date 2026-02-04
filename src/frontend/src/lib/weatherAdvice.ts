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
      title: 'Rain Expected',
      message: 'Carry an umbrella and consider waterproof clothing. Roads may be slippery.'
    };
  }

  // Check for snow
  if (conditionLower.includes('snow')) {
    return {
      type: 'warning',
      title: 'Snowy Conditions',
      message: 'Dress warmly in layers. Watch for icy surfaces and allow extra travel time.'
    };
  }

  // Check for thunderstorms
  if (conditionLower.includes('thunderstorm')) {
    return {
      type: 'warning',
      title: 'Thunderstorm Alert',
      message: 'Stay indoors if possible. Avoid open areas and seek shelter during the storm.'
    };
  }

  // Check for fog
  if (conditionLower.includes('fog')) {
    return {
      type: 'warning',
      title: 'Foggy Conditions',
      message: 'Drive carefully with reduced visibility. Use fog lights and maintain safe distances.'
    };
  }

  // Check for strong winds
  if (windSpeed > 30) {
    return {
      type: 'warning',
      title: 'Windy Weather',
      message: 'Expect gusty winds. Secure loose items and be cautious of falling branches.'
    };
  }

  // Check for cold temperatures
  if (temperature < 5) {
    return {
      type: 'info',
      title: 'Cold Weather',
      message: 'Dress warmly in layers. Don\'t forget a jacket, scarf, and gloves.'
    };
  }

  // Check for hot temperatures
  if (temperature > 30) {
    return {
      type: 'info',
      title: 'Hot Weather',
      message: 'Stay hydrated and wear light clothing. Avoid prolonged sun exposure during peak hours.'
    };
  }

  // Default positive message for mild/clear weather
  return {
    type: 'positive',
    title: 'Great Weather!',
    message: 'Weather looks good. Perfect conditions for outdoor activities. Enjoy your day!'
  };
}
