"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

const phone = "034 78 868 33";
const phoneCompact = "0347886833";
const address = "Antanetibe-Ivato-Enceinte College SAMSRIAH SCHOOL";
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function Contact() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[2rem] bg-burgundy-700 px-6 py-12 text-white shadow-maroon md:px-12 md:py-16"
          >
            <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-gold-500/28 to-transparent" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold-300/35" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.26em] text-gold-300">
                  Ton succes, notre priorite
                </p>
                <h2 className="mt-4 font-display text-4xl font-black md:text-6xl">
                  Ready to improve your skills?
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/78">
                  Join Supremacy Course and start learning English, French, Word, PowerPoint,
                  and Excel with confidence.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <motion.a
                  href={`tel:${phoneCompact}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-4 text-base font-black text-burgundy-900 shadow-glow"
                >
                  <Phone className="h-5 w-5" />
                  Call {phone}
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/12 px-7 py-4 text-base font-black text-white backdrop-blur-xl"
                >
                  Find Us
                  <ArrowRight className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
            >
              <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-sm font-black text-burgundy-700 dark:text-gold-300">
                Contact
              </span>
              <h2 className="mt-5 font-display text-4xl font-black text-charcoal dark:text-cream md:text-6xl">
                Visit, call, or message SUPREMACY COURSE
              </h2>
              <p className="mt-5 text-lg leading-8 text-charcoal/70 dark:text-cream/72">
                We welcome students, beginners, and professionals preparing for work, school,
                exams, or personal improvement.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                className="glass rounded-3xl p-6"
              >
                <Phone className="h-7 w-7 text-burgundy-700 dark:text-gold-300" />
                <h3 className="mt-5 text-xl font-black text-charcoal dark:text-cream">Phone</h3>
                <p className="mt-2 text-charcoal/70 dark:text-cream/72">{phone}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.08 }}
                className="glass rounded-3xl p-6"
              >
                <MapPin className="h-7 w-7 text-burgundy-700 dark:text-gold-300" />
                <h3 className="mt-5 text-xl font-black text-charcoal dark:text-cream">Address</h3>
                <p className="mt-2 text-charcoal/70 dark:text-cream/72">
                  Antanetibe-Ivato-Enceinte College SAMSRIAH SCHOOL
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.14 }}
                className="glass sm:col-span-2 rounded-3xl p-5"
              >
                <div className="grid gap-3 sm:grid-cols-3">
                  <motion.a
                    href={`tel:${phoneCompact}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-burgundy-700 px-4 py-4 text-sm font-black text-white"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </motion.a>
                  <motion.a
                    href={`https://wa.me/${phoneCompact}`}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-4 text-sm font-black text-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </motion.a>
                  <motion.a
                    href={mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gold-500 px-4 py-4 text-sm font-black text-burgundy-900"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
