// main.ts
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import helmet from 'helmet'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    app.use(helmet({
        crossOriginEmbedderPolicy: false,
        crossOriginOpenerPolicy: false,
        crossOriginResourcePolicy: { policy: 'cross-origin' },
    }))

    // Дозволи CORS (не завадять навіть якщо не в них справа)
    const ALLOW = ['https://ithingy.dev','http://localhost:3000','http://127.0.0.1:3000', 'https://i-thingy-labs.vercel.app']
    app.enableCors({
        origin(origin, cb) {
            if (!origin) return cb(null, true)
            return cb(null, ALLOW.includes(origin))
        },
        methods: ['GET','POST','OPTIONS','HEAD'],
        allowedHeaders: ['Content-Type','Authorization'],
        optionsSuccessStatus: 204,
    })

    // Головне — порт і 0.0.0.0:
    const port = Number(process.env.PORT ?? 8080)
    await app.listen(port, '0.0.0.0')
    console.log(`API listening on http://0.0.0.0:${port}`)
}
bootstrap().catch(err => {
    console.error('BOOTSTRAP ERROR', err)
    process.exit(1)
})
