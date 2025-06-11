import "@/styles/globals.scss";
import { Moon, Sun } from "lucide-react";
// import { ErrorBoundary } from './components/ErrorBoundary'
import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { ErrorBoundary } from "./components/ErrorBoundary";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md border hover:bg-accent transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-mono">My App</h1>
          <ThemeToggle />
        </div>
      </header>
      <main className="p-4 max-w-4xl mx-auto">
        <div className="grid gap-6">
          <div className="card">
            <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
            <p className="text-primary">SFX app</p>
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="system">
        <AppContent />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
