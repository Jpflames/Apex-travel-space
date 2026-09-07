import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-midnight py-4 text-white/78 border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs font-semibold md:flex-row">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a href="tel:+2348062841276" className="inline-flex items-center gap-2 hover:text-white">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20"><Phone size={14} /></span>
            +234 806 284 1276
          </a>
          <a href="mailto:apexgetaways.travel@gmail.com" className="inline-flex items-center gap-2 hover:text-white">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20"><Mail size={14} /></span>
            apexgetaways.travel@gmail.com
          </a>
          <span className="inline-flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20"><MapPin size={14} /></span>
            Abuja, Nigeria
          </span>
        </div>
        <div className="flex items-center gap-3">
          {[
            { label: "fb", href: "https://www.facebook.com/share/1EujeCDKCj/?mibextid=wwXIfr" },
            { label: "ig", href: "https://www.instagram.com/apex_getaways_travel_ltd?igsi=MTd1Y3o0OGxqZGl4aA==" },
            { label: "tt", href: "https://www.tiktok.com/@visa_travel_support?_r=1&_t=ZS-99QYQgeJCqb" }
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="grid h-7 w-7 place-items-center rounded-full bg-[#0c3973] text-[0.65rem] font-black uppercase text-white hover:bg-[#e6ac24] hover:text-[#061733]">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
