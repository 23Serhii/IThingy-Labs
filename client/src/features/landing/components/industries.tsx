'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Server, ShieldCheck, Lock, ChevronLeft, ChevronRight } from 'lucide-react'

const industries = [
    {
        title: 'SaaS & Web Platforms',
        tags: ['React', 'Next.js', 'TypeScript', 'REST', 'GraphQL', 'Postgres', 'Kubernetes'],
        description:
            'Product-grade web apps and SaaS platforms — secure architecture, scalable APIs, and measurable product metrics to drive growth.',
    },
    {
        title: 'Marketplaces & E-commerce',
        tags: ['Stripe', 'Payments', 'Personalization', 'Search', 'Redis', 'Scaling'],
        description:
            'Fast-to-market commerce: checkout reliability, catalog performance, recommendation hooks and conversion optimization.',
    },
    {
        title: 'Realtime & Geolocation',
        tags: ['WebSockets', 'Streaming', 'Kafka', 'GeoJSON', 'Mapbox', 'Low-latency'],
        description:
            'Realtime scoring, mapping and notification systems — for live dashboards, incident tracking and location-aware features.',
    },
]

export function Industries() {
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    // Mobile carousel state/refs
    const railRef = useRef<HTMLDivElement | null>(null)
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        const onResize = () => {
            // keep slide aligned on resize
            const rail = railRef.current
            if (!rail) return
            const cards = Array.from(rail.querySelectorAll('[data-card]')) as HTMLElement[]
            const el = cards[idx]
            if (!el) return
            const left = el.offsetLeft - parseInt(getComputedStyle(rail).paddingLeft || '0', 10)
            rail.scrollTo({ left, behavior: 'auto' })
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [idx])

    const scrollToIdx = (i: number, smooth = true) => {
        const rail = railRef.current
        if (!rail) return
        const cards = Array.from(rail.querySelectorAll('[data-card]')) as HTMLElement[]
        const clamped = Math.max(0, Math.min(i, cards.length - 1))
        const el = cards[clamped]
        if (!el) return
        const left = el.offsetLeft - parseInt(getComputedStyle(rail).paddingLeft || '0', 10)
        rail.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' })
        setIdx(clamped)
    }

    // const prev = () => scrollToIdx(idx - 1)
    // const next = () => scrollToIdx(idx + 1)

    return (
        <section id="industries" className="py-24 relative" ref={ref}>
            {/* soft background */}
            <div className="absolute inset-0 purple-pink-gradient -z-10 opacity-25 dark:opacity-35" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto mb-16 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 italic text-foreground">
                        Beautiful products. Built fast. Built secure.
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We accelerate product delivery by using AI as a developer tool — not a data sink. Projects run in isolated client
                        containers with strict Zero-Retention and full audit trails, so speed never comes at the expense of privacy or ownership.
                    </p>

                    {/* Trust / benefits row */}
                    <div className="mt-6 flex flex-wrap gap-3 items-center justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 border border-border text-sm font-medium">
              <ShieldCheck className="h-4 w-4" />
              Zero Retention
            </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 border border-border text-sm font-medium">
              <Lock className="h-4 w-4" />
              Isolated client containers
            </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/50 border border-border text-sm font-medium">
              Compliance-ready (GDPR · ISO27001 · SOC2)
            </span>
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
                        Clients report faster delivery cycles and measurable savings — our AI-assisted workflows deliver ~30–40% time gains and
                        up to ~10% cost efficiency.
                    </p>
                </motion.div>

                {/* ===== Mobile carousel (<= md) ===== */}
                <div className="md:hidden relative">
                    <div
                        ref={railRef}
                        className="flex overflow-x-auto snap-x snap-mandatory pl-4 pr-4 gap-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
                        style={{ scrollBehavior: 'smooth' }}
                        onScroll={(e) => {
                            // update bullets index roughly based on scroll
                            const rail = e.currentTarget
                            const w = rail.clientWidth
                            const cards = Array.from(rail.querySelectorAll('[data-card]')) as HTMLElement[]
                            // find nearest card by center
                            let nearest = 0
                            let minDist = Number.POSITIVE_INFINITY
                            const center = rail.scrollLeft + w / 2
                            cards.forEach((el, i) => {
                                const elCenter = el.offsetLeft + el.offsetWidth / 2
                                const d = Math.abs(center - elCenter)
                                if (d < minDist) {
                                    minDist = d
                                    nearest = i
                                }
                            })
                            setIdx(nearest)
                        }}
                    >
                        {industries.map((item, i) => (
                            <motion.div
                                key={i}
                                data-card
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: 0.3, once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="snap-start shrink-0 w-[85%] first:ml-0"
                            >
                                <div className="h-full p-6 rounded-lg border border-border bg-card/60 backdrop-blur-sm transition-colors duration-300">
                                    <div className="mb-6 w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Server className="h-7 w-7 text-primary" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 text-foreground">{item.title}</h3>

                                    <div className="flex flex-wrap gap-2 mb-4 text-xs text-muted-foreground">
                                        {item.tags.map((tag, t) => (
                                            <span
                                                key={t}
                                                className="px-2 py-1 rounded-md bg-background/30 border border-border text-muted-foreground"
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>

                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="mt-4 flex items-center justify-between px-2">
                        <button
                            aria-label="Previous"
                            onClick={() => scrollToIdx(idx - 1)}
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card hover:bg-primary/10"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="flex gap-2">
                            {industries.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => scrollToIdx(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    className={`h-2.5 rounded-full transition-all ${i === idx ? 'w-6 bg-primary' : 'w-2.5 bg-border'}`}
                                />
                            ))}
                        </div>

                        <button
                            aria-label="Next"
                            onClick={() => scrollToIdx(idx + 1)}
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card hover:bg-primary/10"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* ===== Desktop grid (>= md) ===== */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {industries.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <div className="h-full p-6 rounded-lg border border-border bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10">
                                <div className="mb-6 w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                                    <Server className="h-8 w-8 text-primary" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>

                                <div className="flex flex-wrap gap-2 mb-4 text-xs text-muted-foreground">
                                    {item.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 rounded-md bg-background/30 border border-border text-muted-foreground"
                                        >
                      {tag}
                    </span>
                                    ))}
                                </div>

                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
