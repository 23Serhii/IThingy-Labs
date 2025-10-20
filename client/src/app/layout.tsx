import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {ThemeProvider} from '@/shared/providers/theme-provider'
import Script from 'next/script'


const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
const siteName = 'iThingy Labs'

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: `${siteName}`,
        template: `%s | ${siteName}`,
    },
    description: 'Beautiful landing page with animations, accessibility and dark mode',
    keywords: ['landing', 'modern', 'nextjs', 'typescript', 'accessibility', 'dark mode'],
    applicationName: siteName,
    authors: [{name: siteName}],
    creator: siteName,
    openGraph: {
        type: 'website',
        locale: 'uk_UA',
        url: siteUrl,
        siteName,
        title: `${siteName} Labs`,
        description: 'Beautiful landing page with animations, accessibility and dark mode',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: `${siteName} preview`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${siteName} Labs`,
        description: 'Beautiful landing page with animations, accessibility and dark mode',
        images: ['/og-image.png'],
        creator: '@ithingy',
    },
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
    },
    themeColor: [
        {media: '(prefers-color-scheme: light)', color: '#ffffff'},
        {media: '(prefers-color-scheme: dark)', color: '#0b0b0f'},
    ],
}
export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="uk" suppressHydrationWarning>
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive"/>

        <body className={inter.className}>
        <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-4 focus:rounded-md focus:bg-background focus:px-4 focus:py-2"
        >
            Пропустити до основного контенту
        </a>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
