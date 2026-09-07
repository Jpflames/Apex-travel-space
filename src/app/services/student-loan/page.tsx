import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Calendar } from "lucide-react";
import { GoldButton, ServiceTabs, BottomCta, Eyebrow } from "@/components/apex/ApexComponents";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

export const metadata = {
  title: "Student Loans & Funding | APEX Getaways",
  description: "Specialized financial guidance and student loan assistance.",
};

export default function StudentLoanPage() {
  const checklist = [
    "Loan eligibility assessment for international students",
    "Identification of low-interest education loans",
    "Assistance with cosigner and non-cosigner options",
    "Application documentation and processing support",
    "Guidance on scholarship and grant integrations",
    "Financial budget planning and proof of funds",
    "Disbursement tracking and payment planning",
  ];

  return (
    <div className="bg-[#f5f7fb] flex flex-col min-h-screen pb-16">
      {/* Header / Hero */}
      <section className="bg-brand-midnight text-white pt-10 pb-28 px-6 relative overflow-hidden">
        <Image src="/images/countries_landmarks_1787784665565.jpg" alt="" fill className="object-cover opacity-30 mix-blend-luminosity" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight to-transparent" />
        <div className="relative mx-auto max-w-6xl z-10">
          <div className="flex items-center text-brand-gold text-xs font-bold mb-6 uppercase tracking-wide">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} className="mx-1" />
            <Link href="/services" className="hover:text-white">Services</Link>
          </div>
          <div className="inline-flex mb-4 bg-brand-gold text-brand-midnight font-black uppercase tracking-wider text-xs px-3 py-1 rounded-sm shadow-sm">
            Our Specialty
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Student Loans & Funding</h1>
          <p className="text-white/80 max-w-lg text-lg">Secure the financial backing you need to pursue your international education dreams without stress.</p>
        </div>
      </section>

      {/* Tabs */}
      <div className="px-6 relative z-20">
        <ServiceTabs active="Student Loan" />
      </div>

      {/* Main Content */}
      <section className="px-6 py-16 relative z-10">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <FadeInUp>
            <Eyebrow dark={false}>Specialized Financial Support</Eyebrow>
            <h2 className="text-3xl font-black text-brand-midnight mb-6">Expert Guidance in Securing Student Loans</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We understand that funding is often the biggest hurdle to studying abroad. That is why <strong>Student Loans are our core specialty</strong>. We have extensive experience helping students navigate the complex world of international education financing.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you need a loan that requires a cosigner, or you're looking for non-cosigner options based on your future earning potential, our experts will guide you through the requirements and streamline your application process.
            </p>
            
            <h3 className="text-xl font-black text-brand-midnight mb-4">What we help with:</h3>
            <StaggerContainer className="flex flex-col gap-3">
              {checklist.map((item, i) => (
                <StaggerItem key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeInUp>
          
          <FadeInUp delay={0.2} className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <Image src="/images/student_studying_1787784753580.jpg" alt="Student reviewing documents" fill className="object-cover" />
          </FadeInUp>
        </div>
      </section>

      {/* CTA */}
      <BottomCta title="Secure Your Funding Today" text="Let's review your eligibility and start your student loan application process." />
    </div>
  );
}
