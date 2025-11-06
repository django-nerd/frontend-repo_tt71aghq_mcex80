import { Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 p-2 text-white shadow-inner shadow-white/30">
                <Rocket size={18} />
              </div>
              <div className="font-semibold tracking-tight text-white">
                Flames AI Studio
              </div>
            </a>
            <div className="hidden gap-6 text-sm text-white/80 md:flex">
              <a href="#features" className="hover:text-white transition-colors">Workflows</a>
              <a href="#tools" className="hover:text-white transition-colors">AI Tools</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl ring-1 ring-white/20 hover:bg-white/20 transition-colors"
            >
              <Sparkles size={16} />
              Get a demo
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
