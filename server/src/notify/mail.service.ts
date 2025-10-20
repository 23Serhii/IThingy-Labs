import { Injectable } from '@nestjs/common'
import fetch from 'node-fetch'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class MailService {
    constructor(private readonly cfg: ConfigService) {}

    async send(subject: string, text: string) {
        const apiKey = this.cfg.get<string>('RESEND_API_KEY')
        const from = this.cfg.get<string>('RESEND_FROM')
        const to = this.cfg.get<string>('RESEND_TO')
        if (!apiKey || !from || !to) return // тихо пропускаємо, якщо не налаштовано

        const r = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ from, to, subject, text }),
        })
        if (!r.ok) {
            const t = await r.text()
            throw new Error(`Resend failed: ${r.status} ${t}`)
        }
    }
}
