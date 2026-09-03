import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin, Building2, CreditCard, Home, FileText, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Country Details | APEX Getaways",
  description: "Detailed information for international students.",
};

// Mock data (Normally fetched from Firebase based on params.slug)
export default function CountryDetailPage({ params }: { params: { slug: string } }) {
  const countryName = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* Country Hero */}
      <section className="bg-brand-midnight text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-ocean/20 z-0"></div>
        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-4">Destination</div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Study in <span className="text-brand-ice">{countryName}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-brand-soft/80">
            A comprehensive guide to higher education, living, and opportunities in {countryName}.
          </p>
        </div>
      </section>

      <div className="container px-4 mx-auto py-12 flex flex-col lg:flex-row gap-12 items-start relative">
        
        {/* Sidebar Navigation (Sticky) */}
        <aside className="hidden lg:block w-1/4 sticky top-24 shrink-0">
          <nav className="bg-brand-soft rounded-2xl p-6 border border-brand-steel/10">
            <h3 className="font-bold text-brand-midnight mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Overview", "Why Study Here", "Popular Programs", "Institutions", 
                "Admission Requirements", "Tuition & Costs", "Scholarships", 
                "Visa Information", "Accommodation"
              ].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center text-brand-muted hover:text-brand-ocean transition-colors font-medium">
                    <ChevronRight size={16} className="mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-brand-steel/10">
              <Button asChild className="w-full bg-brand-gold text-brand-midnight hover:bg-brand-gold/90 font-bold">
                <Link href="/consultation">Book Consultation</Link>
              </Button>
            </div>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="w-full lg:w-3/4 space-y-16">
          
          <section id="overview" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-brand-midnight mb-6 pb-2 border-b">Overview</h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-4">
              {countryName} is a top destination for international students looking for world-class education, diverse cultural experiences, and excellent post-study work opportunities. 
              The education system here emphasizes practical learning and research, making graduates highly sought after by global employers.
            </p>
          </section>

          <section id="why-study-here" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-brand-midnight mb-6 pb-2 border-b">Why Study Here?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Globally Recognized Degrees",
                "High Quality of Life",
                "Work While Studying",
                "Post-Graduation Work Permit",
                "Diverse and Welcoming Society",
                "Safe Environment"
              ].map((reason, i) => (
                <div key={i} className="flex items-start gap-3 bg-brand-soft/50 p-4 rounded-xl border border-brand-steel/10">
                  <GraduationCap size={20} className="text-brand-ocean shrink-0 mt-0.5" />
                  <span className="font-semibold text-brand-text">{reason}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="popular-programs" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-brand-midnight mb-6 pb-2 border-b flex items-center gap-3">
              <FileText className="text-brand-gold" /> Popular Programs
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              Business Administration, Computer Science, Engineering, Health Sciences, and Data Analytics are among the top choices for international students in this destination.
            </p>
          </section>

          <section id="institutions" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-brand-midnight mb-6 pb-2 border-b flex items-center gap-3">
              <Building2 className="text-brand-gold" /> Popular Institutions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {["University A", "College B", "Institute of Technology C", "University D"].map((uni, i) => (
                 <div key={i} className="p-4 border border-brand-steel/20 rounded-lg font-medium text-brand-midnight shadow-sm">
                   {uni}
                 </div>
               ))}
            </div>
          </section>

          <section id="tuition-&-costs" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-brand-midnight mb-6 pb-2 border-b flex items-center gap-3">
              <CreditCard className="text-brand-gold" /> Tuition & Living Costs
            </h2>
            <div className="bg-brand-deep text-white rounded-2xl p-8 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-brand-gold font-bold mb-2 uppercase text-sm tracking-wider">Estimated Tuition</h4>
                  <p className="text-2xl font-semibold">$15,000 - $35,000 <span className="text-sm font-normal text-brand-soft/70">/ year</span></p>
                </div>
                <div>
                  <h4 className="text-brand-gold font-bold mb-2 uppercase text-sm tracking-wider">Living Costs</h4>
                  <p className="text-2xl font-semibold">$10,000 - $15,000 <span className="text-sm font-normal text-brand-soft/70">/ year</span></p>
                </div>
              </div>
            </div>
            <p className="text-brand-muted">Note: These are estimates. Actual costs vary depending on the institution, program, and city.</p>
          </section>

          <section id="accommodation" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-brand-midnight mb-6 pb-2 border-b flex items-center gap-3">
              <Home className="text-brand-gold" /> Accommodation
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              Options include On-Campus Housing (Dorms), Off-Campus Apartments, and Homestays. We assist students in securing safe and affordable housing prior to departure.
            </p>
          </section>

        </main>
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-brand-ocean text-center text-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Application to {countryName}</h2>
          <p className="text-xl text-brand-soft/90 mb-10 max-w-2xl mx-auto">
            Our experts have successfully guided hundreds of students. Get a free profile assessment today.
          </p>
          <Button size="lg" asChild className="bg-brand-gold text-brand-midnight hover:bg-brand-gold/90 text-lg h-14 px-10">
            <Link href="/consultation">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
