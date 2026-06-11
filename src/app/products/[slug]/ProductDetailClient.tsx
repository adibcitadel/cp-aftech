"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowLeft, CheckCircle2, ExternalLink, Database, Zap, Shield, RefreshCw, Layout, Cpu, Activity, Camera, Globe, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

const systemIcons = [Database, Zap, Shield, RefreshCw] as LucideIcon[];

const iconBySlug: Record<string, LucideIcon> = {
  "iot-sensors": Cpu,
  "erp-connect": Database,
  "smart-dashboards": Activity,
  "security-hub": ShieldCheck,
  "mobile-ops": Camera,
  "cloud-bridge": Globe,
};

interface RelatedProduct {
  name: string;
  description: string;
  href: string;
  external?: boolean;
}

interface ProductContent {
  image: string;
  tagline: string;
  fullDescription: string;
  benefits: string[];
  specs: { label: string; value: string }[];
  features: { title: string; description: string }[];
  useCases: { industry: string; application: string }[];
  relatedProducts?: RelatedProduct[];
}

export default function ProductDetailClient({
  slug,
  title,
  desc,
  href,
  content,
}: {
  slug: string;
  title: string;
  desc: string;
  href: string;
  content: ProductContent | null;
}) {
  const Icon = iconBySlug[slug] || Database;
  const hasContent = !!content;
  const isExternal = href.startsWith("http");
  const isERPConnect = slug === "erp-connect";

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30">
      {/* Hero */}
      <section className={`pt-32 ${isERPConnect ? "pb-20" : "pb-16"} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-noise" />
        {isERPConnect && (
          <>
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[300px] pointer-events-none" />
          </>
        )}
        {!isERPConnect && (
          <>
            <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
          </>
        )}

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`w-20 h-20 rounded-2xl ${isERPConnect ? "bg-gradient-to-br from-primary/20 to-primary/5" : "bg-primary/10"} border border-primary/30 flex items-center justify-center text-primary mb-8 shadow-2xl shadow-primary/20`}>
                <Icon size={40} />
              </div>
              {isERPConnect && (
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-xs text-muted-foreground">Enterprise Integration Platform</div>
                </div>
              )}
              <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tighter break-words">
                {title} <span className="text-gradient">Platform</span>
              </h1>
              {hasContent ? (
                <>
                  {isERPConnect ? (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                      <Zap size={14} /> {content.tagline}
                    </div>
                  ) : (
                    <p className="text-xl text-primary font-semibold mb-4">{content.tagline}</p>
                  )}
                  <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                    {content.fullDescription}
                  </p>
                </>
              ) : (
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                  {desc} AFTECH's {title} is an industry-leading solution designed to provide unparalleled performance and security for modern enterprises.
                </p>
              )}
              {isExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-background px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-primary/20 group w-fit"
                >
                  Launch Platform <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
              ) : isERPConnect ? (
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`mailto:aftech.daya@gmail.com?cc=adibpurwanto63@gmail.com&subject=Quote Request - ${title}`}
                    className="bg-primary hover:bg-primary/90 text-background px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-primary/20 group w-fit"
                  >
                    Request a Quote <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://rpms-portal.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border hover:border-primary/30 text-foreground px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group w-fit"
                  >
                    Try RPMS Aftech <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ) : (
                <a
                  href={`mailto:aftech.daya@gmail.com?cc=adibpurwanto63@gmail.com&subject=Quote Request - ${title}`}
                  className="bg-primary hover:bg-primary/90 text-background px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-primary/20 group w-fit"
                >
                  Request a Quote <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </motion.div>

            {hasContent && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-[40px] overflow-hidden relative border border-border shadow-[var(--shadow-lg)]">
                  <img
                    src={content.image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 dark:bg-[#111520]/90 backdrop-blur-md border border-border shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary backdrop-blur-sm">
                        <Icon size={24} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground">{title}</div>
                        <div className="text-[10px] text-muted-foreground font-mono tracking-[0.2em] uppercase">Product Suite</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {hasContent && (
        <>
          <section className={`${isERPConnect ? "py-20" : "py-16"} border-y border-border bg-muted`}>
            <div className={`container mx-auto px-6 ${isERPConnect ? "max-w-6xl" : "max-w-5xl"}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid ${isERPConnect ? "grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"}`}
              >
                {content.benefits.map((benefit, i) => {
                  const SysIcon = systemIcons[i % systemIcons.length];
                  return isERPConnect ? (
                    <div key={i} className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                        <SysIcon size={18} />
                      </div>
                      <p className="text-sm font-medium text-foreground leading-relaxed">{benefit}</p>
                    </div>
                  ) : (
                    <div key={i} className="p-6 rounded-xl border border-border bg-card">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <CheckCircle2 size={18} />
                      </div>
                      <p className="text-sm font-medium text-foreground leading-relaxed">{benefit}</p>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {isERPConnect ? (
            <section className="py-24 relative overflow-hidden">
              <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />
              <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-2xl mb-16"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Capabilities</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Key Features</h2>
                  <p className="text-lg text-muted-foreground">Everything you need to deploy, scale, and manage {title} in production environments.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {content.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group p-8 rounded-3xl border border-border bg-card hover:border-primary/20 transition-all relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                        <span className="text-lg font-bold">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          ) : (
            <section className="py-24">
              <div className="container mx-auto px-6 max-w-5xl">
                <div className="max-w-xl mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Key Features</h2>
                  <p className="text-muted-foreground">Everything you need to deploy, scale, and manage {title} in production environments.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {content.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 rounded-2xl border border-border bg-card"
                    >
                      <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-foreground mb-4">
                        <span className="text-sm font-bold">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {isERPConnect && content.relatedProducts && content.relatedProducts.length > 0 && (
            <section className="py-24 border-t border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />
              <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-2xl mb-16"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-8 bg-secondary rounded-full" />
                    <span className="text-sm font-bold text-secondary uppercase tracking-[0.2em]">Ecosystem</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Integrated <span className="text-gradient">Solutions</span></h2>
                  <p className="text-lg text-muted-foreground">Extend {title} with these complementary platforms and modules.</p>
                </motion.div>

                {content.relatedProducts[0] && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <div className="relative p-8 md:p-12 rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/[0.05] via-primary/[0.02] to-background overflow-hidden group hover:border-primary/50 transition-all">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-[80px] pointer-events-none" />
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                          <Layout size={32} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-foreground">{content.relatedProducts[0].name}</h3>
                            <span className="px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-wider">Flagship</span>
                          </div>
                          <p className="text-muted-foreground mb-4 max-w-2xl">{content.relatedProducts[0].description}</p>
                          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              Real-time ERP Sync
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              Enterprise Resource Planning
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              Multi-module Architecture
                            </div>
                          </div>
                        </div>
                        <a
                          href={content.relatedProducts[0].href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 bg-primary hover:bg-primary/90 text-background px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-primary/20 group/link"
                        >
                          Open Platform <ExternalLink size={18} className="group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {content.relatedProducts.slice(1).map((related, i) => {
                    const RelIcon = systemIcons[i % systemIcons.length];
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group p-6 rounded-2xl border border-border bg-card hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5 transition-all"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                          <RelIcon size={22} />
                        </div>
                        <h3 className="font-bold text-foreground mb-2">{related.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{related.description}</p>
                        {related.external ? (
                          <a
                            href={related.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm font-medium transition-colors"
                          >
                            Open Platform <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                          </a>
                        ) : (
                          <Link
                            href={related.href}
                            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 text-sm font-medium transition-colors"
                          >
                            View Details <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {!isERPConnect && content.relatedProducts && content.relatedProducts.length > 0 && (
            <section className="py-24 border-t border-border">
              <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-primary rounded-full" />
                    Integrated Solutions
                  </h2>
                  <p className="text-muted-foreground mb-12 max-w-xl">
                    Extend {title} with these complementary platforms and modules.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {content.relatedProducts.map((related, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-background transition-all">
                          <ChevronRight size={24} />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{related.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{related.description}</p>
                        {related.external ? (
                          <a
                            href={related.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors group"
                          >
                            Open Platform <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                          </a>
                        ) : (
                          <Link
                            href={related.href}
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors group"
                          >
                            View Details <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {isERPConnect ? (
            <section className="py-24 border-t border-border">
              <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-2xl mb-16"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-8 bg-primary rounded-full" />
                    <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Specifications</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Technical <span className="text-gradient">Details</span></h2>
                  <p className="text-lg text-muted-foreground">Performance metrics and industry applications for {title}.</p>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Database size={20} className="text-primary" />
                      Performance & Compliance
                    </h3>
                    <div className="space-y-3">
                      {content.specs.map((spec, i) => (
                        <div key={i} className="flex justify-between items-center p-5 rounded-2xl border border-border bg-card hover:border-primary/20 transition-all">
                          <span className="text-sm text-muted-foreground">{spec.label}</span>
                          <span className="text-sm font-mono font-semibold text-foreground bg-primary/5 px-3 py-1 rounded-lg">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Database size={20} className="text-secondary" />
                      Industry Applications
                    </h3>
                    <div className="space-y-3">
                      {content.useCases.map((uc, i) => (
                        <div key={i} className="p-5 rounded-2xl border border-border bg-card hover:border-secondary/20 transition-all">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-secondary" />
                            <div className="text-xs font-bold text-secondary uppercase tracking-wider">{uc.industry}</div>
                          </div>
                          <div className="text-sm text-foreground pl-4">{uc.application}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          ) : (
            <section className="py-24 border-t border-border">
              <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-primary rounded-full" />
                      Technical Specs
                    </h2>
                    <div className="space-y-3">
                      {content.specs.map((spec, i) => (
                        <div key={i} className="flex justify-between items-center p-4 rounded-xl border border-border bg-card">
                          <span className="text-sm text-muted-foreground">{spec.label}</span>
                          <span className="text-sm font-mono font-semibold text-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-secondary rounded-full" />
                      Industry Use Cases
                    </h2>
                    <div className="space-y-3">
                      {content.useCases.map((uc, i) => (
                        <div key={i} className="p-4 rounded-xl border border-border bg-card">
                          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{uc.industry}</div>
                          <div className="text-sm text-foreground">{uc.application}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          )}

          {isERPConnect ? (
            <section className="py-24 border-t border-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-muted to-background" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />
              <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center text-primary mx-auto mb-8">
                    <Icon size={32} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Ready to Deploy <span className="text-gradient">{title}</span>?</h2>
                  <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Get a personalized walkthrough and discover how {title} can transform your operations.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {isExternal ? (
                      <a
                  href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
                      >
                        Launch Platform <ChevronRight size={18} />
                      </a>
                    ) : (
                      <>
                        <a
                          href={`mailto:aftech.daya@gmail.com?cc=adibpurwanto63@gmail.com&subject=Quote Request - ${title}`}
                          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
                        >
                          Contact Sales <ChevronRight size={18} />
                        </a>
                        <a
                          href="https://rpms-portal.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-border hover:border-primary/30 text-foreground px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95"
                        >
                          Explore RPMS Aftech <ExternalLink size={18} />
                        </a>
                      </>
                    )}
                  </div>
                </motion.div>
              </div>
            </section>
          ) : (
            <section className="py-20 border-t border-border bg-muted">
              <div className="container mx-auto px-6 max-w-3xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Ready to Deploy {title}?</h2>
                  <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Get a personalized walkthrough and discover how {title} can transform your operations.
                  </p>
                  {isExternal ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 active:scale-[0.97] transition-all"
                    >
                      Launch Platform <ChevronRight size={18} />
                    </a>
                  ) : (
                    <a
                      href={`mailto:aftech.daya@gmail.com?cc=adibpurwanto63@gmail.com&subject=Quote Request - ${title}`}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 active:scale-[0.97] transition-all"
                    >
                      Contact Sales <ChevronRight size={18} />
                    </a>
                  )}
                </motion.div>
              </div>
            </section>
          )}
        </>
      )}

      {!hasContent && (
        <section className="pb-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="p-10 rounded-[32px] border border-border hover:border-primary/20 transition-all group" style={{background:'var(--card)', boxShadow:'var(--shadow-sm)'}}>
                <h3 className="text-foreground font-bold text-xl mb-8 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-primary rounded-full" />
                  Core Benefits
                </h3>
                <ul className="space-y-5">
                  {["Performance Optimized", "Enterprise Security", "Cloud-Native Ready", "Scalable Architecture"].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-4 text-muted-foreground text-sm">
                      <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <CheckCircle2 size={14} />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 rounded-[32px] border border-border hover:border-secondary/20 transition-all group" style={{background:'var(--card)', boxShadow:'var(--shadow-sm)'}}>
                <h3 className="text-foreground font-bold text-xl mb-8 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-secondary rounded-full" />
                  Technical Specs
                </h3>
                <ul className="space-y-5">
                  {["API v3.0 Support", "99.9% Uptime SLA", "Encrypted Data at Rest", "Global Edge Network"].map((spec, i) => (
                    <li key={i} className="flex items-center gap-4 text-muted-foreground text-sm font-mono">
                      <div className="w-2 h-2 rounded-full bg-secondary/30" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
