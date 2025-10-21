// src/common/env.validation.ts
import { z } from 'zod';

const EnvSchema = z
    .object({
        NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
        PORT: z.coerce.number().default(4000),

        // Можна передати кілька origin-ів через кому
        CLIENT_ORIGIN: z.string().min(1, 'CLIENT_ORIGIN is required'),

        // Turnstile: робимо необов’язковим за замовчуванням
        TURNSTILE_REQUIRED: z.coerce.boolean().default(false),
        TURNSTILE_SECRET: z.string().optional(),

        // Mail (Resend)
        RESEND_API_KEY: z.string().optional(),
        RESEND_FROM: z.string().email().optional(),
        RESEND_TO: z.string().email().optional(),

        // Telegram (опційно)
        TELEGRAM_BOT_TOKEN: z.string().optional(),
        TELEGRAM_CHAT_ID: z.string().optional(),

        // Supabase (опційно)
        SUPABASE_URL: z.string().url().optional(),
        SUPABASE_SERVICE_ROLE: z.string().optional(),
    })
    .refine(
        (env) => !env.TURNSTILE_REQUIRED || !!env.TURNSTILE_SECRET,
        {
            path: ['TURNSTILE_SECRET'],
            message: 'Provide TURNSTILE_SECRET when TURNSTILE_REQUIRED=true',
        }
    );

export function validateEnv(config: Record<string, unknown>) {
    const parsed = EnvSchema.safeParse(config);
    if (!parsed.success) {
        // Кидаємо читабельну помилку, яку Railway покаже в логах
        throw new Error(JSON.stringify(parsed.error.format(), null, 2));
    }
    return parsed.data;
}
