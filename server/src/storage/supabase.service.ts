import { Injectable } from '@nestjs/common'
import fetch from 'node-fetch'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class SupabaseService {
    constructor(private readonly cfg: ConfigService) {}

    async insertLead(lead: any) {
        const url = this.cfg.get<string>('SUPABASE_URL')
        const key = this.cfg.get<string>('SUPABASE_SERVICE_ROLE')
        if (!url || !key) throw new Error('Supabase env missing')

        const r = await fetch(`${url}/rest/v1/leads`, {
            method: 'POST',
            headers: {
                apikey: key,
                Authorization: `Bearer ${key}`,
                'Content-Type': 'application/json',
                Prefer: 'return=representation',
            },
            body: JSON.stringify(lead),
        })

        const raw = await r.text()
        if (!r.ok) {
            throw new Error(`Supabase error: ${r.status} ${raw}`)
        }

        // PostgREST повертає масив вставлених рядків
        const data = raw ? JSON.parse(raw) : []
        return Array.isArray(data) ? data[0] ?? null : null
    }
}
