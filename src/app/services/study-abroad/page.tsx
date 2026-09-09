import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Calendar } from "lucide-react";
import { GoldButton } from "@/components/apex/ApexComponents";

export const metadata = {
  title: "Study Abroad & Admissions | APEX Getaway & Services",
  description: "Comprehensive guidance for international school admissions.",
};

export default function StudyAbroadPage() {
  const checklist = [
    "International university admissions",
    "Program and course selection",
    "Country and school selection",
    "Application assistance",
    "Documentation guidance",
    "SOP/Personal statement guidance",
    "Scholarship and funding guidance",
    "Tuition and budget planning",
    "Accommodation guidance",
    "Study abroad consultation",
    "Pre-departure guidance",
  ];

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen pb-16">
      {/* Header / Hero */}
      <section className="bg-brand-midnight text-white pt-10 pb-24 px-6 relative overflow-hidden">
        <Image src="/images/countries_landmarks_1787784665565.jpg" alt="" fill className="object-cover opacity-30 mix-blend-luminosity" priority />
        <div className="relative mx-auto max-w-3xl z-10">
          <div className="flex items-center text-brand-gold text-xs font-bold mb-6 uppercase tracking-wide">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} className="mx-1" />
            <Link href="/services" className="hover:text-white">Services</Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Study Abroad & Admissions</h1>
          <p className="text-white/80 max-w-md">Your international education journey starts here.</p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="px-6 -mt-16 relative z-20">
        <div className="mx-auto max-w-3xl bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-black text-brand-midnight mb-6">Our Services Include</h2>
          <ul className="flex flex-col gap-4">
            {checklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-brand-gold shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm md:text-base font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 mt-12 w-full">
        <div className="bg-brand-midnight text-white p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <div>
            <h2 className="text-2xl font-black mb-2">Ready to Study Abroad?</h2>
            <p className="text-white/70 text-sm">Let's plan your future together.</p>
          </div>
          <GoldButton href="/consultation">Book a Consultation <Calendar size={16} /></GoldButton>
        </div>
      </section>
    </div>
  );
}
