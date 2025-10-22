// health.controller.ts
import { Controller, Get } from '@nestjs/common'

@Controller('api')
export class HealthController {
    @Get('health')
    health() { return { ok: true, ts: Date.now() } }
}
