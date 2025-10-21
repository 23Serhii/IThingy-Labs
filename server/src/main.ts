import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.use(helmet({ crossOriginResourcePolicy: false }))

    // дозволяємо кілька оріджинів через кому
    app.enableCors({
        origin: (process.env.CLIENT_ORIGIN ?? 'http://localhost:3000').split(','),
        methods: ['GET','POST','OPTIONS'],
    })

    app.use(rateLimit({ windowMs: 60_000, max: 60 }))

    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }))

    const port = Number(process.env.PORT ?? 4000)
    await app.listen(port, '0.0.0.0')
    console.log(`API listening on :${port}`)
}
bootstrap()
