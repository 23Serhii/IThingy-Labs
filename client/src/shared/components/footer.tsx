import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
    const year = new Date().getFullYear()

    return (
            <footer id="footer" className="bg-background border-t border-border" role="contentinfo">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">


                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-muted-foreground">
                        <p>&copy; {year} IThingy Labs. Kyiv, Ukraine</p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="#"
                            aria-label="Facebook"
                            className="w-10 h-10 rounded-full border border-border bg-card/40 flex items-center justify-center transition-all hover:border-primary/50 hover:bg-primary/10"
                        >
                            <Facebook className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                        </Link>
                        <Link
                            href="#"
                            aria-label="Twitter"
                            className="w-10 h-10 rounded-full border border-border bg-card/40 flex items-center justify-center transition-all hover:border-primary/50 hover:bg-primary/10"
                        >
                            <Twitter className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                        </Link>
                        <Link
                            href="#"
                            aria-label="LinkedIn"
                            className="w-10 h-10 rounded-full border border-border bg-card/40 flex items-center justify-center transition-all hover:border-primary/50 hover:bg-primary/10"
                        >
                            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                        </Link>
                        <Link
                            href="#"
                            aria-label="Instagram"
                            className="w-10 h-10 rounded-full border border-border bg-card/40 flex items-center justify-center transition-all hover:border-primary/50 hover:bg-primary/10"
                        >
                            <Instagram className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="mailto:itingy@gmail.com" className="hover:text-foreground transition-colors">
                            itingy@gmail.com
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
