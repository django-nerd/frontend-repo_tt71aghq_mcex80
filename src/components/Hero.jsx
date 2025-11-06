import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[92vh] pt-24" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* glossy gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.35),rgba(255,255,255,0)_60%)]" />

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            Build smarter with animated AI workflows
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg text-white/80"
          >
            We design glossy, modern automations powered by cutting-edge models—shipped fast, measurable, and beautiful.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#features"
              className="rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold shadow-lg shadow-black/20 hover:shadow-black/30 active:scale-[0.99] transition"
            >
              Explore workflows
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl hover:bg-white/20 transition"
            >
              Book a discovery call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
