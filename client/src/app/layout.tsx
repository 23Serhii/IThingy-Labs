import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {ThemeProvider} from '@/shared/providers/theme-provider'
import Script from 'next/script'
import {SpeedInsights} from '@vercel/speed-insights/next'


const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
const siteName = 'iThingy Labs'
const siteTagline = 'Secure & performant web and mobile engineering'

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteName,
        template: `%s | ${siteName}`,
    },

    description:
        'iThingy Labs is a development studio building fast, secure, and scalable products. From landing pages and SPAs to complex web and mobile platforms — powered by Next.js, Angular, NestJS, Go, PostgreSQL, and AWS.',

    keywords: [
        'iThingy Labs',
        'web development',
        'mobile development',
        'Next.js',
        'Angular',
        'TypeScript',
        'NestJS',
        'Go',
        'PostgreSQL',
        'AWS',
        'CI/CD',
        'UI/UX',
        'accessibility',
        'performance',
        'startup engineering',
    ],

    applicationName: siteName,
    authors: [{ name: siteName }],
    creator: siteName,

    icons: {
        icon: [
            { url: '/ithingy-logo.svg', type: 'image/svg+xml', sizes: 'any' },
            { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
            { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
        ],
        apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
        shortcut: ['/favicon.ico'],
        other: [
            { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#6b21a8' },
        ],
    },
    manifest: '/site.webmanifest',

    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName,
        title: `${siteName} — ${siteTagline}`,
        description:
            'We craft digital products with a focus on speed, security, and user experience — from design to deployment with modern stacks and CI/CD automation.',
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
        title: `${siteName} — ${siteTagline}`,
        description:
            'Building high-quality web and mobile products with Next.js, Angular, NestJS, Go, and AWS.',
        images: ['/og-image.png'],
        creator: '@ithingy',
    },

    alternates: { canonical: '/' },

    robots: { index: true, follow: true },

    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0b0b0f' },
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
        <SpeedInsights />
        </body>
        </html>
    )
}
