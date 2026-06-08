"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { validateEmail } from "@/lib/validation/email"
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  Briefcase,
  Gem,
  ShoppingBag,
  Trophy,
  Music,
  Layers,
  Monitor,
  Volume2,
  Lightbulb,
  Box,
  User,
  Mail,
  Building2,
  Phone,
  MapPin,
} from "lucide-react"
import type { LandingCity } from "@/lib/landing-cities"

interface LandingQuoteFormProps {
  data: LandingCity
}

const eventTypes = [
  { id: "corporate", label: "Corporate", icon: Briefcase },
  { id: "fashion", label: "Fashion", icon: Gem },
  { id: "trade-show", label: "Trade Show", icon: ShoppingBag },
  { id: "gala", label: "Gala", icon: Trophy },
  { id: "festival", label: "Festival", icon: Music },
  { id: "other", label: "Other", icon: Layers },
]

const timelineOptions = [
  { id: "2-weeks", label: "Next 2 weeks" },
  { id: "1-3-months", label: "1–3 months" },
  { id: "3-6-months", label: "3–6 months" },
  { id: "flexible", label: "Flexible TBD" },
]

const guestOptions = [
  { id: "under-100", label: "Under 100" },
  { id: "100-500", label: "100–500" },
  { id: "500-2000", label: "500–2,000" },
  { id: "2000-plus", label: "2,000+" },
]

const serviceOptions = [
  { id: "led", label: "LED Walls", icon: Monitor },
  { id: "audio", label: "Audio", icon: Volume2 },
  { id: "lighting", label: "Lighting", icon: Lightbulb },
  { id: "staging", label: "Staging", icon: Box },
  { id: "full", label: "Full Production", icon: Layers },
]

const TOTAL_STEPS = 3

interface FormData {
  eventType: string
  timeline: string
  guests: string
  services: string[]
  venue: string
  details: string
  name: string
  email: string
  company: string
  phone: string
}

const empty: FormData = {
  eventType: "",
  timeline: "",
  guests: "",
  services: [],
  venue: "",
  details: "",
  name: "",
  email: "",
  company: "",
  phone: "",
}

export function LandingQuoteForm({ data }: LandingQuoteFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>({ ...empty, venue: data.city })
  const [emailError, setEmailError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const set = <K extends keyof FormData>(k: K, v: FormData[K]) => setForm((f) => ({ ...f, [k]: v }))

  const toggleService = (id: string) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(id) ? f.services.filter((s) => s !== id) : [...f.services, id],
    }))

  const canContinue = () => {
    if (step === 1) return !!form.eventType && !!form.timeline && !!form.guests
    if (step === 2) return form.services.length > 0 && form.venue.trim().length >= 2
    if (step === 3) return form.name.trim().length >= 2 && validateEmail(form.email).isValid
    return false
  }

  const next = () => {
    if (step < TOTAL_STEPS && canContinue()) setStep(step + 1)
  }
  const back = () => step > 1 && setStep(step - 1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const emailCheck = validateEmail(form.email)
    if (!emailCheck.isValid) {
      setEmailError(emailCheck.error || "Please enter a valid email")
      return
    }
    setEmailError(null)
    setSubmitting(true)
    // No backend on this build — persist for the thank-you page + analytics, then route.
    try {
      sessionStorage.setItem("plav_quote", JSON.stringify({ ...form, city: data.city, at: Date.now() }))
    } catch {
      /* ignore storage failures */
    }
    router.push(`/lp/${data.slug}/thank-you`)
  }

  const microcopy =
    step === 1
      ? "Let's start with the basics. What are we building?"
      : step === 2
        ? "Select everything you need — your specialist will help finalize."
        : "Where should we send your custom quote and 3D render?"

  return (
    <section id="quote" className="relative py-16 md:py-24 scroll-mt-4">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-7 md:mb-9">
          <span className="ds-pill mb-4">
            <span className="dot" />
            Free Custom Quote
          </span>
          <h2 className="text-[28px] md:text-[40px] font-extrabold tracking-[-0.025em] leading-[1.08] text-white">
            Build Your <span className="ds-accent-text">Quote</span>
          </h2>
        </div>

        <div
          className="relative rounded-[22px] border border-[#FF2D6F]/20 p-5 sm:p-7 md:p-9 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(10,8,24,0.92) 0%, rgba(20,12,30,0.92) 100%)",
            boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Progress */}
          <div className="mb-5 sm:mb-7">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-white/55 text-[12px] sm:text-[13px] font-semibold tracking-[0.04em]">
                Step {step} of {TOTAL_STEPS}
              </span>
              <span className="text-white/45 text-[12px]">
                {step === 1 ? "The Basics" : step === 2 ? "The Details" : "Send the Quote"}
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(step / TOTAL_STEPS) * 100}%`,
                  background: "linear-gradient(90deg, #FF2D6F 0%, #FF5E3A 50%, #FFD24A 100%)",
                  boxShadow: "0 0 16px rgba(255,45,111,0.55)",
                }}
              />
            </div>
          </div>

          <p className="text-white/70 text-[14px] sm:text-[15px] mb-5 leading-snug">{microcopy}</p>

          <form onSubmit={handleSubmit} className="animate-fadeIn">
            {/* STEP 1 — The Basics */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <FieldLabel>Event Type</FieldLabel>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                    {eventTypes.map(({ id, label, icon: Icon }) => (
                      <Tile key={id} active={form.eventType === id} onClick={() => set("eventType", id)}>
                        <div
                          className={`w-9 h-9 rounded-[10px] grid place-items-center mb-2 transition-all ${
                            form.eventType === id
                              ? "bg-[#FF2D6F] text-white"
                              : "bg-[#FF2D6F]/14 border border-[#FF2D6F]/24 text-[#FF2D6F]"
                          }`}
                        >
                          <Icon className="w-[18px] h-[18px]" strokeWidth={1.8} />
                        </div>
                        <span className="text-[12px] sm:text-[13px] font-bold text-white">{label}</span>
                      </Tile>
                    ))}
                  </div>
                </div>

                <div>
                  <FieldLabel>When is it?</FieldLabel>
                  <RadioRow options={timelineOptions} value={form.timeline} onChange={(v) => set("timeline", v)} />
                </div>

                <div>
                  <FieldLabel>Guest Count</FieldLabel>
                  <RadioRow options={guestOptions} value={form.guests} onChange={(v) => set("guests", v)} />
                </div>
              </div>
            )}

            {/* STEP 2 — The Details */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <FieldLabel>Services</FieldLabel>
                  <p className="text-white/45 text-[12px] mb-2.5 -mt-1">Pick all that apply — multi-select.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                    {serviceOptions.map(({ id, label, icon: Icon }) => (
                      <Tile key={id} active={form.services.includes(id)} onClick={() => toggleService(id)}>
                        <div
                          className={`w-9 h-9 rounded-[10px] grid place-items-center mb-2 transition-all ${
                            form.services.includes(id)
                              ? "bg-[#FF2D6F] text-white"
                              : "bg-[#FF2D6F]/14 border border-[#FF2D6F]/24 text-[#FF2D6F]"
                          }`}
                        >
                          <Icon className="w-[18px] h-[18px]" strokeWidth={1.8} />
                        </div>
                        <span className="text-[12px] sm:text-[13px] font-semibold text-white">{label}</span>
                      </Tile>
                    ))}
                  </div>
                </div>

                <TextField
                  icon={MapPin}
                  label="Venue / City"
                  value={form.venue}
                  onChange={(v) => set("venue", v.slice(0, 100))}
                  placeholder="e.g. Los Angeles Convention Center"
                />

                <div>
                  <FieldLabel>Anything specific? <span className="text-white/35 font-normal lowercase tracking-normal">(optional)</span></FieldLabel>
                  <textarea
                    value={form.details}
                    onChange={(e) => set("details", e.target.value.slice(0, 800))}
                    rows={3}
                    placeholder="Venue restrictions, brand guidelines, must-have gear…"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white text-[14px] placeholder-white/35 focus:outline-none focus:border-[#FF2D6F]/50 transition-colors resize-none"
                  />
                </div>
              </div>
            )}

            {/* STEP 3 — Where to send */}
            {step === 3 && (
              <div className="space-y-4">
                <TextField icon={User} label="Name" required value={form.name} onChange={(v) => set("name", v.slice(0, 60))} placeholder="Jane Doe" autoComplete="name" />
                <TextField
                  icon={Mail}
                  label="Email"
                  required
                  type="email"
                  value={form.email}
                  onChange={(v) => {
                    set("email", v.trim().slice(0, 100))
                    if (emailError) setEmailError(null)
                  }}
                  placeholder="jane@brand.com"
                  autoComplete="email"
                  error={emailError ?? undefined}
                />
                <TextField icon={Building2} label="Company (optional)" value={form.company} onChange={(v) => set("company", v.slice(0, 80))} placeholder="Brand or agency" autoComplete="organization" />
                <div>
                  <TextField icon={Phone} label="Phone (optional)" type="tel" value={form.phone} onChange={(v) => set("phone", v.slice(0, 25))} placeholder="(888) 508-5001" autoComplete="tel" />
                  <p className="text-white/40 text-[11px] mt-1.5 ml-1">Only if you prefer a call back.</p>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="mt-7 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={back}
                disabled={step === 1}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.12] text-white/85 font-semibold text-[13px] backdrop-blur-md hover:bg-white/[0.08] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canContinue()}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl text-white font-extrabold text-[13px] tracking-[0.02em] transition-all disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)",
                    boxShadow: "0 12px 36px -8px rgba(255,45,111,0.55), inset 0 1px 0 rgba(255,255,255,0.30)",
                  }}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canContinue() || submitting}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-xl text-white font-extrabold text-[13px] tracking-[0.02em] transition-all disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)",
                    boxShadow: "0 12px 36px -8px rgba(255,45,111,0.55), inset 0 1px 0 rgba(255,255,255,0.30)",
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  Submit Request
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ============ PRIMITIVES ============ */

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-white/65 text-[11px] tracking-[0.08em] uppercase font-semibold mb-2.5">
      {children}
    </label>
  )
}

function Tile({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative p-3 sm:p-3.5 rounded-[14px] border text-left transition-all ${
        active ? "border-[#FF2D6F]/50 bg-[#FF2D6F]/10" : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.18]"
      }`}
    >
      {children}
      {active && (
        <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#FF2D6F] flex items-center justify-center">
          <Check className="w-3 h-3 text-white" strokeWidth={4} />
        </span>
      )}
    </button>
  )
}

function RadioRow({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
      {options.map(({ id, label }) => {
        const active = value === id
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={`px-3 py-3 rounded-xl border text-center text-[13px] font-semibold transition-all ${
              active
                ? "border-[#FF2D6F]/50 bg-[#FF2D6F]/10 text-white"
                : "border-white/[0.08] bg-white/[0.03] text-white/75 hover:border-white/[0.18]"
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

function TextField({
  icon: Icon,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  autoComplete,
  error,
}: {
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  required?: boolean
  autoComplete?: string
  error?: string
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        {Icon && (
          <span className="w-7 h-7 rounded-[8px] bg-[#FF2D6F]/12 border border-[#FF2D6F]/22 flex items-center justify-center text-[#FF2D6F]">
            <Icon className="w-3.5 h-3.5" strokeWidth={2} />
          </span>
        )}
        <label className="text-white text-[13px] font-semibold tracking-[0.02em]">
          {label}
          {required && <span className="text-[#FF2D6F] ml-1">*</span>}
        </label>
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-[14px] placeholder-white/35 focus:outline-none transition-colors ${
          error ? "border-red-500/50 focus:border-red-500/70" : "border-white/[0.10] focus:border-[#FF2D6F]/50"
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
    </div>
  )
}
