"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, translations, type TranslationKey } from "./translations"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = "preferred-language"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [isHydrated, setIsHydrated] = useState(false)

  // Load saved language preference on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
    if (saved && translations[saved]) {
      setLocaleState(saved)
    }
    setIsHydrated(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(STORAGE_KEY, newLocale)
    // Update HTML lang attribute
    document.documentElement.lang = newLocale
  }

  const t = (key: TranslationKey): string => {
    return translations[locale][key] || translations.en[key] || key
  }

  // Prevent hydration mismatch by returning English during SSR
  const value = {
    locale: isHydrated ? locale : "en",
    setLocale,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  // Return a fallback for SSR/prerendering when context is not available
  if (context === undefined) {
    return {
      locale: "en" as Locale,
      setLocale: () => {},
      t: (key: TranslationKey): string => translations.en[key] || key,
    }
  }
  return context
}

// Hook for components that need to access translations
export function useTranslation() {
  const { t, locale } = useLanguage()
  return { t, locale }
}
