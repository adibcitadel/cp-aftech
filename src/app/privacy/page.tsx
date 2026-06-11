"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
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
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
            Last updated: January 2026
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or subscribe to our newsletter. This may include your name, email address, phone number, company name, and message content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Send technical updates, security alerts, and service notifications</li>
                <li>Improve our website, products, and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Sharing & Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share data with trusted service providers who assist in operating our website and delivering services, under strict confidentiality agreements. We may also disclose information when required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                <li>Access, correct, or delete your personal data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy concerns or to exercise your rights, contact us at:
              </p>
              <p className="text-foreground font-medium mt-2">sales@aftech.co.id</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
