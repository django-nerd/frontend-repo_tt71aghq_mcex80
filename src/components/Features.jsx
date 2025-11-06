import { motion } from 'framer-motion';
import { Workflow, Cpu, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'Orchestrated Workflows',
    desc: 'Visual pipelines that connect LLMs, tools and data for repeatable outcomes.'
  },
  {
    icon: Cpu,
    title: 'Model Agnostic',
    desc: 'OpenAI, Anthropic, local models—choose what fits. We swap without friction.'
  },
  { icon: Zap, title: 'Real-time Automations', desc: 'Stream responses, trigger webhooks, and react to events instantly.' },
  { icon: Shield, title: 'Secure by Design', desc: 'Role-based controls, audit trails, and data governance baked in.' }
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Engineered for impact
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition-colors shadow-lg shadow-black/20"
            >
              <div className="inline-flex rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 p-2 text-white shadow-inner shadow-white/30">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
