import Link from 'next/link';

export const metadata = {
    title: 'Політика конфіденційності — IThingy Labs',
    description:
        'Як IThingy Labs збирає, використовує та захищає персональні дані. Мінімальний збір, GDPR-сумісно.',
};

const UPDATED = '22 жовтня 2025';
const SITE = 'https://ithingy.dev';
const EMAIL = 'ithingylabs@gmail.com';

export default function PrivacyUaPage() {
    return (
        <main className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">Політика конфіденційності</h1>
                <p className="text-sm text-muted-foreground">Оновлено: {UPDATED}</p>

                <div className="mt-8 space-y-8 text-sm leading-7 text-foreground">
                    <section>
                        <p>
                            IThingy Labs («ми», «нас», «наш») поважає вашу приватність. Цей документ пояснює,
                            як ми збираємо, використовуємо та захищаємо персональні дані під час використання
                            нашого сайту та форм.
                        </p>
                        <p className="mt-3">
                            Користуючись сайтом або надсилаючи форми, ви погоджуєтеся з умовами цієї Політики.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">1. Дані, які ми збираємо</h2>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>
                                <strong>Контактні дані</strong>: імʼя, email, телефон, компанія, зміст повідомлення.
                            </li>
                            <li>
                                <strong>Технічні дані</strong>: IP-адреса, user-agent браузера, тип пристрою.
                            </li>
                            <li>
                                <strong>Маркетингові дані</strong>: UTM-мітки / інформація про кампанії.
                            </li>
                            <li>
                                <strong>Комунікації</strong>: повідомлення, надіслані через наші форми/боти.
                            </li>
                        </ul>
                        <p className="mt-2">
                            Ми не збираємо паролі, платіжні реквізити або інші чутливі категорії.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">2. Як ми використовуємо дані</h2>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Відповіді на запити та надання послуг</li>
                            <li>Надсилання сервісних/транзакційних листів</li>
                            <li>Покращення сайту та надійності</li>
                            <li>Моніторинг безпеки та аналітика</li>
                            <li>Внутрішня звітність</li>
                        </ul>
                        <p className="mt-2">
                            Ми <strong>не</strong> продаємо та не передаємо персональні дані третім сторонам для маркетингу.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">3. Зберігання та обробники</h2>
                        <p>Ми використовуємо надійних постачальників:</p>
                        <div className="overflow-x-auto mt-3 rounded-md border border-border bg-card/30 p-3">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead>
                                <tr className="text-muted-foreground">
                                    <th className="p-2">Сервіс</th>
                                    <th className="p-2">Призначення</th>
                                    <th className="p-2">Регіон</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="p-2 font-medium">Vercel</td>
                                    <td className="p-2">Хостинг фронтенда та edge-доставка</td>
                                    <td className="p-2">Global</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium">Railway</td>
                                    <td className="p-2">Хостинг бекенда</td>
                                    <td className="p-2">EU</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium">Supabase</td>
                                    <td className="p-2">База даних та сховище</td>
                                    <td className="p-2">EU</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium">Resend</td>
                                    <td className="p-2">Транзакційні email-листи</td>
                                    <td className="p-2">EU (Ireland)</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium">Telegram Bot API</td>
                                    <td className="p-2">Опційні нотифікації про ліди</td>
                                    <td className="p-2">Secure HTTPS</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-2">
                            Дані передаються по HTTPS і захищені сучасними засобами безпеки.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">4. Строки зберігання</h2>
                        <p>
                            Зберігаємо контактні та аналітичні дані лише стільки, скільки потрібно для
                            надання послуг або виконання вимог закону. Для видалення звертайтесь на{' '}
                            <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">5. Cookies та аналітика</h2>
                        <p>
                            Можемо використовувати мінімальну, privacy-friendly аналітику, що не ідентифікує
                            користувачів і оперує лише анонімними сесійними даними.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">6. Ваші права (GDPR)</h2>
                        <p>
                            Якщо ви в ЄС, маєте право на доступ, виправлення, видалення, обмеження, переносимість
                            даних та заперечення проти обробки. Звертайтесь на{' '}
                            <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">7. Зовнішні посилання</h2>
                        <p>
                            Зовнішні сайти, на які ведуть посилання з {SITE}, мають власні політики та практики.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">8. Зміни до Політики</h2>
                        <p>
                            Політика може оновлюватися з технічних або юридичних причин. Актуальна версія —
                            завжди на{' '}
                            <Link className="underline" href="/privacy/ua">
                                {SITE}/privacy/ua
                            </Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">9. Контакти</h2>
                        <p>
                            Email:{' '}
                            <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            <br />
                            Оператор: IThingy Labs (EU)
                        </p>
                    </section>

                    <div className="pt-6 border-t border-border text-xs text-muted-foreground">
                        Потрібна англійська версія?{' '}
                        <Link className="underline" href="/privacy">
                            Read in English
                        </Link>
                        .
                    </div>
                </div>
            </div>
        </main>
    );
}
