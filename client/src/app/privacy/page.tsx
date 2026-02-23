import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy — IThingy Labs LLC',
    description:
        'How IThingy Labs LLC collects, uses, and protects your personal data. GDPR-ready, minimal data collection.',
};

const UPDATED = 'October 22, 2025';
const SITE = 'https://ithingy.dev';
const EMAIL = 'ithingylabs@gmail.com';

export default function PrivacyPage() {
    return (
        <main className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
                <p className="text-sm text-muted-foreground">
                    Last updated: {UPDATED}
                </p>

                <div className="mt-8 space-y-8 text-sm leading-7 text-foreground">
                    <section>
                        <p>
                            IThingy Labs LLC (“we”, “our”, “us”) values your privacy. This Policy
                            explains how we collect, use, and protect personal information
                            when you use our website and forms.
                        </p>
                        <p className="mt-3">
                            By using our website or submitting any form, you agree to the
                            terms of this Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>
                                <strong>Contact details</strong>: name, email, phone, company,
                                message content.
                            </li>
                            <li>
                                <strong>Technical data</strong>: IP address, browser
                                user-agent, device type.
                            </li>
                            <li>
                                <strong>Marketing data</strong>: UTM parameters / campaign info.
                            </li>
                            <li>
                                <strong>Communication data</strong>: messages sent via our forms/bots.
                            </li>
                        </ul>
                        <p className="mt-2">
                            We do not collect passwords, payment details, or other highly
                            sensitive categories.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">2. How We Use Data</h2>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Responding to inquiries and providing services</li>
                            <li>Transactional/service emails</li>
                            <li>Improving the website and reliability</li>
                            <li>Security monitoring and analytics</li>
                            <li>Internal reporting</li>
                        </ul>
                        <p className="mt-2">
                            We do <strong>not</strong> sell or share data with third parties
                            for marketing.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">3. Storage & Processors</h2>
                        <p>We use reputable providers to host and process data:</p>
                        <div className="overflow-x-auto mt-3 rounded-md border border-border bg-card/30 p-3">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead>
                                <tr className="text-muted-foreground">
                                    <th className="p-2">Service</th>
                                    <th className="p-2">Purpose</th>
                                    <th className="p-2">Region</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="p-2 font-medium">Vercel</td>
                                    <td className="p-2">Frontend hosting & edge delivery</td>
                                    <td className="p-2">Global</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium">Railway</td>
                                    <td className="p-2">Backend hosting</td>
                                    <td className="p-2">EU</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium">Supabase</td>
                                    <td className="p-2">Database & storage</td>
                                    <td className="p-2">EU</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium">Resend</td>
                                    <td className="p-2">Transactional email</td>
                                    <td className="p-2">EU (Ireland)</td>
                                </tr>
                                <tr>
                                    <td className="p-2 font-medium">Telegram Bot API</td>
                                    <td className="p-2">Optional lead notifications</td>
                                    <td className="p-2">Secure HTTPS</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-2">
                            Data is transmitted via HTTPS and protected with modern security
                            controls.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">4. Retention</h2>
                        <p>
                            We keep contact and analytics data only as long as necessary for
                            services or legal obligations. To request deletion, email{' '}
                            <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">5. Cookies & Analytics</h2>
                        <p>
                            We may use minimal, privacy-friendly analytics. These do not
                            collect personally identifying information beyond anonymous
                            session data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">6. Your Rights (GDPR)</h2>
                        <p>
                            If you are in the EU, you may request access, rectification,
                            deletion, restriction, portability, or object to processing.
                            Contact us at{' '}
                            <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">7. Third-Party Links</h2>
                        <p>
                            External websites linked from {SITE} have their own privacy
                            practices. We are not responsible for those sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">8. Changes</h2>
                        <p>
                            We may update this Policy to reflect technical or legal changes.
                            The latest version is always available at{' '}
                            <Link className="underline" href="/privacy">
                                {SITE}/privacy
                            </Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
                        <p>
                            Email:{' '}
                            <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            <br />
                            Operator: IThingy Labs LLC (EU)
                        </p>
                    </section>

                    <div className="pt-6 border-t border-border text-xs text-muted-foreground">
                        Prefer Ukrainian?{' '}
                        <Link className="underline" href="/privacy/ua">
                            Read the UA version
                        </Link>
                        .
                    </div>
                </div>
            </div>
        </main>
    );
}
