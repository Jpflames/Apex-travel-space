import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "FAQs | APEX Getaway & Services",
  description: "Frequently asked questions about our services and international travel.",
};

const faqData = [
  {
    category: "Study Abroad",
    items: [
      { q: "How do I choose the right program and university?", a: "Our consultants will assess your academic background, career goals, and budget to recommend the best programs and institutions tailored specifically to you." },
      { q: "Do I need to take an English proficiency test?", a: "In most cases, yes. Tests like IELTS or CELPIP are required for non-native English speakers applying to institutions in English-speaking countries." }
    ]
  },
  {
    category: "Visa",
    items: [
      { q: "Can you guarantee that my visa will be approved?", a: "No. APEX provides professional guidance to maximize your chances, but final visa decisions are made entirely by the respective immigration authorities." },
      { q: "What happens if my visa is refused?", a: "If your visa is refused, our experts can review the refusal notes, assess the reasons, and guide you on reapplication strategies if applicable." }
    ]
  },
  {
    category: "IELTS & CELPIP",
    items: [
      { q: "Which test should I take for Canada PR?", a: "Both IELTS (General Training) and CELPIP (General) are accepted for Canadian Permanent Residency. We can help you decide which format suits you best." },
    ]
  }
];

export default function FaqsPage() {
  return (
    <div className="flex flex-col flex-1 bg-brand-soft/20">
      <section className="bg-brand-midnight text-white pt-24 pb-20">
        <div className="container px-4 mx-auto text-center max-w-3xl">
          <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Frequently Asked <span className="text-brand-gold">Questions</span>
          </h1>
          <p className="text-xl text-brand-soft/80">
            Find answers to common questions about studying abroad, visa applications, and language testing.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto max-w-4xl">
          {faqData.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-brand-midnight mb-6 pb-2 border-b border-brand-steel/10">
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-brand-steel/10 px-6 py-2 shadow-sm">
                {section.items.map((item, i) => (
                  <AccordionItem key={i} value={`item-${index}-${i}`} className="border-b-brand-steel/10">
                    <AccordionTrigger className="text-left font-semibold text-brand-midnight hover:text-brand-ocean text-lg py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-brand-muted text-base leading-relaxed pb-6">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="mt-16 bg-brand-ocean rounded-3xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-brand-soft/90 mb-8 max-w-2xl mx-auto">
              If you couldn't find the answer you were looking for, don't hesitate to reach out to our team directly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="secondary" size="lg" asChild className="bg-white text-brand-ocean hover:bg-brand-soft font-bold">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" asChild className="bg-brand-gold text-brand-midnight hover:bg-brand-gold/90 font-bold">
                <Link href="/consultation">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
