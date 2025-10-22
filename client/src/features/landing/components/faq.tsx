'use client'

import {useRef, useState} from 'react'
import {motion, AnimatePresence, useInView} from 'framer-motion'
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
} from 'lucide-react'

type Step = {
    number: string
    title: string
    description: string
    processes: string[]
    deliverables: string[]
}

/* --- flowSteps (unchanged) --- */
const flowSteps: Step[] = [
    {
        number: '01',
        title: 'Discover — Business Audit',
        description:
            '1 week deep-dive: product goals, KPIs and quick-win map. Ми шукаємо ті фічі, що дають найбільший бізнес-ефект одразу.',
        processes: ['Stakeholder interviews', 'Metrics mapping'],
        deliverables: ['Opportunity map', 'Success KPIs', 'Risk & data ownership plan'],
    },
    {
        number: '02',
        title: 'Design Sprint — Prototype fast',
        description:
            '2-week validated prototype: clickable flows, early user feedback and a prioritized MVP backlog.',
        processes: ['Workshop', 'UX prototype', 'In-browser demo'],
        deliverables: ['Clickable prototype', 'Testing plan', 'Roadmap (MVP+90d)'],
    },
    {
        number: '03',
        title: 'Secure Build — Focused delivery',
        description:
            'Sprint-based dev with automated CI and internal AI-assistants (sandboxed) to accelerate implementation.',
        processes: ['Implementation sprints', 'Auto-tests, CI'],
        deliverables: ['MVP release', 'Automated tests', 'Deploy pipeline'],
    },
    {
        number: '04',
        title: 'Harden & Certify',
        description:
            'Security hardening, pentest and compliance checks — ми готуємо продукт для контрактів і аудитів.',
        processes: ['Pentest', 'Access review', 'SRE runbooks'],
        deliverables: ['Pentest report', 'SLOs & runbooks', 'Audit-ready artefacts'],
    },
    {
        number: '05',
        title: 'Launch & Observe',
        description:
            'Staged rollout, monitoring and observability: alerts, dashboards and live rollback plans.',
        processes: ['Canary rollout', 'Monitoring', 'Incident playbooks'],
        deliverables: ['Dashboards', 'Alert rules', 'Post-launch retro'],
    },
    {
        number: '06',
        title: 'Grow & Iterate',
        description:
            'Data-driven roadmap: A/B, analytics and prioritized backlog — масштабуємо те, що працює і приносить гроші.',
        processes: ['A/B tests', 'Product analytics'],
        deliverables: ['Insights', 'Prioritized backlog', 'Quarterly roadmap'],
    },
]

/* --- icon helper --- */
const iconForTitle = (title: string) => {
    if (title.includes('Discover')) return Users
    if (title.includes('Design')) return Code
    if (title.includes('Secure Build')) return Server
    if (title.includes('Harden')) return ShieldCheck
    if (title.includes('Launch')) return Rocket
    if (title.includes('Grow')) return Database
    return Server
}

/* --- ComparisonTable --- */
function ComparisonTable() {
    const rows = [
        {
            metric: 'Time-to-market',
            outsider: '~16 weeks (typical)',
            us: '~10–11 weeks (≈30–40% faster)',
            note: 'Faster launch → earlier revenue',
        },
        {
            metric: 'Initial dev cost',
            outsider: 'Standard hourly burn',
            us: 'Comparable initial cost; lower long-term TCO',
            note: 'Lower TCO due to faster TTM',
        },
        {
            metric: 'Security & isolation',
            outsider: 'Shared infra or public SaaS',
            us: 'Isolated client containers + Zero-Retention',
            note: 'Stronger privacy guarantees',
        },
        {
            metric: 'IP & ownership',
            outsider: 'Potential mixing of assets',
            us: 'Clear code & data ownership by contract',
            note: 'Client retains control',
        },
        {
            metric: 'Compliance readiness',
            outsider: 'Extra audits needed',
            us: 'GDPR / ISO-ready posture',
            note: 'Faster enterprise onboarding',
        },
    ]

    return (
        <div className="mt-4 overflow-x-auto rounded-md border border-border bg-card/30 p-3">
            <table className="w-full text-sm border-collapse">
                <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-muted-foreground">
                    <th className="p-2">Metric</th>
                    <th className="p-2">Typical outsourcer</th>
                    <th className="p-2">Us</th>
                    <th className="p-2">Why it matters</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((r) => (
                    <tr key={r.metric} className="align-top">
                        <td className="p-2 font-medium">{r.metric}</td>
                        <td className="p-2 text-muted-foreground">{r.outsider}</td>
                        <td className="p-2">{r.us}</td>
                        <td className="p-2 text-muted-foreground">{r.note}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

/* --- concise FAQ items --- */
// const faqItems = [
//     {
//         question: 'Do you store prompts or client data?',
//         answer:
//             'By default — no. We operate a Zero-Retention policy for prompts and transient outputs unless you explicitly opt to retain data for experiments or analytics. Persistent data is stored only per agreement and in client-isolated environments.',
//     },
//     {
//         question: 'How do you use AI in development?',
//         answer:
//             'We use internal AI tooling as an assistant — for test generation, refactors, linting and review suggestions. Humans keep final control: senior engineers validate all outputs and own the code. AI speeds work and reduces repetitive mistakes, not replace expertise.',
//     },
//     {
//         question: 'Can we sign an NDA and get an isolated PoC?',
//         answer:
//             'Yes — we sign NDAs and can provision an isolated PoC environment (separate container, dedicated endpoints and audit logs) for confidential evaluation.',
//     },
//     {
//         question: 'Who owns the code and IP?',
//         answer:
//             'Clients retain ownership of their code and IP as stated in the contract. We transfer all deliverables and provide exportable artifacts at handoff.',
//     },
//     {
//         question: 'How fast can you deliver an MVP?',
//         answer:
//             'Timelines vary by scope. Our workflow and AI-enabled tooling typically reduce time-to-market significantly; precise estimates are provided after the Discovery phase or during a Secure Sprint.',
//     },
//     {
//         question: 'Do you support compliance and audits?',
//         answer:
//             'Yes. We prepare artifacts for GDPR/ISO audits, run pentests on demand, use secrets management and provide logs and runbooks required for enterprise onboarding.',
//     },
// ]


/* --- main component --- */
export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const [active, setActive] = useState(0) // active step index
    const [expanded, setExpanded] = useState(true)
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref, {once: true, margin: '-100px'})

    const step = flowSteps[active]
    const Icon = iconForTitle(step.title)

    return (
        <>
            {/* Our Flow Section */}
            <section
                id="our-flow"
                ref={ref}
                className="relative py-16 sm:py-20 lg:py-24 overflow-hidden outline-none"
                tabIndex={-1}
                onKeyDown={(e) => {
                    if (e.key === 'ArrowRight') setActive(a => Math.min(a + 1, flowSteps.length - 1))
                    if (e.key === 'ArrowLeft') setActive(a => Math.max(a - 1, 0))
                }}
            >
                <div className="absolute inset-0 -z-10 purple-pink-gradient opacity-25 dark:opacity-40"/>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Заголовок */}
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5}}
                        className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold italic mb-3 sm:mb-4 text-foreground"
                    >
                        Our flow — predictable, fast, secure
                    </motion.h2>

                    {/* Субтайтл + індикатор прогресу */}
                    <div className="mx-auto max-w-2xl text-center mb-6 sm:mb-10">
                        <p className="text-sm sm:text-base text-muted-foreground">
                            Clear steps, measurable outputs, and fast feedback at every stage.
                        </p>
                        <div
                            className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-foreground">
                            <span aria-live="polite">Step {active + 1} of {flowSteps.length}</span>
                        </div>
                    </div>

                    {/* --- MOBILE STEPPER (< lg) --- */}
                    <div className="mb-6 flex items-center justify-between lg:hidden">
                        <button
                            onClick={() => setActive(a => Math.max(a - 1, 0))}
                            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-3 py-2 text-sm font-semibold text-foreground hover:border-primary/40 disabled:opacity-50"
                            disabled={active === 0}
                            aria-label="Previous step"
                        >
                            Prev
                        </button>

                        <div className="flex gap-2 overflow-x-auto no-scrollbar mx-2" role="tablist"
                             aria-label="Flow steps">
                            {flowSteps.map((s, i) => {
                                const isA = i === active
                                return (
                                    <button
                                        key={s.number}
                                        onClick={() => setActive(i)}
                                        role="tab"
                                        aria-selected={isA}
                                        aria-controls={`flow-step-panel`}
                                        className={[
                                            "h-9 min-w-9 px-3 rounded-md text-sm font-bold whitespace-nowrap transition",
                                            isA
                                                ? "bg-primary text-primary-foreground ring-2 ring-primary/30"
                                                : "bg-card/80 text-muted-foreground border border-border hover:border-primary/40"
                                        ].join(" ")}
                                    >
                                        {s.number}
                                    </button>
                                )
                            })}
                        </div>

                        <button
                            onClick={() => setActive(a => Math.min(a + 1, flowSteps.length - 1))}
                            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-3 py-2 text-sm font-semibold text-foreground hover:border-primary/40 disabled:opacity-50"
                            disabled={active === flowSteps.length - 1}
                            aria-label="Next step"
                        >
                            Next
                        </button>
                    </div>

                    {/* --- ГОЛОВНА СІТКА --- */}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-[96px_minmax(0,1fr)_384px] gap-6 lg:gap-8 items-start">
                        {/* Ліва вертикальна навігація (lg+) */}
                        <div className="hidden lg:flex flex-col items-start gap-4 w-24">
                            <div className="relative">
                                <div className="absolute left-10 top-0 bottom-0 w-px bg-border/60"/>
                            </div>
                            {flowSteps.map((s, i) => {
                                const isA = i === active
                                return (
                                    <button
                                        key={s.number}
                                        onClick={() => setActive(i)}
                                        className={[
                                            "w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold transition",
                                            isA
                                                ? "bg-primary text-primary-foreground ring-4 ring-primary/20 shadow"
                                                : "bg-card/80 text-muted-foreground border border-border hover:border-primary/40"
                                        ].join(" ")}
                                        aria-current={isA ? "step" : undefined}
                                        aria-label={`Go to step ${s.number}: ${s.title}`}
                                    >
                                        {s.number}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Центр: контент кроку */}
                        <motion.div
                            id="flow-step-panel"
                            key={step.number}
                            initial={{opacity: 0, x: 18}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.25}}
                            className="flex-1 rounded-xl border border-border/80 bg-background/60 backdrop-blur-md p-4 sm:p-6 lg:p-8 shadow-sm"
                        >
                            <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-5 sm:gap-6">
                                {/* Іконка */}
                                <div
                                    className="flex-shrink-0 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-lg border border-primary/30 bg-primary/10 text-primary">
                                    <Icon className="h-8 w-8 sm:h-10 sm:w-10"/>
                                </div>

                                {/* Текстова частина */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                                            {step.number} — {step.title}
                                        </h3>

                                        <button
                                            onClick={() => setExpanded(v => !v)}
                                            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/30 px-3 py-2 text-sm text-foreground hover:border-primary/40"
                                            aria-expanded={expanded}
                                            aria-controls="flow-step-desc"
                                        >
                                            {expanded ? (
                                                <>Collapse <ChevronUp className="h-4 w-4 text-primary"/></>
                                            ) : (
                                                <>Expand <ChevronDown className="h-4 w-4 text-primary"/></>
                                            )}
                                        </button>
                                    </div>

                                    {expanded && (
                                        <p id="flow-step-desc"
                                           className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-3xl">
                                            {step.description}
                                        </p>
                                    )}

                                    {/* Плашки процесів/делівері */}
                                    <div className="mt-5 sm:mt-6 grid gap-5 sm:gap-6 sm:grid-cols-2">
                                        <div>
                                            <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-foreground">Processes</h4>
                                            <div className="flex flex-wrap gap-2.5 sm:gap-3">
                                                {step.processes.map((p) => (
                                                    <span
                                                        key={p}
                                                        className="rounded-md border border-border bg-card/40 px-3 py-1.5 text-xs sm:text-sm text-foreground"
                                                    >
                      {p}
                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-foreground">Deliverables</h4>
                                            <ul className="space-y-2.5 sm:space-y-3">
                                                {step.deliverables.map((d, i) => (
                                                    <li key={i} className="flex items-start gap-2.5">
                                                        <span className="mt-1 text-primary">●</span>
                                                        <span
                                                            className="text-sm sm:text-base text-muted-foreground">{d}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Додатковий блок лише для першого кроку */}
                                    <AnimatePresence initial={false}>
                                        {active === 0 && (
                                            <motion.div
                                                key="comparison"
                                                initial={{height: 0, opacity: 0, y: -8}}
                                                animate={{height: 'auto', opacity: 1, y: 0}}
                                                exit={{height: 0, opacity: 0, y: -8}}
                                                transition={{duration: 0.25}}
                                                className="mt-5 sm:mt-6 overflow-hidden"
                                            >

                                                <div className="mt-4 border-t border-border pt-3">
                                                    <h5 className="text-sm font-semibold mb-2">Quick comparison</h5>
                                                    <ComparisonTable/>
                                                </div>

                                                {/* CTA під таблицею */}
                                                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                                                    <a href="/whitepaper" className="text-sm underline">Read
                                                        whitepaper</a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>


                                </div>
                            </div>
                        </motion.div>

                        {/* Правий сайдбар */}
                        <div className="w-full lg:w-96">
                            <div className="lg:sticky lg:top-24 space-y-4">
                                <div className="rounded-lg border border-border bg-card/50 p-4">
                                    <h4 className="text-lg font-semibold mb-2">Why this step matters</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Quick explanation how this step reduces risk and accelerates delivery — direct
                                        business impact and expected outcomes for stakeholders.
                                    </p>
                                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                        <li>— Faster feedback cycles</li>
                                        <li>— Clear acceptance criteria</li>
                                        <li>— Audit-ready artefacts for contracts</li>
                                    </ul>


                                </div>

                                <div className="rounded-lg border border-border bg-card/50 p-4">
                                    <h5 className="text-sm font-semibold">Ready to validate fast?</h5>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Book a Secure Sprint: 4 weeks, isolated PoC, NDA available. We deliver a working
                                        prototype and a prioritized roadmap.
                                    </p>
                                    <div className="mt-4">
                                        <a href="#contact"
                                           className="inline-block w-full text-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold">
                                            Contact us
                                        </a>
                                    </div>
                                </div>

                                <div className="flex gap-2 flex-wrap">
            <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 border border-border text-xs font-medium">
              <ShieldCheck className="h-4 w-4"/>
              Zero Retention
            </span>
                                    <span
                                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 border border-border text-xs font-medium">
              <Lock className="h-4 w-4"/>
              Isolated containers
            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQ Section */}
            <section id="faq" className="py-24 relative bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.5}}
                        className="text-center mb-8"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold italic text-foreground">Frequently asked
                            questions</h2>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            {
                                question: 'Do you store prompts or client data?',
                                answer:
                                    'By default — no. We follow a Zero-Retention policy for prompts and transient outputs unless you explicitly opt in. All processing for evaluations runs in isolated client environments.',
                            },
                            {
                                question: 'Can we sign an NDA and get an isolated PoC?',
                                answer:
                                    'Yes. We sign NDAs and can provision a fully isolated PoC (separate container + dedicated endpoints + audit logs) for confidential evaluation.',
                            },
                            {
                                question: 'What is a Secure Sprint and what does it include?',
                                answer:
                                    'A fixed 4-week engagement: secure PoC, working prototype, prioritized roadmap and a short security/risk report. Delivered under NDA and with full data isolation when requested.',
                            },
                            {
                                question: 'How fast can you deliver an MVP?',
                                answer:
                                    'Timelines depend on scope. Our process (Discover → Design → Secure Build) typically shortens time-to-market by ~30–40% versus traditional flows — precise estimates follow Discovery.',
                            },
                            {
                                question: 'Who owns the code and the data?',
                                answer:
                                    'Clients retain ownership of their code and data as defined in the contract. We provide full export of artifacts and clear IP clauses in every agreement.',
                            },
                            {
                                question: 'How do you ensure security and compliance?',
                                answer:
                                    'We apply multi-layered controls: isolated client containers, secrets in a Vault, key rotation, access logging, and regular pentests. We prepare artifacts to support GDPR/ISO audits as needed.',
                            },
                            {
                                question: 'What technologies and stacks do you use?',
                                answer:
                                    'Tech depends on the product, but typically: React/Next.js frontend, Node/Python backend, containerization (Docker, Kubernetes), CI/CD pipelines, and modern ML inference/deployment tools.',
                            },
                            {
                                question: 'What about post-launch support and SLAs?',
                                answer:
                                    'We offer support packages from ad-hoc to SLA-backed plans with monitoring, incident response and prioritized maintenance. Details are agreed per contract.',
                            },
                        ].map((item, index) => {
                            const isOpen = openIndex === index
                            return (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                                    transition={{duration: 0.5, delay: index * 0.06}}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full p-6 rounded-lg border border-border bg-gradient-to-r from-primary/10 to-background/40 backdrop-blur-sm hover:border-primary/40 transition-all text-left"
                                    >
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-foreground pr-4">{item.question}</h3>
                                            {isOpen ? <X className="h-6 w-6 text-primary"/> :
                                                <Plus className="h-6 w-6 text-primary"/>}
                                        </div>

                                        {isOpen && (
                                            <motion.div
                                                initial={{height: 0, opacity: 0}}
                                                animate={{height: 'auto', opacity: 1}}
                                                exit={{height: 0, opacity: 0}}
                                                transition={{duration: 0.25}}
                                                className="mt-4 text-sm leading-relaxed text-muted-foreground"
                                            >
                                                {item.answer}
                                            </motion.div>
                                        )}
                                    </button>
                                </motion.div>
                            )
                        })}
                    </div>

                    <div className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
                        <p>
                            Didn’t find the answer? <a href="/contact" className="underline text-foreground">Contact
                            us</a> or{' '}
                            <a href="/contact?intent=secure-sprint" className="underline text-foreground">request a
                                Secure Sprint</a> for a confidential evaluation.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}
