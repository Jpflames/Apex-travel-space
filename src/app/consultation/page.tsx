"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight, User, Mail, Phone, CheckCircle2, UploadCloud, FileImage, Loader2 } from "lucide-react";
import { db } from "@/lib/firebase/client";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const services = [
  "Study Abroad & Admissions",
  "Visa Assistance",
  "IELTS & CELPIP Support",
  "General Consultation",
  "Family Consultation",
  "Business / Corporate"
];

const mockedBookings: Record<string, string[]> = {
  "2024-06-15": ["10:00 AM", "02:00 PM"],
  "2024-06-16": ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"],
};

const allTimeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", 
  "05:00 PM", "06:00 PM"
];

export default function ConsultationPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [waUrl, setWaUrl] = useState("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    if (mockedBookings[date] && mockedBookings[date].length === allTimeSlots.length) {
      alert("This Date has been Picked Please Pick another dates available");
      setSelectedDate("");
      setSelectedTime("");
      return;
    }
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleNext = () => {
    if (step === 1 && !selectedService) return;
    if (step === 2 && (!selectedDate || !selectedTime)) return;
    if (step === 3 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone)) return;
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!receiptFile) return;

    setIsSubmitting(true);
    setBookingError("");
    
    try {
      // 1. Upload receipt to Cloudinary
      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'demo'}/image/upload`;
      const formDataUpload = new FormData();
      formDataUpload.append("file", receiptFile);
      formDataUpload.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'unsigned_preset');

      const cloudinaryRes = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formDataUpload
      });
      
      if (!cloudinaryRes.ok) {
        throw new Error("Failed to upload receipt to Cloudinary");
      }
      
      const cloudinaryData = await cloudinaryRes.json();
      const downloadURL = cloudinaryData.secure_url;

      // 2. Save booking to Firestore
      const fullName = `${formData.firstName} ${formData.lastName}`;
      await addDoc(collection(db, "consultations"), {
        name: fullName,
        email: formData.email,
        phone: formData.phone,
        service: selectedService,
        date: selectedDate,
        time: selectedTime,
        message: formData.message,
        receiptUrl: downloadURL,
        status: "pending",
        createdAt: serverTimestamp()
      });

      // 3. Send email to admin
      await fetch("https://formsubmit.co/ajax/apexgetaways.travel@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "New Consultation Booked",
            Status: "Requires Admin Confirmation",
            Service: selectedService,
            Date: selectedDate,
            Time: selectedTime,
            Name: fullName,
            Email: formData.email,
            Phone: formData.phone,
            Message: formData.message
        })
      });

      // 4. Setup WhatsApp message and move to success step
      const waMessage = `Hello Apex Getaways, I just booked a consultation.\n\n*Name:* ${fullName}\n*Service:* ${selectedService}\n*Date:* ${selectedDate}\n*Time:* ${selectedTime}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n\nI have uploaded my payment receipt on the website for confirmation.`;
      const generatedWaUrl = `https://wa.me/2349072855744?text=${encodeURIComponent(waMessage)}`;
      setWaUrl(generatedWaUrl);

      // 5. Move to success step
      setStep(5);
    } catch(error) {
       console.error("Failed to submit booking", error);
       setBookingError("Failed to submit your booking. Please check your internet connection and try again.");
    } finally {
       setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen pb-16">
      {/* Header */}
      <section className="bg-brand-midnight text-white pt-16 pb-24 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-brand-gold font-bold mb-2 uppercase tracking-wide text-sm">Consultation</p>
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            Book Your Session
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
            Get expert guidance tailored to your goals. Our working hours are 9 AM - 6 PM.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 -mt-12 relative z-20">
        <div className="mx-auto max-w-4xl bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          {step < 5 && (
            <div className="flex items-center justify-between mb-12 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 -z-10 rounded-full">
                <div 
                  className="h-full bg-brand-gold rounded-full transition-all duration-300"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                ></div>
              </div>
              
              {[1, 2, 3, 4].map((num) => (
                <div 
                  key={num}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                    step >= num 
                      ? "bg-brand-gold text-white border-4 border-white shadow-sm" 
                      : "bg-gray-200 text-gray-500 border-4 border-white"
                  }`}
                >
                  {step > num ? <CheckCircle2 size={16} /> : num}
                </div>
              ))}
            </div>
          )}

          {/* Wizard Content */}
          <div className="min-h-[400px]">
            
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-black text-brand-midnight mb-6">1. Select a Service</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`p-5 rounded-2xl border-2 text-left transition-all ${
                        selectedService === service
                          ? "border-brand-gold bg-brand-gold/5"
                          : "border-gray-100 hover:border-gray-200 bg-white"
                      }`}
                    >
                      <h3 className={`font-bold ${selectedService === service ? "text-brand-gold" : "text-brand-midnight"}`}>
                        {service}
                      </h3>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-black text-brand-midnight mb-6">2. Choose Date & Time</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-bold text-sm text-gray-700 mb-3">Select a Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input 
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold text-gray-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-sm text-gray-700 mb-3">Select a Time</label>
                    {!selectedDate ? (
                      <div className="p-4 bg-gray-50 rounded-xl text-sm text-gray-500 text-center border border-gray-100">
                        Please select a date first
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {allTimeSlots.map((slot) => {
                          const isBooked = (mockedBookings[selectedDate] || []).includes(slot);
                          return (
                            <button
                              key={slot}
                              disabled={isBooked}
                              onClick={() => setSelectedTime(slot)}
                              className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                                isBooked
                                  ? "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50"
                                  : selectedTime === slot
                                  ? "bg-brand-midnight text-white border-brand-midnight"
                                  : "bg-white border-gray-200 text-gray-700 hover:border-brand-midnight"
                              }`}
                            >
                              {slot} {isBooked && "(Booked)"}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Your Details */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-black text-brand-midnight mb-6">3. Your Details</h2>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input 
                        type="text" 
                        required
                        placeholder="First Name" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold" 
                      />
                    </div>
                    <input 
                      type="text" 
                      required
                      placeholder="Last Name" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold" 
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="email" 
                      required
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold" 
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="tel" 
                      required
                      placeholder="Phone Number" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold" 
                    />
                  </div>
                  <textarea 
                    placeholder="Any specific questions or topics you want to discuss?" 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold resize-none"
                  ></textarea>
                </form>
              </div>
            )}

            {/* Step 4: Payment Invoice & Receipt Upload */}
            {step === 4 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-2xl font-black text-brand-midnight mb-6">4. Payment & Confirmation</h2>
                
                <div className="bg-amber-50 border border-brand-gold/30 rounded-2xl p-6 mb-8">
                  <h3 className="font-bold text-brand-midnight text-lg mb-4">Invoice Details</h3>
                  <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                    Please make a payment for your consultation to the account below. Your booking will remain pending until an administrator verifies your uploaded receipt.
                  </p>
                  
                  <div className="bg-white p-5 rounded-xl border border-brand-gold/20 shadow-sm space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="text-gray-500 text-sm">Amount to Pay</span>
                      <span className="font-black text-lg text-brand-gold tracking-wider">₦10,000</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="text-gray-500 text-sm">Account Number</span>
                      <span className="font-black text-lg text-brand-midnight tracking-wider">8062841276</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="text-gray-500 text-sm">Bank Name</span>
                      <span className="font-bold text-brand-midnight">OPAY</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Account Name</span>
                      <span className="font-bold text-brand-midnight uppercase">Joy Ojochenemi Christian</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block font-bold text-brand-midnight mb-3">Upload Payment Receipt</label>
                  <div className="relative border-2 border-dashed border-brand-gold/40 rounded-2xl p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors">
                    <input 
                      type="file" 
                      accept="image/*,.pdf" 
                      required
                      onChange={(e) => setReceiptFile(e.target.files?.[0] || null)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center gap-3">
                      <UploadCloud className="text-brand-gold w-10 h-10" />
                      <div>
                        {receiptFile ? (
                          <div className="flex items-center gap-2 text-brand-midnight font-bold">
                            <FileImage size={18} />
                            {receiptFile.name}
                          </div>
                        ) : (
                          <>
                            <span className="font-bold text-brand-midnight block">Click to upload or drag and drop</span>
                            <span className="text-sm text-gray-500">SVG, PNG, JPG or PDF (max. 5MB)</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {bookingError && (
                  <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                    {bookingError}
                  </div>
                )}
              </div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <div className="animate-in zoom-in-95 duration-500 flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-black text-brand-midnight mb-4">Booking Pending Verification</h2>
                <p className="text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
                  Thank you! We have received your consultation booking and payment receipt. 
                  <strong className="block mt-2 text-brand-midnight">Please click the button below to send your booking information to our WhatsApp to finalize.</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={waUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white font-bold py-3 px-8 rounded-xl hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    Send Details to WhatsApp
                  </a>
                  <Link href="/" className="bg-gray-100 text-brand-midnight font-bold py-3 px-8 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center">
                    Return to Home
                  </Link>
                </div>
              </div>
            )}
            
          </div>

          {/* Navigation */}
          {step < 5 && (
            <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center">
              {step > 1 ? (
                <button 
                  onClick={handleBack}
                  disabled={isSubmitting}
                  className="text-gray-500 font-bold text-sm hover:text-brand-midnight transition-colors px-4 py-2 disabled:opacity-50"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}

              {step < 4 ? (
                <button 
                  onClick={handleNext}
                  disabled={(step === 1 && !selectedService) || (step === 2 && (!selectedDate || !selectedTime)) || (step === 3 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone))}
                  className="bg-brand-midnight text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-ocean transition-colors disabled:opacity-50 flex items-center gap-2 shadow-sm"
                >
                  {step === 3 ? "Continue to Payment" : "Next Step"} <ArrowRight size={16} />
                </button>
              ) : (
                <button 
                  onClick={handleSubmit}
                  disabled={!receiptFile || isSubmitting}
                  className="bg-brand-gold text-brand-midnight font-black py-3 px-8 rounded-xl hover:bg-[#d6a020] transition-colors flex items-center gap-2 shadow-sm disabled:opacity-50 disabled:bg-gray-200 disabled:text-gray-400"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} /> Processing...
                    </>
                  ) : (
                    <>
                      Submit Booking & Notify <CheckCircle2 size={18} />
                    </>
                  )}
                </button>
              )}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
