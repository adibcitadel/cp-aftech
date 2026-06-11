"use client";

import React from "react";
import { Briefcase, ArrowRight, Star, Zap, Coffee, Heart } from "lucide-react";
import Link from "next/link";

const benefits = [
  { icon: Zap, title: "Tech-Forward", desc: "Work with the latest stacks, AI, and industrial IoT technologies." },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance for you and your family." },
  { icon: Coffee, title: "Flexible Working", desc: "Hybrid work policies to maintain a healthy work-life balance." },
  { icon: Star, title: "Continuous Learning", desc: "Budget for certifications, courses, and tech conferences." }
];

const jobs = [
  {
    slug: "senior-full-stack-engineer",
    title: "Senior Full Stack Engineer",
    type: "Full-time",
    location: "Jakarta (Hybrid)",
    dept: "Engineering",
    desc: "Lead the development of our core enterprise platforms using Next.js and Go."
  },
  {
    slug: "iot-systems-architect",
    title: "IoT Systems Architect",
    type: "Full-time",
    location: "Cilacap (On-site)",
    dept: "Hardware",
    desc: "Design and implement sensor networks for large-scale manufacturing clients."
  },
  {
    slug: "cybersecurity-consultant",
    title: "Cybersecurity Consultant",
    type: "Contract",
    location: "Remote",
    dept: "Security",
    desc: "Perform penetration testing and design zero-trust architectures for enterprises."
  },
  {
    slug: "ui-ux-product-designer",
    title: "UI/UX Product Designer",
    type: "Full-time",
    location: "Jakarta (Hybrid)",
    dept: "Design",
    desc: "Craft intuitive and premium interfaces for our industrial dashboards."
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-bold text-foreground mb-6 tracking-tighter">
              Build the <span className="text-gradient">Future</span> With Us
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Join a team of passionate innovators dedicated to transforming the technological landscape of Southeast Asia.
            </p>
            <button 
              onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-background px-8 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              View Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 border-y border-border bg-muted">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why AFTECH?</h2>
            <p className="text-muted-foreground max-w-2xl">We believe in empowering our people. Here is what you can expect when you join our team.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-8 rounded-3xl border border-border hover:border-primary/20 transition-all group" style={{background:'var(--card)', boxShadow:'var(--shadow-sm)'}}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon size={24} />
                </div>
                <h4 className="text-foreground font-bold text-lg mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="open-positions" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">Open Positions</h2>
              <p className="text-muted-foreground">Discover your next career move.</p>
            </div>
            <div className="flex gap-4">
               {/* Filters could go here */}
               <div className="px-6 py-2 rounded-full border border-border text-muted-foreground text-sm">All Departments</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs.map((job, i) => (
              <Link key={i} href={`/careers/${job.slug}`} className="block group">
                <div className="p-8 rounded-3xl border border-border dark:hover:border-white/20 hover:border-primary/30 transition-all flex flex-col sm:flex-row justify-between gap-8" style={{background:'var(--card)', boxShadow:'var(--shadow-sm)'}}>
                  <div>
                    <div className="flex gap-3 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {job.dept}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground border border-border px-3 py-1 rounded-full" style={{background:'var(--muted)'}}>
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{job.location}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{job.desc}</p>
                  </div>
                  
                  <div className="sm:self-end shrink-0">
                    <div className="w-12 h-12 rounded-full bg-surface-raised border border-border flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-background transition-all group-hover:scale-110 active:scale-95">
                      <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center p-10 rounded-3xl border border-border" style={{background:'var(--card)', boxShadow:'var(--shadow-sm)'}}>
            <Briefcase className="mx-auto text-muted-foreground mb-4" size={40} />
            <h3 className="text-xl font-bold text-foreground mb-2">Don't see a fit?</h3>
            <p className="text-muted-foreground text-sm mb-6">We are always looking for talented people. Send us your resume.</p>
            <Link href="/contact" className="inline-flex text-primary font-bold hover:underline">
              Submit Open Application
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
