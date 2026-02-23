// export const dictionaries = {
//   en: {
//     nav: {
//       hero: "Hero",
//       services: "Services",
//       industries: "Industries",
//       cases: "Case Studies",
//       testimonials: "Security",
//       faq: "FAQ",
//       pricing: "Pricing",
//       cta: "Get Started",
//       contact: "Contact",
//     },
//     cases: {
//       title: "Projects",
//       subtitle: "Selected case studies",
//       deliveryLabel: "Delivery vs typical",
//       faster: "faster",
//       engineers: "engineers",
//       dropsquad: {
//         title: "DropSquad Dashboard",
//         desc: "Realtime operations dashboard with role-based access, audits and performance analytics. Built for fast incident response.",
//         results: ["Time-to-insight ↓ 3x", "Stable at 2k concurrent users"],
//       },
//       avesint: {
//         title: "AVESINT.AI",
//         desc: "Military-oriented OSINT analytics platform built as a monorepo with React, NestJS and asynchronous background workers.",
//         results: ["Query latency < 120ms", "Conversion +12%"],
//       },
//       tonsai: {
//         title: "Tonsai Platform",
//         desc: "High-throughput platform designed for scale — resilient APIs and async workers to handle bursty traffic patterns.",
//         results: ["99.95% uptime target", "Processing throughput ↑ 4x"],
//       },
//     },
//
//     contact: {
//       title: "Get in touch",
//       subtitle: "Ready to scale? Let's talk about your project.",
//       infoTitle: "Contact Information",
//       infoDesc: "Fill out the form or reach out directly via email or phone.",
//       labels: {
//         name: "Full Name",
//         email: "Email Address",
//         phone: "Phone Number",
//         message: "Message",
//       },
//       placeholders: {
//         name: "John Doe",
//         email: "john@example.com",
//         phone: "+1 (555) 000-0000",
//         message: "Briefly describe your idea",
//       },
//       errors: {
//         name: "Please enter your name",
//       },
//       submit: "Send to WhatsApp",
//       footer: {
//         rights: "All rights reserved.",
//         developedBy: "Developed by",
//       },
//     },
//
//     cta: {
//       title: "Ready to start your project?",
//       description:
//         "Join the forward-thinking companies building secure, scalable, and high-performance digital products with our expert engineering team.",
//       primaryBtn: "Get Started",
//       secondaryBtn: "Contact us",
//     },
//
//     // locales/dictionaries.ts
//
//     faq: {
//       prevBtn: "Prev",
//       nextBtn: "Next",
//       processesTitle: "Processes",
//       deliverablesTitle: "Deliverables",
//       flowTitle: "Our flow — predictable, fast, secure",
//       flowSubtitle:
//         "Clear steps, measurable outputs, and fast feedback at every stage.",
//       stepIndicator: "Step {current} of {total}",
//       whyTitle: "Why this step matters",
//       whyDesc:
//         "Explanation of how this step reduces risk and accelerates delivery.",
//       whyPoints: [
//         "Faster feedback cycles",
//         "Clear acceptance criteria",
//         "Audit-ready artefacts",
//       ],
//       ctaTitle: "Ready to validate fast?",
//       ctaDesc: "Book a Secure Sprint: 4 weeks, isolated PoC, NDA available.",
//       ctaBtn: "Contact us",
//       badges: { zero: "Zero Retention", isolated: "Isolated containers" },
//       comparison: {
//         title: "Quick comparison",
//         whitepaper: "Read whitepaper",
//         metrics: ["Metric", "Typical outsourcer", "Us", "Why it matters"],
//         rows: [
//           {
//             m: "Time-to-market",
//             o: "~16 weeks",
//             u: "~10–11 weeks (≈40% faster)",
//             n: "Earlier revenue",
//           },
//           {
//             m: "Initial dev cost",
//             o: "Standard hourly burn",
//             u: "Lower long-term TCO",
//             n: "Faster ROI",
//           },
//           {
//             m: "Security",
//             o: "Shared infra",
//             u: "Isolated containers",
//             n: "Privacy guarantees",
//           },
//           {
//             m: "IP Ownership",
//             o: "Potential mixing",
//             u: "Full IP ownership",
//             n: "Client retains control",
//           },
//         ],
//       },
//       steps: [
//         {
//           number: "01",
//           title: "Discover — Business Audit",
//           description: "1 week deep-dive: product goals and quick-win map.",
//           processes: ["Stakeholder interviews"],
//           deliverables: ["Opportunity map"],
//         },
//         {
//           number: "02",
//           title: "Design Sprint — Prototype",
//           description:
//             "2-week validated prototype and prioritized MVP backlog.",
//           processes: ["UX prototype"],
//           deliverables: ["Clickable prototype"],
//         },
//         {
//           number: "03",
//           title: "Secure Build — Delivery",
//           description: "Sprint-based dev with internal AI-assistants.",
//           processes: ["Implementation sprints"],
//           deliverables: ["MVP release"],
//         },
//         {
//           number: "04",
//           title: "Harden & Certify",
//           description: "Security hardening and compliance checks.",
//           processes: ["Pentest"],
//           deliverables: ["Audit artefacts"],
//         },
//         {
//           number: "05",
//           title: "Launch & Observe",
//           description: "Staged rollout and monitoring dashboards.",
//           processes: ["Canary rollout"],
//           deliverables: ["Monitoring Dashboards"],
//         },
//         {
//           number: "06",
//           title: "Grow & Iterate",
//           description: "Data-driven roadmap and prioritized backlog.",
//           processes: ["A/B tests"],
//           deliverables: ["Insights"],
//         },
//       ],
//       faqTitle: "Frequently asked questions",
//       questions: [
//         {
//           q: "Do you store prompts or client data?",
//           a: "By default — no. We follow a Zero-Retention policy for prompts and transient outputs unless you explicitly opt in. All processing runs in isolated client environments.",
//         },
//         {
//           q: "Can we sign an NDA and get an isolated PoC?",
//           a: "Yes. We sign NDAs and can provision a fully isolated PoC (separate container + dedicated endpoints + audit logs) for confidential evaluation.",
//         },
//         {
//           q: "What is a Secure Sprint and what does it include?",
//           a: "A fixed 4-week engagement: secure PoC, working prototype, prioritized roadmap and a short security/risk report. Delivered under NDA.",
//         },
//         {
//           q: "How fast can you deliver an MVP?",
//           a: "Our process (Discover → Design → Secure Build) typically shortens time-to-market by ~30–40% versus traditional flows.",
//         },
//         {
//           q: "Who owns the code and the data?",
//           a: "Clients retain ownership of their code and data as defined in the contract. We provide full export of artifacts and clear IP clauses.",
//         },
//         {
//           q: "How do you ensure security and compliance?",
//           a: "We apply multi-layered controls: isolated containers, Vault for secrets, key rotation, logging, and regular pentests.",
//         },
//         {
//           q: "What technologies and stacks do you use?",
//           a: "Typically: React/Next.js frontend, Node/Python backend, Docker, Kubernetes, CI/CD pipelines, and modern ML tools.",
//         },
//         {
//           q: "What about post-launch support and SLAs?",
//           a: "We offer support packages from ad-hoc to SLA-backed plans with monitoring, incident response and maintenance.",
//         },
//       ],
//       footer: {
//         text: "Didn’t find the answer?",
//         contact: "Contact us",
//         or: "or",
//         sprint: "request a Secure Sprint",
//       },
//     },
//     hero: {
//       badge: "IThingy Labs LLC — startup solutions agency",
//       title1: "We are smarter. We are faster. We are better. We are — ",
//       title2: "IThingy",
//       btnPrimary: "Get started",
//       btnSecondary: "Learn more",
//     },
//
//     industries: {
//       title: "Beautiful products. Built fast. Built secure.",
//       subtitle:
//         "We accelerate product delivery by using AI as a developer tool — not a data sink. Projects run in isolated client containers with strict Zero-Retention and full audit trails, so speed never comes at the expense of privacy or ownership.",
//       badges: {
//         zero: "Zero Retention",
//         isolated: "Isolated client containers",
//         compliance: "Compliance-ready (GDPR · ISO27001 · SOC2)",
//       },
//       stats:
//         "Clients report faster delivery cycles and measurable savings — our AI-assisted workflows deliver ~30–40% time gains and up to ~10% cost efficiency.",
//       items: [
//         {
//           title: "SaaS & Web Platforms",
//           tags: [
//             "React",
//             "Next.js",
//             "TypeScript",
//             "REST",
//             "GraphQL",
//             "Postgres",
//             "Kubernetes",
//           ],
//           description:
//             "Product-grade web apps and SaaS platforms — secure architecture, scalable APIs, and measurable product metrics to drive growth.",
//         },
//         {
//           title: "Marketplaces & E-commerce",
//           tags: [
//             "Stripe",
//             "Payments",
//             "Personalization",
//             "Search",
//             "Redis",
//             "Scaling",
//           ],
//           description:
//             "Fast-to-market commerce: checkout reliability, catalog performance, recommendation hooks and conversion optimization.",
//         },
//         {
//           title: "Realtime & Geolocation",
//           tags: [
//             "WebSockets",
//             "Streaming",
//             "Kafka",
//             "GeoJSON",
//             "Mapbox",
//             "Low-latency",
//           ],
//           description:
//             "Realtime scoring, mapping and notification systems — for live dashboards, incident tracking and location-aware features.",
//         },
//       ],
//     },
//
//     pricing: {
//       title: "Pricing that scales with you",
//       subtitle:
//         "Transparent plans — or a tailored enterprise & security-first engagement. Start with a Secure Sprint to validate fast.",
//       recommended: "Recommended",
//       plans: [
//         {
//           id: "sprint",
//           name: "Secure Sprint",
//           subtitle: "4-week fixed engagement — validate fast",
//           priceLabel: "Fixed quote — request proposal",
//           features: [
//             "Isolated PoC in dedicated client environment",
//             "Working prototype + prioritized roadmap",
//             "Security summary & risk plan (NDA available)",
//             "Handoff-ready code & artifacts",
//           ],
//           cta: {
//             text: "Book Secure Sprint",
//             href: "/#contact",
//             variant: "primary",
//           },
//           highlight: true,
//           footnote:
//             "Secure Sprint is a fixed-price engagement for product validation. It includes isolation, NDA and deliverables — great if you need quick validation before building.",
//         },
//         {
//           id: "outstaff",
//           name: "Team Augmentation (Outstaff)",
//           subtitle: "Embed our engineers into your team",
//           priceLabel: "Hourly / contract — contact for rates",
//           features: [
//             "Senior engineers matched to your stack",
//             "Full integration with your repo and processes",
//             "Flexible ramp-up / ramp-down",
//             "AI-assisted workflows to speed dev & testing",
//           ],
//           cta: {
//             text: "Request engineers",
//             href: "/contact?intent=outstaff",
//             variant: "outline",
//           },
//           highlight: false,
//           footnote:
//             "Pay for what you use. Scale your team up or down based on your current development needs without long-term commitments.",
//         },
//         {
//           id: "outsource",
//           name: "Product Delivery (Outsource)",
//           subtitle: "End-to-end project delivery",
//           priceLabel: "Fixed quote — based on scope",
//           features: [
//             "MVP → production delivery, PM included",
//             "CI/CD, tests, monitoring and SLOs",
//             "Focus on ROI: faster time-to-market and predictable releases",
//             "Post-release handoff and optional support",
//           ],
//           cta: {
//             text: "Request proposal",
//             href: "/contact?intent=outsourcing",
//             variant: "outline",
//           },
//           highlight: false,
//           footnote:
//             "End-to-end management. We take full responsibility for delivery timelines, architecture, and team management.",
//         },
//         {
//           id: "enterprise",
//           name: "Enterprise & Compliance",
//           subtitle: "Dedicated infra, audits and SLA",
//           priceLabel: "Custom enterprise pricing",
//           features: [
//             "On-prem / EU-based deployments",
//             "Compliance & audit support (GDPR / ISO / SOC)",
//             "SLA, 24/7 support and dedicated account team",
//             "Security hardening and pentests",
//           ],
//           cta: {
//             text: "Contact sales",
//             href: "/contact?intent=enterprise",
//             variant: "outline",
//           },
//           highlight: false,
//           footnote:
//             "Custom contracts, onboarding and compliance support — pricing depends on scope and SLA.",
//         },
//       ],
//       footer: {
//         text: "Need a custom plan or compliance guarantees (GDPR/ISO/SOC)?",
//         linkText: "Contact sales",
//         suffix: "— we tailor agreements and SLAs per customer.",
//       },
//     },
//
//     servicesSection: {
//       badge: "What we deliver",
//       title: "Business outcomes, not just features",
//       subtitle:
//         "We combine product expertise and AI-assisted engineering to build products that drive revenue.",
//       badges: {
//         zero: "Zero Retention",
//         isolated: "Isolated Containers",
//         compliance: "GDPR / ISO27001",
//       },
//       items: [
//         {
//           title: "Secure Sprint — 4-week PoC",
//           description:
//             "Fixed 4-week engagement: isolated PoC, working prototype, prioritized roadmap and security brief. Ideal for validating product fit before large investments.",
//         },
//         {
//           title: "Product Delivery (Outsource)",
//           description:
//             "End-to-end delivery from MVP to production: frontend, backend, APIs, CI/CD and monitoring. We focus on business outcomes and predictable releases.",
//         },
//         {
//           title: "Team Augmentation (Outstaff)",
//           description:
//             "Dedicated engineers embedded in your process and repo. Fast ramp-up, flexible contracts, full code ownership retained by you.",
//         },
//         {
//           title: "AI-enabled Engineering (internal)",
//           description:
//             "Human-led engineering accelerated by internal AI tools for tests, code reviews and refactors — higher throughput, fewer regressions.",
//         },
//         {
//           title: "Managed Infra & DevOps",
//           description:
//             "CI/CD, deployments, observability, SLOs and runbooks. We operate production-ready pipelines and handle incident playbooks.",
//         },
//         {
//           title: "Data & Integrations",
//           description:
//             "ETL/ELT, connectors and secure data pipelines. Preparing quality datasets and integrations for analytics and product features.",
//         },
//         {
//           title: "Growth & E-commerce",
//           description:
//             "Recommendations, personalization, A/B experiments and CRO work to increase conversion and LTV.",
//         },
//         {
//           title: "Security & Compliance",
//           description:
//             "Pen-tests, Vault-based secret management, key rotation and audit artifacts to support GDPR / ISO readiness and enterprise onboarding.",
//         },
//       ],
//     },
//
//     testimonials: {
//       title: "Why teams choose us",
//       subtitle:
//         "We use AI as a developer tool — accelerating delivery while keeping data ownership and privacy intact.",
//       sprintCard: {
//         title: "4-week Secure Sprint",
//         desc: "A fixed-scope, 4-week engagement to prove rapid value: secure PoC, prioritized roadmap, and a handoff-ready deliverable — all under NDA and with full data isolation.",
//         list: [
//           "Secure PoC environment (isolated container + dedicated AI endpoint + audit logs)",
//           "Privacy controls: Zero-Retention for prompts by default",
//           "Deliverables: working prototype, prioritized roadmap, and testing report",
//         ],
//         btn: "Start a 4-week Secure Sprint",
//         link: "Read whitepaper",
//       },
//       deliveryCard: {
//         title: "Faster delivery",
//         desc: "Controlled AI assistance shortens prototyping and development loops so your product ships sooner — without sacrificing security or ownership.",
//         list: [
//           "— Faster prototyping and feature rollout",
//           "— Lower engineering feedback loop costs",
//           "— Measurable efficiency gains for product teams",
//         ],
//       },
//       securityCard: {
//         title: "Privacy-first engineering",
//         desc1:
//           "Projects run in isolated client containers with dedicated AI endpoints. Prompts and outputs are not retained unless explicitly approved by the client.",
//         desc2:
//           "Keys are stored securely and rotated regularly; all access is logged with full audit trails.",
//         desc3: "Compliance-ready: GDPR / ISO27001 posture available.",
//       },
//       footer:
//         "Want to validate faster with low risk? Book the Secure Sprint — we set up an isolated PoC and show measurable outcomes within 4 weeks.",
//     },
//   },
//
//   ua: {
//     nav: {
//       hero: "Головна",
//       services: "Послуги",
//       industries: "Галузі",
//       cases: "Кейси",
//       testimonials: "Безпека",
//       faq: "Питання",
//       pricing: "Ціни",
//       cta: "Старт",
//       contact: "Контакти",
//     },
//     cases: {
//       title: "Проєкти",
//       subtitle: "Вибрані кейси",
//       deliveryLabel: "Швидкість розробки",
//       faster: "швидше",
//       engineers: "інженерів",
//       dropsquad: {
//         title: "DropSquad Dashboard",
//         desc: "Панель операційного моніторингу в реальному часі з рольовим доступом, аудитом та аналітикою продуктивності.",
//         results: [
//           "Аналітика в 3 рази швидше",
//           "Стабільність при 2к користувачів",
//         ],
//       },
//       avesint: {
//         title: "AVESINT.AI",
//         desc: "Військова OSINT-платформа аналітики, побудована як монорепозиторій на React, NestJS та фонових воркерах.",
//         results: ["Затримка запитів < 120мс", "Конверсія +12%"],
//       },
//       tonsai: {
//         title: "Tonsai Platform",
//         desc: "Високонавантажена платформа для масштабних систем — відмовостійкі API та асинхронна обробка трафіку.",
//         results: ["Ціль аптайму 99.95%", "Пропускна здатність ↑ 4x"],
//       },
//     },
//
//     contact: {
//       title: "Зв'яжіться з нами",
//       subtitle: "Готові до масштабування? Обговорімо ваш проєкт.",
//       infoTitle: "Контактна інформація",
//       infoDesc:
//         "Заповніть форму або зв'яжіться з нами напряму через пошту чи телефон.",
//       labels: {
//         name: "Повне ім'я",
//         email: "Email адреса",
//         phone: "Номер телефону",
//         message: "Повідомлення",
//       },
//       placeholders: {
//         name: "Олександр Коваленко",
//         email: "alex@example.com",
//         phone: "+380 (99) 000-0000",
//         message: "Коротко опишіть вашу ідею",
//       },
//       errors: {
//         name: "Будь ласка, введіть ваше ім'я",
//       },
//       submit: "Надіслати у WhatsApp",
//       footer: {
//         rights: "Усі права захищені.",
//         developedBy: "Розробка:",
//       },
//     },
//
//     cta: {
//       title: "Готові розпочати свій проєкт?",
//       description:
//         "Приєднуйтесь до прогресивних компаній, що створюють безпечні, масштабовані та високопродуктивні цифрові продукти разом з нашою експертною командою.",
//       primaryBtn: "Розпочати",
//       secondaryBtn: "Зв'язатися з нами",
//     },
//
//     faq: {
//       prevBtn: "Назад",
//       nextBtn: "Далі",
//       processesTitle: "Процеси",
//       deliverablesTitle: "Результати",
//       flowTitle: "Наш процес — передбачуваний, швидкий, безпечний",
//       flowSubtitle:
//         "Чіткі кроки, вимірювані результати та швидкий зворотний зв'язок.",
//       stepIndicator: "Крок {current} з {total}",
//       whyTitle: "Чому це важливо",
//       whyDesc: "Пояснення того, як цей крок знижує ризики та прискорює запуск.",
//       whyPoints: [
//         "Швидші цикли відгуку",
//         "Чіткі критерії прийняття",
//         "Готові артефакти для аудиту",
//       ],
//       ctaTitle: "Готові до швидкої валідації?",
//       ctaDesc: "Замовте Secure Sprint: 4 тижні, ізольований PoC, NDA.",
//       ctaBtn: "Зв'язатися з нами",
//       badges: { zero: "Zero Retention", isolated: "Ізольовані контейнери" },
//       comparison: {
//         title: "Швидке порівняння",
//         whitepaper: "Читати whitepaper",
//         metrics: ["Метрика", "Типовий аутсорс", "Ми", "Чому це важливо"],
//         rows: [
//           {
//             m: "Time-to-market",
//             o: "~16 тижнів",
//             u: "~10–11 тижнів (на 40% швидше)",
//             n: "Швидший прибуток",
//           },
//           {
//             m: "Вартість розробки",
//             o: "Стандартний рейт",
//             u: "Нижча загальна вартість (TCO)",
//             n: "Економія через швидкість",
//           },
//           {
//             m: "Безпека",
//             o: "Загальна інфраструктура",
//             u: "Ізольовані контейнери",
//             n: "Гарантії приватності",
//           },
//           {
//             m: "Власність (IP)",
//             o: "Ризики змішування",
//             u: "Повна власність за контрактом",
//             n: "Клієнт контролює все",
//           },
//         ],
//       },
//       steps: [
//         {
//           number: "01",
//           title: "Дослідження — Аудит",
//           description:
//             "1 тиждень занурення: цілі продукту та карта швидких перемог.",
//           processes: ["Інтерв'ю"],
//           deliverables: ["Карта можливостей"],
//         },
//         {
//           number: "02",
//           title: "Дизайн Спринт — Прототип",
//           description: "2 тижні валідації: клікабельні макети та беклог MVP.",
//           processes: ["UX прототип"],
//           deliverables: ["Клікабельний прототип"],
//         },
//         {
//           number: "03",
//           title: "Розробка — Secure Build",
//           description: "Спринти з автоматизованим CI та AI-асистентами.",
//           processes: ["Sprints"],
//           deliverables: ["Реліз MVP"],
//         },
//         {
//           number: "04",
//           title: "Захист та Сертифікація",
//           description: "Зміцнення безпеки та перевірка відповідності.",
//           processes: ["Пентест"],
//           deliverables: ["Звіти аудиту"],
//         },
//         {
//           number: "05",
//           title: "Запуск та Моніторинг",
//           description: "Поетапне розгортання та налаштування дашбордів.",
//           processes: ["Canary rollout"],
//           deliverables: ["Дашборди моніторингу"],
//         },
//         {
//           number: "06",
//           title: "Ріст та Ітерації",
//           description: "Розвиток на основі даних та пріоритетний беклог.",
//           processes: ["A/B тести"],
//           deliverables: ["Інсайти"],
//         },
//       ],
//       faqTitle: "Часті запитання",
//       questions: [
//         {
//           q: "Чи зберігаєте ви промпти або дані клієнтів?",
//           a: "За замовчуванням — ні. Ми дотримуємося політики Zero-Retention для промптів та вихідних даних. Уся обробка виконується в ізольованих середовищах клієнта.",
//         },
//         {
//           q: "Чи можемо ми підписати NDA та отримати ізольований PoC?",
//           a: "Так. Ми підписуємо NDA та можемо надати повністю ізольований PoC (окремий контейнер + виділені ендпоінти + логи аудиту).",
//         },
//         {
//           q: "Що таке Secure Sprint і що він включає?",
//           a: "Фіксований 4-тижневий етап: безпечний PoC, робочий прототип, пріоритетний роадмап та короткий звіт про ризики. Надається за NDA.",
//         },
//         {
//           q: "Як швидко ви можете розробити MVP?",
//           a: "Наш процес (Дослідження → Дизайн → Розробка) зазвичай скорочує час виходу на ринок на 30–40% порівняно з традиційними підходами.",
//         },
//         {
//           q: "Хто володіє кодом та даними?",
//           a: "Клієнти зберігають повне право власності на свій код та дані. Ми надаємо повний експорт артефактів та чіткі умови інтелектуальної власності.",
//         },
//         {
//           q: "Як ви забезпечуєте безпеку та відповідність?",
//           a: "Ми використовуємо багаторівневий контроль: ізольовані контейнери, Vault для секретів, ротацію ключів та регулярні пентести.",
//         },
//         {
//           q: "Які технології та стеки ви використовуєте?",
//           a: "Зазвичай: React/Next.js (фронтенд), Node/Python (бекенд), Docker, Kubernetes, CI/CD та сучасні інструменти машинного навчання.",
//         },
//         {
//           q: "Як щодо післяпроєктної підтримки та SLA?",
//           a: "Ми пропонуємо пакети підтримки: від разових запитів до планів з гарантованим SLA, моніторингом та реагуванням на інциденти.",
//         },
//       ],
//       footer: {
//         text: "Не знайшли відповідь?",
//         contact: "Зв'яжіться з нами",
//         or: "або",
//         sprint: "замовте Secure Sprint",
//       },
//     },
//
//     hero: {
//       badge: "IThingy Labs LLC — агенція стартап-рішень",
//       title1: "Ми розумніші. Ми швидші. Ми кращі. Ми — ",
//       title2: "IThingy",
//       btnPrimary: "Розпочати",
//       btnSecondary: "Дізнатися більше",
//     },
//
//     industries: {
//       title: "Красиві продукти. Створені швидко. Створені безпечно.",
//       subtitle:
//         "Ми прискорюємо розробку, використовуючи ШІ як інструмент, а не як збирач даних. Проєкти працюють в ізольованих контейнерах клієнта з суворою політикою Zero-Retention та повним аудитом, тому швидкість ніколи не шкодить приватності.",
//       badges: {
//         zero: "Zero Retention",
//         isolated: "Ізольовані контейнери",
//         compliance: "Готовність до комплаєнсу (GDPR · ISO27001)",
//       },
//       stats:
//         "Клієнти повідомляють про швидші цикли релізів та відчутну економію — наші ШІ-процеси забезпечують економію часу на 30–40% та зниження витрат до 10%.",
//       items: [
//         {
//           title: "SaaS та Веб-платформи",
//           tags: [
//             "React",
//             "Next.js",
//             "TypeScript",
//             "REST",
//             "GraphQL",
//             "Postgres",
//             "Kubernetes",
//           ],
//           description:
//             "Продуктові веб-додатки та SaaS платформи — безпечна архітектура, масштабовані API та вимірювані метрики для росту.",
//         },
//         {
//           title: "Маркетплейси та E-commerce",
//           tags: [
//             "Stripe",
//             "Платежі",
//             "Персоналізація",
//             "Пошук",
//             "Redis",
//             "Масштабування",
//           ],
//           description:
//             "Швидкий запуск комерції: надійність чекауту, продуктивність каталогу, алгоритми рекомендацій та оптимізація конверсії.",
//         },
//         {
//           title: "Realtime та Геолокація",
//           tags: [
//             "WebSockets",
//             "Стримінг",
//             "Kafka",
//             "GeoJSON",
//             "Mapbox",
//             "Низька затримка",
//           ],
//           description:
//             "Системи скорингу, мапінгу та сповіщень у реальному часі — для живих дашбордів, відстеження інцидентів та функцій на базі локації.",
//         },
//       ],
//     },
//
//     pricing: {
//       title: "Ціноутворення, що масштабується разом з вами",
//       subtitle:
//         "Прозорі плани або індивідуальні рішення з фокусом на безпеку. Почніть з Secure Sprint для швидкої валідації.",
//       recommended: "Рекомендовано",
//       plans: [
//         {
//           id: "sprint",
//           name: "Secure Sprint",
//           subtitle: "Фіксований 4-тижневий етап — швидка валідація",
//           priceLabel: "Фіксована ціна — запитати пропозицію",
//           features: [
//             "Ізольований PoC у виділеному середовищі клієнта",
//             "Робочий прототип + пріоритетний роадмап",
//             "Звіт з безпеки та ризиків (можливе NDA)",
//             "Готовий до передачі код та артефакти",
//           ],
//           cta: {
//             text: "Замовити Secure Sprint",
//             href: "/#contact",
//             variant: "primary",
//           },
//           highlight: true,
//           footnote:
//             "Secure Sprint — це етап з фіксованою ціною для перевірки продукту. Включає ізоляцію, NDA та результати — ідеально для швидкої валідації перед початком великої розробки.",
//         },
//         {
//           id: "outstaff",
//           name: "Розширення команди (Аутстаф)",
//           subtitle: "Інтеграція наших інженерів у вашу команду",
//           priceLabel: "Погодинно / контракт — запитати рейт",
//           features: [
//             "Senior-інженери під ваш стек технологій",
//             "Повна інтеграція з вашим репозиторієм та процесами",
//             "Гнучке масштабування команди",
//             "ШІ-інструменти для прискорення розробки та тестування",
//           ],
//           cta: {
//             text: "Запитати інженерів",
//             href: "/contact?intent=outstaff",
//             variant: "outline",
//           },
//           highlight: false,
//           footnote:
//             "Платіть за те, що використовуєте. Масштабуйте команду відповідно до поточних потреб без довгострокових зобов'язань.",
//         },
//         {
//           id: "outsource",
//           name: "Розробка продукту (Аутсорс)",
//           subtitle: "Комплексна розробка під ключ",
//           priceLabel: "Фіксована ціна — залежить від обсягу",
//           features: [
//             "MVP → реліз у продакшн, PM включено",
//             "CI/CD, тести, моніторинг та SLO",
//             "Фокус на ROI: швидкий запуск та передбачувані релізи",
//             "Передача проєкту після релізу та опціональна підтримка",
//           ],
//           cta: {
//             text: "Запитати пропозицію",
//             href: "/contact?intent=outsourcing",
//             variant: "outline",
//           },
//           highlight: false,
//           footnote:
//             "Управління під ключ. Ми беремо на себе повну відповідальність за терміни, архітектуру та управління командою.",
//         },
//         {
//           id: "enterprise",
//           name: "Enterprise та Комплаєнс",
//           subtitle: "Виділена інфраструктура, аудити та SLA",
//           priceLabel: "Індивідуальні умови для Enterprise",
//           features: [
//             "On-premise / розгортання в ЄС",
//             "Підтримка аудитів та комплаєнсу (GDPR / ISO / SOC)",
//             "SLA, підтримка 24/7 та виділена команда",
//             "Посилення безпеки та пентести",
//           ],
//           cta: {
//             text: "Зв'язатися з продажами",
//             href: "/contact?intent=enterprise",
//             variant: "outline",
//           },
//           highlight: false,
//           footnote:
//             "Індивідуальні контракти, онбординг та підтримка комплаєнсу — ціна залежить від обсягу та SLA.",
//         },
//       ],
//       footer: {
//         text: "Потрібен індивідуальний план або гарантії відповідності (GDPR/ISO/SOC)?",
//         linkText: "Зв'яжіться з відділом продажів",
//         suffix: "— ми адаптуємо угоди та SLA під кожного клієнта.",
//       },
//     },
//
//     servicesSection: {
//       badge: "Що ми пропонуємо",
//       title: "Бізнес-результати, а не просто фічі",
//       subtitle:
//         "Ми поєднуємо продуктову експертизу та ШІ-інженерію для створення продуктів, що приносять дохід.",
//       badges: {
//         zero: "Zero Retention",
//         isolated: "Ізольовані контейнери",
//         compliance: "GDPR / ISO27001",
//       },
//       items: [
//         {
//           title: "Secure Sprint — 4-тижневий PoC",
//           description:
//             "Фіксований 4-тижневий етап: ізольований PoC, робочий прототип, пріоритетний роадмап та звіт з безпеки. Ідеально для перевірки ідеї перед великими інвестиціями.",
//         },
//         {
//           title: "Розробка продукту (Аутсорс)",
//           description:
//             "Повний цикл розробки від MVP до продакшену: фронтенд, бекенд, API, CI/CD та моніторинг. Ми фокусуємося на бізнес-цілях та передбачуваних релізах.",
//         },
//         {
//           title: "Розширення команди (Аутстаф)",
//           description:
//             "Виділені інженери, інтегровані у ваш процес та репозиторій. Швидкий старт, гнучкі контракти, 100% прав на код залишаються за вами.",
//         },
//         {
//           title: "ШІ-інженерія (внутрішня)",
//           description:
//             "Розробка експертами, прискорена внутрішніми ШІ-інструментами для тестів, рев'ю коду та рефакторингу — вища пропускна здатність, менше багів.",
//         },
//         {
//           title: "Керована інфра та DevOps",
//           description:
//             "CI/CD, деплої, обсервабіліті, SLO та ранбуки. Ми обслуговуємо production-ready пайплайни та керуємо інцидентами.",
//         },
//         {
//           title: "Дані та Інтеграції",
//           description:
//             "ETL/ELT, конектори та безпечні пайплайни даних. Підготовка якісних наборів даних та інтеграцій для аналітики.",
//         },
//         {
//           title: "Ріст та E-commerce",
//           description:
//             "Рекомендації, персоналізація, A/B експерименти та CRO (оптимізація конверсії) для збільшення продажів та LTV.",
//         },
//         {
//           title: "Безпека та Комплаєнс",
//           description:
//             "Пентести, управління секретами через Vault, ротація ключів та артефакти для підтримки GDPR/ISO і онбордингу Enterprise-клієнтів.",
//         },
//       ],
//     },
//
//     testimonials: {
//       title: "Чому команди обирають нас",
//       subtitle:
//         "Ми використовуємо ШІ як інструмент для розробників — прискорюємо релізи, зберігаючи повний контроль над даними та конфіденційність.",
//       sprintCard: {
//         title: "4-тижневий Secure Sprint",
//         desc: "Фіксований 4-тижневий етап для швидкої перевірки цінності: безпечний PoC, пріоритетний роадмап та готові до передачі результати — усе під NDA та з повною ізоляцією даних.",
//         list: [
//           "Безпечне PoC-середовище (ізольований контейнер + виділений AI endpoint + логи аудиту)",
//           "Контроль приватності: Zero-Retention для промптів за замовчуванням",
//           "Результати: робочий прототип, пріоритетний роадмап та звіт про тестування",
//         ],
//         btn: "Почати 4-тижневий Secure Sprint",
//         link: "Читати whitepaper",
//       },
//       deliveryCard: {
//         title: "Швидша розробка",
//         desc: "Контрольоване використання ШІ скорочує цикли прототипування та розробки, тому ваш продукт виходить на ринок швидше — без шкоди для безпеки чи прав власності.",
//         list: [
//           "— Швидше прототипування та запуск нових фіч",
//           "— Зниження витрат на цикли зворотного зв'язку",
//           "— Вимірюване зростання ефективності продуктових команд",
//         ],
//       },
//       securityCard: {
//         title: "Інженерія з фокусом на приватність",
//         desc1:
//           "Проєкти працюють в ізольованих клієнтських контейнерах з виділеними ШІ-ендпоінтами. Промпти та відповіді не зберігаються без явної згоди клієнта.",
//         desc2:
//           "Ключі надійно зберігаються та регулярно оновлюються; усі доступи логуються для повного аудиту.",
//         desc3: "Готовність до комплаєнсу: підтримка вимог GDPR / ISO27001.",
//       },
//       footer:
//         "Хочете швидко перевірити ідею з мінімальними ризиками? Замовте Secure Sprint — ми налаштуємо ізольований PoC і покажемо реальні результати за 4 тижні.",
//     },
//   },
// };

export const dictionaries = {
  en: {
    nav: {
      hero: "Hero",
      services: "Services",
      industries: "Industries",
      cases: "Case Studies",
      testimonials: "Security",
      faq: "FAQ",
      pricing: "Pricing",
      cta: "Get Started",
      contact: "Contact",
    },
    cases: {
      title: "Projects",
      subtitle: "Selected case studies",
      deliveryLabel: "Delivery vs typical",
      faster: "faster",
      engineers: "engineers",
      dropsquad: {
        title: "DropSquad Dashboard",
        desc: "Realtime operations dashboard with role-based access, audits and performance analytics. Built for fast incident response.",
        results: ["Time-to-insight ↓ 3x", "Stable at 2k concurrent users"],
      },
      avesint: {
        title: "AVESINT.AI",
        desc: "Military-oriented OSINT analytics platform built as a monorepo with React, NestJS and asynchronous background workers.",
        results: ["Query latency < 120ms", "Conversion +12%"],
      },
      tonsai: {
        title: "Tonsai Platform",
        desc: "High-throughput platform designed for scale — resilient APIs and async workers to handle bursty traffic patterns.",
        results: ["99.95% uptime target", "Processing throughput ↑ 4x"],
      },
    },

    contact: {
      title: "Get in touch",
      subtitle: "Ready to scale? Let's talk about your project.",
      infoTitle: "Contact Information",
      infoDesc: "Fill out the form or reach out directly via email or phone.",
      labels: {
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Message",
      },
      placeholders: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+1 (555) 000-0000",
        message: "Briefly describe your idea",
      },
      errors: {
        name: "Please enter your name",
      },
      submit: "Send to WhatsApp",
      footer: {
        rights: "All rights reserved.",
        developedBy: "Developed by",
      },
    },

    cta: {
      title: "Ready to start your project?",
      description:
        "Join the forward-thinking companies building secure, scalable, and high-performance digital products with our expert engineering team.",
      primaryBtn: "Get Started",
      secondaryBtn: "Contact us",
    },

    faq: {
      prevBtn: "Prev",
      nextBtn: "Next",
      processesTitle: "Processes",
      deliverablesTitle: "Deliverables",
      flowTitle: "Our flow — predictable, fast, secure",
      flowSubtitle:
        "Clear steps, measurable outputs, and fast feedback at every stage.",
      stepIndicator: "Step {current} of {total}",
      whyTitle: "Why this step matters",
      ctaTitle: "Ready to validate fast?",
      ctaDesc: "Book a Secure Sprint: 4 weeks, isolated PoC, NDA available.",
      ctaBtn: "Contact us",
      badges: { zero: "Zero Retention", isolated: "Isolated containers" },
      comparison: {
        title: "Quick comparison",
        whitepaper: "Read whitepaper",
        metrics: ["Metric", "Typical outsourcer", "Us", "Why it matters"],
        rows: [
          {
            m: "Time-to-market",
            o: "~16 weeks",
            u: "~10–11 weeks (≈40% faster)",
            n: "Earlier revenue",
          },
          {
            m: "Initial dev cost",
            o: "Standard hourly burn",
            u: "Lower long-term TCO",
            n: "Faster ROI",
          },
          {
            m: "Security",
            o: "Shared infra",
            u: "Isolated containers",
            n: "Privacy guarantees",
          },
          {
            m: "IP Ownership",
            o: "Potential mixing",
            u: "Full IP ownership",
            n: "Client retains control",
          },
        ],
      },
      steps: [
        {
          number: "01",
          title: "Discover — Business Audit",
          description: "1 week deep-dive: product goals and quick-win map.",
          processes: ["Stakeholder interviews"],
          deliverables: ["Opportunity map"],
          whyDesc:
            "Aligns engineering with business KPIs early to prevent wasted effort and scope creep.",
          whyPoints: [
            "Defines clear ROI",
            "Identifies technical risks",
            "Aligns stakeholders",
          ],
        },
        {
          number: "02",
          title: "Design Sprint — Prototype",
          description:
            "2-week validated prototype and prioritized MVP backlog.",
          processes: ["UX prototype"],
          deliverables: ["Clickable prototype"],
          whyDesc:
            "Validates the user experience and flow before writing expensive production code.",
          whyPoints: [
            "Faster feedback cycles",
            "Clear acceptance criteria",
            "Reduces rework",
          ],
        },
        {
          number: "03",
          title: "Secure Build — Delivery",
          description: "Sprint-based dev with internal AI-assistants.",
          processes: ["Implementation sprints"],
          deliverables: ["MVP release"],
          whyDesc:
            "Maintains high momentum with AI-assisted workflows while ensuring code quality.",
          whyPoints: [
            "Accelerated delivery",
            "Continuous integration",
            "Built-in security",
          ],
        },
        {
          number: "04",
          title: "Harden & Certify",
          description: "Security hardening and compliance checks.",
          processes: ["Pentest"],
          deliverables: ["Audit artefacts"],
          whyDesc:
            "Prepares the product for enterprise compliance, preventing launch blockers.",
          whyPoints: [
            "Audit-ready artefacts",
            "Vulnerability mitigation",
            "GDPR/ISO assurance",
          ],
        },
        {
          number: "05",
          title: "Launch & Observe",
          description: "Staged rollout and monitoring dashboards.",
          processes: ["Canary rollout"],
          deliverables: ["Monitoring Dashboards"],
          whyDesc:
            "Ensures a smooth rollout with real-time monitoring to catch issues instantly.",
          whyPoints: [
            "Zero-downtime deployment",
            "Live performance tracking",
            "Fast rollback capability",
          ],
        },
        {
          number: "06",
          title: "Grow & Iterate",
          description: "Data-driven roadmap and prioritized backlog.",
          processes: ["A/B tests"],
          deliverables: ["Insights"],
          whyDesc:
            "Uses real user data to drive the next phase of development and scale revenue.",
          whyPoints: [
            "Data-driven decisions",
            "Conversion optimization",
            "Scalable architecture",
          ],
        },
      ],
      faqTitle: "Frequently asked questions",
      questions: [
        {
          q: "Do you store prompts or client data?",
          a: "By default — no. We follow a Zero-Retention policy for prompts and transient outputs unless you explicitly opt in. All processing runs in isolated client environments.",
        },
        {
          q: "Can we sign an NDA and get an isolated PoC?",
          a: "Yes. We sign NDAs and can provision a fully isolated PoC (separate container + dedicated endpoints + audit logs) for confidential evaluation.",
        },
        {
          q: "What is a Secure Sprint and what does it include?",
          a: "A fixed 4-week engagement: secure PoC, working prototype, prioritized roadmap and a short security/risk report. Delivered under NDA.",
        },
        {
          q: "How fast can you deliver an MVP?",
          a: "Our process (Discover → Design → Secure Build) typically shortens time-to-market by ~30–40% versus traditional flows.",
        },
        {
          q: "Who owns the code and the data?",
          a: "Clients retain ownership of their code and data as defined in the contract. We provide full export of artifacts and clear IP clauses.",
        },
        {
          q: "How do you ensure security and compliance?",
          a: "We apply multi-layered controls: isolated containers, Vault for secrets, key rotation, logging, and regular pentests.",
        },
        {
          q: "What technologies and stacks do you use?",
          a: "Typically: React/Next.js frontend, Node/Python backend, Docker, Kubernetes, CI/CD pipelines, and modern ML tools.",
        },
        {
          q: "What about post-launch support and SLAs?",
          a: "We offer support packages from ad-hoc to SLA-backed plans with monitoring, incident response and maintenance.",
        },
      ],
      footer: {
        text: "Didn’t find the answer?",
        contact: "Contact us",
        or: "or",
        sprint: "request a Secure Sprint",
      },
    },

    hero: {
      badge: "IThingy Labs LLC — startup solutions agency",
      title1: "We are smarter. We are faster. We are better. We are — ",
      title2: "IThingy",
      btnPrimary: "Get started",
      btnSecondary: "Learn more",
    },

    industries: {
      title: "Beautiful products. Built fast. Built secure.",
      subtitle:
        "We accelerate product delivery by using AI as a developer tool — not a data sink. Projects run in isolated client containers with strict Zero-Retention and full audit trails, so speed never comes at the expense of privacy or ownership.",
      badges: {
        zero: "Zero Retention",
        isolated: "Isolated client containers",
        compliance: "Compliance-ready (GDPR · ISO27001 · SOC2)",
      },
      stats:
        "Clients report faster delivery cycles and measurable savings — our AI-assisted workflows deliver ~30–40% time gains and up to ~10% cost efficiency.",
      items: [
        {
          title: "SaaS & Web Platforms",
          tags: [
            "React",
            "Next.js",
            "TypeScript",
            "REST",
            "GraphQL",
            "Postgres",
            "Kubernetes",
          ],
          description:
            "Product-grade web apps and SaaS platforms — secure architecture, scalable APIs, and measurable product metrics to drive growth.",
        },
        {
          title: "Marketplaces & E-commerce",
          tags: [
            "Stripe",
            "Payments",
            "Personalization",
            "Search",
            "Redis",
            "Scaling",
          ],
          description:
            "Fast-to-market commerce: checkout reliability, catalog performance, recommendation hooks and conversion optimization.",
        },
        {
          title: "Realtime & Geolocation",
          tags: [
            "WebSockets",
            "Streaming",
            "Kafka",
            "GeoJSON",
            "Mapbox",
            "Low-latency",
          ],
          description:
            "Realtime scoring, mapping and notification systems — for live dashboards, incident tracking and location-aware features.",
        },
      ],
    },

    pricing: {
      title: "Pricing that scales with you",
      subtitle:
        "Transparent plans — or a tailored enterprise & security-first engagement. Start with a Secure Sprint to validate fast.",
      recommended: "Recommended",
      plans: [
        {
          id: "sprint",
          name: "Secure Sprint",
          subtitle: "4-week fixed engagement — validate fast",
          priceLabel: "Fixed quote — request proposal",
          features: [
            "Isolated PoC in dedicated client environment",
            "Working prototype + prioritized roadmap",
            "Security summary & risk plan (NDA available)",
            "Handoff-ready code & artifacts",
          ],
          cta: {
            text: "Book Secure Sprint",
            href: "/#contact",
            variant: "primary",
          },
          highlight: true,
          footnote:
            "Secure Sprint is a fixed-price engagement for product validation. It includes isolation, NDA and deliverables — great if you need quick validation before building.",
        },
        {
          id: "outstaff",
          name: "Team Augmentation (Outstaff)",
          subtitle: "Embed our engineers into your team",
          priceLabel: "Hourly / contract — contact for rates",
          features: [
            "Senior engineers matched to your stack",
            "Full integration with your repo and processes",
            "Flexible ramp-up / ramp-down",
            "AI-assisted workflows to speed dev & testing",
          ],
          cta: {
            text: "Request engineers",
            href: "/contact?intent=outstaff",
            variant: "outline",
          },
          highlight: false,
          footnote:
            "Pay for what you use. Scale your team up or down based on your current development needs without long-term commitments.",
        },
        {
          id: "outsource",
          name: "Product Delivery (Outsource)",
          subtitle: "End-to-end project delivery",
          priceLabel: "Fixed quote — based on scope",
          features: [
            "MVP → production delivery, PM included",
            "CI/CD, tests, monitoring and SLOs",
            "Focus on ROI: faster time-to-market and predictable releases",
            "Post-release handoff and optional support",
          ],
          cta: {
            text: "Request proposal",
            href: "/contact?intent=outsourcing",
            variant: "outline",
          },
          highlight: false,
          footnote:
            "End-to-end management. We take full responsibility for delivery timelines, architecture, and team management.",
        },
        {
          id: "enterprise",
          name: "Enterprise & Compliance",
          subtitle: "Dedicated infra, audits and SLA",
          priceLabel: "Custom enterprise pricing",
          features: [
            "On-prem / EU-based deployments",
            "Compliance & audit support (GDPR / ISO / SOC)",
            "SLA, 24/7 support and dedicated account team",
            "Security hardening and pentests",
          ],
          cta: {
            text: "Contact sales",
            href: "/contact?intent=enterprise",
            variant: "outline",
          },
          highlight: false,
          footnote:
            "Custom contracts, onboarding and compliance support — pricing depends on scope and SLA.",
        },
      ],
      footer: {
        text: "Need a custom plan or compliance guarantees (GDPR/ISO/SOC)?",
        linkText: "Contact sales",
        suffix: "— we tailor agreements and SLAs per customer.",
      },
    },

    servicesSection: {
      badge: "What we deliver",
      title: "Business outcomes, not just features",
      subtitle:
        "We combine product expertise and AI-assisted engineering to build products that drive revenue.",
      badges: {
        zero: "Zero Retention",
        isolated: "Isolated Containers",
        compliance: "GDPR / ISO27001",
      },
      items: [
        {
          title: "Secure Sprint — 4-week PoC",
          description:
            "Fixed 4-week engagement: isolated PoC, working prototype, prioritized roadmap and security brief. Ideal for validating product fit before large investments.",
        },
        {
          title: "Product Delivery (Outsource)",
          description:
            "End-to-end delivery from MVP to production: frontend, backend, APIs, CI/CD and monitoring. We focus on business outcomes and predictable releases.",
        },
        {
          title: "Team Augmentation (Outstaff)",
          description:
            "Dedicated engineers embedded in your process and repo. Fast ramp-up, flexible contracts, full code ownership retained by you.",
        },
        {
          title: "AI-enabled Engineering (internal)",
          description:
            "Human-led engineering accelerated by internal AI tools for tests, code reviews and refactors — higher throughput, fewer regressions.",
        },
        {
          title: "Managed Infra & DevOps",
          description:
            "CI/CD, deployments, observability, SLOs and runbooks. We operate production-ready pipelines and handle incident playbooks.",
        },
        {
          title: "Data & Integrations",
          description:
            "ETL/ELT, connectors and secure data pipelines. Preparing quality datasets and integrations for analytics and product features.",
        },
        {
          title: "Growth & E-commerce",
          description:
            "Recommendations, personalization, A/B experiments and CRO work to increase conversion and LTV.",
        },
        {
          title: "Security & Compliance",
          description:
            "Pen-tests, Vault-based secret management, key rotation and audit artifacts to support GDPR / ISO readiness and enterprise onboarding.",
        },
      ],
    },

    testimonials: {
      title: "Why teams choose us",
      subtitle:
        "We use AI as a developer tool — accelerating delivery while keeping data ownership and privacy intact.",
      sprintCard: {
        title: "4-week Secure Sprint",
        desc: "A fixed-scope, 4-week engagement to prove rapid value: secure PoC, prioritized roadmap, and a handoff-ready deliverable — all under NDA and with full data isolation.",
        list: [
          "Secure PoC environment (isolated container + dedicated AI endpoint + audit logs)",
          "Privacy controls: Zero-Retention for prompts by default",
          "Deliverables: working prototype, prioritized roadmap, and testing report",
        ],
        btn: "Start a 4-week Secure Sprint",
        link: "Read whitepaper",
      },
      deliveryCard: {
        title: "Faster delivery",
        desc: "Controlled AI assistance shortens prototyping and development loops so your product ships sooner — without sacrificing security or ownership.",
        list: [
          "— Faster prototyping and feature rollout",
          "— Lower engineering feedback loop costs",
          "— Measurable efficiency gains for product teams",
        ],
      },

      nav: {
        home: "Home",
        about: "About us",
        projects: "Projects",
        services: "Services",
        details: "Details",
        contactBtn: "Contact us",
        aria: {
          mainNav: "Main navigation",
          homeLink: "IThingy Labs LLC home",
          openMenu: "Open menu",
          closeMenu: "Close menu",
        },
      },

      securityCard: {
        title: "Privacy-first engineering",
        desc1:
          "Projects run in isolated client containers with dedicated AI endpoints. Prompts and outputs are not retained unless explicitly approved by the client.",
        desc2:
          "Keys are stored securely and rotated regularly; all access is logged with full audit trails.",
        desc3: "Compliance-ready: GDPR / ISO27001 posture available.",
      },
      footer:
        "Want to validate faster with low risk? Book the Secure Sprint — we set up an isolated PoC and show measurable outcomes within 4 weeks.",
    },
  },

  ua: {
    nav: {
      hero: "Головна",
      services: "Послуги",
      industries: "Галузі",
      cases: "Кейси",
      testimonials: "Безпека",
      faq: "Питання",
      pricing: "Ціни",
      cta: "Старт",
      contact: "Контакти",
    },
    cases: {
      title: "Проєкти",
      subtitle: "Вибрані кейси",
      deliveryLabel: "Швидкість розробки",
      faster: "швидше",
      engineers: "інженерів",
      dropsquad: {
        title: "DropSquad Dashboard",
        desc: "Панель операційного моніторингу в реальному часі з рольовим доступом, аудитом та аналітикою продуктивності.",
        results: [
          "Аналітика в 3 рази швидше",
          "Стабільність при 2к користувачів",
        ],
      },
      avesint: {
        title: "AVESINT.AI",
        desc: "Військова OSINT-платформа аналітики, побудована як монорепозиторій на React, NestJS та фонових воркерах.",
        results: ["Затримка запитів < 120мс", "Конверсія +12%"],
      },
      tonsai: {
        title: "Tonsai Platform",
        desc: "Високонавантажена платформа для масштабних систем — відмовостійкі API та асинхронна обробка трафіку.",
        results: ["Ціль аптайму 99.95%", "Пропускна здатність ↑ 4x"],
      },
    },

    contact: {
      title: "Зв'яжіться з нами",
      subtitle: "Готові до масштабування? Обговорімо ваш проєкт.",
      infoTitle: "Контактна інформація",
      infoDesc:
        "Заповніть форму або зв'яжіться з нами напряму через пошту чи телефон.",
      labels: {
        name: "Повне ім'я",
        email: "Email адреса",
        phone: "Номер телефону",
        message: "Повідомлення",
      },
      placeholders: {
        name: "Олександр Коваленко",
        email: "alex@example.com",
        phone: "+380 (99) 000-0000",
        message: "Коротко опишіть вашу ідею",
      },
      errors: {
        name: "Будь ласка, введіть ваше ім'я",
      },
      submit: "Надіслати у WhatsApp",
      footer: {
        rights: "Усі права захищені.",
        developedBy: "Розробка:",
      },
    },

    cta: {
      title: "Готові розпочати свій проєкт?",
      description:
        "Приєднуйтесь до прогресивних компаній, що створюють безпечні, масштабовані та високопродуктивні цифрові продукти разом з нашою експертною командою.",
      primaryBtn: "Розпочати",
      secondaryBtn: "Зв'язатися з нами",
    },

    faq: {
      prevBtn: "Назад",
      nextBtn: "Далі",
      processesTitle: "Процеси",
      deliverablesTitle: "Результати",
      flowTitle: "Наш процес — передбачуваний, швидкий, безпечний",
      flowSubtitle:
        "Чіткі кроки, вимірювані результати та швидкий зворотний зв'язок.",
      stepIndicator: "Крок {current} з {total}",
      whyTitle: "Чому це важливо",
      ctaTitle: "Готові до швидкої валідації?",
      ctaDesc: "Замовте Secure Sprint: 4 тижні, ізольований PoC, NDA.",
      ctaBtn: "Зв'язатися з нами",
      badges: { zero: "Zero Retention", isolated: "Ізольовані контейнери" },
      comparison: {
        title: "Швидке порівняння",
        whitepaper: "Читати whitepaper",
        metrics: ["Метрика", "Типовий аутсорс", "Ми", "Чому це важливо"],
        rows: [
          {
            m: "Time-to-market",
            o: "~16 тижнів",
            u: "~10–11 тижнів (на 40% швидше)",
            n: "Швидший прибуток",
          },
          {
            m: "Вартість розробки",
            o: "Стандартний рейт",
            u: "Нижча загальна вартість (TCO)",
            n: "Економія через швидкість",
          },
          {
            m: "Безпека",
            o: "Загальна інфраструктура",
            u: "Ізольовані контейнери",
            n: "Гарантії приватності",
          },
          {
            m: "Власність (IP)",
            o: "Ризики змішування",
            u: "Повна власність за контрактом",
            n: "Клієнт контролює все",
          },
        ],
      },
      steps: [
        {
          number: "01",
          title: "Дослідження — Аудит",
          description:
            "1 тиждень занурення: цілі продукту та карта швидких перемог.",
          processes: ["Інтерв'ю"],
          deliverables: ["Карта можливостей"],
          whyDesc:
            "Синхронізує розробку з бізнес-KPI на ранньому етапі, щоб уникнути зайвих витрат.",
          whyPoints: [
            "Чітке визначення ROI",
            "Виявлення технічних ризиків",
            "Синхронізація з замовником",
          ],
        },
        {
          number: "02",
          title: "Дизайн Спринт — Прототип",
          description: "2 тижні валідації: клікабельні макети та беклог MVP.",
          processes: ["UX прототип"],
          deliverables: ["Клікабельний прототип"],
          whyDesc:
            "Перевіряє користувацький досвід до написання дорогого production-коду.",
          whyPoints: [
            "Швидші цикли відгуку",
            "Чіткі критерії прийняття",
            "Зменшення перероблень",
          ],
        },
        {
          number: "03",
          title: "Розробка — Secure Build",
          description: "Спринти з автоматизованим CI та AI-асистентами.",
          processes: ["Sprints"],
          deliverables: ["Реліз MVP"],
          whyDesc:
            "Підтримує високий темп завдяки ШІ-асистентам, гарантуючи якість та безпеку коду.",
          whyPoints: [
            "Прискорена доставка",
            "Безперервна інтеграція",
            "Вбудована безпека",
          ],
        },
        {
          number: "04",
          title: "Захист та Сертифікація",
          description: "Зміцнення безпеки та перевірка відповідності.",
          processes: ["Пентест"],
          deliverables: ["Звіти аудиту"],
          whyDesc:
            "Готує продукт до корпоративного комплаєнсу та суворих аудитів безпеки.",
          whyPoints: [
            "Готові артефакти для аудиту",
            "Усунення вразливостей",
            "Гарантія відповідності",
          ],
        },
        {
          number: "05",
          title: "Запуск та Моніторинг",
          description: "Поетапне розгортання та налаштування дашбордів.",
          processes: ["Canary rollout"],
          deliverables: ["Дашборди моніторингу"],
          whyDesc:
            "Забезпечує плавний реліз із моніторингом у реальному часі для миттєвого реагування.",
          whyPoints: [
            "Деплой без простоїв",
            "Відстеження продуктивності",
            "Можливість швидкого відкату",
          ],
        },
        {
          number: "06",
          title: "Ріст та Ітерації",
          description: "Розвиток на основі даних та пріоритетний беклог.",
          processes: ["A/B тести"],
          deliverables: ["Інсайти"],
          whyDesc:
            "Використовує реальні дані користувачів для масштабування та збільшення доходу.",
          whyPoints: [
            "Рішення на основі даних",
            "Оптимізація конверсії",
            "Масштабована архітектура",
          ],
        },
      ],
      faqTitle: "Часті запитання",
      questions: [
        {
          q: "Чи зберігаєте ви промпти або дані клієнтів?",
          a: "За замовчуванням — ні. Ми дотримуємося політики Zero-Retention для промптів та вихідних даних. Уся обробка виконується в ізольованих середовищах клієнта.",
        },
        {
          q: "Чи можемо ми підписати NDA та отримати ізольований PoC?",
          a: "Так. Ми підписуємо NDA та можемо надати повністю ізольований PoC (окремий контейнер + виділені ендпоінти + логи аудиту).",
        },
        {
          q: "Що таке Secure Sprint і що він включає?",
          a: "Фіксований 4-тижневий етап: безпечний PoC, робочий прототип, пріоритетний роадмап та короткий звіт про ризики. Надається за NDA.",
        },
        {
          q: "Як швидко ви можете розробити MVP?",
          a: "Наш процес (Дослідження → Дизайн → Розробка) зазвичай скорочує час виходу на ринок на 30–40% порівняно з традиційними підходами.",
        },
        {
          q: "Хто володіє кодом та даними?",
          a: "Клієнти зберігають повне право власності на свій код та дані. Ми надаємо повний експорт артефактів та чіткі умови інтелектуальної власності.",
        },
        {
          q: "Як ви забезпечуєте безпеку та відповідність?",
          a: "Ми використовуємо багаторівневий контроль: ізольовані контейнери, Vault для секретів, ротацію ключів та регулярні пентести.",
        },
        {
          q: "Які технології та стеки ви використовуєте?",
          a: "Зазвичай: React/Next.js (фронтенд), Node/Python (бекенд), Docker, Kubernetes, CI/CD та сучасні інструменти машинного навчання.",
        },
        {
          q: "Як щодо післяпроєктної підтримки та SLA?",
          a: "Ми пропонуємо пакети підтримки: від разових запитів до планів з гарантованим SLA, моніторингом та реагуванням на інциденти.",
        },
      ],
      footer: {
        text: "Не знайшли відповідь?",
        contact: "Зв'яжіться з нами",
        or: "або",
        sprint: "замовте Secure Sprint",
      },
    },

    hero: {
      badge: "IThingy Labs LLC — агенція стартап-рішень",
      title1: "Ми розумніші. Ми швидші. Ми кращі. Ми — ",
      title2: "IThingy",
      btnPrimary: "Розпочати",
      btnSecondary: "Дізнатися більше",
    },

    industries: {
      title: "Красиві продукти. Створені швидко. Створені безпечно.",
      subtitle:
        "Ми прискорюємо розробку, використовуючи ШІ як інструмент, а не як збирач даних. Проєкти працюють в ізольованих контейнерах клієнта з суворою політикою Zero-Retention та повним аудитом, тому швидкість ніколи не шкодить приватності.",
      badges: {
        zero: "Zero Retention",
        isolated: "Ізольовані контейнери",
        compliance: "Готовність до комплаєнсу (GDPR · ISO27001)",
      },
      stats:
        "Клієнти повідомляють про швидші цикли релізів та відчутну економію — наші ШІ-процеси забезпечують економію часу на 30–40% та зниження витрат до 10%.",
      items: [
        {
          title: "SaaS та Веб-платформи",
          tags: [
            "React",
            "Next.js",
            "TypeScript",
            "REST",
            "GraphQL",
            "Postgres",
            "Kubernetes",
          ],
          description:
            "Продуктові веб-додатки та SaaS платформи — безпечна архітектура, масштабовані API та вимірювані метрики для росту.",
        },
        {
          title: "Маркетплейси та E-commerce",
          tags: [
            "Stripe",
            "Платежі",
            "Персоналізація",
            "Пошук",
            "Redis",
            "Масштабування",
          ],
          description:
            "Швидкий запуск комерції: надійність чекауту, продуктивність каталогу, алгоритми рекомендацій та оптимізація конверсії.",
        },
        {
          title: "Realtime та Геолокація",
          tags: [
            "WebSockets",
            "Стримінг",
            "Kafka",
            "GeoJSON",
            "Mapbox",
            "Низька затримка",
          ],
          description:
            "Системи скорингу, мапінгу та сповіщень у реальному часі — для живих дашбордів, відстеження інцидентів та функцій на базі локації.",
        },
      ],
    },

    pricing: {
      title: "Ціноутворення, що масштабується разом з вами",
      subtitle:
        "Прозорі плани або індивідуальні рішення з фокусом на безпеку. Почніть з Secure Sprint для швидкої валідації.",
      recommended: "Рекомендовано",
      plans: [
        {
          id: "sprint",
          name: "Secure Sprint",
          subtitle: "Фіксований 4-тижневий етап — швидка валідація",
          priceLabel: "Фіксована ціна — запитати пропозицію",
          features: [
            "Ізольований PoC у виділеному середовищі клієнта",
            "Робочий прототип + пріоритетний роадмап",
            "Звіт з безпеки та ризиків (можливе NDA)",
            "Готовий до передачі код та артефакти",
          ],
          cta: {
            text: "Замовити Secure Sprint",
            href: "/#contact",
            variant: "primary",
          },
          highlight: true,
          footnote:
            "Secure Sprint — це етап з фіксованою ціною для перевірки продукту. Включає ізоляцію, NDA та результати — ідеально для швидкої валідації перед початком великої розробки.",
        },
        {
          id: "outstaff",
          name: "Розширення команди (Аутстаф)",
          subtitle: "Інтеграція наших інженерів у вашу команду",
          priceLabel: "Погодинно / контракт — запитати рейт",
          features: [
            "Senior-інженери під ваш стек технологій",
            "Повна інтеграція з вашим репозиторієм та процесами",
            "Гнучке масштабування команди",
            "ШІ-інструменти для прискорення розробки та тестування",
          ],
          cta: {
            text: "Запитати інженерів",
            href: "/contact?intent=outstaff",
            variant: "outline",
          },
          highlight: false,
          footnote:
            "Платіть за те, що використовуєте. Масштабуйте команду відповідно до поточних потреб без довгострокових зобов'язань.",
        },
        {
          id: "outsource",
          name: "Розробка продукту (Аутсорс)",
          subtitle: "Комплексна розробка під ключ",
          priceLabel: "Фіксована ціна — залежить від обсягу",
          features: [
            "MVP → реліз у продакшн, PM включено",
            "CI/CD, тести, моніторинг та SLO",
            "Фокус на ROI: швидкий запуск та передбачувані релізи",
            "Передача проєкту після релізу та опціональна підтримка",
          ],
          cta: {
            text: "Запитати пропозицію",
            href: "/contact?intent=outsourcing",
            variant: "outline",
          },
          highlight: false,
          footnote:
            "Управління під ключ. Ми беремо на себе повну відповідальність за терміни, архітектуру та управління командою.",
        },
        {
          id: "enterprise",
          name: "Enterprise та Комплаєнс",
          subtitle: "Виділена інфраструктура, аудити та SLA",
          priceLabel: "Індивідуальні умови для Enterprise",
          features: [
            "On-premise / розгортання в ЄС",
            "Підтримка аудитів та комплаєнсу (GDPR / ISO / SOC)",
            "SLA, підтримка 24/7 та виділена команда",
            "Посилення безпеки та пентести",
          ],
          cta: {
            text: "Зв'язатися з продажами",
            href: "/contact?intent=enterprise",
            variant: "outline",
          },
          highlight: false,
          footnote:
            "Індивідуальні контракти, онбординг та підтримка комплаєнсу — ціна залежить від обсягу та SLA.",
        },
      ],
      footer: {
        text: "Потрібен індивідуальний план або гарантії відповідності (GDPR/ISO/SOC)?",
        linkText: "Зв'яжіться з відділом продажів",
        suffix: "— ми адаптуємо угоди та SLA під кожного клієнта.",
      },
    },

    servicesSection: {
      badge: "Що ми пропонуємо",
      title: "Бізнес-результати, а не просто фічі",
      subtitle:
        "Ми поєднуємо продуктову експертизу та ШІ-інженерію для створення продуктів, що приносять дохід.",
      badges: {
        zero: "Zero Retention",
        isolated: "Ізольовані контейнери",
        compliance: "GDPR / ISO27001",
      },
      items: [
        {
          title: "Secure Sprint — 4-тижневий PoC",
          description:
            "Фіксований 4-тижневий етап: ізольований PoC, робочий прототип, пріоритетний роадмап та звіт з безпеки. Ідеально для перевірки ідеї перед великими інвестиціями.",
        },
        {
          title: "Розробка продукту (Аутсорс)",
          description:
            "Повний цикл розробки від MVP до продакшену: фронтенд, бекенд, API, CI/CD та моніторинг. Ми фокусуємося на бізнес-цілях та передбачуваних релізах.",
        },
        {
          title: "Розширення команди (Аутстаф)",
          description:
            "Виділені інженери, інтегровані у ваш процес та репозиторій. Швидкий старт, гнучкі контракти, 100% прав на код залишаються за вами.",
        },
        {
          title: "ШІ-інженерія (внутрішня)",
          description:
            "Розробка експертами, прискорена внутрішніми ШІ-інструментами для тестів, рев'ю коду та рефакторингу — вища пропускна здатність, менше багів.",
        },
        {
          title: "Керована інфра та DevOps",
          description:
            "CI/CD, деплої, обсервабіліті, SLO та ранбуки. Ми обслуговуємо production-ready пайплайни та керуємо інцидентами.",
        },
        {
          title: "Дані та Інтеграції",
          description:
            "ETL/ELT, конектори та безпечні пайплайни даних. Підготовка якісних наборів даних та інтеграцій для аналітики.",
        },
        {
          title: "Ріст та E-commerce",
          description:
            "Рекомендації, персоналізація, A/B експерименти та CRO (оптимізація конверсії) для збільшення продажів та LTV.",
        },
        {
          title: "Безпека та Комплаєнс",
          description:
            "Пентести, управління секретами через Vault, ротація ключів та артефакти для підтримки GDPR/ISO і онбордингу Enterprise-клієнтів.",
        },
      ],
    },

    testimonials: {
      title: "Чому команди обирають нас",
      subtitle:
        "Ми використовуємо ШІ як інструмент для розробників — прискорюємо релізи, зберігаючи повний контроль над даними та конфіденційність.",
      sprintCard: {
        title: "4-тижневий Secure Sprint",
        desc: "Фіксований 4-тижневий етап для швидкої перевірки цінності: безпечний PoC, пріоритетний роадмап та готові до передачі результати — усе під NDA та з повною ізоляцією даних.",
        list: [
          "Безпечне PoC-середовище (ізольований контейнер + виділений AI endpoint + логи аудиту)",
          "Контроль приватності: Zero-Retention для промптів за замовчуванням",
          "Результати: робочий прототип, пріоритетний роадмап та звіт про тестування",
        ],
        btn: "Почати 4-тижневий Secure Sprint",
        link: "Читати whitepaper",
      },
      deliveryCard: {
        title: "Швидша розробка",
        desc: "Контрольоване використання ШІ скорочує цикли прототипування та розробки, тому ваш продукт виходить на ринок швидше — без шкоди для безпеки чи прав власності.",
        list: [
          "— Швидше прототипування та запуск нових фіч",
          "— Зниження витрат на цикли зворотного зв'язку",
          "— Вимірюване зростання ефективності продуктових команд",
        ],
      },

      nav: {
        home: "Головна",
        about: "Про нас",
        projects: "Проєкти",
        services: "Послуги",
        details: "Деталі",
        contactBtn: "Зв'язатися з нами",
        aria: {
          mainNav: "Основна навігація",
          homeLink: "IThingy Labs LLC головна",
          openMenu: "Відкрити меню",
          closeMenu: "Закрити меню",
        },
      },


      securityCard: {
        title: "Інженерія з фокусом на приватність",
        desc1:
          "Проєкти працюють в ізольованих клієнтських контейнерах з виділеними ШІ-ендпоінтами. Промпти та відповіді не зберігаються без явної згоди клієнта.",
        desc2:
          "Ключі надійно зберігаються та регулярно оновлюються; усі доступи логуються для повного аудиту.",
        desc3: "Готовність до комплаєнсу: підтримка вимог GDPR / ISO27001.",
      },
      footer:
        "Хочете швидко перевірити ідею з мінімальними ризиками? Замовте Secure Sprint — ми налаштуємо ізольований PoC і покажемо реальні результати за 4 тижні.",
    },
  },
};