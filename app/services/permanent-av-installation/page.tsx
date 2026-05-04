import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata = {
  title: "Permanent AV Installation in Los Angeles | Prime Line AV",
  description:
    "Design and installation of LED walls, audio systems, lighting, and full AV infrastructure for your venue or facility.",
}

export default function PermanentAVInstallationPage() {
  return (
    <ServicePageTemplate
      serviceName="Permanent AV Installation"
      headline="Permanent AV Installation in Los Angeles"
      subheadline="Design and installation of LED walls, audio systems, lighting, and full AV infrastructure for your venue or facility."
      introText="Beyond event rentals, we design and install permanent AV systems for venues, corporate facilities, houses of worship, and retail spaces in Los Angeles. Our team handles everything from initial consultation and system design to installation, programming, and training."
      heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC02339-H4ZqZFNC77uslZZGZ2GBN9gbU7qHJK.jpg"
      whyChooseUs={[
        { title: "Consultation", description: "Free site visits and needs assessment for your space." },
        { title: "System Design", description: "Custom AV architecture designed for your requirements." },
        { title: "Quality Equipment", description: "Commercial-grade displays, audio, and control systems." },
        {
          title: "Professional Installation",
          description: "Clean, code-compliant installations with cable management.",
        },
        { title: "Programming", description: "Custom control system programming and integration." },
        { title: "Training & Support", description: "Staff training and ongoing maintenance support." },
      ]}
      packages={[
        {
          title: "Conference Room AV Design",
          description: "Complete AV system for boardrooms and meeting spaces.",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_7779-CmRCO5WB9ETJUnTRyUVXZZnk01H8Lq.jpg",
        },
        {
          title: "Lobby LED Wall Installation",
          description: "High-impact LED display for reception areas.",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC03187-Pikho0KKrtD1HPJinQ8HZXrLhnA1zh.jpg",
        },
        {
          title: "House of Worship AV System",
          description: "Audio, video, and streaming solutions for religious facilities.",
          image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_3565-wbODzHDSOSk8fZ5H8wK8CcBM5uLWat.jpg",
        },
      ]}
    />
  )
}
