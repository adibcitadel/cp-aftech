"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { menuData } from "@/lib/constants";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useI18n } from "@/i18n/I18nProvider";

export default function Navbar() {
  const { locale, toggleLocale } = useI18n();
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState<string | null>(null);

  const toggleMobileMenu = (menu: string) => {
    setMobileMenuOpen(mobileMenuOpen === menu ? null : menu);
  };

  return (
    <>
    {/* Mobile Menu Toggle - Isolated for 100% Clickability */}
    <button
      className="lg:hidden text-foreground p-3 rounded-full bg-primary/20 border-2 border-primary shadow-[0_0_15px_rgba(37,99,235,0.5)] active:bg-primary/40 transition-all"
      onClick={() => setIsOpen(!isOpen)}
      style={{ position: 'fixed', top: '16px', right: '16px', zIndex: 9999 }}
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>

    <nav
      ref={navRef}
      onMouseLeave={() => setActiveMenu(null)}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 h-20 flex items-center",
        (scrolled || activeMenu)
          ? "dark:bg-background/80 bg-white/90 backdrop-blur-2xl border-b border-border shadow-[0_4px_24px_rgba(0,60,150,0.12)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group" onMouseEnter={() => setActiveMenu(null)} onClick={() => { setActiveMenu(null); setIsOpen(false); }}>
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform group-hover:scale-110">
            <Image 
              src="/images/logo.png" 
              alt="AFTECH Logo" 
              fill
              sizes="(max-width: 768px) 40px, 48px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/" onMouseEnter={() => setActiveMenu(null)} className={cn("px-4 py-2 text-sm font-medium transition-colors", pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-primary")}>Home</Link>
          
          {Object.keys(menuData).map((menuName) => (
            <div key={menuName} className="relative">
              <button
                onMouseEnter={() => setActiveMenu(menuName)}
                onClick={() => setActiveMenu(activeMenu === menuName ? null : menuName)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeMenu === menuName ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground dark:hover:bg-white/5 hover:bg-black/5"
                )}
              >
                {menuName} <ChevronDown size={14} className={cn("transition-transform duration-300", activeMenu === menuName ? "rotate-180" : "")} />
              </button>
            </div>
          ))}

          <button
            onClick={toggleLocale}
            onMouseEnter={() => setActiveMenu(null)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border border-border hover:border-primary/50 transition-all hover:scale-105 active:scale-95"
            title={locale === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
          >
            <Languages size={12} />
            {locale === "id" ? "ID" : "EN"}
          </button>

          <ThemeToggle />
          
          <Link href="/contact" onMouseEnter={() => setActiveMenu(null)} className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 ml-4">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Desktop Floating Dropdown Menu */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden lg:block absolute top-full pt-2 left-1/2 -translate-x-1/2 w-[800px] pointer-events-auto z-50"
          >
            <div className="dark:bg-[#0a0f1e]/95 bg-white/95 backdrop-blur-xl border border-border rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="grid grid-cols-12 gap-0 relative">
                {/* Left Side: Items Grid */}
                <div className="col-span-7 p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-1.5 w-8 bg-primary rounded-full" />
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Explore {activeMenu}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                    {menuData[activeMenu as keyof typeof menuData].items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="group flex gap-4 items-start p-2 -m-2 rounded-xl hover:bg-muted/50 transition-all duration-300"
                        onClick={() => setActiveMenu(null)}
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300 shrink-0 shadow-sm border border-border group-hover:border-primary">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <h4 className="text-foreground font-bold text-sm mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                          <p className="text-muted-foreground text-[10px] leading-tight group-hover:text-foreground transition-colors line-clamp-2">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right Side: Featured Section (Nocola Layout) */}
                <div className="col-span-5 bg-muted/30 p-8 border-l border-border flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-1.5 w-8 bg-secondary rounded-full" />
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Featured</span>
                  </div>
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-5 shadow-lg group/img border border-border">
                    <Image
                      src={menuData[activeMenu as keyof typeof menuData].featured.image}
                      alt="Featured"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h4 className="text-foreground font-bold text-lg mb-2">{menuData[activeMenu as keyof typeof menuData].featured.title}</h4>
                  <p className="text-muted-foreground text-[11px] mb-5 leading-relaxed line-clamp-3">
                    {menuData[activeMenu as keyof typeof menuData].featured.desc}
                  </p>
                  <Link
                    href={menuData[activeMenu as keyof typeof menuData].featured.link}
                    className="w-full bg-primary hover:bg-primary/90 text-background py-2.5 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center gap-2 shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-95"
                    onClick={() => setActiveMenu(null)}
                  >
                    Explore Solutions <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    
    {/* Mobile Nav Overlay - Simple CSS */}
    {isOpen && (
      <div
        className="fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />
    )}

    {/* Mobile Nav Content - Simple CSS Transition */}
    <div
      className={cn(
        "fixed top-0 right-0 bottom-0 w-[85%] max-w-sm z-[9995] bg-background lg:hidden flex flex-col shadow-2xl border-l border-border transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex flex-col h-full p-8 pt-20">
        {/* Close Button Inside Drawer */}
        <button 
          className="self-end p-2 mb-8 text-primary"
          onClick={() => setIsOpen(false)}
          onTouchEnd={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>

        <div className="flex flex-col gap-4 overflow-y-auto pr-2 pb-20">
          <Link 
            href="/" 
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors flex items-center justify-between group py-2"
            onClick={() => setIsOpen(false)}
          >
            Home <ChevronRight size={20} className="text-slate-600 group-hover:text-primary" />
          </Link>
              
              {Object.keys(menuData).map((menuName) => (
                <div key={menuName} className="flex flex-col border-b dark:border-white/5 border-black/5 pb-2">
                  <button 
                    onClick={() => toggleMobileMenu(menuName)}
                    className="flex items-center justify-between w-full py-4 text-muted-foreground dark:hover:text-white hover:text-slate-900 transition-colors"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest">{menuName}</span>
                    <ChevronDown size={18} className={cn("transition-transform duration-300", mobileMenuOpen === menuName ? "rotate-180 text-primary" : "")} />
                  </button>
                  
                  <AnimatePresence>
                    {mobileMenuOpen === menuName && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 py-4 ml-2 border-l-2 border-primary/20 pl-4">
                          {menuData[menuName as keyof typeof menuData].items.map((item, idx) => (
                            <Link 
                              key={idx} 
                              href={item.href} 
                              className="flex items-center gap-3 group"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="w-8 h-8 rounded-lg bg-surface-raised flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-background transition-all">
                                <item.icon size={16} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-base text-slate-300 group-dark:hover:text-white hover:text-slate-900 transition-colors">{item.title}</span>
                                <span className="text-[10px] text-muted-foreground">{item.desc}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <button
                  onClick={() => { toggleLocale(); setIsOpen(false); }}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Languages size={16} />
                  {locale === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
                </button>
                <ThemeToggle />
              </div>
              
              <Link 
                href="/contact" 
                className="bg-primary text-primary-foreground p-4 rounded-xl font-bold mt-4 text-center shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
        </div>
      </div>
    </div>
    </>
  );
}
