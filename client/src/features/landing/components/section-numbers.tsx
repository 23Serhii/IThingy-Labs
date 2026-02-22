"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../../../context/LanguageContext";

export function SectionNumbers() {
  const { t } = useLang(); // Отримуємо словник перекладів
  const [activeId, setActiveId] = useState("hero");
  const [hoverId, setHoverId] = useState<string | null>(null);
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Використовуємо useMemo, щоб масив оновлювався щоразу, коли змінюється мова (t)
  const sections = useMemo(
    () => [
      { id: "hero", number: "0", title: t.nav.hero },
      { id: "services", number: "1", title: t.nav.services },
      { id: "industries", number: "2", title: t.nav.industries },
      { id: "cases", number: "3", title: t.nav.cases },
      { id: "testimonials", number: "4", title: t.nav.testimonials },
      { id: "faq", number: "5", title: t.nav.faq },
      { id: "pricing", number: "6", title: t.nav.pricing },
      { id: "cta", number: "7", title: t.nav.cta },
      { id: "contact", number: "8", title: t.nav.contact },
    ],
    [t],
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isScrollingRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(entry.target.id);
      });
    }, options);

    // Спостерігаємо за секціями
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [sections]); // Додаємо sections в залежності, щоб при зміні мови обсервер перепідключився

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    isScrollingRef.current = true;
    setActiveId(id);

    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: "smooth" });

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] hidden md:block">
      <nav className="relative flex flex-col items-center py-4 px-2 rounded-full border border-border/40 bg-background/20 backdrop-blur-md shadow-2xl">
        <ul className="flex flex-col gap-3">
          {sections.map((s) => {
            const isActive = activeId === s.id;
            const isHovered = hoverId === s.id;

            return (
              <li
                key={s.id}
                className="relative flex items-center justify-center h-8 w-8 cursor-pointer group"
                onMouseEnter={() => setHoverId(s.id)}
                onMouseLeave={() => setHoverId(null)}
                onClick={() => scrollTo(s.id)}
              >
                {/* Анімований фон */}
                {(isActive || isHovered) && (
                  <motion.div
                    layoutId="active-highlight"
                    className={`absolute inset-0 rounded-full ${
                      isActive ? "bg-primary" : "bg-primary/20"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}

                <span
                  className={`relative z-30 text-[11px] font-black pointer-events-none transition-colors duration-200 ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {s.number}
                </span>

                {/* Tooltip з перекладом */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: -12 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="absolute right-full mr-2 px-2 py-1 rounded bg-background border border-border shadow-xl whitespace-nowrap pointer-events-none z-50"
                    >
                      <span className="text-[10px] uppercase font-bold text-foreground">
                        {s.title}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
