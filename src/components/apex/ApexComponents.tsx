"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScaleHover, StaggerContainer, StaggerItem, FadeInUp } from "@/components/ui/motion";
import type { ElementType, ReactNode } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Globe2,
  GraduationCap,
  Headphones,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Search,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Countries", href: "/countries" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
];

export const services = [
  {
    title: "Student Loan",
    text: "Comprehensive financial guidance and loan application support tailored for international students.",
    href: "/services/student-loan",
    icon: Building2,
    color: "bg-[#e6ac24]",
  },
  {
    title: "Study Abroad & Admissions",
    text: "Helping you find the right program, institution and pathway to study internationally.",
    href: "/services/study-abroad",
    icon: GraduationCap,
    color: "bg-[#1f67d2]",
  },
  {
    title: "Visa Assistance",
    text: "Guidance for student, tourist, visitor and other international visa applications.",
    href: "/services/visa-assistance",
    icon: FileText,
    color: "bg-[#20b8bd]",
  },
  {
    title: "IELTS & CELPIP Support",
    text: "Practical preparation, tips and strategies to help you achieve your required score.",
    href: "/services/ielts-celpip",
    icon: BookOpen,
    color: "bg-[#6653d9]",
  },
];

export const reasons = [
  { title: "Expert Guidance", text: "Experienced counselors dedicated to your success.", icon: Users },
  { title: "High Success Rate", text: "Proven track record in admissions and visa approvals.", icon: ShieldCheck },
  { title: "Global Network", text: "Strong partnerships with top institutions worldwide.", icon: Globe2 },
  { title: "Personalized Support", text: "Tailored solutions for your unique needs.", icon: Headphones },
  { title: "End-to-End Support", text: "From application to arrival, we are with you.", icon: Clock },
  { title: "Student First", text: "We care about your journey as much as you do.", icon: Heart },
];

export function ApexLogo({ light = true }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-sm">
        <Image src="/apex-logo-transparent.png" alt="APEX" fill className="object-contain" priority />
      </span>
      <span className="leading-none">
        <span className={`block text-[2rem] font-black tracking-[0.08em] ${light ? "text-white" : "text-[#061733]"}`}>APEX</span>
        <span className={`block text-[0.6rem] font-extrabold tracking-[0.12em] ${light ? "text-white" : "text-[#061733]"}`}>
          GETAWAYS & TRAVEL LTD
        </span>
      </span>
    </Link>
  );
}

export function GoldButton({ href, children, dark = false, className = "" }: { href: string; children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <ScaleHover className={className}>
      <Link
        href={href}
        className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-[6px] px-6 text-sm font-extrabold shadow-sm transition ${
          dark ? "bg-[#061733] text-white hover:bg-[#0b2550]" : "bg-[#e6ac24] text-[#061733] hover:bg-[#f0bb39]"
        }`}
      >
        {children}
      </Link>
    </ScaleHover>
  );
}

export function Breadcrumb({ items }: { items: string[] }) {
  return (
    <div className="mb-7 flex items-center gap-2 text-xs font-semibold text-white/70">
      <Link href="/" className="hover:text-white">Home</Link>
      {items.map((item) => (
        <span key={item} className="flex items-center gap-2">
          <span className="text-white/35">›</span>
          <span className="text-[#e6ac24]">{item}</span>
        </span>
      ))}
    </div>
  );
}

export function Eyebrow({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`mb-4 flex items-center gap-4 text-xs font-black uppercase tracking-wide ${dark ? "text-[#e6ac24]" : "text-[#15407e]"}`}>
      <span>{children}</span>
      <span className="h-px w-9 bg-[#e6ac24]" />
    </div>
  );
}

export function HeroFeature({ icon: Icon, title, text }: { icon: ElementType; title: string; text: string }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#e6ac24]/55 text-[#e6ac24]">
        <Icon size={19} />
      </span>
      <span>
        <strong className="block text-xs font-extrabold text-white">{title}</strong>
        <span className="block max-w-[11rem] text-[0.68rem] leading-snug text-white/75">{text}</span>
      </span>
    </div>
  );
}

export function IconBubble({ icon: Icon, color = "bg-[#061733]", size = "md" }: { icon: ElementType; color?: string; size?: "sm" | "md" | "lg" }) {
  const classes = size === "lg" ? "h-16 w-16" : size === "sm" ? "h-10 w-10" : "h-12 w-12";
  return (
    <span className={`grid ${classes} shrink-0 place-items-center rounded-full ${color} text-[#e6ac24] ring-4 ring-white/10`}>
      <Icon size={size === "lg" ? 30 : 22} />
    </span>
  );
}

export function WhyChooseBand() {
  return (
    <section className="bg-[#06336f] bg-[radial-gradient(circle_at_top_right,rgba(39,123,191,0.35),transparent_35%)] py-8 text-white">
      <FadeInUp className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-[0.7rem] font-black uppercase text-[#e6ac24]">Why Choose Apex?</p>
        <h2 className="mb-7 text-2xl font-black">Your Success Is Our Priority</h2>
        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {reasons.map((item) => (
            <StaggerItem key={item.title} className="border-white/15 px-3 lg:border-l">
              <IconBubble icon={item.icon} size="sm" />
              <h3 className="mt-3 text-sm font-extrabold">{item.title}</h3>
              <p className="mx-auto mt-1 max-w-[11rem] text-[0.72rem] leading-relaxed text-white/75">{item.text}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </FadeInUp>
    </section>
  );
}

export function BottomCta({ title = "Your Dream Journey Starts Here.", text = "Let us help you study abroad, get your visa and achieve your language goals." }) {
  return (
    <section className="mx-auto my-8 max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-[8px] bg-[#061733] px-8 py-8 text-white">
        <Image src="/images/cta_landmarks_1787784737118.jpg" alt="" fill className="object-cover object-right opacity-22" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-black md:text-3xl">{title.includes("Right Guidance") ? "Your Journey Starts with the " : title}</h2>
            {title.includes("Right Guidance") && <h2 className="text-2xl font-black text-[#e6ac24] md:text-3xl">Right Guidance.</h2>}
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/78">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <GoldButton href="/consultation"><Calendar size={16} /> Book a Consultation</GoldButton>
            <a href="tel:+2348062841276" className="inline-flex h-12 items-center gap-2 text-sm font-bold text-white">
              <Phone size={17} className="text-[#e6ac24]" /> +234 806 284 1276
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceTabs({ active }: { active: string }) {
  return (
    <div className="mx-auto -mt-12 grid max-w-6xl grid-cols-1 overflow-hidden rounded-[8px] bg-white shadow-[0_14px_35px_rgba(4,23,54,0.14)] md:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <ScaleHover key={service.title}>
          <Link
            href={service.href}
            className={`flex h-full items-center gap-5 border-b px-8 py-5 md:border-b-0 md:border-r ${active === service.title ? "border-b-4 border-[#e6ac24]" : "border-slate-200"}`}
          >
            <IconBubble icon={service.icon} color={service.color} />
            <span className="text-base font-black leading-tight text-[#061733]">{service.title}</span>
          </Link>
        </ScaleHover>
      ))}
    </div>
  );
}

export function SearchBox() {
  return (
    <div className="relative mt-7 max-w-md">
      <input className="h-12 w-full rounded-[7px] border-0 bg-white pl-5 pr-14 text-sm text-[#061733] shadow-sm outline-none" placeholder="Search for guides, articles, tips..." />
      <button className="absolute right-1.5 top-1.5 grid h-9 w-10 place-items-center rounded-[5px] bg-[#061733] text-white">
        <Search size={17} />
      </button>
    </div>
  );
}

export const commonDownloads = [
  "Study Abroad Planning Checklist",
  "Visa Interview Preparation Guide",
  "IELTS Band Score Guide",
  "Scholarship Search Workbook",
];

export function DownloadsPanel() {
  return (
    <aside className="rounded-[8px] bg-[#f5f7fb] p-5">
      <h3 className="mb-4 text-lg font-black text-[#061733]">Popular Downloads</h3>
      <div className="space-y-3">
        {commonDownloads.map((item) => (
          <div key={item} className="flex items-center gap-3 border-b border-slate-200 pb-3 last:border-0">
            <FileText size={24} className="text-red-500" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-black leading-snug text-[#061733]">{item}</p>
              <p className="text-[0.65rem] font-bold uppercase text-slate-500">PDF - 1.2 MB</p>
            </div>
            <Download size={16} className="text-[#061733]" />
          </div>
        ))}
      </div>
      <GoldButton href="/resources/downloads" dark>View All Downloads <ArrowRight size={15} /></GoldButton>
    </aside>
  );
}

export const contactInfo = [
  { title: "Call Us", text: "+234 806 284 1276", sub: "Mon - Fri (9:00 AM - 4:00 PM WAT)", icon: Phone },
  { title: "WhatsApp", text: "+234 806 284 1276", sub: "Quick chat with our team", icon: MessageCircle },
  { title: "Email Us", text: "apexgetaways.travel@gmail.com", sub: "We respond within 24 hours", icon: Mail },
  { title: "Office Address", text: "Apex Getaways & Travels Limited", sub: "Abuja, Nigeria", icon: MapPin },
  { title: "Website", text: "www.apexgetaways.com", sub: "", icon: Globe2 },
];

export function MiniStats() {
  const stats = [
    { num: "500+", label: "Students Guided", icon: Users },
    { num: "98%", label: "Visa Success Rate", icon: Award },
    { num: "10+", label: "Countries", icon: Globe2 },
    { num: "5+", label: "Years of Excellence", icon: ShieldCheck },
  ];

  return (
    <StaggerContainer className="grid gap-4 text-white sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <StaggerItem key={item.label} className="flex items-center gap-3 border-white/15 lg:border-r">
          <IconBubble icon={item.icon} size="sm" />
          <span>
            <strong className="block text-xl font-black">{item.num}</strong>
            <span className="text-[0.7rem] font-semibold text-white/75">{item.label}</span>
          </span>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}

export function FlightMark() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="absolute"
    >
      <Plane className="text-[#e6ac24]/90" size={24} />
    </motion.div>
  );
}

export { ArrowRight, Award, BookOpen, Building2, Calendar, CheckCircle2, Clock, Download, FileText, Globe2, GraduationCap, Headphones, Mail, MapPin, MessageCircle, Phone, Plane, Search, ShieldCheck, Target, Users };
