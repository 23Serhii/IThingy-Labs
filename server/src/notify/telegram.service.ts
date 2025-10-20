import { Injectable } from '@nestjs/common'
import fetch from 'node-fetch'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class TelegramService {
    constructor(private readonly cfg: ConfigService) {}

    async send(text: string) {
        const token = this.cfg.get<string>('TELEGRAM_BOT_TOKEN')
        const chatId = this.cfg.get<string>('TELEGRAM_CHAT_ID')
        if (!token || !chatId) return

        const url = `https://api.telegram.org/bot${token}/sendMessage`
        const r = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
        })
        if (!r.ok) {
            const t = await r.text()
            throw new Error(`Telegram failed: ${r.status} ${t}`)
        }
    }
}
