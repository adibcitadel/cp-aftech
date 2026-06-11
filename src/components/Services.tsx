"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Code, ShieldCheck, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const services = [
  {
    slug: "system-integrator",
    title: "IT Infrastructure",
    description: "Enterprise server deployment, storage systems, network architecture, and data center integration.",
    icon: Server,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    tags: ["Servers", "Networking", "Virtualization"]
  },
  {
    slug: "software-dev",
    title: "Software Development",
    description: "Custom enterprise web apps, mobile solutions, SaaS platforms, and API development.",
    icon: Code,
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    tags: ["Full-stack", "Mobile", "SaaS"]
  },
  {
    slug: "iot",
    title: "IoT & Smart Solutions",
    description: "Real-time monitoring systems, industrial automation, and predictive analytics for operational efficiency.",
    icon: Cpu,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    tags: ["Automation", "Sensors", "Analytics"]
  },
  {
    slug: "digital-security",
    title: "Cybersecurity",
    description: "Threat mitigation, endpoint protection, network security monitoring, and data encryption.",
    icon: ShieldCheck,
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
    tags: ["Threat Intel", "Compliance", "Encryption"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Our Expertise
          </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-foreground break-words"
            >
              Integrated Technology <span className="text-gradient">Portfolio</span>
            </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We provide comprehensive digital solutions designed to scale with your business needs and drive operational excellence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <Link
              key={i}
              href={`/services/${service.slug}`}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative h-full p-8 rounded-3xl border border-border backdrop-blur-md transition-all duration-500 overflow-hidden",
                  "dark:bg-white/[0.02] bg-white",
                  "dark:shadow-none shadow-[var(--shadow-md)]",
                  "group-hover:-translate-y-2 group-hover:shadow-[var(--shadow-lg)] group-hover:border-primary/50"
                )}
              >
                {/* Glowing Hover Background */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br",
                  service.color
                )} />
                {/* Neon Top Border */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-700 ease-out" />
                
                <div className="relative z-10 w-16 h-16 rounded-2xl dark:bg-white/5 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="text-[11px] px-2.5 py-1 rounded-full dark:bg-white/5 bg-primary/8 border border-primary/20 text-primary dark:text-muted-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
