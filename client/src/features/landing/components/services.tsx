'use client'

import {motion, useInView} from 'framer-motion'
import {useRef, useState, useEffect} from 'react'
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
    Code
} from 'lucide-react'

const services = [
    {
        icon: Monitor, title: 'Secure Sprint — 4-week PoC',
        description: 'Fixed 4-week engagement: isolated PoC, working prototype, prioritized roadmap and security brief. Ideal for validating product fit before large investments.'
    },
    {
        icon: Globe, title: 'Product Delivery (Outsource)',
        description: 'End-to-end delivery from MVP to production: frontend, backend, APIs, CI/CD and monitoring. We focus on business outcomes and predictable releases.'
    },
    {
        icon: Users, title: 'Team Augmentation (Outstaff)',
        description: 'Dedicated engineers embedded in your process and repo. Fast ramp-up, flexible contracts, full code ownership retained by you.'
    },
    {
        icon: Code, title: 'AI-enabled Engineering (internal)',
        description: 'Human-led engineering accelerated by internal AI tools for tests, code reviews and refactors — higher throughput, fewer regressions.'
    },
    {
        icon: Server, title: 'Managed Infra & DevOps',
        description: 'CI/CD, deployments, observability, SLOs and runbooks. We operate production-ready pipelines and handle incident playbooks.'
    },
    {
        icon: Database, title: 'Data & Integrations',
        description: 'ETL/ELT, connectors and secure data pipelines. Preparing quality datasets and integrations for analytics and product features.'
    },
    {
        icon: ShoppingCart, title: 'Growth & E-commerce',
        description: 'Recommendations, personalization, A/B experiments and CRO work to increase conversion and LTV.'
    },
    {
        icon: ShieldCheck, title: 'Security & Compliance',
        description: 'Pen-tests, Vault-based secret management, key rotation and audit artifacts to support GDPR / ISO readiness and enterprise onboarding.'
    },
]

export function Services() {
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref, {once: true, margin: '-100px'})

    // --- Mobile carousel refs/state
    const railRef = useRef<HTMLDivElement | null>(null)
    const [idx, setIdx] = useState(0)
    // const cardGap = 24 // px gap-6
    // on resize, keep snap aligned
    useEffect(() => {
        const onResize = () => scrollToIdx(idx, false)
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
        rail.scrollTo({left, behavior: smooth ? 'smooth' : 'auto'})
        setIdx(clamped)
    }

    const prev = () => scrollToIdx(idx - 1)
    const next = () => scrollToIdx(idx + 1)

    return (
        <section id="services" className="py-24 relative grid-bg scroll-mt-24 md:scroll-mt-32" ref={ref}>
            {/* background */}
            <div className="absolute inset-0 purple-pink-gradient -z-10 opacity-25 dark:opacity-35"/>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.5}}
                    className="text-center max-w-3xl mx-auto mb-10"
                >
                    <div
                        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
                        <ChevronRight className="h-4 w-4 text-primary"/>
                        <span className="text-sm font-medium text-primary">What we deliver</span>
                        <ChevronRight className="h-4 w-4 text-primary"/>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 italic text-foreground">
                        Business outcomes, not just features
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We combine product expertise and AI-assisted engineering to build products that drive revenue.
                    </p>

                    {/* Trust badges */}
                    <div className="flex flex-wrap gap-3 items-center justify-center mt-6">
            <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-card/50 border border-border text-foreground">
              <ShieldCheck className="h-4 w-4 text-foreground"/>
              Zero Retention
            </span>
                        <span
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-card/50 border border-border text-foreground">
              <Lock className="h-4 w-4 text-foreground"/>
              Isolated Containers
            </span>
                        <span
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-card/50 border border-border text-foreground">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                   strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>
              </svg>
              GDPR / ISO27001
            </span>
                    </div>
                </motion.div>

                {/* ===== Mobile carousel (<= md) ===== */}
                <div className="md:hidden relative">
                    {/* Rail */}
                    <div
                        ref={railRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-pl-4 pl-1 pr-1 gap-6 pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
                        style={{scrollBehavior: 'smooth'}}
                        onScroll={(e) => {
                            // update bullet index lazily
                            const rail = e.currentTarget
                            const w = rail.clientWidth
                            const x = rail.scrollLeft
                            const approx = Math.round(x / (w - 0.15 * w)) // heuristic for 85% width
                            setIdx(Math.max(0, Math.min(approx, services.length - 1)))
                        }}
                    >
                        {services.map((service, i) => {
                            const Icon = service.icon
                            return (
                                <motion.div
                                    key={i}
                                    data-card
                                    initial={{opacity: 0, y: 16}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{amount: 0.3, once: true}}
                                    transition={{duration: 0.4, delay: i * 0.05}}
                                    className="snap-start shrink-0 w-[85%] first:ml-4 last:mr-4"
                                >
                                    <div
                                        className="h-full p-6 rounded-lg border border-border bg-card/60 backdrop-blur-sm transition-colors duration-300">
                                        <div
                                            className="mb-6 w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                                            <Icon className="h-7 w-7 text-primary" strokeWidth={1.5}/>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* Controls */}
                    <div className="mt-4 flex items-center justify-between px-2">
                        <button
                            aria-label="Previous"
                            onClick={prev}
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card hover:bg-primary/10"
                        >
                            <ChevronLeft className="w-5 h-5"/>
                        </button>

                        {/* Bullets */}
                        <div className="flex gap-2">
                            {services.map((_, i) => (
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
                            onClick={next}
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card hover:bg-primary/10"
                        >
                            <ChevronRight className="w-5 h-5"/>
                        </button>
                    </div>
                </div>

                {/* ===== Desktop grid (>= md) ===== */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                                transition={{duration: 0.5, delay: index * 0.08}}
                                className="group"
                            >
                                <div
                                    className="h-full p-6 rounded-lg border border-border bg-card/40 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-primary/10">
                                    <div
                                        className="mb-6 w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <Icon className="h-8 w-8 text-primary" strokeWidth={1.5}/>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
