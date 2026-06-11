"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Globe, Smartphone, Code, ShoppingCart, BarChart3, Layout } from "lucide-react";
import Link from "next/link";

const serviceSlug = "software-dev";

const projects = [
  {
    slug: "enterprise-procurement-platform",
    title: "Enterprise Procurement Platform",
    client: "PT Perdagangan Digital",
    location: "Jakarta",
    year: "2025",
    status: "Completed",
    icon: ShoppingCart,
    description: "Full-stack enterprise procurement platform with vendor management, purchase order workflows, budget tracking, and real-time analytics dashboard.",
    impact: ["40% faster procurement cycles", "Centralized vendor management", "Real-time budget tracking"],
    tech: ["Next.js", "Go", "PostgreSQL", "Redis", "Docker"]
  },
  {
    slug: "field-service-mobile-app",
    title: "Field Service Mobile App",
    client: "PT Servis Teknologi",
    location: "Jakarta",
    year: "2024",
    status: "Completed",
    icon: Smartphone,
    description: "Cross-platform mobile application for field technicians featuring job assignment, real-time tracking, inventory lookup, and offline capability.",
    impact: ["50% faster service dispatch", "Real-time technician tracking", "Offline-first architecture"],
    tech: ["React Native", "TypeScript", "GraphQL", "MongoDB", "Firebase"]
  },
  {
    slug: "real-time-analytics-dashboard",
    title: "Real-Time Analytics Dashboard",
    client: "PT Manufaktur Sejahtera",
    location: "Bekasi, West Java",
    year: "2025",
    status: "Completed",
    icon: BarChart3,
    description: "Real-time production analytics dashboard processing 10,000+ data points per second from IoT sensors across 5 manufacturing plants.",
    impact: ["Real-time OEE monitoring", "10K+ data points/sec processing", "Drill-down plant analytics"],
    tech: ["React", "D3.js", "WebSocket", "TimescaleDB", "Node.js"]
  },
  {
    slug: "saas-hr-management-platform",
    title: "SaaS HR Management Platform",
    client: "Internal Product",
    location: "Remote",
    year: "2026",
    status: "In Progress",
    icon: Globe,
    description: "Cloud-native HR SaaS platform with employee management, payroll integration, leave tracking, and performance review modules for Indonesian enterprises.",
    impact: ["Multi-tenant SaaS architecture", "BPJS Ketenagakerjaan integration", "Role-based access control"],
    tech: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Terraform"]
  },
  {
    slug: "api-gateway-developer-portal",
    title: "API Gateway & Developer Portal",
    client: "PT Fintech Maju Bersama",
    location: "Jakarta",
    year: "2024",
    status: "Completed",
    icon: Code,
    description: "Developer-facing API gateway with interactive documentation, API key management, rate limiting, and usage analytics for 30+ API endpoints.",
    impact: ["Unified API management", "Interactive API documentation", "Developer self-service portal"],
    tech: ["Kong", "OpenAPI", "React", "Node.js", "Redis"]
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System",
    client: "PT Pendidikan Digital",
    location: "Bandung, West Java",
    year: "2025",
    status: "Completed",
    icon: Layout,
    description: "Custom LMS platform with course authoring, video streaming, assessment engine, certification management, and gamification features for corporate training.",
    impact: ["10,000+ active users", "SCORM-compliant course support", "Automated certification engine"],
    tech: ["Next.js", "Python", "Django", "PostgreSQL", "AWS S3"]
  }
];

const statusColors: Record<string, string> = {
  "Completed": "text-primary bg-primary/10",
  "In Progress": "text-secondary bg-secondary/10"
};

export default function SoftwareProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/services/software-dev" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Software Dev Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-4 block">Our Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Software Development <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Custom software solutions spanning enterprise platforms, mobile applications, real-time dashboards, SaaS products, and API ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <Link key={i} href={`/services/${serviceSlug}/projects/${project.slug}`} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-muted-foreground/30 hover:-translate-y-1"
                >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-foreground group-hover:text-primary transition-colors">
                      <project.icon size={24} />
                    </div>
                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.client}</p>

                  <div className="flex flex-wrap gap-3 mb-5">
                    <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <MapPin size={12} /> {project.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <Calendar size={12} /> {project.year}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">{project.description}</p>

                  <div className="space-y-2 mb-6">
                    {project.impact.map((item, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 size={12} className="text-primary mt-0.5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-[10px] px-2 py-1 rounded-md bg-surface border border-border text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-10 md:p-14 rounded-2xl border border-border bg-card"
          >
            <h2 className="text-2xl font-bold text-foreground mb-3">Need Custom Software?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">Let's discuss how we can build the perfect software solution for your business. Our team is ready to help.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 active:scale-[0.97] transition-all"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
