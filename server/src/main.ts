// main.ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import helmet from 'helmet'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.use(helmet())

    // ✅ CORS
    const allowedOrigins = [
        process.env.CLIENT_ORIGIN || 'http://localhost:3000',   // прод фронт
    ]
    // опційно: дозволити всі прев’ю з Vercel
    const vercelPreview = /\.vercel\.app$/

    app.enableCors({
        origin: (origin, cb) => {
            if (!origin) return cb(null, true) // Postman/healthchecks
            if (allowedOrigins.includes(origin) || vercelPreview.test(origin)) {
                return cb(null, true)
            }
            return cb(new Error(`Not allowed by CORS: ${origin}`), false)
        },
        methods: ['GET', 'POST', 'OPTIONS', 'HEAD'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
        credentials: true,
        maxAge: 86400,
    })

    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }))

    const port = Number(process.env.PORT || 4000)
    await app.listen(port, '0.0.0.0')
    console.log(`API listening on http://0.0.0.0:${port}`)
}
bootstrap()
