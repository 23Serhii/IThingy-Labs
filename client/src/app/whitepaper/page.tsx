// app/whitepaper/page.tsx
import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: 'IThingy — Whitepaper: Secure AI-enabled Development',
    description:
        'Whitepaper — security & privacy posture, Secure Sprint and benefits of using iThingy AI-assisted workflows.',
}

export default function WhitepaperPage() {
    const pdfPath = '/IThingyLabsWhitepaper.pdf'

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">IThingy — Whitepaper</h1>
                    <p className="text-muted-foreground mb-6">
                        Security &amp; privacy for AI-enabled development, plus measurable time &amp; cost benefits of our Secure Sprint approach.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                        <a
                            href={pdfPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 py-2 rounded-md bg-primary text-primary-foreground font-semibold"
                        >
                            Open PDF (new tab)
                        </a>

                        <a
                            href={pdfPath}
                            download
                            className="inline-block px-5 py-2 rounded-md border border-border text-sm text-foreground bg-card/40"
                        >
                            Download PDF
                        </a>

                        <Link href="/#contact" className="inline-block px-5 py-2 rounded-md text-sm bg-emerald-600 text-white">
                            Start a Secure Sprint
                        </Link>
                    </div>

                    <div className="text-sm text-muted-foreground mb-8">
                        <strong>Quick highlights:</strong>
                        <ul className="mt-2 list-disc list-inside space-y-1">
                            <li>Zero-Retention by default — prompts &amp; outputs aren&apos;t stored unless you opt-in.</li>
                            <li>Isolated per-client containers and audited access to prevent leakage.</li>
                            <li>Secure Sprint: 4-week fixed engagement (PoC + roadmap + handoff-ready deliverables).</li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto rounded-md overflow-hidden border border-border bg-card/40">
                    <iframe src={pdfPath} title="IThingy Whitepaper" className="w-full h-[80vh] border-0" />

                    <div className="p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-3">
                            If the document does not display, you can download it directly:
                        </p>
                        <a href={pdfPath} download className="text-sm underline">
                            Download whitepaper (PDF)
                        </a>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mt-8 text-center text-sm text-muted-foreground">
                    <p>
                        Need a private copy or NDA before review? <Link href="/contact?intent=nda" className="underline">Request NDA</Link> — we&apos;ll provision an isolated PoC environment.
                    </p>
                </div>
            </div>
        </main>
    )
}
