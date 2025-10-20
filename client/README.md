# iThingy — сучасна лендинг-сторінка на Next.js

Сучасний лендінг з анімаціями, темною темою, покращеним SEO та доступністю (a11y). Створено за кращими практиками, натхненними підходами провідних компаній індустрії.

## Швидкий старт

```bash
npm i
npm run dev
# prod
npm run build && npm run start
```

Відкрийте http://localhost:3000 у браузері.

## Налаштування
- NEXT_PUBLIC_SITE_URL — публічний URL сайту (для метаданих/OG).

## Технології
- Next.js (App Router), TypeScript
- Tailwind CSS
- framer-motion (анімації з підтримкою prefers-reduced-motion)
- radix-ui + class-variance-authority (компоненти/варіанти)
- next-themes (світла/темна тема)

## Референси та найкращі практики
Натхнення та патерни взяті зі стилю й UX підходів таких компаній:
- Apple — уважність до типографіки та жестів: https://www.apple.com
- Stripe — чітка інформаційна архітектура і анімації: https://stripe.com
- Vercel — швидкість, простота та документація: https://vercel.com
- Linear — чистота інтерфейсу та мікровзаємодії: https://linear.app
- GitHub — доступність та масштабованість UI: https://github.com

## Що покращено
- SEO: Open Graph, Twitter card, canonical, robots, themeColor
- A11y: skip-link, aria-атрибути навігації, коректні ролі
- UX: адаптація до prefers-reduced-motion, плавні анімації
- UI: уніфіковані кнопки, динамічний рік у футері

## Структура
- src/app — layout, сторінки, глобальні стилі
- src/features/landing/components — секції лендінгу
- src/shared — спільні компоненти, ui, провайдери, утиліти

## Ліцензія
MIT
