"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projectsByService } from "@/lib/data/projects";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const projectId = params.projectId as string;

  const serviceProjects = projectsByService[slug];
  const project = serviceProjects?.find((p) => p.slug === projectId);

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link href="/" className="text-primary hover:underline">Back to Home</Link>
        </div>
      </main>
    );
  }

  const Icon = project.icon;
  const serviceName = slug === "ai-ml" ? "AI & ML" : slug === "system-integrator" ? "System Integrator" : slug === "digital-security" ? "Digital Security" : slug === "fews-camera" ? "FEWS Camera" : slug === "software-dev" ? "Software Dev" : "IoT";

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <Link href={`/services/${slug}/projects`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to {serviceName} Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-3 mb-5">
              <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${project.status === "Completed" ? "text-primary bg-primary/10" : "text-secondary bg-secondary/10"}`}>
                {project.status}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                {serviceName}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">{project.client}</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-10">
              <span className="flex items-center gap-1.5"><MapPin size={14} /> {project.location}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {project.year}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-[2/1] rounded-2xl overflow-hidden border border-border mb-16"
          >
            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/90 dark:bg-[#111520]/90 backdrop-blur-md border border-border flex items-center justify-center text-foreground shadow-lg">
                <Icon size={28} />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">{project.title}</div>
                <div className="text-sm text-muted-foreground">{project.client}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-primary rounded-full" />
                  Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{project.fullDescription}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-secondary rounded-full" />
                  The Challenge
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{project.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-accent rounded-full" />
                  Our Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{project.solution}</p>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-border bg-card"
              >
                <h3 className="font-bold text-foreground mb-5">Key Impact</h3>
                <div className="space-y-4">
                  {project.impact.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl border border-border bg-card"
              >
                <h3 className="font-bold text-foreground mb-5">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-1.5 rounded-md bg-surface border border-border text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 rounded-2xl border border-border bg-card"
              >
                <h3 className="font-bold text-foreground mb-3">Interested in this solution?</h3>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 active:scale-[0.97] transition-all"
                >
                  Get in Touch <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
