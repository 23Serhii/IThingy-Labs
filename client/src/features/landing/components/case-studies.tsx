"use client";

import React, { JSX, useMemo } from "react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Clock, Users, Server } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

// 1) типи
type BaseProject = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  media: string;
  daysSpent: number;
  avgDaysTypical: number;
  teamSize: number;
  techHighlights: string[];
  resultHighlights?: string[];
};

type VideoProject = BaseProject & {
  type: "video";
  poster?: string;
};

type ImageProject = BaseProject & {
  type: "image"; // gif рендеримо як image
};

type Project = VideoProject | ImageProject;

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  React.useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, [query]);
  return matches;
}

export function CaseStudies(): JSX.Element {
  const [active, setActive] = useState<number>(0); // default: DropSquad active (left wide)
  const { t } = useLang(); // 1. Отримуємо переклади
  const isDesktop = useMediaQuery("(min-width: 768px)"); // md breakpoint

  const gridTemplate = isDesktop
    ? active === 0
      ? "1.6fr 1fr 1fr"
      : active === 1
        ? "1fr 1.6fr 1fr"
        : "1fr 1fr 1.6fr"
    : "1fr"; // <-- одна колонка на мобільних

  // Перевірка на випадок, якщо словник ще не завантажився
  if (!t?.cases) return <></>;

  const projects: Project[] = useMemo(
    () => [
      {
        id: "dropsquad",
        title: t.cases.dropsquad.title,
        tags: [
          "Angular",
          "FastAPI",
          "Postgres",
          "Realtime",
          "WebSockets",
          "Docker",
          "Kubernetes",
          "Grafana",
        ],
        description: t.cases.dropsquad.desc,
        media: "/edited_dropsquad.mp4",
        poster: "/dropsquad-poster.jpg",
        type: "video",
        daysSpent: 42,
        avgDaysTypical: 60,
        teamSize: 2,
        techHighlights: ["Angular", "FastAPI", "Postgres", "Kubernetes"],
        resultHighlights: t.cases.dropsquad.results,
      },
      {
        id: "pow-search",
        title: t.cases.avesint.title,
        tags: ["Search", "Analytics", "Elasticsearch"],
        description: t.cases.avesint.desc,
        media: "/avesint.mp4",
        type: "video",
        daysSpent: 14,
        avgDaysTypical: 35,
        teamSize: 1,
        techHighlights: ["Qdrant", "Ollama", "TypeScript"],
        resultHighlights: t.cases.avesint.results,
      },
      {
        id: "tonsai",
        title: t.cases.tonsai.title,
        tags: ["Next.js", "GraphQL", "Postgres"],
        description: t.cases.tonsai.desc,
        media: "/tonsai.gif",
        type: "image",
        daysSpent: 30,
        avgDaysTypical: 68,
        teamSize: 2,
        techHighlights: ["Next.js", "GraphQL", "Kubernetes"],
        resultHighlights: t.cases.tonsai.results,
      },
    ],
    [t],
  ); // Масив перерахується автоматично, коли зміниться мова (t)

  const statBadge = (
    label: string,
    value: string,
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  ) => (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/40 border border-border text-xs font-medium">
      {Icon ? <Icon className="w-4 h-4 text-primary" /> : null}
      <span className="whitespace-nowrap">
        <strong className="font-semibold mr-1">{value}</strong>
        <span className="text-muted-foreground">{label}</span>
      </span>
    </div>
  );

  return (
    <section
      id="cases"
      className="py-24 relative grid-bg scroll-mt-24 md:scroll-mt-32 overflow-x-clip"
    >
      <div className="absolute inset-0 purple-pink-gradient -z-10 opacity-25 dark:opacity-35" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-14"
        >
          {/* ПЕРЕКЛАД ЗАГОЛОВКА ТА ПІДЗАГОЛОВКА */}
          <h2 className="text-4xl sm:text-5xl font-bold italic text-foreground">
            {t.cases.title}
          </h2>
          <div className="inline-flex items-center gap-2 text-muted-foreground mt-2">
            <ChevronRight className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">{t.cases.subtitle}</span>
            <ChevronRight className="h-5 w-5 text-primary" />
          </div>
        </motion.div>

        <div
          className="grid gap-6 sm:gap-8 items-stretch max-w-full"
          style={{
            display: "grid",
            gridTemplateColumns: gridTemplate,
            transition: "grid-template-columns 420ms cubic-bezier(.2,.9,.2,1)",
            width: "100%",
          }}
          aria-live="polite"
        >
          {projects.map((p, i) => {
            const isActive = i === active;
            const speedGain = Math.round(
              ((p.avgDaysTypical - p.daysSpent) / p.avgDaysTypical) * 100,
            );

            return (
              <motion.article
                key={p.id}
                layout
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 28,
                }}
                className="relative h-full cursor-pointer min-w-8"
                onClick={() => setActive(i)}
                role="button"
                aria-pressed={isActive}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
              >
                <div
                  className={[
                    "relative h-full rounded-2xl ring-1 shadow-[0_6px_24px_rgba(0,0,0,0.10)] border border-border/60 bg-card/80 dark:bg-card/50 backdrop-blur-sm transition-all duration-300 overflow-hidden flex flex-col",
                    isActive
                      ? "ring-primary/50 border-primary/40 shadow-lg"
                      : "hover:ring-primary/30 hover:border-primary/30",
                  ].join(" ")}
                >
                  <div className="aspect-[16/9] w-full rounded-t-2xl bg-muted/40 flex items-center justify-center border-b border-border/50 overflow-hidden relative">
                    {p.type === "video" ? (
                      <video
                        key={p.id}
                        src={p.media}
                        className="w-full h-full object-cover select-none"
                        poster={
                          p.type === "video"
                            ? (p.poster ?? "/sub1.png")
                            : undefined
                        }
                        playsInline
                        muted
                        autoPlay={isActive}
                        loop
                        controls={false}
                        preload="metadata"
                        onContextMenu={(e) => e.preventDefault()}
                        tabIndex={-1}
                        controlsList="nodownload nofullscreen noremoteplayback"
                        disablePictureInPicture
                        aria-hidden="true"
                      />
                    ) : (
                      <Image
                        src={p.media}
                        alt={p.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>

                  <div className="p-6 flex flex-col grow min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold mb-1 text-foreground truncate">
                          {p.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-3 truncate">
                          {p.tags.join(" · ")}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2 shrink-0">
                        {/* Лейбл "days" перекладемо як д/d залежно від мови */}
                        {statBadge(
                          t.nav.home === "Головна" ? "днів" : "days",
                          `${p.daysSpent}`,
                          Clock,
                        )}
                        {statBadge(
                          t.cases.engineers || "engineers",
                          `${p.teamSize}`,
                          Users,
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed break-words">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.techHighlights.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-md bg-background/30 border border-border text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Нижній блок, який з'являється при кліку (isActive) */}
                    {isActive ? (
                      <div className="mt-auto space-y-6">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="text-sm text-muted-foreground">
                              {t.cases.deliveryLabel}
                            </div>
                            <div className="text-lg font-semibold text-foreground">
                              {p.daysSpent}
                              {t.nav.home === "Головна" ? "д" : "d"} —{" "}
                              {speedGain}% {t.cases.faster}
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">
                              Team
                            </div>
                            <div className="text-lg font-semibold text-foreground">
                              {p.teamSize} {t.cases.engineers}
                            </div>
                          </div>
                        </div>
                        {p.resultHighlights && (
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                            {p.resultHighlights.map((r) => (
                              <li key={r} className="flex items-start gap-2">
                                <Server className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {/* КНОПКА ДЕТАЛЕЙ */}
                        <div className="pt-4 border-t border-border/40">
                          <a
                            href={
                              p.id === "avesint" || p.id === "pow-search"
                                ? "https://s23rhii.dev/projects/0"
                                : p.id === "dropsquad"
                                  ? "https://s23rhii.dev/projects/2"
                                  : "https://s23rhii.dev/projects/3"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all gap-2 group"
                          >
                            {t.nav.home === "Головна"
                              ? "Деталі проєкту"
                              : "View Project Details"}
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-auto">
                        <div className="text-xs text-primary font-medium flex items-center gap-1">
                          {t.nav.home === "Головна"
                            ? "Натисніть щоб розгорнути"
                            : "Click to expand"}{" "}
                          <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
