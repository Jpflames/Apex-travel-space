import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, FileText, HelpCircle, Users, Award, Globe2, ShieldCheck, Calendar, Plane } from "lucide-react";
import { GoldButton, MiniStats, FlightMark } from "@/components/apex/ApexComponents";
import { FadeInUp, StaggerContainer, StaggerItem, ScaleHover, FadeIn } from "@/components/ui/motion";

export default function Home() {
  const planningOptions = [
    { title: "Study Abroad", icon: GraduationCap, href: "/services/study-abroad" },
    { title: "Visa Assistance", icon: FileText, href: "/services/visa-assistance" },
    { title: "IELTS / CELPIP", icon: BookOpen, href: "/services/ielts-celpip" },
    { title: "Not sure yet", icon: HelpCircle, href: "/consultation" },
  ];

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-midnight text-white pt-10 pb-20 px-6 overflow-hidden">
        <FadeIn duration={1.5} className="absolute inset-0">
          <Image src="/images/hero_bg_map_1787784538258.jpg" alt="" fill className="object-cover opacity-10 mix-blend-screen" priority />
        </FadeIn>
        <FlightMark />
        
        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4">
                Your Dream. <br />
                Our Expertise. <br />
                <span className="text-brand-gold">Global Opportunities.</span>
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-white/80 text-lg mb-8 max-w-md">
                We guide students and travelers every step of the way – from choosing the right program to obtaining your visa and preparing for your language test.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <GoldButton href="/services">Explore Services <ArrowRight size={18} /></GoldButton>
              <ScaleHover>
                <Link href="/consultation" className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                  Book a Consultation
                </Link>
              </ScaleHover>
            </FadeInUp>
          </div>
          
          <FadeInUp delay={0.4} className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/student_studying_1787784753580.jpg" alt="Student holding books" fill className="object-cover object-top" />
          </FadeInUp>
        </div>
      </section>

      {/* What are you planning? */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <FadeInUp>
            <h2 className="text-2xl md:text-3xl font-black text-brand-midnight mb-8 text-center">What are you planning?</h2>
          </FadeInUp>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {planningOptions.map((opt, i) => (
              <StaggerItem key={i}>
                <ScaleHover className="h-full">
                  <Link href={opt.href} className="flex h-full flex-col items-center justify-center text-center p-6 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl transition-colors">
                    <span className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-midnight mb-4 shadow-sm">
                      <opt.icon size={28} />
                    </span>
                    <span className="font-bold text-brand-midnight text-sm md:text-base">{opt.title}</span>
                  </Link>
                </ScaleHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-midnight py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <MiniStats />
        </div>
      </section>

      {/* Why Choose Us & CTA */}
      <section className="py-16 px-6 bg-gray-50 flex-1">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-6">
          <FadeInUp delay={0.1}>
            <ScaleHover className="h-full">
              <Link href="/about" className="bg-brand-midnight text-white p-8 md:p-10 rounded-3xl flex h-full flex-col justify-between hover:ring-4 hover:ring-brand-midnight/20 transition-all">
                <div>
                  <h2 className="text-2xl font-black mb-4">Why Choose Us?</h2>
                  <p className="text-white/80 leading-relaxed mb-8">
                    Experienced counselors, dedicated support, and a global network to help you succeed.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-brand-gold font-bold">
                  Learn More <ArrowRight size={18} />
                </span>
              </Link>
            </ScaleHover>
          </FadeInUp>

          <FadeInUp delay={0.2} className="h-full">
            <div className="bg-brand-ocean h-full text-white p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between">
              <Image src="/images/cta_landmarks_1787784737118.jpg" alt="" fill className="object-cover opacity-20 mix-blend-luminosity" />
              <div className="relative z-10">
                <h2 className="text-2xl font-black mb-8">Ready to take the next step?</h2>
                <GoldButton href="/consultation">Book a Consultation <Calendar size={18} /></GoldButton>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
