// src/main.ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import helmet from 'helmet'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.use(helmet())

    // Підтримай кілька origin-ів через кому (фронт на Vercel + твій домен)
    const origins = (process.env.CLIENT_ORIGIN ?? 'http://localhost:3000')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)

    app.enableCors({
        origin: origins,
        methods: ['GET', 'POST', 'OPTIONS'],
        credentials: false,
    })

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    )

    const port = Number(process.env.PORT ?? 4000)
    await app.listen(port, '0.0.0.0') // важливо для Railway/докера
    console.log(`API listening on http://0.0.0.0:${port}`)
}
bootstrap()
