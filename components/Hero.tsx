"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  FileSpreadsheet,
  FileText,
  Languages,
  Presentation,
  Sparkles,
} from "lucide-react";

const trustItems = ["Beginner Friendly", "Personalized Support", "Practical Lessons"];

const orbitCourses = [
  { label: "English", icon: BookOpenText, angle: -90, color: "text-sky-600" },
  { label: "Francais", icon: Languages, angle: -18, color: "text-burgundy-700" },
  { label: "Word", icon: FileText, angle: 54, color: "text-blue-600" },
  { label: "PowerPoint", icon: Presentation, angle: 126, color: "text-orange-600" },
  { label: "Excel", icon: FileSpreadsheet, angle: 198, color: "text-emerald-600" },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-x-hidden pb-20 pt-36 md:pb-28 md:pt-40">
      <div className="maroon-ribbon top-32" />
      <div className="curve-accent absolute right-[-140px] top-28 h-80 w-80 opacity-70" />
      <div className="curve-accent absolute bottom-10 left-[-150px] h-96 w-96 rotate-180 opacity-60" />

      <motion.div
        aria-hidden
        className="spark-field absolute inset-0 -z-10"
        initial="hidden"
        animate="visible"
      >
        {[...Array(18)].map((_, index) => (
          <motion.span
            key={index}
            style={{
              left: `${8 + ((index * 17) % 84)}%`,
              top: `${16 + ((index * 23) % 70)}%`,
            }}
            animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -16, 0] }}
            transition={{ duration: 4 + (index % 4), repeat: Infinity, delay: index * 0.18 }}
          />
        ))}
      </motion.div>

      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-white/58 px-4 py-2 text-sm font-bold text-burgundy-700 shadow-sm backdrop-blur-xl dark:bg-white/8 dark:text-gold-300"
          >
            <Sparkles className="h-4 w-4" />
            Language & Office Training Center
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="text-balance font-display text-5xl font-black leading-[1.03] text-charcoal dark:text-cream sm:text-6xl lg:text-7xl"
          >
            Learn English, French & Microsoft Office with{" "}
            <span className="gold-text">Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/72 dark:text-cream/76"
          >
            SUPREMACY COURSE helps learners improve communication and digital skills through
            simple methods, personalized support, and practical training. Apprenez pas a pas,
            avec confiance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-burgundy-700 px-7 py-4 text-base font-black text-white shadow-maroon transition hover:bg-burgundy-500"
            >
              Start Learning
              <ArrowRight className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="#courses"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center justify-center rounded-full border border-burgundy-700/18 bg-white/62 px-7 py-4 text-base font-black text-burgundy-700 shadow-sm backdrop-blur-xl transition hover:border-gold-500/70 dark:border-white/10 dark:bg-white/8 dark:text-cream"
            >
              View Courses
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {trustItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/58 px-4 py-2 text-sm font-bold text-charcoal/74 backdrop-blur-xl dark:border-white/10 dark:bg-white/8 dark:text-cream/78"
              >
                <BadgeCheck className="h-4 w-4 text-gold-500" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative min-h-[560px] overflow-visible sm:min-h-[660px] lg:min-h-[700px]"
        >
          <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-gradient-to-br from-burgundy-700 via-burgundy-500 to-gold-500 p-px shadow-maroon sm:h-[500px] sm:w-[500px] sm:rounded-[4rem]">
            <div className="relative h-full w-full overflow-hidden rounded-[3rem] bg-cream/86 p-8 backdrop-blur-2xl dark:bg-charcoal/82 sm:rounded-[4rem]">
              <Image
                src="/assets/language-choice.png"
                alt="Supremacy Course language training poster"
                fill
                sizes="(min-width: 1024px) 500px, 90vw"
                className="object-cover object-[center_72%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-burgundy-900/10 via-transparent to-burgundy-900/78 dark:from-black/22 dark:via-black/8 dark:to-black/78" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-burgundy-700 via-gold-500 to-burgundy-700 opacity-80" />
              <div className="absolute -right-16 top-16 h-44 w-44 rounded-full border border-gold-300/50" />
              <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full border border-burgundy-500/24" />
              <div className="absolute inset-x-8 bottom-8 z-10 text-center">
                <h2 className="font-display text-3xl font-black text-white drop-shadow-lg sm:text-4xl">
                  Skills for school, work & life
                </h2>
                <p className="mt-2 text-sm font-bold text-white/82 drop-shadow-md">
                  Languages plus practical office skills
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className="pointer-events-none absolute inset-0 z-30 [--orbit-radius:145px] sm:[--orbit-radius:218px] lg:[--orbit-radius:232px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {orbitCourses.map(({ label, icon: Icon, angle, color }) => (
              <div
                key={label}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateX(var(--orbit-radius)) rotate(-${angle}deg)`,
                }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  className="glass flex min-w-28 -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-3xl px-3 py-3 shadow-2xl sm:min-w-36 sm:gap-3 sm:px-4"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-white/12 sm:h-11 sm:w-11">
                    <Icon className={`h-5 w-5 ${color}`} />
                  </span>
                  <span className="text-xs font-black text-charcoal dark:text-cream sm:text-sm">
                    {label}
                  </span>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
