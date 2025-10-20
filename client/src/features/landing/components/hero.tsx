'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/shared/ui/button'

export function Hero() {
    const prefersReducedMotion = useReducedMotion()

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
        >
            {/* Фон-градiєнт */}
            <div className="absolute inset-0 purple-pink-gradient -z-10 opacity-30 dark:opacity-40" />

            {/* М’яка пляма */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
                animate={
                    prefersReducedMotion
                        ? undefined
                        : { scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }
                }
                transition={
                    prefersReducedMotion
                        ? undefined
                        : { duration: 10, repeat: Infinity, ease: 'easeInOut' }
                }
            />

            {/* Контент */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-[72ch] mx-auto text-center">
                    {/* бейдж */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-5 py-2 rounded-full mb-10"
                    >
                        <ChevronRight className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
              IThingy Labs — startup solutions agency
            </span>
                        <ChevronRight className="h-4 w-4 text-primary" />
                    </motion.div>

                    {/* Головний заголовок */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative mx-auto font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.15] max-w-[16ch] grad-text"
                    >
                        {/* Мигаючий курсор */}
                        <span
                            aria-hidden
                            className="caret absolute -left-5 top-[0.15em] bg-foreground"
                        />
                        We are smarter. We are faster. We are better. We are —{' '}
                        <span className="grad-ithingy italic font-bold">IThingy</span>
                        <motion.span
                            className="grad-ithingy-bar absolute -bottom-3 left-0 w-full h-[3px] rounded-full"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        />
                    </motion.h1>

                    {/* CTA кнопки */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                    >
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
                            asChild
                        >
                            <a href="#contact">Get started</a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-border text-foreground hover:border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg"
                            asChild
                        >
                            <a href="#cases">Learn more</a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
