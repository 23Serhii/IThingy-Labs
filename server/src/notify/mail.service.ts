// server/src/notify/mail.service.ts
import { Injectable, Logger } from '@nestjs/common';
import fetch from 'node-fetch';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
    private readonly log = new Logger(MailService.name);
    constructor(private readonly cfg: ConfigService) {}

    private htmlify(text: string) {
        const esc = (s: string) =>
            s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return `<pre style="font:14px/1.5 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono','Courier New', monospace">${esc(
            text,
        )}</pre>`;
    }

    async send(subject: string, text: string, replyTo?: string) {
        const apiKey = this.cfg.get<string>('RESEND_API_KEY');
        const from = this.cfg.get<string>('RESEND_FROM');
        const to = this.cfg.get<string>('RESEND_TO');

        if (!apiKey || !from || !to) {
            this.log.warn(
                'Mail disabled: missing RESEND_API_KEY / RESEND_FROM / RESEND_TO',
            );
            return { ok: false, skipped: true };
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 12_000);

        try {
            const res = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                signal: controller.signal,
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from,
                    to: to.split(',').map((s) => s.trim()),
                    subject,
                    text,
                    html: this.htmlify(text),
                    reply_to: replyTo,
                }),
            });

            const payload = await res.text();
            if (!res.ok) {
                // 401 → ключ невірний; 422 → from-домен не верифікований
                throw new Error(`Resend ${res.status}: ${payload}`);
            }

            this.log.log('Mail sent via Resend');
            return { ok: true };
        } catch (e: any) {
            this.log.error(`Mail send failed: ${e.message}`);
            return { ok: false, error: e.message };
        } finally {
            clearTimeout(timeout);
        }
    }
}
