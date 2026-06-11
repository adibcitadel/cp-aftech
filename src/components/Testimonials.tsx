"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CIO, PT Semen Nusantara",
    content:
      "AFTECH's IoT monitoring system transformed our factory floor. Real-time sensor data reduced unplanned downtime by 40% in the first quarter alone.",
    rating: 5,
  },
  {
    name: "Sari Wijaya",
    role: "Head of IT, Bank Mandiri Cilacap",
    content:
      "The cybersecurity audit and implementation by AFTECH brought us from zero compliance to full ISO 27001 certification within six months.",
    rating: 5,
  },
  {
    name: "Hendra Kurniawan",
    role: "Director of Operations, Pelindo",
    content:
      "ERP Connect bridged our legacy systems with modern cloud infrastructure seamlessly. The migration was smooth, with zero data loss.",
    rating: 5,
  },
  {
    name: "Dewi Lestari",
    role: "CEO, TechVision Startup",
    content:
      "Working with AFTECH's software dev team felt like an extension of our own engineering. They delivered our platform ahead of schedule.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Quote
                size={32}
                className="absolute top-4 right-4 text-primary/10"
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                &ldquo;{item.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-background font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">
                    {item.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
