import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { GoldButton } from "@/components/apex/ApexComponents";

export const metadata = {
  title: "Contact Us | APEX Getaway & Services",
  description: "Contact APEX Getaway & Services and Travels Limited.",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 flex flex-col min-h-screen pb-16">
      {/* Header */}
      <section className="bg-brand-midnight text-white pt-16 pb-24 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-brand-gold font-bold mb-2 uppercase tracking-wide text-sm">Get in Touch</p>
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
            We're here to help you take the next step toward your global journey. Reach out to us using the form below or our contact details.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 -mt-12 relative z-20">
        <div className="mx-auto max-w-5xl bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="grid md:grid-cols-[1fr_350px] gap-12">
            
            {/* Form */}
            <div>
              <h2 className="text-2xl font-black text-brand-midnight mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all" />
                  <input type="text" placeholder="Last Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all" />
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all text-gray-500">
                  <option value="">Subject / Service of Interest</option>
                  <option value="study">Study Abroad</option>
                  <option value="visa">Visa Assistance</option>
                  <option value="ielts">IELTS/CELPIP</option>
                  <option value="other">Other</option>
                </select>
                <textarea placeholder="Your Message" rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:bg-white transition-all resize-none"></textarea>
                
                <button type="button" className="bg-brand-midnight text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-ocean transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-8 md:border-l border-gray-100 md:pl-12">
              <div>
                <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-4">Contact Information</h3>
                
                <div className="flex gap-4 items-start mb-6">
                  <div className="bg-gray-50 p-3 rounded-full text-brand-gold shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-midnight text-sm">Our Office</h4>
                    <p className="text-gray-600 text-sm mt-1">Abuja, Nigeria</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start mb-6">
                  <div className="bg-gray-50 p-3 rounded-full text-brand-gold shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-midnight">Phone Number</h3>
                    <p className="text-gray-600 text-sm mt-1">+234 907 285 5744</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-gray-50 p-3 rounded-full text-brand-gold shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-midnight text-sm">Email</h4>
                    <p className="text-gray-600 text-sm mt-1">apexgetaways.travel@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-ocean text-white p-6 rounded-2xl">
                <h4 className="font-bold mb-2 flex items-center gap-2"><MessageCircle size={18} /> WhatsApp Chat</h4>
                <p className="text-white/80 text-xs mb-4">Need immediate assistance? Chat with our experts on WhatsApp.</p>
                <Link href="#" className="bg-white text-brand-ocean text-xs font-bold py-2 px-4 rounded-lg inline-block hover:bg-gray-50 transition-colors">
                  Start Chat
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
