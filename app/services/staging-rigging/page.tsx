import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata = {
  title: "Staging & Rigging in Los Angeles | Prime Line AV",
  description: "Safe, professional staging and rigging for events of any size in Los Angeles.",
}

export default function StagingRiggingPage() {
  return (
    <ServicePageTemplate
      serviceName="Staging & Rigging"
      headline="Staging & Rigging in Los Angeles"
      subheadline="Safe, professional staging and rigging for events of any size."
      introText="From portable stages to complex truss structures, our staging and rigging team delivers safe, code-compliant solutions for Los Angeles events. We handle corporate presentations, concerts, fashion runways, and outdoor festivals with certified riggers and professional equipment."
      heroImage="/event-staging-rigging-truss-installation.jpg"
      whyChooseUs={[
        { title: "Safety First", description: "Certified riggers and engineers ensure safe installations." },
        { title: "Custom Staging", description: "Modular staging systems for any configuration and size." },
        { title: "Truss Systems", description: "Ground support and flown truss for lighting and audio." },
        { title: "Scenic Elements", description: "Backdrops, set pieces, and custom scenic builds." },
        { title: "Permits & Compliance", description: "We handle permits and ensure code compliance." },
        { title: "Quick Turnaround", description: "Efficient load-in and strike for tight schedules." },
      ]}
      packages={[
        {
          title: "Conference Stage Package",
          description: "Modular stage with stairs, skirting, and confidence monitors.",
          image: "/conference-stage-av-setup.jpg",
        },
        {
          title: "Runway Stage Package",
          description: "Fashion runway with seamless finish and edge lighting.",
          image: "/fashion-runway-lighting.jpg",
        },
        {
          title: "Outdoor Festival Stage",
          description: "Weather-resistant staging with full truss system.",
          image: "/outdoor-event-lighting-speakers.jpg",
        },
      ]}
    />
  )
}
