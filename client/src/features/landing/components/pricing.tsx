'use client'

import {useRef} from 'react'
import {motion, useInView} from 'framer-motion'
import {Check, Star} from 'lucide-react'


export function Pricing() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: '-100px'})

    const plans = [
        {
            id: 'sprint',
            name: 'Secure Sprint',
            subtitle: '4-week fixed engagement — validate fast',
            priceLabel: 'Fixed quote — request proposal',
            features: [
                'Isolated PoC in dedicated client environment',
                'Working prototype + prioritized roadmap',
                'Security summary & risk plan (NDA available)',
                'Handoff-ready code & artifacts',
            ],
            cta: { text: 'Book Secure Sprint', href: '/#contact', variant: 'primary' },
            highlight: true,
        },
        {
            id: 'outstaff',
            name: 'Team Augmentation (Outstaff)',
            subtitle: 'Embed our engineers into your team',
            priceLabel: 'Hourly / contract — contact for rates',
            features: [
                'Senior engineers matched to your stack',
                'Full integration with your repo and processes',
                'Flexible ramp-up / ramp-down',
                'AI-assisted workflows to speed dev & testing',
            ],
            cta: { text: 'Request engineers', href: '/contact?intent=outstaff', variant: 'outline' },
            highlight: false,
        },
        {
            id: 'outsource',
            name: 'Product Delivery (Outsource)',
            subtitle: 'End-to-end project delivery',
            priceLabel: 'Fixed quote — based on scope',
            features: [
                'MVP → production delivery, PM included',
                'CI/CD, tests, monitoring and SLOs',
                'Focus on ROI: faster time-to-market and predictable releases',
                'Post-release handoff and optional support',
            ],
            cta: { text: 'Request proposal', href: '/contact?intent=outsourcing', variant: 'outline' },
            highlight: false,
        },
        {
            id: 'enterprise',
            name: 'Enterprise & Compliance',
            subtitle: 'Dedicated infra, audits and SLA',
            priceLabel: 'Custom enterprise pricing',
            features: [
                'On-prem / EU-based deployments',
                'Compliance & audit support (GDPR / ISO / SOC)',
                'SLA, 24/7 support and dedicated account team',
                'Security hardening and pentests',
            ],
            cta: { text: 'Contact sales', href: '/contact?intent=enterprise', variant: 'outline' },
            highlight: false,
        },
    ]


    return (
        <section id="pricing" className="py-24 relative scroll-mt-24 md:scroll-mt-32" ref={ref}>
            <div className="absolute inset-0 purple-pink-gradient -z-10 opacity-18 dark:opacity-28"/>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.5}}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold italic mb-4 text-foreground">Pricing that scales with
                        you</h2>
                    <p className="text-lg text-muted-foreground">
                        Transparent plans — or a tailored enterprise & security-first engagement. Start with a Secure
                        Sprint to
                        validate fast.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{opacity: 0, y: 20}}
                            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                            transition={{duration: 0.5, delay: i * 0.08}}
                            className={`relative p-6 rounded-2xl transition-all ${
                                plan.highlight
                                    ? 'bg-gradient-to-br from-primary/10 to-primary/6 border border-primary/30 shadow-lg'
                                    : 'bg-card/50 border border-border'
                            }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm shadow-sm">
                    <Star className="w-4 h-4"/> Recommended
                  </span>
                                </div>
                            )}

                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-foreground">{plan.name}</h3>
                                    <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                                </div>

                                <div className="text-right">
                                    <div className="text-2xl font-bold text-foreground">{plan.priceLabel}</div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <ul className="space-y-3">
                                    {plan.features.map((f, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0"/>
                                            <span className="text-sm text-muted-foreground">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-3">
                                {plan.cta.variant === 'primary' ? (
                                    <a href={plan.cta.href}
                                       className="inline-block w-full text-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold">
                                        {plan.cta.text}
                                    </a>
                                ) : (
                                    <a href={plan.cta.href}
                                       className="inline-block w-full text-center px-4 py-2 rounded-md border border-border text-foreground bg-background/20">
                                        {plan.cta.text}
                                    </a>
                                )}
                            </div>

                            <div className="text-xs text-muted-foreground">
                                {plan.id === 'sprint' ? (
                                    <p>
                                        Secure Sprint is a fixed-price engagement for product validation. It includes
                                        isolation, NDA and
                                        deliverables — great if you need quick validation before building.
                                    </p>
                                ) : plan.id === 'scale' ? (
                                    <p>Pay monthly; cancel anytime. Upgrade to Enterprise when you need dedicated
                                        infrastructure.</p>
                                ) : (
                                    <p>Custom contracts, onboarding and compliance support — pricing depends on scope
                                        and SLA.</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 max-w-3xl mx-auto text-center text-sm text-muted-foreground">
                    <p>
                        Need a custom plan or compliance guarantees (GDPR/ISO/SOC)?{' '}
                        <a href="/contact?intent=enterprise" className="underline text-foreground">
                            Contact sales
                        </a>{' '}
                        — we tailor agreements and SLAs per customer.
                    </p>
                </div>
            </div>
        </section>
    )
}
