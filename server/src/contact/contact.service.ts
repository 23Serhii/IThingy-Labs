import { Injectable } from '@nestjs/common'
import { MailService } from '../notify/mail.service'
import { TelegramService } from '../notify/telegram.service'
import { SupabaseService } from '../storage/supabase.service'
import { LeadDto } from './dto/lead.dto'

@Injectable()
export class ContactService {
    constructor(
        private readonly mail: MailService,
        private readonly tg: TelegramService,
        private readonly db: SupabaseService,
    ) {}

    async handleLead(dto: LeadDto, ip?: string, ua?: string) {
        const lead = {
            full_name: dto.name,
            email: dto.email,
            phone: dto.phone,
            message: dto.message,
            utm: dto.utm ?? {},
            ip: ip ?? null,
            user_agent: ua ?? null,
        }

        await this.db.insertLead(lead).catch(() => {})

        const lines = [
            '🟢 New Lead — IThingy Labs',
            `👤 Name: ${lead.full_name}`,
            `📧 Email: ${lead.email}`,
            `📞 Phone: ${lead.phone}`,
            `💬 Message: ${lead.message}`,
            ip ? `🌐 IP: ${ip}` : '',
            ua ? `🧭 UA: ${ua}` : '',
            Object.keys(lead.utm || {}).length ? `📈 UTM: ${JSON.stringify(lead.utm)}` : '',
        ].filter(Boolean)

        const text = lines.join('\n')

        await Promise.allSettled([
            this.mail.send('New Lead — IThingy Labs', text, lead.email), // ← replyTo
            this.tg.send(text),
        ])

        return { ok: true }
    }
}
