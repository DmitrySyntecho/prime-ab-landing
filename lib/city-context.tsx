"use client"

import { createContext, useContext } from "react"
import type React from "react"

const CityContext = createContext<string>("Los Angeles")

export function CityProvider({
  city,
  children,
}: {
  city: string
  children: React.ReactNode
}) {
  return <CityContext.Provider value={city}>{children}</CityContext.Provider>
}

export function useCity(): string {
  return useContext(CityContext)
}
