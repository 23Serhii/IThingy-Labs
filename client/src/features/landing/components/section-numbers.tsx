'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

type Section = { id: string; number: string; title: string }

const sections: Section[] = [
    { id: 'hero', number: '0', title: 'Hero' },
    { id: 'services', number: '1', title: 'Services' },
    { id: 'industries', number: '2', title: 'Industries' },
    { id: 'cases', number: '3', title: 'Case Studies' },
    { id: 'testimonials', number: '4', title: 'Testimonials' },
    { id: 'faq', number: '5', title: 'FAQ' },
    { id: 'pricing', number: '6', title: 'Pricing' },
    { id: 'cta', number: '7', title: 'Get Started' },
    { id: 'contact', number: '8', title: 'Contact' },
]

export function SectionNumbers() {
    const [activeId, setActiveId] = useState('hero')
    const [hoverId, setHoverId] = useState<string | null>(null)

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting && e.target.id) setActiveId(e.target.id)
                }
            },
            { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
        )

        const observed = new Set<Element>()
        let attempts = 0
        let timer: number | undefined

        const tryObserve = () => {
            sections.forEach(({ id }) => {
                const el = document.getElementById(id)
                if (el && !observed.has(el)) {
                    io.observe(el)
                    observed.add(el)
                }
            })

            if (observed.size < sections.length && attempts < 20) {
                attempts += 1
                timer = window.setTimeout(tryObserve, 300) as unknown as number
            }
        }

        requestAnimationFrame(tryObserve)

        return () => {
            if (timer) clearTimeout(timer)
            observed.forEach((el) => io.unobserve(el))
            io.disconnect()
        }
    }, [])


    const hoveredIndex = useMemo(
        () => sections.findIndex((s) => s.id === hoverId),
        [hoverId]
    )

    const scaleFor = (idx: number) => {
        if (hoveredIndex === -1) return 1
        const d = Math.abs(idx - hoveredIndex)
        if (d === 0) return 1.24
        if (d === 1) return 1.12
        if (d === 2) return 1.06
        return 1
    }

    const handleClick = (id: string) => {
        const el = document.getElementById(id)
        if (el) {
            setActiveId(id)
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <div className="fixed top-1/2 right-0 -translate-y-1/2 z-40 hidden lg:block">
            {/* Блок притиснутий до правого краю */}
            <div className="relative w-[78px]">
                {/* рамка: top, left, bottom */}
                <div className="absolute inset-y-0 left-0 right-[1px] border-y border-l border-foreground/50 rounded-tl-2xl rounded-bl-2xl bg-background/40 backdrop-blur pointer-events-none" />

                <div className="relative py-3 pl-6 pr-1">
                    <ul className="flex flex-col gap-1.5">
                        {sections.map((s, idx) => {
                            const isActive = s.id === activeId
                            const isHover = hoverId === s.id

                            return (
                                <li key={s.id} className="relative h-8 w-full">
                                    {/* овал активного — Figma spec */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="oval"
                                            className="absolute top-1/2 -translate-y-1/2"
                                            style={{
                                                // позиціювання відносно номера; підправ, якщо треба:
                                                left: '-6px',
                                                width: '42.52px',
                                                height: '27.28px',
                                                border: '1px solid #FFFFFF',
                                                borderRadius: '999px',
                                                background: 'transparent',
                                                boxSizing: 'border-box',
                                            }}
                                            initial={false}
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}

                                    {/* кнопка-номер */}
                                    <motion.button
                                        onClick={() => handleClick(s.id)}
                                        onMouseEnter={() => setHoverId(s.id)}
                                        onMouseLeave={() => setHoverId((h) => (h === s.id ? null : h))}
                                        className={[
                                            'relative z-10 w-full h-full text-center font-mono tracking-wide select-none text-[16px] leading-8',
                                            isActive
                                                ? 'text-foreground font-semibold'
                                                : 'text-foreground/60 hover:text-foreground',
                                        ].join(' ')}
                                        animate={{ scale: scaleFor(idx) }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                                    >
                                        {s.number}
                                    </motion.button>

                                    {/* tooltip зліва */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={isHover ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                                        transition={{ duration: 0.18 }}
                                        className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-2"
                                    >
                                        <div className="whitespace-nowrap rounded-md border border-border bg-background/90 px-2.5 py-1 text-xs text-foreground shadow-md">
                                            {s.title}
                                        </div>
                                    </motion.div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
