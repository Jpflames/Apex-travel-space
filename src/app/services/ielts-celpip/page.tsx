import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ChevronRight, Calendar, MessageSquare, Edit3, BookOpen, Headphones } from "lucide-react";
import { GoldButton } from "@/components/apex/ApexComponents";

export const metadata = {
  title: "IELTS & CELPIP Support | APEX Getaway & Services",
  description: "Practical preparation, tips and strategies for IELTS and CELPIP.",
};

export default function IELTSPage() {
  const checklist = [
    "IELTS & CELPIP preparation",
    "Test strategies & tips",
    "Study materials",
    "Language requirements",
    "Canada immigration guidance",
  ];

  const skills = [
    { title: "Speaking", icon: MessageSquare },
    { title: "Writing", icon: Edit3 },
    { title: "Reading", icon: BookOpen },
    { title: "Listening", icon: Headphones },
  ];

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen pb-16">
      {/* Header / Hero */}
      <section className="bg-brand-midnight text-white pt-10 pb-24 px-6 relative overflow-hidden">
        <Image src="/images/student_studying_1787784753580.jpg" alt="" fill className="object-cover opacity-30 mix-blend-luminosity" priority />
        <div className="relative mx-auto max-w-3xl z-10">
          <div className="flex items-center text-brand-gold text-xs font-bold mb-6 uppercase tracking-wide">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} className="mx-1" />
            <Link href="/services" className="hover:text-white">Services</Link>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4">IELTS & CELPIP Support</h1>
          <p className="text-white/80 max-w-md">Better preparation. Higher scores. More opportunities.</p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="px-6 -mt-16 relative z-20">
        <div className="mx-auto max-w-3xl flex flex-col gap-6">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-black text-brand-midnight mb-6">Focus on Your Skills</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-2xl bg-gray-50">
                  <skill.icon size={28} className="text-brand-midnight mb-3" />
                  <span className="font-bold text-brand-midnight">{skill.title}</span>
                </div>
              ))}
            </div>

            <ul className="flex flex-col gap-4">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm md:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 mt-12 w-full">
        <div className="bg-brand-midnight text-white p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <div>
            <h2 className="text-2xl font-black mb-2">Ready to take your test?</h2>
            <p className="text-white/70 text-sm">Get the resources you need.</p>
          </div>
          <GoldButton href="/resources">Explore Study Resources</GoldButton>
        </div>
      </section>
    </div>
  );
}
