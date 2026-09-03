"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Globe, 
  FileText, 
  HelpCircle, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Overview", href: "/admin", icon: <LayoutDashboard size={20} /> },
    { name: "Consultations", href: "/admin/consultations", icon: <CalendarCheck size={20} /> },
    { name: "Countries", href: "/admin/countries", icon: <Globe size={20} /> },
    { name: "Resources", href: "/admin/resources", icon: <FileText size={20} /> },
    { name: "FAQs", href: "/admin/faqs", icon: <HelpCircle size={20} /> },
    { name: "Users", href: "/admin/users", icon: <Users size={20} /> },
    { name: "Settings", href: "/admin/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-brand-soft/20 overflow-hidden font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-brand-midnight/80 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-brand-midnight text-brand-soft transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
        <div className="h-16 flex items-center px-6 border-b border-brand-steel/10 justify-between lg:justify-center">
          <Link href="/admin" className="text-brand-gold font-bold text-xl tracking-tight">
            APEX <span className="text-white">Admin</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-brand-soft hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`) && item.href !== "/admin";
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive 
                    ? "bg-brand-ocean text-white font-medium shadow-sm" 
                    : "text-brand-steel hover:bg-brand-steel/10 hover:text-white"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-brand-steel/10">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors w-full text-brand-steel hover:bg-red-500/10 hover:text-red-400">
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-brand-steel/10 flex items-center justify-between px-4 lg:px-8 z-10 shadow-sm">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-brand-midnight hover:text-brand-ocean"
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center gap-4 ml-auto">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-brand-midnight">Admin User</p>
              <p className="text-xs text-brand-muted">admin@apexgetaways.com</p>
            </div>
            <div className="w-10 h-10 bg-brand-deep rounded-full text-white flex items-center justify-center font-bold">
              AU
            </div>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 relative z-0">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
      
    </div>
  );
}
