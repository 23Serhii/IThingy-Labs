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
        // 🧹 Без CAPTCHA перевірки
        const lead = {
            full_name: dto.name,
            email: dto.email,
            phone: dto.phone,
            message: dto.message,
            utm: dto.utm ?? {},
            ip: ip ?? null,
            user_agent: ua ?? null,
        }

        // 💾 Опціонально зберегти у Supabase
        await this.db.insertLead(lead).catch(() => {})

        const text = [
            '🟢 New Lead — IThingy Labs',
            `👤 Name: ${lead.full_name}`,
            `📧 Email: ${lead.email}`,
            `📞 Phone: ${lead.phone}`,
            `💬 Message: ${lead.message}`,
            ip ? `🌐 IP: ${ip}` : '',
        ].join('\n')

        // 📤 Надсилаємо в Telegram і на пошту
        await Promise.allSettled([
            this.mail.send('New Lead — IThingy Labs', text),
            this.tg.send(text),
        ])

        return { ok: true }
    }
}
