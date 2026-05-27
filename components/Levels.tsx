"use client";

import { motion } from "framer-motion";
import { Flag, Rocket, Sprout } from "lucide-react";

const levels = [
  {
    title: "Beginner",
    icon: Sprout,
    text: "Start with simple vocabulary, useful expressions, core computer actions, and clear habits.",
  },
  {
    title: "Intermediate",
    icon: Flag,
    text: "Build stronger grammar, confident speaking, structured writing, and practical Office workflows.",
  },
  {
    title: "Advanced",
    icon: Rocket,
    text: "Prepare for professional tasks, presentations, reports, academic communication, and real deadlines.",
  },
];

export default function Levels() {
  return (
    <section id="levels" className="py-20 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-sm font-black text-burgundy-700 dark:text-gold-300">
            Levels
          </span>
          <h2 className="mt-5 font-display text-4xl font-black text-charcoal dark:text-cream md:text-6xl">
            Apprenez pas a pas, from first lesson to confident practice
          </h2>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-gold-500 via-burgundy-700 to-gold-500 md:block lg:left-1/2" />
          <div className="grid gap-6">
            {levels.map((level, index) => (
              <motion.article
                key={level.title}
                initial={{ opacity: 0, x: index % 2 ? 36 : -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className={`relative grid items-center gap-6 lg:grid-cols-2 ${index % 2 ? "lg:[&>*:first-child]:col-start-2" : ""}`}
              >
                <div className="glass rounded-3xl p-7">
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gold-500 text-burgundy-900 shadow-glow">
                      <level.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.24em] text-burgundy-700/70 dark:text-gold-300/80">
                        Level {index + 1}
                      </p>
                      <h3 className="mt-2 font-display text-3xl font-black text-charcoal dark:text-cream">
                        {level.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-charcoal/70 dark:text-cream/72">
                        {level.text}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
