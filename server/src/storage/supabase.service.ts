import {Injectable} from '@nestjs/common'
import fetch from 'node-fetch'
import {ConfigService} from '@nestjs/config'

@Injectable()
export class SupabaseService {
    constructor(private readonly cfg: ConfigService) {
    }

    async insertLead(lead: any) {
        const url = this.cfg.get<string>('SUPABASE_URL');
        const key = this.cfg.get<string>('SUPABASE_SERVICE_ROLE');
        if (!url || !key) {
            throw new Error('Supabase env missing');
        }

        const r = await fetch(`${url}/rest/v1/leads`, {
            method: 'POST',
            headers: {
                apikey: key,
                Authorization: `Bearer ${key}`,
                'Content-Type': 'application/json',
                Prefer: 'return=representation',
            },
            body: JSON.stringify(lead),
        });

        if (!r.ok) {
            const t = await r.text();
            throw new Error(`Supabase error: ${r.status} ${t}`);
        }

        const rows = await r.json(); // масив із одним об’єктом
        return rows?.[0]; // { id, ... }
    }
}

