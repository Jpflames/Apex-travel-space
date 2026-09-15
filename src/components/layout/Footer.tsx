import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-brand-midnight py-4 text-white/78 border-t border-white/5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs font-semibold md:flex-row">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a href="tel:+2349072855744" className="inline-flex items-center gap-2 hover:text-white">
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/20"><Phone size={14} /></span>
            +234 907 285 5744
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
            { icon: <FaFacebookF size={12} />, href: "https://www.facebook.com/share/1EujeCDKCj/?mibextid=wwXIfr" },
            { icon: <FaInstagram size={12} />, href: "https://www.instagram.com/apex_getaways_travel_ltd?igsi=MTd1Y3o0OGxqZGl4aA==" },
            { icon: <FaTiktok size={12} />, href: "https://www.tiktok.com/@visa_travel_support?_r=1&_t=ZS-99QYQgeJCqb" },
            { icon: <FaWhatsapp size={14} />, href: "https://wa.me/2349072855744" }
          ].map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="grid h-7 w-7 place-items-center rounded-full bg-[#0c3973] text-white hover:bg-[#e6ac24] hover:text-[#061733] transition-colors">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
