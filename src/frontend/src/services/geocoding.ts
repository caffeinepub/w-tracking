import type { Place } from '../types/weather';

interface NominatimResult {
  place_id: number;
  display_name: string;
  name?: string;
  lat: string;
  lon: string;
  address?: {
    city?: string;
    town?: string;
    village?: string;
    municipality?: string;
    county?: string;
    state?: string;
    country?: string;
  };
}

export async function searchPlaces(query: string): Promise<Place[]> {
  if (!query.trim()) {
    return [];
  }

  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=5&addressdetails=1`;
  
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'WeatherWise/1.0'
    }
  });

  if (!response.ok) {
    throw new Error('Failed to search locations');
  }

  const results: NominatimResult[] = await response.json();

  return results.map((result) => {
    // Extract a meaningful name from the result
    let name = result.name || '';
    if (!name && result.address) {
      name = result.address.city || 
             result.address.town || 
             result.address.village || 
             result.address.municipality || 
             result.address.county || 
             '';
    }
    
    // Fallback to first part of display name if no name found
    if (!name) {
      name = result.display_name.split(',')[0];
    }

    return {
      id: result.place_id.toString(),
      name,
      displayName: result.display_name,
      lat: parseFloat(result.lat),
      lon: parseFloat(result.lon)
    };
  });
}
