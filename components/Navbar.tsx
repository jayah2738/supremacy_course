"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Levels", href: "#levels" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-3xl border px-3 py-2.5 transition-all duration-300 sm:px-4 sm:py-3 md:px-5 ${
          scrolled
            ? "border-white/60 bg-white/72 shadow-lg shadow-burgundy-900/5 backdrop-blur-2xl dark:border-white/10 dark:bg-charcoal/72"
            : "border-white/50 bg-white/48 backdrop-blur-xl dark:border-white/10 dark:bg-white/7"
        }`}
      >
        <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Supremacy Course home">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-gold-500/35 bg-white shadow-sm sm:h-12 sm:w-12">
            <Image
              src="/assets/logo.jpeg"
              alt="Supremacy Course logo"
              fill
              sizes="48px"
              priority
              className="object-cover object-[center_32%]"
            />
          </span>
          <span className="hidden truncate text-sm font-black tracking-[0.16em] text-burgundy-700 dark:text-cream md:block">
            SUPREMACY COURSE
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-charcoal/74 transition hover:bg-burgundy-700/8 hover:text-burgundy-700 dark:text-cream/78 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <motion.a
            href="tel:0347886833"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="hidden items-center gap-2 rounded-full bg-burgundy-700 px-5 py-3 text-sm font-bold text-white shadow-maroon transition hover:bg-burgundy-500 xl:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </motion.a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/70 text-burgundy-700 backdrop-blur-xl transition hover:border-gold-500 dark:border-white/10 dark:bg-white/10 dark:text-cream lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/60 bg-white/90 p-3 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-charcoal/92 lg:hidden"
          >
            <div className="grid gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-charcoal transition hover:bg-gold-500/12 dark:text-cream"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0347886833"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-burgundy-700 px-4 py-3 text-sm font-bold text-white"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
