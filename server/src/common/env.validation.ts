import { z } from 'zod'

const EnvSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    PORT: z.coerce.number().default(4000),
    CLIENT_ORIGIN: z.string().url().default('http://localhost:3000'),

    // Turnstile
    TURNSTILE_SECRET: z.string().min(10),

    // Email (Resend)
    RESEND_API_KEY: z.string().optional(),
    RESEND_FROM: z.string().optional(),
    RESEND_TO: z.string().optional(),

    // Telegram
    TELEGRAM_BOT_TOKEN: z.string().optional(),
    TELEGRAM_CHAT_ID: z.string().optional(),

    // Supabase (опційно)
    SUPABASE_URL: z.string().url().optional(),
    SUPABASE_SERVICE_ROLE: z.string().optional(),
})

export type Env = z.infer<typeof EnvSchema>

export function validateEnv(config: Record<string, unknown>) {
    const parsed = EnvSchema.safeParse(config)
    if (!parsed.success) {
        console.error('Invalid environment:', parsed.error.flatten().fieldErrors)
        process.exit(1)
    }
    return parsed.data
}
