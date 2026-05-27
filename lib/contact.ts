// Single source of truth for contact info.
// Set NEXT_PUBLIC_PHONE in Netlify env vars (format: "(305) 901-7144").
// Set NEXT_PUBLIC_WHATSAPP in Netlify env vars (digits only, e.g. "15612202555").
const raw = process.env.NEXT_PUBLIC_PHONE ?? "(305) 901-7144"
const digits = raw.replace(/\D/g, "") // "3059017144"

const waDigits = process.env.NEXT_PUBLIC_WHATSAPP ?? "15612202555"

export const PHONE_DISPLAY = raw                            // "(305) 901-7144"
export const PHONE_TEL = `tel:${digits}`                    // "tel:3059017144"
export const PHONE_TEL_INTL = `tel:+1${digits}`             // "tel:+13059017144"
export const WHATSAPP_HREF = `https://wa.me/${waDigits}`    // "https://wa.me/15612202555"
