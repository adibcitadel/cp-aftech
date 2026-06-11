"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { menuData } from "@/lib/constants";

const serviceImages: Record<string, string> = {
  iot: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
  "ai-ml": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  "system-integrator": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  "digital-security": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
  "fews-camera": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
  "software-dev": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop"
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params.slug as string;
  
  const service = menuData.Service.items.find(item => item.slug === slug);

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center text-foreground">Service not found</div>;
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30">
      {/* Hero Section */}
      <section id="overview" className="pt-32 pb-16 container mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-8 shadow-2xl shadow-primary/20">
              <Icon size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tighter">
              {service.title} <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              {service.desc} We provide world-class {service.title.toLowerCase()} services tailored for enterprises in Indonesia and beyond.
            </p>
            {["iot", "ai-ml", "system-integrator", "digital-security", "fews-camera", "software-dev"].includes(slug) ? (
              <Link
                href={`/services/${slug}/projects`}
                className="bg-primary hover:bg-primary/90 text-background px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-primary/20 group w-fit"
              >
                View {slug === "ai-ml" ? "AI" : slug === "system-integrator" ? "Integration" : slug === "digital-security" ? "Security" : slug === "fews-camera" ? "FEWS" : slug === "software-dev" ? "Software" : "IoT"} Projects <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <a 
                href={`mailto:aftech.daya@gmail.com?subject=Consultation Request - ${service.title}`}
                className="bg-primary hover:bg-primary/90 text-background px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-primary/20 group w-fit"
              >
                Consult with our Experts <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative">
            <div className="aspect-[4/3] rounded-[40px] overflow-hidden relative border border-border shadow-[var(--shadow-lg)]">
              <img
                src={serviceImages[slug] || serviceImages["software-dev"]}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 dark:bg-[#111520]/90 backdrop-blur-md border border-border shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary backdrop-blur-sm">
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{service.title}</div>
                    <div className="text-[10px] text-muted-foreground font-mono tracking-[0.2em] uppercase">Technology Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky In-Page Navigation */}
      <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-xl border-y border-border py-4 mb-16 shadow-sm">
        <div className="container mx-auto px-6 flex items-center gap-8 overflow-x-auto no-scrollbar">
          <a href="#overview" className="text-sm font-bold text-foreground hover:text-primary transition-colors whitespace-nowrap">Overview</a>
          <a href="#assessment" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Assessment & Strategy</a>
          <a href="#implementation" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Implementation</a>
          <a href="#support" className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">Managed Support</a>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 pb-32 space-y-32">
        {/* Assessment Section */}
        <section id="assessment" className="scroll-mt-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Assessment & Strategy</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Before deploying any {service.title} solution, our engineering team conducts a rigorous infrastructure assessment. We identify operational bottlenecks, security vulnerabilities, and integration requirements to formulate a strategic roadmap tailored to your enterprise goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-raised border border-border">
                <h4 className="text-foreground font-bold mb-2">Infrastructure Audit</h4>
                <p className="text-sm text-muted-foreground">Comprehensive evaluation of existing hardware, networks, and software environments.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-raised border border-border">
                <h4 className="text-foreground font-bold mb-2">Feasibility Study</h4>
                <p className="text-sm text-muted-foreground">Cost-benefit analysis and projected ROI for the proposed technological upgrades.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section id="implementation" className="scroll-mt-32">
          <div className="max-w-3xl ml-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">2</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Implementation & Deployment</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our agile deployment methodology ensures seamless integration of {service.title} systems with zero operational downtime. We utilize industry-best CI/CD pipelines, containerization, and advanced staging environments to guarantee flawless execution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-raised border border-border">
                <h4 className="text-foreground font-bold mb-2">Agile Integration</h4>
                <p className="text-sm text-muted-foreground">Iterative deployment cycles ensuring rapid delivery and continuous feedback loops.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-raised border border-border">
                <h4 className="text-foreground font-bold mb-2">Security Hardening</h4>
                <p className="text-sm text-muted-foreground">Implementing zero-trust architecture and enterprise-grade encryption from day one.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="scroll-mt-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">3</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Managed Support</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Post-deployment, AFTECH provides 24/7 managed support to ensure the continuous reliability and optimization of your {service.title} ecosystem. Our automated monitoring systems detect and resolve anomalies before they impact your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-raised border border-border">
                <h4 className="text-foreground font-bold mb-2">24/7 NOC Monitoring</h4>
                <p className="text-sm text-muted-foreground">Continuous network and system monitoring by our dedicated security experts.</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-raised border border-border">
                <h4 className="text-foreground font-bold mb-2">Performance Tuning</h4>
                <p className="text-sm text-muted-foreground">Regular updates and system optimizations to maintain peak performance and scalability.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
