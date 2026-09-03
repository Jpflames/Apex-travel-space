import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";

export const metadata = {
  title: "Article | APEX Getaways",
  description: "Read the latest insights and guides from APEX Getaways.",
};

// Mock Data
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const title = params.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <div className="flex flex-col flex-1 bg-white">
      <article className="pb-24">
        {/* Article Header */}
        <header className="bg-brand-soft pt-24 pb-16 border-b border-brand-steel/10">
          <div className="container px-4 mx-auto max-w-4xl">
            <Link href="/resources" className="inline-flex items-center text-sm font-medium text-brand-ocean hover:text-brand-deep mb-8 transition-colors">
              <ArrowLeft size={16} className="mr-2" /> Back to Resources
            </Link>
            
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-medium">
              <span className="bg-brand-ocean text-white px-3 py-1 rounded-full uppercase tracking-wider text-xs">
                Scholarships
              </span>
              <span className="text-brand-muted flex items-center"><Calendar size={14} className="mr-1" /> Aug 20, 2026</span>
              <span className="text-brand-muted flex items-center"><Clock size={14} className="mr-1" /> 5 min read</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-brand-midnight mb-6 leading-tight">
              {title}
            </h1>
            
            <div className="flex items-center justify-between border-t border-brand-steel/20 pt-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-deep rounded-full flex items-center justify-center text-white">
                  <User size={18} />
                </div>
                <div>
                  <p className="font-bold text-brand-midnight text-sm">Editorial Team</p>
                  <p className="text-brand-muted text-xs">APEX Getaways</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-brand-muted hover:text-brand-ocean">
                <Share2 size={18} />
              </Button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="container px-4 mx-auto max-w-3xl py-12">
          <div className="prose prose-lg prose-blue max-w-none text-brand-text">
            <p className="lead text-xl text-brand-muted mb-8 font-medium">
              Securing a fully funded scholarship is a dream for many international students. In this comprehensive guide, we explore the top opportunities available for the upcoming academic year.
            </p>
            
            <h2 className="text-2xl font-bold text-brand-midnight mt-10 mb-4">1. Understanding the Types of Scholarships</h2>
            <p className="mb-6 leading-relaxed">
              Before applying, it's crucial to understand the difference between merit-based, need-based, and country-specific scholarships. Merit-based awards focus heavily on your previous academic performance and extracurricular achievements.
            </p>
            
            <h2 className="text-2xl font-bold text-brand-midnight mt-10 mb-4">2. Preparing Your Documentation</h2>
            <p className="mb-4 leading-relaxed">
              Most scholarship committees require a standard set of documents:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-brand-muted">
              <li>Academic Transcripts (translated and notarized)</li>
              <li>Statement of Purpose (SOP) tailored to the scholarship</li>
              <li>Two or three Letters of Recommendation</li>
              <li>Proof of language proficiency (IELTS/CELPIP)</li>
            </ul>

            <div className="bg-brand-soft/50 p-6 rounded-xl border-l-4 border-brand-gold my-10 text-brand-midnight italic">
              "The most common mistake applicants make is submitting a generic Statement of Purpose. You must align your goals with the specific values of the scholarship provider."
            </div>

            <h2 className="text-2xl font-bold text-brand-midnight mt-10 mb-4">Conclusion</h2>
            <p className="mb-6 leading-relaxed">
              Applying for scholarships requires time, patience, and meticulous attention to detail. Start early, tailor every application, and don't hesitate to seek professional guidance.
            </p>
          </div>
          
          <div className="mt-16 pt-8 border-t border-brand-steel/10 flex flex-wrap gap-2">
            {["Study Abroad", "Funding", "Admissions", "Canada"].map((tag) => (
              <span key={tag} className="bg-brand-ice text-brand-muted px-3 py-1 rounded-md text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* CTA Footer */}
      <section className="py-20 bg-brand-deep text-center text-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-6">Need Help With Your Application?</h2>
          <p className="text-xl text-brand-soft/80 mb-10 max-w-2xl mx-auto">
            Our consultants can help review your SOP and ensure your application stands out.
          </p>
          <Button size="lg" asChild className="bg-brand-gold text-brand-midnight hover:bg-brand-gold/90 text-lg h-14 px-10">
            <Link href="/consultation">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
