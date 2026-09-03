import Link from "next/link";
import { Plus, MoreHorizontal, Globe, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Manage Countries | Admin",
};

const countries = [
  { id: 1, name: "Canada", status: "Active", programs: 124 },
  { id: 2, name: "United States", status: "Active", programs: 89 },
  { id: 3, name: "United Kingdom", status: "Active", programs: 156 },
  { id: 4, name: "Australia", status: "Inactive", programs: 45 },
  { id: 5, name: "Germany", status: "Active", programs: 62 },
];

export default function AdminCountriesPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-brand-midnight">Manage Countries</h1>
          <p className="text-brand-muted">Add, edit, or remove study destinations.</p>
        </div>
        <Button className="bg-brand-ocean hover:bg-brand-ocean/90 text-white gap-2">
          <Plus size={16} /> Add Country
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-brand-steel/10 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-brand-steel/10 flex items-center justify-between gap-4">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" size={16} />
            <input 
              type="text" 
              placeholder="Search countries..." 
              className="w-full pl-9 pr-4 py-2 bg-brand-soft/20 border border-brand-steel/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-ocean/50"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-soft/50 text-brand-muted text-sm uppercase tracking-wider">
                <th className="p-4 font-semibold">Country</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Programs</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-steel/10 text-brand-midnight text-sm">
              {countries.map((c) => (
                <tr key={c.id} className="hover:bg-brand-soft/30 transition-colors">
                  <td className="p-4 font-bold flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-brand-soft/50 flex items-center justify-center text-brand-ocean">
                      <Globe size={16} />
                    </div>
                    {c.name}
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      c.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-brand-steel/20 text-brand-steel'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="p-4 text-brand-muted font-medium">{c.programs} Programs</td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-brand-muted hover:text-brand-midnight rounded-lg hover:bg-brand-soft/50 transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
