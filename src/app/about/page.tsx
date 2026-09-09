import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Diamond, CheckCircle2 } from "lucide-react";
import { GoldButton } from "@/components/apex/ApexComponents";

export const metadata = {
  title: "About Us | APEX Getaway & Services",
  description: "Learn about our company story, mission, vision, and core values.",
};

export default function AboutPage() {
  const values = [
    "Integrity",
    "Excellence",
    "Transparency",
    "Client Success",
    "Professionalism",
    "Empathy"
  ];

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen pb-16">
      {/* Header */}
      <section className="relative bg-brand-midnight text-white pt-12 pb-24 px-6 overflow-hidden">
        {/* CEO Background Image with Gradients */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-50 mix-blend-luminosity">
          <Image 
            src="/Apex-CEO.jpeg" 
            alt="CEO of APEX Getaway & Services" 
            fill 
            className="object-cover object-top"
          />
          {/* Gradient to blend left edge into background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-midnight via-brand-midnight/40 to-transparent" />
          {/* Gradient to blend bottom edge */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-transparent to-transparent" />
        </div>
        
        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center z-10">
          <div>
            <h1 className="flex flex-col gap-2 mb-6 leading-tight">
              <span className="text-3xl md:text-5xl lg:text-6xl font-black text-white">
                Guiding Your Journey.
              </span>
              <span className="text-xl md:text-3xl lg:text-4xl font-extrabold text-brand-gold">
                Building Your Future.
              </span>
            </h1>
            <p className="text-white/80 max-w-xl leading-relaxed text-lg">
              APEX Getaway & Services is a trusted international education and travel consultancy founded by our CEO to help students and travelers achieve their global dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Core Values */}
      <section className="px-6 -mt-8 relative z-20">
        <div className="mx-auto max-w-3xl flex flex-col gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-start">
            <span className="w-16 h-16 shrink-0 rounded-full bg-brand-midnight text-brand-gold flex items-center justify-center border-4 border-brand-midnight/5">
              <Target size={28} />
            </span>
            <div>
              <h2 className="text-xl font-black text-brand-midnight mb-2">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                To provide reliable, professional and personalized guidance to help our clients achieve their educational and travel goals.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-start">
            <span className="w-16 h-16 shrink-0 rounded-full bg-brand-midnight text-brand-gold flex items-center justify-center border-4 border-brand-midnight/5">
              <Eye size={28} />
            </span>
            <div>
              <h2 className="text-xl font-black text-brand-midnight mb-2">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                To be a leading global education and travel consultancy, recognized for excellence, integrity and client success.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-start">
            <span className="w-16 h-16 shrink-0 rounded-full bg-brand-midnight text-brand-gold flex items-center justify-center border-4 border-brand-midnight/5">
              <Diamond size={28} />
            </span>
            <div className="flex-1">
              <h2 className="text-xl font-black text-brand-midnight mb-4">Our Core Values</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2">
                {values.map((val) => (
                  <div key={val} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-brand-gold" />
                    <span className="text-sm font-bold text-gray-700">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the CEO */}
      <section className="mx-auto max-w-3xl px-6 mt-12 w-full">
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 shrink-0 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <Image 
              src="/Apex-CEO.jpeg" 
              alt="CEO of APEX Getaway & Services" 
              fill 
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="text-brand-gold font-bold mb-1 uppercase tracking-wide text-xs">Our Leadership</p>
            <h2 className="text-2xl font-black text-brand-midnight mb-2">Meet the CEO</h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              With a passion for global education and seamless travel experiences, our CEO founded APEX Getaway & Services to bridge the gap between dreams and reality. Under their leadership, the company has guided hundreds of students and professionals to success across the globe.
            </p>
            <p className="text-brand-midnight font-bold italic text-sm">
              "Your success is our priority, and we are with you every step of the way."
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us & CTA (Same as Home) */}
      <section className="mx-auto max-w-3xl px-6 mt-12 w-full grid sm:grid-cols-2 gap-6">
        <div className="bg-brand-midnight text-white p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-black mb-3">Why Choose Us?</h2>
            <p className="text-white/80 leading-relaxed text-sm mb-6">
              Experienced counselors, dedicated support, and a global network to help you succeed.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm">
            Learn More <ArrowRight size={16} />
          </span>
        </div>

        <div className="bg-brand-ocean text-white p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between">
          <Image src="/images/cta_landmarks_1787784737118.jpg" alt="" fill className="object-cover opacity-20 mix-blend-luminosity" />
          <div className="relative z-10">
            <h2 className="text-2xl font-black mb-6">Ready to take the next step?</h2>
            <GoldButton href="/consultation">Book a Consultation</GoldButton>
          </div>
        </div>
      </section>
    </div>
  );
}
