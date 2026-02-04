import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppLayout } from './components/AppLayout';
import { EmptyState } from './components/EmptyState';
import { LocationSearch } from './components/LocationSearch';
import { WeatherPanel } from './components/WeatherPanel';
import type { Place } from './types/weather';

const queryClient = new QueryClient();

function WeatherApp() {
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showSearch, setShowSearch] = useState(false);

  const handlePlaceSelect = (place: Place) => {
    setSelectedPlace(place);
    setShowSearch(false);
  };

  const handleNewSearch = () => {
    setShowSearch(true);
  };

  return (
    <AppLayout>
      {!selectedPlace && !showSearch && (
        <EmptyState onStartSearch={() => setShowSearch(true)} />
      )}
      
      {showSearch && !selectedPlace && (
        <div className="max-w-2xl mx-auto">
          <LocationSearch onPlaceSelect={handlePlaceSelect} />
        </div>
      )}
      
      {selectedPlace && (
        <WeatherPanel 
          place={selectedPlace} 
          onNewSearch={handleNewSearch}
        />
      )}
    </AppLayout>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherApp />
    </QueryClientProvider>
  );
}
