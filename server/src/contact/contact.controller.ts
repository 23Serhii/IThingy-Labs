import { Body, Controller, Ip, Post, Req } from '@nestjs/common'
import { LeadDto } from './dto/lead.dto'
import { ContactService } from './contact.service'

@Controller('api')
export class ContactController {
    constructor(private readonly service: ContactService) {}

    @Post('contact')
    async postContact(@Body() dto: LeadDto, @Ip() ip: string, @Req() req: any) {
        const ua = req.headers['user-agent'] as string | undefined
        const result = await this.service.handleLead(dto, ip, ua)
        if (!result.ok) return { ok: false, error: result }
        return { ok: true }
    }
}
