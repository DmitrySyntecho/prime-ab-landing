"use client"

import type React from "react"
import { useEffect, useState } from "react"
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  Calendar,
  MapPin,
  User,
  Phone,
  Mail,
  Sparkles,
  Truck,
  Box,
  Layers,
  Volume2,
  Monitor,
  Lightbulb,
  Radio,
  Video,
  PartyPopper,
  CheckCircle2,
} from "lucide-react"

interface QuoteFormProps {
  isOpen: boolean
  onClose: () => void
  serviceName?: string
  serviceQuestions?: unknown[]
}

const eventTypes = [
  "Corporate Event",
  "Conference",
  "Trade Show / Expo",
  "Brand Activation",
  "Experiential Marketing",
  "Fashion Show",
  "Festival / Concert",
  "Product Launch",
  "Award Show / Gala",
  "Wedding / Private Event",
  "Studio / Film Production",
  "Other",
]

const serviceOptions = [
  { id: "full-av", title: "Full AV Production", icon: Layers },
  { id: "led", title: "LED Wall / Visuals", icon: Monitor },
  { id: "audio", title: "Sound System", icon: Volume2 },
  { id: "lighting", title: "Event Lighting", icon: Lightbulb },
  { id: "staging", title: "Staging & Truss", icon: Box },
  { id: "stream", title: "Live Streaming", icon: Radio },
  { id: "video", title: "Video Production", icon: Video },
  { id: "drape", title: "Pipe & Drape", icon: Sparkles },
]

const stepDefs = [
  { id: 1, title: "Rental Info" },
  { id: 2, title: "Contact" },
  { id: 3, title: "Event Details" },
  { id: 4, title: "Review" },
]

interface FormData {
  eventType: string
  services: string[]
  serviceModel: "full-service" | "pickup" | ""
  fullName: string
  phone: string
  email: string
  dropoffDate: string
  dropoffTime: string
  pickupDate: string
  pickupTime: string
  address: string
  city: string
  state: string
  zip: string
  message: string
  promoCode: string
  agreeTerms: boolean
}

const empty: FormData = {
  eventType: "",
  services: [],
  serviceModel: "",
  fullName: "",
  phone: "",
  email: "",
  dropoffDate: "",
  dropoffTime: "",
  pickupDate: "",
  pickupTime: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  message: "",
  promoCode: "",
  agreeTerms: false,
}

export function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>(empty)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", onKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setData((d) => ({ ...d, [key]: value }))
  }

  const toggleService = (id: string) => {
    setData((d) => ({
      ...d,
      services: d.services.includes(id) ? d.services.filter((s) => s !== id) : [...d.services, id],
    }))
  }

  const canNext = () => {
    if (step === 1) return data.eventType && data.services.length > 0 && data.serviceModel
    if (step === 2) return data.fullName.trim() && data.phone.trim() && data.email.trim()
    if (step === 3) return data.address.trim() && data.city.trim() && data.state.trim() && data.zip.trim()
    if (step === 4) return data.agreeTerms
    return false
  }

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
    else handleSubmit()
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const reset = () => {
    setStep(1)
    setData(empty)
    setSubmitted(false)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      style={{ background: "rgba(3,7,10,0.80)", backdropFilter: "blur(8px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-[24px] border border-[#4ADE80]/20 backdrop-blur-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,16,24,0.96) 0%, rgba(10,26,34,0.96) 100%)",
          boxShadow:
            "0 40px 80px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none rounded-[24px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 0%, rgba(74,222,128,0.10) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <button
          onClick={reset}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-[10px] bg-white/[0.05] border border-white/[0.10] hover:bg-white/[0.10] hover:border-white/[0.20] flex items-center justify-center text-white/65 hover:text-white transition-all"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative z-[1] p-6 sm:p-8 md:p-10">
          {!submitted ? (
            <>
              <div className="mb-7">
                <span className="ds-pill mb-4">
                  <span className="dot" />
                  Get a Free Quote
                </span>
                <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-extrabold tracking-[-0.025em] leading-[1.18] text-white">
                  Tell us about your <span className="ds-accent-text">event</span>
                </h2>
                <p className="text-white/55 text-[14px] mt-2">
                  Step {step} of 4 · Free consultation · Response within hours
                </p>
              </div>

              <div className="mb-8">
                <div className="grid grid-cols-4 gap-2">
                  {stepDefs.map((s) => {
                    const isActive = step === s.id
                    const isDone = step > s.id
                    return (
                      <div key={s.id} className="flex flex-col items-start gap-2">
                        <div
                          className={`w-full h-1 rounded-full transition-all ${
                            isDone || isActive
                              ? "bg-gradient-to-r from-[#4ADE80] to-[#16A34A]"
                              : "bg-white/[0.08]"
                          }`}
                          style={{
                            boxShadow: isActive ? "0 0 12px rgba(74,222,128,0.4)" : undefined,
                          }}
                        />
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-bold ${
                              isDone
                                ? "bg-[#4ADE80] text-[#03070a]"
                                : isActive
                                ? "bg-[#4ADE80]/15 border border-[#4ADE80]/40 text-[#4ADE80]"
                                : "bg-white/[0.04] border border-white/[0.08] text-white/40"
                            }`}
                          >
                            {isDone ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : s.id}
                          </div>
                          <span
                            className={`text-[11px] tracking-[0.06em] uppercase font-semibold hidden sm:inline ${
                              isActive ? "text-white" : isDone ? "text-[#4ADE80]" : "text-white/40"
                            }`}
                          >
                            {s.title}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="animate-fadeIn">
                {step === 1 && <Step1 data={data} update={update} toggleService={toggleService} />}
                {step === 2 && <Step2 data={data} update={update} />}
                {step === 3 && <Step3 data={data} update={update} />}
                {step === 4 && <Step4 data={data} update={update} />}
              </div>

              <div className="mt-9 flex items-center justify-between gap-3">
                <button
                  onClick={() => (step > 1 ? setStep(step - 1) : onClose())}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.12] text-white/85 font-semibold text-[14px] backdrop-blur-md hover:bg-white/[0.08] transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {step === 1 ? "Cancel" : "Back"}
                </button>

                <button
                  onClick={handleNext}
                  disabled={!canNext()}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-br from-[#4ADE80] to-[#16A34A] text-[#03070a] font-extrabold text-[14px] tracking-[0.01em] transition-all disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:-translate-y-0.5"
                  style={{
                    boxShadow:
                      "0 12px 36px -8px rgba(74,222,128,0.55), inset 0 1px 0 rgba(255,255,255,0.3)",
                  }}
                >
                  {step === 4 ? "Submit Request" : "Continue"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            <SuccessState onClose={reset} />
          )}
        </div>
      </div>
    </div>
  )
}

function Step1({
  data,
  update,
  toggleService,
}: {
  data: FormData
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void
  toggleService: (id: string) => void
}) {
  return (
    <div className="space-y-7">
      <div>
        <Label icon={PartyPopper}>Event Type</Label>
        <Select
          value={data.eventType}
          onChange={(v) => update("eventType", v)}
          placeholder="Select event type…"
          options={eventTypes}
        />
      </div>

      <div>
        <Label icon={Sparkles}>Choose Services</Label>
        <p className="text-white/45 text-[12px] mb-3">Please check all that apply</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
          {serviceOptions.map(({ id, title, icon: Icon }) => {
            const active = data.services.includes(id)
            return (
              <button
                key={id}
                type="button"
                onClick={() => toggleService(id)}
                className={`group relative p-3 rounded-[12px] border text-left transition-all ${
                  active
                    ? "border-[#4ADE80]/45 bg-[#4ADE80]/10"
                    : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.18]"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-[10px] flex items-center justify-center mb-2 transition-all ${
                    active
                      ? "bg-[#4ADE80] text-[#03070a]"
                      : "bg-[#4ADE80]/12 border border-[#4ADE80]/22 text-[#4ADE80]"
                  }`}
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.8} />
                </div>
                <div className="text-[12px] font-semibold text-white leading-tight">{title}</div>
                {active && (
                  <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#4ADE80] flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-[#03070a]" strokeWidth={4} />
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <Label icon={Truck}>Service Model</Label>
        <div className="grid sm:grid-cols-2 gap-3">
          <ServiceModelOption
            active={data.serviceModel === "full-service"}
            onClick={() => update("serviceModel", "full-service")}
            title="Full Service"
            sub="Delivery · Set Up · Operate · Pick Up"
            icon={Truck}
          />
          <ServiceModelOption
            active={data.serviceModel === "pickup"}
            onClick={() => update("serviceModel", "pickup")}
            title="Pick Up Yourself"
            sub="You handle delivery & setup"
            icon={Box}
          />
        </div>
        {data.serviceModel === "pickup" && (
          <p className="mt-3 px-3.5 py-2.5 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-200 text-[12px]">
            Note: pickup is unavailable in this area. We currently only offer full service with a $2,500 minimum order.
          </p>
        )}
      </div>
    </div>
  )
}

function Step2({
  data,
  update,
}: {
  data: FormData
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void
}) {
  return (
    <div className="space-y-5">
      <p className="text-white/55 text-[14px]">Who will be renting the equipment?</p>
      <Field
        icon={User}
        label="Full Name *"
        value={data.fullName}
        onChange={(v) => update("fullName", v)}
        placeholder="Jane Doe"
      />
      <Field
        icon={Phone}
        label="Phone *"
        value={data.phone}
        onChange={(v) => update("phone", v)}
        placeholder="(786) 933-8488"
        type="tel"
      />
      <Field
        icon={Mail}
        label="Email *"
        value={data.email}
        onChange={(v) => update("email", v)}
        placeholder="jane@brand.com"
        type="email"
      />
    </div>
  )
}

function Step3({
  data,
  update,
}: {
  data: FormData
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void
}) {
  return (
    <div className="space-y-6">
      <div>
        <Label icon={Calendar}>Schedule</Label>
        <div className="grid sm:grid-cols-2 gap-3">
          <SmallField label="Drop-Off Date" value={data.dropoffDate} onChange={(v) => update("dropoffDate", v)} type="date" />
          <SmallField label="Drop-Off Time" value={data.dropoffTime} onChange={(v) => update("dropoffTime", v)} type="time" />
          <SmallField label="Pick-Up Date" value={data.pickupDate} onChange={(v) => update("pickupDate", v)} type="date" />
          <SmallField label="Pick-Up Time" value={data.pickupTime} onChange={(v) => update("pickupTime", v)} type="time" />
        </div>
      </div>

      <div>
        <Label icon={MapPin}>Event Location</Label>
        <div className="space-y-3">
          <Field
            label="Full Address + Apt/Suite #"
            value={data.address}
            onChange={(v) => update("address", v)}
            placeholder="Street address"
          />
          <div className="grid sm:grid-cols-3 gap-3">
            <SmallField label="City" value={data.city} onChange={(v) => update("city", v)} />
            <SmallField label="State" value={data.state} onChange={(v) => update("state", v)} />
            <SmallField label="ZIP Code" value={data.zip} onChange={(v) => update("zip", v)} />
          </div>
        </div>
      </div>

      <div>
        <Label>Additional Information</Label>
        <textarea
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          rows={3}
          placeholder="Anything else we should know about the event…"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white text-[14px] placeholder-white/35 focus:outline-none focus:border-[#4ADE80]/50 transition-colors resize-none"
        />
      </div>

      <div>
        <Label>Promo Code</Label>
        <SmallField label="" value={data.promoCode} onChange={(v) => update("promoCode", v)} placeholder="Enter promo code (optional)" />
      </div>
    </div>
  )
}

function Step4({
  data,
  update,
}: {
  data: FormData
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void
}) {
  const summaryRow = (label: string, value: string) => (
    <div className="flex items-start justify-between gap-4 py-2 border-b border-white/[0.06] last:border-0">
      <span className="text-white/45 text-[12px] tracking-[0.04em] uppercase font-semibold">{label}</span>
      <span className="text-white text-[13px] text-right">{value || "—"}</span>
    </div>
  )

  const services = data.services
    .map((id) => serviceOptions.find((o) => o.id === id)?.title)
    .filter(Boolean)
    .join(", ")

  return (
    <div className="space-y-6">
      <p className="text-white/55 text-[14px]">Review your details before submitting.</p>

      <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] p-5">
        {summaryRow("Event Type", data.eventType)}
        {summaryRow("Services", services)}
        {summaryRow(
          "Service Model",
          data.serviceModel === "full-service"
            ? "Full Service"
            : data.serviceModel === "pickup"
            ? "Pickup"
            : "",
        )}
        {summaryRow("Name", data.fullName)}
        {summaryRow("Phone", data.phone)}
        {summaryRow("Email", data.email)}
        {summaryRow("Drop-Off", `${data.dropoffDate} ${data.dropoffTime}`.trim())}
        {summaryRow("Pick-Up", `${data.pickupDate} ${data.pickupTime}`.trim())}
        {summaryRow(
          "Address",
          `${data.address}, ${data.city}, ${data.state} ${data.zip}`.replace(/(^,\s|,\s$)/g, ""),
        )}
        {data.promoCode && summaryRow("Promo", data.promoCode)}
      </div>

      <label className="flex items-start gap-3 cursor-pointer group">
        <span
          className={`mt-0.5 w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center transition-all ${
            data.agreeTerms
              ? "bg-[#4ADE80] border border-[#4ADE80]"
              : "bg-white/[0.04] border border-white/[0.18] group-hover:border-white/[0.30]"
          }`}
        >
          {data.agreeTerms && <Check className="w-3 h-3 text-[#03070a]" strokeWidth={4} />}
        </span>
        <input
          type="checkbox"
          checked={data.agreeTerms}
          onChange={(e) => update("agreeTerms", e.target.checked)}
          className="sr-only"
        />
        <span className="text-white/55 text-[12px] leading-[1.6]">
          By submitting, you provide consent to receive sales/marketing calls, texts, and emails from Prime Line AV at
          the contact info above (including via autodialer or prerecorded voice). Consent is not required to do
          business with us. You also agree to our Privacy Policy and Terms, which include an arbitration agreement and
          class action waiver. Your information is kept private and safe.
        </span>
      </label>
    </div>
  )
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center py-8">
      <div
        className="w-20 h-20 rounded-full bg-[#4ADE80]/15 border border-[#4ADE80]/30 flex items-center justify-center mx-auto mb-6"
        style={{ boxShadow: "0 0 40px rgba(74,222,128,0.35)" }}
      >
        <CheckCircle2 className="w-10 h-10 text-[#4ADE80]" strokeWidth={2} />
      </div>
      <h2 className="text-[28px] sm:text-[34px] font-extrabold tracking-[-0.025em] leading-[1.18] text-white mb-3">
        Quote Request <span className="ds-accent-text">Sent.</span>
      </h2>
      <p className="text-white/60 text-[15px] max-w-md mx-auto mb-8">
        Our team will review your request and reach out within hours with a custom quote and 3D render.
      </p>
      <button
        onClick={onClose}
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-br from-[#4ADE80] to-[#16A34A] text-[#03070a] font-extrabold text-[14px] tracking-[0.01em] transition-all hover:-translate-y-0.5"
        style={{
          boxShadow: "0 12px 36px -8px rgba(74,222,128,0.55), inset 0 1px 0 rgba(255,255,255,0.3)",
        }}
      >
        Done
      </button>
    </div>
  )
}

function Label({
  children,
  icon: Icon,
}: {
  children: React.ReactNode
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>
}) {
  return (
    <div className="flex items-center gap-2 mb-3">
      {Icon && (
        <span className="w-7 h-7 rounded-[8px] bg-[#4ADE80]/12 border border-[#4ADE80]/22 flex items-center justify-center text-[#4ADE80]">
          <Icon className="w-3.5 h-3.5" strokeWidth={2} />
        </span>
      )}
      <span className="text-white text-[13px] font-semibold tracking-[0.02em]">{children}</span>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon: Icon,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>
}) {
  return (
    <div>
      {Icon ? (
        <Label icon={Icon}>{label}</Label>
      ) : (
        <label className="block text-white text-[13px] font-semibold mb-2">{label}</label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white text-[14px] placeholder-white/35 focus:outline-none focus:border-[#4ADE80]/50 transition-colors"
      />
    </div>
  )
}

function SmallField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      {label && (
        <label className="block text-white/55 text-[11px] tracking-[0.06em] uppercase font-semibold mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3.5 py-2.5 rounded-[10px] bg-white/[0.04] border border-white/[0.10] text-white text-[14px] placeholder-white/35 focus:outline-none focus:border-[#4ADE80]/50 transition-colors"
      />
    </div>
  )
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder: string
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none px-4 py-3 pr-10 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white text-[14px] focus:outline-none focus:border-[#4ADE80]/50 transition-colors cursor-pointer"
      >
        <option value="" disabled className="bg-[#06121a] text-white/45">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[#06121a] text-white">
            {opt}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </div>
  )
}

function ServiceModelOption({
  active,
  onClick,
  title,
  sub,
  icon: Icon,
}: {
  active: boolean
  onClick: () => void
  title: string
  sub: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 p-4 rounded-[14px] border text-left transition-all ${
        active
          ? "border-[#4ADE80]/45 bg-[#4ADE80]/10"
          : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.18]"
      }`}
    >
      <div
        className={`w-11 h-11 rounded-[12px] flex items-center justify-center transition-all ${
          active
            ? "bg-[#4ADE80] text-[#03070a]"
            : "bg-[#4ADE80]/12 border border-[#4ADE80]/22 text-[#4ADE80]"
        }`}
      >
        <Icon className="w-5 h-5" strokeWidth={1.8} />
      </div>
      <div className="flex-1">
        <div className="text-white font-bold text-[14px]">{title}</div>
        <div className="text-white/45 text-[12px]">{sub}</div>
      </div>
      {active && (
        <span className="w-5 h-5 rounded-full bg-[#4ADE80] flex items-center justify-center">
          <Check className="w-3 h-3 text-[#03070a]" strokeWidth={4} />
        </span>
      )}
    </button>
  )
}
