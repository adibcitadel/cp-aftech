"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
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
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
            Last updated: January 2026
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using AFTECH's website and services, you agree to be bound by these Terms of Service. If you disagree with any part, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AFTECH provides enterprise technology solutions including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                <li>IT Infrastructure & System Integration</li>
                <li>Custom Software Development</li>
                <li>IoT & Smart Solutions</li>
                <li>Cybersecurity Services</li>
                <li>R&D Product Development</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Specific service terms are governed by individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, trademarks, logos, and software on this website are the property of PT AFTECH Daya Solusindo or its licensors. Unauthorized use, reproduction, or distribution is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. User Obligations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed pl-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful code or disrupt services</li>
                <li>Attempt unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                AFTECH shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services, except as required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by the laws of the Republic of Indonesia. Disputes shall be resolved in the courts of Jakarta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these terms periodically. Continued use of our services constitutes acceptance of revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, contact us at:
              </p>
              <p className="text-foreground font-medium mt-2">sales@aftech.co.id</p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
