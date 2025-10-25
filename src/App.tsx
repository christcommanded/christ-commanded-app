import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-deep-blue via-deep-blue/95 to-deep-blue/90 flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center gap-6 max-w-2xl text-center">
        <img src={reactLogo} className="h-20 animate-spin-slow" alt="React logo" />
        <h1 className="text-4xl font-bold text-gold">Christ Commanded Church</h1>
        <p className="text-lg text-white/80">
          Welcome to the Christ Commanded Church community. We are passionate about
          living out the teachings of Jesus and serving our neighbors with love and grace.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <a
            className="rounded-lg border border-gold/60 bg-white/10 px-4 py-3 transition hover:bg-white/20"
            href="https://christcommanded.church"
            target="_blank"
            rel="noreferrer"
          >
            Learn More
          </a>
          <a
            className="rounded-lg border border-transparent bg-gold px-4 py-3 font-semibold text-deep-blue transition hover:bg-gold/90"
            href="https://www.bible.com"
            target="_blank"
            rel="noreferrer"
          >
            Daily Scripture
          </a>
        </div>
        <p className="text-sm text-white/70">
          Built with Vite, React, TypeScript, and Tailwind CSS.
        </p>
      </div>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="absolute bottom-6 right-6 hidden sm:flex items-center gap-2 text-white/60 hover:text-white">
        <img src={viteLogo} className="h-6" alt="Vite logo" />
        <span>Powered by Vite</span>
      </a>
    </div>
  );
}

export default App;
