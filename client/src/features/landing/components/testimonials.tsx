'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Lock, Clock, Database, Sparkles } from 'lucide-react'
import { Button } from '@/shared/ui/button'

export function Testimonials() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="testimonials" className="py-24 relative grid-bg" ref={ref}>
            {/* soft gradient background */}
            <div className="absolute inset-0 purple-pink-gradient -z-10 opacity-20 dark:opacity-30" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold italic text-foreground">Why teams choose us</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        We use AI as a developer tool — accelerating delivery while keeping data ownership and privacy intact.
                    </p>
                </motion.div>

                {/* 3-column proof / CTA */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Column 1: Business benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="p-6 rounded-lg border border-border bg-card/40 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Clock className="h-6 w-6 text-primary" />
                            <h3 className="text-lg font-semibold">Faster delivery</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                            Controlled AI assistance shortens prototyping and development loops so your product ships sooner —
                            without sacrificing security or ownership.
                        </p>

                        <ul className="text-sm space-y-2 text-muted-foreground">
                            <li>— Faster prototyping and feature rollout</li>
                            <li>— Lower engineering feedback loop costs</li>
                            <li>— Measurable efficiency gains for product teams</li>
                        </ul>
                    </motion.div>

                    {/* Column 2: Security & privacy guarantees */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-6 rounded-lg border border-border bg-card/40 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                            <h3 className="text-lg font-semibold">Privacy-first engineering</h3>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">
                            Projects run in isolated client containers with dedicated AI endpoints. Prompts and outputs are not
                            retained unless explicitly approved by the client.
                        </p>

                        <p className="text-sm text-muted-foreground mb-3">
                            Keys are stored securely and rotated regularly; all access is logged with full audit trails.
                        </p>

                        <p className="text-sm text-muted-foreground">Compliance-ready: GDPR / ISO27001 posture available.</p>
                    </motion.div>

                    {/* Column 3: REPLACED — Fixed-scope Secure Sprint (concrete offer) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="p-6 rounded-lg border border-border bg-card/40 backdrop-blur-sm flex flex-col"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Sparkles className="h-6 w-6 text-primary" />
                            <h3 className="text-lg font-semibold">4-week Secure Sprint</h3>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">
                            A fixed-scope, 4-week engagement to prove rapid value: secure PoC, prioritized roadmap, and a handoff-ready
                            deliverable — all under NDA and with full data isolation.
                        </p>

                        <ul className="text-sm mb-4 space-y-2 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <Database className="h-4 w-4 mt-1 text-primary" />
                                <span>
                  Secure PoC environment (isolated container + dedicated AI endpoint + audit logs)
                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Lock className="h-4 w-4 mt-1 text-primary" />
                                <span>Privacy controls: Zero-Retention for prompts by default</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Clock className="h-4 w-4 mt-1 text-primary" />
                                <span>Deliverables: working prototype, prioritized roadmap, and testing report</span>
                            </li>
                        </ul>

                        <div className="mt-auto">
                            <Button asChild size="lg" className="w-full">
                                <a href="/contact?intent=secure-sprint">Start a 4-week Secure Sprint</a>
                            </Button>

                            <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                                <span>Includes NDA on request</span>
                                <a href="/whitepaper" className="underline">
                                    Read whitepaper
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Small disclaimer / encouragement */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="max-w-3xl mx-auto text-center mt-10 text-sm text-muted-foreground"
                >
                    <p>
                        Want to validate faster with low risk? Book the Secure Sprint — we set up an isolated PoC and show
                        measurable outcomes within 4 weeks.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
