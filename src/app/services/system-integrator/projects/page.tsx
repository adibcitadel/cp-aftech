"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Server, Database, Cloud, Network, GitMerge, Building2 } from "lucide-react";
import Link from "next/link";

const serviceSlug = "system-integrator";

const projects = [
  {
    slug: "erp-scada-integration",
    title: "ERP-SCADA Integration",
    client: "PT Kimia Nusantara",
    location: "Cilegon, Banten",
    year: "2025",
    status: "Completed",
    icon: Database,
    description: "Bidirectional integration between SAP ERP and Siemens SCADA systems for real-time production data synchronization and automated inventory management.",
    impact: ["Real-time production visibility", "40% reduction in data entry errors", "Automated material reorder triggers"],
    tech: ["SAP S/4HANA", "Siemens SCADA", "OPC UA", "Mulesoft", "PostgreSQL"]
  },
  {
    slug: "multi-cloud-infrastructure",
    title: "Multi-Cloud Infrastructure",
    client: "PT Fintech Maju Bersama",
    location: "Jakarta",
    year: "2024",
    status: "Completed",
    icon: Cloud,
    description: "Hybrid multi-cloud architecture design connecting AWS, GCP, and on-premise data centers with unified identity management and disaster recovery.",
    impact: ["99.99% infrastructure uptime", "30% reduction in cloud costs", "Automated failover across regions"],
    tech: ["AWS", "GCP", "Terraform", "Kubernetes", "Istio"]
  },
  {
    slug: "network-modernization",
    title: "Network Modernization Project",
    client: "PT Pendidikan Digital",
    location: "Bandung, West Java",
    year: "2025",
    status: "Completed",
    icon: Network,
    description: "End-to-end network infrastructure overhaul for a 50-building university campus. SD-WAN implementation with centralized management.",
    impact: ["300% bandwidth improvement", "Centralized network management", "Zero-trust network access"],
    tech: ["Cisco Catalyst", "SD-WAN", "Palo Alto", "802.1X", "SolarWinds"]
  },
  {
    slug: "data-center-consolidation",
    title: "Data Center Consolidation",
    client: "PT Asuransi Jiwa Bersama",
    location: "Jakarta",
    year: "2026",
    status: "In Progress",
    icon: Server,
    description: "Consolidation of 3 legacy data centers into a single Tier III facility with virtualization, storage optimization, and enhanced disaster recovery.",
    impact: ["45% reduction in operational costs", "Improved disaster recovery RTO/RPO", "Unified infrastructure management"],
    tech: ["VMware vSphere", "NetApp", "Dell PowerEdge", "Veeam", "Cisco ACI"]
  },
  {
    slug: "enterprise-api-gateway",
    title: "Enterprise API Gateway",
    client: "PT Perdagangan Digital",
    location: "Jakarta",
    year: "2024",
    status: "Completed",
    icon: GitMerge,
    description: "Centralized API management platform connecting 15 internal microservices with external partner systems. Rate limiting, auth, and monitoring.",
    impact: ["Unified API governance", "60% faster partner onboarding", "Comprehensive API analytics"],
    tech: ["Kong", "Keycloak", "Docker", "PostgreSQL", "Prometheus"]
  },
  {
    slug: "smart-building-integration",
    title: "Smart Building Integration",
    client: "PT Properti Nusantara",
    location: "Jakarta Selatan",
    year: "2025",
    status: "Completed",
    icon: Building2,
    description: "Integrated building management system combining HVAC, lighting, security, and fire safety into a single control platform for a 30-floor tower.",
    impact: ["25% energy efficiency gain", "Unified building operations", "Automated compliance reporting"],
    tech: ["BACnet", "KNX", "Siemens Desigo", "Azure IoT", "Power BI"]
  }
];

const statusColors: Record<string, string> = {
  "Completed": "text-primary bg-primary/10",
  "In Progress": "text-secondary bg-secondary/10"
};

export default function SystemIntegratorProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/services/system-integrator" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to System Integrator Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-4 block">Our Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              System Integration <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Enterprise integration projects spanning ERP, cloud infrastructure, networking, data centers, and building management systems.
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
            <h2 className="text-2xl font-bold text-foreground mb-3">Need System Integration?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">Let's discuss how we can unify your enterprise systems. Our team is ready to design a solution tailored to your needs.</p>
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
