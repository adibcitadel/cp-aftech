import { Cpu, Code, ShieldCheck, Server, Database, Activity, Camera, Smartphone, Globe, Users, Target, Rocket, Briefcase } from "lucide-react";

export const menuData = {
  Service: {
    items: [
      { slug: "iot", title: "End-to-End IoT", desc: "Sensors, gateways, & monitoring.", icon: Cpu, href: "/services/iot" },
      { slug: "ai-ml", title: "AI & Machine Learning", desc: "Predictive maintenance & automation.", icon: Activity, href: "/services/ai-ml" },
      { slug: "system-integrator", title: "System Integrator", desc: "Seamless ERP & SCADA integration.", icon: Server, href: "/services/system-integrator" },
      { slug: "digital-security", title: "Digital Security", desc: "Audits & ISO compliance.", icon: ShieldCheck, href: "/services/digital-security" },
      { slug: "fews-camera", title: "FEWS Camera", desc: "Fire early warning & surveillance.", icon: Camera, href: "/services/fews-camera" },
      { slug: "software-dev", title: "Software Dev", desc: "Web & mobile applications.", icon: Code, href: "/services/software-dev" },
    ],
    featured: {
      title: "Industrial Internet of Things",
      desc: "Unlock the full potential of your industrial operations with our comprehensive suite of services.",
      image: "/images/featured_service.png",
      link: "/services/iot"
    }
  },
  Product: {
    items: [
      { slug: "iot-sensors", title: "IoT Sensors", desc: "Precision industrial monitoring.", icon: Cpu, href: "/products/iot-sensors" },
      { slug: "erp-connect", title: "ERP Connect", desc: "Enterprise data bridge.", icon: Database, href: "/products/erp-connect" },
      { slug: "smart-dashboards", title: "Smart Dashboards", desc: "Real-time analytics visualization.", icon: Activity, href: "/products/smart-dashboards" },
      { slug: "security-hub", title: "Security Hub", desc: "Centralized threat management.", icon: ShieldCheck, href: "/products/security-hub" },
      { slug: "mobile-ops", title: "Photogrammetry", desc: "3D scanning & spatial reconstruction.", icon: Camera, href: "/products/mobile-ops" },
      { slug: "cloud-bridge", title: "Cloud Bridge", desc: "Secure data migration.", icon: Globe, href: "/products/cloud-bridge" },
    ],
    featured: {
      title: "Cyber-Tech Analytics",
      desc: "Get deep insights into your operations with our next-gen analytics platform.",
      image: "/images/featured_product.png",
      link: "/products/smart-dashboards"
    }
  },
  Company: {
    items: [
      { slug: "about", title: "About Us", desc: "Our journey and core values.", icon: Briefcase, href: "/about" },
      { slug: "vision", title: "Vision & Mission", desc: "Shaping the digital future.", icon: Target, href: "/about#vision" },
      { slug: "team", title: "Our Team", desc: "Meet the experts behind AFTECH.", icon: Users, href: "/team" },
      { slug: "roadmap", title: "Roadmap", desc: "Strategic growth milestones.", icon: Rocket, href: "/roadmap" },
      { slug: "careers", title: "Careers", desc: "Join our innovative team.", icon: Smartphone, href: "/careers" },
      { slug: "contact", title: "Contact", desc: "Get in touch with us.", icon: Globe, href: "/contact" },
    ],
    featured: {
      title: "Next-Gen Tech Innovation",
      desc: "We are on a mission to build the most advanced digital ecosystem in the region.",
      image: "/images/featured_company.png",
      link: "/about"
    }
  }
};
