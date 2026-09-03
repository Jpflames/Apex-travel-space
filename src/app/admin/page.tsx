import { CalendarCheck, Users, Globe, FileText, ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Admin Dashboard | APEX Getaways",
};

export default function AdminOverviewPage() {
  const stats = [
    { name: "Total Consultations", value: "124", icon: <CalendarCheck size={24} />, trend: "+12%", color: "text-brand-ocean", bg: "bg-brand-ocean/10" },
    { name: "Pending Requests", value: "18", icon: <Clock size={24} />, trend: "-2%", color: "text-amber-500", bg: "bg-amber-500/10" },
    { name: "Active Destinations", value: "24", icon: <Globe size={24} />, trend: "+4%", color: "text-brand-gold", bg: "bg-brand-gold/10" },
    { name: "Published Articles", value: "45", icon: <FileText size={24} />, trend: "+8%", color: "text-brand-deep", bg: "bg-brand-deep/10" },
  ];

  const recentConsultations = [
    { id: "C-1045", name: "Sarah Johnson", service: "Study Abroad", date: "Aug 28, 2026", time: "10:00 AM", status: "pending" },
    { id: "C-1044", name: "Michael Chen", service: "Visa Assistance", date: "Aug 28, 2026", time: "11:30 AM", status: "confirmed" },
    { id: "C-1043", name: "Aisha Patel", service: "IELTS Support", date: "Aug 29, 2026", time: "09:00 AM", status: "pending" },
    { id: "C-1042", name: "David Kim", service: "General Consultation", date: "Aug 27, 2026", time: "14:00 PM", status: "completed" },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-brand-midnight">Dashboard Overview</h1>
          <p className="text-brand-muted">Welcome back. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-brand-steel/20 bg-white">Download Report</Button>
          <Button className="bg-brand-ocean hover:bg-brand-ocean/90 text-white">Add New Content</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-brand-steel/10 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                {stat.icon}
              </div>
              <div className={`flex items-center text-sm font-bold ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.trend} <ArrowUpRight size={16} className="ml-1" />
              </div>
            </div>
            <div>
              <p className="text-brand-muted font-medium mb-1">{stat.name}</p>
              <h3 className="text-3xl font-bold text-brand-midnight">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-brand-steel/10 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-brand-steel/10 flex items-center justify-between">
            <h2 className="text-xl font-bold text-brand-midnight">Recent Consultations</h2>
            <Link href="/admin/consultations" className="text-sm font-medium text-brand-ocean hover:text-brand-deep">
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-soft/50 text-brand-muted text-sm uppercase tracking-wider">
                  <th className="p-4 font-semibold">ID</th>
                  <th className="p-4 font-semibold">Client</th>
                  <th className="p-4 font-semibold">Service</th>
                  <th className="p-4 font-semibold">Schedule</th>
                  <th className="p-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-steel/10 text-brand-midnight text-sm">
                {recentConsultations.map((c) => (
                  <tr key={c.id} className="hover:bg-brand-soft/30 transition-colors">
                    <td className="p-4 font-mono font-medium text-brand-ocean">{c.id}</td>
                    <td className="p-4 font-bold">{c.name}</td>
                    <td className="p-4">{c.service}</td>
                    <td className="p-4 text-brand-muted">{c.date} <br/> {c.time}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        c.status === 'pending' ? 'bg-amber-100 text-amber-700' :
                        c.status === 'confirmed' ? 'bg-brand-ocean/10 text-brand-ocean' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-brand-steel/10 shadow-sm p-6">
          <h2 className="text-xl font-bold text-brand-midnight mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start border-brand-steel/20 text-brand-midnight h-12" asChild>
              <Link href="/admin/countries/new"><Globe size={18} className="mr-3 text-brand-ocean" /> Add Destination</Link>
            </Button>
            <Button variant="outline" className="w-full justify-start border-brand-steel/20 text-brand-midnight h-12" asChild>
              <Link href="/admin/resources/new"><FileText size={18} className="mr-3 text-brand-ocean" /> Write Article</Link>
            </Button>
            <Button variant="outline" className="w-full justify-start border-brand-steel/20 text-brand-midnight h-12" asChild>
              <Link href="/admin/users/new"><Users size={18} className="mr-3 text-brand-ocean" /> Add Staff Member</Link>
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
}
