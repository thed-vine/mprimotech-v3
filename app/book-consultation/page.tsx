"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect, useMemo } from "react"
import Script from "next/script"
import {
  Clock,
  CheckCircle,
  User,
  FileSearch,
  AlertOctagon,
  ChevronRight,
  Loader2,
  Star
} from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"

// ... (ServiceCard component stays the same as before) ...
const ServiceCard = ({ type, isSelected, onClick }: any) => (
  <button
    onClick={onClick}
    className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-200 flex items-start gap-4 relative group
      ${isSelected 
        ? "border-primary bg-primary/5 shadow-md ring-1 ring-primary/20" 
        : "border-slate-100 bg-white hover:border-slate-300 hover:shadow-sm"
      }`}
  >
    <div className={`p-3 rounded-lg transition-colors flex-shrink-0 ${isSelected ? type.color : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"}`}>
      {type.icon}
    </div>
    
    <div className="flex-1 min-w-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 gap-2">
        <span className={`font-bold text-base sm:text-lg ${isSelected ? "text-primary" : "text-foreground"}`}>
          {type.title}
        </span>
        <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider bg-white px-2 py-1 rounded-full border border-slate-200 text-muted-foreground w-fit">
          {type.duration}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {type.description}
      </p>
    </div>

    {isSelected && (
      <div className="absolute top-3 right-3 text-primary animate-in fade-in zoom-in duration-300">
        <CheckCircle className="h-5 w-5 fill-primary text-white" />
      </div>
    )}
  </button>
)

export default function BookConsultationPage() {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState<string>("")
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [availableSlots, setAvailableSlots] = useState<{[key: string]: string[]}>({})

  // 1. ADDED: State to hold form values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: ""
  })

  // Booking Data
  const consultationTypes = [
    {
      id: "onsite",
      title: "On-Site Admin & Workflow Review",
      duration: "Half-Day / Full-Day",
      description: "We visit your care home or venue in person, shadow your team, and map bottlenecks.",
      icon: <FileSearch className="h-5 w-5" />,
      color: "bg-blue-100 text-blue-700"
    },
    {
      id: "discovery",
      title: "Introductory Discovery Call",
      duration: "20 Min",
      description: "A friendly call to discuss your current paperwork challenges and see if we can help.",
      icon: <User className="h-5 w-5" />,
      color: "bg-purple-100 text-purple-700"
    },
    {
      id: "urgent",
      title: "Urgent Admin Bottleneck",
      duration: "Prompt Callback",
      description: "Critical compliance deadline, audit, or handover emergency needing immediate help.",
      icon: <AlertOctagon className="h-5 w-5" />,
      color: "bg-amber-100 text-amber-700"
    },
  ]

  // Mock Dates logic - memoized to prevent re-renders
  const dates = useMemo(() => {
    const today = new Date()
    return Array.from({ length: 14 }, (_, i) => {
      const d = new Date()
      d.setDate(today.getDate() + i + 1)
      return {
        day: d.toLocaleDateString("en-GB", { weekday: "short" }),
        date: d.getDate(),
        month: d.toLocaleDateString("en-GB", { month: "short" }),
        fullDate: d,
        available: ![0, 6].includes(d.getDay())
      }
    })
  }, [])

  const timeSlots = ["09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"]

  // Initialize slot availability cleanly without fake countdown intervals
  useEffect(() => {
    const slots: {[key: string]: string[]} = {}
    dates.forEach(date => {
      if (date.available) {
        const dateKey = date.fullDate.toDateString()
        slots[dateKey] = timeSlots
      }
    })
    setAvailableSlots(slots)
  }, [dates])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [step])

  // 2. ADDED: Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step === 1 && selectedType === "urgent") {
      setStep(3)
    } else {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step === 3 && selectedType === "urgent") {
        setStep(1)
    } else {
        setStep(step - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const selectedServiceTitle = consultationTypes.find(t => t.id === selectedType)?.title
    const fullDateString = selectedDate 
      ? dates.find(d => d.date === selectedDate)?.fullDate.toDateString() 
      : "Prompt Callback Request"

    try {
      // Use the same working EmailJS service from contact form
      const serviceId = "service_vaypdyf";
      const templateId = "template_6nmdk5d"; 
      const publicKey = "ktFHFC2F9khjQQDVg";

      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        to_email: "support@mprimotech.com",
        service_type: selectedServiceTitle,
        requested_date: fullDateString,
        requested_time: selectedTime || "ASAP",
        message: formData.description,
        to_name: "MPrimo Support Team",
        subject: selectedType === "urgent" 
          ? `🚨 URGENT: Admin Bottleneck Request from ${formData.firstName} ${formData.lastName}`
          : `New Consultation Request: ${selectedServiceTitle}`
      };

      // @ts-ignore
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSubmitting(false)
      setStep(4)
    } catch (error) {
      console.error('Failed to send email:', error)
      alert('Failed to send. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
      <Script id="emailjs-init">
        {`
          (function(){
            emailjs.init("ktFHFC2F9khjQQDVg");
          })();
        `}
      </Script>
      <Header />
      <main className="bg-background min-h-screen pb-20">
        {/* ... (Header sections same as before) ... */}
        
        {/* Mobile Header */}
        <div className="bg-primary text-white py-12 px-4 text-center sm:hidden">
            <h1 className="text-3xl font-bold mb-2">Book an On-Site Review</h1>
            <p className="text-primary-foreground/80 text-sm">Direct access to UK automation specialists.</p>
        </div>

        {/* Desktop Header */}
        <section className="hidden sm:block bg-primary pt-20 pb-40 px-4 text-center text-white relative overflow-hidden">
           <BackgroundBeams className="absolute inset-0 opacity-30" />
           <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
             <h1 className="text-5xl font-bold mb-6">Stop playing phone tag.</h1>
             <p className="text-xl text-primary-foreground/80 leading-relaxed">
               Book an on-site admin review or discovery chat with our UK team.
             </p>
           </div>
        </section>

        {/* Main Floating Card */}
        <section className="relative px-3 sm:px-6 lg:px-8 sm:-mt-24">
          <div className="mx-auto max-w-6xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
            
            {/* LEFT: Trust Signals */}
            <div className={`bg-slate-50 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 lg:w-5/12 ${step > 1 ? "hidden lg:block" : "block"}`}>
               <div className="sticky top-6">
                    <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase mb-6 block">
                        Why book with us?
                    </span>
                    
                    <h2 className="text-2xl font-bold text-foreground mb-8">
                        Practical Specialists, <span className="text-primary">Not Salespeople.</span>
                    </h2>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm h-fit">
                                <Clock className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Respect For Time</h3>
                                <p className="text-sm text-muted-foreground mt-1">No long slide decks. We dive straight into where your admin gets bogged down.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm h-fit">
                                <CheckCircle className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">On-Site & Hands-On</h3>
                                <p className="text-sm text-muted-foreground mt-1">We come directly to your facility to see how your team works in reality.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white p-2 rounded-lg border border-slate-200 shadow-sm h-fit">
                                <FileSearch className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Clear Action Plan</h3>
                                <p className="text-sm text-muted-foreground mt-1">You receive a straightforward map of bottlenecks and an actionable automation plan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT: Booking Wizard */}
            <div className="p-4 sm:p-10 lg:w-7/12 min-h-[500px] flex flex-col relative">
                
                {/* Step Indicators (Same as previous) */}
                {step < 4 && (
                     <div className="flex items-center gap-2 mb-8 text-sm font-medium text-muted-foreground">
                        <span className={`flex items-center gap-2 ${step >= 1 ? "text-primary" : ""}`}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? "bg-primary text-white" : "bg-slate-200"}`}>1</span>
                            <span className="hidden sm:inline">Service</span>
                        </span>
                        <div className="w-8 h-[1px] bg-slate-200"></div>
                        <span className={`flex items-center gap-2 ${step >= 2 ? "text-primary" : ""}`}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? "bg-primary text-white" : "bg-slate-200"}`}>2</span>
                            <span className="hidden sm:inline">Date & Time</span>
                        </span>
                        <div className="w-8 h-[1px] bg-slate-200"></div>
                        <span className={`flex items-center gap-2 ${step >= 3 ? "text-primary" : ""}`}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 3 ? "bg-primary text-white" : "bg-slate-200"}`}>3</span>
                            <span className="hidden sm:inline">Details</span>
                        </span>
                     </div>
                )}

                {/* --- STEP 1: SERVICE --- */}
                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <h2 className="text-xl sm:text-2xl font-bold mb-6">How can we help?</h2>
                        <div className="space-y-3">
                            {consultationTypes.map((type) => (
                                <ServiceCard 
                                    key={type.id} 
                                    type={type} 
                                    isSelected={selectedType === type.id} 
                                    onClick={() => setSelectedType(type.id)}
                                />
                            ))}
                        </div>
                        <div className="mt-8 flex justify-end">
                            <Button 
                                onClick={handleNext} 
                                disabled={!selectedType}
                                size="lg"
                                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold transition-all"
                            >
                                Continue <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                )}

                {/* --- STEP 2: DATE & TIME --- */}
                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <h2 className="text-xl sm:text-2xl font-bold mb-2">Select a Time</h2>
                        <p className="text-muted-foreground mb-6 text-sm">Times are in your local timezone.</p>

                        <div className="mb-6">
                            <label className="text-xs font-bold uppercase text-muted-foreground mb-3 block">Available Dates</label>
                            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                                {dates.map((date, i) => (
                                    <button
                                        key={i}
                                        disabled={!date.available}
                                        onClick={() => setSelectedDate(date.date)}
                                        className={`flex flex-col items-center justify-center min-w-[70px] h-[80px] rounded-xl border transition-all
                                            ${selectedDate === date.date 
                                                ? "bg-primary text-white border-primary shadow-md transform scale-105" 
                                                : date.available 
                                                    ? "bg-white border-slate-200 hover:border-primary/50" 
                                                    : "bg-slate-50 border-slate-100 opacity-40 cursor-not-allowed"
                                            }`}
                                    >
                                        <span className="text-xs font-medium uppercase opacity-80">{date.day}</span>
                                        <span className="text-xl font-bold">{date.date}</span>
                                        <span className="text-[10px] uppercase opacity-80">{date.month}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {selectedDate && (
                             <div className="mb-8 animate-in fade-in zoom-in duration-300">
                                <label className="text-xs font-bold uppercase text-muted-foreground mb-3 block">
                                  Available Times
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {(availableSlots[dates.find(d => d.date === selectedDate)?.fullDate.toDateString() || ''] || []).map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`py-3 px-4 rounded-lg text-sm font-semibold border transition-all
                                                ${selectedTime === time 
                                                     ? "bg-primary text-primary-foreground border-primary shadow-md" 
                                                     : "bg-white border-slate-200 hover:border-primary/50 text-slate-700"
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-auto flex justify-between">
                            <Button variant="ghost" onClick={handleBack} className="text-muted-foreground hover:text-foreground">
                                Back
                            </Button>
                            <Button 
                                onClick={handleNext} 
                                disabled={!selectedDate || !selectedTime}
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-white"
                            >
                                Continue <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                )}

                {/* --- STEP 3: DETAILS & SUBMIT --- */}
                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500 h-full flex flex-col">
                        <h2 className="text-xl sm:text-2xl font-bold mb-6">
                            {selectedType === 'urgent' ? 'Urgent Admin Support Details' : 'Your Details'}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {selectedType === 'urgent' && (
                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 text-amber-800 text-sm">
                                    <AlertOctagon className="h-5 w-5 flex-shrink-0 text-amber-600" />
                                    <p><strong>Priority Status:</strong> This will alert our UK operations team for a prompt callback.</p>
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">First Name</label>
                                    <input required name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Last Name</label>
                                    <input required name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Work Email</label>
                                <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">
                                    {selectedType === 'urgent' ? "Describe the Admin Bottleneck or Deadline" : "What admin, paperwork, or rota challenges are you facing?"}
                                </label>
                                <textarea required name="description" value={formData.description} onChange={handleInputChange} rows={4} className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"></textarea>
                            </div>

                            <div className="mt-8 flex justify-between pt-4 border-t border-slate-100">
                                <Button type="button" variant="ghost" onClick={handleBack}>
                                    Back
                                </Button>
                                <Button 
                                    type="submit" 
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto min-w-[150px]"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin h-5 w-5" /> : "Confirm Booking Request"}
                                </Button>
                            </div>
                            
                            <p className="text-center text-xs text-muted-foreground mt-2">
                                *Your message will be sent directly to our team.
                            </p>
                        </form>
                    </div>
                )}

                {/* --- STEP 4: SUCCESS --- */}
                {step === 4 && (
                    <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500 py-12">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                            <CheckCircle className="h-10 w-10" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Booking Confirmed</h2>
                        
                        <p className="text-slate-600 mb-8 max-w-sm">
                          Thank you for your booking. We have sent you a ticket confirming your appointment. We look forward to speaking with you soon!
                        </p>

                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                            <Link href="/">Back to Home</Link>
                        </Button>
                    </div>
                )}

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}