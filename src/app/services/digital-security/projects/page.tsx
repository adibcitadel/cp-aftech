"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Shield, Lock, Search, Eye, Cloud, Users } from "lucide-react";
import Link from "next/link";

const serviceSlug = "digital-security";

const projects = [
  {
    slug: "zero-trust-architecture",
    title: "Zero-Trust Architecture Implementation",
    client: "PT Bank Digital Nusantara",
    location: "Jakarta",
    year: "2025",
    status: "Completed",
    icon: Shield,
    description: "Full zero-trust security architecture for a digital bank. Includes micro-segmentation, identity-aware proxies, and continuous verification for all resources.",
    impact: ["Zero-trust for 2000+ employees", "Reduced attack surface by 80%", "Compliant with POJK regulations"],
    tech: ["ZeroTrust", "Okta", "BeyondCorp", "TLS mTLS", "Cloudflare"]
  },
  {
    slug: "soc-2-audit-certification",
    title: "SOC 2 Type II Audit & Certification",
    client: "PT SaaS Indonesia",
    location: "Jakarta",
    year: "2024",
    status: "Completed",
    icon: Search,
    description: "End-to-end SOC 2 Type II readiness assessment, gap analysis, and remediation. Achieved certification within 6 months with zero findings.",
    impact: ["SOC 2 Type II certified", "ISO 27001 alignment", "Enterprise sales enablement"],
    tech: ["SIEM", "SOAR", "EDR", "DLP", "IAM"]
  },
  {
    slug: "enterprise-penetration-testing",
    title: "Enterprise Penetration Testing",
    client: "PT Asuransi Sejahtera",
    location: "Jakarta",
    year: "2025",
    status: "Completed",
    icon: Lock,
    description: "Comprehensive penetration testing across web applications, mobile apps, APIs, and internal network infrastructure. 100+ vulnerabilities identified and remediated.",
    impact: ["120 vulnerabilities remediated", "Critical findings resolved in 48h", "Improved security posture rating"],
    tech: ["Burp Suite", "Metasploit", "Nessus", "BloodHound", "Wireshark"]
  },
  {
    slug: "managed-soc-deployment",
    title: "24/7 Managed SOC Deployment",
    client: "PT Retail Makmur",
    location: "Jakarta",
    year: "2026",
    status: "In Progress",
    icon: Eye,
    description: "Security Operations Center setup with 24/7 monitoring, threat detection, incident response, and SIEM integration across 200+ retail locations.",
    impact: ["Real-time threat monitoring", "30-minute incident response SLA", "Unified security visibility"],
    tech: ["Splunk", "Cortex XSOAR", "CrowdStrike", "Palo Alto", "Darktrace"]
  },
  {
    slug: "cloud-security-posture",
    title: "Cloud Security Posture Management",
    client: "PT Fintech Maju Bersama",
    location: "Jakarta",
    year: "2024",
    status: "Completed",
    icon: Cloud,
    description: "Multi-cloud security assessment and remediation for AWS and GCP environments. Automated compliance monitoring with CSPM tools.",
    impact: ["PCI DSS compliance achieved", "Automated compliance checks", "30% reduction in cloud security incidents"],
    tech: ["AWS Security Hub", "GCP Security", "Prisma Cloud", "Terraform", "Checkov"]
  },
  {
    slug: "security-awareness-program",
    title: "Employee Security Awareness Program",
    client: "PT Kimia Nusantara",
    location: "Cilegon, Banten",
    year: "2025",
    status: "Completed",
    icon: Users,
    description: "Enterprise-wide security awareness program including phishing simulations, training modules, and security culture assessment for 5000+ employees.",
    impact: ["Phishing success rate dropped 90%", "Security culture score improved 65%", "Compliant with ISO 27001 training requirements"],
    tech: ["KnowBe4", "PhishSim", "SAML SSO", "LMS Platform", "Analytics"]
  }
];

const statusColors: Record<string, string> = {
  "Completed": "text-primary bg-primary/10",
  "In Progress": "text-secondary bg-secondary/10"
};

export default function SecurityProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/services/digital-security" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Digital Security Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-4 block">Our Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Digital Security <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Enterprise security engagements spanning zero-trust architecture, compliance certifications, penetration testing, and managed SOC operations.
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
            <h2 className="text-2xl font-bold text-foreground mb-3">Need Security Solutions?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">Let's discuss how we can protect your enterprise. Our team is ready to design a solution tailored to your needs.</p>
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
