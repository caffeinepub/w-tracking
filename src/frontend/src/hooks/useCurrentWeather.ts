import { useQuery } from '@tanstack/react-query';
import { fetchCurrentWeather } from '../services/weatherApi';

export function useCurrentWeather(lat: number, lon: number) {
  return useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () => fetchCurrentWeather(lat, lon),
    staleTime: 10 * 60 * 1000, // 10 minutes
    retry: 2
  });
}
