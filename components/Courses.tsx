"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpenText, FileSpreadsheet, Languages } from "lucide-react";

const courses = [
  {
    title: "English Course",
    description: "Speak clearly, understand better, and build confidence in daily conversation.",
    icon: BookOpenText,
    image: "/assets/english-practice.png",
    imageAlt: "English speaking practice poster",
    skills: ["Speaking practice", "Grammar", "Vocabulary", "Listening", "Reading", "Daily conversation"],
  },
  {
    title: "French Course",
    description: "Improve communication for school, exams, professional life, and personal growth.",
    icon: Languages,
    image: "/assets/french-flag.png",
    imageAlt: "French course flag visual",
    skills: ["Communication", "Grammar", "Writing", "Reading", "Pronunciation", "Academic French"],
  },
  {
    title: "Microsoft Office Course",
    description: "Practice Word, PowerPoint, and Excel with real-life office tasks.",
    icon: FileSpreadsheet,
    image: "/assets/language-choice.png",
    imageAlt: "Supremacy Course practical learning visual",
    skills: ["Microsoft Word", "PowerPoint", "Excel", "Practical exercises", "Office tasks", "Achievement badges"],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16 },
  },
};

const item = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function Courses() {
  return (
    <section id="courses" className="relative overflow-hidden py-20 md:py-28">
      <div className="maroon-ribbon bottom-24" />
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-sm font-black text-burgundy-700 dark:text-gold-300">
            Our Courses
          </span>
          <h2 className="mt-5 font-display text-4xl font-black text-charcoal dark:text-cream md:text-6xl">
            Choose the skill that moves you forward
          </h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/70 dark:text-cream/72">
            Practical lessons, clear steps, and friendly support for students, beginners, and professionals.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {courses.map((course) => (
            <motion.article
              key={course.title}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.28 }}
              className="group relative overflow-hidden rounded-3xl border border-white/64 bg-white/62 p-7 shadow-xl shadow-burgundy-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-white/8"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-burgundy-700 via-gold-500 to-burgundy-700 opacity-80" />
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
              </div>
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/60 bg-burgundy-700/10 shadow-lg dark:border-white/10">
                <Image
                  src={course.image}
                  alt={course.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/48 via-transparent to-transparent" />
              </div>
              <div className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-burgundy-700 text-white shadow-maroon">
                <course.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-3xl font-black text-charcoal dark:text-cream">
                {course.title}
              </h3>
              <p className="mt-4 min-h-20 text-base leading-7 text-charcoal/68 dark:text-cream/70">
                {course.description}
              </p>
              <ul className="mt-6 grid gap-3">
                {course.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm font-bold text-charcoal/76 dark:text-cream/78">
                    <span className="h-2 w-2 rounded-full bg-gold-500 shadow-[0_0_14px_rgba(217,161,42,0.8)]" />
                    {skill}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-burgundy-700/18 bg-white/72 px-5 py-3 text-sm font-black text-burgundy-700 transition hover:border-gold-500/70 dark:border-white/10 dark:bg-white/10 dark:text-cream"
              >
                Learn More
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
