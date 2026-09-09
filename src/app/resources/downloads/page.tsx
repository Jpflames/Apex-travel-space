import { Button } from "@/components/ui/button";
import { Download, FileText, Search } from "lucide-react";

export const metadata = {
  title: "Downloads | APEX Getaway & Services",
  description: "Download guides, checklists, and workbooks for your international journey.",
};

const mockDownloads = [
  { id: "1", title: "Study Abroad Pre-Departure Checklist", category: "Study Abroad", size: "1.2 MB", type: "PDF" },
  { id: "2", title: "Student Visa Application Guide (UK)", category: "Visa Resources", size: "3.5 MB", type: "PDF" },
  { id: "3", title: "IELTS Speaking Practice Workbook", category: "IELTS & CELPIP", size: "2.1 MB", type: "PDF" },
  { id: "4", title: "Proof of Funds Calculator", category: "Visa Resources", size: "500 KB", type: "XLSX" },
];

export default function DownloadsPage() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <section className="bg-brand-soft text-brand-midnight pt-24 pb-20 relative">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Free <span className="text-brand-ocean">Downloads</span>
          </h1>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto">
            Access our library of expertly crafted resources, checklists, and guides.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto max-w-5xl">
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-steel/10 mb-12 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search downloads..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-steel/20 focus:outline-none focus:ring-2 focus:ring-brand-ocean/50"
              />
            </div>
            <div className="w-full md:w-64">
              <select className="w-full px-4 py-3 rounded-xl border border-brand-steel/20 focus:outline-none focus:ring-2 focus:ring-brand-ocean/50 bg-white text-brand-text">
                <option value="">All Categories</option>
                <option value="Study Abroad">Study Abroad</option>
                <option value="Visa Resources">Visa Resources</option>
                <option value="IELTS & CELPIP">IELTS & CELPIP</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {mockDownloads.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-white border border-brand-steel/10 rounded-2xl hover:border-brand-ocean/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <div className="w-12 h-12 bg-brand-soft text-brand-ocean rounded-xl flex items-center justify-center shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-midnight text-lg">{item.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-brand-muted mt-1">
                      <span className="bg-brand-soft px-2 py-0.5 rounded-md text-brand-ocean font-medium">{item.category}</span>
                      <span>{item.type}</span>
                      <span>{item.size}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full sm:w-auto border-brand-ocean/20 text-brand-ocean hover:bg-brand-ocean hover:text-white transition-colors">
                  <Download size={16} className="mr-2" /> Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
