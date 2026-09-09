import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe2, ChevronRight, MapPin } from "lucide-react";
import { GoldButton } from "@/components/apex/ApexComponents";

export const metadata = {
  title: "Countries & Destinations | APEX Getaways",
  description: "Global study and travel destinations.",
};

const countries = [
  { 
    name: "Canada", 
    image: "/canada_flag_1788441357442.jpg",
    text: "Top-tier education, welcoming culture, and great post-study work opportunities. Study loans are available for this destination." 
  },
  { 
    name: "United Kingdom", 
    image: "/uk_flag_1788441370230.jpg",
    text: "Rich academic heritage and globally recognized degrees." 
  },
  { 
    name: "Australia", 
    image: "/australia_flag_1788441381530.jpg",
    text: "Excellent education system and a high standard of living." 
  },
  { 
    name: "Germany", 
    image: "/images/hero_bg_map_1787784538258.jpg",
    text: "World-class public universities with zero or low tuition fees, and a strong economy." 
  },
  { 
    name: "France", 
    image: "/images/countries_landmarks_1787784665565.jpg",
    text: "Rich cultural history, excellent culinary arts, and globally recognized universities." 
  }
];

export default function CountriesPage() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen pb-16">
      {/* Header / Hero */}
      <section className="bg-brand-midnight text-white pt-10 pb-24 px-6 relative overflow-hidden">
        <Image src="/images/countries_landmarks_1787784665565.jpg" alt="" fill className="object-cover opacity-30 mix-blend-luminosity" priority />
        <div className="relative mx-auto max-w-5xl z-10">
          <div className="flex items-center text-brand-gold text-xs font-bold mb-6 uppercase tracking-wide">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-brand-gold">Countries</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4">Global Destinations</h1>
          <p className="text-white/80 max-w-xl">Explore our top destinations for study, travel, and work. Where will your journey take you?</p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="px-6 -mt-16 relative z-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, i) => (
              <div key={country.name} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-gray-100">
                  <Image src={country.image} alt={country.name} fill className="object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-black text-brand-midnight mb-2 flex items-center gap-2">
                    <MapPin size={18} className="text-brand-gold" />
                    {country.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {country.text}
                  </p>
                  <Link href={`/countries/${country.name.toLowerCase().replace(" ", "-")}`} className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm mt-auto hover:text-brand-gold/80 transition-colors">
                    Explore {country.name} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 mt-16 w-full">
        <div className="bg-brand-ocean text-white p-8 md:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Globe2 size={240} className="-mr-10 -mt-10" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-black mb-2">Can't decide where to go?</h2>
            <p className="text-white/80">Let our experts help you choose the best destination for your goals.</p>
          </div>
          <div className="relative z-10 shrink-0">
            <GoldButton href="/consultation">Book a Consultation</GoldButton>
          </div>
        </div>
      </section>
    </div>
  );
}
