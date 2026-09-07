import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { articlesData } from "@/data/articles";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articlesData.find(a => a.slug === params.slug);
  if (!article) return { title: "Article Not Found | APEX Getaways" };
  return {
    title: `${article.title} | APEX Getaways`,
    description: `Read about ${article.title} in our resources section.`,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesData.find(a => a.slug === params.slug);
  
  if (!article) {
    notFound();
  }

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
                {article.category}
              </span>
              <span className="text-brand-muted flex items-center"><Calendar size={14} className="mr-1" /> {article.date}</span>
              <span className="text-brand-muted flex items-center"><Clock size={14} className="mr-1" /> {article.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-brand-midnight mb-6 leading-tight">
              {article.title}
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
            {article.content}
          </div>
          
          <div className="mt-16 pt-8 border-t border-brand-steel/10 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
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
            Our consultants can help review your documents and ensure your application stands out.
          </p>
          <Button size="lg" asChild className="bg-brand-gold text-brand-midnight hover:bg-brand-gold/90 text-lg h-14 px-10">
            <Link href="/consultation">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
