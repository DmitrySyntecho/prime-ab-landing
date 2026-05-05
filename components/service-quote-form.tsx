"use client"

import type React from "react"
import { useState } from "react"
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"

export interface QuestionStep {
  id: string
  question: string
  type: "single" | "multiple" | "text" | "date" | "textarea" | "scale"
  options?: string[]
  placeholder?: string
  required?: boolean
  hint?: string
  scaleMin?: number
  scaleMax?: number
  scaleMinLabel?: string
  scaleMaxLabel?: string
}

interface ServiceQuoteFormProps {
  isOpen: boolean
  onClose: () => void
  serviceName: string
  serviceQuestions: QuestionStep[]
}

// Common final questions for contact & verification
const contactQuestions: QuestionStep[] = [
  {
    id: "phone",
    question: "What's your phone number?",
    type: "text",
    placeholder: "(555) 555-5555",
    required: true,
  },
  {
    id: "name",
    question: "What's your name?",
    type: "text",
    placeholder: "Your full name",
    required: true,
  },
  {
    id: "email",
    question: "What's your email address?",
    type: "text",
    placeholder: "your@email.com",
    required: true,
  },
  {
    id: "talk_to_specialist",
    question: "Would you like to speak with a specialist?",
    type: "single",
    options: ["Yes, please call me", "Yes, schedule a video call", "No, email is fine"],
  },
]

export function ServiceQuoteForm({ isOpen, onClose, serviceName, serviceQuestions }: ServiceQuoteFormProps) {
  const router = useRouter()
  const allQuestions = [...serviceQuestions, ...contactQuestions]
  const totalSteps = allQuestions.length + 1 // +1 for confirmation

  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})

  const currentQuestion = allQuestions[currentStep]
  const progress = ((currentStep + 1) / totalSteps) * 100

  const handleSingleSelect = (option: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: option })
    setTimeout(() => {
      if (currentStep < allQuestions.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setCurrentStep(allQuestions.length) // Go to confirmation
      }
    }, 300)
  }

  const handleMultiSelect = (option: string) => {
    const current = (answers[currentQuestion.id] as string[]) || []
    if (current.includes(option)) {
      setAnswers({ ...answers, [currentQuestion.id]: current.filter((o) => o !== option) })
    } else {
      setAnswers({ ...answers, [currentQuestion.id]: [...current, option] })
    }
  }

  const handleTextInput = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value })
  }

  const handleScaleSelect = (value: number) => {
    setAnswers({ ...answers, [currentQuestion.id]: value.toString() })
    setTimeout(() => {
      if (currentStep < allQuestions.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setCurrentStep(allQuestions.length)
      }
    }, 300)
  }

  const handleNext = () => {
    if (currentStep < allQuestions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setCurrentStep(allQuestions.length) // Go to confirmation
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Here you would submit the form data
    console.log("Form submitted:", { service: serviceName, answers })
    router.push("/thank-you")
    onClose()
  }

  const handleClose = () => {
    setCurrentStep(0)
    setAnswers({})
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl mx-4">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/prime-line-av-logo-light-bg.svg"
                alt="Prime Line AV"
                width={160}
                height={60}
                className="h-8 w-auto"
              />
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Progress Bar */}
          {currentStep < allQuestions.length && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">
                  Step {currentStep + 1} of {totalSteps - 1}
                </span>
                <span className="text-[#FF5E3A] font-medium">{Math.round(progress)}% Complete</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-md overflow-hidden">
                <div
                  className="h-full bg-[#FF5E3A] rounded-md transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <p className="text-gray-500 text-sm mt-2">{serviceName} Quote</p>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          {currentStep < allQuestions.length ? (
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">{currentQuestion.question}</h2>
              
              {/* Hint text */}
              {currentQuestion.hint && (
                <p className="text-gray-500 text-sm text-center">{currentQuestion.hint}</p>
              )}

              {/* Single Select Options */}
              {currentQuestion.type === "single" && currentQuestion.options && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSingleSelect(option)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        answers[currentQuestion.id] === option
                          ? "border-[#FF5E3A] bg-[#FF5E3A]/10 text-[#FF5E3A]"
                          : "border-gray-200 hover:border-[#FF5E3A]/50 text-gray-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {/* Multiple Select Options */}
              {currentQuestion.type === "multiple" && currentQuestion.options && (
                <div className="space-y-4 mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {currentQuestion.options.map((option) => {
                      const selected = ((answers[currentQuestion.id] as string[]) || []).includes(option)
                      return (
                        <button
                          key={option}
                          onClick={() => handleMultiSelect(option)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            selected
                              ? "border-[#FF5E3A] bg-[#FF5E3A]/10 text-[#FF5E3A]"
                              : "border-gray-200 hover:border-[#FF5E3A]/50 text-gray-700"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                selected ? "border-[#FF5E3A] bg-[#FF5E3A]" : "border-gray-300"
                              }`}
                            >
                              {selected && <CheckCircle2 className="w-4 h-4 text-white" />}
                            </div>
                            {option}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                  <Button onClick={handleNext} className="w-full bg-[#FF5E3A] hover:bg-[#FF5E3A]/90 mt-4">
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}

              {/* Scale Input (1-10) */}
              {currentQuestion.type === "scale" && (
                <div className="space-y-6 mt-8">
                  <div className="flex justify-between text-sm text-gray-500 px-2">
                    <span>{currentQuestion.scaleMinLabel || "Low"}</span>
                    <span>{currentQuestion.scaleMaxLabel || "High"}</span>
                  </div>
                  <div className="grid grid-cols-10 gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <button
                        key={num}
                        onClick={() => handleScaleSelect(num)}
                        className={`aspect-square rounded-xl border-2 font-bold text-lg transition-all ${
                          answers[currentQuestion.id] === num.toString()
                            ? "border-[#FF5E3A] bg-[#FF5E3A] text-white"
                            : "border-gray-200 hover:border-[#FF5E3A]/50 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Text Input */}
              {currentQuestion.type === "text" && (
                <div className="space-y-4 mt-8">
                  <input
                    type="text"
                    value={(answers[currentQuestion.id] as string) || ""}
                    onChange={(e) => handleTextInput(e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#FF5E3A] focus:outline-none text-lg"
                  />
                  <Button
                    onClick={handleNext}
                    disabled={currentQuestion.required && !answers[currentQuestion.id]}
                    className="w-full bg-[#FF5E3A] hover:bg-[#FF5E3A]/90"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}

              {/* Date Input */}
              {currentQuestion.type === "date" && (
                <div className="space-y-4 mt-8">
                  <input
                    type="date"
                    value={(answers[currentQuestion.id] as string) || ""}
                    onChange={(e) => handleTextInput(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#FF5E3A] focus:outline-none text-lg"
                  />
                  <Button
                    onClick={handleNext}
                    disabled={currentQuestion.required && !answers[currentQuestion.id]}
                    className="w-full bg-[#FF5E3A] hover:bg-[#FF5E3A]/90"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}

              {/* Textarea Input */}
              {currentQuestion.type === "textarea" && (
                <div className="space-y-4 mt-8">
                  <textarea
                    value={(answers[currentQuestion.id] as string) || ""}
                    onChange={(e) => handleTextInput(e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    rows={4}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-[#FF5E3A] focus:outline-none text-lg resize-none"
                  />
                  <Button onClick={handleNext} className="w-full bg-[#FF5E3A] hover:bg-[#FF5E3A]/90">
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}

              {/* Back Button */}
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-700 mx-auto mt-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              )}
            </div>
          ) : (
            /* Confirmation Step */
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-md flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ready to Submit?</h2>
              <p className="text-gray-600">
                We'll review your {serviceName.toLowerCase()} requirements and get back to you within 24 hours.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">Your Quote Summary</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-gray-500">Service:</span>{" "}
                    <span className="font-medium text-gray-900">{serviceName}</span>
                  </p>
                  {answers.name && (
                    <p>
                      <span className="text-gray-500">Name:</span>{" "}
                      <span className="font-medium text-gray-900">{answers.name as string}</span>
                    </p>
                  )}
                  {answers.email && (
                    <p>
                      <span className="text-gray-500">Email:</span>{" "}
                      <span className="font-medium text-gray-900">{answers.email as string}</span>
                    </p>
                  )}
                  {answers.event_location && (
                    <p>
                      <span className="text-gray-500">Location:</span>{" "}
                      <span className="font-medium text-gray-900">{answers.event_location as string}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button onClick={handleSubmit} className="w-full bg-[#FF5E3A] hover:bg-[#FF5E3A]/90 py-6 text-lg">
                  Submit Quote Request
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <button onClick={handleBack} className="text-gray-500 hover:text-gray-700">
                  Go Back and Edit
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 px-6 py-4 text-center">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-[#FF5E3A]">127 Brands</span> requested a quote in the past 24 hours.
          </p>
        </div>
      </div>
    </div>
  )
}
