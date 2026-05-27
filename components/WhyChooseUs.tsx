"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookMarked,
  GraduationCap,
  Handshake,
  HeartHandshake,
  LineChart,
  Target,
} from "lucide-react";

const reasons = [
  { title: "Personalized accompaniment", icon: Handshake },
  { title: "Simple methods, real results", icon: Target },
  { title: "Practical training", icon: BookMarked },
  { title: "Friendly learning environment", icon: HeartHandshake },
  { title: "Progress step by step", icon: LineChart },
  { title: "Support for school, work, and daily communication", icon: GraduationCap },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-x-0 top-24 h-72 -skew-y-3 bg-burgundy-700/6 dark:bg-gold-500/6" />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-sm font-black text-burgundy-700 dark:text-gold-300">
            Why Choose Us
          </span>
          <h2 className="mt-5 font-display text-4xl font-black text-charcoal dark:text-cream md:text-6xl">
            Serious training with a friendly rhythm
          </h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/70 dark:text-cream/72">
            Methodes simples, resultats reels. Learn with structure, encouragement, and practice.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 p-3 shadow-maroon backdrop-blur-2xl dark:border-white/10 dark:bg-white/8"
          >
            <div className="relative aspect-[1/1] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/assets/why-supremacy.png"
                alt="Why choose Supremacy Course poster"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.52, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-3xl border border-white/60 bg-white/58 p-6 shadow-xl shadow-burgundy-900/5 backdrop-blur-2xl transition dark:border-white/10 dark:bg-white/8"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-burgundy-700 text-white shadow-maroon transition group-hover:bg-gold-500 group-hover:text-burgundy-900">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black leading-snug text-charcoal dark:text-cream">
                  {reason.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
