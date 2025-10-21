// src/security/turnstile.service.ts
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class TurnstileService {
    private readonly enabled: boolean
    private readonly secret?: string

    constructor(private readonly cfg: ConfigService) {
        this.secret = this.cfg.get<string>('TURNSTILE_SECRET')
        const required = this.cfg.get<boolean>('TURNSTILE_REQUIRED') ?? false
        this.enabled = required && !!this.secret
    }

    async verify(token?: string, ip?: string): Promise<boolean> {
        if (!this.enabled) return true // капча вимкнена — пускаємо
        if (!token) return false

        const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret: this.secret!,
                response: token,
                remoteip: ip ?? '',
            }),
        })
        const json = (await r.json()) as { success?: boolean }
        return !!json.success
    }
}
