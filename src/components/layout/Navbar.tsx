"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ApexLogo, navItems } from "@/components/apex/ApexComponents";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-brand-midnight text-white">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">
        <ApexLogo light={true} />
        
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-7 text-sm font-bold transition hover:text-brand-gold ${active ? "text-brand-gold" : "text-white"}`}
              >
                <span className="inline-flex items-center gap-1">
                  {item.label}
                  {item.label === "Services" && <ChevronDown size={13} />}
                </span>
                {active && <span className="absolute bottom-4 left-0 h-0.5 w-full bg-brand-gold" />}
              </Link>
            );
          })}
        </nav>
        
        <div className="hidden lg:block">
          <Link href="/consultation" className="inline-flex h-10 items-center gap-2 rounded-full border-2 border-brand-gold px-5 text-sm font-bold text-brand-gold hover:bg-brand-gold hover:text-brand-midnight transition-colors">
            Book a Consultation
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-brand-gold hover:bg-white/10 lg:hidden">
              <Menu size={28} />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="border-[#163864] bg-brand-midnight text-white">
            <div className="mt-8">
              <ApexLogo light={true} />
            </div>
            <nav className="mt-10 flex flex-col gap-5">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link href={item.href} className="text-lg font-bold hover:text-brand-gold">
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <SheetClose asChild>
              <Link href="/consultation" className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-5 text-sm font-extrabold text-brand-midnight">
                <Calendar size={17} /> Book a Consultation
              </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
