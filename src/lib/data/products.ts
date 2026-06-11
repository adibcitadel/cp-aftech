export interface ProductContent {
  slug: string;
  image: string;
  tagline: string;
  fullDescription: string;
  benefits: string[];
  specs: { label: string; value: string }[];
  features: { title: string; description: string }[];
  useCases: { industry: string; application: string }[];
  relatedProducts?: { name: string; description: string; href: string; external?: boolean }[];
}

const baseUrl = "https://images.unsplash.com";

export const productContent: Record<string, ProductContent> = {
  "iot-sensors": {
    slug: "iot-sensors",
    image: `${baseUrl}/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop`,
    tagline: "Industrial-grade sensing for harsh environments",
    fullDescription: "AFTECH's IoT Sensors deliver reliable, high-precision data from the harshest industrial environments. Built with IP67/IP68 enclosures, wide temperature tolerance, and long battery life, our sensors power mission-critical monitoring across manufacturing, energy, and utilities.",
    benefits: [
      "IP67/IP68 rated for harsh environments",
      "5+ year battery life on wireless models",
      "Sub-second data sampling rates",
      "Multi-protocol support (LoRaWAN, NB-IoT, MQTT)"
    ],
    specs: [
      { label: "Operating Temperature", value: "-40°C to +85°C" },
      { label: "Sampling Rate", value: "Up to 10 kHz" },
      { label: "Wireless Range", value: "Up to 15 km (LoRa)" },
      { label: "Battery Life", value: "5-10 years" }
    ],
    features: [
      { title: "Vibration Monitoring", description: "3-axis MEMS accelerometers for predictive maintenance of rotating equipment." },
      { title: "Environmental Sensing", description: "Temperature, humidity, pressure, and air quality measurements in one unit." },
      { title: "Edge Processing", description: "On-device ML inference for anomaly detection without cloud dependency." }
    ],
    useCases: [
      { industry: "Manufacturing", application: "Machine health monitoring" },
      { industry: "Energy", application: "Turbine & generator monitoring" },
      { industry: "Logistics", application: "Cold chain tracking" }
    ]
  },
  "erp-connect": {
    slug: "erp-connect",
    image: `${baseUrl}/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop`,
    tagline: "Bridge legacy ERP with modern systems",
    fullDescription: "AFTECH's ERP Connect is a robust integration platform that bridges your existing ERP systems with modern applications, IoT platforms, and partner networks. Pre-built connectors for SAP, Oracle, Microsoft Dynamics, and more.",
    benefits: [
      "Pre-built connectors for 20+ ERP systems",
      "Bidirectional real-time data sync",
      "No-code workflow automation",
      "Enterprise-grade security & compliance"
    ],
    specs: [
      { label: "Supported ERPs", value: "SAP, Oracle, Dynamics, NetSuite" },
      { label: "Throughput", value: "10,000+ transactions/min" },
      { label: "Data Latency", value: "< 100ms real-time" },
      { label: "Compliance", value: "SOX, GDPR, ISO 27001" }
    ],
    features: [
      { title: "Universal Connector", description: "Pre-built adapters for major ERP systems with custom connector SDK." },
      { title: "Event Streaming", description: "Kafka-based event bus for real-time data propagation across systems." },
      { title: "Data Transformation", description: "Visual ETL builder for complex data mapping and validation rules." }
    ],
    useCases: [
      { industry: "Manufacturing", application: "Shop floor to ERP integration" },
      { industry: "Retail", application: "Omnichannel inventory sync" },
      { industry: "Finance", application: "Core banking connectivity" }
    ],
    relatedProducts: [
      { name: "RPMS Aftech", description: "Resource Planning & Management System for enterprise operations", href: "https://rpms-portal.vercel.app/", external: true },
      { name: "HRMS Portal", description: "Human Resource Management System integrated with ERP", href: "https://hrms.aftech.co.id/", external: true },
      { name: "Finance Suite", description: "Financial management module for accounting & reporting", href: "/products/finance-suite", external: false },
      { name: "Supply Chain Hub", description: "End-to-end supply chain visibility & procurement", href: "/products/supply-chain", external: false }
    ]
  },
  "smart-dashboards": {
    slug: "smart-dashboards",
    image: `${baseUrl}/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop`,
    tagline: "Real-time visualization for data-driven decisions",
    fullDescription: "AFTECH's Smart Dashboards transform complex operational data into clear, actionable insights. Built for industrial environments with real-time streaming, drill-down analytics, and customizable KPI tracking.",
    benefits: [
      "Real-time data streaming (<1s latency)",
      "Drag-and-drop dashboard builder",
      "Mobile-responsive across all devices",
      "AI-powered anomaly detection"
    ],
    specs: [
      { label: "Refresh Rate", value: "Real-time (< 1s)" },
      { label: "Data Points", value: "1M+ per dashboard" },
      { label: "Visualization Types", value: "40+ chart types" },
      { label: "Concurrent Users", value: "10,000+" }
    ],
    features: [
      { title: "Custom KPI Tracking", description: "Define and monitor any business metric with formula-based calculations." },
      { title: "Drill-Down Analytics", description: "Navigate from high-level KPIs to granular transactional data instantly." },
      { title: "Alerting Engine", description: "Smart alerts via email, SMS, Slack with escalation policies." }
    ],
    useCases: [
      { industry: "Manufacturing", application: "OEE & production monitoring" },
      { industry: "Logistics", application: "Fleet & delivery tracking" },
      { industry: "Energy", application: "Grid performance dashboards" }
    ]
  },
  "security-hub": {
    slug: "security-hub",
    image: `${baseUrl}/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop`,
    tagline: "Enterprise-grade network security & threat defense",
    fullDescription: "AFTECH's Security Hub is a comprehensive network security platform delivering layered defense through enterprise firewalls, Cloudflare integration, WAF, anti-DDoS, and a full suite of network security services. Protect your infrastructure from edge to endpoint with AI-driven threat detection and 24/7 managed response.",
    benefits: [
      "Multi-layer defense (L3-L7 protection)",
      "AI-driven threat detection & response",
      "Cloudflare-powered global CDN & DDoS mitigation",
      "24/7 managed SOC & incident response"
    ],
    specs: [
      { label: "DDoS Mitigation", value: "Up to 10 Tbps" },
      { label: "WAF Rules", value: "10,000+ pre-built signatures" },
      { label: "Firewall Throughput", value: "Up to 100 Gbps" },
      { label: "Global Edge", value: "300+ PoPs (Cloudflare)" }
    ],
    features: [
      { title: "Enterprise Firewall", description: "Next-generation firewall with deep packet inspection, intrusion prevention, and granular access control policies." },
      { title: "Cloudflare Integration", description: "Global CDN, DNS, and edge security powered by Cloudflare's 300+ points of presence worldwide." },
      { title: "Web Application Firewall (WAF)", description: "OWASP Top 10 protection, custom rule sets, and virtual patching for known CVEs." },
      { title: "Anti-DDoS Protection", description: "Multi-layer DDoS mitigation up to 10 Tbps, handling volumetric, protocol, and application-layer attacks." },
      { title: "Intrusion Detection & Prevention (IDS/IPS)", description: "Real-time network traffic analysis with signature-based and behavioral anomaly detection." },
      { title: "VPN & Zero-Trust Network Access", description: "Site-to-site VPN, client VPN, and zero-trust access with continuous verification and least-privilege controls." },
      { title: "SSL/TLS Inspection", description: "Deep SSL inspection to detect threats hidden in encrypted traffic without breaking performance." },
      { title: "Threat Intelligence & SIEM", description: "Real-time threat feeds, log aggregation, and correlation across 200+ data source integrations." },
      { title: "SOAR Automation", description: "Automated playbooks for common incident types reducing response time by 80%." }
    ],
    useCases: [
      { industry: "Banking", application: "Fraud detection & compliance" },
      { industry: "Healthcare", application: "PHI protection & HIPAA compliance" },
      { industry: "Government", application: "Critical infrastructure protection" },
      { industry: "E-Commerce", application: "DDoS protection & payment security" }
    ]
  },
  "mobile-ops": {
    slug: "mobile-ops",
    image: `${baseUrl}/photo-1473968512647-3e447244af8f?q=80&w=1200&auto=format&fit=crop`,
    tagline: "UAV fixed-wing aerial surveillance & 3D mapping",
    fullDescription: "AFTECH's Photogrammetry platform combines UAV fixed-wing drone technology with advanced computer vision to deliver survey-grade aerial surveillance and 3D mapping. Capture vast areas efficiently with long-endurance fixed-wing drones and process imagery into highly accurate 3D models, point clouds, and spatial reconstructions.",
    benefits: [
      "Long-endurance fixed-wing UAV coverage (up to 2 hours flight time)",
      "Survey-grade accuracy from aerial imagery",
      "AI-assisted feature detection & meshing",
      "Direct export to CAD, BIM, and GIS systems"
    ],
    specs: [
      { label: "Aircraft Type", value: "Fixed-wing UAV" },
      { label: "Flight Endurance", value: "Up to 2 hours" },
      { label: "Coverage", value: "Up to 1,000 hectares per flight" },
      { label: "Output Formats", value: "OBJ, FBX, PLY, LAS, GeoTIFF" }
    ],
    features: [
      { title: "Fixed-Wing Aerial Capture", description: "Long-range fixed-wing drones for efficient large-area coverage and surveillance missions." },
      { title: "Multi-View Reconstruction", description: "Advanced Structure-from-Motion and Multi-View Stereo pipelines for dense 3D reconstruction." },
      { title: "AI Quality Control", description: "Automated detection of reconstruction errors with intelligent suggestions for additional image capture." }
    ],
    useCases: [
      { industry: "Surveillance", application: "Large-area aerial monitoring & security" },
      { industry: "Mining", application: "Volume calculation & pit monitoring" },
      { industry: "Agriculture", application: "Crop health & terrain analysis" },
      { industry: "Border Control", application: "Perimeter surveillance & patrol" },
      { industry: "Air Force (TNI AU)", application: "Aerial reconnaissance & terrain mapping" }
    ]
  },
  "cloud-bridge": {
    slug: "cloud-bridge",
    image: `${baseUrl}/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop`,
    tagline: "Secure, seamless data migration to the cloud",
    fullDescription: "AFTECH's Cloud Bridge is an enterprise-grade data migration platform that moves petabytes of data securely and efficiently to any cloud destination. With zero-downtime migrations, end-to-end encryption, and intelligent throttling.",
    benefits: [
      "Zero-downtime data migration",
      "End-to-end encryption (AES-256)",
      "Multi-cloud support (AWS, Azure, GCP)",
      "Intelligent bandwidth throttling"
    ],
    specs: [
      { label: "Max Throughput", value: "10 Gbps per stream" },
      { label: "Encryption", value: "AES-256 in transit & at rest" },
      { label: "Data Validation", value: "Checksum & hash verification" },
      { label: "Resume Capability", value: "Automatic retry & resume" }
    ],
    features: [
      { title: "Smart Scheduling", description: "Schedule migrations during off-peak hours with automatic bandwidth throttling." },
      { title: "Schema Mapping", description: "Intelligent schema translation between source and destination formats." },
      { title: "Audit Trail", description: "Comprehensive logging with compliance-ready audit reports." }
    ],
    useCases: [
      { industry: "Finance", application: "Core banking cloud migration" },
      { industry: "Healthcare", application: "EHR system cloud transition" },
      { industry: "Manufacturing", application: "Legacy ERP modernization" }
    ]
  }
};
