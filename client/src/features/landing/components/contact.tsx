// src/features/landing/components/contact.tsx
'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/shared/ui/button'
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react'

type Errors = { [k: string]: string }

const RATE_LIMIT_SECONDS = 10
const SUBMIT_TS_KEY = 'contact_last_submit_ts'

const nameRegex = /^[A-Za-zА-Яа-яІіЇїЄєҐґ' -]{2,60}$/
const phoneRegexE164 = /^\+[1-9]\d{7,14}$/
const phoneRegexUA = /^\+?380\d{9}$/
const isValidName = (s: string) => nameRegex.test(s.trim())
const isValidPhone = (s: string) => {
    const v = s.trim()
    return phoneRegexE164.test(v) || phoneRegexUA.test(v)
}

type ContactValues = {
    name: string
    email: string
    phone: string
    message: string
    company: string // honeypot
}

export function Contact() {
    const ref = useRef<HTMLDivElement | null>(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const API_URL = process.env.NEXT_PUBLIC_API_URL as string

    const [values, setValues] = useState<ContactValues>({
        name: '',
        email: '',
        phone: '',
        message: '',
        company: '',
    })
    const [errors, setErrors] = useState<Errors>({})
    const [submitted, setSubmitted] = useState(false)
    const [agreedToTerms, setAgreedToTerms] = useState(false)
    const [loading, setLoading] = useState(false)

    // throttle (cooldown)
    const [cooldown, setCooldown] = useState(0)

    // при маунті — порахувати скільки залишилось
    useEffect(() => {
        const last = Number(localStorage.getItem(SUBMIT_TS_KEY) || '0')
        const diff = Math.max(0, RATE_LIMIT_SECONDS - Math.floor((Date.now() - last) / 1000))
        setCooldown(diff)
    }, [])

    // тік для countdown
    useEffect(() => {
        if (cooldown <= 0) return
        const id = setInterval(() => setCooldown((s) => Math.max(0, s - 1)), 1000)
        return () => clearInterval(id)
    }, [cooldown])

    // авто-скрол до першої помилки
    useEffect(() => {
        const firstErrId = Object.keys(errors)[0]
        if (!firstErrId) return
        document.getElementById(firstErrId)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, [errors])

    const onChange =
        (key: keyof ContactValues) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setValues((v) => ({ ...v, [key]: e.target.value }))
                setErrors((er) => ({ ...er, [key]: '' }))
            }

    const validate = () => {
        const next: Errors = {}

        if (!isValidName(values.name)) next.name = 'Please enter a valid name (2–60 letters)'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Invalid email'
        if (!isValidPhone(values.phone)) next.phone = 'Enter phone in international format (e.g. +380XXXXXXXXX)'
        if (!values.message.trim()) next.message = 'Please write a short message'
        if (!agreedToTerms) next.terms = 'You must accept the terms'

        // honeypot + таймер < 2s
        const formOpenedAgo = Number(sessionStorage.getItem('contact_open_ts') || Date.now())
        const tooFast = Date.now() - formOpenedAgo < 2000
        if (values.company.trim().length > 0 || tooFast) next.bot = 'Suspicious activity detected'

        // throttle клієнтський
        if (cooldown > 0) next.rate = `Please wait ${cooldown}s before next submit`

        setErrors(next)
        return Object.keys(next).length === 0
    }

    useEffect(() => {
        // коли користувач відкрив форму
        if (!sessionStorage.getItem('contact_open_ts')) {
            sessionStorage.setItem('contact_open_ts', String(Date.now()))
        }
    }, [])

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return

        setLoading(true)
        setErrors({})

        try {
            // UTM
            const params = new URLSearchParams(window.location.search)
            const utm: Record<string, string> = {}
            ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((k) => {
                const v = params.get(k)
                if (v) utm[k] = v
            })

            const r = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                    utm,
                }),
            })
            const json = await r.json().catch(() => ({}))

            if (!r.ok || json?.ok !== true) {
                throw new Error(json?.error || 'Request failed')
            }

            setSubmitted(true)
            // зберегти timestamp для ліміту
            const now = Date.now()
            localStorage.setItem(SUBMIT_TS_KEY, String(now))
            setCooldown(RATE_LIMIT_SECONDS)
            // почистити форму (за бажанням)
            setValues({ name: '', email: '', phone: '', message: '', company: '' })
            setAgreedToTerms(false)
        } catch (err: unknown) {
            // безпечний вилов повідомлення
            const message = err instanceof Error ? err.message : String(err)
            setErrors({ submit: message || 'Something went wrong. Try again.' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="py-20 sm:py-24 relative grid-bg" ref={ref}>
            <div className="absolute inset-0 purple-pink-gradient -z-10 opacity-25 dark:opacity-35" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span className="text-xs sm:text-sm font-medium text-primary">Get in touch</span>
                        <ChevronRight className="h-4 w-4 text-primary" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold italic text-foreground">Contact us</h2>

                    <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                        Tell us briefly about your project — we&apos;ll reply within 24 hours.
                    </p>

                    <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-6" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 max-w-6xl mx-auto">
                    {/* Left info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Interested in our services?</h3>
                            <p className="text-sm sm:text-base text-muted-foreground">Fill out the form or reach out directly — we&apos;ll take it from there.</p>
                        </div>

                        <div className="space-y-5 sm:space-y-6">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-foreground">Kyiv, Ukraine</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <a href="mailto:ithingylabs@gmail.com" className="font-semibold text-foreground hover:underline">
                                        ithingylabs@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                    <a href="tel:+380983264016" className="font-semibold text-foreground hover:underline">
                                        +380 98 326 40 16
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Notifications */}
                        {submitted && (
                            <div className="mb-4 p-4 rounded-lg border border-emerald-400/40 bg-emerald-500/10 text-emerald-300">
                                Thanks! Your message has been sent successfully.
                            </div>
                        )}
                        {errors.submit && (
                            <div className="mb-4 p-4 rounded-lg border border-destructive/40 bg-destructive/10 text-destructive">{errors.submit}</div>
                        )}
                        {errors.rate && (
                            <div className="mb-4 p-3 rounded-lg border border-amber-400/40 bg-amber-500/10 text-amber-300">{errors.rate}</div>
                        )}

                        <div className="rounded-lg border border-border bg-card/60 backdrop-blur-sm p-5 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-foreground">Let&apos;s work together</h3>

                            <form noValidate onSubmit={onSubmit} className="space-y-5">
                                {/* Row 1: Name / Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                                            Your name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            value={values.name}
                                            onChange={onChange('name')}
                                            aria-invalid={!!errors.name}
                                            aria-describedby={errors.name ? 'name-error' : undefined}
                                            className="w-full rounded-lg border border-border bg-card/40 px-4 py-3 text-base sm:text-[15px] text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
                                            autoComplete="name"
                                            inputMode="text"
                                        />
                                        {errors.name && (
                                            <p id="name-error" className="mt-1 text-sm text-destructive">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                                            Your e-mail
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="E-mail"
                                            value={values.email}
                                            onChange={onChange('email')}
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? 'email-error' : undefined}
                                            className="w-full rounded-lg border border-border bg-card/40 px-4 py-3 text-base sm:text-[15px] text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
                                            autoComplete="email"
                                            inputMode="email"
                                        />
                                        {errors.email && (
                                            <p id="email-error" className="mt-1 text-sm text-destructive">
                                                {errors.email}
                                            </p>
                                        )}

                                        {/* honeypot (приховане поле) */}
                                        <input
                                            type="text"
                                            name="company"
                                            value={values.company}
                                            onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
                                            className="hidden"
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                                        Your phone number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        placeholder="+380XXXXXXXXX"
                                        value={values.phone}
                                        onChange={onChange('phone')}
                                        aria-invalid={!!errors.phone}
                                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                                        className="w-full rounded-lg border border-border bg-card/40 px-4 py-3 text-base sm:text-[15px] text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
                                        autoComplete="tel"
                                        inputMode="tel"
                                    />
                                    {errors.phone && (
                                        <p id="phone-error" className="mt-1 text-sm text-destructive">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                                        A little bit about your project
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Describe your task / idea"
                                        value={values.message}
                                        onChange={onChange('message')}
                                        aria-invalid={!!errors.message}
                                        aria-describedby={errors.message ? 'message-error' : undefined}
                                        className="w-full rounded-lg border border-border bg-card/40 px-4 py-3 text-base sm:text-[15px] text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-y"
                                    />
                                    {errors.message && (
                                        <p id="message-error" className="mt-1 text-sm text-destructive">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* Terms */}
                                <div className="flex items-start gap-3">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        checked={agreedToTerms}
                                        onChange={(e) => {
                                            setAgreedToTerms(e.target.checked)
                                            setErrors((er) => ({ ...er, terms: '' }))
                                        }}
                                        className="mt-1 w-4 h-4 rounded border-border bg-card/40 text-primary focus:ring-2 focus:ring-primary/20"
                                    />
                                    <label htmlFor="terms" className="text-sm text-muted-foreground">
                                        I accept the terms and conditions of{' '}
                                        <a href="/privacy" className="text-primary hover:underline">
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>
                                {errors.terms && <p className="text-sm text-destructive">{errors.terms}</p>}
                                {errors.bot && <p className="text-sm text-destructive">{errors.bot}</p>}

                                {/* Submit */}
                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={loading || cooldown > 0}
                                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-5 sm:py-6 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {loading ? 'Sending…' : cooldown > 0 ? `Please wait ${cooldown}s` : 'Send'}
                                    </Button>
                                </div>

                                {/* live region for a11y */}
                                <p className="sr-only" aria-live="polite">
                                    {loading ? 'Submitting' : submitted ? 'Submitted' : ''}
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
