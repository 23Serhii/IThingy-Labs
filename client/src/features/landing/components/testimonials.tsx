"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Lock, Clock, Database, Sparkles } from "lucide-react";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export function Testimonials() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Безпечне отримання контенту
  const content = t?.testimonials;
  if (!content) return null;

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 relative grid-bg scroll-mt-24 md:scroll-mt-32 overflow-x-clip"
    >
      {/* background */}
      <div className="absolute inset-0 purple-pink-gradient -z-10 opacity-20 dark:opacity-30" />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 px-1"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold italic text-foreground leading-tight">
            {content.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-[13px] sm:text-sm text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div
          className="
            grid max-w-6xl mx-auto gap-4 sm:gap-6 md:gap-6
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          "
        >
          {/* CTA card — перша на мобілці */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="
              order-1 sm:order-3 lg:order-3
              p-4 sm:p-6 rounded-xl md:rounded-lg border border-border bg-card/50 backdrop-blur-sm
              flex flex-col min-w-0
            "
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <h3 className="text-base sm:text-lg font-semibold text-foreground">
                {content.sprintCard.title}
              </h3>
            </div>

            <p className="text-[13px] sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              {content.sprintCard.desc}
            </p>

            <ul className="text-[13px] sm:text-sm mb-3 sm:mb-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Database className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span className="break-words">
                  {content.sprintCard.list[0]}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Lock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>{content.sprintCard.list[1]}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>{content.sprintCard.list[2]}</span>
              </li>
            </ul>

            <Button asChild size="lg" className="w-full">
              <Link href="/#contact">{content.sprintCard.btn}</Link>
            </Button>

            <div className="mt-3 text-center">
              <Link
                href="/whitepaper"
                className="text-[13px] text-muted-foreground underline hover:text-primary transition-colors"
              >
                {content.sprintCard.link}
              </Link>
            </div>
          </motion.div>

          {/* Business benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-2 sm:order-1 p-4 sm:p-6 rounded-xl md:rounded-lg border border-border bg-card/50 backdrop-blur-sm min-w-0"
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <h3 className="text-base sm:text-lg font-semibold">
                {content.deliveryCard.title}
              </h3>
            </div>
            <p className="text-[13px] sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              {content.deliveryCard.desc}
            </p>
            <ul className="text-[13px] sm:text-sm space-y-2 text-muted-foreground">
              {content.deliveryCard.list.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Security & privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="order-3 sm:order-2 p-4 sm:p-6 rounded-xl md:rounded-lg border border-border bg-card/50 backdrop-blur-sm min-w-0"
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <h3 className="text-base sm:text-lg font-semibold">
                {content.securityCard.title}
              </h3>
            </div>

            <p className="text-[13px] sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
              {content.securityCard.desc1}
            </p>

            <p className="text-[13px] sm:text-sm text-muted-foreground mb-2 leading-relaxed">
              {content.securityCard.desc2}
            </p>

            <p className="text-[13px] sm:text-sm text-muted-foreground">
              {content.securityCard.desc3}
            </p>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-3xl mx-auto text-center mt-8 sm:mt-10 text-[13px] sm:text-sm text-muted-foreground px-2"
        >
          <p className="leading-relaxed">{content.footer}</p>
        </motion.div>
      </div>
    </section>
  );
}
