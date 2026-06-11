"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  Loader2,
} from "lucide-react";

type Channel = "email" | "whatsapp";

export default function ContactPage() {
  const [channel, setChannel] = useState<Channel>("email");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const mailto = `mailto:aftech.daya@gmail.com?cc=adibpurwanto63@gmail.com&subject=New Inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    )}`;
    window.location.href = mailto;
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const handleWhatsApp = () => {
    const text = `Hi AFTECH! My name is ${form.name || "..."}.${form.company ? ` I'm from ${form.company}.` : ""} ${form.message || `I would like to know more about your services.`}`;
    window.open(
      `https://wa.me/6282231834977?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <div
              className="rounded-[40px] border border-border p-8 md:p-12 relative overflow-hidden"
              style={{ background: "var(--card)", boxShadow: "var(--shadow-lg)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Have a project in mind or need technical consultation? Our experts are ready to assist you.
              </p>

              {/* Channel Toggle */}
              <div className="flex p-1 rounded-2xl border border-border bg-muted mb-8">
                <button
                  onClick={() => setChannel("email")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                    channel === "email"
                      ? "bg-primary text-background shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Send size={16} />
                  Send Email
                </button>
                <button
                  onClick={() => setChannel("whatsapp")}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                    channel === "whatsapp"
                      ? "bg-green-600 text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <MessageCircle size={16} />
                  Chat WhatsApp
                </button>
              </div>

              {sent && channel === "email" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <CheckCircle size={64} className="text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We&apos;ll respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  {channel === "email" ? (
                    <motion.form
                      key="email"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleEmailSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={form.name}
                            onChange={update("name")}
                            className="w-full border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
                            style={{ background: "var(--muted)" }}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={form.email}
                            onChange={update("email")}
                            className="w-full border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
                            style={{ background: "var(--muted)" }}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">
                            Company
                          </label>
                          <input
                            type="text"
                            placeholder="Enterprise Inc."
                            value={form.company}
                            onChange={update("company")}
                            className="w-full border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
                            style={{ background: "var(--muted)" }}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            placeholder="+62 812 3456 7890"
                            value={form.phone}
                            onChange={update("phone")}
                            className="w-full border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground"
                            style={{ background: "var(--muted)" }}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="How can we help you?"
                          value={form.message}
                          onChange={update("message")}
                          className="w-full border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none placeholder:text-muted-foreground"
                          style={{ background: "var(--muted)" }}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary/90 text-background font-bold py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-60"
                      >
                        {loading ? (
                          <Loader2 size={20} className="animate-spin" />
                        ) : (
                          <>
                            <Send size={20} />
                            Send Email
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="whatsapp"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-5"
                    >
                      <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
                            <MessageCircle size={24} className="text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-foreground">
                              WhatsApp Chat
                            </div>
                            <div className="text-xs text-muted-foreground">
                              +62 822 3183 4977
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          You&apos;ll be redirected to WhatsApp to continue the conversation. Our team typically responds within minutes during business hours.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={form.name}
                          onChange={update("name")}
                          className="w-full border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all placeholder:text-muted-foreground"
                          style={{ background: "var(--muted)" }}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">
                          Company
                        </label>
                        <input
                          type="text"
                          placeholder="Enterprise Inc."
                          value={form.company}
                          onChange={update("company")}
                          className="w-full border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all placeholder:text-muted-foreground"
                          style={{ background: "var(--muted)" }}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] ml-1">
                          Message (optional)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="What would you like to discuss?"
                          value={form.message}
                          onChange={update("message")}
                          className="w-full border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all resize-none placeholder:text-muted-foreground"
                          style={{ background: "var(--muted)" }}
                        />
                      </div>
                      <button
                        onClick={handleWhatsApp}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-green-600/20 flex items-center justify-center gap-3 active:scale-95"
                      >
                        <MessageCircle size={20} />
                        Start WhatsApp Chat
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center gap-12">
              {[
                {
                  icon: MapPin,
                  color: "text-primary",
                  title: "Global Headquarters",
                  desc: "Jl. Lingkar Timur 23, Karangkandri, Kesugihan\nCilacap, Jawa Tengah 53274, Indonesia",
                },
                {
                  icon: Phone,
                  color: "text-secondary",
                  title: "Connect with Sales",
                  desc: "+62 822 3183 4977\nMon - Fri, 9:00 - 18:00",
                },
                {
                  icon: Mail,
                  color: "text-primary",
                  title: "Email Support",
                  desc: "sales@aftech.co.id\ntechnical@aftech.co.id",
                },
              ].map((info, i) => (
                <div key={i} className="flex items-start gap-8 group">
                  <div
                    className={`w-16 h-16 shrink-0 rounded-2xl bg-surface-raised border border-border flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300 ${info.color}`}
                  >
                    <info.icon size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                      {info.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
