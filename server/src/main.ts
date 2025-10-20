import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.use(helmet())
    app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000' }))

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    )

    const port = process.env.PORT ? Number(process.env.PORT) : 4000
    await app.listen(port)
    console.log(`API listening on http://localhost:${port}`)
}
bootstrap()
