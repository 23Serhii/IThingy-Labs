"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Plus,
  X,
  ChevronUp,
  ChevronDown,
  Server,
  Database,
  ShieldCheck,
  Lock,
  Rocket,
  Users,
  Code,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";

/* --- Helper для іконок --- */
const iconForTitle = (title: string = "") => {
  const t = title.toLowerCase();
  if (
    t.includes("discover") ||
    t.includes("дослідження") ||
    t.includes("аудит")
  )
    return Users;
  if (t.includes("design") || t.includes("дизайн")) return Code;
  if (t.includes("secure build") || t.includes("розробка")) return Server;
  if (t.includes("harden") || t.includes("захист")) return ShieldCheck;
  if (t.includes("launch") || t.includes("запуск")) return Rocket;
  if (t.includes("grow") || t.includes("ріст")) return Database;
  return Server;
};

/* --- ComparisonTable --- */
function ComparisonTable() {
  const { t } = useLang();

  // Безпечне отримання даних з фолбеком на порожні масиви
  const rows = t?.faq?.comparison?.rows || [];
  const metrics = t?.faq?.comparison?.metrics || [
    "Metric",
    "Typical outsourcer",
    "Us",
    "Why it matters",
  ];

  if (!rows.length) return null;

  return (
    <div className="mt-4 overflow-x-auto rounded-md border border-border bg-card/30 p-3">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
            <th className="p-2">{metrics[0]}</th>
            <th className="p-2">{metrics[1]}</th>
            <th className="p-2">{metrics[2]}</th>
            <th className="p-2">{metrics[3]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r: any, idx: number) => (
            <tr
              key={idx}
              className="align-top border-b border-border/10 last:border-0"
            >
              <td className="p-2 font-medium">{r.m}</td>
              <td className="p-2 text-muted-foreground">{r.o}</td>
              <td className="p-2">{r.u}</td>
              <td className="p-2 text-muted-foreground">{r.n}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Безпечне отримання даних (захист від undefined)
  const steps = t?.faq?.steps || [];
  const questions = t?.faq?.questions || [];
  const step = steps[active];

  // Якщо дані ще вантажаться, не ламаємо сторінку
  if (!step) return null;

  const Icon = iconForTitle(step.title);

  // Визначаємо мову за непрямими ознаками для кнопок, яких немає в словнику
  const isUa = t?.nav?.contact === "Контакти";

  return (
    <>
      {/* --- СЕКЦІЯ FLOW --- */}
      <section
        id="our-flow"
        ref={ref}
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden outline-none"
        tabIndex={-1}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight")
            setActive((a) => Math.min(a + 1, steps.length - 1));
          if (e.key === "ArrowLeft") setActive((a) => Math.max(a - 1, 0));
        }}
      >
        <div className="absolute inset-0 -z-10 purple-pink-gradient opacity-25 dark:opacity-40" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold italic mb-4"
          >
            {t?.faq?.flowTitle}
          </motion.h2>

          <div className="mx-auto max-w-2xl text-center mb-10">
            <p className="text-muted-foreground">{t?.faq?.flowSubtitle}</p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium">
              {t?.faq?.stepIndicator
                ? t.faq.stepIndicator
                    .replace("{current}", (active + 1).toString())
                    .replace("{total}", steps.length.toString())
                : `Step ${active + 1} of ${steps.length}`}
            </div>
          </div>

          {/* Mobile Stepper */}
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <button
              onClick={() => setActive((a) => Math.max(a - 1, 0))}
              className="px-3 py-2 border rounded-md disabled:opacity-50 text-sm font-medium transition-colors hover:bg-accent"
              disabled={active === 0}
            >
              {isUa ? "Назад" : "Prev"}
            </button>
            <div className="flex gap-2 overflow-x-auto no-scrollbar mx-2">
              {steps.map((s: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-9 min-w-9 flex-shrink-0 rounded-md font-bold transition ${
                    i === active
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border hover:border-primary/50"
                  }`}
                >
                  {s.number}
                </button>
              ))}
            </div>
            <button
              onClick={() =>
                setActive((a) => Math.min(a + 1, steps.length - 1))
              }
              className="px-3 py-2 border rounded-md disabled:opacity-50 text-sm font-medium transition-colors hover:bg-accent"
              disabled={active === steps.length - 1}
            >
              {isUa ? "Далі" : "Next"}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[96px_1fr_384px] gap-8 items-start">
            {/* Desktop Nav */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/60 -translate-x-1/2" />
              </div>
              {steps.map((s: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`relative z-10 w-14 h-14 rounded-xl flex items-center justify-center font-bold transition-all ${
                    i === active
                      ? "bg-primary text-primary-foreground ring-4 ring-primary/20 shadow-md scale-105"
                      : "bg-card border hover:border-primary/40 hover:scale-105"
                  }`}
                >
                  {s.number}
                </button>
              ))}
            </div>

            {/* Content Card */}
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-background/60 backdrop-blur-md border border-border/80 p-6 lg:p-8 rounded-xl shadow-sm"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-20 h-20 lg:w-28 lg:h-28 flex-shrink-0 flex items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Icon size={40} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold">
                      {step.number} — {step.title}
                    </h3>
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="flex items-center gap-2 text-sm border px-2 py-1 rounded hover:bg-accent transition-colors"
                    >
                      {expanded ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    {expanded && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-muted-foreground mb-6"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">
                        {t.faq.processesTitle || "Processes"}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {step.processes.map((p: string) => (
                          <span
                            key={p}
                            className="px-3 py-1 bg-card/80 border rounded-md text-sm shadow-sm"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">
                        {t.faq.deliverablesTitle || "Deliverables"}
                      </h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((d: string) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">●</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <AnimatePresence>
                    {active === 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-8 border-t border-border/50 pt-6 overflow-hidden"
                      >
                        <h5 className="text-sm font-semibold mb-4 text-primary">
                          {t.faq.comparison.title}
                        </h5>
                        <ComparisonTable />
                        <div className="mt-4 flex gap-3">
                          <a
                            href="/whitepaper"
                            className="text-sm underline hover:text-primary transition-colors"
                          >
                            {t.faq.comparison.whitepaper}
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Тут беремо індивідуальні whyDesc і whyPoints з конкретного кроку (step) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active} // анімуємо сайдбар при зміні активного кроку
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 bg-card/50 border rounded-lg"
                >
                  <h4 className="font-semibold mb-2">{t.faq.whyTitle}</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {step.whyDesc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {step.whyPoints?.map((point: string, idx: number) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">—</span> {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <div className="p-6 bg-card/50 border rounded-lg">
                <h5 className="font-semibold mb-2">{t.faq.ctaTitle}</h5>
                <p className="text-sm text-muted-foreground mb-4">
                  {t.faq.ctaDesc}
                </p>
                <a
                  href="#contact"
                  className="block w-full py-2 bg-primary text-primary-foreground text-center rounded-md font-bold hover:opacity-90 transition-opacity shadow-sm"
                >
                  {t.faq.ctaBtn}
                </a>
              </div>

              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1.5 bg-card/60 border rounded-full text-xs flex items-center gap-2 shadow-sm">
                  <ShieldCheck size={14} className="text-primary" />{" "}
                  {t.faq.badges.zero}
                </span>
                <span className="px-3 py-1.5 bg-card/60 border rounded-full text-xs flex items-center gap-2 shadow-sm">
                  <Lock size={14} className="text-primary" />{" "}
                  {t.faq.badges.isolated}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- СЕКЦІЯ FAQ --- */}
      <section id="faq" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold italic text-center mb-12"
          >
            {t.faq.faqTitle}
          </motion.h2>

          <div className="space-y-4">
            {questions.map((item: any, index: number) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "border-primary/50 bg-primary/5 shadow-md"
                      : "border-border bg-card/30 hover:border-primary/30 hover:bg-card/50"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between"
                  >
                    <span
                      className={`text-lg font-semibold pr-4 transition-colors ${
                        isOpen ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.q}
                    </span>

                    {/* Анімований хрестик */}
                    <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <motion.span
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute h-0.5 w-5 bg-primary rounded-full"
                      />
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 90 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute h-0.5 w-5 bg-primary rounded-full"
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                      >
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-primary/10 pt-4 mt-2">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            <p>
              {t.faq.footer.text}{" "}
              <a
                href="/contact"
                className="text-foreground hover:text-primary underline transition-colors"
              >
                {t.faq.footer.contact}
              </a>{" "}
              {t.faq.footer.or}{" "}
              <a
                href="/contact?intent=secure-sprint"
                className="text-foreground hover:text-primary underline transition-colors"
              >
                {t.faq.footer.sprint}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
