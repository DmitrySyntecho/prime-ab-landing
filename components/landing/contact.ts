/**
 * Contact details for the A/B landing pages.
 *
 * The Call CTA uses the dedicated landing number requested in the brief:
 * (888) 508-5001. WhatsApp links to the WhatsApp Business number with a
 * pre-filled message (the brief didn't specify a separate WhatsApp number, so
 * we reuse Prime Line's live WhatsApp line — swap WHATSAPP_NUMBER here if the
 * landing gets its own number).
 */
export const LANDING_PHONE_DISPLAY = "(888) 508-5001"
export const LANDING_PHONE_TEL = "+18885085001"

// Prime Line's live WhatsApp Business number (digits only, with country code).
export const WHATSAPP_NUMBER = "17869338488"

/** Build a wa.me deep link with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Prime Line! I'm planning an event and would like a custom AV quote."

export const WHATSAPP_VENUE_MESSAGE =
  "Hi Prime Line! I just requested a quote. Here are some photos/videos of my venue to help build the 3D render:"
