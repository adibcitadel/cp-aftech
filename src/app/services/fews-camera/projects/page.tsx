"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Eye, Shield, Search, Camera, Lock } from "lucide-react";
import Link from "next/link";

const serviceSlug = "fews-camera";

const projects = [
  {
    slug: "power-plant-fire-watch-system",
    title: "Power Plant Fire Watch System",
    client: "PLN Indonesia Power UBP Adipala",
    location: "Cilacap, Central Java",
    year: "2025",
    status: "Completed",
    icon: Eye,
    description: "Thermal AI surveillance cameras for coal stockpile, conveyor, and boiler perimeter fire detection at a 2x660 MW coal-fired power plant.",
    impact: ["Sub-30s fire & hotspot detection", "45 thermal-optical AI cameras", "Integrated with plant DCS"],
    tech: ["Thermal + Optical Cameras", "Edge AI", "Hotspot Detection", "DCS Integration", "Auto Foam Suppression"]
  },
  {
    slug: "plantation-fire-early-warning",
    title: "Plantation Fire Early Warning System",
    client: "PT Perkebunan Nusantara III",
    location: "Medan, North Sumatra",
    year: "2025",
    status: "Completed",
    icon: Shield,
    description: "Thermal-optical dual-lens cameras with AI detection across 8,000 hectares of palm plantation, integrated with weather and lightning data.",
    impact: ["< 90s detection-to-alert time", "8,000 hectares covered", "Integrated weather + lightning data"],
    tech: ["Thermal + Optical Cameras", "Edge AI", "Weather Stations", "Lightning Detection", "4G LTE"]
  },
  {
    slug: "industrial-site-flame-detection",
    title: "Industrial Site Flame Detection",
    client: "PT Pertamina Refinery Cilacap",
    location: "Cilacap, Central Java",
    year: "2026",
    status: "In Progress",
    icon: Search,
    description: "ATEX-certified flame and gas detection cameras for hydrocarbon processing facilities with 4K visual verification.",
    impact: ["ATEX Zone 1 certified hardware", "4K visual verification in 5s", "Integrated with suppression systems"],
    tech: ["ATEX Cameras", "IR Flame Detection", "Gas Imaging", "AI False Alarm Filter", "SCADA Integration"]
  },
  {
    slug: "smart-city-surveillance-pilot",
    title: "Smart City Surveillance & Fire Watch",
    client: "Government of South Jakarta",
    location: "Jakarta",
    year: "2025",
    status: "Completed",
    icon: Camera,
    description: "Urban surveillance cameras with fire, smoke, crowd-density AI analytics and license plate recognition on a unified platform.",
    impact: ["120 multi-purpose AI cameras", "Sub-10s fire/smoke alerts", "Unified city command dashboard"],
    tech: ["Multi-purpose AI Cameras", "Edge GPU", "ANPR", "Crowd Analytics", "Fiber Backbone"]
  },
  {
    slug: "mining-conveyor-fire-watch",
    title: "Mining Conveyor Belt Fire Watch",
    client: "PT Bukit Asam Tbk",
    location: "Tanjung Enim, South Sumatra",
    year: "2024",
    status: "Completed",
    icon: Eye,
    description: "Linear thermal camera array along 12 km of coal conveyor belts with spark detection and automated water-cannon triggering.",
    impact: ["12 km continuous coverage", "SIL-2 safety certified", "95% reduction in conveyor fires"],
    tech: ["Thermal Imaging", "SIL-2 PLC", "Spark Detection AI", "Auto Water Cannon", "Fiber Optics"]
  },
  {
    slug: "wildlife-anti-poaching-cameras",
    title: "Wildlife Anti-Poaching Camera System",
    client: "Taman Nasional Way Kambas",
    location: "Lampung, Sumatra",
    year: "2026",
    status: "In Progress",
    icon: Lock,
    description: "Camouflaged AI surveillance cameras with poaching detection and automated ranger dispatch across 1,300 km² of rainforest.",
    impact: ["200 camouflaged camera units", "Real-time ranger dispatch", "Edge AI weapon & snare detection"],
    tech: ["Camouflaged AI Cameras", "Edge AI", "Mesh Radio", "Solar Power", "Satellite Uplink"]
  }
];

const statusColors: Record<string, string> = {
  "Completed": "text-primary bg-primary/10",
  "In Progress": "text-secondary bg-secondary/10"
};

export default function FEWSProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/services/fews-camera" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to FEWS Camera
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-4 block">Our Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              FEWS Camera <span className="text-gradient">Deployments</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real-world fire early warning and surveillance projects across forestry, plantation, industrial, mining, and smart city environments.
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
            <h2 className="text-2xl font-bold text-foreground mb-3">Need a FEWS Camera Deployment?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">From forest fire detection to industrial flame monitoring — let's design a surveillance system for your environment.</p>
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
