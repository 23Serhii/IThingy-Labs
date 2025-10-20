'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'

// Без імпорту з internal path — виводимо тип пропсів від компонента
type NextThemesProps = React.ComponentProps<typeof NextThemesProvider>

export function ThemeProvider({ children, ...props }: NextThemesProps) {
    return (
        <NextThemesProvider
            // дефолти: працювати "за системою"
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            {...props}
        >
            <ColorSchemeSync />
            {children}
        </NextThemesProvider>
    )
}

/**
 * Синхронізація CSS `color-scheme` з resolvedTheme (light | dark).
 * useTheme() повертає resolvedTheme (з урахуванням system preference).
 * Це потрібно, щоб нативні елементи (інпути, scrollbar і т.д.) рендерились консистентно.
 */
function ColorSchemeSync(): null {
    const { resolvedTheme } = useTheme() as { resolvedTheme?: 'light' | 'dark' | undefined }

    React.useEffect(() => {
        const el = document.documentElement
        if (!el) return

        if (resolvedTheme === 'dark') {
            el.style.colorScheme = 'dark'
        } else if (resolvedTheme === 'light') {
            el.style.colorScheme = 'light'
        } else {
            // якщо undefined — скинемо, нехай браузер обирає
            el.style.colorScheme = ''
        }

        return () => {
            el.style.colorScheme = ''
        }
    }, [resolvedTheme])

    return null
}
