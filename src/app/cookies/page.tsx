"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="text-gradient">Cookie</span> Policy
          </h1>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
            Last updated: January 2026
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They help the site function properly, remember preferences, and provide analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="font-bold text-foreground mb-2">Essential Cookies</h3>
                  <p className="text-sm text-muted-foreground">Required for core functionality — navigation, secure access, session management. Cannot be disabled.</p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="font-bold text-foreground mb-2">Analytics Cookies</h3>
                  <p className="text-sm text-muted-foreground">Help us understand visitor behavior (pages visited, time spent) to improve our site. Used with your consent.</p>
                </div>
                <div className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="font-bold text-foreground mb-2">Preference Cookies</h3>
                  <p className="text-sm text-muted-foreground">Remember your settings (language, theme, region) for a personalized experience.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use trusted third-party services that set cookies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                <li>Google Analytics — site usage analytics</li>
                <li>Cloudflare — security and performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control cookies through your browser settings:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                <li>Accept or reject all cookies</li>
                <li>Delete existing cookies</li>
                <li>Block third-party cookies</li>
                <li>Set preferences per site</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Disabling essential cookies may impair website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Consent</h2>
              <p className="text-muted-foreground leading-relaxed">
                By continuing to use our website with cookies enabled, you consent to our use of cookies as described. You may withdraw consent at any time by adjusting browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about this cookie policy, contact us at:
              </p>
              <p className="text-foreground font-medium mt-2">sales@aftech.co.id</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
