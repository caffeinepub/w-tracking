import { useQuery } from '@tanstack/react-query';
import { searchPlaces } from '../services/geocoding';

export function usePlaceSearch(query: string) {
  return useQuery({
    queryKey: ['places', query],
    queryFn: () => searchPlaces(query),
    enabled: false, // Only run when explicitly triggered
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1
  });
}
