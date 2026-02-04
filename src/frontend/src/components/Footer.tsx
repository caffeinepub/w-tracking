import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-amber-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1.5">
            © 2026. Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-amber-600 dark:text-amber-400 hover:underline"
            >
              caffeine.ai
            </a>
          </p>
          <p className="mt-2 text-xs">
            Weather data from{' '}
            <a 
              href="https://open-meteo.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Open-Meteo
            </a>
            {' • '}
            Location data from{' '}
            <a 
              href="https://www.openstreetmap.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline"
            >
              OpenStreetMap
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
