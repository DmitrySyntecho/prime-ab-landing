// Single source of truth for contact info.
// Set NEXT_PUBLIC_PHONE in Netlify env vars (format: "(305) 901-7144").
const raw = process.env.NEXT_PUBLIC_PHONE ?? "(305) 901-7144"
const digits = raw.replace(/\D/g, "") // "3059017144"

export const PHONE_DISPLAY = raw                         // "(305) 901-7144"
export const PHONE_TEL = `tel:${digits}`                 // "tel:3059017144"
export const PHONE_TEL_INTL = `tel:+1${digits}`          // "tel:+13059017144"
export const WHATSAPP_HREF = `https://wa.me/1${digits}`  // "https://wa.me/13059017144"
