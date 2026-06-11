"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Users, CheckCircle2, Factory, Droplets, Thermometer, Zap, BarChart3, Cpu } from "lucide-react";
import Link from "next/link";

const serviceSlug = "iot";

const projects = [
  {
    slug: "smart-factory-monitoring",
    title: "Smart Factory Monitoring",
    client: "PT Manufaktur Sejahtera",
    location: "Bekasi, West Java",
    year: "2025",
    status: "Completed",
    icon: Factory,
    description: "End-to-end IoT sensor deployment across 5 production lines for real-time temperature, humidity, and vibration monitoring. Integrated with centralized SCADA dashboard.",
    impact: ["35% reduction in unplanned downtime", "Real-time anomaly alerts via mobile app", "Centralized dashboard for 200+ sensor nodes"],
    tech: ["Temperature Sensors", "Vibration Monitors", "MQTT", "Grafana", "LoRaWAN"]
  },
  {
    slug: "cold-chain-logistics-tracking",
    title: "Cold Chain Logistics Tracking",
    client: "PT Distribusi Pangan Nusantara",
    location: "Jakarta – Surabaya Corridor",
    year: "2024",
    status: "Completed",
    icon: Thermometer,
    description: "GPS-enabled temperature monitoring system for refrigerated trucks transporting perishable goods across Java. Cloud-based tracking with automated compliance logging.",
    impact: ["99.8% cold chain compliance rate", "Real-time GPS & temp tracking", "Automated regulatory reporting"],
    tech: ["GPS Trackers", "Temp Sensors", "AWS IoT Core", "TimescaleDB", "React Dashboard"]
  },
  {
    slug: "water-quality-monitoring",
    title: "Water Quality Monitoring System",
    client: "PDAM Tirta Jaya",
    location: "Cilacap, Central Java",
    year: "2025",
    status: "In Progress",
    icon: Droplets,
    description: "Deployment of water quality sensors across 12 reservoir points measuring pH, turbidity, TDS, and flow rate. Predictive alerts for contamination events.",
    impact: ["Continuous water quality monitoring", "Instant contamination alerts", "Historical trend analysis"],
    tech: ["pH Sensors", "Turbidity Meters", "Flow Meters", "NB-IoT", "Azure IoT Hub"]
  },
  {
    slug: "energy-management-system",
    title: "Energy Management System",
    client: "PT Gedung Hijau Indonesia",
    location: "Jakarta Selatan",
    year: "2026",
    status: "In Progress",
    icon: Zap,
    description: "Smart metering and energy optimization system for a 20-floor office tower. Automated lighting and HVAC control based on occupancy patterns.",
    impact: ["28% estimated energy savings", "Occupancy-based automation", "Real-time energy usage dashboard"],
    tech: ["Smart Meters", "Occupancy Sensors", "BACnet", "Edge Computing", "Energy AI"]
  },
  {
    slug: "predictive-maintenance-platform",
    title: "Predictive Maintenance Platform",
    client: "PT Semen Nusantara",
    location: "Gresik, East Java",
    year: "2024",
    status: "Completed",
    icon: BarChart3,
    description: "Machine learning-based predictive maintenance system for cement mill rotating equipment. Reduces unexpected failures and extends equipment lifespan.",
    impact: ["45% reduction in maintenance costs", "3-month advance failure prediction", "Extended equipment lifecycle"],
    tech: ["Vibration Analysis", "ML Models", "Python", "InfluxDB", "Kafka"]
  },
  {
    slug: "smart-agriculture-pilot",
    title: "Smart Agriculture Pilot",
    client: "Kementerian Pertanian",
    location: "Yogyakarta",
    year: "2025",
    status: "Completed",
    icon: Cpu,
    description: "Precision agriculture IoT pilot for 50 hectare smart farm. Soil moisture, weather, and crop health monitoring with automated irrigation control.",
    impact: ["40% water usage reduction", "Improved crop yield predictions", "Automated irrigation scheduling"],
    tech: ["Soil Sensors", "Weather Stations", "Drones", "LTE-M", "FarmOS"]
  }
];

const statusColors: Record<string, string> = {
  "Completed": "text-primary bg-primary/10",
  "In Progress": "text-secondary bg-secondary/10"
};

export default function IoTProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/services/iot" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to IoT Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-4 block">Our Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              IoT <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real-world IoT implementations across manufacturing, logistics, energy, and agriculture. Each project demonstrates our end-to-end capabilities from sensor deployment to data-driven insights.
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

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

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
            <h2 className="text-2xl font-bold text-foreground mb-3">Have a Project in Mind?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">Let's discuss how IoT can transform your operations. Our team is ready to design a solution tailored to your needs.</p>
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
