import { Module } from '@nestjs/common'
import { ContactController } from './contact.controller'
import { ContactService } from './contact.service'
import { SecurityModule } from '../security/security.module'
import { NotifyModule } from '../notify/notify.module'
import { StorageModule } from '../storage/storage.module'

@Module({
    imports: [SecurityModule, NotifyModule, StorageModule],
    controllers: [ContactController],
    providers: [ContactService],
})
export class ContactModule {}
