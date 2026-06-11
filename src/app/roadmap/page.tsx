"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Target, Rocket } from "lucide-react";

const milestones = [
  {
    year: "2021",
    title: "IoT & Automation Era",
    desc: "Launched our first proprietary IoT sensor network platform, marking our shift towards industrial automation.",
    status: "completed"
  },
  {
    year: "2024",
    title: "National Expansion",
    desc: "Secured major contracts with national enterprises and opened satellite offices in Jakarta and Surabaya.",
    status: "completed"
  },
  {
    year: "2026",
    title: "AI-Driven Ecosystem",
    desc: "Current focus: Integrating Machine Learning into our smart dashboards for predictive industrial maintenance.",
    status: "current"
  },
  {
    year: "2028",
    title: "Southeast Asia Presence",
    desc: "Strategic goal to expand our digital ecosystem solutions to neighboring markets across Southeast Asia.",
    status: "upcoming"
  }
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs text-muted-foreground mb-6"
          >
            Strategic Vision
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Our <span className="text-gradient">Roadmap</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            The milestones that have defined our journey and the strategic goals guiding our future in the tech landscape.
          </motion.p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/20 to-transparent md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((milestone, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className={`relative flex flex-col md:flex-row items-start gap-6 ${isLeft ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="hidden md:block w-1/2" />

                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        milestone.status === "completed"
                          ? "bg-primary border-primary"
                          : milestone.status === "current"
                          ? "bg-secondary border-secondary"
                          : "bg-background border-border"
                      }`}>
                        {milestone.status === "completed" && (
                          <Check size={10} className="text-primary-foreground" />
                        )}
                        {milestone.status === "current" && (
                          <span className="w-2 h-2 rounded-full bg-secondary-foreground animate-pulse" />
                        )}
                      </div>
                    </div>

                    <div className={`w-full pl-16 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className={`p-6 md:p-8 rounded-xl border transition-all duration-300 ${
                        milestone.status === "current"
                          ? "border-secondary/30 bg-secondary/[0.02]"
                          : "border-border bg-card"
                      }`}>
                        <span className={`text-xs font-semibold tracking-wider ${
                          milestone.status === "completed"
                            ? "text-primary"
                            : milestone.status === "current"
                            ? "text-secondary"
                            : "text-muted-foreground"
                        }`}>
                          {milestone.year}
                        </span>
                        <h3 className="text-lg md:text-xl font-semibold mt-1 mb-3">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{milestone.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative mt-16 flex justify-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-surface text-sm text-muted-foreground">
                <Rocket size={16} className="text-primary" />
                <span>And beyond — shaping the future of technology</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
