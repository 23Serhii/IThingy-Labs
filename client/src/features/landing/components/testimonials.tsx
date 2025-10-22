'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Lock, Clock, Database, Sparkles } from 'lucide-react'
import { Button } from '@/shared/ui/button'

export function Testimonials() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

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
                        Why teams choose us
                    </h2>
                    <p className="mt-3 sm:mt-4 text-[13px] sm:text-sm text-muted-foreground max-w-xl sm:max-w-2xl mx-auto">
                        We use AI as a developer tool — accelerating delivery while keeping data ownership and privacy intact.
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
                            <h3 className="text-base sm:text-lg font-semibold text-foreground">4-week Secure Sprint</h3>
                        </div>

                        <p className="text-[13px] sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                            A fixed-scope, 4-week engagement to prove rapid value: secure PoC, prioritized roadmap, and a handoff-ready
                            deliverable — all under NDA and with full data isolation.
                        </p>

                        <ul className="text-[13px] sm:text-sm mb-3 sm:mb-4 space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <Database className="h-4 w-4 mt-0.5 text-primary" />
                                <span className="break-words">
                  Secure PoC environment (isolated container + dedicated AI endpoint + audit logs)
                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Lock className="h-4 w-4 mt-0.5 text-primary" />
                                <span>Privacy controls: Zero-Retention for prompts by default</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Clock className="h-4 w-4 mt-0.5 text-primary" />
                                <span>Deliverables: working prototype, prioritized roadmap, and testing report</span>
                            </li>
                        </ul>

                        <div className="mt-auto">
                            <Button asChild size="lg" className="w-full">
                                <a href="/#contact">Start a 4-week Secure Sprint</a>
                            </Button>

                            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[12px] sm:text-xs text-muted-foreground">
                                <span>Includes NDA on request</span>
                                <a href="/whitepaper" className="underline">Read whitepaper</a>
                            </div>
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
                            <h3 className="text-base sm:text-lg font-semibold">Faster delivery</h3>
                        </div>
                        <p className="text-[13px] sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                            Controlled AI assistance shortens prototyping and development loops so your product ships sooner — without
                            sacrificing security or ownership.
                        </p>
                        <ul className="text-[13px] sm:text-sm space-y-2 text-muted-foreground">
                            <li>— Faster prototyping and feature rollout</li>
                            <li>— Lower engineering feedback loop costs</li>
                            <li>— Measurable efficiency gains for product teams</li>
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
                            <h3 className="text-base sm:text-lg font-semibold">Privacy-first engineering</h3>
                        </div>

                        <p className="text-[13px] sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                            Projects run in isolated client containers with dedicated AI endpoints. Prompts and outputs are not retained unless
                            explicitly approved by the client.
                        </p>

                        <p className="text-[13px] sm:text-sm text-muted-foreground mb-2 leading-relaxed">
                            Keys are stored securely and rotated regularly; all access is logged with full audit trails.
                        </p>

                        <p className="text-[13px] sm:text-sm text-muted-foreground">Compliance-ready: GDPR / ISO27001 posture available.</p>
                    </motion.div>
                </div>

                {/* Footer note */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="max-w-3xl mx-auto text-center mt-8 sm:mt-10 text-[13px] sm:text-sm text-muted-foreground px-2"
                >
                    <p className="leading-relaxed">
                        Want to validate faster with low risk? Book the Secure Sprint — we set up an isolated PoC and show measurable outcomes within 4 weeks.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
