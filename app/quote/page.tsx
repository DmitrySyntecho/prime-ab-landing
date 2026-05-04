"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

const STEPS = [
  { id: "event-type", label: "Event Type" },
  { id: "budget", label: "Budget" },
  { id: "location", label: "Location" },
  { id: "details", label: "Details" },
]

const EVENT_TYPES = [
  { name: "Corporate Event", image: "/corporate-event-conference-stage-lighting.jpg" },
  { name: "Experiential Marketing", image: "/experiential-marketing-brand-activation-booth.jpg" },
  { name: "Fashion Show", image: "/fashion-show-runway-lighting-models.jpg" },
  { name: "Trade Show", image: "/trade-show-exhibition-booth-display.jpg" },
  { name: "Brand Activation", image: "/brand-activation-event-interactive-display.jpg" },
  { name: "Conference", image: "/conference-presentation-stage-speakers.jpg" },
  { name: "Festival", image: "/music-festival-outdoor-stage-concert.jpg" },
  { name: "Wedding", image: "/wedding-reception-elegant-lighting-decor.jpg" },
  { name: "Award Show / Gala", image: "/award-show-gala-ceremony-stage-elegant.jpg" },
  { name: "Private Film Production", image: "/film-production-studio-camera-equipment.jpg" },
  { name: "Other", image: "/event-production-av-equipment-stage.jpg" },
]

const BUDGET_RANGES = [
  "$50K or more",
  "$30K - $50K",
  "$20K - $30K",
  "$15K - $20K",
  "$10K - $15K",
  "$7K - $10K",
  "$5K - $7K",
  "$3K - $5K",
  "$1K - $3K",
  "Under $1K",
]

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    eventType: "",
    budget: "",
    location: "",
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  })

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#0a1628"
    document.body.style.backgroundColor = "#0a1628"

    return () => {
      document.documentElement.style.backgroundColor = ""
      document.body.style.backgroundColor = ""
    }
  }, [])

  const handleEventTypeSelect = (type: string) => {
    setFormData({ ...formData, eventType: type })
    setCurrentStep(1)
  }

  const handleBudgetSelect = (budget: string) => {
    setFormData({ ...formData, budget: budget })
    setCurrentStep(2)
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.location) {
      setCurrentStep(3)
    }
  }

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Quote request submitted! We will contact you shortly.")
  }

  return (
    <>
      <style jsx global>{`
        html, body {
          background-color: #0a1628 !important;
        }
      `}</style>

      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a1628", minHeight: "100vh" }}>
        {/* Header */}
        <header
          className="flex items-center justify-between px-6 py-4 border-b border-white/10"
          style={{ backgroundColor: "#0a1628" }}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/images/prime-line-av-logo-dark-bg.svg"
              alt="Prime Line AV"
              width={200}
              height={75}
              className="h-12 w-auto"
            />
          </Link>
          <Link href="/" className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <X className="w-6 h-6 text-white" />
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-6 py-8" style={{ backgroundColor: "#0a1628" }}>
          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              {STEPS.map((step, index) => (
                <div
                  key={step.id}
                  className="h-1.5 flex-1 rounded-md transition-colors duration-300"
                  style={{
                    backgroundColor: index <= currentStep ? "#D4A853" : "#3B5998",
                  }}
                />
              ))}
            </div>
            <p className="text-center text-sm mt-3 text-gray-400">{STEPS[currentStep].label}</p>
          </div>

          {/* Form Content */}
          <div className="max-w-3xl mx-auto">
            {/* Step 1: Event Type */}
            {currentStep === 0 && (
              <div className="animate-fadeIn">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-balance text-white">
                  What type of event are you planning?
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {EVENT_TYPES.map((type) => (
                    <button
                      key={type.name}
                      onClick={() => handleEventTypeSelect(type.name)}
                      className="group relative overflow-hidden rounded-xl transition-all hover:scale-[1.02] hover:ring-2 hover:ring-[#4ADE80] bg-white/10 aspect-[4/3]"
                    >
                      <Image
                        src={type.image || "/placeholder.svg"}
                        alt={type.name}
                        fill
                        className="object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <span className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm md:text-base text-left">
                        {type.name}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Social Proof */}
                <div className="mt-12 flex justify-center">
                  <div className="rounded-md px-6 py-3 text-sm bg-[#1a2d4a] text-white">
                    <span className="text-[#4ADE80] font-bold">127 Brands</span> requested a quote in the past 24 hours.
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Budget */}
            {currentStep === 1 && (
              <div className="animate-fadeIn">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-balance text-white">
                  What's your estimated budget?
                </h1>

                <div className="flex flex-col gap-3 max-w-md mx-auto">
                  {BUDGET_RANGES.map((budget) => (
                    <button
                      key={budget}
                      onClick={() => handleBudgetSelect(budget)}
                      className="py-4 px-6 rounded-md text-lg font-semibold transition-all hover:scale-[1.02] bg-white text-[#0a1628]"
                    >
                      {budget}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleBack}
                  className="flex items-center justify-center gap-2 mx-auto mt-8 font-semibold transition-colors hover:opacity-80 text-white"
                >
                  BACK
                </button>
              </div>
            )}

            {/* Step 3: Location */}
            {currentStep === 2 && (
              <div className="animate-fadeIn">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-balance text-white">
                  Where is your event located?
                </h1>
                <p className="text-center mb-10 text-gray-400">City or Zip Code</p>

                <form onSubmit={handleLocationSubmit} className="max-w-md mx-auto">
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Enter city or zip code"
                    className="w-full py-4 px-6 rounded-2xl text-lg focus:outline-none bg-white text-[#0a1628] border-2 border-dashed border-gray-400"
                  />

                  <button
                    type="submit"
                    className="w-full mt-6 py-4 px-6 rounded-md text-lg font-semibold transition-all hover:opacity-90 bg-[#3B5998] text-white"
                  >
                    Continue
                  </button>
                </form>

                <button
                  onClick={handleBack}
                  className="flex items-center justify-center gap-2 mx-auto mt-6 font-semibold transition-colors hover:opacity-80 text-white"
                >
                  BACK
                </button>
              </div>
            )}

            {/* Step 4: Contact Details */}
            {currentStep === 3 && (
              <div className="animate-fadeIn">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-balance text-white">
                  Almost there! Let's get your details.
                </h1>
                <p className="text-center mb-10 text-gray-400">We'll reach out with your personalized quote.</p>

                <form onSubmit={handleDetailsSubmit} className="max-w-md mx-auto space-y-4">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    required
                    className="w-full py-4 px-6 rounded-2xl text-lg focus:outline-none bg-white text-[#0a1628]"
                  />

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address"
                    required
                    className="w-full py-4 px-6 rounded-2xl text-lg focus:outline-none bg-white text-[#0a1628]"
                  />

                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Phone Number"
                    required
                    className="w-full py-4 px-6 rounded-2xl text-lg focus:outline-none bg-white text-[#0a1628]"
                  />

                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full py-4 px-6 rounded-2xl text-lg focus:outline-none bg-white text-[#0a1628]"
                  />

                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your event (optional)"
                    rows={3}
                    className="w-full py-4 px-6 rounded-2xl text-lg focus:outline-none resize-none bg-white text-[#0a1628]"
                  />

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-md text-lg font-semibold transition-all hover:opacity-90 bg-[#3B5998] text-white"
                  >
                    Get My Quote
                  </button>
                </form>

                <button
                  onClick={handleBack}
                  className="flex items-center justify-center gap-2 mx-auto mt-6 font-semibold transition-colors hover:opacity-80 text-white"
                >
                  BACK
                </button>

                {/* Social Proof */}
                <div className="mt-10 flex justify-center">
                  <div className="rounded-md px-6 py-3 text-sm bg-[#1a2d4a] text-white">
                    <span className="text-[#D4A853] font-bold">1,986 Events</span> produced successfully this year.
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  )
}
