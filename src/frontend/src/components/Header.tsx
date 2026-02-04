import { APP_NAME, APP_TAGLINE } from '@/lib/branding';

export function Header() {
  return (
    <header className="border-b border-amber-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img 
              src="/assets/generated/weather-logo.dim_512x512.png" 
              alt={`${APP_NAME} Logo`}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
              {APP_NAME}
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground">{APP_TAGLINE}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
