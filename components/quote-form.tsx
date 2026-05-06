"use client"

import type React from "react"
import { useEffect, useMemo, useRef, useState } from "react"
import { validateEmail } from "@/lib/validation/email"
import { validateUSPhoneNumber, formatPhoneNumber } from "@/lib/validation/phone"
import { performAntiSpamCheck, checkSubmissionTiming } from "@/lib/validation/anti-spam"
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  Calendar,
  CalendarClock,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  Sparkles,
  Layers,
  Volume2,
  Monitor,
  Lightbulb,
  Box,
  Radio,
  Video,
  PartyPopper,
  CheckCircle2,
  Briefcase,
  Mic2,
  Trophy,
  Camera,
  Music,
  Building2,
  ShoppingBag,
  Gem,
  Tag,
  MessageSquare,
  Shield,
  Search,
  ChevronDown,
  Lock,
  Home,
} from "lucide-react"

interface QuoteFormProps {
  isOpen: boolean
  onClose: () => void
  serviceName?: string
  serviceQuestions?: unknown[]
}

/* ============ DATA ============ */

const eventTypes = [
  { id: "corporate", label: "Corporate Event", icon: Briefcase },
  { id: "conference", label: "Conference", icon: Mic2 },
  { id: "trade-show", label: "Trade Show", icon: ShoppingBag },
  { id: "brand-activation", label: "Brand Activation", icon: Sparkles },
  { id: "experiential", label: "Experiential Marketing", icon: Layers },
  { id: "fashion-show", label: "Fashion Show", icon: Gem },
  { id: "festival", label: "Festival / Concert", icon: Music },
  { id: "product-launch", label: "Product Launch", icon: Trophy },
  { id: "gala", label: "Award Show / Gala", icon: Trophy },
  { id: "private", label: "Private / Wedding", icon: PartyPopper },
  { id: "studio", label: "Studio / Film", icon: Camera },
  { id: "other", label: "Other", icon: Layers },
]

const serviceOptions = [
  { id: "full-av", title: "Full AV Production", icon: Layers },
  { id: "led", title: "LED Wall / Visuals", icon: Monitor },
  { id: "audio", title: "Sound System", icon: Volume2 },
  { id: "lighting", title: "Event Lighting", icon: Lightbulb },
  { id: "staging", title: "Staging & Truss", icon: Box },
  { id: "stream", title: "Live Streaming", icon: Radio },
  { id: "video", title: "Video Production", icon: Video },
  { id: "drape", title: "Pipe & Drape", icon: Building2 },
]

interface Country {
  code: string
  dial: string
  name: string
  flag: string
  format?: string // "(###) ###-####" for US/CA
}

const countries: Country[] = [
  { code: "US", dial: "+1", name: "United States", flag: "🇺🇸", format: "(###) ###-####" },
  { code: "CA", dial: "+1", name: "Canada", flag: "🇨🇦", format: "(###) ###-####" },
  { code: "MX", dial: "+52", name: "Mexico", flag: "🇲🇽" },
  { code: "GB", dial: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "FR", dial: "+33", name: "France", flag: "🇫🇷" },
  { code: "DE", dial: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "IT", dial: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "ES", dial: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "PT", dial: "+351", name: "Portugal", flag: "🇵🇹" },
  { code: "NL", dial: "+31", name: "Netherlands", flag: "🇳🇱" },
  { code: "BE", dial: "+32", name: "Belgium", flag: "🇧🇪" },
  { code: "CH", dial: "+41", name: "Switzerland", flag: "🇨🇭" },
  { code: "AT", dial: "+43", name: "Austria", flag: "🇦🇹" },
  { code: "IE", dial: "+353", name: "Ireland", flag: "🇮🇪" },
  { code: "SE", dial: "+46", name: "Sweden", flag: "🇸🇪" },
  { code: "NO", dial: "+47", name: "Norway", flag: "🇳🇴" },
  { code: "DK", dial: "+45", name: "Denmark", flag: "🇩🇰" },
  { code: "FI", dial: "+358", name: "Finland", flag: "🇫🇮" },
  { code: "PL", dial: "+48", name: "Poland", flag: "🇵🇱" },
  { code: "CZ", dial: "+420", name: "Czechia", flag: "🇨🇿" },
  { code: "AU", dial: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "NZ", dial: "+64", name: "New Zealand", flag: "🇳🇿" },
  { code: "JP", dial: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "KR", dial: "+82", name: "South Korea", flag: "🇰🇷" },
  { code: "IN", dial: "+91", name: "India", flag: "🇮🇳" },
  { code: "BR", dial: "+55", name: "Brazil", flag: "🇧🇷" },
  { code: "AR", dial: "+54", name: "Argentina", flag: "🇦🇷" },
  { code: "ZA", dial: "+27", name: "South Africa", flag: "🇿🇦" },
  { code: "AE", dial: "+971", name: "UAE", flag: "🇦🇪" },
  { code: "SG", dial: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "IL", dial: "+972", name: "Israel", flag: "🇮🇱" },
  { code: "UA", dial: "+380", name: "Ukraine", flag: "🇺🇦" },
  { code: "RU", dial: "+7", name: "Russia", flag: "🇷🇺" },
  { code: "TR", dial: "+90", name: "Türkiye", flag: "🇹🇷" },
]

const usStates = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
]

const totalSteps = 9
const stepNames = [
  "Event Type",
  "Services",
  "Your Name",
  "Phone",
  "Email",
  "Schedule",
  "Location",
  "Notes",
  "Review",
]

interface FormData {
  eventType: string
  services: string[]
  firstName: string
  lastName: string
  phoneCountry: string
  phone: string
  hasWhatsapp: boolean
  waCountry: string
  waPhone: string
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
  honeypot: string
}

const empty: FormData = {
  eventType: "",
  services: [],
  firstName: "",
  lastName: "",
  phoneCountry: "US",
  phone: "",
  hasWhatsapp: false,
  waCountry: "US",
  waPhone: "",
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
  honeypot: "",
}

/* ============ PHONE INPUT MASKING ============ */

function formatPhone(raw: string, country: Country): string {
  const digits = raw.replace(/\D/g, "")
  if (country.format) {
    let out = ""
    let di = 0
    for (const ch of country.format) {
      if (di >= digits.length) break
      if (ch === "#") {
        out += digits[di++]
      } else {
        out += ch
      }
    }
    return out
  }
  // Generic: groups of 3-3-4 etc.
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`
  if (digits.length <= 9) return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`
  return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9, 13)}`
}

/* ============ COMPONENT ============ */

export function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>(empty)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [emailSuggestion, setEmailSuggestion] = useState<string | null>(null)
  const [phoneSuggestion, setPhoneSuggestion] = useState<string | null>(null)
  const formStartTime = useRef<number | null>(null)

  useEffect(() => {
    if (!isOpen) return
    // Track form start time for anti-spam check
    if (!formStartTime.current) {
      formStartTime.current = Date.now()
    }
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

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

  const goNext = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const goBack = () => {
    if (step > 1) setStep(step - 1)
    else onClose()
  }

  const canContinue = () => {
    if (step === 1) return !!data.eventType
    if (step === 2) return data.services.length > 0
    if (step === 3) return data.firstName.trim().length >= 2 && data.lastName.trim().length >= 2
    if (step === 4) {
      const phoneValidation = validateUSPhoneNumber(data.phone)
      const okPhone = phoneValidation.isValid
      const okWa = !data.hasWhatsapp || validateUSPhoneNumber(data.waPhone).isValid
      return okPhone && okWa
    }
    if (step === 5) {
      const emailValidation = validateEmail(data.email)
      return emailValidation.isValid
    }
    if (step === 6) return !!data.dropoffDate && !!data.dropoffTime && !!data.pickupDate && !!data.pickupTime
    if (step === 7) return data.address.trim().length >= 5 && data.city.trim() && data.state && data.zip.trim().length >= 4
    if (step === 8) return true
    if (step === 9) return data.agreeTerms
    return false
  }

  const handleSubmit = () => {
    // Anti-spam: Honeypot check
    if (data.honeypot) return

    // Anti-spam: Timing check (min 3 seconds)
    if (formStartTime.current) {
      const timingCheck = checkSubmissionTiming(formStartTime.current, 3)
      if (timingCheck.isSpam) {
        setErrors({ submit: timingCheck.reason || "Submission too fast" })
        return
      }
    }

    // Validate phone number
    const phoneValidation = validateUSPhoneNumber(data.phone)
    if (!phoneValidation.isValid) {
      setErrors((e) => ({ ...e, phone: phoneValidation.error || "Invalid phone" }))
      return
    }

    // Validate email
    const emailValidation = validateEmail(data.email)
    if (!emailValidation.isValid) {
      setErrors((e) => ({ ...e, email: emailValidation.error || "Invalid email" }))
      if (emailValidation.suggestion) {
        setEmailSuggestion(emailValidation.suggestion)
      }
      return
    }

    // Clear errors and submit
    setErrors({})
    setEmailSuggestion(null)
    setPhoneSuggestion(null)
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6"
      style={{ background: "rgba(3,7,10,0.85)", backdropFilter: "blur(8px)" }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[96vh] sm:max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-[24px] border border-[#FF2D6F]/22 backdrop-blur-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,8,24,0.96) 0%, rgba(20,12,30,0.96) 100%)",
          boxShadow:
            "0 40px 80px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Decorative glow */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-[24px]"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 0%, rgba(255,45,111,0.10) 0%, transparent 70%), radial-gradient(ellipse 60% 60% at 70% 100%, rgba(255,210,74,0.06) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <button
          onClick={reset}
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-[10px] bg-white/[0.05] border border-white/[0.10] hover:bg-white/[0.10] hover:border-white/[0.20] flex items-center justify-center text-white/65 hover:text-white transition-all"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        <div className="relative z-[1] p-4 sm:p-7 md:p-9">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="mb-3.5 sm:mb-5">
                <span
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-md text-[9px] sm:text-[11px] font-bold tracking-[0.14em] sm:tracking-[0.16em] uppercase mb-2 sm:mb-3"
                  style={{
                    background: "rgba(255,45,111,0.10)",
                    border: "1px solid rgba(255,45,111,0.22)",
                    color: "#FF2D6F",
                  }}
                >
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse-ds" />
                  Get a Free Quote
                </span>
                <h2 className="text-[18px] sm:text-[24px] md:text-[28px] font-extrabold tracking-[-0.025em] leading-[1.2] text-white pr-8">
                  {stepCopy(step)}
                </h2>
                <p className="text-white/50 text-[11px] sm:text-[12px] mt-1 sm:mt-1.5 tracking-[0.02em] sm:tracking-[0.04em]">
                  Step {step}/{totalSteps} ·{" "}
                  <span className="font-semibold text-white/65 tracking-normal">
                    {stepNames[step - 1]}
                  </span>
                </p>
              </div>

              {/* Progress bar */}
              <div className="mb-4 sm:mb-7 h-[3px] sm:h-1 w-full rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${(step / totalSteps) * 100}%`,
                    background: "linear-gradient(90deg, #FF2D6F 0%, #FF5E3A 50%, #FFD24A 100%)",
                    boxShadow: "0 0 16px rgba(255,45,111,0.55)",
                  }}
                />
              </div>

              {/* Step body */}
              <div className="animate-fadeIn">
                {step === 1 && <Step1 data={data} update={update} goNext={goNext} />}
                {step === 2 && <Step2 data={data} toggleService={toggleService} />}
                {step === 3 && <Step3 data={data} update={update} />}
              {step === 4 && <Step4 data={data} update={update} errors={errors} phoneSuggestion={phoneSuggestion} />}
              {step === 5 && <Step5 data={data} update={update} errors={errors} emailSuggestion={emailSuggestion} />}
                {step === 6 && <Step6 data={data} update={update} />}
                {step === 7 && <Step7 data={data} update={update} />}
                {step === 8 && <Step8 data={data} update={update} />}
                {step === 9 && <Step9 data={data} update={update} />}
              </div>

              {/* Footer actions */}
              <div className="mt-5 sm:mt-7 flex items-center justify-between gap-2.5">
                <button
                  onClick={goBack}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/[0.05] border border-white/[0.12] text-white/85 font-semibold text-[12px] sm:text-[13px] backdrop-blur-md hover:bg-white/[0.08] transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {step === 1 ? "Cancel" : "Back"}
                </button>

                {step < totalSteps ? (
                  <button
                    onClick={goNext}
                    disabled={!canContinue()}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-white font-extrabold text-[12px] sm:text-[13px] tracking-[0.02em] transition-all disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:-translate-y-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)",
                      boxShadow:
                        "0 12px 36px -8px rgba(255,45,111,0.55), inset 0 1px 0 rgba(255,255,255,0.30)",
                    }}
                  >
                    Continue
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canContinue()}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-white font-extrabold text-[12px] sm:text-[13px] tracking-[0.02em] transition-all disabled:opacity-40 disabled:cursor-not-allowed enabled:hover:-translate-y-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)",
                      boxShadow:
                        "0 12px 36px -8px rgba(255,45,111,0.55), inset 0 1px 0 rgba(255,255,255,0.30)",
                    }}
                  >
                    Submit
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                )}
              </div>

              {/* Honeypot — bots fill this, humans don't see it */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  left: -9999,
                  top: -9999,
                  width: 1,
                  height: 1,
                  overflow: "hidden",
                }}
              >
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={data.honeypot}
                  onChange={(e) => update("honeypot", e.target.value)}
                />
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

function stepCopy(step: number) {
  switch (step) {
    case 1:
      return "What kind of event are you planning?"
    case 2:
      return "Which services do you need?"
    case 3:
      return "What's your name?"
    case 4:
      return "How can we reach you?"
    case 5:
      return "Where should we send the quote?"
    case 6:
      return "When is your event?"
    case 7:
      return "Where's the event happening?"
    case 8:
      return "Anything else we should know?"
    case 9:
      return "Review & submit your request"
    default:
      return ""
  }
}

/* ============ STEPS ============ */

function Step1({
  data,
  update,
  goNext,
}: {
  data: FormData
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void
  goNext: () => void
}) {
  const pick = (id: string) => {
    update("eventType", id)
    setTimeout(goNext, 220) // small delay so the user sees their selection highlight
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
      {eventTypes.map(({ id, label, icon: Icon }) => {
        const active = data.eventType === id
        return (
          <button
            key={id}
            type="button"
            onClick={() => pick(id)}
            className={`group relative p-2.5 sm:p-4 rounded-[12px] sm:rounded-[14px] border text-left transition-all ${
              active
                ? "border-[#FF2D6F]/50 bg-[#FF2D6F]/10"
                : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.18]"
            }`}
          >
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-[8px] sm:rounded-[10px] flex items-center justify-center mb-1.5 sm:mb-2.5 transition-all ${
                active
                  ? "bg-[#FF2D6F] text-white"
                  : "bg-[#FF2D6F]/14 border border-[#FF2D6F]/24 text-[#FF2D6F]"
              }`}
            >
              <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.8} />
            </div>
            <div className="text-[11px] sm:text-[13px] font-bold text-white leading-tight">{label}</div>
            {active && (
              <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#FF2D6F] flex items-center justify-center">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" strokeWidth={4} />
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

function Step2({
  data,
  toggleService,
}: {
  data: FormData
  toggleService: (id: string) => void
}) {
  return (
    <>
      <p className="text-white/55 text-[12px] sm:text-[13px] mb-2.5 sm:mb-3">Pick all that apply — multi-select.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
        {serviceOptions.map(({ id, title, icon: Icon }) => {
          const active = data.services.includes(id)
          return (
            <button
              key={id}
              type="button"
              onClick={() => toggleService(id)}
              className={`group relative p-2.5 sm:p-3.5 rounded-[12px] sm:rounded-[14px] border text-left transition-all ${
                active
                  ? "border-[#FF2D6F]/50 bg-[#FF2D6F]/10"
                  : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.18]"
              }`}
            >
              <div
                className={`w-7 h-7 sm:w-9 sm:h-9 rounded-[8px] sm:rounded-[10px] flex items-center justify-center mb-1.5 sm:mb-2 transition-all ${
                  active
                    ? "bg-[#FF2D6F] text-white"
                    : "bg-[#FF2D6F]/14 border border-[#FF2D6F]/24 text-[#FF2D6F]"
                }`}
              >
                <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.8} />
              </div>
              <div className="text-[11px] sm:text-[12px] font-semibold text-white leading-tight">{title}</div>
              {active && (
                <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-4 h-4 rounded-full bg-[#FF2D6F] flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />
                </span>
              )}
            </button>
          )
        })}
      </div>
    </>
  )
}

function Step3({
  data,
  update,
}: {
  data: FormData
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void
}) {
  return (
    <div className="space-y-4">
      <Field
        icon={User}
        label="First Name"
        value={data.firstName}
        onChange={(v) => update("firstName", v.replace(/[^\p{L}\s'-]/gu, "").slice(0, 40))}
        placeholder="Jane"
        autoComplete="given-name"
        autoFocus
        secured
      />
      <Field
        icon={User}
        label="Last Name"
        value={data.lastName}
        onChange={(v) => update("lastName", v.replace(/[^\p{L}\s'-]/gu, "").slice(0, 40))}
        placeholder="Doe"
        autoComplete="family-name"
        secured
      />
      <LegalNote />
    </div>
  )
}

function Step4({
  data,
  update,
  errors,
  phoneSuggestion,
}: {
  data: FormData
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void
  errors: Record<string, string>
  phoneSuggestion: string | null
}) {
  return (
    <div className="space-y-4">
      <PhoneInput
        label="Phone Number"
        countryCode={data.phoneCountry}
        onCountryChange={(c) => update("phoneCountry", c)}
        value={data.phone}
        onChange={(v) => update("phone", v)}
        autoComplete="tel"
        secured
        error={errors.phone}
      />

      {/* WhatsApp toggle — OFF by default */}
      <div
        className="flex items-center gap-3 p-4 rounded-[14px] border transition-colors"
        style={{
          background: data.hasWhatsapp ? "rgba(37,211,102,0.08)" : "rgba(255,255,255,0.03)",
          border: data.hasWhatsapp
            ? "1px solid rgba(37,211,102,0.30)"
            : "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <span
          className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
          style={{
            background: data.hasWhatsapp ? "rgba(37,211,102,0.20)" : "rgba(255,255,255,0.05)",
            color: data.hasWhatsapp ? "#25D366" : "rgba(255,255,255,0.45)",
            transition: "all 0.25s",
          }}
        >
          <WhatsAppIcon className="w-5 h-5" />
        </span>
        <div className="flex-1">
          <div className="text-white text-[14px] font-bold">Available on WhatsApp?</div>
          <div className="text-white/50 text-[12px]">
            For quick coordination during your event.
          </div>
        </div>
        <Toggle
          value={data.hasWhatsapp}
          onChange={(v) => {
            update("hasWhatsapp", v)
            // when turning ON for the first time, prefill country from phone
            if (v && !data.waPhone) update("waCountry", data.phoneCountry)
          }}
        />
      </div>

      {data.hasWhatsapp && (
        <PhoneInput
          label="WhatsApp Number"
          accentIcon={WhatsAppIcon}
          countryCode={data.waCountry}
          onCountryChange={(c) => update("waCountry", c)}
          value={data.waPhone}
          onChange={(v) => update("waPhone", v)}
          accentColor="#25D366"
          hint="Same as phone? Just retype it here so we know it's confirmed for WhatsApp."
          secured
          error={errors.waPhone}
        />
      )}

      <LegalNote />
    </div>
  )
}

function Step5({
  data,
  update,
  errors,
  emailSuggestion,
}: {
  data: FormData
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void
  errors: Record<string, string>
  emailSuggestion: string | null
}) {
  return (
    <div className="space-y-4">
      <div>
        <Field
          icon={Mail}
          label="Email Address"
          type="email"
          value={data.email}
          onChange={(v) => update("email", v.trim().slice(0, 100))}
          placeholder="jane@brand.com"
          autoComplete="email"
          autoFocus
          secured
          error={errors.email}
        />
        {emailSuggestion && (
          <div className="mt-2 p-3 rounded-[12px] bg-blue-500/10 border border-blue-500/30 text-sm">
            <p className="text-blue-100 mb-2">Did you mean?</p>
            <button
              type="button"
              onClick={() => update("email", emailSuggestion)}
              className="text-blue-300 hover:text-blue-200 font-semibold underline text-left"
            >
              {emailSuggestion}
            </button>
          </div>
        )}
      </div>
      <LegalNote />
    </div>
  )
}

function Step6({
  data,
  update,
}: {
  data: FormData
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void
}) {
  const today = new Date().toISOString().split("T")[0]
  return (
    <div className="space-y-5">
      <div>
        <Label icon={Calendar}>Drop-Off</Label>
        <div className="grid grid-cols-2 gap-3">
          <DateField
            label="Date"
            value={data.dropoffDate}
            onChange={(v) => update("dropoffDate", v)}
            min={today}
          />
          <TimeField
            label="Time"
            value={data.dropoffTime}
            onChange={(v) => update("dropoffTime", v)}
          />
        </div>
      </div>

      <div>
        <Label icon={CalendarClock}>Pick-Up</Label>
        <div className="grid grid-cols-2 gap-3">
          <DateField
            label="Date"
            value={data.pickupDate}
            onChange={(v) => update("pickupDate", v)}
            min={data.dropoffDate || today}
          />
          <TimeField
            label="Time"
            value={data.pickupTime}
            onChange={(v) => update("pickupTime", v)}
          />
        </div>
      </div>
    </div>
  )
}

function Step7({
  data,
  update,
}: {
  data: FormData
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void
}) {
  const [zipLookup, setZipLookup] = useState<"idle" | "loading" | "ok" | "fail">("idle")
  const lastZipRef = useRef<string>("")

  // Debounced US ZIP -> city/state lookup (zippopotam.us, no auth)
  useEffect(() => {
    const zip = data.zip.trim()
    if (!/^\d{5}$/.test(zip)) {
      if (zipLookup !== "idle") setZipLookup("idle")
      lastZipRef.current = ""
      return
    }
    if (zip === lastZipRef.current) return
    lastZipRef.current = zip

    const timer = setTimeout(async () => {
      setZipLookup("loading")
      try {
        const res = await fetch(`https://api.zippopotam.us/us/${zip}`)
        if (!res.ok) throw new Error("not found")
        const json = (await res.json()) as {
          places?: Array<{ "place name"?: string; "state abbreviation"?: string }>
        }
        const place = json.places?.[0]
        const city = place?.["place name"] || ""
        const stateAbbr = place?.["state abbreviation"] || ""
        if (city && !data.city.trim()) update("city", city)
        else if (city && data.city !== city) update("city", city)
        if (stateAbbr) update("state", stateAbbr)
        setZipLookup("ok")
      } catch {
        setZipLookup("fail")
      }
    }, 350)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.zip])

  return (
    <div className="space-y-4">
      <Field
        icon={Home}
        label="Street Address (incl. Apt / Suite)"
        value={data.address}
        onChange={(v) => update("address", v.slice(0, 120))}
        placeholder="123 Main St, Suite 200"
        autoComplete="street-address"
        autoFocus
        secured
      />
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_120px_140px] gap-3">
        <Field
          label="City"
          value={data.city}
          onChange={(v) => update("city", v.replace(/[^\p{L}\s.'-]/gu, "").slice(0, 60))}
          placeholder="Los Angeles"
          autoComplete="address-level2"
          secured
        />
        <SelectField
          label="State"
          value={data.state}
          onChange={(v) => update("state", v)}
          options={usStates}
          placeholder="—"
        />
        <ZipField
          value={data.zip}
          onChange={(v) => update("zip", v.replace(/[^0-9]/g, "").slice(0, 5))}
          status={zipLookup}
        />
      </div>
      {zipLookup === "fail" && (
        <p className="text-amber-300/80 text-[11px] -mt-1.5 ml-1">
          Couldn&apos;t find that ZIP — please fill city &amp; state manually.
        </p>
      )}
      <LegalNote />
    </div>
  )
}

function ZipField({
  value,
  onChange,
  status,
  secured,
}: {
  value: string
  onChange: (v: string) => void
  status: "idle" | "loading" | "ok" | "fail"
  secured?: boolean
}) {
  return (
    <div>
      <div className="flex items-center mb-2">
        <label className="block text-white/65 text-[11px] tracking-[0.06em] uppercase font-semibold">
          ZIP Code
        </label>
        {secured && <SecuredBadge />}
      </div>
      <div className="relative">
        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="90001"
          autoComplete="postal-code"
          maxLength={5}
          className="w-full px-3.5 py-3 pr-9 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white text-[14px] placeholder-white/35 focus:outline-none focus:border-[#FF2D6F]/50 transition-colors font-mono tabular-nums"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-4 h-4">
          {status === "loading" && (
            <span
              className="w-3.5 h-3.5 rounded-full border-2 border-[#FF2D6F]/30 border-t-[#FF2D6F] animate-spin"
              aria-label="Looking up ZIP"
            />
          )}
          {status === "ok" && <Check className="w-4 h-4 text-[#25D366]" strokeWidth={3} />}
        </span>
      </div>
    </div>
  )
}

function Step8({
  data,
  update,
}: {
  data: FormData
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void
}) {
  return (
    <div className="space-y-4">
      <div>
        <Label icon={MessageSquare}>Notes (optional)</Label>
        <textarea
          value={data.message}
          onChange={(e) => update("message", e.target.value.slice(0, 800))}
          rows={4}
          maxLength={800}
          placeholder="Anything specific — venue restrictions, brand guidelines, expected guests…"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white text-[14px] placeholder-white/35 focus:outline-none focus:border-[#FF2D6F]/50 transition-colors resize-none"
        />
      </div>
      <div>
        <Label icon={Tag}>Promo Code (optional)</Label>
        <input
          type="text"
          value={data.promoCode}
          onChange={(e) => update("promoCode", e.target.value.replace(/[^A-Za-z0-9-]/g, "").slice(0, 20).toUpperCase())}
          placeholder="EARLYBIRD"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white text-[14px] placeholder-white/35 focus:outline-none focus:border-[#FF2D6F]/50 transition-colors uppercase tracking-[0.06em]"
        />
      </div>
    </div>
  )
}

function Step9({
  data,
  update,
}: {
  data: FormData
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void
}) {
  const country = countries.find((c) => c.code === data.phoneCountry)!
  const waCountry = countries.find((c) => c.code === data.waCountry)!
  const services = data.services
    .map((id) => serviceOptions.find((o) => o.id === id)?.title)
    .filter(Boolean)
    .join(", ")
  const eventLabel = eventTypes.find((e) => e.id === data.eventType)?.label || ""

  return (
    <div className="space-y-5">
      <p className="text-white/55 text-[13px]">Double-check everything below.</p>

      <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] p-5 space-y-2">
        {summaryRow("Event Type", eventLabel)}
        {summaryRow("Services", services)}
        {summaryRow("Name", `${data.firstName} ${data.lastName}`.trim())}
        {summaryRow("Phone", `${country.dial} ${formatPhone(data.phone, country)}`)}
        {data.hasWhatsapp &&
          summaryRow(
            "WhatsApp",
            `${waCountry.dial} ${formatPhone(data.waPhone, waCountry)}`,
          )}
        {summaryRow("Email", data.email)}
        {summaryRow("Drop-Off", `${formatDate(data.dropoffDate)} · ${formatTime(data.dropoffTime)}`)}
        {summaryRow("Pick-Up", `${formatDate(data.pickupDate)} · ${formatTime(data.pickupTime)}`)}
        {summaryRow(
          "Address",
          `${data.address}, ${data.city}, ${data.state} ${data.zip}`.replace(/(^,\s|,\s$)/g, ""),
        )}
        {data.message && summaryRow("Notes", data.message)}
        {data.promoCode && summaryRow("Promo", data.promoCode)}
      </div>

      <label className="flex items-start gap-3 cursor-pointer group">
        <span
          className={`mt-0.5 w-5 h-5 rounded-md flex-shrink-0 flex items-center justify-center transition-all ${
            data.agreeTerms
              ? "bg-[#FF2D6F] border border-[#FF2D6F]"
              : "bg-white/[0.04] border border-white/[0.18] group-hover:border-white/[0.30]"
          }`}
        >
          {data.agreeTerms && <Check className="w-3 h-3 text-white" strokeWidth={4} />}
        </span>
        <input
          type="checkbox"
          checked={data.agreeTerms}
          onChange={(e) => update("agreeTerms", e.target.checked)}
          className="sr-only"
        />
        <span className="text-white/55 text-[12px] leading-[1.6]">
          I agree that Prime Line AV may contact me regarding this request via phone, email, SMS or WhatsApp. My
          information is processed solely to prepare and execute the quote and will <b className="text-white/85">never
          be shared with third parties</b>. By submitting I accept the Privacy Policy &amp; Terms.
        </span>
      </label>
    </div>
  )
}

function summaryRow(label: string, value: string) {
  return (
    <div
      key={label}
      className="flex items-start justify-between gap-4 py-2 border-b border-white/[0.06] last:border-0"
    >
      <span className="text-white/45 text-[11px] tracking-[0.06em] uppercase font-semibold flex-shrink-0">
        {label}
      </span>
      <span className="text-white text-[13px] text-right break-words">{value || "—"}</span>
    </div>
  )
}

function formatDate(d: string) {
  if (!d) return ""
  const date = new Date(d + "T12:00:00")
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

function formatTime(t: string) {
  if (!t) return ""
  const [h, m] = t.split(":").map(Number)
  const ampm = h >= 12 ? "PM" : "AM"
  const h12 = h % 12 || 12
  return `${h12}:${String(m).padStart(2, "0")} ${ampm}`
}

/* ============ SUCCESS ============ */

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center py-8">
      <div
        className="w-20 h-20 rounded-full bg-[#FF2D6F]/15 border border-[#FF2D6F]/30 flex items-center justify-center mx-auto mb-6"
        style={{ boxShadow: "0 0 40px rgba(255,45,111,0.35)" }}
      >
        <CheckCircle2 className="w-10 h-10 text-[#FF2D6F]" strokeWidth={2} />
      </div>
      <h2 className="text-[26px] sm:text-[32px] font-extrabold tracking-[-0.025em] leading-[1.18] text-white mb-3">
        Request <span style={{
          background: "linear-gradient(135deg, #FF2D6F 0%, #FFD24A 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontStyle: "italic",
          paddingRight: "0.18em",
        }}>received.</span>
      </h2>
      <p className="text-white/60 text-[14px] max-w-md mx-auto mb-6">
        Our team will reach out within hours via your preferred channel with a custom quote and 3D render.
      </p>
      <button
        onClick={onClose}
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-extrabold text-[14px] tracking-[0.02em] transition-all hover:-translate-y-0.5"
        style={{
          background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)",
          boxShadow: "0 12px 36px -8px rgba(255,45,111,0.55), inset 0 1px 0 rgba(255,255,255,0.30)",
        }}
      >
        Done
      </button>
    </div>
  )
}

/* ============ PRIMITIVES ============ */

function Label({
  children,
  icon: Icon,
  secured,
}: {
  children: React.ReactNode
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>
  secured?: boolean
}) {
  return (
    <div className="flex items-center gap-2 mb-2.5">
      {Icon && (
        <span className="w-7 h-7 rounded-[8px] bg-[#FF2D6F]/12 border border-[#FF2D6F]/22 flex items-center justify-center text-[#FF2D6F]">
          <Icon className="w-3.5 h-3.5" strokeWidth={2} />
        </span>
      )}
      <span className="text-white text-[13px] font-semibold tracking-[0.02em]">{children}</span>
      {secured && <SecuredBadge />}
    </div>
  )
}

function SecuredBadge() {
  return (
    <span
      className="ml-auto inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-[0.14em] uppercase"
      style={{
        background: "rgba(37,211,102,0.10)",
        border: "1px solid rgba(37,211,102,0.28)",
        color: "#25D366",
      }}
      title="Encrypted in transit. Stored securely. Never sold or shared."
    >
      <Shield className="w-2.5 h-2.5" strokeWidth={2.5} />
      Secured
    </span>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon: Icon,
  autoComplete,
  autoFocus,
  secured,
  error,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>
  autoComplete?: string
  autoFocus?: boolean
  secured?: boolean
  error?: string
}) {
  return (
    <div>
      {Icon ? (
        <Label icon={Icon} secured={secured}>{label}</Label>
      ) : (
        <div className="flex items-center mb-2">
          <label className="block text-white/65 text-[11px] tracking-[0.06em] uppercase font-semibold">
            {label}
          </label>
          {secured && <SecuredBadge />}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        spellCheck={false}
        className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-[14px] placeholder-white/35 focus:outline-none transition-colors ${
          error
            ? "border-red-500/50 focus:border-red-500/70"
            : "border-white/[0.10] focus:border-[#FF2D6F]/50"
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
    </div>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
  secured,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder: string
  secured?: boolean
}) {
  return (
    <div>
      <div className="flex items-center mb-2">
        <label className="block text-white/65 text-[11px] tracking-[0.06em] uppercase font-semibold">
          {label}
        </label>
        {secured && <SecuredBadge />}
      </div>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none px-4 py-3 pr-10 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white text-[14px] focus:outline-none focus:border-[#FF2D6F]/50 transition-colors cursor-pointer"
        >
          <option value="" disabled className="bg-[#0a0818] text-white/45">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-[#0a0818] text-white">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
      </div>
    </div>
  )
}

function DateField({
  label,
  value,
  onChange,
  min,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  min?: string
}) {
  const ref = useRef<HTMLInputElement>(null)
  const openPicker = () => {
    const el = ref.current as HTMLInputElement & { showPicker?: () => void }
    if (el?.showPicker) {
      try {
        el.showPicker()
      } catch {
        el.focus()
      }
    } else {
      el?.focus()
    }
  }
  return (
    <div>
      <label className="flex items-center gap-1.5 text-white/65 text-[11px] tracking-[0.06em] uppercase font-semibold mb-2">
        <Calendar className="w-3 h-3 text-[#FF2D6F]" />
        {label}
      </label>
      <input
        ref={ref}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onClick={openPicker}
        onFocus={openPicker}
        min={min}
        className="ios-picker w-full px-3.5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white text-[14px] focus:outline-none focus:border-[#FF2D6F]/50 transition-colors cursor-pointer"
      />
    </div>
  )
}

function TimeField({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (v: string) => void
}) {
  const ref = useRef<HTMLInputElement>(null)
  const openPicker = () => {
    const el = ref.current as HTMLInputElement & { showPicker?: () => void }
    if (el?.showPicker) {
      try {
        el.showPicker()
      } catch {
        el.focus()
      }
    } else {
      el?.focus()
    }
  }
  return (
    <div>
      <label className="flex items-center gap-1.5 text-white/65 text-[11px] tracking-[0.06em] uppercase font-semibold mb-2">
        <Clock className="w-3 h-3 text-[#FF2D6F]" />
        {label}
      </label>
      <input
        ref={ref}
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onClick={openPicker}
        onFocus={openPicker}
        className="ios-picker w-full px-3.5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white text-[14px] focus:outline-none focus:border-[#FF2D6F]/50 transition-colors cursor-pointer"
      />
    </div>
  )
}

function CountryFlag({ code, size = 22 }: { code: string; size?: number }) {
  // SVG flags via flagcdn — render reliably on Windows where emoji flags aren't supported
  const lower = code.toLowerCase()
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={`https://flagcdn.com/${size * 2}x${Math.round(size * 1.5)}/${lower}.png`}
      srcSet={`https://flagcdn.com/${size * 2}x${Math.round(size * 1.5)}/${lower}.png 1x, https://flagcdn.com/${size * 4}x${Math.round(size * 3)}/${lower}.png 2x`}
      width={size}
      height={Math.round(size * 0.75)}
      alt=""
      loading="lazy"
      className="rounded-[3px] object-cover flex-shrink-0"
      style={{ display: "inline-block", verticalAlign: "middle" }}
      onError={(e) => {
        // fallback if CDN unreachable: hide image, show letter code
        const img = e.currentTarget
        img.style.display = "none"
        const next = img.nextElementSibling as HTMLElement | null
        if (next) next.style.display = "inline-flex"
      }}
    />
  )
}

function PhoneInput({
  label,
  countryCode,
  onCountryChange,
  value,
  onChange,
  autoComplete,
  accentIcon: AccentIcon = Phone,
  accentColor = "#FF2D6F",
  hint,
  secured,
  error,
}: {
  label: string
  countryCode: string
  onCountryChange: (c: string) => void
  value: string
  onChange: (v: string) => void
  autoComplete?: string
  accentIcon?: React.ComponentType<{ className?: string }>
  accentColor?: string
  hint?: string
  secured?: boolean
  error?: string
}) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")
  const country = countries.find((c) => c.code === countryCode) || countries[0]
  const filtered = useMemo(
    () =>
      countries.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search) ||
          c.code.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  )
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [open])

  const handlePhone = (raw: string) => {
    const digits = raw.replace(/\D/g, "").slice(0, 15)
    onChange(digits)
  }

  const focusBorder = `${accentColor}80`

  return (
    <div ref={ref}>
      <Label icon={AccentIcon as React.ComponentType<{ className?: string; strokeWidth?: number }>} secured={secured}>{label}</Label>
      <div className="flex gap-2 relative">
        {/* Country selector — flag SVG + dial */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 px-3 py-3 rounded-xl bg-white/[0.04] border border-white/[0.10] text-white text-[14px] hover:bg-white/[0.06] transition-colors flex-shrink-0"
        >
          <CountryFlag code={country.code} size={22} />
          <span
            className="hidden font-mono font-bold text-[10px] text-white/65 tracking-wider"
            style={{ display: "none" }}
          >
            {country.code}
          </span>
          <span className="font-mono font-bold text-[13px] text-white/85">{country.dial}</span>
          <ChevronDown className="w-3.5 h-3.5 text-white/40" />
        </button>

        {/* Phone field */}
        <input
          type="tel"
          inputMode="numeric"
          value={formatPhone(value, country)}
          onChange={(e) => handlePhone(e.target.value)}
          placeholder={country.format ? country.format.replace(/#/g, "•") : "Phone number"}
          autoComplete={autoComplete}
          className={`flex-1 min-w-0 px-4 py-3 rounded-xl bg-white/[0.04] border text-white text-[14px] placeholder-white/35 focus:outline-none transition-colors font-mono ${
            error ? "border-red-500/50" : "border-white/[0.10]"
          }`}
          onFocus={(e) => (e.currentTarget.style.borderColor = error ? "rgba(239, 68, 68, 0.7)" : focusBorder)}
          onBlur={(e) => (e.currentTarget.style.borderColor = error ? "rgba(239, 68, 68, 0.5)" : "rgba(255,255,255,0.10)")}
        />

        {/* Country dropdown */}
        {open && (
          <div
            className="absolute top-full left-0 mt-2 w-full max-w-md max-h-[280px] overflow-y-auto rounded-xl border border-white/[0.10] z-30"
            style={{
              background: "rgba(10,8,24,0.98)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 24px 48px -12px rgba(0,0,0,0.7)",
            }}
          >
            <div className="sticky top-0 z-10 p-2 bg-[rgba(10,8,24,0.98)] border-b border-white/[0.08]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search country or code…"
                  autoFocus
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.10] text-white text-[13px] placeholder-white/35 focus:outline-none focus:border-[#FF2D6F]/40"
                />
              </div>
            </div>
            <div className="py-1">
              {filtered.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => {
                    onCountryChange(c.code)
                    setOpen(false)
                    setSearch("")
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-white/[0.06] transition-colors ${
                    c.code === country.code ? "bg-[#FF2D6F]/10" : ""
                  }`}
                >
                  <CountryFlag code={c.code} size={22} />
                  <span className="text-white text-[13px] flex-1 truncate">{c.name}</span>
                  <span className="font-mono font-bold text-[12px] text-white/65">{c.dial}</span>
                </button>
              ))}
              {filtered.length === 0 && (
                <div className="px-3 py-4 text-center text-white/45 text-[12px]">No countries found</div>
              )}
            </div>
          </div>
        )}
      </div>
      {error ? (
        <p className="text-red-400 text-[11px] mt-1.5">{error}</p>
      ) : (
        hint && <p className="text-white/40 text-[11px] mt-1.5 leading-snug">{hint}</p>
      )}
    </div>
  )
}

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!value)}
      className={`relative w-12 h-7 rounded-full transition-colors flex-shrink-0 ${
        value ? "bg-[#25D366]" : "bg-white/[0.10]"
      }`}
      aria-pressed={value}
    >
      <span
        className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-all ${
          value ? "left-[22px]" : "left-0.5"
        }`}
      />
    </button>
  )
}

function LegalNote() {
  return (
    <div
      className="flex items-start gap-2.5 p-3 rounded-xl"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Lock className="w-4 h-4 text-[#FF2D6F] flex-shrink-0 mt-0.5" strokeWidth={2.2} />
      <p className="text-white/55 text-[11px] leading-[1.55]">
        Your details are used only to prepare your quote and coordinate the booking — Prime Line AV will{" "}
        <b className="text-white/80">never sell or share your data with third parties</b>. Stored securely; you may
        request deletion any time.
      </p>
    </div>
  )
}

/* ============ ICONS ============ */

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.967-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
