"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Cpu, Cloud, Globe } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-mesh">
      {/* Animated Tech Grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none animate-spin-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-12 bg-primary rounded-full" />
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Future-Ready Technology</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 break-words"
          >
            Create your <span className="text-gradient">Idea</span> Into reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
          >
            Empowering innovation through smart technology solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/services/iot" className="relative group px-8 py-4 rounded-full font-bold text-background bg-primary overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center justify-center gap-2">
                Explore Our Solutions <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/about" className="px-8 py-4 rounded-full font-bold border border-border bg-surface-raised backdrop-blur-md transition-all hover:bg-black/10 dark:hover:bg-white/10 hover:border-primary/50 flex items-center justify-center hover:scale-105 active:scale-95">
              Learn More
            </Link>
          </motion.div>

          {/* Quick Stats/Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full"
          >
            {[
              { icon: Cpu, label: "IoT Systems" },
              { icon: Cloud, label: "Cloud Infra" },
              { icon: Shield, label: "Cybersecurity" },
              { icon: Globe, label: "Digital Transformation" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-surface-raised border border-border flex items-center justify-center text-primary group hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default">
                  <item.icon size={24} />
                </div>
                <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
