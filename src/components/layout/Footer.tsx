import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-midnight py-4 text-white/78 border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs font-semibold md:flex-row">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a href="tel:+2348101234567" className="inline-flex items-center gap-2 hover:text-white">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20"><Phone size={14} /></span>
            +234 801 234 5678
          </a>
          <a href="mailto:info@apexgetaways.com" className="inline-flex items-center gap-2 hover:text-white">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20"><Mail size={14} /></span>
            info@apexgetaways.com
          </a>
          <span className="inline-flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20"><MapPin size={14} /></span>
            Abuja, Nigeria
          </span>
        </div>
        <div className="flex items-center gap-3">
          {["f", "ig", "in"].map((item) => (
            <Link key={item} href="#" className="grid h-7 w-7 place-items-center rounded-full bg-[#0c3973] text-[0.65rem] font-black text-white hover:bg-[#e6ac24] hover:text-[#061733]">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
