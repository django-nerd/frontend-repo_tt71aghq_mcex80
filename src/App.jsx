import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 text-center">
        <p className="text-white/70">© {new Date().getFullYear()} Flames AI Studio. All rights reserved.</p>
        <div className="text-xs text-white/50">Built with love, LLMs and a touch of glitter.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] [--grid:rgba(255,255,255,0.06)]">
      {/* Subtle glossy grid background */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.04), rgba(255,255,255,0.02)), radial-gradient(circle at 20% -10%, rgba(168,85,247,0.25), transparent 30%), radial-gradient(circle at 80% -10%, rgba(59,130,246,0.25), transparent 30%)",
        }}
      />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
