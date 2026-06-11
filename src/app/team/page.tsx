"use client";

import React from "react";
import { Globe, MessageCircle, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Adrian Pratama",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    bio: "With over 15 years in enterprise IT, Adrian leads AFTECH's vision to dominate the digital transformation sector in Southeast Asia."
  },
  {
    name: "Budi Santoso",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    bio: "Former Lead Architect at major tech firms, Budi pioneers our scalable infrastructure and IoT integration strategies."
  },
  {
    name: "Citra Dewi",
    role: "VP of Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "Ensures seamless delivery of complex multi-vendor projects and maintains our 99.9% uptime standard."
  },
  {
    name: "David Kurniawan",
    role: "Head of Cybersecurity",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    bio: "Certified security expert dedicated to safeguarding enterprise data through zero-trust architectures."
  },
  {
    name: "Eka Setiawan",
    role: "Lead Software Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "Expert in cloud-native development and microservices, leading our core product engineering team."
  },
  {
    name: "Faisal Rahman",
    role: "IoT Systems Director",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=800&auto=format&fit=crop",
    bio: "Spearheads hardware prototyping and industrial sensor deployments for manufacturing clients."
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6 break-words">
            Meet the <span className="text-primary">Experts</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The brilliant minds behind AFTECH. We are a team of passionate engineers, strategists, and innovators dedicated to shaping the digital future.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="rounded-[32px] border border-border overflow-hidden group transition-all" style={{background:'var(--card)', boxShadow:'var(--shadow-md)'}}>
                <div className="aspect-square dark:bg-[#0a0f25] bg-muted relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent z-10 opacity-60" />
                  {/* Fallback pattern for missing images */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-[#0a0f25] to-[#0a0f25] group-hover:scale-110 transition-transform duration-700" />
                  
                  {/* Real Image Integration */}
                  <div className="absolute inset-0 z-20 transition-transform duration-700 group-hover:scale-110">
                    <img src={member.image} alt={member.name} width="400" height="400" className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f25] via-transparent to-transparent opacity-90" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-center gap-3 opacity-100 md:opacity-0 translate-y-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {[Globe, MessageCircle, Mail].map((Icon, idx) => (
                      <a key={idx} href="#" className="w-11 h-11 rounded-full bg-primary/10 backdrop-blur-md border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-colors">
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 relative">
                  <div className="absolute top-0 right-8 w-12 h-1 bg-primary rounded-b-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                  <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-sm text-secondary font-bold uppercase tracking-wider mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
