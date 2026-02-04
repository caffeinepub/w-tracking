import { Header } from './Header';
import { Footer } from './Footer';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
