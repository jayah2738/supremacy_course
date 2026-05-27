import Image from "next/image";
import { MapPin, MessageCircle, Phone, Share2, Users } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-burgundy-700/10 bg-white/46 py-10 backdrop-blur-xl dark:border-white/10 dark:bg-black/18">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-gold-500/40 bg-white shadow-lg shadow-burgundy-900/10 dark:border-gold-300/40">
            <Image
              src="/assets/logo.jpeg"
              alt="Supremacy Course logo"
              fill
              sizes="56px"
              className="object-cover object-[center_32%]"
            />
          </div>
          <div>
            <p className="text-lg font-black tracking-[0.16em] text-burgundy-700 dark:text-cream">
              SUPREMACY COURSE
            </p>
            <p className="mt-1 text-sm font-semibold text-charcoal/64 dark:text-cream/64">
              Your success, our priority.
            </p>
          </div>
        </div>

        <div className="grid gap-3 text-sm font-semibold text-charcoal/68 dark:text-cream/70">
          <a href="tel:0347886833" className="inline-flex items-center gap-2 hover:text-burgundy-700 dark:hover:text-gold-300">
            <Phone className="h-4 w-4" />
            034 78 868 33
          </a>
          <p className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" />
            Antanetibe-Ivato-Enceinte College SAMSRIAH SCHOOL
          </p>
        </div>
      </div>

      <div className="section-shell mt-8 flex flex-col gap-5 border-t border-burgundy-700/10 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-charcoal/58 dark:text-cream/58">
          Copyright {year} SUPREMACY COURSE. All rights reserved.
        </p>
        <div className="flex gap-3" aria-label="Social placeholders">
          {[Share2, MessageCircle, Users].map((Icon, index) => (
            <span
              key={index}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-burgundy-700/12 bg-white/58 text-burgundy-700 backdrop-blur-xl dark:border-white/10 dark:bg-white/8 dark:text-gold-300"
            >
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
