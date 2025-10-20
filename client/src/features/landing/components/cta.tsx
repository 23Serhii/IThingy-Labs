'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/shared/ui/button'

export function CTA() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section id="cta" className="py-24 relative overflow-hidden grid-bg" ref={ref}>
            {/* фон під нову палітру */}
            <div className="absolute inset-0 purple-pink-gradient -z-10 opacity-30 dark:opacity-40" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 italic text-foreground">
                        Ready to start your project?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join thousands of teams already using our platform to build amazing products
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        {/* primary CTA */}
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold group"
                            asChild
                        >
                            <a href="#contact">
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>

                        {/* secondary CTA */}
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-border text-foreground hover:border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg"
                            asChild
                        >
                            <a href="#contact">Contact us</a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
