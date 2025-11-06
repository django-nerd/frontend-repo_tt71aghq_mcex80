import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl shadow-black/20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl font-bold text-white sm:text-4xl"
          >
            Let’s build your AI advantage
          </motion.h2>
          <p className="mt-3 text-center text-white/70">
            Tell us about your use case. We’ll come back with a tailored workflow and a quick demo.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 grid gap-4 sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <label className="text-sm text-white/80">Name</label>
              <input
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-xl focus:ring-2 focus:ring-white/30"
                placeholder="Alex Rivera"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-white/80">Company</label>
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-xl focus:ring-2 focus:ring-white/30"
                placeholder="Acme Inc."
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-white/80">Email</label>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-xl focus:ring-2 focus:ring-white/30"
                placeholder="you@company.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-white/80">What would you like to build?</label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-xl focus:ring-2 focus:ring-white/30"
                placeholder="Describe your workflow, tools, data sources and success criteria."
              />
            </div>
            <div className="sm:col-span-2 mt-2 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-black shadow-lg shadow-black/20 hover:shadow-black/30 transition"
              >
                <Mail size={18} />
                Request proposal
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
