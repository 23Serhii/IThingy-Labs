"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  priceLabel: string;
  features: string[];
  cta: { text: string; href: string; variant: string };
  highlight: boolean;
  footnote: string;
}

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  // Захист від помилок до завантаження словника
  if (!t?.pricing) return null;

  const plans: PricingPlan[] = t.pricing.plans;

  return (
    <section
      id="pricing"
      className="py-24 relative scroll-mt-24 md:scroll-mt-32"
      ref={ref}
    >
      <div className="absolute inset-0 purple-pink-gradient -z-10 opacity-18 dark:opacity-28" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold italic mb-4 text-foreground">
            {t.pricing.title}
          </h2>
          <p className="text-lg text-muted-foreground">{t.pricing.subtitle}</p>
        </motion.div>

        {/* Grid змінено на md:grid-cols-2 xl:grid-cols-4 для кращого відображення 4 карток */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-[90rem] mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative p-6 rounded-2xl flex flex-col h-full transition-all ${
                plan.highlight
                  ? "bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 shadow-lg scale-[1.02]"
                  : "bg-card/50 border border-border hover:border-primary/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    <Star className="w-4 h-4 fill-current" />{" "}
                    {t.pricing.recommended}
                  </span>
                </div>
              )}

              <div className="mb-6 flex-grow-0">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.subtitle}
                </p>
                <div className="text-xl font-bold text-foreground/90 border-b border-border/50 pb-4">
                  {plan.priceLabel}
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-foreground/80 leading-snug">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto space-y-4">
                {plan.cta.variant === "primary" ? (
                  <a
                    href={plan.cta.href}
                    className="flex items-center justify-center w-full py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity shadow-sm"
                  >
                    {plan.cta.text}
                  </a>
                ) : (
                  <a
                    href={plan.cta.href}
                    className="flex items-center justify-center w-full py-3 rounded-lg border border-border text-foreground bg-background/50 font-semibold hover:bg-card hover:border-primary/30 transition-all"
                  >
                    {plan.cta.text}
                  </a>
                )}
                <p className="text-xs text-muted-foreground leading-relaxed text-center">
                  {plan.footnote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center text-sm text-muted-foreground">
          <p>
            {t.pricing.footer.text}{" "}
            <a
              href="/contact?intent=enterprise"
              className="underline text-foreground font-medium hover:text-primary transition-colors"
            >
              {t.pricing.footer.linkText}
            </a>{" "}
            {t.pricing.footer.suffix}
          </p>
        </div>
      </div>
    </section>
  );
}
