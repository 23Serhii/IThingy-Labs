import { Injectable } from '@nestjs/common'
import fetch from 'node-fetch'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class TurnstileService {
    constructor(private readonly cfg: ConfigService) {}

    async verify(token?: string, ip?: string | null) {
        if (!token) return false
        const secret = this.cfg.get<string>('TURNSTILE_SECRET')!
        const form = new URLSearchParams()
        form.append('secret', secret)
        form.append('response', token)
        if (ip) form.append('remoteip', ip)
        const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: form,
        })
        const json = (await r.json()) as { success?: boolean }
        return !!json.success
    }
}
