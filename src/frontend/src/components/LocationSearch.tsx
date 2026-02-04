import { useState } from 'react';
import { Search, MapPin, Loader2 } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { usePlaceSearch } from '../hooks/usePlaceSearch';
import type { Place } from '../types/weather';

interface LocationSearchProps {
  onPlaceSelect: (place: Place) => void;
}

export function LocationSearch({ onPlaceSelect }: LocationSearchProps) {
  const [query, setQuery] = useState('');
  const { data: places, isLoading, error, refetch } = usePlaceSearch(query);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      refetch();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-amber-200 dark:border-slate-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Find Your Location</CardTitle>
          <CardDescription>
            Enter a city name, address, or landmark to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="e.g., San Francisco, Tokyo, Paris..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 h-12 text-base"
                disabled={isLoading}
              />
            </div>
            <Button 
              type="submit" 
              size="lg"
              disabled={isLoading || !query.trim()}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                'Search'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>
            Failed to search for locations. Please try again.
          </AlertDescription>
        </Alert>
      )}

      {places && places.length > 0 && (
        <Card className="border-amber-200 dark:border-slate-700 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Select a Location</CardTitle>
            <CardDescription>
              Found {places.length} {places.length === 1 ? 'match' : 'matches'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {places.map((place) => (
              <button
                key={place.id}
                onClick={() => onPlaceSelect(place)}
                className="w-full text-left p-4 rounded-lg border border-amber-200 dark:border-slate-700 hover:bg-amber-50 dark:hover:bg-slate-800 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {place.name}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      {place.displayName}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>
      )}

      {places && places.length === 0 && query && !isLoading && (
        <Alert>
          <AlertDescription>
            No locations found for "{query}". Try a different search term.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
