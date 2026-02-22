"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Monitor,
  Globe,
  ShoppingCart,
  Server,
  Database,
  ShieldCheck,
  Lock,
  ChevronRight,
  ChevronLeft,
  Users,
  Code,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";

// Іконки йдуть у тому ж порядку, що й масив items у словнику
const serviceIcons = [
  Monitor,
  Globe,
  Users,
  Code,
  Server,
  Database,
  ShoppingCart,
  ShieldCheck,
];

interface ServiceItem {
  title: string;
  description: string;
}

export function Services() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // --- Mobile carousel refs/state
  const railRef = useRef<HTMLDivElement | null>(null);
  const [idx, setIdx] = useState(0);

  // Безпечне отримання даних зі словника
  const content = t?.servicesSection;
  const items: ServiceItem[] = content?.items || [];

  // on resize, keep snap aligned
  useEffect(() => {
    if (!items.length) return;
    const onResize = () => scrollToIdx(idx, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [idx, items.length]);

  const scrollToIdx = (i: number, smooth = true) => {
    const rail = railRef.current;
    if (!rail || items.length === 0) return;
    const cards = Array.from(
      rail.querySelectorAll("[data-card]"),
    ) as HTMLElement[];
    const clamped = Math.max(0, Math.min(i, cards.length - 1));
    const el = cards[clamped];
    if (!el) return;
    const left =
      el.offsetLeft -
      parseInt(window.getComputedStyle(rail).paddingLeft || "0", 10);
    rail.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
    setIdx(clamped);
  };

  const prev = () => scrollToIdx(idx - 1);
  const next = () => scrollToIdx(idx + 1);

  // Якщо дані ще не завантажились, не рендеримо секцію
  if (!content) return null;

  return (
    <section
      id="services"
      className="py-24 relative grid-bg scroll-mt-24 md:scroll-mt-32"
      ref={ref}
    >
      {/* background */}
      <div className="absolute inset-0 purple-pink-gradient -z-10 opacity-25 dark:opacity-35" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
            <ChevronRight className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {content.badge}
            </span>
            <ChevronRight className="h-4 w-4 text-primary" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 italic text-foreground">
            {content.title}
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.subtitle}
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 items-center justify-center mt-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-card/50 border border-border text-foreground">
              <ShieldCheck className="h-4 w-4 text-foreground" />
              {content.badges.zero}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-card/50 border border-border text-foreground">
              <Lock className="h-4 w-4 text-foreground" />
              {content.badges.isolated}
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-card/50 border border-border text-foreground">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </svg>
              {content.badges.compliance}
            </span>
          </div>
        </motion.div>

        {/* ===== Mobile carousel (<= md) ===== */}
        <div className="md:hidden relative">
          {/* Rail */}
          <div
            ref={railRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-pl-4 pl-1 pr-1 gap-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ scrollBehavior: "smooth" }}
            onScroll={(e) => {
              // update bullet index lazily
              const rail = e.currentTarget;
              const w = rail.clientWidth;
              const x = rail.scrollLeft;
              const approx = Math.round(x / (w - 0.15 * w)); // heuristic for 85% width
              setIdx(Math.max(0, Math.min(approx, items.length - 1)));
            }}
          >
            {items.map((service, i) => {
              // Отримуємо іконку по індексу (з фолбеком на Server)
              const Icon = serviceIcons[i] || Server;
              return (
                <motion.div
                  key={i}
                  data-card
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3, once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="snap-start shrink-0 w-[85%] first:ml-4 last:mr-4"
                >
                  <div className="h-full p-6 rounded-lg border border-border bg-card/60 backdrop-blur-sm transition-colors duration-300">
                    <div className="mb-6 w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon
                        className="h-7 w-7 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-between px-2">
            <button
              aria-label="Previous"
              onClick={prev}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Bullets */}
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${i === idx ? "w-6 bg-primary" : "w-2.5 bg-border"}`}
                />
              ))}
            </div>

            <button
              aria-label="Next"
              onClick={next}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ===== Desktop grid (>= md) ===== */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((service, index) => {
            const Icon = serviceIcons[index] || Server;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <div className="h-full p-6 rounded-lg border border-border bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10">
                  <div className="mb-6 w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
