import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ThrottlerModule } from '@nestjs/throttler'
import { validateEnv } from './common/env.validation'
import { SecurityModule } from './security/security.module'
import { NotifyModule } from './notify/notify.module'
import { StorageModule } from './storage/storage.module'
import { ContactModule } from './contact/contact.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validate: validateEnv, // zod-валідація .env
        }),
        ThrottlerModule.forRoot([
            { ttl: 60, limit: 10 }, // 10 запитів на хвилину з IP
        ]),
        SecurityModule,
        NotifyModule,
        StorageModule,
        ContactModule,
    ],
})
export class AppModule {}
