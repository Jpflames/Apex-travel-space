import Link from "next/link";
import Image from "next/image";
import { Search, ChevronRight, FileText, ArrowRight } from "lucide-react";
import { GoldButton } from "@/components/apex/ApexComponents";
import { articlesData } from "@/data/articles";

export const metadata = {
  title: "Resources | APEX Getaway & Services",
  description: "Study abroad, visa and language-test resources.",
};

const categories = ["All", "Study Abroad", "Visa Guides", "IELTS Tips", "Scholarships"];

export default function ResourcesPage() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen pb-16">
      {/* Header / Hero */}
      <section className="bg-brand-midnight text-white pt-10 pb-24 px-6 relative overflow-hidden">
        <Image src="/images/student_studying_1787784753580.jpg" alt="" fill className="object-cover opacity-20 mix-blend-luminosity" priority />
        <div className="relative mx-auto max-w-5xl z-10 flex flex-col items-center text-center">
          <div className="flex items-center text-brand-gold text-xs font-bold mb-6 uppercase tracking-wide">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-brand-gold">Resources</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-6">Guides & Insights</h1>
          <p className="text-white/80 max-w-xl mb-8">Access reliable guides, tips, and expert insights to help you make informed decisions.</p>
          
          <div className="w-full max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search resources..." 
              className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white focus:text-brand-midnight transition-all"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 -mt-8 relative z-20">
        <div className="mx-auto max-w-5xl">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat, i) => (
              <button 
                key={cat} 
                className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                  i === 0 
                  ? "bg-brand-midnight text-white border-brand-midnight" 
                  : "bg-white text-gray-600 border-gray-200 hover:border-brand-midnight hover:text-brand-midnight"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {articlesData.map((article, i) => (
              <Link href={`/resources/${article.slug}`} key={i} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow group">
                <div className="relative w-full sm:w-32 h-48 sm:h-auto rounded-2xl overflow-hidden shrink-0 bg-gray-100">
                  <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-brand-gold font-bold text-xs uppercase tracking-wider mb-2">{article.category}</span>
                  <h3 className="text-lg font-black text-brand-midnight leading-tight mb-3 group-hover:text-brand-ocean transition-colors">
                    {article.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 mt-16 w-full">
        <div className="bg-brand-midnight text-white p-8 md:p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-black mb-2">Can't find what you're looking for?</h2>
            <p className="text-white/80 text-sm">Our experts are available to answer your specific questions.</p>
          </div>
          <GoldButton href="/consultation">Book a Consultation</GoldButton>
        </div>
      </section>
    </div>
  );
}
