import { Hero } from '@/features/landing/components/hero'
import { Services } from '@/features/landing/components/services'
import { Industries } from '@/features/landing/components/industries'
import { CaseStudies } from '@/features/landing/components/case-studies'
import { Testimonials } from '@/features/landing/components/testimonials'
import { FAQ } from '@/features/landing/components/faq'
import { Pricing } from '@/features/landing/components/pricing'
import { CTA } from '@/features/landing/components/cta'
import { Contact } from '@/features/landing/components/contact'
import { Header } from '@/shared/components/header'
import { Footer } from '@/shared/components/footer'
import { SectionNumbers } from '@/features/landing/components/section-numbers'

export default function Home() {
    return (
        <main id="main" className="min-h-screen bg-background">
            <Header />
            <SectionNumbers />
            <Hero />
            <Services />
            <Industries />
            <CaseStudies />
            <Testimonials />
            <FAQ />
            <Pricing />
            <CTA />
            <Contact />
            <Footer />
        </main>
    )
}