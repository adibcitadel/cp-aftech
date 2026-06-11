"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Briefcase, Clock, User, Mail, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const jobDetails: Record<string, any> = {
  "senior-full-stack-engineer": {
    title: "Senior Full Stack Engineer",
    type: "Full-time",
    location: "Jakarta (Hybrid)",
    department: "Engineering",
    description: "We are looking for a Senior Full Stack Engineer to lead the development of our core enterprise platforms. You will work with a modern tech stack including Next.js, React, TypeScript, and Go to build scalable, high-performance applications that power industrial IoT solutions.",
    responsibilities: [
      "Architect and develop end-to-end features for our enterprise platform",
      "Design and implement scalable APIs and microservices",
      "Collaborate with product and design teams to deliver exceptional user experiences",
      "Mentor junior engineers and establish engineering best practices",
      "Optimize application performance and ensure system reliability",
      "Participate in code reviews and contribute to technical documentation"
    ],
    requirements: [
      "5+ years of professional software development experience",
      "Expert-level proficiency in TypeScript/JavaScript and React/Next.js",
      "Strong backend experience with Go, Node.js, or similar",
      "Experience with PostgreSQL, Redis, and message queues",
      "Familiarity with containerization (Docker) and cloud platforms (AWS/GCP)",
      "Strong understanding of CI/CD pipelines and DevOps practices",
      "Excellent problem-solving and communication skills"
    ],
    preferred: [
      "Experience with industrial IoT or manufacturing systems",
      "Background in building real-time data dashboards",
      "Contributions to open-source projects"
    ]
  },
  "iot-systems-architect": {
    title: "IoT Systems Architect",
    type: "Full-time",
    location: "Cilacap (On-site)",
    department: "Hardware",
    description: "As an IoT Systems Architect, you will design and implement sensor networks and edge computing solutions for large-scale manufacturing clients. You will bridge the gap between hardware sensors, gateway devices, and cloud platforms to deliver real-time industrial monitoring.",
    responsibilities: [
      "Design end-to-end IoT architectures for industrial applications",
      "Select and integrate sensors, gateways, and communication protocols",
      "Develop edge computing solutions for real-time data processing",
      "Collaborate with hardware vendors and manufacturing partners",
      "Ensure system reliability, security, and scalability",
      "Create technical documentation and deployment guides"
    ],
    requirements: [
      "4+ years of experience in IoT system design and implementation",
      "Deep knowledge of protocols: MQTT, Modbus, OPC UA, CoAP",
      "Experience with edge computing platforms (AWS IoT Greengrass, Azure IoT Edge)",
      "Proficiency in Python, C/C++, or Go for embedded development",
      "Understanding of industrial automation (PLC, SCADA, MES)",
      "Familiarity with time-series databases (InfluxDB, TimescaleDB)"
    ],
    preferred: [
      "Experience with predictive maintenance systems",
      "Knowledge of LoRaWAN, NB-IoT, or 5G connectivity",
      "Certifications in industrial IoT or Industry 4.0"
    ]
  },
  "cybersecurity-consultant": {
    title: "Cybersecurity Consultant",
    type: "Contract",
    location: "Remote",
    department: "Security",
    description: "Join our security team as a Cybersecurity Consultant to perform penetration testing, vulnerability assessments, and design zero-trust architectures for enterprise clients across Indonesia. You will help organizations strengthen their security posture against evolving threats.",
    responsibilities: [
      "Conduct penetration testing and vulnerability assessments",
      "Design and implement zero-trust network architectures",
      "Perform security audits and compliance gap analysis",
      "Develop incident response plans and conduct tabletop exercises",
      "Provide security training and awareness programs",
      "Stay current with emerging threats and attack vectors"
    ],
    requirements: [
      "3+ years in offensive security or security consulting",
      "Certifications: OSCP, OSWE, CISSP, or equivalent",
      "Expertise in network, web application, and cloud security",
      "Experience with SIEM, EDR, and threat hunting tools",
      "Strong report writing and client communication skills",
      "Knowledge of Indonesian regulations (Kominfo, ISO 27001)"
    ],
    preferred: [
      "Bug bounty program experience",
      "Experience with OT/ICS security",
      "Indonesian language proficiency"
    ]
  },
  "ui-ux-product-designer": {
    title: "UI/UX Product Designer",
    type: "Full-time",
    location: "Jakarta (Hybrid)",
    department: "Design",
    description: "We are seeking a UI/UX Product Designer to craft intuitive, premium interfaces for our industrial dashboards and enterprise applications. You will translate complex industrial workflows into elegant, user-centered designs that empower operators and decision-makers.",
    responsibilities: [
      "Design end-to-end user experiences for industrial SaaS products",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing with industrial users",
      "Build and maintain a scalable design system",
      "Collaborate closely with engineers for pixel-perfect implementation",
      "Translate complex data into clear, actionable visualizations"
    ],
    requirements: [
      "4+ years of product design experience in B2B/enterprise",
      "Proficiency in Figma and modern design tools",
      "Strong portfolio demonstrating complex dashboard/data visualization work",
      "Experience with design systems and component libraries",
      "Understanding of frontend development constraints (React/HTML/CSS)",
      "Excellent communication and stakeholder management skills"
    ],
    preferred: [
      "Experience designing for industrial/manufacturing domains",
      "Knowledge of accessibility standards (WCAG 2.1)",
      "Motion design and prototyping skills"
    ]
  }
};

export default function JobDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const job = jobDetails[slug];

  if (!job) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Position Not Found</h1>
          <Link href="/careers" className="text-primary hover:underline">Back to Careers</Link>
        </div>
      </main>
    );
  }

  const [formState, setFormState] = useState<{ name: string; email: string; phone: string; resume: string; coverLetter: string }>({
    name: "", email: "", phone: "", resume: "", coverLetter: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", phone: "", resume: "", coverLetter: "" });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <Link href="/careers" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Careers
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded-full">
                {job.department}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground border border-border px-3 py-1 rounded-full bg-muted">
                {job.type}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                {job.location}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{job.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{job.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-y border-border bg-muted">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-primary" size={20} />
                <span className="font-semibold text-foreground">Location</span>
              </div>
              <p className="text-muted-foreground">{job.location}</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-primary" size={20} />
                <span className="font-semibold text-foreground">Type</span>
              </div>
              <p className="text-muted-foreground">{job.type}</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-3 mb-3">
                <User className="text-primary" size={20} />
                <span className="font-semibold text-foreground">Department</span>
              </div>
              <p className="text-muted-foreground">{job.department}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-primary rounded-full" />
              Responsibilities
            </h2>
            <ul className="space-y-3">
              {job.responsibilities.map((resp: string, i: number) => (
                <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  {resp}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-secondary rounded-full" />
              Requirements
            </h2>
            <ul className="space-y-3">
              {job.requirements.map((req: string, i: number) => (
                <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-accent rounded-full" />
              Preferred Qualifications
            </h2>
            <ul className="space-y-3">
              {job.preferred.map((pref: string, i: number) => (
                <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  {pref}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted border-y border-border">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 md:p-12 rounded-2xl border border-border bg-card">
              <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Apply for This Position</h2>
              <p className="text-muted-foreground text-center mb-8">Fill out the form below and we'll get back to you within 3 business days.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Application Submitted!</h3>
                  <p className="text-muted-foreground">Thank you for your interest. Our team will review your application and contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                        placeholder="john.doe@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                        placeholder="+62 8xx xxxx xxxx"
                      />
                    </div>
                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium text-foreground mb-2">LinkedIn / Portfolio URL</label>
                      <input
                        type="url"
                        id="resume"
                        value={formState.resume}
                        onChange={(e) => setFormState({ ...formState, resume: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                        placeholder="https://linkedin.com/in/johndoe"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-foreground mb-2">Cover Letter / Why AFTECH?</label>
                    <textarea
                      id="coverLetter"
                      required
                      rows={5}
                      value={formState.coverLetter}
                      onChange={(e) => setFormState({ ...formState, coverLetter: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20"
                  >
                    <Send className="inline mr-2" size={20} />
                    Submit Application
                  </button>
                  <p className="text-center text-xs text-muted-foreground">By submitting, you agree to our <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}