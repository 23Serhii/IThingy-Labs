"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/shared/ui/button";
import { MapPin, Mail, Phone, ChevronRight, MessageCircle } from "lucide-react";
import { useLang } from "../../../context/LanguageContext"; // Перевір шлях

type ContactValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function Contact() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [values, setValues] = useState<ContactValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const onChange =
    (key: keyof ContactValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
      setErrors((er) => ({ ...er, [key]: "" }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!values.name.trim()) {
      setErrors({ name: t.contact.errors.name });
      return;
    }

    const WHATSAPP_NUMBER = "380739878325";
    const text = `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nMessage: ${values.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-24 relative grid-bg" ref={ref}>
      <div className="absolute inset-0 purple-pink-gradient -z-10 opacity-25 dark:opacity-35" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Ліва частина: Інфо */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 italic text-foreground">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              {t.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    {t.contact.infoTitle}
                  </h4>
                  <p className="text-muted-foreground">{t.contact.infoDesc}</p>
                  <a
                    href="mailto:ithingylabs@gmail.com"
                    className="text-primary hover:underline block mt-2 font-medium"
                  >
                    ithingylabs@gmail.com
                  </a>
                </div>
              </div>
              {/* Можна додати телефон або локацію аналогічно */}
            </div>
          </motion.div>

          {/* Права частина: Форма */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-md p-8 shadow-xl">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground ml-1">
                    {t.contact.labels.name}
                  </label>
                  <input
                    type="text"
                    placeholder={t.contact.placeholders.name}
                    value={values.name}
                    onChange={onChange("name")}
                    className={`w-full rounded-lg border bg-card/40 px-4 py-3 text-foreground outline-none transition-all ${
                      errors.name
                        ? "border-red-500/50"
                        : "border-border focus:border-primary/60"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 ml-1">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground ml-1">
                      {t.contact.labels.email}
                    </label>
                    <input
                      type="email"
                      placeholder={t.contact.placeholders.email}
                      value={values.email}
                      onChange={onChange("email")}
                      className="w-full rounded-lg border border-border bg-card/40 px-4 py-3 text-foreground outline-none focus:border-primary/60 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground ml-1">
                      {t.contact.labels.phone}
                    </label>
                    <input
                      type="tel"
                      placeholder={t.contact.placeholders.phone}
                      value={values.phone}
                      onChange={onChange("phone")}
                      className="w-full rounded-lg border border-border bg-card/40 px-4 py-3 text-foreground outline-none focus:border-primary/60 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground ml-1">
                    {t.contact.labels.message}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.contact.placeholders.message}
                    value={values.message}
                    onChange={onChange("message")}
                    className="w-full rounded-lg border border-border bg-card/40 px-4 py-3 text-foreground outline-none focus:border-primary/60 transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-lg py-6 rounded-xl shadow-lg shadow-green-500/10 transition-transform active:scale-95"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t.contact.submit}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
        <div className="mt-20 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IThingy-Labs.{" "}
            {t.contact.footer.rights}
            <span className="mx-2">|</span>
            {t.contact.footer.developedBy}{" "}
            <a
              href="https://s23rhii.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Serhii
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
