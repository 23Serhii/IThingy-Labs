export const metadata = {
    title: 'Validate Your MVP in 4 Weeks — The Secure Sprint by IThingy Labs LLC',
    description: 'Discover how IThingy Labs LLC helps startups validate their MVPs fast and securely with our 4-week Secure Sprint model — from prototype to roadmap.',
}

export default function SecureSprintMVP() {
    return (
        <main className="container mx-auto px-4 py-16 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                Validate Your MVP in 4 Weeks — The Secure Sprint
            </h1>

            <p className="text-muted-foreground mb-6">
                Startups often lose time and money on slow development cycles. At <strong>IThingy Labs LLC</strong>, we’ve designed a <strong>Secure Sprint</strong> — a fixed 4-week process that helps founders move from concept to a validated prototype quickly and safely.
            </p>

            <h2 className="text-2xl font-semibold mb-3 text-foreground">What is a Secure Sprint?</h2>
            <p className="text-muted-foreground mb-6">
                It’s a structured engagement model where our dedicated team builds a working Proof-of-Concept (PoC) in just four weeks. Each sprint happens inside an <strong>isolated container environment</strong> with full NDA protection and zero data retention.
            </p>

            <h2 className="text-2xl font-semibold mb-3 text-foreground">How it works</h2>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li><strong>Week 1:</strong> Technical & UX discovery — defining scope and success metrics.</li>
                <li><strong>Week 2:</strong> Prototype and core system architecture.</li>
                <li><strong>Week 3:</strong> Secure integration and performance testing.</li>
                <li><strong>Week 4:</strong> Delivery, documentation, and roadmap presentation.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3 text-foreground">Why it matters</h2>
            <p className="text-muted-foreground mb-6">
                By compressing the validation process into four focused weeks, founders can save months of development time and thousands of dollars in early mistakes. Security and clarity are embedded in every phase — from infrastructure setup to delivery.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-8">
                “We don’t just build prototypes — we validate ideas under real conditions.”
            </blockquote>

            <h2 className="text-2xl font-semibold mb-3 text-foreground">Ready to validate your MVP?</h2>
            <p className="text-muted-foreground mb-6">
                Start your Secure Sprint today and get a working prototype, full code ownership, and a strategic roadmap — all within a month.
            </p>

            <a
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-5 py-3 rounded-md font-semibold"
            >
                Contact IThingy Labs LLC
            </a>
        </main>
    )
}
