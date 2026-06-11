"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Rocket, ShieldCheck, Globe, Activity } from "lucide-react";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-8xl font-extrabold text-foreground mb-8 tracking-tighter">
              Defining the <span className="text-gradient">Next Generation</span> of Tech
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              PT Aftech Daya Solusindo is a premier technology partner, dedicated to empowering enterprises through robust infrastructure and innovative digital ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-border bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "12+", label: "Years Excellence" },
              { val: "250+", label: "Clients Served" },
              { val: "85+", label: "Expert Engineers" },
              { val: "99.9%", label: "System Uptime" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 transition-transform group-hover:scale-110 duration-300">{stat.val}</div>
                <div className="text-muted-foreground text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="glass p-10 md:p-14 rounded-[40px] border border-border hover:border-primary/30 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <Target size={36} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the primary catalyst for digital transformation in Southeast Asia, creating an integrated ecosystem where technology seamlessly empowers every aspect of industrial and enterprise operations.
              </p>
            </div>
            <div className="glass p-10 md:p-14 rounded-[40px] border border-border hover:border-secondary/30 transition-colors group">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                <Rocket size={36} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We strive to deliver robust, secure, and innovative technology solutions that solve complex business challenges, enhance efficiency, and drive sustainable growth for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Core <span className="text-gradient">Values</span></h2>
            <p className="text-muted-foreground">The fundamental principles that guide every decision and project at AFTECH.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Uncompromising Integrity", desc: "We maintain the highest ethical standards in all our interactions and solutions." },
              { icon: Globe, title: "Global Perspective", desc: "Our solutions are built to compete and integrate on a worldwide scale." },
              { icon: Activity, title: "Relentless Innovation", desc: "We constantly push the boundaries of what's possible in the tech landscape." }
            ].map((value, i) => (
              <div key={i} className="glass p-10 rounded-3xl border dark:border-white/5 border-black/5 dark:hover:bg-white/5 hover:bg-black/5 transition-all group">
                <value.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="text-xl font-bold text-foreground mb-4">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
