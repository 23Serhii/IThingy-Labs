import { Injectable, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class MailService {
    private readonly log = new Logger(MailService.name)
    private warned = false

    constructor(private readonly cfg: ConfigService) {}

    async send(subject: string, text: string, replyTo?: string) {
        const apiKey = this.cfg.get<string>('RESEND_API_KEY')
        const from = this.cfg.get<string>('RESEND_FROM')
        const to = this.cfg.get<string>('RESEND_TO')

        if (!apiKey || !from || !to) {
            if (!this.warned) {
                this.log.warn('Mail disabled: missing RESEND_API_KEY / RESEND_FROM / RESEND_TO')
                this.warned = true
            }
            return
        }

        const body = {
            from,
            to,                     // може бути string або string[]
            subject,
            text,
            reply_to: replyTo,      // ← корисно: відповісти прямо на email ліда
            // html: '<pre>' + escapeHtml(text) + '</pre>', // якщо захочеш форматований HTML
        }

        const r = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(body),
        })

        const resText = await r.text()
        if (!r.ok) {
            this.log.error(`Resend failed: ${r.status} ${resText}`)
            throw new Error(`Resend failed: ${r.status}`)
        }

        try {
            const json = JSON.parse(resText) as { id?: string }
            this.log.log(`Resend ok${json?.id ? ` id=${json.id}` : ''}`)
            return json?.id
        } catch {
            this.log.log('Resend ok (no JSON)')
            return undefined
        }
    }
}
