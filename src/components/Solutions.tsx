"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Factory, Landmark, RadioTower } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const solutions = [
  {
    slug: "security-hub",
    title: "Financial & Banking",
    features: ["Secure Digital Infrastructure", "Fintech Integration", "Cybersecurity Compliance"],
    icon: Landmark,
    bg: "bg-blue-600/10 from-blue-600/20 to-blue-400/5"
  },
  {
    slug: "iot-sensors",
    title: "Manufacturing",
    features: ["Smart Factory Systems", "IoT Monitoring", "Operational Automation"],
    icon: Factory,
    bg: "bg-emerald-600/10 from-emerald-600/20 to-emerald-400/5"
  },
  {
    slug: "erp-connect",
    title: "Government",
    features: ["Smart Governance Systems", "Public Digital Services", "Secure Data Hubs"],
    icon: Building2,
    bg: "bg-purple-600/10 from-purple-600/20 to-purple-400/5"
  },
  {
    slug: "cloud-bridge",
    title: "Telecommunications",
    features: ["Network Infrastructure", "Communication Systems", "Data Center Services"],
    icon: RadioTower,
    bg: "bg-cyan-600/10 from-cyan-600/20 to-cyan-400/5"
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
            >
              Industry Solutions
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-foreground break-words"
            >
              Tailored Technology for Every <span className="text-gradient">Sector</span>
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-sm mb-2"
          >
            We bridge the gap between complex technology and real-world business challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item, i) => (
            <Link key={i} href={`/products/${item.slug}`} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl border border-border transition-all overflow-hidden relative group hover:-translate-y-2"
                style={{background:'var(--card)', boxShadow:'var(--shadow-sm)'}}
              >
                {/* Glowing Hover Background */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br",
                  item.bg
                )} />
                {/* Neon Side Border */}
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-gradient-to-b from-primary to-secondary group-hover:h-full transition-all duration-700 ease-out" />

                <div className={cn(
                  "relative z-10 w-24 h-24 shrink-0 rounded-2xl flex items-center justify-center text-primary transition-all duration-500 shadow-md group-hover:scale-110 group-hover:rotate-6",
                  item.bg
                )}>
                  <item.icon size={48} />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                  <ul className="space-y-3">
                    {item.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
