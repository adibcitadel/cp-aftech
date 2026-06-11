"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, PhoneCall, Building2, ChevronRight } from "lucide-react";
import { menuData } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-muted border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

          {/* Column 1: Branding & Info */}
          <div className="lg:col-span-1 space-y-8">
            <Link href="/" className="inline-block hover:scale-105 transition-transform">
              <div className="relative w-20 h-20 mb-6">
                <Image src="/images/logo.png" alt="AFTECH Logo" fill sizes="80px" className="object-contain" />
              </div>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Create your Idea Into reality with AI & Internet of Things. Indonesia's premier provider of Industry 4.0 integrated systems.
            </p>

            {/* Addresses */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em]">
                  <Building2 size={14} /> HEADQUARTERS
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed pl-6">
                  Jl. Lingkar Timur 23, Karangkandri, Kesugihan ,<br />
                  Cilacap , Jawa Tengah 53274, Indonesia
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-[0.2em]">
                  <Building2 size={14} /> JAKARTA BRANCH
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed pl-6">
                  Gedung AFTECH , Jalan Mega Kuningan,<br />
                  Setiabudi, Jakarta Selatan, 12950, Indonesia
                </p>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-3 pt-4">
              <a href="https://wa.me/6282231834977" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-2 -m-2">
                <div className="w-10 h-10 rounded-xl bg-surface-raised border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                  <MessageCircle size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">WHATSAPP / MOBILE</span>
                  <span className="text-foreground text-xs font-bold">+62 822 3183 4977</span>
                </div>
              </a>

              <a href="tel:+6282231834977" className="flex items-center gap-4 group p-2 -m-2">
                <div className="w-10 h-10 rounded-xl bg-surface-raised border border-border flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-background transition-all">
                  <PhoneCall size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">OFFICE LANDLINE</span>
                  <span className="text-foreground text-xs font-bold">+62 822 3183 4977</span>
                </div>
              </a>

              <a href="mailto:sales@aftech.co.id" className="flex items-center gap-4 group p-2 -m-2">
                <div className="w-10 h-10 rounded-xl bg-surface-raised border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">EMAIL INQUIRIES</span>
                  <span className="text-foreground text-xs font-bold">sales@aftech.co.id</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Service */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
              <h4 className="text-foreground font-bold text-xs uppercase tracking-[0.2em]">SERVICE</h4>
            </div>
            <ul className="space-y-5">
              {menuData.Service.items.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all duration-300" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              <h4 className="text-foreground font-bold text-xs uppercase tracking-[0.2em]">PRODUCT</h4>
            </div>
            <ul className="space-y-5">
              {menuData.Product.items.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-muted-foreground hover:text-secondary text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-secondary group-hover:w-3 transition-all duration-300" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Corporate */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <h4 className="text-foreground font-bold text-xs uppercase tracking-[0.2em]">CORPORATE</h4>
              </div>
              <ul className="space-y-5">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-emerald-400 group-hover:w-3 transition-all duration-300" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-emerald-400 group-hover:w-3 transition-all duration-300" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-muted-foreground hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-emerald-400 group-hover:w-3 transition-all duration-300" />
                    Life at AFTECH!
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-emerald-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-emerald-400 group-hover:w-3 transition-all duration-300" />
                    Job & Career
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.8)]" />
                <h4 className="text-foreground font-bold text-xs uppercase tracking-[0.2em]">ECOSYSTEM</h4>
              </div>
              <ul className="space-y-5">
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-orange-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-orange-400 group-hover:w-3 transition-all duration-300" />
                    AFTECH Academy
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-orange-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-orange-400 group-hover:w-3 transition-all duration-300" />
                    TechTalks
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="text-muted-foreground hover:text-orange-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-orange-400 group-hover:w-3 transition-all duration-300" />
                    Innovations
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-orange-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-orange-400 group-hover:w-3 transition-all duration-300" />
                    Internships
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 5: Partnership & Library */}
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
                <h4 className="text-foreground font-bold text-xs uppercase tracking-[0.2em]">PARTNERSHIP</h4>
              </div>
              <ul className="space-y-5">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-purple-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-purple-400 group-hover:w-3 transition-all duration-300" />
                    Be a Partner
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-purple-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-purple-400 group-hover:w-3 transition-all duration-300" />
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-purple-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-purple-400 group-hover:w-3 transition-all duration-300" />
                    Our Clients
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.8)]" />
                <h4 className="text-foreground font-bold text-xs uppercase tracking-[0.2em]">LIBRARY</h4>
              </div>
              <ul className="space-y-5">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-rose-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-rose-400 group-hover:w-3 transition-all duration-300" />
                    Press Release
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-rose-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-rose-400 group-hover:w-3 transition-all duration-300" />
                    Awards & Certs
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-rose-400 text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-rose-400 group-hover:w-3 transition-all duration-300" />
                    Article & Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t dark:border-white/5 border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-[11px] uppercase tracking-[0.2em] font-bold">
            © 2026 PT AFTECH DAYA SOLUSINDO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-xs font-bold uppercase tracking-widest transition-colors py-1">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground text-xs font-bold uppercase tracking-widest transition-colors py-1">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-foreground text-xs font-bold uppercase tracking-widest transition-colors py-1">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
