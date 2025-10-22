// env.validation.ts
import { z } from 'zod'

export const validateEnv = (config: Record<string, unknown>) => {
    const schema = z.object({
        NODE_ENV: z.string().default('production'),
        PORT: z.string().optional(), // Railway дасть PORT
        CLIENT_ORIGIN: z.string().url().optional(),
        TURNSTILE_SECRET: z.string().optional(),
        RESEND_API_KEY: z.string().optional(),
        RESEND_FROM: z.string().optional(),
        RESEND_TO: z.string().optional(),
        SUPABASE_URL: z.string().url().optional(),
        SUPABASE_SERVICE_ROLE: z.string().optional(),
    })
    const parsed = schema.safeParse(config)
    if (!parsed.success) {
        // Не фейлимо все — лише лог:
        console.warn('ENV WARN:', parsed.error.flatten())
    }
    return config
}
