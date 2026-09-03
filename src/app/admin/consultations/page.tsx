"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter, MoreVertical, Eye, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

const mockConsultations = [
  { id: "C-1045", name: "Sarah Johnson", email: "sarah.j@example.com", phone: "+1234567890", service: "Study Abroad", date: "Aug 28, 2026", time: "10:00 AM", status: "pending" },
  { id: "C-1044", name: "Michael Chen", email: "m.chen@example.com", phone: "+0987654321", service: "Visa Assistance", date: "Aug 28, 2026", time: "11:30 AM", status: "confirmed" },
  { id: "C-1043", name: "Aisha Patel", email: "a.patel@example.com", phone: "+1122334455", service: "IELTS Support", date: "Aug 29, 2026", time: "09:00 AM", status: "pending" },
  { id: "C-1042", name: "David Kim", email: "dkim@example.com", phone: "+5544332211", service: "General Consultation", date: "Aug 27, 2026", time: "14:00 PM", status: "completed" },
  { id: "C-1041", name: "Emma Watson", email: "emma.w@example.com", phone: "+9988776655", service: "Family Consultation", date: "Aug 26, 2026", time: "10:00 AM", status: "cancelled" },
];

export default function AdminConsultationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredConsultations = mockConsultations.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-brand-midnight">Consultations</h1>
          <p className="text-brand-muted">Manage and track all booking requests.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-brand-ocean hover:bg-brand-ocean/90 text-white">Export CSV</Button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-brand-steel/10 shadow-sm overflow-hidden flex flex-col h-[calc(100vh-200px)] min-h-[500px]">
        {/* Toolbar */}
        <div className="p-4 border-b border-brand-steel/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-brand-soft/30">
          <div className="relative w-full sm:max-w-xs">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" />
            <input 
              type="text" 
              placeholder="Search by ID, name, email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-brand-steel/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-ocean/50"
            />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter size={18} className="text-brand-muted" />
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-auto text-sm border border-brand-steel/20 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-brand-ocean/50"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white sticky top-0 shadow-sm z-10">
              <tr className="text-brand-muted text-xs uppercase tracking-wider border-b border-brand-steel/10">
                <th className="p-4 font-semibold w-24">ID</th>
                <th className="p-4 font-semibold">Client Details</th>
                <th className="p-4 font-semibold">Service</th>
                <th className="p-4 font-semibold">Schedule</th>
                <th className="p-4 font-semibold text-center">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-steel/10 text-brand-midnight text-sm">
              {filteredConsultations.map((c) => (
                <tr key={c.id} className="hover:bg-brand-soft/30 transition-colors group">
                  <td className="p-4 font-mono font-medium text-brand-ocean">{c.id}</td>
                  <td className="p-4">
                    <div className="font-bold">{c.name}</div>
                    <div className="text-brand-muted text-xs mt-1">{c.email} • {c.phone}</div>
                  </td>
                  <td className="p-4 font-medium">{c.service}</td>
                  <td className="p-4 text-brand-muted">
                    <span className="font-medium text-brand-midnight">{c.date}</span><br/>
                    <span className="text-xs">{c.time} (WAT)</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                      c.status === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                      c.status === 'confirmed' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      c.status === 'completed' ? 'bg-green-50 text-green-700 border-green-200' :
                      'bg-red-50 text-red-700 border-red-200'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {c.status === 'pending' && (
                        <button className="p-1.5 text-green-600 hover:bg-green-50 rounded" title="Confirm">
                          <CheckCircle size={18} />
                        </button>
                      )}
                      {(c.status === 'pending' || c.status === 'confirmed') && (
                        <button className="p-1.5 text-red-600 hover:bg-red-50 rounded" title="Cancel">
                          <XCircle size={18} />
                        </button>
                      )}
                      <Link href={`/admin/consultations/${c.id}`} className="p-1.5 text-brand-ocean hover:bg-brand-ocean/10 rounded" title="View Details">
                        <Eye size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredConsultations.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-brand-muted">
                    No consultations found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
