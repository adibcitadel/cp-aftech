"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Bot, Brain, Eye, BarChart3, MessageSquare, Cpu } from "lucide-react";
import Link from "next/link";

const serviceSlug = "ai-ml";

const projects = [
  {
    slug: "predictive-maintenance-ai",
    title: "Predictive Maintenance AI",
    client: "PT Semen Nusantara",
    location: "Gresik, East Java",
    year: "2025",
    status: "Completed",
    icon: Cpu,
    description: "ML-based predictive maintenance system for cement mill rotating equipment. Uses vibration and temperature data to predict failures 3 months in advance.",
    impact: ["45% reduction in maintenance costs", "3-month advance failure prediction", "92% prediction accuracy"],
    tech: ["TensorFlow", "Python", "Kafka", "InfluxDB", "Grafana"]
  },
  {
    slug: "intelligent-chatbot-platform",
    title: "Intelligent Chatbot Platform",
    client: "PT Bank Digital Nusantara",
    location: "Jakarta",
    year: "2024",
    status: "Completed",
    icon: MessageSquare,
    description: "Enterprise-grade AI chatbot handling customer inquiries, transaction lookups, and complaint resolution with natural language understanding.",
    impact: ["70% reduction in live agent calls", "24/7 automated customer service", "95% intent recognition accuracy"],
    tech: ["NLP", "LLM", "FastAPI", "Redis", "React Dashboard"]
  },
  {
    slug: "computer-vision-quality-control",
    title: "Computer Vision Quality Control",
    client: "PT Elektronik Cemerlang",
    location: "Batam, Riau Islands",
    year: "2025",
    status: "Completed",
    icon: Eye,
    description: "Real-time computer vision system for PCB assembly inspection. Detects soldering defects, component misalignment, and surface anomalies.",
    impact: ["99.5% defect detection rate", "60% faster than manual inspection", "Real-time production line feedback"],
    tech: ["PyTorch", "OpenCV", "YOLOv8", "NVIDIA Jetson", "MQTT"]
  },
  {
    slug: "demand-forecasting-engine",
    title: "Demand Forecasting Engine",
    client: "PT Retail Makmur",
    location: "Jakarta",
    year: "2026",
    status: "In Progress",
    icon: BarChart3,
    description: "Time-series forecasting platform for inventory management across 200+ retail stores. Integrates sales data, weather, and holiday calendar.",
    impact: ["25% reduction in stockouts", "Optimized inventory turnover", "Automated reorder suggestions"],
    tech: ["Prophet", "XGBoost", "PostgreSQL", "FastAPI", "Tableau"]
  },
  {
    slug: "document-intelligence-system",
    title: "Document Intelligence System",
    client: "PT Asuransi Sejati",
    location: "Jakarta",
    year: "2024",
    status: "Completed",
    icon: Brain,
    description: "AI-powered document processing for insurance claims. Automates data extraction from invoices, medical reports, and policy documents.",
    impact: ["80% faster claims processing", "Reduced manual data entry by 90%", "99% OCR accuracy"],
    tech: ["OCR", "BERT", "LangChain", "AWS Textract", "Elasticsearch"]
  },
  {
    slug: "smart-energy-optimization-ai",
    title: "Smart Energy Optimization AI",
    client: "PT Gedung Hijau Indonesia",
    location: "Jakarta Selatan",
    year: "2025",
    status: "Completed",
    icon: Bot,
    description: "Reinforcement learning system for optimizing HVAC and lighting in commercial buildings based on occupancy patterns and weather forecasts.",
    impact: ["32% energy cost reduction", "Automated climate optimization", "Predictive maintenance alerts"],
    tech: ["RL", "Python", "BACnet", "IoT Sensors", "Azure ML"]
  }
];

const statusColors: Record<string, string> = {
  "Completed": "text-primary bg-primary/10",
  "In Progress": "text-secondary bg-secondary/10"
};

export default function AIProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/services/ai-ml" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to AI & ML Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase mb-4 block">Our Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              AI & Machine Learning <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real-world AI implementations across manufacturing, finance, retail, and energy. Each project demonstrates our end-to-end ML capabilities from data engineering to production deployment.
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
            <h2 className="text-2xl font-bold text-foreground mb-3">Have a Project in Mind?</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">Let's discuss how AI can transform your operations. Our team is ready to design a solution tailored to your needs.</p>
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
