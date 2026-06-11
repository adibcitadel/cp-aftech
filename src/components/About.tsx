"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, TrendingUp, Award, Users, Rocket } from "lucide-react";

const phases = [
  {
    title: "Phase 1",
    subtitle: "Infrastructure Foundation",
    description: "Expand enterprise networking solutions and improve cloud architecture.",
    icon: Rocket,
    status: "Completed"
  },
  {
    title: "Phase 2",
    subtitle: "Smart Automation",
    description: "AI monitoring systems and predictive maintenance integration.",
    icon: Target,
    status: "In Progress"
  },
  {
    title: "Phase 3",
    subtitle: "Ecosystem Expansion",
    description: "ERP integrations and SaaS platform expansion.",
    icon: TrendingUp,
    status: "Upcoming"
  },
  {
    title: "Phase 4",
    subtitle: "Regional Scale",
    description: "Southeast Asia expansion and managed cloud services.",
    icon: Eye,
    status: "Future"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Who We Are</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-8 break-words">
              Driving Innovation Across the <span className="text-gradient">Archipelago</span>
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              AFTECH is a strategic technology partner for enterprises, government institutions, and financial services in Indonesia. We combine infrastructure expertise with cutting-edge software engineering to build future-ready digital ecosystems.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-lg mb-1">Our Vision</h4>
                  <p className="text-muted-foreground text-sm italic">"To become a trusted and world-class digital technology provider that accelerates Indonesia’s digital transformation ecosystem."</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-lg mb-1">Our Mission</h4>
                  <p className="text-muted-foreground text-sm">Deliver reliable IT infrastructure, enable secure digital ecosystems, and build innovative technology products for Indonesian businesses.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative group border border-border shadow-[var(--shadow-lg)]">
              {/* Unsplash Tech Image */}
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" 
                alt="Global Tech Infrastructure" 
                width="600" height="600"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="grid grid-cols-2 gap-4 p-8 w-full">
                    {[
                      { val: "100+", label: "Clients" },
                      { val: "500+", label: "Projects" },
                      { val: "50+", label: "Experts" },
                      { val: "24/7", label: "Support" },
                    ].map((s, i) => (
                      <div key={i} className="p-6 rounded-2xl text-center group-hover:scale-105 transition-transform duration-500 border border-border" style={{background:'var(--glass-bg)', boxShadow:'var(--shadow-sm)'}}>
                        <div className="text-3xl font-bold text-primary mb-1">{s.val}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-widest">{s.label}</div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Roadmap */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Strategic Roadmap</h3>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl flex flex-col items-center text-center transition-all border border-border"
                style={{background:'var(--card)', boxShadow:'var(--shadow-sm)'}}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-background text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  {phase.status}
                </div>
                <div className="w-16 h-16 rounded-2xl dark:bg-white/5 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <phase.icon size={32} />
                </div>
                <h4 className="text-foreground font-bold mb-2">{phase.subtitle}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{phase.description}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 translate-y-1/2 w-8 border-t border-dashed dark:border-white/20 border-black/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
