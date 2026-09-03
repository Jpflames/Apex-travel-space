import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, FileText, ChevronRight } from "lucide-react";
import { GoldButton } from "@/components/apex/ApexComponents";
import Image from "next/image";
import { FadeInUp, StaggerContainer, StaggerItem, ScaleHover } from "@/components/ui/motion";

export default function ServicesPage() {
  const servicesList = [
    {
      title: "Study Abroad & Admissions",
      text: "Helping you find the right program, institution and pathway to study internationally.",
      href: "/services/study-abroad",
      icon: GraduationCap,
    },
    {
      title: "Visa Assistance",
      text: "Guidance for student, tourist, visitor and other international visa applications.",
      href: "/services/visa-assistance",
      icon: FileText,
    },
    {
      title: "IELTS & CELPIP Support",
      text: "Practical preparation, tips and strategies to help you achieve your required score.",
      href: "/services/ielts-celpip",
      icon: BookOpen,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <section className="bg-brand-midnight text-white pt-10 pb-16 px-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl md:text-5xl font-black mb-4">Our Services</h1>
          <p className="text-white/80 max-w-md">
            Comprehensive support for your international education and travel goals.
          </p>
        </div>
      </section>

      <section className="px-6 -mt-8">
        <StaggerContainer className="mx-auto max-w-3xl flex flex-col gap-4">
          {servicesList.map((service, i) => (
            <StaggerItem key={i}>
              <ScaleHover className="w-full">
                <Link href={service.href} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow group">
                  <span className="w-14 h-14 shrink-0 rounded-full bg-brand-midnight text-brand-gold flex items-center justify-center border-4 border-brand-midnight/5">
                    <service.icon size={24} />
                  </span>
                  <div className="flex-1">
                    <h2 className="text-lg font-black text-brand-midnight">{service.title}</h2>
                    <p className="text-sm text-gray-600 mt-1 mb-3 leading-relaxed">{service.text}</p>
                    <span className="text-sm font-bold text-brand-midnight flex items-center gap-1 group-hover:text-brand-gold transition-colors">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </ScaleHover>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="mx-auto max-w-3xl px-6 mt-12">
        <div className="bg-brand-midnight text-white p-8 rounded-3xl relative overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-6">
          <Image src="/images/cta_landmarks_1787784737118.jpg" alt="" fill className="object-cover opacity-20 mix-blend-luminosity" />
          <div className="relative z-10 text-center sm:text-left">
            <h2 className="text-2xl font-black mb-2">Ready to take the next step?</h2>
            <p className="text-white/70 text-sm">Let us help you achieve your global dreams.</p>
          </div>
          <div className="relative z-10">
            <GoldButton href="/consultation">Book a Consultation</GoldButton>
          </div>
        </div>
      </section>
    </div>
  );
}
