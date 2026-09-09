"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Home, MessageCircle, Calendar, Clock } from "lucide-react";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref") || "PENDING-CONFIRMATION";
  const service = searchParams.get("service") || "Consultation";
  const date = searchParams.get("date") || "TBD";
  const time = searchParams.get("time") || "TBD";

  // Format date if valid
  let formattedDate = date;
  if (date !== "TBD") {
    try {
      formattedDate = new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    } catch(e) {}
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-brand-steel/10 p-8 md:p-12 text-center max-w-2xl w-full">
      <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
        <CheckCircle2 size={48} />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-brand-midnight mb-4">Request Received</h1>
      <p className="text-brand-muted text-lg mb-8">
        Thank you for choosing APEX Getaway & Services. Your consultation request has been successfully submitted.
      </p>
      
      <div className="bg-brand-soft/50 rounded-2xl border border-brand-steel/10 p-6 mb-8 text-left">
        <h3 className="font-bold text-brand-midnight text-lg mb-4 border-b border-brand-steel/10 pb-2">Booking Details</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-1">Reference No.</p>
            <p className="font-mono text-brand-ocean font-bold">{ref.substring(0,8).toUpperCase()}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-1">Service</p>
            <p className="font-medium text-brand-midnight">{service}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-1">Date</p>
            <p className="font-medium text-brand-midnight flex items-center gap-2">
              <Calendar size={16} className="text-brand-ocean"/> {formattedDate}
            </p>
          </div>
          <div>
            <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-1">Time (Africa/Lagos)</p>
            <p className="font-medium text-brand-midnight flex items-center gap-2">
              <Clock size={16} className="text-brand-ocean"/> {time}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 text-blue-800 p-4 rounded-xl border border-blue-100 mb-10 text-sm text-left">
        <h4 className="font-bold mb-2">Next Steps:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Check your email for a confirmation message.</li>
          <li>Our consultant will review your details.</li>
          <li>We will contact you via your preferred contact method at the scheduled time.</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" asChild className="bg-brand-midnight text-white hover:bg-brand-midnight/90">
          <Link href="/">
            <Home size={18} className="mr-2" /> Return Home
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="border-green-500 text-green-700 hover:bg-green-50 hover:text-green-800">
          <Link href="#">
            <MessageCircle size={18} className="mr-2" /> Chat on WhatsApp
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <div className="flex flex-col flex-1 bg-brand-deep min-h-screen py-20 px-4 items-center justify-center">
      <Suspense fallback={<div className="text-white text-xl">Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </div>
  );
}
