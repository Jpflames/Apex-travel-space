"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, ArrowRight, User, Mail, Phone, MessageCircle, CheckCircle2 } from "lucide-react";

const services = [
  "Study Abroad & Admissions",
  "Visa Assistance",
  "IELTS & CELPIP Support",
  "General Consultation",
  "Family Consultation",
  "Business / Corporate"
];

// Mock booked slots for demonstration
const mockedBookings: Record<string, string[]> = {
  "2024-06-15": ["10:00 AM", "02:00 PM"],
  "2024-06-16": ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"], // Fully booked
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

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    
    // Check if fully booked
    if (mockedBookings[date] && mockedBookings[date].length === allTimeSlots.length) {
      alert("This Date has been Picked Please Pick another dates available");
      setSelectedDate("");
      setSelectedTime("");
      return;
    }

    setSelectedDate(date);
    setSelectedTime("");
  };

  const availableSlots = selectedDate 
    ? allTimeSlots.filter(slot => !(mockedBookings[selectedDate] || []).includes(slot))
    : [];

  const handleNext = () => {
    if (step === 1 && !selectedService) return;
    if (step === 2 && (!selectedDate || !selectedTime)) return;
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "2349072855744"; // Official WhatsApp number
    const message = `Hello APEX Getaway & Services, I would like to book a consultation.
    
*Service:* ${selectedService}
*Date:* ${selectedDate}
*Time:* ${selectedTime}

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Send email using FormSubmit AJAX
    try {
      await fetch("https://formsubmit.co/ajax/apexgetaways.travel@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "New Consultation Booking",
            Service: selectedService,
            Date: selectedDate,
            Time: selectedTime,
            Name: `${formData.firstName} ${formData.lastName}`,
            Email: formData.email,
            Phone: formData.phone,
            Message: formData.message
        })
      });
    } catch(error) {
       console.error("Failed to send email", error);
    }

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
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
          
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 -z-10 rounded-full">
              <div 
                className="h-full bg-brand-gold rounded-full transition-all duration-300"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              ></div>
            </div>
            
            {[1, 2, 3].map((num) => (
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
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-gray-700"
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
                
                {/* Summary Card */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Service</p>
                    <p className="font-bold text-brand-midnight">{selectedService}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Date & Time</p>
                    <p className="font-bold text-brand-midnight">{selectedDate} at {selectedTime}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
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
            
          </div>

          {/* Navigation */}
          <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center">
            {step > 1 ? (
              <button 
                onClick={handleBack}
                className="text-gray-500 font-bold text-sm hover:text-brand-midnight transition-colors px-4 py-2"
              >
                Back
              </button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <button 
                onClick={handleNext}
                disabled={(step === 1 && !selectedService) || (step === 2 && (!selectedDate || !selectedTime))}
                className="bg-brand-midnight text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-ocean transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                Next Step <ArrowRight size={16} />
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="bg-[#25D366] text-white font-bold py-3 px-10 rounded-xl hover:bg-[#1ebd5b] transition-colors flex items-center gap-2 shadow-sm"
              >
                Book Now <ArrowRight size={18} />
              </button>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
