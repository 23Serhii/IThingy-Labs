'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { ThemeToggle } from '@/shared/components/theme-toggle' // <— додай правильний шлях

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()
    const { scrollY } = useScroll()
    const prefersReducedMotion = useReducedMotion()
    const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.98])

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => { setIsOpen(false) }, [pathname])

    useEffect(() => {
        if (!isOpen) return
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false)
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [isOpen])

    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'About us', href: '#services' },
        { name: 'Projects', href: '#cases' },
        { name: 'Services', href: '#services' },
        { name: 'Details', href: '#testimonials' },
    ]

    return (
        <motion.header
            role="banner"
            style={{ opacity: prefersReducedMotion ? 1 : headerOpacity }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-background/80 backdrop-blur-xl border-b'
                    : 'bg-transparent'
            } border-border`}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Основна навігація">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="flex items-center gap-3" aria-label="IThingy Labs головна">
                            {/* Лого фарбується у text-primary */}
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/40">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none" className="text-primary">
                  <path d="M16 4L4 10L16 16L28 10L16 4Z" fill="currentColor" />
                  <path d="M4 18L16 24L28 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 22L16 28L28 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
                            <span className="text-xl font-bold text-foreground">IThingy Labs</span>
                        </Link>
                    </motion.div>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                            >
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right controls (desktop): theme + cta */}
                    <div className="hidden md:flex items-center gap-2">
                        <ThemeToggle />
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
                            <Link href="#contact">Contact us</Link>
                        </Button>
                    </div>

                    {/* Burger (mobile) */}
                    <div className="flex md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label={isOpen ? 'Закрити меню' : 'Відкрити меню'}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                        {/* Тема на мобі праворуч від бурґера */}
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile nav */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden py-4 border-t border-border"
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full font-semibold" asChild>
                                <Link href="#contact">Contact us</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    )
}
