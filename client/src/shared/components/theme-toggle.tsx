// src/shared/ui/theme-toggle.tsx
'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/shared/ui/button'

export function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => setMounted(true), [])

    if (!mounted) return <Button variant="ghost" size="icon" disabled />

    // next theme cycle: light -> dark -> system -> light
    const next = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(next)}
            title={`Theme: ${resolvedTheme} (mode: ${theme})`}
        >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
