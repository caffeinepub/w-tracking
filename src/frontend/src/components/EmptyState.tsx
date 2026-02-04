import { Search } from 'lucide-react';
import { Button } from './ui/button';

interface EmptyStateProps {
  onStartSearch: () => void;
}

export function EmptyState({ onStartSearch }: EmptyStateProps) {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <div className="flex justify-center mb-6">
        <img 
          src="/assets/generated/weather-logo.dim_512x512.png" 
          alt="Weather Gizmos logo" 
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />
      </div>
      
      <div className="relative w-full max-w-2xl mx-auto">
        <img 
          src="/assets/generated/weather-hero.dim_1200x600.png" 
          alt="Weather Gizmos hero illustration" 
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
      </div>
      
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
          Check the Weather Anywhere
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Get real-time weather updates and personalized advice for any location. 
          Know what to wear, what to bring, and how to plan your day.
        </p>
      </div>
      
      <Button 
        size="lg" 
        onClick={onStartSearch}
        className="text-lg px-8 py-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all"
      >
        <Search className="w-5 h-5 mr-2" />
        Search Location
      </Button>
    </div>
  );
}
