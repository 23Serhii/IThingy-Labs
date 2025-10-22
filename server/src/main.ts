// main.ts
import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'
import {ValidationPipe} from '@nestjs/common'
import helmet from 'helmet'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const ALLOW_ORIGINS = [
        'https://ithingy.dev',
        'http://localhost:3000',
    ];
    app.use(helmet())

    // ✅ CORS
    const allowedOrigins = [
        process.env.CLIENT_ORIGIN || 'http://localhost:3000',
    ]

    app.enableCors({
        origin(origin, cb) {
            if (!origin) return cb(null, true);
            if (ALLOW_ORIGINS.includes(origin)) return cb(null, true);
            return cb(new Error('Not allowed by CORS'));
        },
        methods: ['GET', 'POST', 'OPTIONS', 'HEAD'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: false,
        optionsSuccessStatus: 204,
    });

    app.use(helmet({
        crossOriginEmbedderPolicy: false,
        crossOriginOpenerPolicy: false,
        crossOriginResourcePolicy: {policy: 'cross-origin'},
    }));

    app.useGlobalPipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true, transform: true}))

    const port = Number(process.env.PORT || 4000)
    await app.listen(port, '0.0.0.0')
    console.log(`API listening on http://0.0.0.0:${port}`)
}

bootstrap()
